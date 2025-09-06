import React, { useState } from "react";
import { motion } from "framer-motion";

interface HeroSectionProps {
  name?: string;
  title?: string;
  philosophy?: string;
}

const HeroSection = ({ name = "Eliza Vorobieva" }: HeroSectionProps) => {
  const [activeTab, setActiveTab] = useState("For Anyone");

  const tabs = [
    "For Anyone",
    "Recruiters",
    "Designers",
    "Product managers",
    "Engineers",
    "Healthtech",
  ];

  const getContentForTab = (tab: string) => {
    switch (tab) {
      case "Recruiters":
        return {
          title: "Lead Product Designer with 7+ years of expereince",
          description: "7+ years designing user-centered healthcare solutions. Proven track record of improving patient outcomes through thoughtful UX design. Currently leading design at UrgentIQ, where I've increased user engagement by 145% and task completion rates by 89%.",
        };
      case "Designers":
        return {
          title: "Designer with a passion for healthcare innovation",
          description: "I specialize in creating intuitive interfaces for complex healthcare workflows. My design process focuses on user research, rapid prototyping, and iterative testing. I love collaborating with cross-functional teams to solve challenging design problems.",
        };
      case "Product managers":
        return {
          title: "Design-driven PM with healthcare expertise",
          description: "I bridge the gap between user needs and business goals through data-driven design decisions. My experience in healthcare product development helps me understand both user pain points and regulatory requirements.",
        };
      case "Engineers":
        return {
          title: "Designer who speaks your language",
          description: "I work closely with engineering teams to ensure designs are both beautiful and technically feasible. I understand frontend constraints, component libraries, and can create detailed design specifications that developers love.",
        };
        case "Healthtech":
          return {
            title: "Transforming health tech from clunky to cutting-edge—designing products that make care smarter, faster, and more human",
            description: "I bring 6+ years of experience designing and scaling health tech products across dental, pharmacy, and urgent care startups. I’m passionate about replacing outdated systems with intuitive, innovative solutions—and leveraging AI to make care more efficient and personalized. I believe thoughtful product design can make healthcare better, more accessible, and truly human-centered.",
          };
  
      default:
        return {
          title: "Product Designer with 6+ years of experience in healthcare innovation",
          description: "I have a track record of building innovative and user-centric products. Currently I'm at UrgentIQ, where I create simple yet powerful solutions that empower healthcare providers to deliver the best care for their patients.",
        };
    }
  };

  const currentContent = getContentForTab(activeTab);

  return (
    <section className="relative w-full min-h-[600px] flex items-center justify-center px-4 md:px-8 lg:px-16">

      {/* Hero content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 max-w-7xl w-full"
      >
        <div className="p-8 md:p-12">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            {/* Left Content */}
            <div className="space-y-8">
              {/* Tabs */}
              <div className="flex flex-wrap gap-2">
                {tabs.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                      activeTab === tab
                        ? "bg-black text-white"
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {/* Title */}
              <motion.h1 
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-black leading-tight"
              >
                {currentContent.title}
              </motion.h1>

              {/* Description */}
              <motion.p 
                key={`${activeTab}-desc`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-lg text-gray-600 leading-relaxed max-w-lg"
              >
                {currentContent.description}
              </motion.p>

              {/* Buttons */}
              <div className="flex gap-4">
                <button className="px-6 py-3 rounded-lg bg-black text-white font-medium hover:bg-gray-800 transition-colors flex items-center gap-2">
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  LinkedIn
                </button>
                <button className="px-6 py-3 rounded-lg bg-white text-black font-medium hover:bg-gray-50 transition-colors border border-gray-200">
                  View My Work
                </button>
              </div>
            </div>

            {/* Right Content - Image Placeholder */}
            {/* <div className="flex justify-center lg:justify-end">
              <div className="w-80 h-80 bg-gray-100 rounded-2xl flex items-center justify-center border border-gray-200">
                <svg
                  className="w-16 h-16 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
            </div> */}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
