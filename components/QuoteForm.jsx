"use client";

import { useState } from "react";
import site from "@/data/site.json";

export default function QuoteForm({ productName }) {
  const [status, setStatus] = useState("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    const form = e.target;
    const data = new FormData(form);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      const json = await res.json();
      if (!res.ok || !json.success) throw new Error(json.message || "failed");
      setStatus("success");
      form.reset();
    } catch (err) {
      setErrorMsg(err.message || "");
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
      <input type="hidden" name="access_key" value={site.web3formsAccessKey} />
      <input type="hidden" name="subject" value={`Yêu cầu báo giá${productName ? ": " + productName : ""} — sungphunson.net`} />
      {productName && <input type="hidden" name="Sản phẩm quan tâm" value={productName} />}
      <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />

      <div>
        <label className="text-xs text-paper/60 uppercase tracking-wide">Họ tên *</label>
        <input
          required
          name="name"
          type="text"
          className="mt-1 w-full bg-ink-soft border border-line rounded-lg px-3.5 py-2.5 text-sm outline-none focus:border-yellow"
          placeholder="Nguyễn Văn A"
        />
      </div>
      <div>
        <label className="text-xs text-paper/60 uppercase tracking-wide">Số điện thoại *</label>
        <input
          required
          name="phone"
          type="tel"
          className="mt-1 w-full bg-ink-soft border border-line rounded-lg px-3.5 py-2.5 text-sm outline-none focus:border-yellow"
          placeholder="09xxxxxxxx"
        />
      </div>
      <div>
        <label className="text-xs text-paper/60 uppercase tracking-wide">Ghi chú</label>
        <textarea
          name="message"
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
          Gửi thất bại{errorMsg ? `: ${errorMsg}` : ""}, vui lòng gọi trực tiếp{" "}
          <a href="tel:0907811767" className="underline">0907 811 767</a>.
        </p>
      )}
    </form>
  );
}
