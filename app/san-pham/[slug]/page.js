import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Reveal from "@/components/Reveal";
import ProductCard from "@/components/ProductCard";
import QuoteForm from "@/components/QuoteForm";
import { getProductBySlug, getProductsByBrand, products } from "@/data/products";
import { brands } from "@/data/brands";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};
  return {
    title: product.name,
    description: product.shortDesc,
  };
}

export default async function ProductDetailPage({ params }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const brand = brands.find((b) => b.slug === product.brand);
  const related = getProductsByBrand(product.brand).filter((p) => p.slug !== product.slug).slice(0, 4);

  const productLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `https://sungphunson.net/san-pham/${product.slug}#product`,
    name: product.name,
    url: `https://sungphunson.net/san-pham/${product.slug}`,
    description: product.shortDesc,
    image: [`https://sungphunson.net${product.image}`],
    ...(brand ? { brand: { "@type": "Brand", name: brand.name } } : {}),
  };

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productLd).replace(/</g, "\\u003c"),
        }}
      />
      <p className="text-sm text-ink/50">
        <Link href="/san-pham" className="hover:text-yellow-deep">Sản phẩm</Link> /{" "}
        <Link href={`/san-pham?brand=${product.brand}`} className="hover:text-yellow-deep">{brand?.name}</Link> /{" "}
        <span className="text-ink">{product.name}</span>
      </p>

      <div className="mt-6 grid lg:grid-cols-2 gap-10 lg:gap-16">
        <Reveal>
          <div className="relative aspect-square bg-white rounded-2xl overflow-hidden">
            <Image
              src={product.image}
              alt={product.name}
              fill
              priority
              className="object-contain p-10"
            />
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <span className="inline-block bg-ink text-yellow text-xs font-semibold uppercase tracking-wide px-3 py-1 rounded-full">
            {brand?.name}
          </span>
          <h1 className="font-display text-3xl sm:text-4xl mt-4">{product.name}</h1>
          <p className="text-ink/60 mt-3 text-lg">{product.shortDesc}</p>

          <dl className="mt-6 grid grid-cols-2 gap-4 max-w-md">
            <Spec label="Kiểu nạp sơn" value={product.feedType} />
            {product.weight && <Spec label="Trọng lượng" value={product.weight} />}
            {product.pressure && <Spec label="Áp suất phun" value={product.pressure} />}
            {product.price && (
              <Spec
                label="Giá tham khảo"
                value={new Intl.NumberFormat("vi-VN").format(product.price) + "₫"}
              />
            )}
          </dl>

          {product.highlights && (
            <ul className="mt-6 space-y-2">
              {product.highlights.map((h) => (
                <li key={h} className="flex gap-2.5 text-sm text-ink/75">
                  <span className="text-yellow-deep">✓</span> {h}
                </li>
              ))}
            </ul>
          )}

          <p className="mt-6 text-ink/70 leading-relaxed">{product.description}</p>
          <p className="mt-3 text-xs text-ink/40">
            * Thông số kỹ thuật chi tiết vui lòng liên hệ để nhận catalogue đầy đủ từ nhà phân phối.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="tel:0907811767"
              className="inline-flex items-center gap-2 bg-ink text-yellow font-semibold px-6 py-3.5 rounded-full hover:bg-ink-soft transition-colors"
            >
              📞 Gọi tư vấn ngay
            </a>
          </div>
        </Reveal>
      </div>

      <div className="mt-14 grid lg:grid-cols-[1fr_380px] gap-10">
        <Reveal className="prose-content">
          <h2 className="font-display text-2xl mb-4">Mô tả chi tiết</h2>
          <p className="text-ink/70 leading-relaxed">{product.description}</p>

          {product.specTable && (
            <div className="mt-8 overflow-x-auto">
              <h3 className="font-display text-lg mb-3">Bảng thông số kỹ thuật</h3>
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-ink text-paper">
                    {product.specTable.headers.map((h) => (
                      <th key={h} className="text-left font-medium px-3 py-2.5 whitespace-nowrap">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {product.specTable.rows.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-[#f4f1e8]"}>
                      {row.map((cell, j) => (
                        <td key={j} className="px-3 py-2.5 border-b border-black/5 whitespace-nowrap">
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </Reveal>
        <Reveal delay={0.1}>
          <QuoteForm productName={product.name} />
        </Reveal>
      </div>

      {related.length > 0 && (
        <section className="mt-20">
          <h2 className="font-display text-2xl mb-6">Sản phẩm cùng thương hiệu {brand?.name}</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {related.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

function Spec({ label, value }) {
  return (
    <div className="border border-black/10 rounded-xl px-4 py-3">
      <dt className="text-xs text-ink/50 uppercase tracking-wide">{label}</dt>
      <dd className="font-semibold text-ink mt-0.5">{value}</dd>
    </div>
  );
}
