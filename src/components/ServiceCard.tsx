import PriceTable from "./PriceTable";

type PriceItem = { service: string; notes?: string; price: string };

export default function ServiceCard({ heading, items }: { heading: string; items: PriceItem[] }) {
  return (
    <div className="card p-4 sm:p-6">
      <h3 className="heading text-xl text-[#ffffff] mb-4 border-b border-[#d4af37]/30 pb-2">{heading}</h3>
      <PriceTable items={items} />
    </div>
  );
}

