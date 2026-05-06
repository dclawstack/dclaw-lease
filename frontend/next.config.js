/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  async rewrites() {
    return [
      { source: '/api/:path*', destination: 'http://dclaw-lease-backend:8000/:path*' }
    ];
  }
};
module.exports = nextConfig;
