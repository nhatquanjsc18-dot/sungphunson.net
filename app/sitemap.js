import { products } from "@/data/products";
import { articles } from "@/data/articles";

const BASE_URL = "https://sungphunson.net";

export default function sitemap() {
  const staticRoutes = ["", "/san-pham", "/gioi-thieu", "/lien-he", "/bai-viet"].map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: path === "" ? 1 : 0.8,
  }));

  const productRoutes = products.map((p) => ({
    url: `${BASE_URL}/san-pham/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const articleRoutes = articles.map((a) => ({
    url: `${BASE_URL}/bai-viet/${a.slug}`,
    lastModified: new Date(a.date),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...productRoutes, ...articleRoutes];
}
