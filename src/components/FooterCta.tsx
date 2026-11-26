import React from 'react';
import { Phone } from 'lucide-react';
import type { LocalizedContent } from '../data/coachingData';
import {
  buildWhatsAppUrl,
  type Locale,
  WHATSAPP_DISPLAY_INTERNATIONAL,
  WHATSAPP_DISPLAY_LOCAL,
} from '../utils/coaching';
import { ChessCrownIcon, WhatsAppIcon } from './ChessIcons';

interface FooterCtaProps {
  locale: Locale;
  navContent: LocalizedContent['nav'];
  footerContent: LocalizedContent['footer'];
}

export function FooterCta({ locale, navContent, footerContent }: FooterCtaProps) {
  const defaultWhatsAppUrl = buildWhatsAppUrl({ locale });

  return (
    <>
      {/* Final High-Impact CTA Banner */}
      <section className="relative overflow-hidden border-b border-white/10 bg-[#0D0D0D] py-16 sm:py-20">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(220,38,38,0.16),transparent_65%)]"
        />
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <p className="font-mono text-xs font-semibold tracking-[0.2em] text-red-500">
            {footerContent.kicker}
          </p>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-white sm:text-5xl [text-wrap:balance]">
            {footerContent.heading}
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-neutral-300">
            {footerContent.subheading}
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={defaultWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[48px] items-center justify-center gap-2.5 rounded-md bg-[#DC2626] px-7 py-3.5 text-base font-semibold text-white shadow-[0_0_28px_rgba(220,38,38,0.38)] transition-all duration-150 hover:bg-[#B91C1C] active:scale-[0.98] whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-400"
            >
              <WhatsAppIcon className="w-5 h-5 shrink-0" />
              <span>{footerContent.primaryCta}</span>
            </a>

            <a
              href="tel:+212771587686"
              dir="ltr"
              className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-md border border-white/15 bg-[#141414] px-5 py-3.5 font-mono text-sm font-medium text-neutral-200 tabular-nums transition-colors hover:border-red-600/60 hover:text-white whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500"
            >
              <Phone className="w-4 h-4 text-red-500 shrink-0" aria-hidden="true" />
              <span>{WHATSAPP_DISPLAY_INTERNATIONAL}</span>
              <span aria-hidden="true" className="text-neutral-600">
                /
              </span>
              <span>{WHATSAPP_DISPLAY_LOCAL}</span>
            </a>
          </div>
        </div>
      </section>

      {/* Quiet Footer */}
      <footer className="bg-[#0A0A0A] py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-4 sm:flex-row sm:items-center sm:px-6 lg:px-8">
          <div>
            <div className="flex items-center gap-2 text-sm font-semibold text-white">
              <ChessCrownIcon className="w-4 h-4 text-red-500" />
              <span className="font-display">{navContent.brand}</span>
              <span aria-hidden="true" className="text-neutral-600">
                ·
              </span>
              <span dir="ltr" className="font-mono text-xs text-neutral-400 tabular-nums">
                {navContent.eloBadge}
              </span>
            </div>
            <p className="mt-2 text-xs text-neutral-400">
              {footerContent.whatsappDirectLabel}{' '}
              <a
                href={defaultWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                dir="ltr"
                className="inline-block font-mono text-neutral-200 underline decoration-red-600/60 underline-offset-4 hover:text-white tabular-nums"
              >
                {WHATSAPP_DISPLAY_INTERNATIONAL} ({WHATSAPP_DISPLAY_LOCAL})
              </a>
            </p>
          </div>

          <nav aria-label="Footer navigation" className="flex flex-wrap items-center gap-6 text-xs text-neutral-400">
            <a href="#about" className="hover:text-white transition-colors">
              {navContent.about}
            </a>
            <a href="#methodology" className="hover:text-white transition-colors">
              {navContent.methodology}
            </a>
            <a href="#packages" className="hover:text-white transition-colors">
              {navContent.packages}
            </a>
            <a href="#faq" className="hover:text-white transition-colors">
              {navContent.faq}
            </a>
          </nav>
        </div>
      </footer>

      {/* Floating Bottom-Right WhatsApp Quick-Chat Button */}
      <a
        href={defaultWhatsAppUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={footerContent.quickChatAria}
        className="fixed bottom-5 right-5 z-40 inline-flex h-13 w-13 items-center justify-center rounded-full border border-red-400/40 bg-[#DC2626] text-white shadow-[0_8px_28px_rgba(220,38,38,0.45)] transition-transform duration-150 hover:scale-105 hover:bg-[#B91C1C] active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
      >
        <WhatsAppIcon className="w-6 h-6" />
      </a>
    </>
  );
}
