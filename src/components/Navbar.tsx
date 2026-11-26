import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { LOCALE_OPTIONS, type LocalizedContent } from '../data/coachingData';
import { buildWhatsAppUrl, type Locale } from '../utils/coaching';
import { ChessCrownIcon } from './ChessIcons';

interface NavbarProps {
  locale: Locale;
  onChangeLocale: (next: Locale) => void;
  content: LocalizedContent['nav'];
}

export function Navbar({ locale, onChangeLocale, content }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: content.about, href: '#about' },
    { label: content.methodology, href: '#methodology' },
    { label: content.packages, href: '#packages' },
    { label: content.faq, href: '#faq' },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0A0A0A]/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 sm:gap-6 px-4 py-3 sm:px-6 lg:px-8">
        {/* Zone 1: Single-line Brand Wordmark */}
        <a
          href="#top"
          className="flex min-w-0 items-center gap-2 text-xs sm:text-base font-semibold tracking-tight text-white whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-red-500"
        >
          <ChessCrownIcon className="w-5 h-5 text-red-500 shrink-0" />
          <span className="font-display tracking-wide truncate max-w-[155px] sm:max-w-none">
            {content.brand}
          </span>
          <span aria-hidden="true" className="hidden lg:inline text-neutral-600">
            |
          </span>
          <span
            dir="ltr"
            className="hidden lg:inline font-mono text-xs text-red-500 tabular-nums"
          >
            {content.eloBadge}
          </span>
        </a>

        {/* Zone 2: Clean single-line navigation links */}
        <nav aria-label="Primary navigation" className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-neutral-300 transition-colors duration-150 hover:text-white hover:underline hover:decoration-red-600 hover:underline-offset-8 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-red-500"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Language Switcher + Primary Action + Mobile Drawer Toggle */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <div
            role="group"
            aria-label={content.languageLabel}
            className="inline-flex items-center rounded-md border border-white/10 bg-[#141414] p-0.5"
          >
            {LOCALE_OPTIONS.map((option) => {
              const isActive = option.id === locale;
              return (
                <button
                  key={option.id}
                  type="button"
                  onClick={() => onChangeLocale(option.id)}
                  aria-pressed={isActive}
                  aria-label={option.nativeName}
                  className={`rounded px-2 py-1 text-[11px] sm:text-xs font-mono font-semibold transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-red-500 ${
                    isActive
                      ? 'bg-[#DC2626] text-white'
                      : 'text-neutral-300 hover:text-white'
                  }`}
                >
                  {option.shortLabel}
                </button>
              );
            })}
          </div>

          <a
            href="#packages"
            className="hidden sm:inline-flex items-center justify-center rounded-md bg-[#DC2626] px-4 py-2 text-sm font-semibold text-white shadow-[0_0_20px_rgba(220,38,38,0.28)] transition-all duration-150 hover:bg-[#B91C1C] active:scale-[0.98] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-400"
          >
            {content.bookNow}
          </a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation-drawer"
            aria-label={mobileMenuOpen ? content.closeMenuAria : content.openMenuAria}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/10 bg-[#141414] text-neutral-200 transition-colors hover:border-red-600/50 hover:text-white md:hidden focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Responsive Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation-drawer"
          className="border-t border-white/10 bg-[#0F0F0F] px-4 pb-5 pt-3 md:hidden"
        >
          <nav aria-label="Mobile navigation" className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex min-h-[44px] items-center rounded-md px-3 text-base font-medium text-neutral-200 transition-colors hover:bg-white/5 hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="mt-4 pt-3 border-t border-white/10 flex flex-col gap-2.5">
            <a
              href="#packages"
              onClick={() => setMobileMenuOpen(false)}
              className="flex min-h-[44px] items-center justify-center rounded-md bg-[#DC2626] px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#B91C1C]"
            >
              {content.bookNow}
            </a>
            <a
              href={buildWhatsAppUrl({ locale })}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="flex min-h-[44px] items-center justify-center rounded-md border border-white/15 bg-[#141414] px-4 py-2.5 text-sm font-medium text-neutral-200 transition-colors hover:border-red-600/50 hover:text-white"
            >
              {content.whatsappAction}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
