
import React from "react";
import { Link } from "react-router-dom";

const BlogPage = () => (
  <div className="font-sans bg-white text-[#333]">
    {/* Header - matches Homepage for brand consistency */}
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
              <li><a href="/#features" className="hover:text-[#00B8D4]">Features</a></li>
              <li><a href="/#roles" className="hover:text-[#00B8D4]">AI Roles</a></li>
              <li><a href="/#pricing" className="hover:text-[#00B8D4]">Pricing</a></li>
              <li><a href="/#faq" className="hover:text-[#00B8D4]">FAQ</a></li>
              <li><Link to="/blog" className="text-[#00B8D4] font-bold">Blog</Link></li>
              <li><a href="/#contact" className="hover:text-[#00B8D4]">Contact</a></li>
            </ul>
          </nav>
          <div className="flex items-center mt-5 md:mt-0">
            <button className="login-btn px-5 py-2 border-2 border-[#1A237E] text-[#1A237E] font-bold rounded mr-3 hover:bg-[#1A237E] hover:text-white transition">Log In</button>
            <button className="signup-btn bg-[#00B8D4] text-white px-6 py-3 rounded font-bold hover:bg-[#009cb8] transition">Get Started</button>
          </div>
        </div>
      </div>
    </header>
    <main className="pt-[140px]">
      {/* Blog Header */}
      <section className="blog-header text-center py-16 bg-gradient-to-br from-white to-[#F5F5F5]">
        <div className="container max-w-[1200px] mx-auto px-5">
          <h1 className="text-4xl md:text-5xl font-bold text-[#1A237E] mb-4">AI Assistant Insights</h1>
          <p className="text-lg md:text-xl text-[#555] max-w-2xl mx-auto">Explore the latest trends, strategies, and success stories in the world of AI assistants and business automation.</p>
        </div>
      </section>
      {/* Blog Layout */}
      <div className="container max-w-[1200px] mx-auto px-5 grid grid-cols-1 md:grid-cols-[1fr_300px] gap-12 py-16">
        {/* Main */}
        <main>
          {/* Featured Post */}
          <div className="featured-post mb-12">
            <div className="featured-post-card bg-white rounded-lg shadow-md overflow-hidden">
              <div className="featured-image h-[250px] md:h-[400px] bg-gray-100 flex items-center justify-center overflow-hidden">
                <img src="/api/placeholder/800/400" alt="Featured Post" className="object-cover w-full h-full" />
              </div>
              <div className="featured-content p-8">
                <div className="post-meta flex items-center mb-4 text-[#777] text-sm">
                  <span className="category bg-[#FFF9C4] text-[#1A237E] font-semibold px-3 py-1 rounded mr-4">Case Study</span>
                  <span>April 12, 2025</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#1A237E] mb-3">How Smith & Associates Increased Customer Response Time by 400% with AI Assistants</h2>
                <p className="mb-2 text-[#555]">When Smith & Associates implemented our AI Phone Receptionist and Customer Support AI, they faced significant backlogs in customer inquiries. Within just three weeks, their response time dropped from 24 hours to under 6 hours, leading to a measurable increase in customer satisfaction scores and retention rates.</p>
                <p className="mb-5 text-[#555]">This comprehensive case study explores the implementation process, challenges faced, and the measurable ROI achieved through strategic AI deployment.</p>
                <a href="#" className="read-more text-[#00B8D4] font-semibold inline-flex items-center">
                  Read the full case study
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="ml-2"><path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="#00B8D4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </a>
              </div>
            </div>
          </div>
          {/* Blog Posts Grid */}
          <div className="blog-posts grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card 1 */}
            <div className="blog-card bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:-translate-y-1">
              <div className="blog-image h-[200px] bg-gray-100 flex items-center justify-center">
                <img src="/api/placeholder/400/200" alt="Blog Post" className="object-cover w-full h-full"/>
              </div>
              <div className="blog-content p-6">
                <div className="post-meta flex items-center mb-3 text-[#777] text-sm">
                  <span className="category bg-[#FFF9C4] text-[#1A237E] font-semibold px-3 py-1 rounded mr-3">Strategy</span>
                  <span>April 8, 2025</span>
                </div>
                <h3 className="text-xl font-bold text-[#1A237E] mb-2">5 Ways to Integrate AI Assistants with Your Existing Team</h3>
                <p className="mb-4 text-[#555]">Learn how to create a harmonious working relationship between your human staff and AI assistants to maximize productivity and job satisfaction.</p>
                <a href="#" className="read-more text-[#00B8D4] font-semibold inline-flex items-center">
                  Read more
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="ml-2"><path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="#00B8D4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </a>
              </div>
            </div>
            {/* Card 2 ... etc ... */}
            {/* More cards as in HTML */}
          </div>
          {/* Pagination */}
          <div className="pagination flex mt-12 justify-center gap-2 text-sm">
            <span className="pagination-link w-10 h-10 flex items-center justify-center cursor-pointer bg-[#1A237E] text-white font-bold rounded">1</span>
            <span className="pagination-link w-10 h-10 flex items-center justify-center cursor-pointer bg-white text-[#555] rounded">2</span>
            <span className="pagination-link w-10 h-10 flex items-center justify-center cursor-pointer bg-white text-[#555] rounded">3</span>
            <span className="pagination-link w-10 h-10 flex items-center justify-center cursor-pointer bg-white text-[#555] rounded">...</span>
            <span className="pagination-link w-10 h-10 flex items-center justify-center cursor-pointer bg-white text-[#555] rounded">8</span>
            <span className="pagination-link w-10 h-10 flex items-center justify-center cursor-pointer bg-white text-[#555] rounded">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"/></svg>
            </span>
          </div>
        </main>
        {/* Sidebar */}
        <aside className="sidebar mt-16 md:mt-0">
          {/* Search Widget */}
          <div className="sidebar-widget bg-[#F5F5F5] rounded-lg p-6 mb-7">
            <h3 className="font-bold text-lg text-[#1A237E] mb-5">Search</h3>
            <form className="search-form flex">
              <input type="text" className="search-input flex-1 border border-gray-300 rounded-l px-4 py-2 text-base" placeholder="Search articles..." />
              <button type="submit" className="search-button bg-[#1A237E] text-white px-5 rounded-r">🔍</button>
            </form>
          </div>
          {/* Categories Widget */}
          <div className="sidebar-widget bg-[#F5F5F5] rounded-lg p-6 mb-7">
            <h3 className="font-bold text-lg text-[#1A237E] mb-5">Categories</h3>
            <ul className="categories-list">
              <li className="py-2 border-b border-gray-200 flex justify-between">
                <a href="#" className="text-[#555] hover:text-[#00B8D4] flex-1">Case Studies</a>
                <span className="count bg-[#00B8D4] text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center ml-2">12</span>
              </li>
              {/* ... More categories ... */}
            </ul>
          </div>
          {/* Popular Posts Widget */}
          <div className="sidebar-widget bg-[#F5F5F5] rounded-lg p-6 mb-7">
            <h3 className="font-bold text-lg text-[#1A237E] mb-5">Popular Posts</h3>
            <ul className="popular-posts">
              <li className="popular-post-item flex items-center py-3 border-b border-gray-200">
                <div className="popular-post-image w-[60px] h-[60px] rounded bg-gray-200 flex-shrink-0 mr-4">
                  <img src="/api/placeholder/60/60" alt="Popular Post" className="rounded"/>
                </div>
                <div>
                  <h4 className="font-bold text-base"><a href="#" className="hover:text-[#00B8D4]">AI Assistants vs. Outsourcing: Which is Right for You?</a></h4>
                  <span className="popular-post-date text-xs text-[#777]">March 15, 2025</span>
                </div>
              </li>
              {/* ... More popular posts ... */}
            </ul>
          </div>
          {/* Tags Widget */}
          <div className="sidebar-widget bg-[#F5F5F5] rounded-lg p-6">
            <h3 className="font-bold text-lg text-[#1A237E] mb-5">Tags</h3>
            <div className="tag-cloud flex flex-wrap gap-3">
              <a href="#" className="tag bg-white text-[#555] px-4 py-1 rounded hover:bg-[#00B8D4] hover:text-white">AI Staff</a>
              {/* ... More tags ... */}
            </div>
          </div>
        </aside>
      </div>
      {/* Newsletter */}
      <section className="newsletter bg-[#1A237E] text-white py-20 text-center">
        <div className="container max-w-[1200px] mx-auto px-5">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Subscribe to Our Newsletter</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">Stay updated with the latest insights, trends, and strategies for AI assistants in business. No spam, just valuable content delivered monthly.</p>
          <form className="newsletter-form flex max-w-lg mx-auto">
            <input type="email" className="newsletter-input flex-1 px-4 py-3 rounded-l text-base text-gray-900" placeholder="Enter your email address" />
            <button type="submit" className="newsletter-button bg-[#00B8D4] text-white px-8 py-3 rounded-r font-bold hover:bg-[#009cb8] transition">Subscribe</button>
          </form>
        </div>
      </section>
      {/* Footer, similar to homepage */}
      <footer className="bg-[#333] text-white py-16">
        <div className="container max-w-[1200px] mx-auto px-5">
          {/* ... Repeat footer as in homepage ... */}
        </div>
        <div className="footer-bottom text-center pt-10 text-[#bbb] text-sm">
          &copy; 2025 Professional AI Assistants. All rights reserved.
        </div>
      </footer>
    </main>
  </div>
);

export default BlogPage;
