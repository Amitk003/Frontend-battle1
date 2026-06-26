import React from 'react';
import { Cube16Solid, ChevronRight } from './Icons';

export const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-darkBorder bg-darkBg/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Left Section: Logo & Tech Metadata */}
        <div className="flex items-center space-x-6">
          <a href="#" className="flex items-center space-x-2 font-bold tracking-tightest text-white text-xl">
            <Cube16Solid className="w-5 h-5 text-forsythia animate-pulse" />
            <span>AETHER</span>
          </a>
          <div className="hidden md:flex items-center space-x-3 border-l border-darkBorder pl-6 font-mono text-[10px] tracking-widestMono text-mutedText">
            <span className="flex items-center">
              <span className="mr-1.5 h-1.5 w-1.5 rounded-full bg-emerald-500 animate-ping"></span>
              CORE_SYS: ACTIVE
            </span>
            <span>/</span>
            <span>PING: 11MS</span>
            <span>/</span>
            <span>LOC: US-EAST</span>
          </div>
        </div>

        {/* Center Section: Navigation Links */}
        <nav className="hidden lg:flex space-x-8 text-sm font-medium text-mutedText">
          <a href="#features" className="transition-colors hover:text-white">Features</a>
          <a href="#workflow" className="transition-colors hover:text-white">Pipelines</a>
          <a href="#pricing" className="transition-colors hover:text-white">Pricing</a>
          <a href="#case-studies" className="transition-colors hover:text-white">Solutions</a>
          <a href="#faq" className="transition-colors hover:text-white">Docs</a>
        </nav>

        {/* Right Section: Call to Action */}
        <div className="flex items-center space-x-4">
          <button className="group relative flex items-center overflow-hidden border border-white bg-transparent px-4 py-2 font-mono text-xs uppercase tracking-wider text-white transition-all duration-300 ease-out hover:bg-white hover:text-black">
            <div className="mr-2 flex items-center justify-center border-r border-darkBorder group-hover:border-black/20 pr-2 transition-colors duration-300">
              <ChevronRight className="w-3.5 h-3.5 transition-transform duration-300 ease-out group-hover:translate-x-1" />
            </div>
            <span>Launch Console</span>
          </button>
        </div>
        
      </div>
    </header>
  );
};
