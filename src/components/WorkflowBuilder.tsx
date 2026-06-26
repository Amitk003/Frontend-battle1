import React, { useState } from 'react';
import { ArrowPath, Cube16Solid, ArrowTrendingUp } from './Icons';

export const WorkflowBuilder: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [inIngestion, setInIngestion] = useState(false);
  const [dataCount, setDataCount] = useState(1024);

  const triggerPipeline = () => {
    if (inIngestion) return;
    setInIngestion(true);
    setActiveStep(1);
    
    // Simulate step 1 to step 2 transition
    setTimeout(() => {
      setActiveStep(2);
      // Simulate step 2 to step 3 transition
      setTimeout(() => {
        setActiveStep(3);
        setDataCount((prev) => prev + Math.floor(Math.random() * 256) + 128);
        
        // Complete cycle
        setTimeout(() => {
          setInIngestion(false);
          setActiveStep(0);
        }, 1000);
      }, 1200);
    }, 1200);
  };

  return (
    <section id="workflow" className="relative border-b border-darkBorder bg-darkBg py-24">
      {/* Mesh Background */}
      <div className="grid-mesh absolute inset-0 opacity-10 pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-16 text-center">
          <div className="font-mono text-xs uppercase tracking-widestMono text-forsythia mb-3">
            // INTERACTIVE COMPONENT
          </div>
          <h2 className="text-3xl font-semibold tracking-tightest text-white sm:text-4xl md:text-5xl">
            BUILD LIVE PIPELINES.
          </h2>
          <p className="mt-4 text-sm text-mutedText max-w-md mx-auto">
            Click trigger below to watch our live telemetry routing simulation trace mock JSON packets.
          </p>
        </div>

        {/* Interactive Canvas UI */}
        <div className="border border-darkBorder bg-black/60 p-8 sm:p-12 mb-12 relative overflow-hidden">
          
          {/* Top Panel stats */}
          <div className="flex justify-between border-b border-darkBorder pb-6 mb-12 font-mono text-[10px] uppercase tracking-widestMono text-mutedText">
            <div>PIPELINE_ID: PX-883</div>
            <div className="flex items-center">
              <span className={`w-2 h-2 rounded-full mr-2 ${inIngestion ? 'bg-forsythia animate-ping' : 'bg-emerald-500'}`}></span>
              STATUS: {inIngestion ? 'ROUTING_PACKETS' : 'STANDBY'}
            </div>
            <div>RECORD_COUNT: {dataCount}</div>
          </div>

          {/* Node Diagram */}
          <div className="relative flex flex-col md:flex-row items-center justify-between gap-16 md:gap-8 min-h-[220px] max-w-4xl mx-auto py-8">
            
            {/* SVG Connecting Paths (drawn underneath the nodes on desktop) */}
            <div className="absolute inset-0 hidden md:block z-0">
              <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                {/* Connection Path 1 -> 2 */}
                <path 
                  d="M 120,110 L 410,110" 
                  stroke="rgba(255,255,255,0.08)" 
                  strokeWidth="2" 
                />
                {inIngestion && activeStep === 1 && (
                  <path 
                    d="M 120,110 L 410,110" 
                    stroke="#FFC801" 
                    strokeWidth="2" 
                    strokeDasharray="8 8"
                    className="animate-[marquee_2s_linear_infinite]"
                  />
                )}

                {/* Connection Path 2 -> 3 */}
                <path 
                  d="M 410,110 L 700,110" 
                  stroke="rgba(255,255,255,0.08)" 
                  strokeWidth="2" 
                />
                {inIngestion && activeStep === 2 && (
                  <path 
                    d="M 410,110 L 700,110" 
                    stroke="#FFC801" 
                    strokeWidth="2" 
                    strokeDasharray="8 8"
                    className="animate-[marquee_2s_linear_infinite]"
                  />
                )}
              </svg>
            </div>

            {/* Node 1: Ingestion */}
            <div className="flex flex-col items-center z-10 w-44">
              <div className={`w-20 h-20 border rounded-none flex items-center justify-center bg-black transition-all duration-300 ${
                activeStep === 1 ? 'border-forsythia text-forsythia shadow-lg shadow-forsythia/10 scale-105' : 'border-darkBorder text-mutedText'
              }`}>
                <ArrowPath className="w-8 h-8" />
              </div>
              <span className="font-mono text-xs text-white mt-4 font-medium">1. INGESTION</span>
              <span className="font-mono text-[9px] text-mutedText uppercase mt-1">source://api_stream</span>
            </div>

            {/* Node 2: Neural Core Parser */}
            <div className="flex flex-col items-center z-10 w-44">
              <div className={`w-20 h-20 border rounded-none flex items-center justify-center bg-black transition-all duration-300 ${
                activeStep === 2 ? 'border-forsythia text-forsythia shadow-lg shadow-forsythia/10 scale-105' : 'border-darkBorder text-mutedText'
              }`}>
                <Cube16Solid className="w-8 h-8" />
              </div>
              <span className="font-mono text-xs text-white mt-4 font-medium">2. NEURAL PARSE</span>
              <span className="font-mono text-[9px] text-mutedText uppercase mt-1">model://neural_x2</span>
            </div>

            {/* Node 3: Target Database */}
            <div className="flex flex-col items-center z-10 w-44">
              <div className={`w-20 h-20 border rounded-none flex items-center justify-center bg-black transition-all duration-300 ${
                activeStep === 3 ? 'border-emerald-500 text-emerald-500 scale-105' : 'border-darkBorder text-mutedText'
              }`}>
                <ArrowTrendingUp className="w-8 h-8" />
              </div>
              <span className="font-mono text-xs text-white mt-4 font-medium">3. DISPATCH</span>
              <span className="font-mono text-[9px] text-mutedText uppercase mt-1">db://warehouse</span>
            </div>

          </div>

          {/* Trigger button inside builder container */}
          <div className="mt-8 flex justify-center">
            <button
              onClick={triggerPipeline}
              disabled={inIngestion}
              className={`px-8 py-3 font-mono text-xs uppercase tracking-widestMono border transition-all duration-300 ${
                inIngestion 
                  ? 'border-darkBorder text-mutedText bg-black cursor-not-allowed'
                  : 'border-white text-white hover:bg-white hover:text-black'
              }`}
            >
              {inIngestion ? 'Pipeline running...' : 'Trigger Telemetry Ingest'}
            </button>
          </div>

        </div>

        {/* Feature Grid Below Builder */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-6 border border-darkBorder bg-black/40">
            <span className="font-mono text-[10px] text-forsythia mb-2 block">// FLOW_TELEMETRY</span>
            <h4 className="text-sm font-medium text-white mb-2">Automated Serialization</h4>
            <p className="text-xs text-mutedText leading-relaxed">
              Serializes JSON, CSV, or Avro payloads instantly into compressed binary structures for internal routing.
            </p>
          </div>
          <div className="p-6 border border-darkBorder bg-black/40">
            <span className="font-mono text-[10px] text-forsythia mb-2 block">// TOPOLOGY_MAP</span>
            <h4 className="text-sm font-medium text-white mb-2">Flexible Topology</h4>
            <p className="text-xs text-mutedText leading-relaxed">
              Easily connect multiple pipelines dynamically. Nodes connect via optimized network-mesh protocols.
            </p>
          </div>
          <div className="p-6 border border-darkBorder bg-black/40">
            <span className="font-mono text-[10px] text-forsythia mb-2 block">// ERROR_FALLBACK</span>
            <h4 className="text-sm font-medium text-white mb-2">Resilient Buffer</h4>
            <p className="text-xs text-mutedText leading-relaxed">
              If downstream exports fail, data is automatically buffered in secure enclaves with automated exponential retries.
            </p>
          </div>
          <div className="p-6 border border-darkBorder bg-black/40">
            <span className="font-mono text-[10px] text-forsythia mb-2 block">// AUDIT_LOG</span>
            <h4 className="text-sm font-medium text-white mb-2">Immutable Logs</h4>
            <p className="text-xs text-mutedText leading-relaxed">
              Every operation publishes trace events recorded directly on cryptographically sealed local logs.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
