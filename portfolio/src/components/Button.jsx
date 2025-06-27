// src/components/ui/button.jsx
import React from "react";

export const Button = ({ children, variant = "default", ...props }) => {
  const base = "px-6 py-2 rounded-full font-semibold transition-all duration-300 ease-in-out transform hover:scale-105 shadow-md";

  const variants = {
    default: "bg-gradient-to-r from-purple-500 to-teal-500 text-white hover:from-purple-600 hover:to-teal-600",
    outline: "border-2 border-teal-600 text-teal-700 bg-white hover:bg-teal-50",
  };

  return (
    <button className={`${base} ${variants[variant]}`} {...props}>
      {children}
    </button>
  );
};
