
import React from "react";
import PageHeader from "@/components/PageHeader";
import BlogPostContent from "@/components/BlogPostContent";
import BlogSidebar from "@/components/BlogSidebar";
import BlogNewsletter from "@/components/BlogNewsletter";
import BlogFooter from "@/components/BlogFooter";

const BlogPostPage = () => (
  <div className="font-sans bg-white text-[#333]">
    <PageHeader />
    <main className="pt-[140px]">
      <div className="container max-w-[1200px] mx-auto px-5 grid grid-cols-1 md:grid-cols-[1fr_300px] gap-12 py-16">
        <BlogPostContent />
        <BlogSidebar />
      </div>
      <BlogNewsletter />
      <BlogFooter />
    </main>
  </div>
);

export default BlogPostPage;
