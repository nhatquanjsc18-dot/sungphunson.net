"use client";

import Link from "next/link";
import { useState } from "react";

const NAV = [
  { href: "/san-pham", label: "Sản phẩm" },
  { href: "/san-pham?brand=devilbiss", label: "DeVilbiss" },
  { href: "/san-pham?brand=wagner", label: "Wagner" },
  { href: "/bai-viet", label: "Bài viết" },
  { href: "/gioi-thieu", label: "Giới thiệu" },
  { href: "/lien-he", label: "Liên hệ" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-ink text-paper border-b border-line">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 sm:h-20">
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <span className="font-display text-xl sm:text-2xl">
            SÚNG<span className="text-yellow">PHUN</span>SƠN
          </span>
          <span className="hidden sm:inline text-[10px] tracking-[0.2em] text-paper/60 border-l border-line pl-2 ml-1">
            .NET
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-paper/80 hover:text-yellow transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="tel:0907811767"
            className="hidden sm:inline-flex items-center gap-2 bg-yellow text-ink font-semibold text-sm px-4 py-2.5 rounded-full hover:bg-yellow-deep transition-colors"
          >
            📞 0907 811 767
          </a>
          <button
            aria-label="Mở menu"
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden w-11 h-11 flex items-center justify-center rounded-full border border-line"
          >
            <span className="text-xl">{open ? "✕" : "☰"}</span>
          </button>
        </div>
      </div>

      {open && (
        <nav className="lg:hidden border-t border-line bg-ink px-4 py-4 flex flex-col gap-1">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="text-base py-3 px-2 rounded-lg text-paper/85 hover:bg-ink-soft hover:text-yellow transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <a
            href="tel:0907811767"
            className="mt-2 inline-flex justify-center items-center gap-2 bg-yellow text-ink font-semibold text-sm px-4 py-3 rounded-full"
          >
            📞 Gọi ngay: 0907 811 767
          </a>
        </nav>
      )}
    </header>
  );
}
