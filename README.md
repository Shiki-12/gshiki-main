# Shiki | Main Website 

This is the main lobby/root landing page for my domain. It serves as a personal "link-in-bio" hub to connect visitors to my portfolio, socials, and other projects.

## Design & Aesthetic

The site is built with a deep-tech, cyberpunk aesthetic designed to make a stunning first impression:
- **Dynamic Background:** A mesmerizing, physics-based WebGL Aurora Shader (Three.js) running in real-time.
- **Glassmorphism UI:** Floating, semi-transparent "Liquid Glass" buttons that react to hover states with SVG displacement filters.
- **Typography:** Bold, gradient-filled typography (`Orbitron` & `Inter`) with neon drop-shadows.

## Tech Stack

- **Framework:** [Next.js (App Router)](https://nextjs.org/)
- **Language:** TypeScript
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **3D Graphics:** [Three.js](https://threejs.org/) (Custom WebGL Shaders)
- **UI Components:** Built on [shadcn/ui](https://ui.shadcn.com/) architecture
- **Icons:** [Lucide React](https://lucide.dev/)

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Link Structure

The bento-grid currently routes to:
- **Portfolio:** `/portofolio` (Internal Next.js route)
- **Instagram:** External link
- **Facebook:** External link
- **Steam:** External link

*(Note: Update the URLs in `src/app/page.tsx` when deploying)*
