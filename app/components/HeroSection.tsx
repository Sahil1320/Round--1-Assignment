"use client";

import { motion } from "framer-motion";
import { Gavel, FileText, ListChecks, Receipt } from "lucide-react";
import { FloatingCard } from "./FloatingCard";
import { PortalCardWrapper } from "./PortalCard";
import { BackgroundBlobs } from "./BackgroundBlobs";

export function HeroSection() {
  return (
    <section
      id="hero-section"
      className="relative min-h-screen w-full overflow-hidden"
    >
      <BackgroundBlobs />

      {/* Text Content — top-left */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-16 pt-16 lg:pt-20 pb-8">
        <motion.div
          className="max-w-lg xl:max-w-xl"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] xl:text-[3.5rem] font-light leading-[1.15] tracking-tight text-[#686d8a] dark:text-[#9a9dbd]">
            A single platform to{" "}
            <span className="font-bold text-[#353752] dark:text-[#e2e8f0]">manage</span> every
            part of your{" "}
            <span className="font-bold text-[#353752] dark:text-[#e2e8f0]">
              legal
            </span>{" "}
            <span className="font-bold text-[#353752] dark:text-[#e2e8f0]">work</span>
          </h1>

          <motion.p
            className="mt-5 text-[15px] sm:text-base text-[#4f46e5] dark:text-[#818cf8] font-medium leading-relaxed max-w-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Track matters, coordinate schedules, manage clients, centralize
            documents, and handle communication – all in one system.
          </motion.p>
        </motion.div>
      </div>

      {/* Floating cards — right-bottom, no overlap with text */}
      <div className="absolute inset-0 z-20 pointer-events-none">
        <div className="relative w-full h-full max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-16">

          {/* Billing - blue, top of group */}
          <FloatingCard
            color="blue"
            rotation={-15}
            icon={Receipt}
            label="Billing"
            size="large"
            className="top-[36%] left-[50%] lg:left-[48%] pointer-events-auto"
            delay={0.3}
            floatAnimation="slow"
          />

          {/* Matters - orange, below-left of Billing */}
          <FloatingCard
            color="orange"
            rotation={8}
            icon={Gavel}
            label="Matters"
            className="top-[52%] left-[30%] lg:left-[28%] pointer-events-auto"
            delay={0.5}
            floatAnimation="medium"
          />

          {/* Portal Card - right of Matters */}
          <PortalCardWrapper
            className="top-[48%] left-[48%] lg:left-[46%] pointer-events-auto"
            delay={0.7}
          />

          {/* Tasks - bottom-left of group */}
          <FloatingCard
            color="dark"
            rotation={-5}
            icon={ListChecks}
            label="Tasks"
            className="top-[70%] left-[34%] lg:left-[32%] pointer-events-auto"
            delay={0.9}
            floatAnimation="fast"
          />

          {/* Documents - bottom-right of group */}
          <FloatingCard
            color="dark"
            rotation={4}
            icon={FileText}
            label="Documents"
            className="top-[72%] left-[58%] lg:left-[56%] pointer-events-auto"
            delay={1.1}
            floatAnimation="medium"
          />
        </div>
      </div>
    </section>
  );
}
