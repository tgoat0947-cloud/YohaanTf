import React from 'react';
import { ArrowDownRight } from 'lucide-react';
import { COACH_PORTRAIT, type LocalizedContent } from '../data/coachingData';
import { buildWhatsAppUrl, type Locale } from '../utils/coaching';
import { WhatsAppIcon } from './ChessIcons';
import { ResilientImage } from './ResilientImage';

interface HeroSectionProps {
  locale: Locale;
  content: LocalizedContent['hero'];
}

export function HeroSection({ locale, content }: HeroSectionProps) {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-white/10 bg-[#0A0A0A] chess-grid-bg"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-28 right-0 h-[480px] w-[480px] rounded-full bg-red-600/12 blur-[130px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-[-10%] h-[360px] w-[360px] rounded-full bg-red-800/10 blur-[120px]"
      />

      <div className="relative mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left Column: Core Proposition & CTAs */}
          <div className="flex flex-col justify-center lg:col-span-7">
            <div className="mb-5 flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs sm:text-sm font-medium text-neutral-300 tracking-wide">
              <span className="font-mono text-red-500 font-semibold tabular-nums">
                {content.trustElo}
              </span>
              <span aria-hidden="true" className="text-neutral-600">
                ·
              </span>
              <span>{content.trustAnalysis}</span>
              <span aria-hidden="true" className="text-neutral-600">
                ·
              </span>
              <span>{content.trustPlans}</span>
            </div>

            <h1 className="max-w-2xl font-display text-[clamp(2.15rem,4.1vw,3.75rem)] font-bold leading-[1.12] tracking-tight text-white [text-wrap:balance]">
              {content.headlinePrefix}
              <span className="text-red-500">{content.headlineHighlight}</span>
              {content.headlineSuffix}
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-neutral-300 sm:text-lg">
              {content.subheadline}
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="mt-8 flex flex-col gap-3.5 sm:flex-row sm:items-center">
              <a
                href={buildWhatsAppUrl({ locale })}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[48px] items-center justify-center gap-2.5 rounded-md bg-[#DC2626] px-6 py-3.5 text-sm sm:text-base font-semibold text-white shadow-[0_0_28px_rgba(220,38,38,0.35)] transition-all duration-150 hover:bg-[#B91C1C] hover:shadow-[0_0_34px_rgba(220,38,38,0.5)] active:scale-[0.98] whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-400"
              >
                <WhatsAppIcon className="w-5 h-5 shrink-0" />
                <span>{content.primaryCta}</span>
              </a>

              <a
                href="#packages"
                className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-md border border-white/15 bg-[#141414]/90 px-6 py-3.5 text-sm sm:text-base font-medium text-neutral-200 transition-all duration-150 hover:border-red-600/60 hover:bg-[#191919] hover:text-white whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500"
              >
                <span>{content.secondaryCta}</span>
                <ArrowDownRight className="w-4 h-4 text-red-500 shrink-0 rtl:-scale-x-100" />
              </a>
            </div>

            {/* Clean full-width stat strip anchored below CTA */}
            <dl className="mt-10 grid grid-cols-[0.85fr_0.95fr_1.3fr] gap-2 border-t border-white/10 pt-6 sm:grid-cols-3 sm:gap-8">
              <div>
                <dt className="text-xs text-neutral-400">{content.statRatingLabel}</dt>
                <dd
                  dir="ltr"
                  className="mt-1 font-mono text-base sm:text-2xl font-semibold text-white tabular-nums rtl:text-right"
                >
                  2700+
                </dd>
              </div>
              <div>
                <dt className="text-xs text-neutral-400">{content.statFormatLabel}</dt>
                <dd className="mt-1 text-xs sm:text-lg font-semibold text-white whitespace-nowrap">
                  {content.statFormatValue}
                </dd>
              </div>
              <div>
                <dt className="text-xs text-neutral-400">{content.statPlatformsLabel}</dt>
                <dd
                  dir="ltr"
                  className="mt-1 text-xs sm:text-lg font-semibold text-white whitespace-nowrap rtl:text-right"
                >
                  Lichess · Chess.com
                </dd>
              </div>
            </dl>
          </div>

          {/* Right Column: Single Signature Luxury Champion Portrait */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-[410px] lg:ms-auto lg:me-0">
              {/* Subtle crimson ambient aura behind frame */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -inset-3 rounded-2xl bg-gradient-to-tr from-red-600/20 via-transparent to-white/5 blur-2xl"
              />

              {/* Gallery Outer Frame */}
              <div className="relative rounded-2xl border border-red-600/35 bg-[#121212] p-3 shadow-[0_28px_70px_rgba(0,0,0,0.85)]">
                <div className="relative aspect-[2/3] w-full overflow-hidden rounded-xl border border-white/10 bg-[#0A0A0A]">
                  <ResilientImage
                    src={COACH_PORTRAIT}
                    alt={content.portraitAlt}
                    fallbackTitle={content.portraitFallback}
                    className="h-full w-full object-cover object-top contrast-[1.04] brightness-[0.98]"
                  />
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 shadow-[inset_0_0_40px_rgba(10,10,10,0.45)]"
                  />
                </div>
                <div className="px-2.5 pb-1 pt-3.5">
                  <p className="font-mono text-[11px] font-medium tracking-wider text-red-400">
                    {content.portraitKicker}
                  </p>
                  <p className="mt-1 text-sm text-neutral-200">
                    {content.portraitCaption}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
