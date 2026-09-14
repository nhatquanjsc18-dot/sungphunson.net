import Link from "next/link";
import { notFound } from "next/navigation";
import Reveal from "@/components/Reveal";
import ProductCard from "@/components/ProductCard";
import { articles, getArticleBySlug } from "@/data/articles";
import { getProductBySlug } from "@/data/products";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.excerpt,
    keywords: article.keywords,
  };
}

function formatDate(d) {
  return new Date(d).toLocaleDateString("vi-VN", { day: "2-digit", month: "2-digit", year: "numeric" });
}

function Block({ block }) {
  if (block.type === "h2") {
    return <h2 className="font-display text-2xl mt-10 mb-4">{block.text}</h2>;
  }
  if (block.type === "ul") {
    return (
      <ul className="space-y-2 my-4">
        {block.items.map((item) => (
          <li key={item} className="flex gap-2.5 text-ink/75 leading-relaxed">
            <span className="text-yellow-deep shrink-0">✓</span> {item}
          </li>
        ))}
      </ul>
    );
  }
  return <p className="text-ink/75 leading-relaxed my-4">{block.text}</p>;
}

export default async function ArticleDetailPage({ params }) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const related = (article.relatedProducts || [])
    .map((s) => getProductBySlug(s))
    .filter(Boolean);

  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
      <p className="text-sm text-ink/50">
        <Link href="/bai-viet" className="hover:text-yellow-deep">Bài viết</Link> / <span className="text-ink">{article.title}</span>
      </p>

      <Reveal>
        <p className="text-xs text-ink/40 mt-6">{formatDate(article.date)}</p>
        <h1 className="font-display text-3xl sm:text-4xl mt-2 leading-tight">{article.title}</h1>
        <p className="text-ink/60 mt-4 text-lg">{article.excerpt}</p>
      </Reveal>

      <Reveal delay={0.1} className="mt-8">
        {article.blocks.map((block, i) => (
          <Block key={i} block={block} />
        ))}
      </Reveal>

      {related.length > 0 && (
        <section className="mt-16">
          <h2 className="font-display text-xl mb-5">Sản phẩm liên quan</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {related.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </section>
      )}

      <div className="mt-14 bg-yellow rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-5 text-center sm:text-left">
        <div>
          <h3 className="font-display text-xl text-ink">Cần tư vấn thêm?</h3>
          <p className="text-ink/70 text-sm mt-1">Gọi ngay để được kỹ thuật viên tư vấn miễn phí và báo giá.</p>
        </div>
        <a href="tel:0907811767" className="shrink-0 inline-flex items-center gap-2 bg-ink text-yellow font-semibold px-5 py-3 rounded-full">
          📞 0907 811 767
        </a>
      </div>
    </div>
  );
}
