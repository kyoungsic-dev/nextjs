/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true
  },
  async redirects() {
    return [
      {
        source: '/product/deleted_forever',
        destination: '/',
        permanent: true
      },
      {
        source: '/product/deleted_temp',
        destination: '/product',
        permanent: true
      }
    ]
  },
  async rewrites() {
    return [
      {
        source: '/item/:slug',
        destination: '/product/:slug'
      },
      {
        source: '/products/:slug',
        destination: '/product/:slug'
      }
    ]
  }
}

module.exports = nextConfig
