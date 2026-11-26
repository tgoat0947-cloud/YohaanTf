import React, { useEffect, useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AuthoritySection } from './components/AuthoritySection';
import { MethodologySection } from './components/MethodologySection';
import { PackagesSection } from './components/PackagesSection';
import { FaqSection } from './components/FaqSection';
import { FooterCta } from './components/FooterCta';
import { CONTENT_BY_LOCALE } from './data/coachingData';
import {
  getLocaleDirection,
  normalizeLocale,
  type Locale,
  type RatingBracketId,
} from './utils/coaching';

const STORAGE_KEY = 'elite_chess_locale';

function getInitialLocale(): Locale {
  if (typeof window === 'undefined') {
    return 'en';
  }
  const urlParam = new URLSearchParams(window.location.search).get('lang');
  if (urlParam === 'en' || urlParam === 'fr' || urlParam === 'ar') {
    return urlParam;
  }
  try {
    return normalizeLocale(window.localStorage.getItem(STORAGE_KEY));
  } catch {
    return 'en';
  }
}

export default function App() {
  const [locale, setLocale] = useState<Locale>(getInitialLocale);
  const [selectedRating, setSelectedRating] = useState<RatingBracketId>('intermediate');

  const content = CONTENT_BY_LOCALE[locale];

  useEffect(() => {
    const dir = getLocaleDirection(locale);
    document.documentElement.lang = locale;
    document.documentElement.dir = dir;
    document.title = content.metaTitle;
    try {
      window.localStorage.setItem(STORAGE_KEY, locale);
    } catch {
      // Ignore storage failures in restricted contexts
    }
  }, [locale, content.metaTitle]);

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      <Navbar locale={locale} onChangeLocale={setLocale} content={content.nav} />
      <main>
        <HeroSection locale={locale} content={content.hero} />
        <AuthoritySection content={content.authority} />
        <MethodologySection
          selectedRating={selectedRating}
          onSelectRating={setSelectedRating}
          content={content.methodology}
        />
        <PackagesSection
          locale={locale}
          selectedRating={selectedRating}
          brackets={content.methodology.brackets}
          content={content.packages}
        />
        <FaqSection content={content.faq} />
      </main>
      <FooterCta
        locale={locale}
        navContent={content.nav}
        footerContent={content.footer}
      />
    </div>
  );
}
