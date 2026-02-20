import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PainPoints from "@/components/PainPoints";
import Solution from "@/components/Solution";
import HowItWorks from "@/components/HowItWorks";
import Services from "@/components/Services";
import Pricing from "@/components/Pricing";
import SocialProof from "@/components/SocialProof";
import AboutUs from "@/components/AboutUs";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <PainPoints />
        <Solution />
        <HowItWorks />
        <Services />
        <Pricing />
        <SocialProof />
        <AboutUs />
        <FAQ />
        <CTASection />
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default Index;
