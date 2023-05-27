/**
 * @description 查找资源详情
 */
export interface TMDBQueryDetail {
	backdrop_path: string
	original_title: string
	original_language: string
	poster_path: string
	title: string
	overview: string
	revenue: number // 收入
	runtime: number
	[name: string]: any
}

/**
 * @description 搜索
 */
export interface TMDBSearch {
	page: number
	results: TMDBSearchResult[]
	total_pages: number
	total_results: number
}

export interface TMDBSearchResult {
	adult: boolean
	backdrop_path: string
	genre_ids: number[]
	id: number
	original_language: string
	original_title: string
	overview: string
	popularity: number
	poster_path: string
	release_date: string
	title: string
	video: boolean
	vote_average: number
	vote_count: number
	[name: string]: any
}
