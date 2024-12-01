/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    env: {
        NEXT_PUBLIC_BASE_PATH: '/carhub'
    },
    images: {
        unoptimized: true,
        domains: ['cdn.imagin.studio'],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn.imagin.studio',
                port: '',
                pathname: '/**',
            },
        ],
    },
    basePath: '/carhub',
    assetPrefix: '/carhub/',
}

module.exports = nextConfig
