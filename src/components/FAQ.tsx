import React, { useState } from 'react';
import { ChevronDown } from './Icons';

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: 'How does Aether achieve under 11ms latency?',
    answer: 'By compiling ingestion mapping scripts directly to isolated V8 native runtimes and using localized WebAssembly neural parsers. We skip expensive API network hops and runtime process wrapping.'
  },
  {
    question: 'Can I define custom enrichment models?',
    answer: 'Yes. You can upload custom ONNX or PyTorch weights into our isolated sandbox. Scripts can reference these weights to perform operations such as sentiment analysis or semantic extraction.'
  },
  {
    question: 'How is data security guaranteed?',
    answer: 'Every payload is encrypted using AES-GCM-256 before leaving the origin node. Decryption only occurs inside designated target clusters matching strict cryptographic policies.'
  },
  {
    question: 'What happens if a target database goes offline?',
    answer: 'Aether buffers payloads inside a persistent local queue. The stream router attempts exponential backoff retries while telemetry logs audit the connection. If down for over 5 minutes, secondary standbys take over.'
  }
];

export const FAQ: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const toggleFAQ = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="relative bg-arcticPowder text-black py-24 border-t border-b border-lightBorder">
      <div className="grid-mesh-light absolute inset-0 opacity-40 pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          
          {/* Left Column: Sticky Header */}
          <div className="lg:sticky lg:top-24 h-fit">
            <div className="font-mono text-xs uppercase tracking-widestMono text-nocturnalExpedition mb-3">
              // FAQ & ARCHITECTURE
            </div>
            <h2 className="text-3xl font-semibold tracking-tightest text-black sm:text-4xl md:text-5xl mb-6">
              RECURRING QUESTIONS.
            </h2>
            <p className="text-sm text-neutral-600 leading-relaxed max-w-xs">
              Understand our underlying data layout, security parameters, and regional routing policies.
            </p>
          </div>

          {/* Right Column: Accordion List */}
          <div className="lg:col-span-2 border-t border-black/10 divide-y divide-black/10">
            {faqItems.map((item, idx) => {
              const isOpen = openIdx === idx;
              return (
                <div key={idx} className="py-6">
                  <button
                    onClick={() => toggleFAQ(idx)}
                    className="w-full flex items-center justify-between text-left focus:outline-none"
                  >
                    <span className="text-base font-semibold text-black pr-4">
                      {item.question}
                    </span>
                    <ChevronDown className={`w-5 h-5 text-neutral-500 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-black' : ''
                    }`} />
                  </button>

                  <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-40 opacity-100 mt-4' : 'max-h-0 opacity-0'
                  }`}>
                    <p className="text-sm text-neutral-600 leading-relaxed pr-8">
                      {item.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};
