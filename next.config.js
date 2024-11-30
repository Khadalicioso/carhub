/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    env: {
        NEXT_PUBLIC_BASE_PATH: '/carhub'
    },
    images: {
        unoptimized: true,
        domains: ['cdn.imagin.studio'],
    },
    basePath: '/carhub',
    assetPrefix: '/carhub/',
}

module.exports = nextConfig
