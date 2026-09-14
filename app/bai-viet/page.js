import Link from "next/link";
import Reveal from "@/components/Reveal";
import { getAllArticles } from "@/data/articles";

export const metadata = {
  title: "Bài viết & Kiến thức súng phun sơn",
  description:
    "Kiến thức, hướng dẫn chọn mua và so sánh súng phun sơn chính hãng DeVilbiss, Wagner, Binks — cập nhật thường xuyên từ đội ngũ kỹ thuật Súng Phun Sơn .NET.",
};

function formatDate(d) {
  return new Date(d).toLocaleDateString("vi-VN", { day: "2-digit", month: "2-digit", year: "numeric" });
}

export default function ArticleListPage() {
  const articles = getAllArticles();

  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
      <Reveal>
        <p className="text-yellow-deep font-semibold text-sm uppercase tracking-widest">Kiến thức</p>
        <h1 className="font-display text-3xl sm:text-4xl mt-2">Bài viết về súng phun sơn</h1>
        <p className="text-ink/60 mt-3 max-w-2xl">
          Hướng dẫn chọn mua, so sánh thương hiệu và kiến thức kỹ thuật về súng phun sơn — cập nhật từ đội
          ngũ kỹ thuật Súng Phun Sơn .NET.
        </p>
      </Reveal>

      <Reveal stagger className="mt-10 grid sm:grid-cols-2 gap-5">
        {articles.map((a) => (
          <Link
            key={a.slug}
            href={`/bai-viet/${a.slug}`}
            className="group block bg-white border border-black/10 rounded-2xl p-6 hover:border-yellow hover:shadow-lg hover:shadow-yellow/10 transition-all"
          >
            <p className="text-xs text-ink/40">{formatDate(a.date)}</p>
            <h2 className="font-display text-xl mt-2 leading-snug group-hover:text-yellow-deep transition-colors">
              {a.title}
            </h2>
            <p className="text-sm text-ink/60 mt-3 line-clamp-3">{a.excerpt}</p>
            <span className="inline-block mt-4 text-sm font-semibold text-yellow-deep">Đọc tiếp →</span>
          </Link>
        ))}
      </Reveal>
    </div>
  );
}
