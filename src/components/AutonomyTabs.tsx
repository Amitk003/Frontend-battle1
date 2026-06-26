import React, { useState } from 'react';
import { ChartPie } from './Icons';

interface TabItem {
  id: string;
  name: string;
  monoLabel: string;
  title: string;
  description: string;
  graphic: React.ReactNode;
}

export const AutonomyTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('discovery');

  const tabs: TabItem[] = [
    {
      id: 'discovery',
      name: 'Schema Discovery',
      monoLabel: 'SYS_DISCOVER_01',
      title: 'Automatic schema discovery on active streams.',
      description: 'Aether connects to your target brokers, listens to raw payload feeds, and instantly constructs a validated database model, highlighting inconsistencies.',
      graphic: (
        <div className="border border-darkBorder bg-black/60 p-8 h-full flex flex-col justify-between font-mono text-[10px] tracking-wide text-mutedText">
          <div>// TOPOLOGY SCHEMA RESOLVED</div>
          <div className="my-6 space-y-2 text-xs">
            <div><span className="text-forsythia">const</span> payloadSchema = &#123;</div>
            <div className="pl-4">transactionId: <span className="text-emerald-400">"uuid"</span>,</div>
            <div className="pl-4">timestamp: <span className="text-emerald-400">"epoch_ms"</span>,</div>
            <div className="pl-4">source: <span className="text-emerald-400">"string"</span>,</div>
            <div className="pl-4">metrics: &#123; latency: <span className="text-blue-400">"float"</span> &#125;</div>
            <div>&#125;;</div>
          </div>
          <div className="flex items-center text-emerald-500 font-bold">
            <span className="mr-2 h-1.5 w-1.5 rounded-full bg-emerald-500 animate-ping"></span>
            RESOLVED: 100% MATCH
          </div>
        </div>
      )
    },
    {
      id: 'analysis',
      name: 'Neural Analysis',
      monoLabel: 'SYS_ANALYZE_02',
      title: 'Real-time classification using local model weights.',
      description: 'Payload fields are processed by our offline transformer layers to detect anomalous values, extract text features, and flag compliance violations before database writes.',
      graphic: (
        <div className="border border-darkBorder bg-black/60 p-8 h-full flex flex-col justify-between font-mono text-[10px] tracking-wide text-mutedText">
          <div>// NEURAL CLASSIFIER LOGS</div>
          <div className="my-4 space-y-3">
            <div className="flex justify-between border-b border-darkBorder/40 pb-1">
              <span>WEIGHT_LAYER_01:</span>
              <span className="text-white">99.82% CONFIDENCE</span>
            </div>
            <div className="flex justify-between border-b border-darkBorder/40 pb-1">
              <span>ANOMALY_INDEX:</span>
              <span className="text-forsythia">0.02 (CLEAN)</span>
            </div>
            <div className="flex justify-between border-b border-darkBorder/40 pb-1">
              <span>PROCESS_SPEED:</span>
              <span className="text-white">1.84ms</span>
            </div>
          </div>
          <div className="flex items-center justify-between font-bold border border-emerald-500/20 bg-emerald-500/5 px-3 py-2 text-emerald-500">
            <span>MODEL STATE: OPERATIONAL</span>
            <ChartPie className="w-4 h-4 animate-spin-slow" />
          </div>
        </div>
      )
    },
    {
      id: 'automation',
      name: 'Dynamic Automation',
      monoLabel: 'SYS_AUTOMATE_03',
      title: 'Self-healing connection endpoints.',
      description: 'When targets report service errors or slow writes, Aether automatically shifts throughput lanes, buffers current packets, and routes secondary pipelines to standby locations.',
      graphic: (
        <div className="border border-darkBorder bg-black/60 p-8 h-full flex flex-col justify-between font-mono text-[10px] tracking-wide text-mutedText">
          <div>// TOPOLOGY RE-ROUTE LOGIC</div>
          <div className="my-6 flex items-center justify-center space-x-4">
            <div className="p-3 border border-darkBorder bg-darkCard text-mutedText flex flex-col items-center">
              <span>DB_EAST</span>
              <span className="text-red-500 text-[8px] mt-1 font-bold">503_ERROR</span>
            </div>
            <div className="text-forsythia font-mono">➜</div>
            <div className="p-3 border border-forsythia bg-darkCard text-white flex flex-col items-center animate-pulse">
              <span>DB_WEST</span>
              <span className="text-emerald-500 text-[8px] mt-1 font-bold">ACTIVE</span>
            </div>
          </div>
          <div className="font-bold text-forsythia text-center">
            ROUTING RE-ROUTE PATH COMPLETE
          </div>
        </div>
      )
    }
  ];

  return (
    <section className="relative border-b border-darkBorder bg-darkBg py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="font-mono text-xs uppercase tracking-widestMono text-forsythia mb-3">
            // AUTONOMY CONTROLS
          </div>
          <h2 className="text-3xl font-semibold tracking-tightest text-white sm:text-4xl md:text-5xl">
            ENGINEERED FOR AUTONOMY.
          </h2>
        </div>

        {/* Tab Navigation & Content Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Navigation Buttons */}
          <div className="lg:col-span-4 flex flex-col space-y-3 font-mono text-xs">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`text-left p-6 border transition-all duration-300 relative flex justify-between items-center group ${
                  activeTab === tab.id
                    ? 'border-white bg-white text-black'
                    : 'border-darkBorder text-mutedText hover:border-white/50 hover:text-white bg-darkCard'
                }`}
              >
                <div className="flex flex-col">
                  <span className={`text-[9px] tracking-widestMono mb-1 uppercase ${
                    activeTab === tab.id ? 'text-black/60' : 'text-mutedText'
                  }`}>
                    {tab.monoLabel}
                  </span>
                  <span className="text-sm font-medium tracking-normal font-sans">
                    {tab.name}
                  </span>
                </div>
                <div className={`w-6 h-6 border flex items-center justify-center ${
                  activeTab === tab.id ? 'border-black/20 text-black' : 'border-darkBorder text-mutedText group-hover:text-white'
                }`}>
                  ➜
                </div>
              </button>
            ))}
          </div>

          {/* Right Column: Tab Content Panel (crossfade + scale animations) */}
          <div className="lg:col-span-8 border border-darkBorder bg-black/40 relative overflow-hidden">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <div
                  key={tab.id}
                  className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center transition-all duration-300 p-8 md:p-12 ${
                    isActive 
                      ? 'opacity-100 scale-100 relative pointer-events-auto z-10 w-full' 
                      : 'opacity-0 scale-[0.97] absolute inset-0 pointer-events-none z-0 w-full'
                  }`}
                >
                  {/* Text Content */}
                  <div>
                    <span className="font-mono text-[9px] text-forsythia mb-3 block tracking-widestMono">// {tab.monoLabel}</span>
                    <h3 className="text-lg font-medium text-white mb-4 leading-snug">
                      {tab.title}
                    </h3>
                    <p className="text-xs text-mutedText leading-relaxed">
                      {tab.description}
                    </p>
                  </div>

                  {/* UI Graphic */}
                  <div className="h-fit min-h-[192px]">
                    {tab.graphic}
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
