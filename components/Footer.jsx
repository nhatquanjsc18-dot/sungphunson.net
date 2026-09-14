import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-ink text-paper/80 border-t border-line">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <span className="font-display text-xl text-paper">
            SÚNG<span className="text-yellow">PHUN</span>SƠN
          </span>
          <p className="mt-4 text-sm leading-relaxed max-w-xs">
            Nhà phân phối chính hãng thiết bị phun sơn DeVilbiss, Wagner, Binks, Anest Iwata tại Việt Nam —
            đồng hành cùng garage ô tô, nhà máy sản xuất và xưởng nội thất.
          </p>
        </div>

        <div>
          <h3 className="text-paper font-semibold text-sm uppercase tracking-wide mb-4">Sản phẩm</h3>
          <ul className="space-y-2.5 text-sm">
            <li><Link href="/san-pham?brand=devilbiss" className="hover:text-yellow">Súng phun sơn DeVilbiss</Link></li>
            <li><Link href="/san-pham?brand=wagner" className="hover:text-yellow">Súng phun sơn Wagner</Link></li>
            <li><Link href="/san-pham?brand=binks" className="hover:text-yellow">Súng phun sơn Binks</Link></li>
            <li><Link href="/san-pham?brand=anest-iwata" className="hover:text-yellow">Anest Iwata</Link></li>
            <li><Link href="/san-pham?category=tinh-dien" className="hover:text-yellow">Sơn tĩnh điện</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-paper font-semibold text-sm uppercase tracking-wide mb-4">Công ty</h3>
          <ul className="space-y-2.5 text-sm">
            <li><Link href="/gioi-thieu" className="hover:text-yellow">Giới thiệu</Link></li>
            <li><Link href="/bai-viet" className="hover:text-yellow">Bài viết</Link></li>
            <li><Link href="/lien-he" className="hover:text-yellow">Liên hệ</Link></li>
            <li><a href="https://nhatquan.vn" target="_blank" rel="noopener noreferrer" className="hover:text-yellow">Website chính nhatquan.vn</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-paper font-semibold text-sm uppercase tracking-wide mb-4">Liên hệ</h3>
          <ul className="space-y-2.5 text-sm">
            <li><a href="tel:0907811767" className="hover:text-yellow">📞 0907 811 767</a></li>
            <li><a href="mailto:info@nhatquan.vn" className="hover:text-yellow">✉️ info@nhatquan.vn</a></li>
            <li>📍 52-54 Đường số 8, Cư xá Chu Văn An, P. Bình Thạnh, TP.HCM</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-line py-6 text-center text-xs text-paper/50">
        © {new Date().getFullYear()} Công ty CP Công nghiệp Nhất Quán. All rights reserved.
      </div>
    </footer>
  );
}
