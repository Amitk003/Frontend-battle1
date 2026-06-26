import React from 'react';
import { Cube16Solid, ChevronRight, Search } from './Icons';

export const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-darkBorder bg-darkBg/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Left Section: Logo & Tech Metadata */}
        <div className="flex items-center space-x-[10.5px]">
          <a href="#" className="flex items-center space-x-1.5 font-bold tracking-tightest text-white text-[18.4px]">
            <Cube16Solid className="w-[18.4px] h-[18.4px] text-forsythia" />
            <span>AETHER</span>
          </a>
          <div className="hidden md:flex items-center space-x-[8.5px] border-l border-darkBorder pl-[12.5px] font-mono text-[9.2px] tracking-widestMono text-mutedText whitespace-nowrap translate-y-[1px]">
            <span className="flex items-center">
              <span className="mr-1 h-[4.2px] w-[4.2px] rounded-full bg-emerald-500 animate-ping"></span>
              CORE_SYS: ACTIVE
            </span>
            <span>/</span>
            <span>PING: 11MS</span>
            <span>/</span>
            <span>LOC: US-EAST</span>
          </div>
        </div>

        {/* Center Section: Navigation Links */}
        <nav className="hidden lg:flex space-x-5 xl:space-x-8 text-sm font-medium text-mutedText">
          <a href="#features" className="transition-colors hover:text-white">Features</a>
          <a href="#workflow" className="transition-colors hover:text-white">Pipelines</a>
          <a href="#pricing" className="transition-colors hover:text-white">Pricing</a>
          <a href="#case-studies" className="transition-colors hover:text-white">Solutions</a>
          <a href="#faq" className="transition-colors hover:text-white">Docs</a>
        </nav>

        {/* Right Section: Search & Call to Action */}
        <div className="flex items-center ml-6 lg:ml-8">
          {/* Fixed-width wrapper prevents the expanding search bar from shifting adjacent elements */}
          <div className="hidden md:flex items-center justify-start w-44 h-full flex-none">
            {/* Global Search Bar - Expands to fill the w-44 container */}
            <div className="flex items-center border border-darkBorder bg-darkCard px-3 py-1.5 text-xs w-32 hover:w-44 focus-within:w-44 transition-all duration-200 ease-out">
              <Search className="w-3.5 h-3.5 text-mutedText mr-2 flex-shrink-0" />
              <input 
                type="text" 
                placeholder="Search..." 
                className="bg-transparent text-white font-mono text-[10px] w-full placeholder:text-mutedText/60 focus:outline-none"
              />
            </div>
          </div>

          {/* Launch Console Button - Fixed location adjacent to search bar outline */}
          <button className="ml-4 group relative flex items-center overflow-hidden border border-white bg-transparent px-4 py-2 font-mono text-xs uppercase tracking-wider text-white transition-all duration-200 ease-out hover:bg-white hover:text-black flex-none">
            <div className="mr-2 flex items-center justify-center border-r border-darkBorder group-hover:border-black/20 pr-2 transition-colors duration-200">
              <ChevronRight className="w-3.5 h-3.5 transition-transform duration-200 ease-out group-hover:translate-x-1" />
            </div>
            <span>Launch Console</span>
          </button>
        </div>
        
      </div>
    </header>
  );
};
