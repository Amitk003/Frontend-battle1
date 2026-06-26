import React from 'react';

interface StatItem {
  value: string;
  label: string;
  monoLabel: string;
  description: string;
}

const stats: StatItem[] = [
  {
    value: '11ms',
    label: 'End-to-End Latency',
    monoLabel: 'LATENCY_METRIC_01',
    description: 'Average processing duration for complex unstructured ingestion payloads across active server groups.',
  },
  {
    value: '99.99%',
    label: 'Pipeline Integrity',
    monoLabel: 'INTEGRITY_INDEX_02',
    description: 'Guaranteed delivery rate backed by our automatic rollback and state caching protocol.',
  },
  {
    value: '4.8M/s',
    label: 'Max Ingestion Rate',
    monoLabel: 'THROUGHPUT_PEAK_03',
    description: 'Peak records written per second under load before queue serialization begins.',
  },
];

export const Stats: React.FC = () => {
  return (
    <section className="relative border-b border-darkBorder bg-darkBg py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section header or kicker */}
        <div className="mb-12 text-center md:text-left">
          <span className="font-mono text-xs uppercase tracking-widestMono text-forsythia block mb-3">// LIVE SYSTEM STATISTICS</span>
          <h3 className="text-xl font-medium text-white max-w-xl">
            Strict Service Level Agreements verified by real-time audit scripts.
          </h3>
        </div>

        {/* 3-Column Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 border-t border-l border-darkBorder">
          {stats.map((stat, idx) => (
            <div 
              key={idx} 
              className="relative p-10 border-b border-r border-darkBorder flex flex-col justify-between min-h-[250px] group overflow-hidden bg-black/40 hover:bg-black/80 transition-colors duration-300"
            >
              {/* Top Accent brackets ⌜ ⌝ */}
              <div className="absolute top-4 left-4 font-mono text-xs text-mutedText/30 select-none group-hover:text-forsythia/60 transition-colors">⌜</div>
              <div className="absolute top-4 right-4 font-mono text-xs text-mutedText/30 select-none group-hover:text-forsythia/60 transition-colors">⌝</div>

              {/* Monospace tag */}
              <div className="font-mono text-[9px] tracking-widestMono text-mutedText mb-4">
                {stat.monoLabel}
              </div>

              {/* Massive Value */}
              <div className="my-4">
                <span className="text-5xl md:text-6xl font-bold tracking-tightest text-white font-sans block">
                  {stat.value}
                </span>
                <span className="text-sm font-medium text-white mt-1 block">
                  {stat.label}
                </span>
              </div>

              {/* Description */}
              <p className="text-xs text-mutedText leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
