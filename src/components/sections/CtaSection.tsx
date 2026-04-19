"use client";
import { motion } from 'framer-motion';

export function CtaSection() {
  return (
    <section className="py-52 relative overflow-hidden bg-[#0a0a0a]">
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <img
          className="w-full h-full object-cover"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCr56vuz25CTpIrNdoYSryFo4Wb2IVOVXTGnxeHQ3EeXfrRUC4u7-MUb12-nUb06E-SH5-1GxyeUQ7ORi21cQ75AMtAb2dzPjuPugFH-5SYLVwXxUohgmyKdWCxv4uuA8AYGnAZnOL8WK_tkeRKVfQHpPFzibFzYiL1dET-IR1TE0NLGH62ySrdr9imvl2veldeA4cADgdRPAbwbrABiSMKy-gnZoR4qEhEyBDWqPiTG3D4--fHeFSvRBcU0dK4bh_5pn1shsr6tbo"
          alt="CTA Background"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-surface via-transparent to-surface"></div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative z-10 max-w-4xl mx-auto px-8 text-center"
      >
        <h2 className="font-headline text-5xl md:text-7xl font-bold uppercase mb-10 tracking-tighter drop-shadow-2xl">
          Ready for <br />{" "}
          <span className="text-primary-container">Ascension?</span>
        </h2>
        <p className="font-body text-on-surface-variant text-base mb-16 max-w-xl mx-auto leading-relaxed uppercase tracking-widest text-[11px]">
          Request your biometric credentials for a private virtual viewing of the
          Luminescent Estate.
        </p>
        <form className="flex flex-col md:flex-row gap-0 max-w-2xl mx-auto border border-primary-container/20 p-2 bg-black/40 backdrop-blur-md">
          <input
            className="flex-1 bg-transparent border-0 focus:ring-0 text-white font-body py-5 px-8 text-sm placeholder:text-white/20"
            placeholder="Biometric ID / Email"
            type="email"
            required
          />
          <button
            className="bg-primary-container text-on-primary-container font-headline font-black uppercase tracking-[0.3em] px-12 py-5 text-[11px] btn-glow transition-all"
            type="submit"
          >
            Submit
          </button>
        </form>
      </motion.div>
    </section>
  );
}
