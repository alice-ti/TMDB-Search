import request from '@utils/request'
import { AxiosResponse } from 'axios'
import { TMDB_CONFIG } from '@config/constant'
import type { TMDBQueryDetail, TMDBSearch } from '@/type/api'

/**
 * @description TMDB搜索
 */
export const searchTMDB = async ({ url, query = '' }: { url: string; query?: string }): Promise<AxiosResponse<TMDBSearch>> => {
	return await request(url, 'GET', {
		data: {
			api_key: TMDB_CONFIG.API_KEY,
			query,
			language: 'ZH-CN',
		},
	})
}

/**
 * @description Query For Details
 * @param id
 * @returns
 */
export const queryDetails = async (id: number): Promise<AxiosResponse<TMDBQueryDetail>> => {
	return await request(`https://api.themoviedb.org/3/movie/${id}`, 'GET', {
		data: { api_key: TMDB_CONFIG.API_KEY },
	})
}
