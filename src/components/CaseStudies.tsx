import React, { useState, useRef } from 'react';
import { ChevronRight } from './Icons';

interface CaseStudyItem {
  id: string;
  num: string;
  title: string;
  category: string;
  image: string;
}

const caseStudies: CaseStudyItem[] = [
  {
    id: 'neural',
    num: '// 2026.01',
    title: 'Proven neural parsing for logistics payloads',
    category: 'INTELLIGENCE',
    image: '/study_neural.jpg',
  },
  {
    id: 'pipelines',
    num: '// 2026.03',
    title: 'Global multi-region data pipeline replication',
    category: 'DISTRIBUTED_FLOW',
    image: '/study_pipelines.jpg',
  },
  {
    id: 'finance',
    num: '// 2026.05',
    title: 'Financial high-frequency latency optimization',
    category: 'OPTIMIZATION',
    image: '/study_finance.jpg',
  },
];

export const CaseStudies: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    // Keep coordinates relative to the container
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <section 
      id="case-studies" 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative bg-arcticPowder text-black py-24 overflow-hidden border-b border-lightBorder"
    >
      {/* Light Grid Mesh background */}
      <div className="grid-mesh-light absolute inset-0 opacity-40 pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          
          {/* Left Column: Sticky Title */}
          <div className="lg:sticky lg:top-24 h-fit">
            <div className="font-mono text-xs uppercase tracking-widestMono text-nocturnalExpedition mb-3">
              // CASE STUDIES
            </div>
            <h2 className="text-3xl font-semibold tracking-tightest text-black sm:text-4xl md:text-5xl mb-6">
              PROVEN NEURAL SOLUTIONS.
            </h2>
            <p className="text-sm text-neutral-600 leading-relaxed max-w-xs">
              Review our latest implementations delivering verified performance uplifts across active client networks.
            </p>
          </div>

          {/* Right Column: Interactive List */}
          <div className="lg:col-span-2 border-t border-black/10 divide-y divide-black/10">
            {caseStudies.map((study, idx) => (
              <div
                key={study.id}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group flex flex-col sm:flex-row sm:items-center justify-between py-8 px-2 transition-colors duration-300 hover:bg-black/5 cursor-pointer relative"
              >
                {/* Number & Category */}
                <div className="flex items-center space-x-4 mb-2 sm:mb-0">
                  <span className="font-mono text-xs text-neutral-500">{study.num}</span>
                  <span className="font-mono text-[9px] bg-nocturnalExpedition/10 text-nocturnalExpedition px-2 py-0.5 font-semibold tracking-widestMono">
                    {study.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-medium text-black sm:max-w-md group-hover:translate-x-2 transition-transform duration-300">
                  {study.title}
                </h3>

                {/* Link Indicator */}
                <div className="hidden sm:flex items-center justify-center w-8 h-8 rounded-full border border-black/10 group-hover:border-black/30 group-hover:bg-black group-hover:text-white transition-all duration-300">
                  <ChevronRight className="w-4 h-4" />
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Floating Hover Image Preview (Magnetic Tracking) */}
      {hoveredIndex !== null && (
        <div
          className="hidden lg:block absolute pointer-events-none z-20 w-72 h-44 border border-black/20 bg-neutral-200 overflow-hidden shadow-2xl transition-transform duration-300 ease-out"
          style={{
            left: `${mousePos.x}px`,
            top: `${mousePos.y}px`,
            transform: 'translate(-50%, -110%) scale(1.05)',
          }}
        >
          <img
            src={caseStudies[hoveredIndex].image}
            alt={caseStudies[hoveredIndex].title}
            className="w-full h-full object-cover animate-fade-in"
          />
        </div>
      )}
    </section>
  );
};
