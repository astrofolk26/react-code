import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  assetPrefix: ".",
  images: {
    unoptimized: true,   // 👈 required for static export
    remotePatterns: [
      { protocol: "https", hostname: "placehold.jp", pathname: "**" },
      { protocol: "https", hostname: "picsum.photos", pathname: "**" },
    ],
  },
};

export default nextConfig;