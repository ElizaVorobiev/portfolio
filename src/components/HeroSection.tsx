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
    "Everyone",
    "Recruiters",
    "Designers",
    "Product Managers",
    "Engineers",
    "Healthtech",
  ];

  const getContentForTab = (tab: string) => {
    switch (tab) {
      case "Recruiters":
        return [
          { emoji: "🚀", title: "10+ years Expereince", description: "Built user-centric products from 0→1 and beyond." },
          { emoji: "🎤", title: "Leadership", description: "Guided product from roadmap → research → design → launch." },
          { emoji: "💻", title: "Technical Edge", description: "Engineering + design background (yes, I coded this site)." }
        ];
      case "Designers":
        return [
          { emoji: "🎨", title: "Design Process", description: "User research, rapid prototyping, and iterative testing." },
          { emoji: "🤝", title: "Collaboration", description: "Love working with designers andcross-functional teams on complex problems." },
          { emoji: "🔁", title: "Design Ops", description: "Created design processes and design systems from scratch." }
        ];
      case "Product Managers":
        return [
          { emoji: "📊", title: "Data-Driven", description: "Have expereince building dashboards and setting success metrics" },
          { emoji: "🎯", title: "Strategic Thinking", description: "Love driving product strategy and roadmaps." },
          { emoji: "⚡", title: "Velocity", description: "Deliver at strtup speed without sacrificing quality." }
        ];
      case "Engineers":
        return [
          { emoji: "💻", title: "Technical Collaboration", description: "I believe in involving enginers in the design process and not just the end result." },
          { emoji: "💡", title: "Tech Savvy", description: "Front‑end experience → smoother collaboration." },
          { emoji: "🔧", title: "Handoff", description: "Designs dev‑ready, with edge cases covered." }
        ];
      case "Healthtech":
        return [
          { emoji: "🏥", title: "7 years in HealthTech", description: "Transforming clunky health tech into cutting-edge solutions in the dental, pharmacy and urgent care space." },
          { emoji: "❤️", title: "Human-Centered", description: "Making healthcare better, more accessible, and truly human." },
          { emoji: "🤖", title: "AI Integration", description: "Leveraging AI to make care more efficient and personalized." }
        ];
      default:
        return [
          { emoji: "🚀", title: "10+ years Expereince", description: "Built user-centric products from 0→1 and beyond." },
          { emoji: "🎤", title: "Leadership", description: "Guided product from roadmap → research → design → launch." },
          { emoji: "💻", title: "Technical Edge", description: "Engineering + design background (yes, I coded this site)." }
        ];
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
          {/* Full Width Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-black leading-tight max-w-5xl mx-auto">
              I'm <span className="text-[#DC134C]">Eliza</span>, a full‑stack, user‑centered product designer
            </h1>
          </motion.div>

          {/* Centered Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-center mb-12"
          >
            <h3 className="text-md md:text-xl lg:text-2xl font-light tracking-tight leading-tight max-w-5xl mx-auto text-gray-500 mb-4">
            Click on the tabs below to see what I bring to the table for:
            </h3>
            <div className="flex flex-wrap gap-2 justify-center">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    activeTab === tab
                      ? "bg-[#DC134C] text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Content Grid - Dynamic Content Left, Image Right */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
          >
            {/* Left Content - Dynamic Content Only */}
            <div className="space-y-8">

              {/* Dynamic Content - Bullet Points */}
              <motion.div 
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-4"
              >
                {currentContent.map((item, index) => (
                  <motion.div
                    key={`${activeTab}-${index}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="p-4 rounded-lg bg-white/50 backdrop-blur-sm border-2 border-white/20 shadow-lg"
                  >
                    <h3 className="font-semibold text-gray-900 mb-1 flex items-center gap-2">
                      <span className="text-2xl">{item.emoji}</span>
                      {item.title}
                    </h3>
                    <p className="text-gray-600 ml-8">{item.description}</p>
                  </motion.div>
                ))}
              </motion.div>

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

            {/* Right Content - Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="w-full max-w-md h-96 bg-gray-100 rounded-2xl flex items-center justify-center border border-gray-200">
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
            </div>

          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
