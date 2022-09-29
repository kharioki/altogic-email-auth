/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['c5-na.altogic.com'],
  }
}

module.exports = nextConfig
