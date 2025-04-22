import React from "react";
import { Link } from "react-router-dom";
import Calculator from "@/components/Calculator";

const HomePage = () => {
  return (
    <div className="font-sans bg-white text-[#333]">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full bg-white shadow z-50">
        <div className="container max-w-[1200px] mx-auto px-5">
          <div className="flex justify-between items-center py-5 flex-col md:flex-row">
            <Link to="/" className="flex items-center font-bold text-[24px] text-[#1A237E] mb-3 md:mb-0">
              <div className="w-[30px] h-[30px] bg-[#1A237E] rounded-full mr-3 relative">
                <div className="absolute w-[15px] h-[12px] bg-white rounded-t-full top-2 left-[7px]" />
              </div>
              Professional AI Assistants
            </Link>
            <nav>
              <ul className="flex flex-wrap md:flex-nowrap gap-4 md:gap-8 text-base font-semibold">
                <li><a href="#features" className="hover:text-[#00B8D4]">Features</a></li>
                <li><a href="#benefits" className="hover:text-[#00B8D4]">Benefits</a></li>
                <li><a href="#how-it-works" className="hover:text-[#00B8D4]">How It Works</a></li>
                <li><a href="#use-cases" className="hover:text-[#00B8D4]">Use Cases</a></li>
                <li><a href="#faq" className="hover:text-[#00B8D4]">FAQ</a></li>
                <li><Link to="/blog" className="hover:text-[#00B8D4]">Blog</Link></li>
              </ul>
            </nav>
            <div className="flex items-center mt-5 md:mt-0">
              <button className="px-5 py-2 border-2 border-[#1A237E] text-[#1A237E] font-bold rounded mr-3 hover:bg-[#1A237E] hover:text-white transition">Log In</button>
              <button className="bg-[#00B8D4] text-white px-6 py-3 rounded font-bold hover:bg-[#009cb8] transition">Get Started</button>
            </div>
          </div>
        </div>
      </header>

      <main className="pt-[140px]">
        {/* Hero Section */}
        <section className="hero py-20 bg-gradient-to-br from-white to-[#E3F2FD]">
          <div className="container max-w-[1200px] mx-auto px-5 flex flex-col md:flex-row items-center justify-between">
            <div className="hero-content mb-10 md:mb-0 max-w-xl z-10">
              <h1 className="text-4xl md:text-5xl font-bold text-[#1A237E] mb-6">AI Phone Receptionist</h1>
              <p className="text-lg md:text-xl text-[#555] mb-8">
                Your professionally trained virtual receptionist that handles calls 24/7, routes inquiries, and provides consistent customer service – always on, never a sick day.
              </p>
              <div className="price-tag bg-[#00B8D4] text-white px-5 py-1 rounded-full font-bold text-2xl mb-5 inline-block">
                $0.47<span className="text-base ml-2">/hour</span>
              </div>
              <div className="hero-cta flex flex-wrap items-center gap-6">
                <a href="#" className="hero-btn bg-[#1A237E] text-white px-6 py-3 rounded font-bold transition hover:bg-[#141c64] text-lg">Start Your 14-Day Trial</a>
                <a href="#" className="hero-demo flex items-center text-[#1A237E] font-bold">
                  <svg width={24} height={24} fill="none" stroke="#1A237E" strokeWidth={2} className="mr-2">
                    <circle cx={12} cy={12} r={10} strokeWidth={2}/>
                    <path d="M16 12L10 16V8L16 12Z" fill="#1A237E"/>
                  </svg>
                  Live Demo
                </a>
              </div>
            </div>
            <div className="hero-image w-full md:w-1/2">
              <img src="/api/placeholder/500/350" alt="AI Phone Receptionist in Action" className="w-full rounded-lg shadow-lg" />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="features bg-white py-24">
          <div className="container max-w-[1200px] mx-auto px-5">
            <div className="section-header text-center mb-20">
              <h2 className="text-3xl md:text-4xl text-[#1A237E] font-bold mb-3">Key Features of Your AI Phone Receptionist</h2>
              <p className="text-lg text-[#666] max-w-2xl mx-auto">Designed to handle your business calls with professionalism and efficiency.</p>
            </div>
            <div className="features-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="feature-card bg-[#F5F5F5] rounded-lg p-8 transition-transform hover:translate-y-[-5px] hover:shadow-lg">
                <div className="feature-icon w-15 h-15 bg-[#FFF9C4] rounded-full flex items-center justify-center mb-5">
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 6V12L16 14" stroke="#1A237E" strokeWidth="2" strokeLinecap="round" />
                    <circle cx="12" cy="12" r="9" stroke="#1A237E" strokeWidth="2" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#1A237E] mb-3">24/7 Availability</h3>
                <p className="text-gray-700">Never miss a call with round-the-clock coverage, even on holidays and weekends.</p>
              </div>
              <div className="feature-card bg-[#F5F5F5] rounded-lg p-8 transition-transform hover:translate-y-[-5px] hover:shadow-lg">
                <div className="feature-icon w-15 h-15 bg-[#FFF9C4] rounded-full flex items-center justify-center mb-5">
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 11L11 13L15 9" stroke="#1A237E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12 3H17.4C18.8359 3 19.5544 3 20.0963 3.22836C20.5765 3.42914 20.9709 3.7636 21.2114 4.19621C21.48 4.67717 21.48 5.32294 21.48 6.61447V17.3855C21.48 18.6771 21.48 19.3228 21.2114 19.8038C20.9709 20.2364 20.5765 20.5709 20.0963 20.7716C19.5544 21 18.8359 21 17.4 21H6.6C5.16406 21 4.44609 21 3.90412 20.7716C3.42343 20.5709 3.02915 20.2364 2.78865 19.8038C2.52 19.3228 2.52 18.6771 2.52 17.3855V8.4M2.52 8.4V6.61447C2.52 5.32294 2.52 4.67717 2.78865 4.19621C3.02915 3.7636 3.42343 3.42914 3.90412 3.22836C4.44609 3 5.16406 3 6.6 3H8.4L2.52 8.4Z" stroke="#1A237E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#1A237E] mb-3">Intelligent Call Routing</h3>
                <p className="text-gray-700">Direct calls to the right department or person based on caller needs and your business rules.</p>
              </div>
              <div className="feature-card bg-[#F5F5F5] rounded-lg p-8 transition-transform hover:translate-y-[-5px] hover:shadow-lg">
                <div className="feature-icon w-15 h-15 bg-[#FFF9C4] rounded-full flex items-center justify-center mb-5">
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 12C14.2091 12 16 10.2091 16 8C16 5.79086 14.2091 4 12 4C9.79086 4 8 5.79086 8 8C8 10.2091 9.79086 12 12 12Z" stroke="#1A237E" strokeWidth="2" />
                    <path d="M20 20C20 16.6863 16.4183 14 12 14C7.58172 14 4 16.6863 4 20" stroke="#1A237E" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#1A237E] mb-3">Natural Conversations</h3>
                <p className="text-gray-700">Human-like interactions that make callers feel heard and valued, not like they're talking to a bot.</p>
              </div>
              <div className="feature-card bg-[#F5F5F5] rounded-lg p-8 transition-transform hover:translate-y-[-5px] hover:shadow-lg">
                <div className="feature-icon w-15 h-15 bg-[#FFF9C4] rounded-full flex items-center justify-center mb-5">
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 8L8 16M8 8L16 16" stroke="#1A237E" strokeWidth="2" strokeLinecap="round" />
                    <circle cx="12" cy="12" r="9" stroke="#1A237E" strokeWidth="2" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#1A237E] mb-3">Professional Message Taking</h3>
                <p className="text-gray-700">Accurate message recording with details delivered to your team via email or SMS in real-time.</p>
              </div>
              <div className="feature-card bg-[#F5F5F5] rounded-lg p-8 transition-transform hover:translate-y-[-5px] hover:shadow-lg">
                <div className="feature-icon w-15 h-15 bg-[#FFF9C4] rounded-full flex items-center justify-center mb-5">
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13 3H11C6.02944 3 2 7.02944 2 12C2 16.9706 6.02944 21 11 21H13C17.9706 21 22 16.9706 22 12C22 7.02944 17.9706 3 13 3Z" stroke="#1A237E" strokeWidth="2" />
                    <path d="M12 8V16M16 12H8" stroke="#1A237E" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#1A237E] mb-3">Customizable Scripts</h3>
                <p className="text-gray-700">Tailor your AI receptionist's responses to match your brand voice and handle specific scenarios.</p>
              </div>
              <div className="feature-card bg-[#F5F5F5] rounded-lg p-8 transition-transform hover:translate-y-[-5px] hover:shadow-lg">
                <div className="feature-icon w-15 h-15 bg-[#FFF9C4] rounded-full flex items-center justify-center mb-5">
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 11L11 13L15 9" stroke="#1A237E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="12" cy="12" r="9" stroke="#1A237E" strokeWidth="2" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#1A237E] mb-3">Call Analytics Dashboard</h3>
                <p className="text-gray-700">Get insights into call volume, peak times, common inquiries, and customer satisfaction.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section id="benefits" className="benefits bg-[#F5F5F5] py-24">
          <div className="container max-w-[1200px] mx-auto px-5">
            <div className="benefits-container flex flex-wrap items-center justify-between">
              <div className="benefits-content w-full lg:w-1/2 mb-10 lg:mb-0 pr-0 lg:pr-10">
                <h2 className="text-3xl font-bold text-[#1A237E] mb-5">Business Benefits That Impact Your Bottom Line</h2>
                <ul className="benefits-list list-none">
                  <li className="mb-4 relative pl-8 before:content-['✓'] before:absolute before:left-0 before:text-[#00B8D4] before:font-bold">
                    <strong>Cost Effective:</strong> Save up to 70% compared to a human receptionist, with no benefits, sick days, or vacation time to manage.
                  </li>
                  <li className="mb-4 relative pl-8 before:content-['✓'] before:absolute before:left-0 before:text-[#00B8D4] before:font-bold">
                    <strong>Improved Customer Experience:</strong> Never miss a call and ensure every client interaction starts professionally, increasing satisfaction and retention.
                  </li>
                  <li className="mb-4 relative pl-8 before:content-['✓'] before:absolute before:left-0 before:text-[#00B8D4] before:font-bold">
                    <strong>Enhanced Productivity:</strong> Free up your team from answering routine calls so they can focus on high-value tasks.
                  </li>
                  <li className="mb-4 relative pl-8 before:content-['✓'] before:absolute before:left-0 before:text-[#00B8D4] before:font-bold">
                    <strong>Scalability:</strong> Handle call volume surges without stress or additional cost, whether it's 10 calls or 100.
                  </li>
                  <li className="mb-4 relative pl-8 before:content-['✓'] before:absolute before:left-0 before:text-[#00B8D4] before:font-bold">
                    <strong>Data-Driven Insights:</strong> Get actionable information about customer inquiries to improve your business operations.
                  </li>
                  <li className="mb-4 relative pl-8 before:content-['✓'] before:absolute before:left-0 before:text-[#00B8D4] before:font-bold">
                    <strong>Consistent Professionalism:</strong> Maintain the same high standard of service throughout every call, regardless of time or date.
                  </li>
                  <li className="mb-4 relative pl-8 before:content-['✓'] before:absolute before:left-0 before:text-[#00B8D4] before:font-bold">
                    <strong>Multi-language Support:</strong> Communicate with international clients in their preferred language without additional staffing.
                  </li>
                </ul>
              </div>
              <div className="benefits-image w-full lg:w-1/2">
                <img src="/api/placeholder/500/400" alt="Business Benefits of AI Receptionist" className="rounded-lg w-full" />
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="how-it-works bg-white py-24">
          <div className="container max-w-[1200px] mx-auto px-5">
            <div className="section-header text-center mb-20">
              <h2 className="text-3xl font-bold text-[#1A237E] mb-5">How Your AI Phone Receptionist Works</h2>
              <p className="text-gray-700 max-w-2xl mx-auto">Getting started is simple and takes less than a day to implement.</p>
            </div>
            <div className="steps flex flex-wrap justify-between mt-15">
              <div className="step flex-1 min-w-[250px] text-center px-5 mb-10">
                <div className="step-number w-12 h-12 rounded-full bg-[#1A237E] text-white font-bold text-xl flex items-center justify-center mx-auto mb-5">1</div>
                <h3 className="text-xl font-bold text-[#1A237E] mb-3">Sign Up</h3>
                <p className="text-gray-700">Complete our simple sign-up process and select your AI receptionist's voice, name, and personality traits.</p>
              </div>
              <div className="step flex-1 min-w-[250px] text-center px-5 mb-10">
                <div className="step-number w-12 h-12 rounded-full bg-[#1A237E] text-white font-bold text-xl flex items-center justify-center mx-auto mb-5">2</div>
                <h3 className="text-xl font-bold text-[#1A237E] mb-3">Configure Settings</h3>
                <p className="text-gray-700">Define your business hours, customize greetings, and set up call routing rules through our intuitive dashboard.</p>
              </div>
              <div className="step flex-1 min-w-[250px] text-center px-5 mb-10">
                <div className="step-number w-12 h-12 rounded-full bg-[#1A237E] text-white font-bold text-xl flex items-center justify-center mx-auto mb-5">3</div>
                <h3 className="text-xl font-bold text-[#1A237E] mb-3">Forward Your Number</h3>
                <p className="text-gray-700">Simply forward your existing business line to your new AI receptionist number, or integrate directly with your VoIP system.</p>
              </div>
              <div className="step flex-1 min-w-[250px] text-center px-5 mb-10">
                <div className="step-number w-12 h-12 rounded-full bg-[#1A237E] text-white font-bold text-xl flex items-center justify-center mx-auto mb-5">4</div>
                <h3 className="text-xl font-bold text-[#1A237E] mb-3">Go Live</h3>
                <p className="text-gray-700">Your AI receptionist is now ready to answer calls 24/7, providing professional service to your customers.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Calculator Section */}
        <Calculator />

        {/* Use Cases Section */}
        <section id="use-cases" className="use-cases bg-[#F5F5F5] py-24">
          <div className="container max-w-[1200px] mx-auto px-5">
            <div className="section-header text-center mb-20">
              <h2 className="text-3xl font-bold text-[#1A237E] mb-5">Perfect For These Business Types</h2>
              <p className="text-gray-700 max-w-2xl mx-auto">See how our AI phone receptionist is helping businesses across industries.</p>
            </div>
            <div className="use-cases-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              <div className="use-case-card bg-white rounded-lg p-8 shadow-md transition-transform hover:translate-y-[-5px]">
                <div className="use-case-icon w-15 h-15 bg-[#E3F2FD] rounded-full flex items-center justify-center mb-5">
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 8L17 3H7L5 8" stroke="#1A237E" strokeWidth="2" strokeLinecap="round" />
                    <path d="M2 8H22V16C22 18.2091 20.2091 20 18 20H6C3.79086 20 2 18.2091 2 16V8Z" stroke="#1A237E" strokeWidth="2" />
                    <path d="M12 12C12 10.8954 12.8954 10 14 10C15.1046 10 16 10.8954 16 12C16 13.1046 15.1046 14 14 14H10C8.89543 14 8 13.1046 8 12C8 10.8954 8.89543 10 10 10C11.1046 10 12 10.8954 12 12Z" stroke="#1A237E" strokeWidth="2" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#1A237E] mb-3">Professional Services</h3>
                <p className="text-gray-700">Law firms, accounting offices, and consultancies that need to capture every potential client call without interrupting important client work.</p>
              </div>
              <div className="use-case-card bg-white rounded-lg p-8 shadow-md transition-transform hover:translate-y-[-5px]">
                <div className="use-case-icon w-15 h-15 bg-[#E3F2FD] rounded-full flex items-center justify-center mb-5">
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 5H21V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5Z" stroke="#1A237E" strokeWidth="2" />
                    <path d="M3 5V5C3 3.89543 3.89543 3 5 3H19C20.1046 3 21 3.89543 21 5V5" stroke="#1A237E" strokeWidth="2" />
                    <path d="M9 12L11 14L15 10" stroke="#1A237E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#1A237E] mb-3">Medical Practices</h3>
                <p className="text-gray-700">Doctors, dentists, and therapists who need to manage appointments and emergencies while providing attentive patient care.</p>
              </div>
              <div className="use-case-card bg-white rounded-lg p-8 shadow-md transition-transform hover:translate-y-[-5px]">
                <div className="use-case-icon w-15 h-15 bg-[#E3F2FD] rounded-full flex items-center justify-center mb-5">
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 21V5C3 3.89543 3.89543 3 5 3H19C20.1046 3 21 3.89543 21 5V21L12 17L3 21Z" stroke="#1A237E" strokeWidth="2" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#1A237E] mb-3">Real Estate Offices</h3>
                <p className="text-gray-700">Property management companies and real estate agents who need to capture leads and handle tenant inquiries while showing properties.</p>
              </div>
              <div className="use-case-card bg-white rounded-lg p-8 shadow-md transition-transform hover:translate-y-[-5px]">
                <div className="use-case-icon w-15 h-15 bg-[#E3F2FD] rounded-full flex items-center justify-center mb-5">
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 3L17 5L21 9L9 21H5V17L15 7V3Z" stroke="#1A237E" strokeWidth="2" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#1A237E] mb-3">Small Businesses</h3>
                <p className="text-gray-700">Retailers, service providers, and entrepreneurs who can't afford to hire a full-time receptionist but need professional call handling.</p>
              </div>
              <div className="use-case-card bg-white rounded-lg p-8 shadow-md transition-transform hover:translate-y-[-5px]">
                <div className="use-case-icon w-15 h-15 bg-[#E3F2FD] rounded-full flex items-center justify-center mb-5">
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 21V5C20 3.89543 19.1046 3 18 3H6C4.89543 3 4 3.89543 4 5V21" stroke="#1A237E" strokeWidth="2" />
                    <path d="M2 21H22" stroke="#1A237E" strokeWidth="2" strokeLinecap="round" />
                    <path d="M8 8H16" stroke="#1A237E" strokeWidth="2" strokeLinecap="round" />
                    <path d="M8 13H16" stroke="#1A237E" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#1A237E] mb-3">E-commerce Businesses</h3>
                <p className="text-gray-700">Online retailers who need to provide human-like customer service and order support without the overhead of call center staff.</p>
              </div>
              <div className="use-case-card bg-white rounded-lg p-8 shadow-md transition-transform hover:translate-y-[-5px]">
                <div className="use-case-icon w-15 h-15 bg-[#E3F2FD] rounded-full flex items-center justify-center mb-5">
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 6L3 6" stroke="#1A237E" strokeWidth="2" strokeLinecap="round" />
                    <path d="M21 12L3 12" stroke="#1A237E" strokeWidth="2" strokeLinecap="round" />
                    <path d="M21 18L3 18" stroke="#1A237E" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#1A237E] mb-3">Home Service Providers</h3>
                <p className="text-gray-700">Plumbers, electricians, and contractors who need to capture service calls while they're working on job sites.</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
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

        {/* CTA Section */}
        <section className="cta-section bg-[#1A237E] text-white py-20 text-center">
          <div className="container max-w-[1200px] mx-auto px-5">
            <h2 className="text-3xl md:text-4xl font-bold mb-5">Start Your AI Receptionist Trial Today</h2>
            <p className="text-lg max-w-2xl mx-auto mb-8">Join thousands of businesses already saving time and money while providing better customer service. Try it risk-free with our 14-day money-back guarantee.</p>
            <div className="flex flex-wrap justify-center gap-5">
              <a href="#" className="bg-[#00B8D4] text-white px-6 py-3 rounded font-bold text-lg hover:bg-[#009cb8] transition">Start Your Free Trial</a>
              <a href="#" className="border-2 border-white text-white px-6 py-3 rounded font-bold text-lg hover:bg-white hover:text-[#1A237E] transition">Live Demo</a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#333] text-white py-16">
        <div className="container max-w-[1200px] mx-auto px-5">
          <div className="footer-columns grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
            <div className="footer-column">
              <h3 className="font-bold text-lg mb-4">About Us</h3>
              <p className="text-[#bbb] mb-6">We are dedicated to providing cutting-edge AI solutions that transform the way businesses operate and serve their customers.</p>
              <div className="social-links flex space-x-3">
                <a href="#" className="w-10 h-10 rounded-full bg-[#555] text-white inline-flex items-center justify-center hover:bg-[#00B8D4] transition">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18 2H15C13.7913 2 12.6174 2.47492 11.6716 3.32233C10.7258 4.16975 10.1361 5.26148 10 6.5V9H7V12H10V22H14V12H17L18 9H14V7C14 6.44772 14.4477 6 15 6H18V2Z" />
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-[#555] text-white inline-flex items-center justify-center hover:bg-[#00B8D4] transition">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22 5.115C21.247 5.457 20.451 5.692 19.621 5.828C20.472 5.319 21.146 4.598 21.534 3.73C20.729 4.205 19.842 4.552 18.893 4.766C18.119 4.024 17.177 3.585 16.144 3.49C15.112 3.395 14.106 3.645 13.228 4.203C12.35 4.761 11.644 5.575 11.285 6.53C9.961 6.461 8.67 6.044 7.48 5.305C6.289 4.566 5.241 3.534 4.38 2.358C4.075 3.029 4.075 3.097 4.271 3.476C4.424 3.777 4.749 4.219 5.017 5.011C5.573 5.644 6.276 6.044 5.645 6.025C5.042 5.834 4.496 5.5 4.496 5.5" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="footer-column">
              <h3 className="font-bold text-lg mb-4">Quick Links</h3>
              <ul className="list-none">
                <li className="mb-2"><a href="#features" className="text-[#bbb] hover:text-white">Features</a></li>
                <li className="mb-2"><a href="#benefits" className="text-[#bbb] hover:text-white">Benefits</a></li>
                <li className="mb-2"><a href="#how-it-works" className="text-[#bbb] hover:text-white">How It Works</a></li>
                <li className="mb-2"><a href="#use-cases" className="text-[#bbb] hover:text-white">Use Cases</a></li>
                <li><a href="#faq" className="text-[#bbb] hover:text-white">FAQ</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h3 className="font-bold text-lg mb-4">Contact Us</h3>
              <p className="text-[#bbb] mb-2">123 AI Innovation Way<br />Tech City, CA 91234</p>
              <p className="text-[#bbb] mb-2">Email: info@example.com<br />Phone: (555) 123-4567</p>
            </div>
            <div className="footer-column">
              <h3 className="font-bold text-lg mb-4">Legal</h3>
              <ul className="list-none">
                <li className="mb-2"><a href="#" className="text-[#bbb] hover:text-white">Privacy Policy</a></li>
                <li className="mb-2"><a href="#" className="text-[#bbb] hover:text-white">Terms of Service</a></li>
                <li><a href="#" className="text-[#bbb] hover:text-white">GDPR Compliance</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-[#555] pt-8 text-center text-[#bbb]">
            <p>© 2025 Professional AI Assistants. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
