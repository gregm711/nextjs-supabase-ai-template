/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        // Apply these headers to all routes
        source: "/(.*)",
        headers: [
          {
            key: "X-Frame-Options",
            value: "ALLOWALL",
          },
          // By omitting a Content-Security-Policy frame-ancestors directive,
          // you allow any domain to embed your app in an iframe.
        ],
      },
    ];
  },
};

module.exports = nextConfig;
