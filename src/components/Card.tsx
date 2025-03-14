"use client";

import React from "react";

interface CardProps {
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ children }) => {
  return (
    <div className="bg-card dark:bg-darkCard shadow-lg rounded-lg p-6 w-full max-w-md mx-auto">
      {children}
    </div>

  );
};

export default Card;
