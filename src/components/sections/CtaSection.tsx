"use client";
import { motion } from 'framer-motion';

export function CtaSection() {
  return (
    <section className="py-40 px-4 relative overflow-hidden flex items-center justify-center min-h-[70vh]">
      <div className="absolute inset-0 bg-black z-0"></div>
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20 z-0 mix-blend-overlay"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[300px] bg-gradient-to-r from-primary-container/30 to-pink-500/30 blur-[100px] pointer-events-none z-0"></div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", stiffness: 80 }}
        viewport={{ once: true }}
        className="relative z-10 text-center max-w-4xl border-4 border-white/10 p-16 rounded-[3rem] bg-black/40 backdrop-blur-2xl shadow-[0_0_50px_rgba(0,240,255,0.1)]"
      >
        <span className="font-mono text-primary-container uppercase text-xs tracking-[0.4em] mb-6 block font-bold">Initiate Protocol</span>
        <h2 className="font-mono text-white text-5xl md:text-7xl font-black mb-10 tracking-tighter uppercase drop-shadow-xl">
          READY TO ENTER <br className="hidden md:block"/> THE ARENA?
        </h2>
        <motion.button 
           whileHover={{ scale: 1.1, boxShadow: "0 0 40px rgba(0,240,255,0.8)" }}
           whileTap={{ scale: 0.9 }}
           className="px-16 py-6 bg-gradient-to-r from-primary-container to-pink-500 text-white font-mono font-black uppercase tracking-[0.3em] text-lg rounded-2xl shadow-[0_0_20px_rgba(0,240,255,0.4)] border-2 border-white/50"
        >
          Join The Server
        </motion.button>
      </motion.div>
    </section>
  );
}
