import React from 'react';
import { Check } from 'lucide-react';
import type { LocalizedContent } from '../data/coachingData';
import type { RatingBracketId } from '../utils/coaching';

interface MethodologySectionProps {
  selectedRating: RatingBracketId;
  onSelectRating: (id: RatingBracketId) => void;
  content: LocalizedContent['methodology'];
}

export function MethodologySection({
  selectedRating,
  onSelectRating,
  content,
}: MethodologySectionProps) {
  const activeBracket =
    content.brackets.find((b) => b.id === selectedRating) ?? content.brackets[1];

  return (
    <section
      id="methodology"
      className="border-b border-white/10 bg-[#0A0A0A] py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
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

        {/* 3-Step Visual Flow */}
        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {content.steps.map((item, idx) => (
            <div
              key={item.step}
              className="relative flex flex-col rounded-xl border border-white/10 bg-[#141414]/90 p-6 sm:p-7 transition-colors duration-200 hover:border-red-600/45"
            >
              <div className="flex items-center justify-between gap-3">
                <span className="font-mono text-2xl font-semibold text-red-500 tabular-nums">
                  {item.step}
                </span>
                <span className="text-xs font-medium text-neutral-400">
                  {item.subtitle}
                </span>
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold text-white">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-neutral-300">
                {item.description}
              </p>
              {idx < content.steps.length - 1 && (
                <div
                  aria-hidden="true"
                  className="mt-6 h-px w-full bg-gradient-to-r from-red-600/40 to-transparent lg:hidden"
                />
              )}
            </div>
          ))}
        </div>

        {/* Interactive Rating Tier Curriculum Preview (Image-Free Luxury Console) */}
        <div className="mt-12 grid grid-cols-1 items-start gap-8 rounded-xl border border-white/10 bg-[#141414]/85 p-6 sm:p-8 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="font-mono text-xs font-medium tracking-wider text-red-400">
              {content.showcaseKicker}
            </p>
            <h3 className="mt-2 font-display text-2xl font-semibold text-white">
              {content.selectorTitle}
            </h3>
            <p className="mt-2.5 text-sm leading-relaxed text-neutral-300">
              {content.selectorSubtitle}
            </p>

            <div
              role="tablist"
              aria-label={content.selectorAria}
              className="mt-6 grid grid-cols-2 gap-2.5"
            >
              {content.brackets.map((bracket) => {
                const isActive = bracket.id === activeBracket.id;
                return (
                  <button
                    key={bracket.id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => onSelectRating(bracket.id)}
                    className={`flex flex-col items-start rounded-lg border px-3.5 py-3 text-start transition-all duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500 ${
                      isActive
                        ? 'border-red-600 bg-red-600/15 text-white shadow-[0_0_18px_rgba(220,38,38,0.18)]'
                        : 'border-white/10 bg-[#0A0A0A]/70 text-neutral-300 hover:border-white/25 hover:text-white'
                    }`}
                  >
                    <span className="font-mono text-xs font-semibold tabular-nums text-red-400 whitespace-nowrap">
                      {bracket.range}
                    </span>
                    <span className="mt-0.5 text-xs font-medium text-white whitespace-nowrap">
                      {bracket.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <div
            role="tabpanel"
            aria-label={`${activeBracket.label}`}
            className="rounded-lg border border-white/10 bg-[#0A0A0A]/75 p-6 sm:p-7 lg:col-span-7"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-white/10 pb-4">
              <h4 className="font-display text-xl font-semibold text-white">
                {activeBracket.focusTitle}
              </h4>
              <span className="font-mono text-xs font-semibold text-red-400 tabular-nums">
                {activeBracket.range}
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-neutral-300">
              {activeBracket.focusSummary}
            </p>
            <ul className="mt-5 space-y-3">
              {activeBracket.deliverables.map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-2.5 text-sm text-neutral-200"
                >
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-red-500" aria-hidden="true" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
