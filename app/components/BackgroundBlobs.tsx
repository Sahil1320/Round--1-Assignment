"use client";

import { motion } from "framer-motion";

export function BackgroundBlobs() {
  // ALL stripes: same width, same height, SAME ANGLE
  const SW = 400;
  const SH = 36;
  const GAP = 55;
  const ANGLE = "-15deg"; // Same angle for ALL stripes

  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      {/* ========== Soft background blobs ========== */}
      <motion.div
        className="absolute -top-24 right-[-5%] w-[500px] h-[500px] rounded-full bg-blob opacity-40 blur-3xl animate-blob"
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 0.4, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />
      <motion.div
        className="absolute top-[30%] -left-[10%] w-[350px] h-[350px] rounded-full bg-blob opacity-30 blur-3xl"
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 0.3, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
      />
      <motion.div
        className="absolute bottom-[-5%] right-[20%] w-[350px] h-[350px] rounded-full bg-blob opacity-20 blur-3xl animate-blob"
        style={{ animationDelay: "4s" }}
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 0.2, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.6, ease: "easeOut" }}
      />

      {/* ========== RIGHT SIDE: 3 stripes (upper-right) ========== */}
      {[0, 1, 2].map((i) => (
        <motion.div
          key={`right-${i}`}
          className="absolute rounded-full bg-blob/55"
          style={{
            width: SW,
            height: SH,
            top: `calc(4% + ${i * GAP}px)`,
            right: -30,
            transformOrigin: "center center",
            rotate: ANGLE,
          }}
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 + i * 0.15 }}
        />
      ))}

      {/* ========== LEFT SIDE: 3 stripes (mid-lower-left) ========== */}
      {[0, 1, 2].map((i) => (
        <motion.div
          key={`left-${i}`}
          className="absolute rounded-full bg-blob/50"
          style={{
            width: SW,
            height: SH,
            top: `calc(65% + ${i * GAP}px)`,
            left: -30,
            transformOrigin: "center center",
            rotate: ANGLE,
          }}
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 + i * 0.15 }}
        />
      ))}
    </div>
  );
}
