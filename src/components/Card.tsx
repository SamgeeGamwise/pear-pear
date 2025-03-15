"use client";

import React from "react";

interface CardProps {
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ children }) => {
  return (
    <div className="dark:bg-dark shadow-lg rounded-lg p-6 w-full max-w-md mx-auto">
      {children}
    </div>

  );
};

export default Card;
