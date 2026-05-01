/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: '/',
        headers: [
          {
            key: 'x-robots-tag',
            value: 'all',
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig
