/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: process.env.BASEPATH,
  eslint: {
    ignoreDuringBuilds: true
  },
  distDir: 'dist',
  output: 'export',
  trailingSlash: false,
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig
