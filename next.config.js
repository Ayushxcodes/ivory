/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true, // ⬅️ disables Next.js Image Optimization
  },
};

module.exports = nextConfig;
