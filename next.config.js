

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  devIndicators: false,
  
  serveComponentsExternalPackages: ['@react-pdf/renderer'],
}

module.exports = nextConfig
