/** @type {import('next').NextConfig} */
const nextConfig = {
    // www.adbensimoveis.com.br
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'www.adbensimoveis.com.br',
          },
        ],
      },
}

module.exports = nextConfig
