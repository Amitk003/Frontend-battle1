import React from 'react';
import { Cube16Solid } from './Icons';

export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-darkBg text-white pt-24 pb-12 border-t border-darkBorder">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Newsletter & Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-16 border-b border-darkBorder">
          
          {/* Column 1: Newsletter */}
          <div className="md:col-span-2 space-y-6">
            <a href="#" className="flex items-center space-x-2 font-bold tracking-tightest text-white text-xl">
              <Cube16Solid className="w-5 h-5 text-forsythia" />
              <span>AETHER</span>
            </a>
            <p className="text-xs text-mutedText max-w-sm leading-relaxed">
              Subscribe to receive raw engineering updates, API revision logs, and performance optimization briefs.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="flex max-w-sm">
              <input 
                type="email" 
                placeholder="developer@domain.com"
                required
                className="w-full bg-darkCard border border-darkBorder px-4 py-2 text-xs font-mono text-white focus:border-white focus:outline-none placeholder:text-mutedText"
              />
              <button 
                type="submit"
                className="bg-white text-black px-6 font-mono text-xs uppercase tracking-wider hover:bg-forsythia hover:text-black transition-colors"
              >
                Join
              </button>
            </form>
          </div>

          {/* Column 2: System Links */}
          <div>
            <span className="font-mono text-[9px] text-mutedText uppercase tracking-widestMono block mb-4">// TELEMETRY</span>
            <ul className="space-y-2 text-xs text-mutedText">
              <li><a href="#" className="hover:text-white transition-colors">API Docs</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cluster Status</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Release Logs</a></li>
              <li><a href="#" className="hover:text-white transition-colors">System Benchmarks</a></li>
            </ul>
          </div>

          {/* Column 3: Legal & Admin */}
          <div>
            <span className="font-mono text-[9px] text-mutedText uppercase tracking-widestMono block mb-4">// CONTROLS</span>
            <ul className="space-y-2 text-xs text-mutedText">
              <li><a href="#" className="hover:text-white transition-colors">Security Enclaves</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">SLA Guarantees</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Console Logins</a></li>
            </ul>
          </div>

        </div>

        {/* Mega Typography Logo */}
        <div className="pt-16 pb-8 select-none overflow-hidden">
          <h2 className="text-[12vw] font-bold leading-none tracking-tighter text-neutral-900 text-center font-sans uppercase">
            Aether
          </h2>
        </div>

        {/* Bottom copyright & system metadata */}
        <div className="flex flex-col sm:flex-row items-center justify-between font-mono text-[10px] text-mutedText pt-8">
          <div>&copy; 2026 Aether Automation. All rights reserved.</div>
          <div className="mt-2 sm:mt-0">// VERSION: 1.0.0-PROD</div>
        </div>

      </div>
    </footer>
  );
};
