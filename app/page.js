import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import ProductCard from "@/components/ProductCard";
import { brands, categories } from "@/data/brands";
import { getFeaturedProducts } from "@/data/products";

const TRUST = [
  { icon: "🛡️", title: "Hàng chính hãng", desc: "Phân phối trực tiếp từ DeVilbiss, Wagner, Binks, Anest Iwata." },
  { icon: "🛠️", title: "Hỗ trợ kỹ thuật", desc: "Tư vấn chọn thiết bị phù hợp, hỗ trợ bảo trì và sửa chữa tận nơi." },
  { icon: "🚚", title: "Giao hàng toàn quốc", desc: "Kho hàng và phụ kiện đầy đủ, giao nhanh đến TP.HCM và các tỉnh." },
];

const STATS = [
  { value: "10+", label: "Năm kinh nghiệm" },
  { value: "50+", label: "Dòng sản phẩm" },
  { value: "100%", label: "Hàng chính hãng" },
];

export default function HomePage() {
  const featured = getFeaturedProducts(8);

  return (
    <>
      {/* HERO */}
      <section className="relative bg-ink text-paper overflow-hidden diagonal-clip pb-24 sm:pb-32">
        <div className="absolute inset-0 opacity-[0.07] bg-[radial-gradient(circle_at_20%_20%,#ffc60b,transparent_45%),radial-gradient(circle_at_80%_60%,#ffc60b,transparent_40%)]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-14 sm:pt-20 grid lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <p className="inline-block text-yellow font-semibold text-sm tracking-widest uppercase mb-4">
              DeVilbiss · Wagner · Binks · Anest Iwata
            </p>
            <h1 className="font-display font-semibold text-5xl sm:text-7xl leading-[1.02] uppercase">
              Súng Phun Sơn<br />
              <span className="text-yellow">Chính Hãng</span>
            </h1>
            <p className="mt-6 text-paper/70 text-base sm:text-lg max-w-lg">
              Nhà phân phối chính thức DeVilbiss, Binks; nhà phân phối chính hãng Anest Iwata; phân phối thương mại Wagner tại Việt Nam — hơn 10 năm đồng hành cùng garage ô tô,
              nhà máy sản xuất và xưởng nội thất trên toàn quốc.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/san-pham"
                className="inline-flex items-center gap-2 bg-yellow text-ink font-semibold px-6 py-3.5 rounded-full hover:bg-yellow-deep transition-colors"
              >
                Xem sản phẩm
              </Link>
              <Link
                href="/lien-he"
                className="inline-flex items-center gap-2 border border-paper/30 text-paper font-semibold px-6 py-3.5 rounded-full hover:border-yellow hover:text-yellow transition-colors"
              >
                Nhận báo giá
              </Link>
            </div>

            <dl className="mt-12 grid grid-cols-3 gap-6 max-w-md">
              {STATS.map((s) => (
                <div key={s.label}>
                  <dt className="font-display text-2xl sm:text-3xl text-yellow">{s.value}</dt>
                  <dd className="text-xs text-paper/60 mt-1 uppercase tracking-wide">{s.label}</dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={0.15} className="relative">
            <div className="relative aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-yellow/90 rounded-full blur-3xl opacity-20" />
              <Image
                src="/products/devilbiss/neptune-gravity.png"
                alt="Súng phun sơn DeVilbiss Neptune"
                fill
                priority
                className="object-contain drop-shadow-2xl"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* TRUST BADGES */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 -mt-14 sm:-mt-16 relative z-10">
        <Reveal stagger className="grid sm:grid-cols-3 gap-4">
          {TRUST.map((t) => (
            <div key={t.title} className="bg-white rounded-2xl shadow-lg shadow-black/5 p-6 border border-black/5">
              <div className="text-3xl mb-3">{t.icon}</div>
              <h3 className="font-semibold text-ink">{t.title}</h3>
              <p className="text-sm text-ink/60 mt-1.5">{t.desc}</p>
            </div>
          ))}
        </Reveal>
      </section>

      {/* CATEGORIES */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        <Reveal>
          <p className="text-yellow-deep font-semibold text-sm uppercase tracking-widest">Danh mục</p>
          <h2 className="font-display text-3xl sm:text-4xl mt-2">Chọn theo nhu cầu sử dụng</h2>
        </Reveal>
        <Reveal stagger className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {categories.map((c) => (
            <Link
              key={c.slug}
              href={`/san-pham?category=${c.slug}`}
              className="group relative bg-ink text-paper rounded-2xl p-6 h-44 flex flex-col justify-end overflow-hidden hover:bg-ink-soft transition-colors"
            >
              <span className="absolute top-5 right-5 w-8 h-8 rounded-full border border-paper/20 flex items-center justify-center text-yellow group-hover:bg-yellow group-hover:text-ink group-hover:border-yellow transition-colors">
                →
              </span>
              <h3 className="font-display text-lg leading-tight">{c.name}</h3>
              <p className="text-xs text-paper/60 mt-2 leading-relaxed">{c.description}</p>
            </Link>
          ))}
        </Reveal>
      </section>

      {/* BRAND STRIP */}
      <section className="bg-ink-soft py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal stagger className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {brands.map((b) => (
              <Link
                key={b.slug}
                href={`/san-pham?brand=${b.slug}`}
                className="bg-ink rounded-xl p-5 border border-line hover:border-yellow transition-colors"
              >
                <h3 className="font-display text-yellow text-lg">{b.name}</h3>
                <p className="text-xs text-paper/50 mt-1 italic">{b.tagline}</p>
                <p className="text-sm text-paper/70 mt-3 leading-relaxed">{b.description}</p>
              </Link>
            ))}
          </Reveal>
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        <Reveal className="flex items-end justify-between flex-wrap gap-4">
          <div>
            <p className="text-yellow-deep font-semibold text-sm uppercase tracking-widest">Sản phẩm nổi bật</p>
            <h2 className="font-display text-3xl sm:text-4xl mt-2">Súng phun sơn được tin dùng</h2>
          </div>
          <Link href="/san-pham" className="text-sm font-semibold text-ink hover:text-yellow-deep">
            Xem tất cả sản phẩm →
          </Link>
        </Reveal>

        <Reveal stagger className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {featured.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </Reveal>
      </section>

      {/* CTA */}
      <section className="bg-yellow">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <h2 className="font-display text-2xl sm:text-3xl text-ink">Cần tư vấn thiết bị phù hợp?</h2>
            <p className="text-ink/70 mt-2">Gọi hotline hoặc để lại thông tin — đội ngũ kỹ thuật tư vấn miễn phí, báo giá nhanh trong ngày.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <a href="tel:0907811767" className="inline-flex items-center justify-center gap-2 bg-ink text-yellow font-semibold px-6 py-3.5 rounded-full hover:bg-ink-soft transition-colors">
              📞 0907 811 767
            </a>
            <Link href="/lien-he" className="inline-flex items-center justify-center gap-2 border-2 border-ink text-ink font-semibold px-6 py-3.5 rounded-full hover:bg-ink hover:text-yellow transition-colors">
              Gửi yêu cầu tư vấn
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
