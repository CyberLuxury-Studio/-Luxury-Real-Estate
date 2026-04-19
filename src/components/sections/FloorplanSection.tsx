"use client";
import { motion } from 'framer-motion';

export function FloorplanSection() {

  return (
    <section className="py-40 bg-surface-container-lowest/50 backdrop-blur-sm relative overflow-hidden">
      <div className="max-w-screen-2xl mx-auto px-8 mb-20 flex flex-col md:flex-row justify-between items-end gap-8">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-primary-container font-headline architectural-heading text-[10px] uppercase mb-4 block">
            The Blueprint Archive
          </span>
          <h2 className="font-headline text-6xl font-black uppercase tracking-tighter">
            Unit Layouts
          </h2>
        </motion.div>
        <div className="flex gap-4">
          <button className="p-5 border border-white/10 hover:border-primary-container hover:text-primary-container text-white/50 transition-all btn-glow bg-white/5">
            <span className="material-symbols-outlined">west</span>
          </button>
          <button className="p-5 border border-white/10 hover:border-primary-container hover:text-primary-container text-white/50 transition-all btn-glow bg-white/5">
            <span className="material-symbols-outlined">east</span>
          </button>
        </div>
      </div>

      <motion.div
        className="flex gap-10 px-8 overflow-x-auto pb-20 snap-x no-scrollbar cursor-grab active:cursor-grabbing"
        drag="x"
        dragConstraints={{ right: 0, left: -500 }}
      >
        <div className="min-w-[85%] md:min-w-[48%] snap-center glass-card p-10 group">
          <div className="aspect-video bg-black/40 flex items-center justify-center p-12 mb-10 relative overflow-hidden border border-white/5">
            <img
              className="w-full h-full object-contain opacity-60 group-hover:scale-105 transition-all duration-1000"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB8tekYO_emBNZyL16r12zxlMHIZWbkWs83iZNK3ArlA3p5IISinI1sY8vEUAGzCJIgUI5JPi6UZZlxBbmF788V-_P9w9VLHuKjRsdLT2RcFQYEbPIEtC3Oe7EwJEvg_S15jZFRGdH8RB3XPZDI6cw_H5LmlFbkXi-_RIwjtfdBSvtK0gsktum17D8nEQfRTIpNhbzlf1T2mZx8C6uCKCuKbSW-LKyhmQrE6AdQBEjamhP8tTepvMO2zHWBVlBc3H18xIKE18Fl0wo"
              alt="The Neon Studio"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>
          <div className="flex justify-between items-center">
            <div>
              <h4 className="font-headline text-2xl font-bold mb-2 uppercase architectural-heading">
                THE NEON STUDIO
              </h4>
              <p className="text-on-surface-variant font-body text-xs tracking-[0.1em]">
                LEVEL 40-55 • NORTH WING
              </p>
            </div>
            <div className="flex gap-8 text-right">
              <div>
                <span className="block text-[9px] text-outline uppercase tracking-widest mb-1">
                  SQ FT
                </span>
                <span className="font-headline text-xl text-primary-container">
                  1,240
                </span>
              </div>
              <div>
                <span className="block text-[9px] text-outline uppercase tracking-widest mb-1">
                  UNIT
                </span>
                <span className="font-headline text-xl text-primary-container">
                  01-A
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="min-w-[85%] md:min-w-[48%] snap-center glass-card p-10 group">
          <div className="aspect-video bg-black/40 flex items-center justify-center p-12 mb-10 relative overflow-hidden border border-white/5">
            <img
              className="w-full h-full object-contain opacity-60 group-hover:scale-105 transition-all duration-1000"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBSDQ9cUKj3KNgP_-UDQs4iKqUR5lZq9W4_BtPUHyADMq9a6erHRQasdxVPC7IzU695wzOcs_qotkGT2Av5yLDads9HGCvU7XiAlV-x7JTvqravaxzY3kigZ0zteYTIVYDzHDll6QbllzZCt_kxGfoZ0hbwFEfuNjrbG5mTPlOZ3uipSoNyGj_HTfMKliThIXwRgI8wO19KAwHrAKRtlGKwknLpvssWoiQuEAdZ0uDUxa31jXnTx_x1ajwugIDsDexWDGq4Fv8ZRl0"
              alt="Virtual Duplex"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>
          <div className="flex justify-between items-center">
            <div>
              <h4 className="font-headline text-2xl font-bold mb-2 uppercase architectural-heading">
                VIRTUAL DUPLEX
              </h4>
              <p className="text-on-surface-variant font-body text-xs tracking-[0.1em]">
                LEVEL 60-85 • SKY TERRACE
              </p>
            </div>
            <div className="flex gap-8 text-right">
              <div>
                <span className="block text-[9px] text-outline uppercase tracking-widest mb-1">
                  SQ FT
                </span>
                <span className="font-headline text-xl text-primary-container">
                  2,850
                </span>
              </div>
              <div>
                <span className="block text-[9px] text-outline uppercase tracking-widest mb-1">
                  UNIT
                </span>
                <span className="font-headline text-xl text-primary-container">
                  88-C
                </span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
