import React from 'react';
import { Check } from 'lucide-react';
import type { LocalizedContent, RatingBracket } from '../data/coachingData';
import {
  buildWhatsAppUrl,
  getRecommendedPackageId,
  type Locale,
  type RatingBracketId,
} from '../utils/coaching';
import { WhatsAppIcon } from './ChessIcons';

interface PackagesSectionProps {
  locale: Locale;
  selectedRating: RatingBracketId;
  brackets: RatingBracket[];
  content: LocalizedContent['packages'];
}

export function PackagesSection({
  locale,
  selectedRating,
  brackets,
  content,
}: PackagesSectionProps) {
  const activeBracket = brackets.find((b) => b.id === selectedRating);
  const recommendedId = getRecommendedPackageId(selectedRating);

  return (
    <section
      id="packages"
      className="border-b border-white/10 bg-[#0D0D0D] py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-[0.18em] text-red-500">
              {content.sectionKicker}
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl [text-wrap:balance]">
              {content.heading}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-neutral-300">
              {content.subheading}
            </p>
          </div>
          {activeBracket && (
            <p className="text-xs text-neutral-400">
              {content.selectedTrackLabel}{' '}
              <span className="font-mono font-semibold text-red-400 tabular-nums">
                {activeBracket.range}
              </span>
            </p>
          )}
        </div>

        {/* 3 Clean Comparison Cards */}
        <div className="mt-12 grid grid-cols-1 items-stretch gap-6 lg:grid-cols-3">
          {content.items.map((pkg) => {
            const isMostPopular = Boolean(pkg.highlighted);
            const isMatchedToRating = pkg.id === recommendedId;
            const whatsappHref = buildWhatsAppUrl({
              locale,
              packageTitle: pkg.whatsappPackageName,
              ratingLabel: activeBracket?.range,
            });

            return (
              <article
                key={pkg.id}
                data-testid={`package-card-${pkg.id}`}
                className={`relative flex flex-col justify-between rounded-xl border p-6 sm:p-8 transition-all duration-200 ${
                  isMostPopular
                    ? 'border-[#DC2626] bg-gradient-to-b from-[#1A0D0D] via-[#141414] to-[#111111] shadow-[0_0_40px_rgba(220,38,38,0.18)]'
                    : 'border-white/10 bg-[#141414]/90 hover:border-red-600/50'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 text-xs">
                    <span className="font-mono font-semibold text-red-400 whitespace-nowrap shrink-0">
                      {isMostPopular ? content.mostPopularLabel : pkg.priceTag}
                    </span>
                    {isMatchedToRating && (
                      <span className="text-xs font-medium text-neutral-300 whitespace-nowrap truncate">
                        {content.bestMatchLabel}
                      </span>
                    )}
                  </div>

                  <h3 className="mt-4 font-display text-2xl font-bold text-white">
                    {pkg.name}
                  </h3>
                  <p className="mt-1.5 font-mono text-sm font-medium text-neutral-300 tabular-nums">
                    {pkg.cadence}
                  </p>

                  <p className="mt-4 text-sm leading-relaxed text-neutral-300">
                    {pkg.summary}
                  </p>

                  <ul className="mt-6 space-y-3 border-t border-white/10 pt-6">
                    {pkg.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2.5 text-sm text-neutral-200"
                      >
                        <Check
                          className="mt-0.5 h-4 w-4 shrink-0 text-red-500"
                          aria-hidden="true"
                        />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8">
                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${content.selectPlanLabel}: ${pkg.name}`}
                    className={`inline-flex min-h-[46px] w-full items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-semibold transition-all duration-150 active:scale-[0.98] whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-400 ${
                      isMostPopular
                        ? 'bg-[#DC2626] text-white shadow-[0_0_24px_rgba(220,38,38,0.35)] hover:bg-[#B91C1C]'
                        : 'border border-red-600/50 bg-[#0A0A0A] text-white hover:border-red-500 hover:bg-[#DC2626]'
                    }`}
                  >
                    <WhatsAppIcon className="w-4 h-4 shrink-0" />
                    <span>{content.selectPlanLabel}</span>
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
