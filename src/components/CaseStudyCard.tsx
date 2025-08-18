import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight } from "lucide-react";

interface CaseStudyCardProps {
  title: string;
  description: string;
  imageUrl: string;
  metrics?: {
    label: string;
    value: string;
  }[];
  tags?: string[];
  onClick?: () => void;
  featured?: boolean;
}

const CaseStudyCard = ({
  title = "Project Title",
  description = "A brief description of the project and its key objectives. This showcases the main challenge and approach.",
  imageUrl = "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=800&q=80",
  metrics = [
    { label: "Conversion", value: "+24%" },
    { label: "User Retention", value: "+18%" },
  ],
  tags = ["UX Design", "Research"],
  onClick = () => {},
  featured = false,
}: CaseStudyCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="h-full"
    >
      <Card
        onClick={onClick}
        className={`overflow-hidden cursor-pointer h-full bg-white/20 backdrop-blur-md border-white/20 shadow-lg ${featured ? "lg:p-2" : "p-1"}`}
        style={{ backgroundColor: "rgba(255, 255, 255, 0.15)" }}
      >
        <div className="relative overflow-hidden rounded-lg">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-48 object-cover transition-transform duration-500 hover:scale-105"
          />
          <div className="absolute top-3 right-3 flex gap-2">
            {tags.map((tag, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="bg-white/30 backdrop-blur-md text-xs font-medium"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        <CardContent className="p-5">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
            <motion.div
              whileHover={{ rotate: 45 }}
              className="p-1 rounded-full bg-[#DC134C]/10"
            >
              <ArrowUpRight className="h-4 w-4 text-[#DC134C]" />
            </motion.div>
          </div>

          <p className="text-sm text-gray-600 mb-4 line-clamp-2">
            {description}
          </p>

          {metrics && metrics.length > 0 && (
            <div className="grid grid-cols-2 gap-4 mt-auto">
              {metrics.map((metric, index) => (
                <div key={index} className="flex flex-col">
                  <span className="text-xs text-gray-500">{metric.label}</span>
                  <span className="text-lg font-semibold text-[#DC134C]">
                    {metric.value}
                  </span>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default CaseStudyCard;
