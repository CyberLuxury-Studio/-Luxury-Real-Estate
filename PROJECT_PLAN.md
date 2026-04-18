# Cyberpunk Luxury Real Estate Landing Page
**Target Market:** UI8 (Premium UI/UX Templates)
**Tech Stack:** Next.js 16.2.4 (App Router), Tailwind CSS, Framer Motion, Spline, TypeScript.
**Theme:** Modern-day luxury real estate presented with high-tech, glowing, neon cyber-aesthetics.

---

## 1. Project Structure
Using the Next.js App Router convention for an organized, maintainable single-page template.

```text
/
├── public/                 # Static assets
│   ├── videos/             # Background videos
│   ├── images/             # Floorplans, property photos
│   └── fonts/              # Custom cyber/luxury typography
├── src/
│   ├── app/
│   │   ├── layout.tsx      # Global layout, fonts, and theme providers
│   │   ├── page.tsx        # Main landing page (Single-page entry)
│   │   └── globals.css     # Global styles & Tailwind configuration
│   ├── components/         # Reusable UI elements
│   │   ├── ui/             # Buttons, inputs, sliders, cards
│   │   ├── sections/       # Hero, Features, Floorplans, Pricing, Footer
│   │   └── spline/         # Spline 3D wrapper components
│   ├── lib/                # Utilities and helpers
│   │   ├── utils.ts        # Tailwind merge/clsx utilities
│   │   └── animations.ts   # Shared Framer Motion variants
│   ├── types/              # TypeScript definitions
│   └── hooks/              # Custom React hooks (e.g., useScroll, useWindowSize)
├── tailwind.config.ts      # Highly configurable theme settings
├── package.json
└── README.md
```

---

## 2. Section-by-Section Breakdown

### A. Hero Section (The Immersive Hook)
- **Layout:** Full-viewport height (100vh) with a centered/split focal point.
- **Content:** Headline ("Future of Living"), Subheadline, Primary CTA ("Explore Properties"), Secondary CTA ("View Floorplans").
- **Visuals:**
  - **Background:** High-quality looping video of modern luxury architecture with subtle color grading to fit the cyber theme.
  - **Foreground:** Spline 3D element (e.g., a rotating abstract geometric key, holographic smart-home interface, or floating premium property model).
- **Animations:** Fade-up text reveals. The background video uses a dark overlay mask, allowing the glowing Spline foreground to pop.
- **Tailwind Strategy:** `min-h-screen`, `relative`, `overflow-hidden`, `z-10` for content layering.

### B. Property Features & Smart Home Tech
- **Layout:** Alternating grid or bento-box layout.
- **Content:** Highlights of the modern luxury real estate (AI climate control, biometric security, infinity pools).
- **Animations:** Scroll-triggered stagger animations. Cards float up and emit a subtle neon glow upon hover.
- **Tailwind Strategy:** `grid`, `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`, custom hover utilities for glow effects.

### C. Floorplan Sliders
- **Layout:** Full-width carousel/slider centered in the section.
- **Content:** 2D floorplan images presented as high-tech glowing blueprints. Property stats (sq ft, beds, baths) shown alongside.
- **Animations:** Smooth slide transitions. Interactive drag gestures using Framer Motion. Active floorplan scales up slightly.
- **Tailwind Strategy:** `flex`, `overflow-x-auto`, `snap-x`, `snap-mandatory` (or utilizing a customized slider component), styling images with cyberpunk border hues.

### D. Pricing / Investment Tiers
- **Layout:** 3-column pricing cards.
- **Content:** "Standard", "Premium", "Penthouse" tiers.
- **Animations:** Highlighted tier (center) scales up. Hovering over a card activates an animated gradient border (running neon edge).
- **Tailwind Strategy:** `bg-black/50`, `backdrop-blur-md`, `border`, `border-cyan-500/30`.

### E. CTA (Call to Action)
- **Layout:** Centered banner with heavy visual weight.
- **Content:** Final push to schedule a viewing or contact an agent. Email input form.
- **Animations:** Pulsing button, magnetic hover effect on the button.
- **Tailwind Strategy:** `bg-gradient-to-r`, `from-purple-900`, `to-black`, text glowing effects.

### F. Footer
- **Layout:** Multi-column layout for links, social icons, and branding.
- **Content:** Contact info, legal links, social media.
- **Animations:** Simple fade-in when scrolling to the bottom.
- **Tailwind Strategy:** `border-t`, `border-gray-800`, `text-gray-400`.

---

## 3. Design System

This system balances the elegance of luxury real estate with the striking, high-contrast look of cyber aesthetics.

### Color Palette (Tailwind Configurable)
- **Backgrounds:** Deep space black (`#050505`), very dark slate (`#0B0C10`).
- **Primary Accents (Neon/Cyber):** Cyan/Electric Blue (`#00F0FF`), Neon Pink/Magenta (`#FF003C`), Electric Purple (`#8A2BE2`).
- **Luxury Accents:** Muted Gold or Platinum for premium text highlights to retain the luxury feel.
- **Text:** Pure white (`#FFFFFF`) for primary headings, light silver (`#C5C6C7`) for body copy.

### Typography
- **Headings:** A sharp, geometric, slightly futuristic sans-serif (e.g., *Space Grotesk* or *Syncopate*).
- **Body:** Clean, highly readable, modern sans-serif (e.g., *Inter* or *Manrope*).

### Spacing & Borders
- **Spacing:** Generous padding to emulate luxury breathing room, contrasted with tight alignments for technical UI elements.
- **Borders:** Thin (1px), hard-edged borders. Lots of `backdrop-blur` (glassmorphism) mixed with neon outer glows.

### Reusable Components
- `NeonButton`: Button with animated gradient borders and inner glow on hover.
- `GlassCard`: Card with `backdrop-blur`, dark translucent background, and subtle cyan/magenta borders.
- `GlowingText`: Text component that applies drop-shadows to simulate neon light.
- `FloorplanSlider`: Interactive, swipeable 2D image carousel.

---

## 4. Animation Plan (Framer Motion)

- **Entry Animations (Hero):**
  - `initial={{ opacity: 0, y: 50 }}` to `animate={{ opacity: 1, y: 0 }}` with a spring transition.
- **Scroll Reveal (Sections):**
  - Use `whileInView` prop to trigger fade-ins and slide-ups as the user scrolls down the landing page. `viewport={{ once: true, amount: 0.2 }}`.
- **Hover States (Cards & Buttons):**
  - `whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px 0px rgba(0, 240, 255, 0.5)" }}`
- **Slider Dragging:**
  - Leverage Framer Motion's `drag="x"` with `dragConstraints` for the floorplan 2D slider.

---

## 5. Spline Integration Plan

- **Setup:** Spline scene loaded using `@splinetool/react-spline`.
- **Hero Embedding:** Absolute positioning, `z-index: 20` to sit directly over the background video (`z-index: 0`) and underneath/beside the text (`z-index: 30`).
- **Performance/Lazy Loading:**
  - Wrap the Spline component in `next/dynamic` with `ssr: false` to ensure it only loads on the client side.
  - Implement a fallback UI (a glowing blurred image or a CSS loader) while the 3D scene initializes.
  - Advise UI8 buyers to optimize the Spline scene (bake lighting, reduce poly count) within the Spline editor.

---

## 6. Component Architecture

### Layout Components
- `Header`: Navigation links and theme toggles (if any). Fixed at the top, becomes glassmorphic on scroll.
- `Footer`: Static end-of-page links.

### UI Components
- `CyberButton.tsx`: Props - `variant (primary|secondary)`, `children`, `onClick`.
- `BentoCard.tsx`: Props - `title`, `description`, `icon`, `glowColor`.
- `SectionHeading.tsx`: Props - `title`, `subtitle`, `alignment`.

### Feature Components
- `HeroBackground.tsx`: Handles the `<video>` tag, auto-play, muted, looping, and the dark overlay.
- `SplineViewer.tsx`: The dynamically imported Spline canvas wrapper.
- `FloorplanCarousel.tsx`: Manages the state of the current active 2D floorplan and renders the Framer Motion slider.
- `PricingTier.tsx`: Props - `tierName`, `price`, `features`, `isPopular`.

---

## 7. Performance Strategy

- **Video Backgrounds:** Serve compressed MP4/WebM files. Use `<video preload="auto" playsInline autoPlay muted loop>`.
- **Image Optimization:** All 2D floorplans and property images must use Next.js `<Image />` component for automatic WebP conversion and responsive sizing.
- **Spline Loading:** As mentioned, strictly lazy-loaded via `next/dynamic` to prevent main-thread blocking during initial page paint.
- **Fonts:** Utilize `next/font/google` for optimal, layout-shift-free font loading.
- **Code Splitting:** App Router automatically handles route-level splitting, but client components (`"use client"`) will be kept as granular as possible to reduce client bundle size.

---

## 8. UI8 Packaging Checklist

To ensure a top-tier premium product for UI8 buyers, the final delivery zip must include:

1. **Source Code Folder:** The complete Next.js 16 project folder (without `node_modules` and `.next`).
2. **Highly Configurable Tailwind Setup:** Ensure `tailwind.config.ts` has clear comments on how buyers can swap the base theme colors (e.g., changing from Cyan/Pink to Green/Purple cyber themes).
3. **Documentation (`DOCUMENTATION.md` or PDF):**
   - Setup instructions (`npm install`, `npm run dev`).
   - How to replace the Spline URL with their own.
   - How to replace the background video and 2D floorplan images.
   - How to modify the Framer Motion animation timings.
4. **Figma/Design File (Optional but recommended for UI8):** If applicable, a linked Figma file containing the UI elements and component variants.
5. **Assets Folder:** High-res, royalty-free sample videos and 2D floorplan images used in the demo so the template works "out of the box."
6. **Changelog (`CHANGELOG.md`):** Keeping track of version updates.
