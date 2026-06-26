import React, { useEffect, useRef } from 'react';
import { ChevronRight } from './Icons';

export const Hero: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Grid details
    const columns = 35;
    const rows = 25;
    const spacingX = width / (columns - 1);
    const spacingY = height / (rows - 1);
    let time = 0;

    // Mouse positions
    const mouse = { x: -1000, y: -1000, radius: 180 };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('resize', handleResize);

    // Particle class
    class Particle {
      x: number;
      y: number;
      baseX: number;
      baseY: number;

      constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.baseX = x;
        this.baseY = y;
      }

      draw(timeVal: number) {
        if (!ctx) return;

        // Base wave movement
        const waveOffset = Math.sin(this.baseX * 0.005 + timeVal) * 15 + Math.cos(this.baseY * 0.005 + timeVal) * 15;
        const targetX = this.baseX;
        const targetY = this.baseY + waveOffset;

        // Interaction with mouse
        const dx = mouse.x - targetX;
        const dy = mouse.y - targetY;
        const distance = Math.sqrt(dx * dx + dy * dy);

        let finalX = targetX;
        let finalY = targetY;

        if (distance < mouse.radius) {
          const force = (mouse.radius - distance) / mouse.radius;
          const angle = Math.atan2(dy, dx);
          // Push away from mouse
          finalX -= Math.cos(angle) * force * 35;
          finalY -= Math.sin(angle) * force * 35;
        }

        // Draw particle
        ctx.beginPath();
        ctx.arc(finalX, finalY, 1, 0, Math.PI * 2);
        
        // Calculate opacity based on depth / height and mouse proximity
        const opacityBase = 0.15 + Math.sin(this.baseX * 0.002 + timeVal) * 0.1;
        const nearMouseOpacity = distance < mouse.radius ? (1 - distance / mouse.radius) * 0.4 : 0;
        const opacity = Math.min(opacityBase + nearMouseOpacity, 0.7);

        ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
        ctx.fill();

        // Draw subtle connecting lines if close
        if (distance < mouse.radius) {
          ctx.beginPath();
          ctx.moveTo(finalX, finalY);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = `rgba(255, 200, 1, ${(1 - distance / mouse.radius) * 0.1})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    }

    const particles: Particle[] = [];
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < columns; c++) {
        particles.push(new Particle(c * spacingX, r * spacingY));
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Background base mesh grid lines
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.02)';
      ctx.lineWidth = 0.5;
      for (let i = 0; i < width; i += 60) {
        ctx.beginPath();
        ctx.moveTo(i, 0);
        ctx.lineTo(i, height);
        ctx.stroke();
      }
      for (let j = 0; j < height; j += 60) {
        ctx.beginPath();
        ctx.moveTo(0, j);
        ctx.lineTo(width, j);
        ctx.stroke();
      }

      time += 0.005;
      particles.forEach((p) => p.draw(time));

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <section className="relative flex min-h-[90vh] flex-col justify-between overflow-hidden border-b border-darkBorder bg-darkBg">
      {/* 3D Wave Particle Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0 h-full w-full pointer-events-none" />

      {/* Decorative Glows */}
      <div className="glow-spot absolute left-1/4 top-1/3 h-96 w-96 rounded-full bg-white" />
      <div className="glow-spot-yellow absolute right-1/4 bottom-1/4 h-80 w-80 rounded-full bg-forsythia" />

      {/* Hero Content */}
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col justify-end px-4 pb-20 pt-32 sm:px-6 lg:px-8">
        
        {/* Monospace Kickers */}
        <div className="mb-6 flex flex-wrap gap-x-4 gap-y-2 font-mono text-xs uppercase tracking-widestMono text-forsythia">
          <span>// AUTONOMOUS CORE ENGINE</span>
          <span className="text-mutedText">/</span>
          <span className="text-white">SYS_REV: 02.2026</span>
        </div>

        {/* Headline */}
        <h1 className="max-w-4xl text-5xl font-semibold leading-[0.95] tracking-tightest text-white sm:text-6xl md:text-7xl lg:text-8xl">
          INTELLIGENT PIPELINES FOR COMPLEX DATA.
        </h1>

        {/* Subtitle / Paragraph */}
        <p className="mt-8 max-w-xl text-base leading-relaxed text-mutedText sm:text-lg">
          Aether automates ingestion, structure generation, and routing across your entire data topology. Zero pipeline maintenance. Continuous synchronization.
        </p>

        {/* Primary CTA Buttons */}
        <div className="mt-10 flex flex-wrap gap-4">
          
          <button className="group flex items-center border border-white bg-transparent p-0 transition-all duration-200 ease-out hover:bg-white hover:text-black">
            <span className="flex h-12 w-12 items-center justify-center border-r border-darkBorder group-hover:border-black/20 text-white group-hover:text-black transition-colors duration-200 ease-out">
              <ChevronRight className="w-5 h-5 transition-transform duration-200 ease-out group-hover:translate-x-1" />
            </span>
            <span className="px-6 font-mono text-xs uppercase tracking-widestMono text-white group-hover:text-black transition-colors duration-200 ease-out">
              Build a Workflow
            </span>
          </button>

          <button className="flex items-center border border-darkBorder bg-darkCard px-6 h-12 font-mono text-xs uppercase tracking-widestMono text-white hover:border-white transition-colors duration-200 ease-out">
            Request Demo
          </button>
          
        </div>
      </div>

      {/* Client Logos Marquee */}
      <div className="relative z-10 w-full border-t border-darkBorder bg-darkBg/60 py-5 backdrop-blur-sm overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="font-mono text-[10px] uppercase tracking-widestMono text-mutedText mb-3">
            Trusted by lead engineering organizations
          </p>
        </div>
        <div className="flex w-full overflow-hidden">
          <div className="animate-marquee flex items-center space-x-16 whitespace-nowrap text-xs font-mono tracking-widestMono text-mutedText">
            <span>NVIDIA AI</span>
            <span>HUGGING FACE</span>
            <span>DEEPMIND</span>
            <span>ANTHROPIC</span>
            <span>OPENAI</span>
            <span>SCALE AI</span>
            <span>COHERE</span>
            <span>MISTRAL</span>
            
            {/* Duplicated for infinite scrolling */}
            <span>NVIDIA AI</span>
            <span>HUGGING FACE</span>
            <span>DEEPMIND</span>
            <span>ANTHROPIC</span>
            <span>OPENAI</span>
            <span>SCALE AI</span>
            <span>COHERE</span>
            <span>MISTRAL</span>
          </div>
        </div>
      </div>
    </section>
  );
};
