"use client";

import React from "react";
import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  variant?: "primary" | "secondary" | "accent";
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
        "text-white bg-primary dark:bg-dark-primary hover:bg-primary-accent hover:dark:bg-dark-primary-accent active:scale-95",
      secondary:
        "bg-secondary dark:bg-dark-secondary hover:bg-secondary-accent hover:dark:bg-dark-secondary-accent active:scale-95",
      accent:
        "bg-accent dark:bg-dark-accent hover:bg-accent-light hover:dark:bg-dark-accent-light active:scale-95",
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
