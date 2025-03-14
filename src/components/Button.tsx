"use client";

import React from "react";
import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg" | "xl";
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  href,
  variant = "primary",
  size = "md",
  fullWidth = false,
}) => {
  const baseClasses =
    "relative transition-all duration-200 ease-in-out rounded-md font-bold flex justify-center items-center";
  const shadowClasses =
    "before:absolute before:inset-0 before:shadow-[0px_6px_10px_rgba(0,0,0,0.2)] before:rounded-md";

    const variantClasses = {
      primary:
        "bg-primary text-white hover:bg-green-700 active:scale-95 dark:bg-darkCard dark:text-darkText",
      secondary:
        "bg-secondary text-black hover:bg-yellow-400 active:scale-95 dark:bg-darkBackground dark:text-darkText",
      outline:
        "border border-gray-500 text-gray-900 hover:bg-gray-100 active:scale-95 dark:border-darkText dark:text-darkText",
    };
    

  const sizeClasses = {
    sm: "text-sm px-4 py-2",
    md: "text-base px-6 py-3",
    lg: "text-lg px-8 py-4",
    xl: "text-2xl px-12 py-6",
  };

  const combinedClasses = [
    baseClasses,
    shadowClasses,
    variantClasses[variant],
    sizeClasses[size],
    fullWidth ? "w-full" : "",
  ].join(" ");

  if (href) {
    return (
      <Link href={href} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={combinedClasses}>
      {children}
    </button>
  );
};

export default Button;
