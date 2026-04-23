"use client";
import { motion } from 'framer-motion';

const features = [
  {
    title: "Level 3 Server Room",
    desc: "Equipped with quantum cooling and zero-latency routing for instant matchmaking.",
    icon: "dns",
  },
  {
    title: "Holographic Defense",
    desc: "Military-grade firewall shielding your guild assets from external raids.",
    icon: "security",
  },
  {
    title: "VR Training Arena",
    desc: "Fully immersive simulation room to practice strats before the big tournament.",
    icon: "sports_esports",
  },
  {
    title: "Loot Vault",
    desc: "Secure cold storage for your digital assets, skins, and crypto rewards.",
    icon: "account_balance_wallet",
  },
];

export function FeaturesSection() {
  return (
    <section className="py-32 px-4 md:px-12 max-w-7xl mx-auto relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[500px] bg-primary-container/10 blur-[100px] rounded-full pointer-events-none"></div>
      
      <div className="text-center mb-24 relative z-10">
        <span className="font-mono text-primary-container uppercase text-xs tracking-[0.3em] font-bold">Base Upgrades</span>
        <h3 className="font-mono text-4xl md:text-6xl text-white mt-4 uppercase tracking-tighter font-black">
          Legendary <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-container to-pink-500">Perks</span>
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
        {features.map((feature, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -10, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 100, delay: i * 0.1 }}
            viewport={{ once: true, margin: "-100px" }}
            className="group glass-card p-10 relative overflow-hidden border-2 border-white/5 hover:border-primary-container/50 bg-black/40 rounded-2xl cursor-pointer"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary-container/20 rounded-full blur-[40px] group-hover:bg-primary-container/40 transition-colors"></div>
            <div className="w-16 h-16 rounded-xl bg-surface border-2 border-primary-container/30 flex items-center justify-center mb-8 shadow-[0_0_15px_rgba(0,240,255,0.2)]">
              <span className="material-symbols-outlined text-primary-container text-3xl">
                {feature.icon}
              </span>
            </div>
            <h4 className="font-mono text-2xl text-white mb-4 uppercase font-black">{feature.title}</h4>
            <p className="font-mono text-sm text-on-surface-variant font-light leading-relaxed">
              {feature.desc}
            </p>
            <div className="mt-8 flex items-center gap-2 text-primary-container font-mono text-xs uppercase font-bold tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
               <span>Equip Upgrade</span>
               <span className="material-symbols-outlined text-sm">arrow_right_alt</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
