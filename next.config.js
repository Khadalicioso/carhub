/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        domains: ["cdn.imagin.studio"],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn.imagin.studio',
                port: '',
                pathname: '/getimage/**',
            },
        ],
        unoptimized: true,
    },
    basePath: '/carhub',
    assetPrefix: '/carhub',
}

module.exports = nextConfig
