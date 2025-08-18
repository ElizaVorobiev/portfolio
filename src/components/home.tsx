import React from "react";
import { motion } from "framer-motion";
import HeroSection from "./HeroSection";
import FeaturedCaseStudies from "./FeaturedCaseStudies";
import ProjectGrid from "./ProjectGrid";

const Home = () => {
  return (
    <motion.div
      className="min-h-screen bg-gradient-to-b from-white to-gray-50 px-4 md:px-8 lg:px-12 xl:px-24 py-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto space-y-24">
        {/* Hero Section */}
        <HeroSection />

        {/* Featured Case Studies */}
        <FeaturedCaseStudies />

        {/* Project Grid */}
        <ProjectGrid />

        {/* Footer */}
        <footer className="pt-12 pb-6 text-center text-gray-500">
          <div className="backdrop-blur-lg bg-white/30 rounded-xl p-8 border border-white/20 shadow-sm">
            <p className="mb-4">Let's create something amazing together</p>
            <a
              href="mailto:contact@example.com"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-[#DC134C]/10 text-[#DC134C] font-medium hover:bg-[#DC134C]/20 transition-all duration-300"
            >
              Get in touch
            </a>
            <p className="mt-8 text-sm">
              © {new Date().getFullYear()} Portfolio. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </motion.div>
  );
};

export default Home;
