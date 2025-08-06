import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV === "development";
const isWebContainer = process.env.NODE_ENV === "development" && process.env.HOSTNAME === "0.0.0.0";

// Very permissive headers for WebContainer
const webContainerHeaders = [
  {
    key: "Access-Control-Allow-Origin",
    value: "*",
  },
  {
    key: "Access-Control-Allow-Methods",
    value: "GET, POST, PUT, DELETE, OPTIONS",
  },
  {
    key: "Access-Control-Allow-Headers",
    value: "*",
  },
];

// Basic production headers
const productionHeaders = [
  {
    key: "X-Frame-Options",
    value: "DENY",
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=31536000; includeSubDomains; preload",
  },
];

const nextConfig: NextConfig = {
  output: "standalone",
  async headers() {
    if (isWebContainer) {
      return [
        {
          source: "/(.*)",
          headers: webContainerHeaders,
        },
      ];
    }
    
    return [
      {
        source: "/(.*)",
        headers: productionHeaders,
      },
    ];
  },
};

export default nextConfig;