"use client";
import { useState } from "react";
import { motion } from "framer-motion";

const layouts = [
  { id: "A1", name: "Alpha Sector", size: "1,200 SQM", type: "Guild Hall", beds: 4, baths: 4 },
  { id: "B2", name: "Beta Outpost", size: "2,400 SQM", type: "Command Center", beds: 6, baths: 6 },
  { id: "C3", name: "Omega Nexus", size: "4,800 SQM", type: "God-Tier Fortress", beds: 8, baths: 10 },
];

export function FloorplanSection() {
  const [active, setActive] = useState(layouts[0]);

  return (
    <section className="py-32 px-4 md:px-12 max-w-7xl mx-auto border-t-2 border-white/5 bg-[#020202]">
      <div className="flex flex-col lg:flex-row gap-16">
        <div className="w-full lg:w-1/3">
          <span className="font-mono text-primary-container uppercase text-xs tracking-[0.3em] font-bold">Map Layouts</span>
          <h3 className="font-mono text-4xl md:text-5xl text-white mt-4 mb-12 uppercase tracking-tighter font-black drop-shadow-md">
            Arena <br /> Blueprints
          </h3>

          <div className="flex flex-col gap-4">
            {layouts.map((layout) => (
              <button
                key={layout.id}
                onClick={() => setActive(layout)}
                className={`text-left p-6 border-2 transition-all rounded-xl font-mono ${
                  active.id === layout.id
                    ? "border-primary-container bg-primary-container/10 shadow-[0_0_20px_rgba(0,240,255,0.2)]"
                    : "border-white/5 hover:border-white/20 bg-black/50"
                }`}
              >
                <div className="flex justify-between items-center mb-2">
                  <span className={`text-xl font-black uppercase ${active.id === layout.id ? "text-primary-container" : "text-white"}`}>
                    {layout.name}
                  </span>
                  <span className="text-xs text-on-surface-variant bg-white/5 px-2 py-1 rounded">{layout.size}</span>
                </div>
                <div className="text-sm text-on-surface-variant font-bold uppercase">{layout.type}</div>
              </button>
            ))}
          </div>
        </div>

        <div className="w-full lg:w-2/3">
          <motion.div
            key={active.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, type: "spring" }}
            className="glass-card aspect-[4/3] w-full flex items-center justify-center border-2 border-primary-container/20 rounded-2xl relative overflow-hidden bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary-container/5 to-pink-500/5"></div>
            
            {/* Hologram Effect */}
            <motion.div 
               animate={{ opacity: [0.5, 0.8, 0.5], y: [0, -5, 0] }}
               transition={{ repeat: Infinity, duration: 3 }}
               className="text-center relative z-10"
            >
              <span className="material-symbols-outlined text-[8rem] text-primary-container drop-shadow-[0_0_30px_rgba(0,240,255,0.8)] font-light">
                view_in_ar
              </span>
              <div className="font-mono text-primary-container text-xl mt-8 tracking-[0.3em] font-black uppercase drop-shadow-[0_0_10px_rgba(0,240,255,0.5)]">
                {active.id} Rendering...
              </div>
            </motion.div>
            
            <div className="absolute bottom-6 left-6 flex gap-8">
              <div className="bg-black/80 px-4 py-2 rounded-lg border border-white/10">
                <span className="block font-mono text-[9px] text-on-surface-variant uppercase tracking-[0.2em] mb-1 font-bold">Server Racks</span>
                <span className="font-mono text-white text-lg font-black">{active.beds} Units</span>
              </div>
              <div className="bg-black/80 px-4 py-2 rounded-lg border border-white/10">
                <span className="block font-mono text-[9px] text-on-surface-variant uppercase tracking-[0.2em] mb-1 font-bold">Defense Turrets</span>
                <span className="font-mono text-white text-lg font-black">{active.baths} Active</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
