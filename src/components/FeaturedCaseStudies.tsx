import React from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, TrendingUp, CheckCircle, Star } from "lucide-react";

interface CaseStudy {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  category: string;
  year: string;
  metrics: {
    label: string;
    value: string;
    icon: string;
  }[];
  link: string;
}

interface FeaturedCaseStudiesProps {
  caseStudies?: CaseStudy[];
}

const FeaturedCaseStudies: React.FC<FeaturedCaseStudiesProps> = ({
  caseStudies = [
    {
      id: "1",
      title: "Fintech Mobile App Redesign",
      description:
        "Reimagining personal finance management for Gen Z users with a focus on gamification and social features",
      thumbnail:
        "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&q=80",
      category: "Mobile App",
      year: "2024",
      metrics: [
        { label: "Increase in DAU", value: "145%", icon: "trending" },
        { label: "Task Completion", value: "89%", icon: "check" },
        { label: "App Store Rating", value: "4.8/5", icon: "star" },
      ],
      link: "/case-study/fintech-redesign",
    },
    {
      id: "2",
      title: "Health Tracking Platform",
      description:
        "Creating an intuitive health monitoring system that empowers users to take control of their wellbeing",
      thumbnail:
        "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&q=80",
      category: "Web Platform",
      year: "2024",
      metrics: [
        { label: "User Retention", value: "78%", icon: "trending" },
        { label: "Daily Active Users", value: "124K", icon: "check" },
        { label: "User Rating", value: "4.9/5", icon: "star" },
      ],
      link: "/case-study/health-platform",
    },
    {
      id: "3",
      title: "E-commerce Experience",
      description:
        "Elevating online shopping through personalized recommendations and seamless checkout flows",
      thumbnail:
        "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=1200&q=80",
      category: "E-commerce",
      year: "2023",
      metrics: [
        { label: "Conversion Rate", value: "23%", icon: "trending" },
        { label: "Cart Completion", value: "65%", icon: "check" },
        { label: "Customer Rating", value: "4.7/5", icon: "star" },
      ],
      link: "/case-study/ecommerce-redesign",
    },
  ],
}) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const getIcon = (iconType: string) => {
    switch (iconType) {
      case "trending":
        return <TrendingUp className="h-5 w-5 text-[#DC134C]" />;
      case "check":
        return <CheckCircle className="h-5 w-5 text-[#DC134C]" />;
      case "star":
        return <Star className="h-5 w-5 text-[#DC134C]" />;
      default:
        return <TrendingUp className="h-5 w-5 text-[#DC134C]" />;
    }
  };

  return (
    <section className="w-full py-32 px-6 md:px-12 lg:px-24 bg-white bg-opacity-50">
      <motion.div
        className="max-w-7xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <motion.div variants={itemVariants} className="mb-20 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#DC134C] to-[#FF6B8B]">
            Featured Work
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-xl leading-relaxed">
            A selection of my most impactful projects that showcase my approach
            to solving complex design challenges.
          </p>
        </motion.div>

        <div className="space-y-16">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              variants={itemVariants}
              className="group cursor-pointer"
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="backdrop-blur-lg bg-white/30 rounded-3xl p-8 md:p-12 border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  {/* Content */}
                  <div
                    className={`space-y-8 ${index % 2 === 1 ? "lg:order-2" : ""}`}
                  >
                    <div className="flex items-center gap-4">
                      <Badge
                        variant="secondary"
                        className="bg-[#DC134C]/10 text-[#DC134C] px-4 py-2 text-sm font-medium rounded-full"
                      >
                        {study.category}
                      </Badge>
                      <span className="text-gray-500 font-medium">
                        {study.year}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                        {study.title}
                      </h3>
                      <p className="text-gray-600 text-lg leading-relaxed">
                        {study.description}
                      </p>
                    </div>

                    {/* Metrics */}
                    <div className="grid grid-cols-3 gap-8">
                      {study.metrics.map((metric, metricIndex) => (
                        <div key={metricIndex} className="space-y-3">
                          <div className="flex items-center gap-2">
                            {getIcon(metric.icon)}
                          </div>
                          <div className="text-3xl md:text-4xl font-bold text-gray-900">
                            {metric.value}
                          </div>
                          <div className="text-sm text-gray-600 font-medium">
                            {metric.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* CTA */}
                    <motion.div
                      className="flex items-center gap-3 text-[#DC134C] font-semibold text-lg group-hover:gap-4 transition-all duration-300"
                      whileHover={{ x: 8 }}
                    >
                      <span>View Case Study</span>
                      <ArrowRight className="h-5 w-5" />
                    </motion.div>
                  </div>

                  {/* Image */}
                  <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                    <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                      <img
                        src={study.thumbnail}
                        alt={study.title}
                        className="w-full h-80 md:h-96 object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default FeaturedCaseStudies;
