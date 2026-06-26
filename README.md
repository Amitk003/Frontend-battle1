# Aether AI Landing Page

This repository contains the landing page for Aether AI, a high-performance data automation platform. 

This project was built for Phase 1 of the Frontend Battle. It is built using React, TypeScript, Vite, and Tailwind CSS.

## Key Features

### 1. Matrix-Driven Pricing (Feature 1)
- Calculates prices dynamically across three currencies: USD ($), INR (₹), and EUR (€).
- Supports toggling between Monthly and Annual billing cycles (includes a flat 20% discount).
- Factors in regional adjustments (INR has a 10% regional price reduction, EUR has a 5% premium).
- **Performance Isolation**: Updates the prices directly in the DOM using React Refs. Changing selections does not cause parent component re-renders or page reflows.

### 2. Bento-to-Accordion Wrapper (Feature 2)
- Renders as a modern Bento Grid layout on desktop screens.
- Refactors into a fluid accordion list on mobile screens.
- **Context Lock**: Shares the active index in the state. If the browser is resized, the exact active card is transferred to the open accordion panel.

### 3. Interactive Telemetry Canvas
- Contains a 2D particle wave simulation on a Canvas element that reacts to mouse movements.
- Includes an interactive pipeline node diagram where users can trigger packet simulation paths.

### 4. Interactive Case Studies
- Displays list items on a light theme background.
- Hovering over a case study row reveals a thumbnail image that tracks the mouse position.

## Project Structure

- `src/components/`: Sub-components for each section.
  - [Header.tsx](file:///C:/Users/amitk/Documents/Hackathons/Frontend-battle1/src/components/Header.tsx): Fixed top navigation bar.
  - [Hero.tsx](file:///C:/Users/amitk/Documents/Hackathons/Frontend-battle1/src/components/Hero.tsx): Canvas particle wave and client marquee.
  - [BentoAccordion.tsx](file:///C:/Users/amitk/Documents/Hackathons/Frontend-battle1/src/components/BentoAccordion.tsx): Bento-to-accordion responsive component.
  - [Stats.tsx](file:///C:/Users/amitk/Documents/Hackathons/Frontend-battle1/src/components/Stats.tsx): System metrics.
  - [WorkflowBuilder.tsx](file:///C:/Users/amitk/Documents/Hackathons/Frontend-battle1/src/components/WorkflowBuilder.tsx): Interactive pipeline demo.
  - [AutonomyTabs.tsx](file:///C:/Users/amitk/Documents/Hackathons/Frontend-battle1/src/components/AutonomyTabs.tsx): Graphic crossfading tab system.
  - [Pricing.tsx](file:///C:/Users/amitk/Documents/Hackathons/Frontend-battle1/src/components/Pricing.tsx): Multi-currency pricing engine.
  - [CaseStudies.tsx](file:///C:/Users/amitk/Documents/Hackathons/Frontend-battle1/src/components/CaseStudies.tsx): Image reveal on mouse movement.
  - [Integrations.tsx](file:///C:/Users/amitk/Documents/Hackathons/Frontend-battle1/src/components/Integrations.tsx): Grid showing database integrations.
  - [FAQ.tsx](file:///C:/Users/amitk/Documents/Hackathons/Frontend-battle1/src/components/FAQ.tsx): Question and answer accordions.
  - [Footer.tsx](file:///C:/Users/amitk/Documents/Hackathons/Frontend-battle1/src/components/Footer.tsx): Footer with joining form and large logo.

## Local Setup and Running

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run in development mode**:
   ```bash
   npm run dev
   ```

3. **Build the production application**:
   ```bash
   npm run build
   ```

## Development History and Logs
- Technical documentation: [DOCUMENTATION.md](file:///C:/Users/amitk/Documents/Hackathons/Frontend-battle1/DOCUMENTATION.md)
- Development step-by-step logs: [LOGS.md](file:///C:/Users/amitk/Documents/Hackathons/Frontend-battle1/LOGS.md)
