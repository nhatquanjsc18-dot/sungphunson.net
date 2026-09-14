"use client";

import { useState } from "react";

export default function QuoteForm({ productName }) {
  const [status, setStatus] = useState("idle");

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    const form = e.target;
    const data = new FormData(form);

    try {
      const res = await fetch("https://formsubmit.co/ajax/info@nhatquan.vn", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      if (!res.ok) throw new Error("failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="bg-ink text-paper rounded-2xl p-6 text-center">
        <p className="text-yellow font-semibold text-lg">Đã gửi yêu cầu thành công!</p>
        <p className="text-paper/70 text-sm mt-2">
          Đội ngũ kỹ thuật sẽ liên hệ báo giá trong thời gian sớm nhất. Bạn cũng có thể gọi ngay{" "}
          <a href="tel:0907811767" className="text-yellow underline">0907 811 767</a>.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-ink text-paper rounded-2xl p-6 space-y-4">
      <h3 className="font-display text-lg text-yellow">Yêu cầu báo giá</h3>
      {productName && <input type="hidden" name="Sản phẩm" value={productName} />}
      <input type="hidden" name="_subject" value={`Yêu cầu báo giá${productName ? ": " + productName : ""}`} />
      <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" />

      <div>
        <label className="text-xs text-paper/60 uppercase tracking-wide">Họ tên *</label>
        <input
          required
          name="Họ tên"
          type="text"
          className="mt-1 w-full bg-ink-soft border border-line rounded-lg px-3.5 py-2.5 text-sm outline-none focus:border-yellow"
          placeholder="Nguyễn Văn A"
        />
      </div>
      <div>
        <label className="text-xs text-paper/60 uppercase tracking-wide">Số điện thoại *</label>
        <input
          required
          name="Số điện thoại"
          type="tel"
          className="mt-1 w-full bg-ink-soft border border-line rounded-lg px-3.5 py-2.5 text-sm outline-none focus:border-yellow"
          placeholder="09xxxxxxxx"
        />
      </div>
      <div>
        <label className="text-xs text-paper/60 uppercase tracking-wide">Ghi chú</label>
        <textarea
          name="Ghi chú"
          rows={3}
          className="mt-1 w-full bg-ink-soft border border-line rounded-lg px-3.5 py-2.5 text-sm outline-none focus:border-yellow resize-none"
          placeholder="Số lượng, nhu cầu sử dụng..."
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full bg-yellow text-ink font-semibold py-3 rounded-full hover:bg-yellow-deep transition-colors disabled:opacity-60"
      >
        {status === "sending" ? "Đang gửi..." : "Gửi yêu cầu báo giá"}
      </button>
      {status === "error" && (
        <p className="text-sm text-red-400">
          Gửi thất bại, vui lòng gọi trực tiếp <a href="tel:0907811767" className="underline">0907 811 767</a>.
        </p>
      )}
    </form>
  );
}
