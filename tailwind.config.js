/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Theme Colors
        arcticPowder: '#F1F6F4',
        forsythia: '#FFC801',
        nocturnalExpedition: '#114C5A',
        mysticMint: '#D9E8E2',
        deepSaffron: '#FF9932',
        oceanicNoir: '#172B36',
        
        // Standard Dark/Light mode accents
        darkBg: '#000000',
        darkCard: '#0A0A0A',
        darkBorder: 'rgba(255, 255, 255, 0.15)',
        lightBg: '#F5F5F5',
        lightBorder: 'rgba(0, 0, 0, 0.1)',
        mutedText: '#888888',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      letterSpacing: {
        tightest: '-0.02em',
        widestMono: '0.05em',
      },
    },
  },
  plugins: [],
}
