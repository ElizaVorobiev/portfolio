import React, { useState } from "react";
import { motion } from "framer-motion";
import CaseStudyCard from "./CaseStudyCard";

interface Project {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  tags: string[];
  metrics?: {
    label: string;
    value: string;
  }[];
}

interface ProjectGridProps {
  projects?: Project[];
}

const ProjectGrid = ({ projects = defaultProjects }: ProjectGridProps) => {
  const [expandedProject, setExpandedProject] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedProject(expandedProject === id ? null : id);
  };

  return (
    <section className="w-full py-16 px-4 md:px-8 bg-white bg-opacity-50">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-8 text-gray-900"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          More Projects
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, staggerChildren: 0.1 }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`${expandedProject === project.id ? "col-span-1 md:col-span-2 lg:col-span-3" : ""}`}
            >
              <CaseStudyCard
                title={project.title}
                description={project.description}
                imageSrc={project.thumbnail}
                tags={project.tags}
                metrics={project.metrics}
                isExpanded={expandedProject === project.id}
                onClick={() => toggleExpand(project.id)}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const defaultProjects: Project[] = [
  {
    id: "1",
    title: "Mobile Banking Redesign",
    description:
      "A comprehensive redesign of a mobile banking application focusing on improved user experience and accessibility.",
    thumbnail:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80",
    tags: ["UX Design", "Mobile", "Fintech"],
    metrics: [
      { label: "User Satisfaction", value: "+42%" },
      { label: "Task Completion", value: "+28%" },
    ],
  },
  {
    id: "2",
    title: "E-commerce Platform",
    description:
      "Design and implementation of a modern e-commerce platform with focus on conversion optimization.",
    thumbnail:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
    tags: ["UI Design", "E-commerce", "Web App"],
  },
  {
    id: "3",
    title: "Health Tracking App",
    description:
      "A wellness application that helps users track their health metrics and achieve fitness goals.",
    thumbnail:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80",
    tags: ["Mobile App", "Health", "UX Research"],
  },
  {
    id: "4",
    title: "Smart Home Dashboard",
    description:
      "An intuitive dashboard for controlling smart home devices with voice and touch interfaces.",
    thumbnail:
      "https://images.unsplash.com/photo-1558002038-1055907df827?w=800&q=80",
    tags: ["IoT", "Dashboard", "UI Design"],
  },
  {
    id: "5",
    title: "Travel Booking Redesign",
    description:
      "Reimagining the travel booking experience with a focus on simplicity and delight.",
    thumbnail:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80",
    tags: ["Travel", "UX Design", "Mobile"],
  },
  {
    id: "6",
    title: "Productivity Tool",
    description:
      "A minimalist productivity application designed to help users focus and manage their time effectively.",
    thumbnail:
      "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80",
    tags: ["Productivity", "Web App", "UI Design"],
  },
];

export default ProjectGrid;
