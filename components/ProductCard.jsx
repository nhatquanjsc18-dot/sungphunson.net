import Image from "next/image";
import Link from "next/link";

const BRAND_LABEL = {
  devilbiss: "DeVilbiss",
  wagner: "Wagner",
  binks: "Binks",
  "anest-iwata": "Anest Iwata",
};

export default function ProductCard({ product }) {
  return (
    <Link
      href={`/san-pham/${product.slug}`}
      className="group block bg-white rounded-2xl border border-black/5 overflow-hidden hover:border-yellow hover:shadow-xl hover:shadow-yellow/10 transition-all duration-300"
    >
      <div className="relative aspect-square bg-white overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 50vw, 25vw"
          className="object-contain p-6 group-hover:scale-105 transition-transform duration-500"
        />
        <span className="absolute top-3 left-3 bg-ink text-yellow text-[11px] font-semibold uppercase tracking-wide px-2.5 py-1 rounded-full">
          {BRAND_LABEL[product.brand]}
        </span>
      </div>
      <div className="p-4 sm:p-5">
        <h3 className="font-semibold text-ink leading-snug line-clamp-2 group-hover:text-yellow-deep transition-colors">
          {product.name}
        </h3>
        <p className="mt-1.5 text-sm text-ink/60 line-clamp-2">{product.shortDesc}</p>
        <div className="mt-3 flex items-center justify-between">
          <span className="text-xs font-medium text-ink/50">{product.feedType}</span>
          <span className="text-sm font-semibold text-yellow-deep group-hover:translate-x-0.5 transition-transform">
            Xem chi tiết →
          </span>
        </div>
      </div>
    </Link>
  );
}
