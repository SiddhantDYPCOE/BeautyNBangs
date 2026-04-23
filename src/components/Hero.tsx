"use client";
import { motion, useReducedMotion } from "framer-motion";

export default function Hero() {
  const prefersReduced = useReducedMotion();
  return (
    <section id="home" className="relative min-h-[90vh] md:min-h-[100vh] flex items-center justify-center overflow-hidden">
      {/* Background image placeholder - replace with your image at /public/assets/hero.jpg */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(/assets/gallery/IMG-20251104-WA0007.jpg)",
        }}
        aria-hidden
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" aria-hidden />

      <div className="container relative z-10 text-center">
        <motion.h1
          initial={prefersReduced ? undefined : { opacity: 0, y: 20 }}
          animate={prefersReduced ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="heading text-4xl sm:text-5xl md:text-6xl text-[#ffffff]"
        >
          Beauty and Bangs
        </motion.h1>
        <motion.p
          initial={prefersReduced ? undefined : { opacity: 0, y: 20 }}
          animate={prefersReduced ? undefined : { opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.7, ease: "easeOut" }}
          className="mt-4 text-lg sm:text-xl text-[#dcdcdc]"
        >
          Redefining Elegance, One Style at a Time.
        </motion.p>

        <motion.div
          initial={prefersReduced ? undefined : { opacity: 0, y: 10 }}
          animate={prefersReduced ? undefined : { opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="https://wa.me/7517239872"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-xl bg-[#d4af37] px-6 py-3 text-black font-medium shadow hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-[var(--ring)]"
            aria-label="Book on WhatsApp"
          >
            Book on WhatsApp
          </a>
          <a
            href="#services"
            className="inline-flex items-center justify-center rounded-xl border border-[#d4af37] px-6 py-3 text-[#dcdcdc] hover:text-[#d4af37] focus:outline-none focus:ring-2 focus:ring-[var(--ring)]"
          >
            View Services
          </a>
        </motion.div>
      </div>
    </section>
  );
}

