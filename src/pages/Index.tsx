
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import PricingSection from "@/components/PricingSection";
import DashboardPreview from "@/components/DashboardPreview";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="bg-gray-50">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <PricingSection />
      <DashboardPreview />
      <Footer />
    </div>
  );
};

export default Index;
