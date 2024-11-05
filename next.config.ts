import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [{ hostname: "assets.basehub.com" }],
  },
};

export default nextConfig;
