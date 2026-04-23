type PriceItem = {
  service: string;
  notes?: string;
  price: string;
};

export default function PriceTable({ title, items }: { title?: string; items: PriceItem[] }) {
  return (
    <div className="card overflow-hidden">
      {title ? (
        <div className="px-4 sm:px-6 py-3 border-b border-[#d4af37]/20 bg-[#0d0d0d]">
          <h4 className="heading text-[#d4af37] text-lg">{title}</h4>
        </div>
      ) : null}
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead className="bg-[#121212] text-[#dcdcdc]/70">
            <tr>
              <th className="px-4 sm:px-6 py-3 text-left font-medium">Service</th>
              <th className="px-4 sm:px-6 py-3 text-left font-medium">Variant/Notes</th>
              <th className="px-4 sm:px-6 py-3 text-right font-medium">Price</th>
            </tr>
          </thead>
          <tbody>
            {items.map((it, i) => (
              <tr key={i} className="border-t border-[#d4af37]/10">
                <td className="px-4 sm:px-6 py-3 text-[#ffffff]">{it.service}</td>
                <td className="px-4 sm:px-6 py-3 text-[#dcdcdc]/80">{it.notes ?? "—"}</td>
                <td className="px-4 sm:px-6 py-3 text-right text-[#d4af37] font-medium">{it.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

