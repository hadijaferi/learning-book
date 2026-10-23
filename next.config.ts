import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/frontend-learning-book",
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
