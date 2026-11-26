import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import type { LocalizedContent } from '../data/coachingData';
import { toggleFaqIndex } from '../utils/coaching';

interface FaqSectionProps {
  content: LocalizedContent['faq'];
}

export function FaqSection({ content }: FaqSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="border-b border-white/10 bg-[#0A0A0A] py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-start sm:text-center">
          <p className="text-xs font-semibold tracking-[0.18em] text-red-500">
            {content.sectionKicker}
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {content.heading}
          </h2>
          <p className="mt-3 text-base text-neutral-300">{content.subheading}</p>
        </div>

        <div className="mt-10 divide-y divide-white/10 rounded-xl border border-white/10 bg-[#141414]/80">
          {content.items.map((item, index) => {
            const isOpen = openIndex === index;
            const panelId = `faq-panel-${index}`;
            const buttonId = `faq-button-${index}`;

            return (
              <div key={item.question} className="px-5 sm:px-7">
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex((prev) => toggleFaqIndex(prev, index))}
                    className="flex min-h-[64px] w-full items-center justify-between gap-4 py-5 text-start text-base font-semibold text-white transition-colors hover:text-red-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500"
                  >
                    <span>{item.question}</span>
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-red-500 transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                </h3>
                {isOpen && (
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    className="pb-6 pe-6 text-sm leading-relaxed text-neutral-300"
                  >
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
