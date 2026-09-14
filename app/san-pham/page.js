import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import Reveal from "@/components/Reveal";
import { products } from "@/data/products";
import { brands, categories } from "@/data/brands";

export const metadata = {
  title: "Sản phẩm súng phun sơn",
  description: "Toàn bộ súng phun sơn chính hãng DeVilbiss, Wagner, Binks, Anest Iwata — lọc theo thương hiệu và danh mục.",
};

export default async function ProductListPage({ searchParams }) {
  const params = await searchParams;
  const brand = params?.brand;
  const category = params?.category;

  const filtered = products.filter((p) => {
    if (brand && p.brand !== brand) return false;
    if (category && p.category !== category) return false;
    return true;
  });

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
      <Reveal>
        <p className="text-yellow-deep font-semibold text-sm uppercase tracking-widest">Danh mục sản phẩm</p>
        <h1 className="font-display text-3xl sm:text-4xl mt-2">Súng phun sơn chính hãng</h1>
        <p className="text-ink/60 mt-3 max-w-2xl">
          {filtered.length} sản phẩm {brand ? `từ ${brands.find((b) => b.slug === brand)?.name ?? brand}` : ""}
          {category ? ` · ${categories.find((c) => c.slug === category)?.name ?? category}` : ""}
        </p>
      </Reveal>

      <div className="mt-8 flex flex-wrap gap-2">
        <FilterChip href="/san-pham" active={!brand && !category} label="Tất cả" />
        {brands.map((b) => (
          <FilterChip
            key={b.slug}
            href={`/san-pham?brand=${b.slug}`}
            active={brand === b.slug}
            label={b.name}
          />
        ))}
      </div>
      <div className="mt-3 flex flex-wrap gap-2">
        {categories.map((c) => (
          <FilterChip
            key={c.slug}
            href={`/san-pham?category=${c.slug}`}
            active={category === c.slug}
            label={c.name}
            subtle
          />
        ))}
      </div>

      {filtered.length > 0 ? (
        <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {filtered.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      ) : (
        <p className="mt-16 text-center text-ink/50">Không tìm thấy sản phẩm phù hợp bộ lọc.</p>
      )}
    </div>
  );
}

function FilterChip({ href, active, label, subtle }) {
  return (
    <Link
      href={href}
      className={`text-sm font-medium px-4 py-2 rounded-full border transition-colors ${
        active
          ? "bg-ink text-yellow border-ink"
          : subtle
          ? "border-black/10 text-ink/60 hover:border-ink/30"
          : "border-black/10 text-ink hover:border-ink/40"
      }`}
    >
      {label}
    </Link>
  );
}
