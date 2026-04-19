"use client";
import { motion } from 'framer-motion';

export function PricingSection() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } }
  };

  return (
    <section className="py-40 px-8 max-w-screen-2xl mx-auto">
      <h2 className="font-headline text-center text-6xl font-black uppercase mb-32 tracking-tighter">
        Investment Tiers
      </h2>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-stretch"
      >
        {/* Standard */}
        <motion.div variants={item} className="glass-card p-12 flex flex-col items-center text-center">
          <span className="text-outline font-headline text-[10px] tracking-[0.4em] uppercase mb-6 block">
            Baseline
          </span>
          <h3 className="font-headline text-3xl font-bold mb-8 architectural-heading uppercase">
            STANDARD
          </h3>
          <div className="text-5xl font-headline font-bold mb-12 text-primary-container">
            $2.4M
          </div>
          <ul className="text-xs text-on-surface-variant font-body space-y-6 mb-16 text-left w-full border-t border-white/5 pt-8">
            <li className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary-container text-lg">
                check_circle
              </span>{" "}
              Biometric Entry
            </li>
            <li className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary-container text-lg">
                check_circle
              </span>{" "}
              AI Climate Core
            </li>
            <li className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary-container text-lg">
                check_circle
              </span>{" "}
              Smart Glass Windows
            </li>
          </ul>
          <button className="w-full py-5 bg-white/5 border border-white/10 hover:bg-white hover:text-surface transition-all font-headline uppercase text-[10px] tracking-[0.3em] font-bold mt-auto">
            Select Tier
          </button>
        </motion.div>

        {/* Penthouse */}
        <motion.div variants={item} className="relative p-14 flex flex-col items-center text-center bg-[#1c1c1c] penthouse-glow scale-105 z-10 transition-all duration-700">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-secondary-container text-white px-6 py-1.5 text-[9px] font-headline tracking-[0.3em] uppercase font-black">
            Ultra Scarcity
          </div>
          <span className="text-secondary-container font-headline text-[10px] tracking-[0.4em] uppercase mb-6 block">
            The Crown
          </span>
          <h3 className="font-headline text-5xl font-black mb-8 architectural-heading uppercase drop-shadow-[0_0_15px_rgba(255,82,92,0.3)]">
            PENTHOUSE
          </h3>
          <div className="text-6xl font-headline font-bold mb-12 text-secondary-container drop-shadow-[0_0_20px_rgba(255,82,92,0.4)]">
            $18.5M
          </div>
          <ul className="text-sm text-on-surface font-body space-y-6 mb-16 text-left w-full border-t border-secondary-container/20 pt-10">
            <li className="flex items-center gap-4">
              <span className="material-symbols-outlined text-secondary-container">
                stars
              </span>{" "}
              Full Level Ownership
            </li>
            <li className="flex items-center gap-4">
              <span className="material-symbols-outlined text-secondary-container">
                stars
              </span>{" "}
              Private Landing Pad
            </li>
            <li className="flex items-center gap-4">
              <span className="material-symbols-outlined text-secondary-container">
                stars
              </span>{" "}
              Holo-Theater Suite
            </li>
            <li className="flex items-center gap-4">
              <span className="material-symbols-outlined text-secondary-container">
                stars
              </span>{" "}
              AI Personal Concierge
            </li>
          </ul>
          <button className="w-full py-6 bg-secondary-container text-white font-headline uppercase text-[11px] font-black tracking-[0.4em] btn-glow transition-all mt-auto">
            Acquire Asset
          </button>
        </motion.div>

        {/* Premium */}
        <motion.div variants={item} className="glass-card p-12 flex flex-col items-center text-center">
          <span className="text-outline font-headline text-[10px] tracking-[0.4em] uppercase mb-6 block">
            Elite
          </span>
          <h3 className="font-headline text-3xl font-bold mb-8 architectural-heading uppercase">
            PREMIUM
          </h3>
          <div className="text-5xl font-headline font-bold mb-12 text-primary-container">
            $5.8M
          </div>
          <ul className="text-xs text-on-surface-variant font-body space-y-6 mb-16 text-left w-full border-t border-white/5 pt-8">
            <li className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary-container text-lg">
                check_circle
              </span>{" "}
              Automated Parking
            </li>
            <li className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary-container text-lg">
                check_circle
              </span>{" "}
              Infinity Pool Access
            </li>
            <li className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary-container text-lg">
                check_circle
              </span>{" "}
              Enhanced Encryption
            </li>
          </ul>
          <button className="w-full py-5 bg-white/5 border border-white/10 hover:bg-white hover:text-surface transition-all font-headline uppercase text-[10px] tracking-[0.3em] font-bold mt-auto">
            Select Tier
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}
