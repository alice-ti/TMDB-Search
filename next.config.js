const path = require('path')
const { resolve } = path
// import { TMDB_CONFIG } from '@config/constant'

/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		appDir: true,
	},
	// async rewrites() {
	// 	return [
	// 		// 接口请求 前缀带上/api-text/
	// 		{ source: '/TMDB/:path*', destination: `${TMDB_CONFIG.DOMAIN}/:path*` },
	// 	]
	// },
	webpack: (config, { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }) => {
		config.resolve.alias = {
			...config.resolve.alias,
			'@': resolve(__dirname, './src'),
			'@utils': resolve(__dirname, './src/utils'),
			'@config': resolve(__dirname, './src/config'),
			'@services': resolve(__dirname, './src/services'),
			'@components': resolve(__dirname, './src/components'),
		}
		return config
	},
}

module.exports = nextConfig
