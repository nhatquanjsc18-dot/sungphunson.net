import Reveal from "@/components/Reveal";
import { brands } from "@/data/brands";

export const metadata = {
  title: "Giới thiệu",
  description: "Nhà phân phối chính hãng thiết bị phun sơn DeVilbiss, Wagner, Binks, Anest Iwata tại Việt Nam.",
};

const REASONS = [
  "Đại lý phân phối chính hãng, có đầy đủ CO, CQ",
  "Đội ngũ kỹ thuật hỗ trợ tận nơi tại TP.HCM và toàn quốc",
  "Kho phụ kiện, linh kiện thay thế đầy đủ, giao nhanh",
  "Demo thực tế sản phẩm trước khi quyết định mua",
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <Reveal>
        <p className="text-yellow-deep font-semibold text-sm uppercase tracking-widest">Về chúng tôi</p>
        <h1 className="font-display text-3xl sm:text-4xl mt-2">
          Đối tác tin cậy của ngành phun sơn Việt Nam
        </h1>
        <p className="text-ink/70 mt-5 text-lg leading-relaxed">
          Súng Phun Sơn .NET là kênh phân phối trực tuyến của Công ty CP Công nghiệp Nhất Quán — nhà phân phối
          thiết bị phun sơn công nghiệp uy tín tại Việt Nam, phục vụ garage sơn ô tô, nhà máy sản xuất, xưởng
          nội thất/gỗ và các đại lý trên toàn quốc trong hơn 10 năm qua.
        </p>
      </Reveal>

      <Reveal stagger className="mt-10 grid sm:grid-cols-2 gap-4">
        {REASONS.map((r) => (
          <div key={r} className="flex gap-3 items-start bg-white border border-black/10 rounded-xl p-5">
            <span className="text-yellow-deep text-lg">»</span>
            <p className="text-ink/80">{r}</p>
          </div>
        ))}
      </Reveal>

      <Reveal className="mt-16">
        <h2 className="font-display text-2xl mb-6">Thương hiệu phân phối</h2>
        <div className="grid sm:grid-cols-2 gap-5">
          {brands.map((b) => (
            <div key={b.slug} className="bg-ink text-paper rounded-2xl p-6">
              <h3 className="font-display text-yellow text-xl">{b.name}</h3>
              <p className="text-xs text-paper/50 italic mt-1">{b.tagline}</p>
              <p className="text-sm text-paper/70 mt-3 leading-relaxed">{b.description}</p>
            </div>
          ))}
        </div>
      </Reveal>
    </div>
  );
}
