"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Briefcase, Instagram, Facebook, Gamepad2, Github } from "lucide-react";
import AnimatedShaderBackground from "@/components/ui/animated-shader-background";
import { LiquidButton } from "@/components/ui/liquid-glass-button";
import { Plus_Jakarta_Sans } from "next/font/google";

const plusJakarta = Plus_Jakarta_Sans({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap"
});

/* ── Animation Variants ── */
const stagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.4 },
  },
} as const;

const fadeUp = {
  hidden: { opacity: 0, y: 24, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.55, ease: "easeOut" as const },
  },
} as const;

const scalePop = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
  },
} as const;

/* ── Link Data ── */
const links = [
  {
    label: "Portfolio",
    href: "/portofolio",
    icon: Briefcase,
    external: false,
  },
  {
    label: "Github",
    href: "https://github.com/Shiki-12",
    icon: Github,
    external: true,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/tar_ajasih",
    icon: Instagram,
    external: true,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/Shikii21",
    icon: Facebook,
    external: true,
  },
  {
    label: "Steam",
    href: "https://steamcommunity.com/id/Kurisu-21",
    icon: Gamepad2,
    external: true,
  },
];

export default function Home() {
  return (
    <main className="relative min-h-dvh flex flex-col items-center justify-center px-5 py-12 overflow-hidden">
      {/* ── Aurora Shader Background ── */}
      <AnimatedShaderBackground />

      {/* ── Subtle vignette for text readability ── */}
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(0,0,0,0.55)_100%)] z-0" />

      {/* ── Content Layer ── */}
      <motion.div
        className="relative z-10 flex flex-col items-center gap-14 w-full max-w-xl"
        variants={stagger}
        initial="hidden"
        animate="visible"
      >
        {/* ════════════════════════════════════
            HERO SECTION
        ════════════════════════════════════ */}
        <div className="flex flex-col items-center gap-6 text-center">
          {/* Profile Picture */}
          <motion.div variants={scalePop}>
            <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden ring-1 ring-white/10 bg-white/5 backdrop-blur-sm shadow-xl">
              <Image
                src="/pfp.png"
                alt="Shiki"
                fill
                sizes="(max-width: 640px) 96px, 112px"
                className="object-cover"
                priority
              />
            </div>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={fadeUp}
            className={`text-5xl sm:text-7xl font-bold tracking-tight text-white drop-shadow-sm ${plusJakarta.className}`}
          >
            Shiki.Dev
          </motion.h1>

          {/* Tagline */}
          <motion.p
            variants={fadeUp}
            className={`text-sm sm:text-base text-zinc-400 max-w-sm leading-relaxed ${plusJakarta.className}`}
          >
            Developer &amp; Creator ·{" "}
            <span className="text-zinc-200 font-medium">
              My motto: &nbsp;
            </span>
            Aspiring to be a skilled programmer, but too lazy to actually code.
          </motion.p>
        </div>

        {/* ════════════════════════════════════
            BENTO GRID — LIQUID GLASS BUTTONS
        ════════════════════════════════════ */}
        <motion.div
          variants={fadeUp}
          className="grid grid-cols-2 sm:grid-cols-5 gap-3 w-full"
        >
          {links.map((link) => {
            const Icon = link.icon;
            
            return (
              <div key={link.label} className="relative w-full group">
                
                {/* 1. VISUAL TOMBOLNYA */}
                <LiquidButton
                  size="xxl"
                  className="!h-auto w-full rounded-2xl transition-opacity group-hover:opacity-80 pointer-events-none"
                >
                  <span className="flex flex-col items-center justify-center gap-2 py-3">
                    <Icon className="!size-5 text-zinc-400" strokeWidth={1.5} />
                    <span
                      className={`text-[10px] uppercase tracking-[0.15em] font-medium text-zinc-300 ${plusJakarta.className}`}
                    >
                      {link.label}
                    </span>
                  </span>
                </LiquidButton>

                {/* 2. LINK GAIB MURNI (HTML NATIVE) */}
                <a
                  href={link.href}
                  target={link.external ? "_blank" : "_self"}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  className="absolute inset-0 z-30 block w-full h-full cursor-pointer"
                  // Ini script sakti biar layar HP gak ngelag 300ms pas dipencet
                  style={{ touchAction: "manipulation", WebkitTapHighlightColor: "transparent" }}
                  aria-label={link.label}
                />
                
              </div>
            );
          })}
        </motion.div>
      </motion.div>

      {/* ── Footer ── */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-5 text-[10px] sm:text-xs text-white/25 tracking-[0.2em] uppercase z-10 drop-shadow-md"
      >
        © {new Date().getFullYear()} SHIKI
      </motion.p>
    </main>
  );
}