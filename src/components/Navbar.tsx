"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { FiInstagram, FiPhone, FiMessageCircle, FiMapPin } from "react-icons/fi";

const sections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "gallery", label: "Gallery" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [solid, setSolid] = useState(false);
  const [active, setActive] = useState("home");
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (observerRef.current) observerRef.current.disconnect();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("id");
            if (id) setActive(id);
          }
        }
      },
      { rootMargin: "-40% 0px -60% 0px", threshold: [0, 0.25, 0.5, 1] }
    );
    observerRef.current = observer;
    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all ${
        solid
          ? "bg-black/80 backdrop-blur-md border-b border-[#d4af37]/20"
          : "bg-transparent"
      }`}
      aria-label="Primary Navigation"
    >
      <div className="container flex h-16 items-center justify-between">
        <Link href="#home" className="flex items-center gap-2" aria-label="Beauty and Bangs Home">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <circle cx="12" cy="12" r="10" stroke="#d4af37" strokeWidth="1.5"/>
            <path d="M7 14c2-1.5 4-1.5 6 0 1.5 1.2 3 1.2 4.5 0" stroke="#d4af37" strokeWidth="1.2"/>
            <path d="M9.5 8.5c.8-.8 2.2-.8 3 0 .8.8.8 2.2 0 3" stroke="#d4af37" strokeWidth="1.2"/>
          </svg>
          <span className="heading text-sm tracking-wider text-[#d4af37]">Beauty and Bangs</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6" aria-label="In-page links">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className={`text-sm uppercase tracking-wide transition-colors ${
                active === s.id ? "text-[#d4af37]" : "text-[#dcdcdc]/80 hover:text-[#dcdcdc]"
              }`}
            >
              {s.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="tel:7517239872"
            className="p-2 rounded-full border border-[#d4af37]/30 text-[#dcdcdc] hover:text-[#d4af37]"
            aria-label="Call now"
          >
            <FiPhone />
          </a>
          <a
            href="https://wa.me/7517239872"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full border border-[#d4af37]/30 text-[#dcdcdc] hover:text-[#d4af37]"
            aria-label="Open WhatsApp"
          >
            <FiMessageCircle />
          </a>
          <a
            href="https://instagram.com/beauty_and_bangs"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full border border-[#d4af37]/30 text-[#dcdcdc] hover:text-[#d4af37]"
            aria-label="Instagram"
          >
            <FiInstagram />
          </a>
          <a
            href="https://maps.app.goo.gl/LMHscrtuWytq4uRv9"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full border border-[#d4af37]/30 text-[#dcdcdc] hover:text-[#d4af37]"
            aria-label="Open in Google Maps"
          >
            <FiMapPin />
          </a>
        </div>
      </div>
    </header>
  );
}

