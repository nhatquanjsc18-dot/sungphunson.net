import Reveal from "@/components/Reveal";
import QuoteForm from "@/components/QuoteForm";

export const metadata = {
  title: "Liên hệ",
  description: "Liên hệ Súng Phun Sơn .NET để được tư vấn và báo giá thiết bị phun sơn chính hãng.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <Reveal>
        <p className="text-yellow-deep font-semibold text-sm uppercase tracking-widest">Liên hệ</p>
        <h1 className="font-display text-3xl sm:text-4xl mt-2">Cần tư vấn thiết bị phù hợp?</h1>
        <p className="text-ink/70 mt-4 text-lg">
          Gọi hotline hoặc để lại thông tin — đội ngũ kỹ thuật tư vấn miễn phí, báo giá nhanh trong ngày.
        </p>
      </Reveal>

      <div className="mt-10 grid lg:grid-cols-2 gap-10">
        <Reveal className="space-y-5">
          <ContactRow icon="📞" label="Hotline" value="0907 811 767" href="tel:0907811767" />
          <ContactRow icon="✉️" label="Email" value="info@nhatquan.vn" href="mailto:info@nhatquan.vn" />
          <ContactRow icon="📍" label="Địa chỉ" value="52-54 Đường số 8, Cư xá Chu Văn An, P. Bình Thạnh, TP.HCM" />
          <ContactRow icon="🌐" label="Website chính" value="nhatquan.vn" href="https://nhatquan.vn" />
        </Reveal>

        <Reveal delay={0.1}>
          <QuoteForm />
        </Reveal>
      </div>
    </div>
  );
}

function ContactRow({ icon, label, value, href }) {
  const content = (
    <div className="flex gap-4 items-start bg-white border border-black/10 rounded-xl p-5">
      <span className="text-2xl">{icon}</span>
      <div>
        <p className="text-xs text-ink/50 uppercase tracking-wide">{label}</p>
        <p className="font-semibold text-ink mt-0.5">{value}</p>
      </div>
    </div>
  );
  return href ? <a href={href} className="block hover:opacity-80">{content}</a> : content;
}
