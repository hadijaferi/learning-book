import type { NextConfig } from "next";

// GitHub Pages serves this repository under /learning-book.
// Vercel hosts previews at the domain root instead.
const isVercel = process.env.VERCEL === "1";

const nextConfig: NextConfig = {
  output: "export",
  ...(!isVercel ? { basePath: "/learning-book" } : {}),
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
