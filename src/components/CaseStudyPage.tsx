import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface CaseStudyData {
  id: string;
  title: string;
  description: string;
  company: string;
  category: string;
  tags: string[];
  heroImage: string;
  metadata: {
    role: string[];
    team: string[];
    tools: string[];
    timeline: string[];
  };
  sections: {
    id: string;
    title: string;
    content: React.ReactNode;
  }[];
}

interface CaseStudyPageProps {
  caseStudy: CaseStudyData;
}

const CaseStudyPage: React.FC<CaseStudyPageProps> = ({ caseStudy }) => {
  const [activeSection, setActiveSection] = useState(caseStudy.sections[0]?.id || "");
  const navigate = useNavigate();
  const sectionRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  const scrollToSection = (sectionId: string) => {
    const element = sectionRefs.current[sectionId];
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Scroll spy to detect which section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.getAttribute('data-section-id');
            if (sectionId) {
              setActiveSection(sectionId);
            }
          }
        });
      },
      {
        rootMargin: '-20% 0px -70% 0px', // Trigger when section is 20% from top
        threshold: 0.1
      }
    );

    // Observe all sections
    Object.values(sectionRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, [caseStudy.sections]);


  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-[#DC134C] rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">E</span>
            </div>
            <span className="font-semibold text-gray-900">Eliza Vorobieva</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="/" className="text-gray-600 hover:text-gray-900">About Me</a>
            <a href="/" className="text-gray-600 hover:text-gray-900">Case Studies</a>
            <a href="/" className="text-gray-600 hover:text-gray-900">Resume</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <Badge variant="secondary" className="bg-[#DC134C]/10 text-[#DC134C] px-3 py-1">
                  {caseStudy.company}
                </Badge>
                <Badge variant="outline" className="px-3 py-1">
                  {caseStudy.category}
                </Badge>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                {caseStudy.title}
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                {caseStudy.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {caseStudy.tags.map((tag, index) => (
                  <Badge key={index} variant="secondary" className="px-3 py-1">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Right Content - Hero Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="w-full max-w-lg">
                <img
                  src={caseStudy.heroImage}
                  alt={caseStudy.title}
                  className="w-full h-80 object-cover rounded-2xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Metadata */}
      <section className="bg-white border-b border-gray-200 py-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">ROLE</h3>
              <div className="space-y-1">
                {caseStudy.metadata.role.map((role, index) => (
                  <p key={index} className="text-gray-900">{role}</p>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">TEAM</h3>
              <div className="space-y-1">
                {caseStudy.metadata.team.map((member, index) => (
                  <p key={index} className="text-gray-900">{member}</p>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">TOOLS</h3>
              <div className="space-y-1">
                {caseStudy.metadata.tools.map((tool, index) => (
                  <p key={index} className="text-gray-900">{tool}</p>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">TIMELINE</h3>
              <div className="space-y-1">
                {caseStudy.metadata.timeline.map((time, index) => (
                  <p key={index} className="text-gray-900">{time}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Side Navigation */}
            <div className="lg:col-span-1">
              <div className="sticky top-8">
                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">Sections</h3>
                <nav className="space-y-2">
                  {caseStudy.sections.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => scrollToSection(section.id)}
                      className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                        activeSection === section.id
                          ? "bg-[#DC134C] text-white"
                          : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                      }`}
                    >
                      {section.title}
                    </button>
                  ))}
                </nav>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              <div className="space-y-16">
                {caseStudy.sections.map((section, index) => (
                  <motion.div
                    key={section.id}
                    ref={(el) => (sectionRefs.current[section.id] = el)}
                    data-section-id={section.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="prose prose-lg max-w-none"
                  >
                    <div className="mb-8">
                      <h2 className="text-3xl font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2">
                        {section.title}
                      </h2>
                    </div>
                    {section.content}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Back Button */}
      <div className="bg-white border-t border-gray-200 py-8">
        <div className="max-w-7xl mx-auto px-6">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Case Studies
          </button>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyPage;
