import React from "react";

interface InsightCardProps {
  number: number;
  title: string;
  description: string;
  color?: "yellow" | "blue" | "green" | "purple" | "red";
}

const InsightCard: React.FC<InsightCardProps> = ({ 
  number, 
  title, 
  description, 
  color = "yellow" 
}) => {
  const colorClasses = {
    yellow: "bg-yellow-50 border-yellow-200",
    blue: "bg-blue-50 border-blue-200",
    green: "bg-green-50 border-green-200",
    purple: "bg-purple-50 border-purple-200",
    red: "bg-red-50 border-red-200"
  };

  const dotColorClasses = {
    yellow: "bg-yellow-400",
    blue: "bg-blue-400",
    green: "bg-green-400",
    purple: "bg-purple-400",
    red: "bg-red-400"
  };

  return (
    <div className={`flex items-start gap-4 p-4 ${colorClasses[color]} rounded-lg border`}>
      <div className={`w-6 h-6 ${dotColorClasses[color]} rounded-full flex items-center justify-center flex-shrink-0 mt-1`}>
        <span className="text-white text-sm font-bold">{number}</span>
      </div>
      <div>
        <h4 className="font-semibold text-gray-900 mb-1">{title}</h4>
        <p className="text-gray-700 text-sm">{description}</p>
      </div>
    </div>
  );
};

export default InsightCard;
