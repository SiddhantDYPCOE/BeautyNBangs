"use client";
import { useState } from "react";
import Lightbox from "./Lightbox";

type GalleryItem = { src: string; alt: string };

// Auto-generated list from public/assets/gallery
const items: GalleryItem[] = [
  { src: "/assets/gallery/IMG-20251104-WA0007.jpg", alt: "Gallery image" },
  { src: "/assets/gallery/IMG-20251104-WA0009.jpg", alt: "Gallery image" },
  { src: "/assets/gallery/IMG-20251104-WA0013.jpg", alt: "Gallery image" },
  { src: "/assets/gallery/IMG-20251104-WA0014.jpg", alt: "Gallery image" },
  { src: "/assets/gallery/IMG-20251104-WA0015.jpg", alt: "Gallery image" },
  { src: "/assets/gallery/IMG-20251104-WA0016.jpg", alt: "Gallery image" },
  { src: "/assets/gallery/IMG-20251104-WA0017.jpg", alt: "Gallery image" },
  { src: "/assets/gallery/IMG-20251104-WA0018.jpg", alt: "Gallery image" },
  { src: "/assets/gallery/IMG-20251104-WA0019.jpg", alt: "Gallery image" },
  { src: "/assets/gallery/IMG-20251104-WA0020.jpg", alt: "Gallery image" },
  { src: "/assets/gallery/IMG-20251104-WA0021.jpg", alt: "Gallery image" },
  { src: "/assets/gallery/IMG-20251104-WA0022.jpg", alt: "Gallery image" },
  { src: "/assets/gallery/IMG-20251104-WA0023.jpg", alt: "Gallery image" },
  { src: "/assets/gallery/IMG-20251104-WA0024.jpg", alt: "Gallery image" },
  { src: "/assets/gallery/WhatsApp Image 2025-11-04 at 19.28.46_069f943f.jpg", alt: "Gallery image" },
  { src: "/assets/gallery/WhatsApp Image 2025-11-04 at 19.28.46_6b52689e.jpg", alt: "Gallery image" },
  { src: "/assets/gallery/WhatsApp Image 2025-11-04 at 19.28.46_7051ca9e.jpg", alt: "Gallery image" },
];

export default function GalleryGrid() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const open = (i: number) => setActiveIndex(i);
  const close = () => setActiveIndex(null);

  return (
    <div>
      <div className="mb-6 text-sm text-[#dcdcdc]/70">Tap an image to view.</div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
        {items.map((img, idx) => (
          <button
            key={idx}
            className="relative group overflow-hidden rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--ring)]"
            onClick={() => open(idx)}
            aria-label={`Open image ${idx + 1}`}
          >
            <img
              src={img.src}
              alt={img.alt}
              className="h-40 md:h-56 w-full object-cover transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
            />
          </button>
        ))}
      </div>
      {activeIndex !== null && (
        <Lightbox items={items} index={activeIndex} onClose={close} />
      )}
    </div>
  );
}

