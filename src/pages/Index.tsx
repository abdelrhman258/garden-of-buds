import FloatingShapes from "@/components/FloatingShapes";
import WhatsAppButton from "@/components/WhatsAppButton";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import OfferSection from "@/components/OfferSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <FloatingShapes />
      <WhatsAppButton />
      
      <main>
        <HeroSection />
        <FeaturesSection />
        <OfferSection />
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
