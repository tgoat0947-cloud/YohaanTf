import test from 'node:test';
import assert from 'node:assert/strict';
import {
  buildWhatsAppUrl,
  getLocaleDirection,
  getRecommendedPackageId,
  normalizeLocale,
  toggleFaqIndex,
  WHATSAPP_NUMBER,
} from './coaching';

test('buildWhatsAppUrl uses exact default greeting matching user spec', () => {
  const url = buildWhatsAppUrl();
  assert.equal(
    url,
    `https://wa.me/${WHATSAPP_NUMBER}?text=Hello%2C%20I%20am%20interested%20in%20your%20chess%20coaching%20sessions.`,
  );
});

test('buildWhatsAppUrl builds localized default and package messages for fr and ar', () => {
  const frDefault = decodeURIComponent(buildWhatsAppUrl({ locale: 'fr' }));
  assert.ok(frDefault.includes('Bonjour'));

  const arPackage = decodeURIComponent(
    buildWhatsAppUrl({
      locale: 'ar',
      packageTitle: 'باقة النمو الشهري (4 جلسات / شهر)',
      ratingLabel: '1000–1600 إيلو',
    }),
  );
  assert.ok(arPackage.includes('باقة النمو الشهري'));
  assert.ok(arPackage.includes('1000–1600 إيلو'));
});

test('buildWhatsAppUrl includes selected package name and optional rating level in English', () => {
  const starterUrl = buildWhatsAppUrl({ packageTitle: 'Starter Assessment (1 Trial Session)' });
  assert.ok(starterUrl.startsWith(`https://wa.me/${WHATSAPP_NUMBER}?text=`));
  assert.ok(decodeURIComponent(starterUrl).includes('Starter Assessment (1 Trial Session)'));

  const growthWithRating = buildWhatsAppUrl({
    packageTitle: 'Monthly Growth Plan (4 Sessions / Month)',
    ratingLabel: '1000–1600 ELO',
  });
  const decoded = decodeURIComponent(growthWithRating);
  assert.ok(decoded.includes('Monthly Growth Plan (4 Sessions / Month)'));
  assert.ok(decoded.includes('1000–1600 ELO'));
});

test('getLocaleDirection and normalizeLocale handle en, fr, ar safely', () => {
  assert.equal(getLocaleDirection('en'), 'ltr');
  assert.equal(getLocaleDirection('fr'), 'ltr');
  assert.equal(getLocaleDirection('ar'), 'rtl');
  assert.equal(normalizeLocale('fr'), 'fr');
  assert.equal(normalizeLocale('ar'), 'ar');
  assert.equal(normalizeLocale('unknown'), 'en');
});

test('getRecommendedPackageId maps rating tiers to optimal coaching plans', () => {
  assert.equal(getRecommendedPackageId('beginner'), 'starter');
  assert.equal(getRecommendedPackageId('intermediate'), 'growth');
  assert.equal(getRecommendedPackageId('advanced'), 'growth');
  assert.equal(getRecommendedPackageId('master'), 'intensive');
});

test('toggleFaqIndex opens closed index and collapses open index', () => {
  assert.equal(toggleFaqIndex(null, 0), 0);
  assert.equal(toggleFaqIndex(0, 0), null);
  assert.equal(toggleFaqIndex(0, 2), 2);
});
