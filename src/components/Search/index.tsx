'use client'
import { ChangeEvent, FC, useState } from 'react'
import useSWR from 'swr'
import axios from 'axios'
import { TMDB_CONFIG } from '@config/constant'
import { searchTMDB } from '@services/TMDB'

const Search: FC = () => {
	const [keyword, setKeyword] = useState('无极')

	const fetcher = ([url, query]: [string, string]) => searchTMDB({ url, query })
	const { data, error } = useSWR([TMDB_CONFIG.DOMAIN + TMDB_CONFIG.URL, keyword], fetcher)
	// ...
	console.log(data)

	const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
		const { value } = e.target
		setKeyword(value)
	}

	return (
		<header className={'mt-10'}>
			<input className="outline-none pl-4 py-4 rounded-md" onChange={(e) => handleChange(e)} />
		</header>
	)
}

export default Search
