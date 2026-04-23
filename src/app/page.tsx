import Section from "@/components/Section";
import Hero from "@/components/Hero";
import PriceTable from "@/components/PriceTable";
import GalleryGrid from "@/components/GalleryGrid";
import ContactCard from "@/components/ContactCard";
import { FiInstagram, FiMapPin, FiMessageCircle, FiPhone } from "react-icons/fi";

export default function Home() {
  return (
    <div>
      <Hero />

      {/* About */}
      <Section id="about" bg="alt">
        <div className="grid gap-8 md:grid-cols-2 items-center">
          {/* updated as requested */}
          <div className="order-2 md:order-1">
            <img src="/assets/gallery/WhatsApp Image 2025-11-04 at 19.28.46_7051ca9e.jpg" alt="Salon Interior" className="w-full h-72 md:h-96 object-cover rounded-xl" />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="heading text-3xl text-[#ffffff]">About</h2>
            <p className="mt-4 text-[#dcdcdc]/90">
              At Beauty and Bangs, we bring out the best version of you. Our stylists and beauty experts focus on detail, hygiene, and comfort—so you leave confident, every time.
            </p>
          </div>
        </div>
      </Section>

      {/* Services */}
      <Section id="services">
        <h2 className="heading text-3xl text-[#ffffff] mb-6">Services & Pricing</h2>
        <p className="text-sm text-[#dcdcdc]/70 mb-8">Prices may vary slightly based on hair length and specific requirements.</p>

        <div className="grid gap-6">
          {/* Hair Cuts */}
          <div className="grid gap-6 md:grid-cols-2">
            <PriceTable title="Hair Cuts — Male" items={[
              { service: "Haircut", price: "₹200" },
              { service: "Beard", price: "₹100" },
              { service: "Hair Wash", price: "₹100" },
              { service: "Kid’s Haircut (below 7 yrs)", price: "₹150" },
            ]} />
            <PriceTable title="Hair Cuts — Female" items={[
              { service: "Basic Haircut", price: "₹250" },
              { service: "Haircut + Blowdry", price: "₹400" },
              { service: "Haircut + Hairwash + Blowdry", price: "₹600" },
              { service: "Hairwash", price: "₹300" },
              { service: "Hairwash + Blowdry", price: "₹350" },
              { service: "Blowdry", price: "₹250" },
              { service: "Kid’s Haircut (below 7 yrs)", price: "₹200" },
            ]} />
          </div>

          {/* Hair Spa */}
          <div className="grid gap-6 md:grid-cols-2">
            <PriceTable title="Hair Spa — Male" items={[
              { service: "L’Oréal Basic", notes: "dep. on length", price: "₹600" },
              { service: "Schwarzkopf", notes: "dep. on length", price: "₹700" },
              { service: "Wella", notes: "dep. on length", price: "₹800" },
            ]} />
            <PriceTable title="Hair Spa — Female" items={[
              { service: "L’Oréal Basic", notes: "dep. on length", price: "₹1000" },
              { service: "Schwarzkopf — Shoulder / Mid / Waist", notes: "dep. on length", price: "₹1350 / ₹1500 / ₹1800" },
              { service: "Wella — Shoulder / Mid / Waist", notes: "dep. on length", price: "₹1200 / ₹1450 / ₹1700" },
            ]} />
          </div>

          {/* Styling / Protein */}
          <div className="grid gap-6 md:grid-cols-2">
            <PriceTable title="Styling" items={[
              { service: "Ironing", price: "₹600" },
              { service: "Tongs", price: "₹700" },
            ]} />
            <PriceTable title="Protein Treatment" items={[
              { service: "Bluetox", price: "₹4000" },
              { service: "Nanoplastia", price: "₹5000" },
            ]} />
          </div>

          {/* Colour */}
          <div className="grid gap-6 md:grid-cols-2">
            <PriceTable title="Colour — Male" items={[
              { service: "Matrix", price: "₹600" },
              { service: "L’Oréal", price: "₹750" },
              { service: "Schwarzkopf", price: "₹900" },
              { service: "Beard Colour", price: "₹250" },
            ]} />
            <PriceTable title="Root Touch Up — Female (varies by grey coverage)" items={[
              { service: "Matrix (Ammonia / Ammonia-Free)", price: "₹1000 / ₹1150" },
              { service: "L’Oréal (Ammonia-Free) / (Alt)", price: "₹1150 / ₹1250" },
              { service: "Schwarzkopf (Ammonia)", price: "₹1300" },
            ]} />
          </div>
          <PriceTable title="Global Hair Colour" items={[
            { service: "Matrix (Ammonia / Ammonia-Free)", price: "₹2500 / ₹3000" },
            { service: "L’Oréal", price: "₹3000 / ₹3500" },
            { service: "Schwarzkopf", price: "₹3500 / ₹4000" },
            { service: "Highlights (per strip)", notes: "pricing depends on the hair length", price: "250" },
          ]} />

          {/* Threading / Waxing */}
          <div className="grid gap-6 md:grid-cols-2">
            <PriceTable title="Threading" items={[
              { service: "Eyebrows", price: "₹50" },
              { service: "Upper Lips", price: "₹20" },
              { service: "Forehead", price: "₹10" },
              { service: "Chin", price: "₹20" },
              { service: "Sidelocks & Jawline", price: "₹80" },
            ]} />
            <PriceTable title="Waxing" items={[
              { service: "Upper Lips", price: "₹50" },
              { service: "Chin", price: "₹50" },
              { service: "Side Locks & Jawline", price: "₹120" },
              { service: "Forehead", price: "₹50" },
              { service: "Full Face Wax", price: "₹300" },
            ]} />
          </div>
          <PriceTable title="RICA" items={[
            { service: "Full Arms", price: "₹400" },
            { service: "Full Legs", price: "₹600" },
            { service: "Half Legs", price: "₹450" },
            { service: "Underarms", price: "₹120" },
            { service: "Full Body", price: "₹2000" },
            { service: "Stomach Wax", price: "₹500" },
            { service: "Back Wax", price: "₹600" },
          ]} />

          {/* Cleanups */}
          <div className="grid gap-6 md:grid-cols-2">
            <PriceTable title="Cleanups — Male" items={[
              { service: "Wine Detan + Scrub", price: "₹450" },
              { service: "Wine Cleanup + Detan", price: "₹950" },
              { service: "O3 Detan + Scrub", price: "₹900" },
              { service: "O3 Cleanup + Detan", price: "₹1500" },
            ]} />
            <PriceTable title="Cleanups — Female" items={[
              { service: "Basic Cleanup", price: "₹300" },
              { service: "Wine Cleanup", price: "₹600" },
              { service: "Vitamin C Cleanup", price: "₹700" },
              { service: "O3 Cleanup", price: "₹1000" },
            ]} />
          </div>

          {/* Facials */}
          <div className="grid gap-6 md:grid-cols-2">
            <PriceTable title="Facials — Male" items={[
              { service: "Wine Facial", price: "₹1300" },
              { service: "O3 Facial Bridal", price: "₹3000" },
            ]} />
            <PriceTable title="Facials — Female" items={[
              { service: "Miracle Cool", price: "₹900" },
              { service: "Wine Facial", price: "₹1100" },
              { service: "Pro Acne", price: "₹1200" },
              { service: "Sensi Glow", price: "₹1400" },
              { service: "Ultra Bright", price: "₹1600" },
              { service: "O3 Facial", price: "₹1800" },
              { service: "Herbal Diamond", price: "₹2000" },
              { service: "O3 Bridal", price: "₹3000" },
              { service: "Kanpeki Korean cleanup", price: "₹1500" },
              { service: "Kanpeki Korean facial(7 step)", price: "₹2300" },
              { service: "Kanpeki Bridal Korean Facial(11 step)", price: "₹3000" },
            ]} />
          </div>

          <PriceTable title="Detan & Polishing" items={[
            { service: "Face Detan", price: "₹350" },
            { service: "Body Polishing", price: "₹3000" },
            { service: "Hand Polishing", price: "₹600" },
            { service: "Leg Polishing", price: "₹700" },
            { service: "Back Polishing", price: "₹700" },
          ]} />
        </div>
      </Section>

      {/* Gallery */}
      <Section id="gallery" bg="alt">
        <h2 className="heading text-3xl text-[#ffffff] mb-6">Gallery</h2>
        <GalleryGrid />
      </Section>

      {/* Contact */}
      <Section id="contact">
        <h2 className="heading text-3xl text-[#ffffff] mb-6">Contact</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <ContactCard icon={<FiPhone aria-hidden />} title="Phone" detail="7517239872" href="tel:7517239872" cta="Call Now" />
          <ContactCard icon={<FiMessageCircle aria-hidden />} title="WhatsApp" detail="Open chat" href="https://wa.me/7517239872" cta="Open WhatsApp" />
          <ContactCard icon={<FiInstagram aria-hidden />} title="Instagram" detail="@beauty_and_bangs" href="https://instagram.com/beauty_and_bangs" cta="Open Instagram" />
        </div>
        {/* Map embed removed per request */}
      </Section>
    </div>
  );
}
