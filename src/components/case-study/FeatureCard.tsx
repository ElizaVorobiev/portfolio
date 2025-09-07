import React from "react";

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  number?: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ 
  icon, 
  title, 
  description, 
  number 
}) => {
  return (
    <div className="flex items-center gap-4 p-4 border border-gray-200 rounded-lg">
      {number && (
        <div className="w-8 h-8 bg-[#DC134C] rounded-full flex items-center justify-center flex-shrink-0">
          <span className="text-white text-sm font-bold">{number}</span>
        </div>
      )}
      <div className="flex-1">
        <h4 className="font-semibold text-gray-900 mb-1">{title}</h4>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
      {icon && (
        <div className="text-2xl">{icon}</div>
      )}
    </div>
  );
};

export default FeatureCard;
