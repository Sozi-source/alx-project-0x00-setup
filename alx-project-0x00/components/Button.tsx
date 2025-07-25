import React from "react";
import { ButtonProps } from "@/interfaces";

const Button: React.FC<ButtonProps> = ({ title, className }) => {
  return (
    <button
      className={`px-4 py-2 bg-blue-600 text-white font-medium ${className}`}
    >
      {title}
    </button>
  );
};

export default Button;