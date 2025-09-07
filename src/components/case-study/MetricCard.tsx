import React from "react";

interface MetricCardProps {
  value: string;
  label: string;
  description?: string;
  color?: "blue" | "green" | "purple" | "orange" | "red";
}

const MetricCard: React.FC<MetricCardProps> = ({ 
  value, 
  label, 
  description, 
  color = "blue" 
}) => {
  const colorClasses = {
    blue: "bg-blue-50 text-blue-600",
    green: "bg-green-50 text-green-600",
    purple: "bg-purple-50 text-purple-600",
    orange: "bg-orange-50 text-orange-600",
    red: "bg-red-50 text-red-600"
  };

  return (
    <div className={`text-center p-6 ${colorClasses[color]} rounded-lg`}>
      <div className="text-3xl font-bold mb-2">{value}</div>
      <div className="text-sm font-medium mb-1">{label}</div>
      {description && (
        <div className="text-xs opacity-75">{description}</div>
      )}
    </div>
  );
};

export default MetricCard;
