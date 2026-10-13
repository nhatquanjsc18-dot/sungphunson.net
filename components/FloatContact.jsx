const PHONE = "0907811767";
const PHONE_LABEL = "0907 811 767";

function ZaloIcon() {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" aria-hidden="true">
      <path
        d="M12 3C6.75 3 2.5 6.64 2.5 11.13c0 2.55 1.38 4.82 3.54 6.3-.15.9-.55 2.27-1.4 3.2 0 0 2.4-.3 4.2-1.62.9.25 1.86.39 2.86.39 5.25 0 9.5-3.64 9.5-8.27C21.5 6.64 17.25 3 12 3Z"
        fill="currentColor"
      />
      <text x="12" y="14" textAnchor="middle" fontSize="7.5" fontWeight="700" fill="var(--zalo-glyph, #141410)">
        Z
      </text>
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true">
      <path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11.4 11.4 0 0 0 3.6.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.6a1 1 0 0 1-.25 1l-2.22 2.2Z" />
    </svg>
  );
}

export default function FloatContact() {
  return (
    <div className="fixed right-4 bottom-4 sm:right-6 sm:bottom-6 z-40 flex flex-col items-end gap-3">
      <a
        href={`https://zalo.me/${PHONE}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat Zalo"
        title="Chat Zalo"
        className="group flex items-center gap-2 rounded-full bg-ink text-yellow border border-yellow/60 shadow-lg shadow-black/30 pl-3 pr-3 sm:pr-4 py-3 hover:bg-yellow hover:text-ink hover:border-yellow transition-colors"
        style={{ "--zalo-glyph": "var(--color-ink)" }}
      >
        <ZaloIcon />
        <span className="hidden sm:inline text-sm font-semibold">Chat Zalo</span>
      </a>

      <a
        href={`tel:${PHONE}`}
        aria-label={`Gọi hotline ${PHONE_LABEL}`}
        title="Gọi hotline"
        className="relative flex items-center gap-2 rounded-full bg-yellow text-ink shadow-lg shadow-black/30 pl-3 pr-3 sm:pr-4 py-3 hover:bg-yellow-deep transition-colors"
      >
        <span className="absolute inset-0 rounded-full bg-yellow opacity-60 animate-ping motion-reduce:hidden" aria-hidden="true" />
        <span className="relative flex items-center gap-2">
          <PhoneIcon />
          <span className="hidden sm:inline text-sm font-semibold">{PHONE_LABEL}</span>
        </span>
      </a>
    </div>
  );
}
