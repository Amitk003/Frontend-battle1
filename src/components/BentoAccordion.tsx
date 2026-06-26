import React, { useState, useEffect, useRef } from 'react';
import { ArrowPath, Cube16Solid, ArrowTrendingUp, Cog8Tooth, ChevronDown } from './Icons';

interface FeatureItem {
  id: string;
  title: string;
  monoLabel: string;
  description: string;
  details: string;
  icon: React.ComponentType<{ className?: string }>;
}

const features: FeatureItem[] = [
  {
    id: 'ingestion',
    title: 'Data Ingestion Node',
    monoLabel: 'NODE_INGEST_01',
    description: 'Ingest and map raw structured or unstructured streams in real-time.',
    details: 'Supports automatic schema inference, WebSocket connections, S3 polling, and database CDC pipelines with under 5ms serialization times.',
    icon: ArrowPath,
  },
  {
    id: 'neural',
    title: 'Neural Core Model',
    monoLabel: 'MODEL_NEURAL_X2',
    description: 'Transform and enrich raw text fields using local deep neural parsers.',
    details: 'Leverages optimized transformer weights running in isolated sandbox runtimes to sanitize, extract entities, and format values without network requests.',
    icon: Cube16Solid,
  },
  {
    id: 'routing',
    title: 'Dynamic Stream Router',
    monoLabel: 'ROUTER_DYN_FLOW',
    description: 'Route payloads based on content features and target load metrics.',
    details: 'Maintains a live topology map of target datastores, dynamically selecting paths to minimize queues and bypass server bottlenecks.',
    icon: ArrowTrendingUp,
  },
  {
    id: 'security',
    title: 'Secure Enclave Guard',
    monoLabel: 'GUARD_SECURE_SHIELD',
    description: 'Enforce cryptographic isolation on every single payload field.',
    details: 'Provides zero-knowledge field-level decryption policies, end-to-end TLS wrapping, and strict audit logging directly in immutable ledgers.',
    icon: Cog8Tooth,
  },
];

export const BentoAccordion: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const accordionRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Smooth accordion transition helper and resize height recalculation
  useEffect(() => {
    const updateHeights = () => {
      features.forEach((_, index) => {
        const el = accordionRefs.current[index];
        if (el) {
          if (index === activeIndex) {
            el.style.maxHeight = `${el.scrollHeight}px`;
            el.style.opacity = '1';
          } else {
            el.style.maxHeight = '0px';
            el.style.opacity = '0';
          }
        }
      });
    };

    updateHeights();
    window.addEventListener('resize', updateHeights);
    return () => window.removeEventListener('resize', updateHeights);
  }, [activeIndex]);

  return (
    <section id="features" className="relative border-b border-darkBorder bg-darkBg py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-16">
          <div className="font-mono text-xs uppercase tracking-widestMono text-forsythia mb-3">
            // PLATFORM FEATS
          </div>
          <h2 className="text-3xl font-semibold tracking-tightest text-white sm:text-4xl md:text-5xl">
            BUILT FOR AGGRESSIVE TRAFFIC.
          </h2>
        </div>

        {/* Desktop Bento Grid (hidden on mobile, md and up) */}
        <div className="hidden md:grid grid-cols-4 gap-[1px] bg-darkBorder border border-darkBorder">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            const isActive = activeIndex === idx;
            return (
              <div
                key={feature.id}
                onMouseEnter={() => setActiveIndex(idx)}
                className={`relative flex flex-col justify-between p-8 min-h-[380px] bg-black transition-all duration-300 ease-out cursor-pointer ${
                  isActive ? 'ring-1 ring-white/30 z-10' : 'opacity-70 hover:opacity-100'
                }`}
              >
                {/* Top: Icon & Mono label */}
                <div className="flex items-center justify-between">
                  <div className={`p-2 border ${isActive ? 'border-forsythia text-forsythia' : 'border-darkBorder text-white'} transition-colors duration-300`}>
                    <Icon className="w-5 h-5 stroke-[1.5]" />
                  </div>
                  <span className="font-mono text-[10px] tracking-widestMono text-mutedText">
                    {feature.monoLabel}
                  </span>
                </div>

                {/* Bottom: Content */}
                <div className="mt-12">
                  <h3 className="text-lg font-medium text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-mutedText mb-4 leading-relaxed">
                    {feature.description}
                  </p>
                  
                  {/* Expanded info on hover */}
                  <div className={`overflow-hidden transition-all duration-300 ease-out text-xs text-mutedText border-t border-white/10 pt-3 ${
                    isActive ? 'max-h-32 opacity-100 mt-2' : 'max-h-0 opacity-0'
                  }`}>
                    {feature.details}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile Accordion (visible only on mobile, hidden on md and up) */}
        <div className="md:hidden flex flex-col border border-darkBorder divide-y divide-darkBorder">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            const isActive = activeIndex === idx;
            return (
              <div key={feature.id} className="bg-black overflow-hidden">
                {/* Accordion Trigger */}
                <button
                  onClick={() => setActiveIndex(isActive ? 0 : idx)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <div className="flex items-center space-x-4">
                    <div className={`p-2 border ${isActive ? 'border-forsythia text-forsythia' : 'border-darkBorder text-white'}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-mono text-[9px] block tracking-widestMono text-mutedText">
                        {feature.monoLabel}
                      </span>
                      <span className="text-base font-medium text-white">{feature.title}</span>
                    </div>
                  </div>
                  <ChevronDown className={`w-5 h-5 text-mutedText transition-transform duration-300 ${
                    isActive ? 'rotate-180 text-white' : ''
                  }`} />
                </button>

                {/* Accordion Content */}
                <div
                  ref={(el) => (accordionRefs.current[idx] = el)}
                  className="accordion-content px-6 pb-6 overflow-hidden"
                >
                  <p className="text-sm text-mutedText mb-3 leading-relaxed">
                    {feature.description}
                  </p>
                  <div className="text-xs text-mutedText bg-darkCard border border-darkBorder p-4 mt-2">
                    {feature.details}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
