import request from '@utils/request'
import { AxiosResponse } from 'axios'
import { TMDB_CONFIG } from '@config/constant'

/**
 * @description TMDB搜索
 */
export const searchTMDB = async ({ url, query = '' }: { url: string; query?: string }): Promise<AxiosResponse<any>> => {
	return await request(url, 'GET', {
		data: {
			api_key: TMDB_CONFIG.API_KEY,
			query,
			language: 'ZH-CN',
		},
	})
}
