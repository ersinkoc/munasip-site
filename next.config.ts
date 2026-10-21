import type { NextConfig } from "next";

const config: NextConfig = {
  // GitHub Pages uses munasip.oxog.dev at the domain root, not /munasip-site.
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  poweredByHeader: false,
};

export default config;
