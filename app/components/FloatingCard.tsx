"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

export type FloatingCardVariant = "blue" | "orange" | "dark";

interface FloatingCardProps {
  /** The color variant of the card */
  color: FloatingCardVariant;
  /** Rotation angle in degrees */
  rotation: number;
  /** Lucide icon component */
  icon?: LucideIcon;
  /** Label text */
  label: string;
  /** Custom class for positioning */
  className?: string;
  /** Animation delay in seconds */
  delay?: number;
  /** Float animation type */
  floatAnimation?: "slow" | "medium" | "fast";
  /** Children for custom content */
  children?: ReactNode;
  /** Size variant */
  size?: "default" | "large";
}

/*
  Color mapping matching the reference exactly:
  - blue:   Solid blue bg, white text/icon  (Billing)
  - orange: Solid orange bg, white text/icon (Matters)
  - dark:   Dark navy bg, orange text/icon   (Tasks, Documents)
*/
const colorStyles: Record<FloatingCardVariant, string> = {
  blue: "bg-[#4f46e5] text-white shadow-[0_12px_40px_rgba(79,70,229,0.35)]",
  orange: "bg-[#f59e0b] text-white shadow-[0_12px_40px_rgba(245,158,11,0.35)]",
  dark: "bg-[#1e1b3a] text-[#f59e0b] shadow-[0_12px_40px_rgba(30,27,58,0.45)]",
};

const floatClass: Record<string, string> = {
  slow: "animate-float-slow",
  medium: "animate-float-medium",
  fast: "animate-float-fast",
};

export function FloatingCard({
  color,
  rotation,
  icon: Icon,
  label,
  className = "",
  delay = 0,
  floatAnimation = "slow",
  children,
  size = "default",
}: FloatingCardProps) {
  const paddingClass =
    size === "large" ? "px-6 py-3 sm:px-8 sm:py-4 lg:px-12 lg:py-5" : "px-5 py-2.5 sm:px-7 sm:py-3 lg:px-10 lg:py-4";

  return (
    <motion.div
      className={`absolute ${floatClass[floatAnimation]} ${className}`}
      style={{
        ["--tw-rotate" as string]: `${rotation}deg`,
        rotate: `${rotation}deg`,
      }}
      initial={{ opacity: 0, scale: 0.5, y: 40 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{
        duration: 0.7,
        delay: delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      whileHover={{
        scale: 1.08,
        rotate: 0,
        transition: { duration: 0.3 },
      }}
    >
      <div
        className={`
          rounded-full flex items-center gap-3 cursor-pointer
          transition-all duration-300
          ${colorStyles[color]}
          ${paddingClass}
        `}
      >
        {children ? (
          children
        ) : (
          <>
            {Icon && (
              <div className="flex items-center justify-center">
                <Icon className="w-6 h-6" strokeWidth={2.2} />
              </div>
            )}
            <span className="font-bold text-[14px] sm:text-[15px] lg:text-[17px] whitespace-nowrap tracking-wide">
              {label}
            </span>
          </>
        )}
      </div>
    </motion.div>
  );
}
