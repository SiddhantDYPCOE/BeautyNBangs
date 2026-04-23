"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type GalleryItem = { src: string; alt: string };

export default function Lightbox({ items, index, onClose }: { items: GalleryItem[]; index: number; onClose: () => void }) {
  const [i, setI] = useState<number>(() => Math.max(0, Math.min(index, Math.max(0, items.length - 1))));
  const hasItems = items && items.length > 0;

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (!hasItems) return;
      if (e.key === "ArrowRight") setI((prev) => (prev + 1) % items.length);
      if (e.key === "ArrowLeft") setI((prev) => (prev - 1 + items.length) % items.length);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose, hasItems, items.length]);

  return (
    <AnimatePresence>
      <motion.div
        role="dialog"
        aria-modal="true"
        className="fixed inset-0 z-[60] bg-black/90 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <div className="absolute inset-0 flex items-center justify-center p-4" onClick={(e) => e.stopPropagation()}>
          {hasItems && (
          <motion.img
            key={i}
            src={items[i].src}
            alt={items[i].alt}
            className="max-h-[85vh] max-w-[90vw] object-contain rounded-lg"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            draggable
            onDragEnd={(e) => {
              const deltaX = (e as any).offsetX ?? 0;
              if (deltaX > 50) setI((prev) => (prev - 1 + items.length) % items.length);
              if (deltaX < -50) setI((prev) => (prev + 1) % items.length);
            }}
          />)}
          <button
            className="absolute top-4 right-4 px-3 py-1.5 rounded-md border border-[#d4af37]/40 text-[#dcdcdc] hover:text-[#d4af37]"
            onClick={onClose}
            aria-label="Close"
          >
            Close
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

