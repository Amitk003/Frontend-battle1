import { useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { BentoAccordion } from './components/BentoAccordion';
import { Stats } from './components/Stats';
import { WorkflowBuilder } from './components/WorkflowBuilder';
import { AutonomyTabs } from './components/AutonomyTabs';
import { Pricing } from './components/Pricing';
import { CaseStudies } from './components/CaseStudies';
import { Integrations } from './components/Integrations';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';

function App() {
  // Intersection Observer for scroll animations
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.15,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const targets = document.querySelectorAll('.reveal-on-scroll');
    targets.forEach((target) => observer.observe(target));

    return () => {
      targets.forEach((target) => observer.unobserve(target));
    };
  }, []);

  return (
    <div className="min-h-screen bg-darkBg text-white selection:bg-forsythia selection:text-black">
      
      {/* 1. Header */}
      <Header />

      <main>
        {/* 2. Hero Section */}
        <Hero />

        {/* 3. Intro Text Section */}
        <section className="relative border-b border-darkBorder bg-darkBg py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl reveal-on-scroll">
              <span className="font-mono text-xs uppercase tracking-widestMono text-forsythia block mb-6">
                // SYSTEM CORE PHILOSOPHY
              </span>
              <h2 className="text-3xl font-semibold leading-tight tracking-tightest text-white sm:text-4xl md:text-5xl lg:text-6xl">
                We replace fragile pipelines with autonomous local enclaves. Your raw events are structured and dispatched at microsecond speeds.
              </h2>
            </div>
          </div>
        </section>

        {/* 4. Features Bento Grid (Bento-to-Accordion) */}
        <div className="reveal-on-scroll">
          <BentoAccordion />
        </div>

        {/* 5. Stats Grid */}
        <div className="reveal-on-scroll">
          <Stats />
        </div>

        {/* 6. Workflow Builder Demo */}
        <div className="reveal-on-scroll">
          <WorkflowBuilder />
        </div>

        {/* 7. Autonomy Tabs */}
        <div className="reveal-on-scroll">
          <AutonomyTabs />
        </div>

        {/* 8. Pricing Section */}
        <div className="reveal-on-scroll">
          <Pricing />
        </div>

        {/* 9. Case Studies Section [Light Theme] */}
        <div className="reveal-on-scroll">
          <CaseStudies />
        </div>

        {/* 10. Testimonials [Light Theme] */}
        <section className="relative bg-arcticPowder text-black py-24 border-b border-lightBorder overflow-hidden">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="font-mono text-xs uppercase tracking-widestMono text-nocturnalExpedition mb-12">
              // CLIENT TELEMETRY FEEDBACK
            </div>
            
            {/* Horizontal Scroll Containers */}
            <div className="flex space-x-8 overflow-x-auto pb-8 scrollbar-thin select-none">
              
              <div className="min-w-[300px] sm:min-w-[400px] border border-black/10 p-8 bg-white/40">
                <div className="font-mono text-[9px] text-neutral-500 mb-6">// FEEDBACK_ID: 882</div>
                <p className="text-base font-medium text-black mb-8 leading-snug">
                  "Transitioning our event log ingestion to Aether decreased end-to-end processing delays from minutes to 11ms. Absolute game changer."
                </p>
                <div className="font-mono text-xs font-semibold">VP OF ENGINEERING, TECH CORP</div>
              </div>

              <div className="min-w-[300px] sm:min-w-[400px] border border-black/10 p-8 bg-white/40">
                <div className="font-mono text-[9px] text-neutral-500 mb-6">// FEEDBACK_ID: 904</div>
                <p className="text-base font-medium text-black mb-8 leading-snug">
                  "The neural parsing enclaves work offline perfectly. We have completed over 40M enrichments with zero network overhead."
                </p>
                <div className="font-mono text-xs font-semibold">LEAD DEV, DATA INFRASTRUCTURE</div>
              </div>

              <div className="min-w-[300px] sm:min-w-[400px] border border-black/10 p-8 bg-white/40">
                <div className="font-mono text-[9px] text-neutral-500 mb-6">// FEEDBACK_ID: 955</div>
                <p className="text-base font-medium text-black mb-8 leading-snug">
                  "The self-healing topology saved our cluster three times during cloud outages. Pipelines re-routed paths in under 1 second."
                </p>
                <div className="font-mono text-xs font-semibold">HEAD OF SRE, FINTECH INTEGRATION</div>
              </div>

            </div>
          </div>
        </section>

        {/* 11. Integrations Grid */}
        <div className="reveal-on-scroll">
          <Integrations />
        </div>

        {/* 12. FAQ Section [Light Theme] */}
        <div className="reveal-on-scroll">
          <FAQ />
        </div>
      </main>

      {/* 13. Footer */}
      <Footer />

    </div>
  );
}

export default App;
