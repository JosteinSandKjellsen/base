import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV === "development";

// =========================================================================
// CONTENT SECURITY POLICY
// =========================================================================
const ContentSecurityPolicy = `
  default-src 'self';
  script-src 'self' 'unsafe-inline';
  style-src 'self' 'unsafe-inline';
  img-src 'self' data: https:;
  font-src 'self';
  connect-src 'self'${isDev ? " http://localhost:* http://127.0.0.1:*" : ""};
  object-src 'none';
  base-uri 'self';
  form-action 'self';
  frame-ancestors 'none';
`
  .replace(/\n/g, "")
  .trim();

// =========================================================================
// SECURITY HEADERS
// NOTE: Security headers are also set in the ASP.NET middleware.
// This may cause duplication and drift risk.
// If you update headers here, ensure you review and coordinate changes with
// the backend middleware configuration.
// =========================================================================

// Common security headers used in both development and production
const commonSecurityHeaders = [
  {
    key: "Content-Security-Policy",
    value: ContentSecurityPolicy, // Prevents XSS, clickjacking, and other code injection attacks
  },
  {
    key: "X-Frame-Options",
    value: "DENY", // Prevents clickjacking by disallowing framing
  },
  {
    key: "X-XSS-Protection",
    value: "1; mode=block", // Enables XSS filtering in older browsers
  },
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin", // Controls how much referrer info is sent
  },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), interest-cohort=()", // Restricts browser features
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff", // Prevents MIME type sniffing
  },
  {
    key: "Cross-Origin-Opener-Policy",
    value: "same-origin", // Isolates browsing context for security
  },
  {
    key: "Cross-Origin-Resource-Policy",
    value: "same-origin", // Restricts which origins can load resources
  },
  {
    key: "Cross-Origin-Embedder-Policy",
    value: "require-corp", // Controls which cross-origin resources can be embedded
  },
];

// Development-only security headers
const localDevSecurityHeaders = [
  {
    key: "Access-Control-Allow-Origin",
    value: "*", // Allows all origins for CORS in dev (never use in prod)
  },
  {
    key: "X-Debug-Mode",
    value: "true", // Custom header to indicate debug mode is active
  },
  {
    key: "X-Robots-Tag",
    value: "noindex, nofollow, nosnippet, noarchive", // Prevents search engines from indexing dev site
  },
];

// Production-only security headers
const prodSecurityHeaders = [
  {
    key: "Strict-Transport-Security",
    value: "max-age=31536000; includeSubDomains; preload", // Enforces HTTPS and HSTS preload
  },
];

// =========================================================================
// APPLICATION CONFIGURATION
// =========================================================================

const nextConfig: NextConfig = {
  output: "standalone",
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          ...commonSecurityHeaders,
          ...(isDev ? localDevSecurityHeaders : prodSecurityHeaders),
        ],
      },
    ];
  },
};

export default nextConfig;
