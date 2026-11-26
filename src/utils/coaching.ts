export const WHATSAPP_NUMBER = '212771587686';
export const WHATSAPP_DISPLAY_INTERNATIONAL = '+212 771-587686';
export const WHATSAPP_DISPLAY_LOCAL = '0771587686';

export type Locale = 'en' | 'fr' | 'ar';
export type RatingBracketId = 'beginner' | 'intermediate' | 'advanced' | 'master';
export type PackageId = 'starter' | 'growth' | 'intensive';

export const DEFAULT_WHATSAPP_MESSAGE =
  'Hello, I am interested in your chess coaching sessions.';

const LOCALE_DEFAULT_MESSAGES: Record<Locale, string> = {
  en: DEFAULT_WHATSAPP_MESSAGE,
  fr: 'Bonjour, je suis intéressé(e) par vos séances de coaching aux échecs.',
  ar: 'مرحباً، أنا مهتم بجلسات التدريب في الشطرنج.',
};

export function getLocaleDirection(locale: Locale): 'ltr' | 'rtl' {
  return locale === 'ar' ? 'rtl' : 'ltr';
}

export function normalizeLocale(value: string | null | undefined): Locale {
  if (value === 'fr' || value === 'ar' || value === 'en') {
    return value;
  }
  return 'en';
}

export function buildWhatsAppUrl(options?: {
  locale?: Locale;
  packageTitle?: string;
  ratingLabel?: string;
  customMessage?: string;
}): string {
  const baseUrl = `https://wa.me/${WHATSAPP_NUMBER}`;
  const locale: Locale = options?.locale ?? 'en';

  if (options?.customMessage) {
    return `${baseUrl}?text=${encodeURIComponent(options.customMessage)}`;
  }

  if (options?.packageTitle) {
    if (locale === 'fr') {
      const ratingSuffix = options.ratingLabel
        ? ` Mon niveau actuel est ${options.ratingLabel}.`
        : '';
      const message = `Bonjour, je souhaite choisir le forfait ${options.packageTitle}.${ratingSuffix}`;
      return `${baseUrl}?text=${encodeURIComponent(message)}`;
    }

    if (locale === 'ar') {
      const ratingSuffix = options.ratingLabel
        ? ` مستواي الحالي هو ${options.ratingLabel}.`
        : '';
      const message = `مرحباً، أرغب في اختيار باقة التدريب: ${options.packageTitle}.${ratingSuffix}`;
      return `${baseUrl}?text=${encodeURIComponent(message)}`;
    }

    const ratingSuffix = options.ratingLabel
      ? ` My current rating level is ${options.ratingLabel}.`
      : '';
    const message = `Hello, I would like to select the ${options.packageTitle} chess coaching package.${ratingSuffix}`;
    return `${baseUrl}?text=${encodeURIComponent(message)}`;
  }

  if (options?.ratingLabel) {
    if (locale === 'fr') {
      const message = `Bonjour, je suis intéressé(e) par vos séances de coaching aux échecs. Mon niveau actuel est ${options.ratingLabel}.`;
      return `${baseUrl}?text=${encodeURIComponent(message)}`;
    }
    if (locale === 'ar') {
      const message = `مرحباً، أنا مهتم بجلسات التدريب في الشطرنج. مستواي الحالي هو ${options.ratingLabel}.`;
      return `${baseUrl}?text=${encodeURIComponent(message)}`;
    }
    const message = `Hello, I am interested in your chess coaching sessions. My current rating level is ${options.ratingLabel}.`;
    return `${baseUrl}?text=${encodeURIComponent(message)}`;
  }

  return `${baseUrl}?text=${encodeURIComponent(LOCALE_DEFAULT_MESSAGES[locale])}`;
}

export function getRecommendedPackageId(bracket: RatingBracketId): PackageId {
  switch (bracket) {
    case 'beginner':
      return 'starter';
    case 'intermediate':
    case 'advanced':
      return 'growth';
    case 'master':
      return 'intensive';
  }
}

export function toggleFaqIndex(
  currentOpenIndex: number | null,
  clickedIndex: number,
): number | null {
  return currentOpenIndex === clickedIndex ? null : clickedIndex;
}
