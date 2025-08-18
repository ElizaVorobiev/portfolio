import React, { useState } from "react";
import { motion } from "framer-motion";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./ui/tabs";

interface HeroSectionProps {
  name?: string;
  title?: string;
  philosophy?: string;
}

interface PersonaContent {
  title: string;
  description: string;
  buttonText: string;
}

const personaContent: Record<string, PersonaContent> = {
  "for-anyone": {
    title:
      "Product Designer with 6+ years of experience in healthcare innovation",
    description:
      "I have a track record of building innovative and user-centric products. Currently I'm at UrgentIQ, where I create simple yet powerful solutions that empower healthcare providers to deliver the best care for their patients.",
    buttonText: "View My Work",
  },
  recruiters: {
    title: "Experienced Product Designer Ready for New Challenges",
    description:
      "With 6+ years in product design and a proven track record at companies like UrgentIQ, I bring expertise in user research, design systems, and cross-functional collaboration. I'm passionate about creating impactful solutions that drive business results.",
    buttonText: "View Resume",
  },
  designers: {
    title: "Design Systems & User Experience Specialist",
    description:
      "I specialize in building scalable design systems and conducting user research that informs product decisions. My work focuses on bridging the gap between user needs and business objectives through thoughtful, data-driven design.",
    buttonText: "See Design Process",
  },
  "product-managers": {
    title: "Collaborative Product Designer & Strategic Partner",
    description:
      "I work closely with product teams to translate complex requirements into intuitive user experiences. My background in healthcare innovation has taught me to balance user needs, technical constraints, and business goals effectively.",
    buttonText: "View Case Studies",
  },
  engineers: {
    title: "Design-to-Development Bridge Builder",
    description:
      "I create detailed design specifications and maintain close collaboration with engineering teams. My designs are built with implementation in mind, ensuring smooth handoffs and pixel-perfect results that perform well across all devices.",
    buttonText: "See Design Specs",
  },
};

const HeroSection = ({ name = "Eliza Vorobieva" }: HeroSectionProps) => {
  const [activeTab, setActiveTab] = useState("for-anyone");
  return (
    <section className="relative w-full h-[600px] flex items-center justify-center px-4 md:px-8 lg:px-16 bg-white">
      {/* Background gradient */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-[#DC134C]/10 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-blue-500/10 blur-3xl" />
      </div>

      {/* Hero content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 max-w-4xl w-full"
      >
        <div className="backdrop-blur-xl bg-white/70 rounded-3xl shadow-lg border border-white/20 p-8 md:p-12">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-8">
              {name}
            </h1>

            {/* Tabs */}
            <Tabs
              value={activeTab}
              onValueChange={setActiveTab}
              className="w-full"
            >
              <TabsList className="grid w-full grid-cols-5 mb-8 bg-black/80 backdrop-blur-sm rounded-full p-1">
                <TabsTrigger
                  value="for-anyone"
                  className="rounded-full text-white data-[state=active]:bg-white data-[state=active]:text-black font-medium px-4 py-2 text-sm"
                >
                  For Anyone
                </TabsTrigger>
                <TabsTrigger
                  value="recruiters"
                  className="rounded-full text-white data-[state=active]:bg-white data-[state=active]:text-black font-medium px-4 py-2 text-sm"
                >
                  Recruiters
                </TabsTrigger>
                <TabsTrigger
                  value="designers"
                  className="rounded-full text-white data-[state=active]:bg-white data-[state=active]:text-black font-medium px-4 py-2 text-sm"
                >
                  Designers
                </TabsTrigger>
                <TabsTrigger
                  value="product-managers"
                  className="rounded-full text-white data-[state=active]:bg-white data-[state=active]:text-black font-medium px-4 py-2 text-sm"
                >
                  Product managers
                </TabsTrigger>
                <TabsTrigger
                  value="engineers"
                  className="rounded-full text-white data-[state=active]:bg-white data-[state=active]:text-black font-medium px-4 py-2 text-sm"
                >
                  Engineers
                </TabsTrigger>
              </TabsList>

              {Object.entries(personaContent).map(([key, content]) => (
                <TabsContent key={key} value={key} className="mt-0">
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900 mb-6 leading-tight">
                      {content.title}
                    </h2>

                    <p className="text-lg md:text-xl leading-relaxed text-gray-700 max-w-3xl mb-8">
                      {content.description}
                    </p>

                    <div className="flex gap-4">
                      <button className="px-8 py-3 rounded-full bg-[#DC134C] text-white font-medium hover:bg-[#DC134C]/90 transition-colors shadow-md hover:shadow-lg">
                        {content.buttonText}
                      </button>
                      <button className="px-8 py-3 rounded-full bg-black text-white font-medium hover:bg-black/90 transition-colors shadow-md hover:shadow-lg flex items-center gap-2">
                        <svg
                          className="w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                        LinkedIn
                      </button>
                    </div>
                  </motion.div>
                </TabsContent>
              ))}
            </Tabs>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
