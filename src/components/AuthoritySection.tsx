import React from 'react';
import type { LocalizedContent } from '../data/coachingData';

interface AuthoritySectionProps {
  content: LocalizedContent['authority'];
}

export function AuthoritySection({ content }: AuthoritySectionProps) {
  return (
    <section
      id="about"
      className="border-b border-white/10 bg-[#0D0D0D] py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* About the Coach Editorial Split (Pure Typographic Luxury, Zero Duplicate Photos) */}
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <p className="text-xs font-semibold tracking-[0.18em] text-red-500">
              {content.sectionKicker}
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl [text-wrap:balance]">
              {content.heading}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-neutral-300">
              {content.bioParagraph1}
            </p>
            <p className="mt-4 text-base leading-relaxed text-neutral-400">
              {content.bioParagraph2}
            </p>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-xl border border-white/10 bg-[#141414]/85 p-6 sm:p-7">
              <div className="flex items-center justify-between border-b border-white/10 pb-4 text-xs">
                <span className="font-mono font-semibold text-red-400 tabular-nums">
                  2700+ ELO
                </span>
                <span className="text-neutral-400">{content.portraitRole}</span>
              </div>
              <div className="divide-y divide-white/10">
                {content.highlights.map((item, idx) => (
                  <div key={item.title} className="flex items-baseline gap-4 py-4 first:pt-5 last:pb-1">
                    <span className="font-mono text-xs font-semibold text-red-500 tabular-nums">
                      0{idx + 1}
                    </span>
                    <div>
                      <p className="font-mono text-base font-semibold text-white tabular-nums">
                        {item.title}
                      </p>
                      <p className="mt-0.5 text-xs text-neutral-400">{item.subtitle}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 4 Sleek Dark-and-Red Authority Cards */}
        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {content.features.map((feature) => (
            <article
              key={feature.number}
              className="group relative flex flex-col justify-between rounded-xl border border-white/10 bg-[#141414]/85 p-6 sm:p-7 backdrop-blur-sm transition-all duration-200 hover:border-red-600/60 hover:bg-[#171717] hover:shadow-[0_0_32px_rgba(220,38,38,0.12)]"
            >
              <div>
                <div className="flex items-center justify-between gap-4">
                  <span className="font-mono text-sm font-semibold text-red-500 tabular-nums">
                    {feature.number}
                  </span>
                  <span className="text-xs font-medium text-neutral-400">
                    {feature.metric}
                  </span>
                </div>
                <h3 className="mt-4 font-display text-xl font-semibold text-white transition-colors group-hover:text-red-50">
                  {feature.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-neutral-300">
                  {feature.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
