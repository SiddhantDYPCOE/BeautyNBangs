import { ReactNode } from "react";

export default function ContactCard({ icon, title, detail, href, cta }: { icon: ReactNode; title: string; detail: string; href: string; cta: string; }) {
  return (
    <div className="card p-5 flex items-start justify-between gap-4">
      <div className="flex items-start gap-3">
        <div className="mt-1 text-[#d4af37]" aria-hidden>{icon}</div>
        <div>
          <p className="text-sm uppercase tracking-wide text-[#dcdcdc]/70">{title}</p>
          <p className="text-[#ffffff]">{detail}</p>
        </div>
      </div>
      <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noopener noreferrer" : undefined} className="self-center whitespace-nowrap rounded-lg border border-[#d4af37] px-3 py-1.5 text-sm text-[#dcdcdc] hover:text-[#d4af37] focus:outline-none focus:ring-2 focus:ring-[var(--ring)]" aria-label={cta}>
        {cta}
      </a>
    </div>
  );
}

