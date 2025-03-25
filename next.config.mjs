let userConfig
try {
  userConfig = (await import('./user-next.config.js')).default
} catch (e) {
  userConfig = undefined
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  experimental: {
    webpackBuildWorker: true,
    parallelServerBuildTraces: true,
    parallelServerCompiles: true,
  },
}

mergeConfig(nextConfig, userConfig)

function mergeConfig(base, user) {
  if (!user) return
  for (const key in user) {
    if (typeof base[key] === 'object' && !Array.isArray(base[key])) {
      base[key] = { ...base[key], ...user[key] }
    } else {
      base[key] = user[key]
    }
  }
}

export default nextConfig
