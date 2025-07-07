/** @type {import('next').NextConfig} */
const repo = 'Langsphere';
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  output: 'export',
  basePath: `/${repo}`,
  assetPrefix: `/${repo}/`,
}

export default nextConfig
