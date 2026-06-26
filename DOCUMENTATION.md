# Project Documentation

This is a single page application built for a high performance AI platform. It is built using React, TypeScript, Vite, and Tailwind CSS.

## File Paths

- Main App file: [src/App.tsx](file:///C:/Users/amitk/Documents/Hackathons/Frontend-battle1/src/App.tsx)
- Styling: [src/index.css](file:///C:/Users/amitk/Documents/Hackathons/Frontend-battle1/src/index.css)
- Tailwind Config: [tailwind.config.js](file:///C:/Users/amitk/Documents/Hackathons/Frontend-battle1/tailwind.config.js)
- Custom Components Directory: [src/components](file:///C:/Users/amitk/Documents/Hackathons/Frontend-battle1/src/components)

## Core Architecture and Features

### 1. Vector Icons (SVGs)
All the original vector icons provided in the workspace are loaded as React components. They are in [src/components/Icons.tsx](file:///C:/Users/amitk/Documents/Hackathons/Frontend-battle1/src/components/Icons.tsx). They support custom sizes and colors using CSS classes.

### 2. Header and Navigation
The header is fixed at the top of the page. It has a blur effect. It displays live network metadata metrics. The actions button shifts on hover.

### 3. Hero Section
The hero section has an interactive 2D canvas wave simulation. The particles move away from the mouse. The title uses tight tracking. A horizontal marquee at the bottom shows client names.

### 4. Bento Grid to Accordion (Feature 2)
The bento grid is shown on desktop viewports. On mobile viewports, the grid changes into a fluid accordion.
- **Context Lock**: The active tab index is shared in the state. If the window is resized from desktop to mobile, the exact card index is transferred to the active accordion panel. The accordion panel expands smoothly.
- **Zero Libraries**: No external animation libraries are used. This complies with the rules.

### 5. Statistics Grid
Shows performance metrics. It uses top left and top right brackets. The boundaries are defined by a thin border grid.

### 6. Workflow Builder
An interactive node diagram. It uses SVGs to connect nodes. When triggered, it animates packet transmissions along the paths and counts items.

### 7. Performance Isolated Pricing Tiers (Feature 1)
Calculates and updates prices dynamically across different currencies (USD, INR, EUR) and billing cycles (Monthly vs Annual).
- **Tariff Logic**: Factors in base rates, regional adjustments (INR has a 10% discount, EUR has a 5% premium), and a 20% annual billing discount.
- **Isolated Rendering**: The price updates bypass React's standard re-rendering flow. We use React Refs to update the text content of the price nodes directly in the DOM. This prevents component tree reflow and page layout thrashing.

### 8. Case Studies (Light Theme)
Shows list items on a light background. Hovering over a case study row reveals a thumbnail image that follows the mouse cursor position.

### 9. FAQ Section (Light Theme)
Displays a sticky header on the left. The right side contains accordions that expand when clicked.

---

This code compiles successfully with no warnings. You can run it locally with the dev commands.
