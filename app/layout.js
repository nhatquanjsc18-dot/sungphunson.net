import { Inter, Oswald } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const GA_MEASUREMENT_ID = "G-EWBN07Y8HG";

const bodyFont = Inter({
  variable: "--font-body",
  subsets: ["latin", "vietnamese"],
});

const displayFont = Oswald({
  variable: "--font-display",
  weight: ["500", "600", "700"],
  subsets: ["latin", "vietnamese"],
});

export const metadata = {
  metadataBase: new URL("https://sungphunson.net"),
  title: {
    default: "Súng Phun Sơn .NET — Súng phun sơn chính hãng DeVilbiss, Wagner, Binks, Anest Iwata",
    template: "%s | Súng Phun Sơn .NET",
  },
  description:
    "Nhà phân phối súng phun sơn chính hãng DeVilbiss, Wagner, Binks, Anest Iwata tại Việt Nam. Tư vấn kỹ thuật miễn phí, báo giá nhanh trong ngày.",
  keywords: ["súng phun sơn", "súng phun sơn chính hãng", "devilbiss", "wagner", "binks", "anest iwata"],
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="vi"
      className={`${bodyFont.variable} ${displayFont.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-paper text-ink">
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
