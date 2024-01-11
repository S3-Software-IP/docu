/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.imgur.com",
      },
      {
        protocol: "https",
        hostname: "**.scdn.co",
      },
    ],
  },
};

module.exports = nextConfig;
