/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    loader: 'akamai',
    path: '',
  },
  basePath: '/punk_api',
  assetPrefix: '/punk_api',
  pageExtensions: ['js'],
}

module.exports = nextConfig
