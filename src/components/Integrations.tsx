import React from 'react';
import { Cube16Solid } from './Icons';

export const Integrations: React.FC = () => {
  const integrations = [
    'PostgreSQL', 'Snowflake', 'BigQuery', 'Apache Kafka',
    'AWS S3', 'MongoDB', 'Redis', 'Databricks'
  ];

  return (
    <section className="relative border-b border-darkBorder bg-darkBg py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-16 text-center lg:text-left">
          <span className="font-mono text-xs uppercase tracking-widestMono text-forsythia block mb-3">// COMPATIBLE TARGETS</span>
          <h2 className="text-3xl font-semibold tracking-tightest text-white sm:text-4xl md:text-5xl">
            PLUGS INTO YOUR STACK.
          </h2>
        </div>

        {/* Integration Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-[1px] bg-darkBorder border border-darkBorder">
          {integrations.map((name) => (
            <div 
              key={name}
              className="p-8 bg-black hover:bg-darkCard transition-colors duration-300 flex flex-col items-center justify-center text-center min-h-[140px]"
            >
              <Cube16Solid className="w-5 h-5 text-mutedText mb-3 select-none" />
              <span className="font-mono text-xs text-white uppercase tracking-wider">
                {name}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
