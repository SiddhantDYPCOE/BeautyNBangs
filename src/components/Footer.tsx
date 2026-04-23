import Link from "next/link";
import { FiInstagram, FiPhone } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-[#d4af37]/20">
      <div className="container py-10 grid gap-8 md:grid-cols-3">
        <div className="flex items-center gap-3">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <circle cx="12" cy="12" r="10" stroke="#d4af37" strokeWidth="1.5"/>
            <path d="M7 14c2-1.5 4-1.5 6 0 1.5 1.2 3 1.2 4.5 0" stroke="#d4af37" strokeWidth="1.2"/>
            <path d="M9.5 8.5c.8-.8 2.2-.8 3 0 .8.8.8 2.2 0 3" stroke="#d4af37" strokeWidth="1.2"/>
          </svg>
          <div>
            <p className="heading text-lg text-[#d4af37]">Beauty and Bangs</p>
            <p className="text-sm text-[#dcdcdc]/70">Redefining Elegance</p>
          </div>
        </div>

        <nav className="flex flex-col gap-2 md:items-center">
          <p className="text-sm uppercase tracking-wide text-[#dcdcdc]/60">Quick Links</p>
          <div className="flex gap-4">
            <Link href="#home" className="hover:text-[#d4af37]">Home</Link>
            <Link href="#about" className="hover:text-[#d4af37]">About</Link>
            <Link href="#services" className="hover:text-[#d4af37]">Services</Link>
            <Link href="#gallery" className="hover:text-[#d4af37]">Gallery</Link>
            <Link href="#contact" className="hover:text-[#d4af37]">Contact</Link>
          </div>
        </nav>

        <div className="flex flex-col gap-2 md:items-end">
          <p className="text-sm uppercase tracking-wide text-[#dcdcdc]/60">Connect</p>
          <div className="flex gap-3">
            <a href="tel:7517239872" aria-label="Call">
              <FiPhone className="hover:text-[#d4af37]" />
            </a>
            <a href="https://instagram.com/beauty_and_bangs" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FiInstagram className="hover:text-[#d4af37]" />
            </a>
          </div>
        </div>
      </div>

     
    </footer>
  );
}

