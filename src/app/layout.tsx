import type { Metadata } from "next";
import { Playfair_Display, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Beauty and Bangs | Salon – Punawale",
  description:
    "Luxury dark-themed salon website—haircuts, spa, facials, makeup, waxing, and more. Book on WhatsApp: 7517239872.",
  openGraph: {
    title: "Beauty and Bangs | Salon – Punawale",
    description:
      "Luxury dark-themed salon website—haircuts, spa, facials, makeup, waxing, and more.",
    images: [
      {
        url: "/assets/hero-og.jpg",
        width: 1200,
        height: 630,
        alt: "Beauty and Bangs",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Beauty and Bangs | Salon – Punawale",
    description:
      "Luxury dark-themed salon website—haircuts, spa, facials, makeup, waxing, and more.",
    images: ["/assets/hero-og.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${playfair.variable} ${poppins.variable} antialiased bg-black text-[#dcdcdc]`}> 
        <Navbar />
        <main id="content" className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
