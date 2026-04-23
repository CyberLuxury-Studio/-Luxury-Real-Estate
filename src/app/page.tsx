import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { FloorplanSection } from "@/components/sections/FloorplanSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { CtaSection } from "@/components/sections/CtaSection";

export default function Home() {
  return (
    <>
      <Header />
      <main className="bg-surface text-on-surface">
        <HeroSection />
        
        {/* Infinite Marquee Gamified */}
        <section className="py-6 border-y border-white/10 bg-black/50 overflow-hidden relative z-20">
          <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-surface to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-surface to-transparent z-10 pointer-events-none"></div>
          <div className="flex w-[200%] animate-[marquee_15s_linear_infinite]">
             <div className="flex gap-20 items-center whitespace-nowrap min-w-full justify-around px-10">
                  <span className="text-xl font-black text-primary/50 uppercase tracking-widest font-mono">⚡ 10K+ BASES SECURED</span>
                  <span className="text-xl font-black text-secondary/50 uppercase tracking-widest font-mono">👾 ZERO LATENCY PING</span>
                  <span className="text-xl font-black text-primary/50 uppercase tracking-widest font-mono">🛡️ LEVEL 99 SECURITY</span>
                  <span className="text-xl font-black text-secondary/50 uppercase tracking-widest font-mono">🚀 CROSS-SERVER SYNC</span>
                  <span className="text-xl font-black text-primary/50 uppercase tracking-widest font-mono">🎮 VR READY</span>
             </div>
             <div className="flex gap-20 items-center whitespace-nowrap min-w-full justify-around px-10">
                  <span className="text-xl font-black text-primary/50 uppercase tracking-widest font-mono">⚡ 10K+ BASES SECURED</span>
                  <span className="text-xl font-black text-secondary/50 uppercase tracking-widest font-mono">👾 ZERO LATENCY PING</span>
                  <span className="text-xl font-black text-primary/50 uppercase tracking-widest font-mono">🛡️ LEVEL 99 SECURITY</span>
                  <span className="text-xl font-black text-secondary/50 uppercase tracking-widest font-mono">🚀 CROSS-SERVER SYNC</span>
                  <span className="text-xl font-black text-primary/50 uppercase tracking-widest font-mono">🎮 VR READY</span>
             </div>
          </div>
        </section>

        <FeaturesSection />
        <FloorplanSection />
        <PricingSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
