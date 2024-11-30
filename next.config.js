/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true,
    },
    basePath: '/carhub',
    assetPrefix: '/carhub/',
    trailingSlash: true,
}

module.exports = nextConfig
