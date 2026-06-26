import React, { useEffect, useRef } from 'react';
import { ChevronDown } from './Icons';

interface PricingTier {
  id: string;
  name: string;
  baseMonthlyUSD: number;
  features: string[];
}

const tiers: PricingTier[] = [
  {
    id: 'starter',
    name: 'Starter Node',
    baseMonthlyUSD: 29,
    features: [
      'Up to 1,000,000 requests / mo',
      '2 active ingestion pipelines',
      'Schema inference parser',
      'Basic error fallback system',
      'Email support (24h response)',
    ]
  },
  {
    id: 'pro',
    name: 'Pro Cluster',
    baseMonthlyUSD: 79,
    features: [
      'Up to 10,000,000 requests / mo',
      '10 active ingestion pipelines',
      'Neural Core parsing (X2 weights)',
      'Dynamic stream router node',
      'Priority support (2h response)',
    ]
  },
  {
    id: 'enterprise',
    name: 'Enterprise Grid',
    baseMonthlyUSD: 249,
    features: [
      'Unlimited request capacity',
      'Unlimited pipelines & connections',
      'Isolated neural sandbox runtimes',
      'Zero-knowledge encryption guard',
      'Dedicated cluster support (SLA)',
    ]
  }
];

// Matrix config: rate = base conversion rate, tariff = regional adjustment multiplier
const currencyMatrix = {
  USD: { symbol: '$', rate: 1.0, tariff: 1.0 },
  INR: { symbol: '₹', rate: 83.0, tariff: 0.9 }, // 10% regional price reduction
  EUR: { symbol: '€', rate: 0.92, tariff: 1.05 } // 5% tariff premium
};

export const Pricing: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Non-React mutable state tracking
  const currentBilling = useRef<'monthly' | 'annual'>('monthly');
  const currentCurrency = useRef<'USD' | 'INR' | 'EUR'>('USD');

  // Calculates the price for a tier based on current selections
  const calculatePrice = (base: number, billing: 'monthly' | 'annual', currency: 'USD' | 'INR' | 'EUR') => {
    const config = currencyMatrix[currency];
    const discount = billing === 'annual' ? 0.8 : 1.0; // 20% annual discount
    const pricePerMonth = base * discount * config.rate * config.tariff;
    
    return {
      monthlyEquivalent: Math.round(pricePerMonth),
      totalBilled: Math.round(pricePerMonth * (billing === 'annual' ? 12 : 1)),
      symbol: config.symbol
    };
  };

  // Perform performance-isolated DOM updates
  const updateDOM = () => {
    if (!containerRef.current) return;

    const billing = currentBilling.current;
    const currency = currentCurrency.current;

    tiers.forEach((tier) => {
      const res = calculatePrice(tier.baseMonthlyUSD, billing, currency);

      // Find individual DOM nodes and update text content directly
      const priceValNode = containerRef.current?.querySelector(`[data-price-val="${tier.id}"]`);
      const priceSymbolNode = containerRef.current?.querySelector(`[data-price-symbol="${tier.id}"]`);
      const priceSubNode = containerRef.current?.querySelector(`[data-price-sub="${tier.id}"]`);

      if (priceValNode) {
        priceValNode.textContent = res.monthlyEquivalent.toLocaleString();
      }
      if (priceSymbolNode) {
        priceSymbolNode.textContent = res.symbol;
      }
      if (priceSubNode) {
        if (billing === 'annual') {
          priceSubNode.textContent = `Billed annually (${res.symbol}${res.totalBilled.toLocaleString()}/yr)`;
        } else {
          priceSubNode.textContent = 'Billed monthly';
        }
      }
    });
  };

  // Setup DOM event listeners upon mounting to avoid React re-render
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Toggle button elements
    const btnMonthly = container.querySelector('#btn-billing-monthly') as HTMLButtonElement;
    const btnAnnual = container.querySelector('#btn-billing-annual') as HTMLButtonElement;

    // Custom dropdown elements
    const dropdownBtn = container.querySelector('#currency-dropdown-btn') as HTMLButtonElement;
    const dropdownMenu = container.querySelector('#currency-dropdown-menu') as HTMLDivElement;
    const dropdownOptions = container.querySelectorAll('[data-currency-opt]');

    const toggleBilling = (mode: 'monthly' | 'annual') => {
      currentBilling.current = mode;
      
      if (mode === 'monthly') {
        btnMonthly.classList.add('bg-white', 'text-black');
        btnMonthly.classList.remove('bg-transparent', 'text-white');
        btnAnnual.classList.add('bg-transparent', 'text-white');
        btnAnnual.classList.remove('bg-white', 'text-black');
      } else {
        btnAnnual.classList.add('bg-white', 'text-black');
        btnAnnual.classList.remove('bg-transparent', 'text-white');
        btnMonthly.classList.add('bg-transparent', 'text-white');
        btnMonthly.classList.remove('bg-white', 'text-black');
      }
      updateDOM();
    };

    const handleDropdownToggle = (e: MouseEvent) => {
      e.stopPropagation();
      const isHidden = dropdownMenu.classList.contains('hidden');
      if (isHidden) {
        dropdownMenu.classList.remove('hidden');
      } else {
        dropdownMenu.classList.add('hidden');
      }
    };

    const handleDocumentClick = () => {
      dropdownMenu.classList.add('hidden');
    };

    // Attach billing listeners
    btnMonthly?.addEventListener('click', () => toggleBilling('monthly'));
    btnAnnual?.addEventListener('click', () => toggleBilling('annual'));

    // Attach currency dropdown listeners
    dropdownBtn?.addEventListener('click', handleDropdownToggle);
    document.addEventListener('click', handleDocumentClick);

    dropdownOptions.forEach((opt) => {
      opt.addEventListener('click', (e) => {
        const val = (e.currentTarget as HTMLElement).getAttribute('data-currency-opt') as 'USD' | 'INR' | 'EUR';
        currentCurrency.current = val;
        
        // Update label
        const labelSpan = dropdownBtn.querySelector('#currency-label');
        if (labelSpan) labelSpan.textContent = val;

        // Hide menu
        dropdownMenu.classList.add('hidden');
        updateDOM();
      });
    });

    // Run initial rendering values
    updateDOM();

    return () => {
      btnMonthly?.removeEventListener('click', () => toggleBilling('monthly'));
      btnAnnual?.removeEventListener('click', () => toggleBilling('annual'));
      dropdownBtn?.removeEventListener('click', handleDropdownToggle);
      document.removeEventListener('click', handleDocumentClick);
    };
  }, []);

  return (
    <section id="pricing" ref={containerRef} className="relative border-b border-darkBorder bg-darkBg py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="font-mono text-xs uppercase tracking-widestMono text-forsythia mb-3">
              // PRICING SYSTEM
            </div>
            <h2 className="text-3xl font-semibold tracking-tightest text-white sm:text-4xl md:text-5xl">
              PRECISE COST MAPPING.
            </h2>
          </div>

          {/* Switchers - State is isolated to the DOM */}
          <div className="flex items-center space-x-4">
            
            {/* Currency Custom Dropdown */}
            <div className="relative">
              <button 
                id="currency-dropdown-btn"
                className="flex items-center justify-between border border-darkBorder bg-darkCard px-4 py-2 font-mono text-xs text-white hover:border-white w-28"
              >
                <span id="currency-label">USD</span>
                <ChevronDown className="w-4 h-4 text-mutedText ml-2" />
              </button>
              
              <div 
                id="currency-dropdown-menu"
                className="absolute right-0 mt-1 w-28 bg-darkCard border border-darkBorder hidden z-30 font-mono text-xs divide-y divide-darkBorder"
              >
                <button data-currency-opt="USD" className="w-full text-left px-4 py-2 text-white hover:bg-white hover:text-black">USD</button>
                <button data-currency-opt="INR" className="w-full text-left px-4 py-2 text-white hover:bg-white hover:text-black">INR</button>
                <button data-currency-opt="EUR" className="w-full text-left px-4 py-2 text-white hover:bg-white hover:text-black">EUR</button>
              </div>
            </div>

            {/* Billing Toggle (Monthly / Annual) */}
            <div className="flex border border-darkBorder p-[2px] bg-darkCard font-mono text-xs">
              <button 
                id="btn-billing-monthly" 
                className="px-4 py-1.5 transition-all bg-white text-black"
              >
                Monthly
              </button>
              <button 
                id="btn-billing-annual" 
                className="px-4 py-1.5 transition-all bg-transparent text-white"
              >
                Annual
              </button>
            </div>

          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {tiers.map((tier) => (
            <div 
              key={tier.id}
              className={`border border-darkBorder p-8 flex flex-col justify-between min-h-[480px] bg-black/40 hover:bg-black/80 hover:border-white/30 transition-all duration-300 relative ${
                tier.id === 'pro' ? 'ring-1 ring-forsythia/30 border-forsythia/20' : ''
              }`}
            >
              {tier.id === 'pro' && (
                <div className="absolute top-0 right-8 -translate-y-1/2 bg-forsythia text-black font-mono text-[9px] uppercase tracking-widestMono px-3 py-1 font-bold">
                  Recommended Node
                </div>
              )}

              {/* Card Header */}
              <div>
                <h3 className="font-mono text-xs text-mutedText uppercase tracking-widestMono mb-1">
                  // {tier.id}
                </h3>
                <h4 className="text-xl font-medium text-white mb-6">
                  {tier.name}
                </h4>

                {/* Price Display - Updated Directly */}
                <div className="flex items-baseline mb-2">
                  <span 
                    data-price-symbol={tier.id}
                    className="text-2xl font-semibold text-white mr-1"
                  >
                    $
                  </span>
                  <span 
                    data-price-val={tier.id}
                    className="text-5xl font-bold tracking-tightest text-white"
                  >
                    --
                  </span>
                  <span className="text-xs text-mutedText ml-2 font-mono">/mo</span>
                </div>

                <div 
                  data-price-sub={tier.id}
                  className="text-xs text-mutedText font-mono mb-8"
                >
                  Billed monthly
                </div>

                {/* Features List */}
                <ul className="space-y-4 border-t border-darkBorder pt-6">
                  {tier.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-xs text-mutedText">
                      <span className="w-1.5 h-1.5 bg-white mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Action */}
              <div className="mt-8">
                <button className={`w-full py-3 font-mono text-xs uppercase tracking-widestMono transition-all duration-300 ${
                  tier.id === 'pro'
                    ? 'bg-forsythia text-black hover:bg-white hover:text-black'
                    : 'border border-darkBorder text-white hover:border-white'
                }`}>
                  Provision Node
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
