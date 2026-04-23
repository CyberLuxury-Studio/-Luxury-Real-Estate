"use client";
import { motion } from 'framer-motion';

export function HeroSection() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-black z-0"></div>
      <video
        autoPlay
        className="absolute top-0 left-0 w-full h-full object-cover opacity-30 scale-110 saturate-150 hue-rotate-[30deg] contrast-125"
        loop
        muted
        playsInline
      >
        <source
          src="https://cdn.pixabay.com/video/2020/05/25/40149-425114707_tiny.mp4"
          type="video/mp4"
        />
      </video>
      <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-surface/60 z-0"></div>
      
      {/* Gamified Grids */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,240,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,240,255,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem] z-0"></div>

      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className="relative z-10 text-center px-4 max-w-6xl mt-20"
      >
        <motion.div 
          animate={{ scale: [1, 1.05, 1] }} 
          transition={{ repeat: Infinity, duration: 2 }}
          className="inline-block px-6 py-2 rounded-full border-2 border-primary-container text-primary-container uppercase text-xs font-black tracking-widest mb-8 bg-black/50 backdrop-blur-md shadow-[0_0_15px_rgba(0,240,255,0.5)] font-mono"
        >
          Server Online / Sector 7
        </motion.div>
        
        <h2 className="font-mono text-white text-6xl md:text-[8rem] font-black leading-[0.9] mb-12 tracking-tighter drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]">
          CLAIM YOUR <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-container via-purple-500 to-pink-500">
            VIRTUAL BASE
          </span>
        </h2>
        
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
          <motion.button 
            whileHover={{ scale: 1.1, boxShadow: "0 0 30px rgba(0,240,255,0.8)" }}
            whileTap={{ scale: 0.9 }}
            className="px-12 py-5 bg-primary-container text-black font-black font-mono uppercase tracking-[0.2em] text-sm rounded-xl border-2 border-white/50 transition-all shadow-[0_0_20px_rgba(0,240,255,0.5)]"
          >
            Enter Lobby
          </motion.button>
          <motion.button 
            whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
            whileTap={{ scale: 0.95 }}
            className="px-12 py-5 font-mono uppercase tracking-[0.2em] text-sm text-white border-2 border-white/20 rounded-xl bg-black/50 backdrop-blur-md transition-all hover:border-white/50"
          >
            View Map Layouts
          </motion.button>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, type: "spring" }}
        className="absolute bottom-12 left-6 md:left-12 border-l-4 border-primary-container pl-4 bg-black/40 backdrop-blur-sm p-4 rounded-r-lg"
      >
        <div className="flex flex-col gap-2 font-mono text-[10px] text-white/70 tracking-[0.2em] uppercase font-bold">
          <span className="text-primary-container">Coords: 34.0522° N, 118.2437° W</span>
          <span>
            Ping: <span className="text-emerald-400 font-black animate-pulse">12ms</span>
          </span>
          <span>
            Players Online: <span className="text-pink-400 font-black">10,421</span>
          </span>
        </div>
      </motion.div>
    </section>
  );
}
