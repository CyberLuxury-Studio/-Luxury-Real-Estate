# Code Generation Prompt for Prototype Front Page

*Copy and paste the following prompt into your preferred AI coding assistant (e.g., Cursor, v0, GitHub Copilot Chat, etc.) to generate the foundational prototype of the landing page.*

***

**System Context & Role:**
Act as an Expert Next.js Architect and UI/UX Frontend Developer. Your task is to build a single-page prototype for a "Cyberpunk Luxury Real Estate" landing page, intended for sale as a premium template on UI8.

**Tech Stack Requirements:**
*   **Framework:** Next.js (App Router, strictly use the `/app` directory, React 18+).
*   **Language:** TypeScript.
*   **Styling:** Tailwind CSS.
*   **Animations:** Framer Motion (`framer-motion`).
*   **3D Elements:** Spline (`@splinetool/react-spline`).
*   **Icons:** `lucide-react`.

**Design System & Theme:**
*   **Theme:** Modern luxury real estate combined with a high-tech, glowing, neon cyberpunk aesthetic.
*   **Colors:** Backgrounds should be deep space black (`#050505`) and dark slate (`#0B0C10`). Primary cyber accents are Cyan (`#00F0FF`), Neon Magenta (`#FF003C`), and Electric Purple (`#8A2BE2`). Use muted gold/platinum for luxury text accents.
*   **Typography:** Use a futuristic, geometric sans-serif for headings (like `Space Grotesk`) and a clean modern sans-serif for body text (like `Inter`).
*   **Styling Details:** Extensive use of `backdrop-blur-md` (glassmorphism) mixed with thin (1px) borders that have glowing hover states (`box-shadow`). Text should have subtle glowing drop-shadows where appropriate.

**Component Structure & Requirements (Single Page Entry `app/page.tsx`):**
Implement the entire landing page flowing through these sections. Break them out into separate conceptual components within the file (or assume a standard components folder structure if generating multiple files):

1.  **Hero Section:**
    *   Full viewport height (`min-h-screen`), centered content, `overflow-hidden`.
    *   **Background:** An HTML5 `<video>` tag set to `autoPlay muted loop playsInline`, acting as the background (`z-0`). Add a dark overlay (`bg-black/60`) over it. (Use a placeholder video URL like `https://cdn.pixabay.com/video/2020/05/25/40149-425114707_tiny.mp4` or a solid dark gradient as fallback).
    *   **Foreground Spline:** Implement a dynamically loaded (lazy loaded via `next/dynamic` to avoid SSR issues) Spline scene (`@splinetool/react-spline`) positioned over the video but behind the text (`z-10`). Use a sample public Spline URL.
    *   **Content:** Large luxury headline "Future of Living", a subheadline, and two glassmorphic buttons ("Explore Properties", "View Floorplans") with neon hover effects (`z-20`). Use Framer Motion for a fade-up spring animation on load.

2.  **Property Features (Bento Grid):**
    *   A responsive grid (1 col mobile, 2 col tablet, 3 col desktop).
    *   Cards should feature AI climate control, biometric security, and infinity pools.
    *   **Styling:** Dark translucent background (`bg-white/5` or `bg-black/50`), blurred backdrop, thin cyan borders. Hovering makes the cards float up slightly and intensifies a neon border glow. Use Framer Motion `whileInView` for scroll reveal staggers.

3.  **Floorplan Sliders:**
    *   A full-width horizontal scrolling section or an interactive Framer Motion slider.
    *   Showcase "2D high-tech glowing blueprint" floorplans (use placeholder `<img>` tags styled with cyberpunk borders).
    *   Include property stats (sq ft, beds, baths) next to or overlaying the image.
    *   **Animation:** Use Framer Motion's `drag="x"` functionality for an interactive carousel.

4.  **Pricing / Investment Tiers:**
    *   3-column pricing section ("Standard", "Premium", "Penthouse").
    *   The middle "Premium" or "Penthouse" tier should be visually distinct (scaled up, glowing border).
    *   Hovering over any card should trigger an animated gradient border effect.

5.  **CTA & Footer:**
    *   **CTA:** A heavy visual block prompting the user to schedule a viewing. Include an email input field with a glowing "Submit" button.
    *   **Footer:** A simple, elegant layout with links, legal, and social icons (`lucide-react`).

**Code Quality Instructions:**
*   Ensure all components are strictly typed using TypeScript interfaces.
*   Keep the code clean, modular, and heavily commented so UI8 buyers can easily understand how to customize the theme colors and swap out assets.
*   Use `"use client"` directives only where necessary (e.g., where Framer Motion or Spline is used).

**Output Expectation:**
Please generate the complete code for `app/page.tsx` (and any necessary sub-components or `layout.tsx` changes if needed) combining all these elements into a single, cohesive, scrolling masterpiece.