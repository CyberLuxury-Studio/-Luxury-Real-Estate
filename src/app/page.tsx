import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { FloorplanSection } from "@/components/sections/FloorplanSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { CtaSection } from "@/components/sections/CtaSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";



export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <div className="neon-divider"></div>
        <FeaturesSection />
        <FloorplanSection />
        <PricingSection />
        <CtaSection />
      </main>
      <FAQSection />
      <CTASection />
      <Footer />
    </>
  );
}
