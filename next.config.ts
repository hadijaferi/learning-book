import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/learning-book",
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
