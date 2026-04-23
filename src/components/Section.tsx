import { ReactNode } from "react";

type Props = {
  id?: string;
  className?: string;
  children: ReactNode;
  bg?: "default" | "alt";
};

export default function Section({ id, className = "", children, bg = "default" }: Props) {
  return (
    <section id={id} className={`${bg === "alt" ? "bg-[#1a1a1a]" : "bg-transparent"} py-16 sm:py-24 ${className}`}>
      <div className="container">{children}</div>
    </section>
  );
}

