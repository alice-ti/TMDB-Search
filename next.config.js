const path = require('path')
const { resolve } = path

/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		appDir: true,
	},
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
