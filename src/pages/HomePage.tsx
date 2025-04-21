
import React from "react";
import PageHeader from "@/components/PageHeader";
import HomeHeroSection from "@/components/HomeHeroSection";
import HomeFeaturesSection from "@/components/HomeFeaturesSection";
import HomeBenefitsSection from "@/components/HomeBenefitsSection";
import HomeHowItWorksSection from "@/components/HomeHowItWorksSection";
import HomeUseCasesSection from "@/components/HomeUseCasesSection";
import HomeFAQSection from "@/components/HomeFAQSection";
import LandingFooter from "@/components/LandingFooter";

const HomePage = () => {
  return (
    <div className="font-sans bg-white text-[#333]">
      <PageHeader />
      <main className="pt-[140px]">
        <HomeHeroSection />
        <HomeFeaturesSection />
        <HomeBenefitsSection />
        <HomeHowItWorksSection />
        <HomeUseCasesSection />
        <HomeFAQSection />
        <LandingFooter />
      </main>
    </div>
  );
};

export default HomePage;
