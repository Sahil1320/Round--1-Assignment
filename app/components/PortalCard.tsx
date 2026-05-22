"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface PortalCardProps {
  name: string;
  message: string;
  caseId: string;
  timeAgo: string;
  avatarUrl: string;
}

export function PortalCard({
  name,
  message,
  caseId,
  timeAgo,
  avatarUrl,
}: PortalCardProps) {
  return (
    <div className="flex items-start gap-3">
      {/* Avatar */}
      <div className="w-10 h-10 rounded-full shrink-0 overflow-hidden mt-0.5">
        <Image
          src={avatarUrl}
          alt={name}
          width={40}
          height={40}
          className="w-full h-full object-cover rounded-full"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col min-w-0">
        <span className="font-bold text-[13px] text-[#1a1a2e] leading-tight">
          {name} – Portal
        </span>
        <span className="text-[11px] text-[#4a4a6a]/80 leading-snug mt-0.5 max-w-[180px]">
          {message}
        </span>
        <span className="text-[10px] text-[#4f46e5] font-semibold mt-1 underline decoration-[#4f46e5]/30 underline-offset-2">
          {caseId} – {timeAgo}
        </span>
      </div>
    </div>
  );
}

export function PortalCardWrapper({
  className = "",
  delay = 0,
}: {
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={`absolute animate-float-medium ${className}`}
      style={{
        ["--tw-rotate" as string]: "-3deg",
        rotate: "-3deg",
      }}
      initial={{ opacity: 0, scale: 0.5, y: 40 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{
        duration: 0.7,
        delay: delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      whileHover={{
        scale: 1.05,
        rotate: 0,
        transition: { duration: 0.3 },
      }}
    >
      <div className="bg-[#d8d0f0]/80 backdrop-blur-sm rounded-2xl px-4 py-3 shadow-[0_10px_40px_rgba(100,80,180,0.18)] cursor-pointer transition-all duration-300">
        <PortalCard
          name="John Doe"
          message="Hey! Could you please review a document for me?"
          caseId="MAT-2233"
          timeAgo="2 h ago"
          avatarUrl="/avatar.png"
        />
      </div>
    </motion.div>
  );
}
