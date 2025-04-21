import React from "react";

const HomeFAQSection = () => (
  <section id="faq" className="faq bg-white py-24">
    <div className="container max-w-[1200px] mx-auto px-5">
      <div className="section-header text-center mb-20">
        <h2 className="text-3xl md:text-4xl text-[#1A237E] font-bold mb-3">Frequently Asked Questions</h2>
        <p className="text-lg text-[#666] max-w-2xl mx-auto">Get answers to common questions about our AI Phone Receptionist service.</p>
      </div>
      <div className="faq-grid grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="faq-item bg-[#F5F5F5] rounded-lg p-6 mb-5">
          <div className="faq-question font-bold text-lg text-[#1A237E]">What is an AI Phone Receptionist?</div>
          <div className="faq-answer text-gray-700">An AI Phone Receptionist is a virtual assistant that handles incoming calls, routes inquiries, and provides customer service 24/7.</div>
        </div>
        <div className="faq-item bg-[#F5F5F5] rounded-lg p-6 mb-5">
          <div className="faq-question font-bold text-lg text-[#1A237E]">How does it work?</div>
          <div className="faq-answer text-gray-700">The AI uses advanced algorithms to understand caller intent and direct calls to the appropriate department or person.</div>
        </div>
        <div className="faq-item bg-[#F5F5F5] rounded-lg p-6 mb-5">
          <div className="faq-question font-bold text-lg text-[#1A237E]">Can it handle multiple languages?</div>
          <div className="faq-answer text-gray-700">Yes, our AI Phone Receptionist can communicate in multiple languages, making it suitable for international clients.</div>
        </div>
        <div className="faq-item bg-[#F5F5F5] rounded-lg p-6 mb-5">
          <div className="faq-question font-bold text-lg text-[#1A237E]">Is it customizable?</div>
          <div className="faq-answer text-gray-700">Absolutely! You can customize the AI's responses and scripts to match your brand's voice and specific needs.</div>
        </div>
        <div className="faq-item bg-[#F5F5F5] rounded-lg p-6 mb-5">
          <div className="faq-question font-bold text-lg text-[#1A237E]">What are the benefits of using an AI Phone Receptionist?</div>
          <div className="faq-answer text-gray-700">Benefits include cost savings, improved customer experience, enhanced productivity, and 24/7 availability.</div>
        </div>
        <div className="faq-item bg-[#F5F5F5] rounded-lg p-6 mb-5">
          <div className="faq-question font-bold text-lg text-[#1A237E]">How do I get started?</div>
          <div className="faq-answer text-gray-700">Getting started is easy! Simply sign up on our website, and our team will guide you through the setup process.</div>
        </div>
      </div>
    </div>
  </section>
);

export default HomeFAQSection;
