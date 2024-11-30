/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true,
        domains: ['cdn.imagin.studio'],
    },
    basePath: '/carhub',
    assetPrefix: '/carhub/',
}

module.exports = nextConfig
