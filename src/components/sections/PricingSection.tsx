"use client";
import { motion } from 'framer-motion';

export function PricingSection() {
  return (
    <section className="py-32 px-4 md:px-12 bg-[#050505] relative overflow-hidden border-t-2 border-white/5">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-container/10 rounded-full blur-[120px]"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-24">
          <span className="font-mono text-primary-container uppercase text-xs tracking-[0.3em] font-bold">Unlock Tiers</span>
          <h3 className="font-mono text-5xl md:text-7xl text-white mt-4 uppercase tracking-tighter font-black">
            Choose Your <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-container to-pink-500">Loadout</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Tier 1 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            className="p-10 border-2 border-white/10 rounded-2xl bg-black/60 backdrop-blur-md"
          >
            <div className="bg-white/10 w-fit px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-6 font-mono">LVL 1</div>
            <h4 className="font-mono text-3xl text-white mb-2 uppercase font-black">Starter Base</h4>
            <div className="text-4xl font-mono text-white font-black mb-8">5,000 <span className="text-sm font-light text-on-surface-variant">Credits</span></div>
            <ul className="space-y-4 font-mono text-sm text-on-surface-variant mb-12 font-medium">
              <li className="flex items-center gap-3"><span className="material-symbols-outlined text-primary-container text-sm">check</span> Basic Defense</li>
              <li className="flex items-center gap-3"><span className="material-symbols-outlined text-primary-container text-sm">check</span> 2 Server Racks</li>
              <li className="flex items-center gap-3"><span className="material-symbols-outlined text-primary-container text-sm">check</span> Standard Map</li>
            </ul>
            <button className="w-full py-4 border-2 border-white/20 text-white font-mono uppercase text-xs tracking-widest hover:bg-white/10 transition-colors rounded-xl font-bold">
              Equip
            </button>
          </motion.div>

          {/* Tier 2 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.1 }}
            className="p-12 border-2 border-primary-container rounded-2xl bg-surface/80 backdrop-blur-xl relative shadow-[0_0_40px_rgba(0,240,255,0.2)] transform md:-translate-y-6"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary-container/20 blur-[40px]"></div>
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary-container to-pink-500 text-black font-mono font-black text-[10px] uppercase tracking-[0.3em] px-6 py-2 rounded-b-xl">
              Most Popular
            </div>
            
            <div className="bg-primary-container/20 border border-primary-container/50 text-primary-container w-fit px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-6 font-mono mt-4">LVL 50</div>
            <h4 className="font-mono text-4xl text-white mb-2 uppercase font-black drop-shadow-md">Pro Guild Hall</h4>
            <div className="text-5xl font-mono text-white font-black mb-8 drop-shadow-lg">15,000 <span className="text-sm font-light text-on-surface-variant">Credits</span></div>
            <ul className="space-y-4 font-mono text-sm text-white mb-12 font-bold">
              <li className="flex items-center gap-3"><span className="material-symbols-outlined text-pink-500 text-sm">check</span> Holographic Shield</li>
              <li className="flex items-center gap-3"><span className="material-symbols-outlined text-pink-500 text-sm">check</span> 10 Server Racks</li>
              <li className="flex items-center gap-3"><span className="material-symbols-outlined text-pink-500 text-sm">check</span> Premium Arena</li>
              <li className="flex items-center gap-3"><span className="material-symbols-outlined text-pink-500 text-sm">check</span> VIP Matchmaking</li>
            </ul>
            <button className="w-full py-5 bg-primary-container text-black font-mono font-black uppercase text-sm tracking-[0.2em] hover:shadow-[0_0_20px_rgba(0,240,255,0.6)] transition-all rounded-xl border-2 border-white/50">
              Claim Base
            </button>
          </motion.div>

          {/* Tier 3 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            className="p-10 border-2 border-white/10 rounded-2xl bg-black/60 backdrop-blur-md"
          >
            <div className="bg-pink-500/20 text-pink-500 border border-pink-500/50 w-fit px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-6 font-mono">LVL 99</div>
            <h4 className="font-mono text-3xl text-white mb-2 uppercase font-black">God Fortress</h4>
            <div className="text-4xl font-mono text-white font-black mb-8">50,000 <span className="text-sm font-light text-on-surface-variant">Credits</span></div>
            <ul className="space-y-4 font-mono text-sm text-on-surface-variant mb-12 font-medium">
              <li className="flex items-center gap-3"><span className="material-symbols-outlined text-pink-500 text-sm">check</span> Invincible Firewalls</li>
              <li className="flex items-center gap-3"><span className="material-symbols-outlined text-pink-500 text-sm">check</span> Infinite Servers</li>
              <li className="flex items-center gap-3"><span className="material-symbols-outlined text-pink-500 text-sm">check</span> Custom Map Builder</li>
            </ul>
            <button className="w-full py-4 border-2 border-pink-500/50 text-pink-500 font-mono uppercase text-xs tracking-widest hover:bg-pink-500/20 transition-colors rounded-xl font-bold">
              Unlock God Mode
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
