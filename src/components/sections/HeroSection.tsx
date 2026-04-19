"use client";
import { motion } from 'framer-motion';

export function HeroSection() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      <video
        autoPlay
        className="absolute top-0 left-0 w-full h-full object-cover opacity-40 scale-110"
        loop
        muted
        playsInline
      >
        <source
          src="https://cdn.pixabay.com/video/2020/05/25/40149-425114707_tiny.mp4"
          type="video/mp4"
        />
      </video>
      <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-surface/40"></div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="relative z-10 text-center px-4 max-w-6xl"
      >
        <span className="font-headline text-primary-container architectural-heading uppercase text-xs mb-8 block drop-shadow-[0_0_8px_rgba(0,240,255,0.5)]">
          Architectural Ascension
        </span>
        <h2 className="font-headline text-white text-5xl md:text-[8rem] font-bold leading-[0.9] mb-16 tracking-tighter">
          FUTURE OF <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-br from-primary-container via-white to-primary-container/50">
            LIVING
          </span>
        </h2>
        <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
          <button className="glass-card px-12 py-5 font-headline uppercase tracking-[0.2em] text-[11px] text-primary-container border-primary-container/30 hover:border-primary-container btn-glow group">
            <span className="relative z-10">Explore Properties</span>
          </button>
          <button className="px-12 py-5 font-headline uppercase tracking-[0.2em] text-[11px] text-white/50 hover:text-white transition-all">
            View Floorplans
          </button>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-12 left-12 hidden md:block border-l border-primary-container/30 pl-4"
      >
        <div className="flex flex-col gap-1 font-label text-[9px] text-on-surface-variant tracking-[0.2em] uppercase">
          <span className="text-primary-container/60">Coordinates: 34.0522° N, 118.2437° W</span>
          <span>
            System Status: <span className="text-emerald-400">Online</span>
          </span>
        </div>
      </motion.div>
    </section>
  );
}
