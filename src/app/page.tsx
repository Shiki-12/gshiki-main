"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Briefcase, Instagram, Facebook, Gamepad2 } from "lucide-react";
import AnimatedShaderBackground from "@/components/ui/animated-shader-background";
import { LiquidButton } from "@/components/ui/liquid-glass-button";

/* ── Animation Variants ── */
const stagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.4 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

const scalePop = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};

/* ── Link Data ── */
const links = [
  {
    label: "Portfolio",
    href: "/portofolio",
    icon: Briefcase,
    external: false,
  },
  {
    label: "Instagram",
    href: "#",
    icon: Instagram,
    external: true,
  },
  {
    label: "Facebook",
    href: "#",
    icon: Facebook,
    external: true,
  },
  {
    label: "Steam",
    href: "#",
    icon: Gamepad2,
    external: true,
  },
];

export default function Home() {
  const router = useRouter();

  const handleClick = (href: string, external: boolean) => {
    if (external) {
      window.open(href, "_blank", "noopener,noreferrer");
    } else {
      router.push(href);
    }
  };

  return (
    <main className="relative min-h-dvh flex flex-col items-center justify-center px-5 py-12 overflow-hidden">
      {/* ── Aurora Shader Background ── */}
      <AnimatedShaderBackground />

      {/* ── Subtle vignette for text readability ── */}
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(0,0,0,0.55)_100%)] z-0" />

      {/* ── Content Layer ── */}
      <motion.div
        className="relative z-10 flex flex-col items-center gap-10 w-full max-w-xl"
        variants={stagger}
        initial="hidden"
        animate="visible"
      >
        {/* ════════════════════════════════════
            HERO SECTION
        ════════════════════════════════════ */}
        <div className="flex flex-col items-center gap-5 text-center">
          {/* Profile Picture */}
          <motion.div variants={scalePop}>
            <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden ring-2 ring-[#00f0ff]/60 shadow-[0_0_20px_rgba(0,240,255,0.35),0_0_40px_rgba(0,240,255,0.1)]">
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
            className="text-5xl sm:text-7xl font-black tracking-[0.15em] leading-none"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            <span className="bg-gradient-to-r from-[#00f0ff] via-white to-[#ff00e5] bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(0,240,255,0.5)]">
              SHIKI
            </span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            variants={fadeUp}
            className="text-sm sm:text-base text-white/70 max-w-sm leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
          >
            Developer &amp; Creator ·{" "}
            <span className="text-[#00f0ff] font-medium">
              Building the future
            </span>
            , one line of code at a time.
          </motion.p>
        </div>

        {/* ════════════════════════════════════
            BENTO GRID — LIQUID GLASS BUTTONS
        ════════════════════════════════════ */}
        <motion.div
          variants={fadeUp}
          className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full"
        >
          {links.map((link) => {
            const Icon = link.icon;
            return (
              <LiquidButton
                key={link.label}
                size="xxl"
                className="!h-auto w-full rounded-2xl"
                onClick={() => handleClick(link.href, link.external)}
              >
                <span className="flex flex-col items-center justify-center gap-2 py-3">
                  <Icon className="!size-5 text-white/80" strokeWidth={1.5} />
                  <span
                    className="text-xs sm:text-sm font-semibold tracking-wider text-white/90"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {link.label}
                  </span>
                </span>
              </LiquidButton>
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
