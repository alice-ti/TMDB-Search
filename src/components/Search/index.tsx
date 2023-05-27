'use client'
import { FC, Fragment, HTMLAttributes, useEffect, useState, CompositionEvent, ChangeEvent, useRef } from 'react'
import _ from 'lodash'
import { TMDB_CONFIG } from '@config/constant'
import { searchTMDB } from '@services/TMDB'
import { TMDBSearchResult } from '@/type/api'

const fetcher = ([url, query]: [string, string]) => searchTMDB({ url, query })

interface SearchProps extends HTMLAttributes<HTMLElement> {
	changeId: (id: number) => void
}

const Search: FC<SearchProps> = (props) => {
	const { changeId } = props
	const [isShowSearch, setIsShowSearch] = useState<boolean>(false)
	const [key, setKey] = useState<string>('')
	const [searchData, dispatch] = useState<TMDBSearchResult[]>([])

	const isCompositionStart = useRef(false)

	useEffect(() => {
		if (!isCompositionStart.current) getSearchList()
	}, [key])

	const getSearchList = async () => {
		const { data } = await fetcher([TMDB_CONFIG.DOMAIN + TMDB_CONFIG.URL, key])
		console.log('fetch', data)
		dispatch(data?.results)
	}

	const throttleChangeSearch = _.throttle((key: string) => {
		setKey(key)
	}, 50)

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { value } = e.target as HTMLInputElement
		throttleChangeSearch(value)
	}

	const handleChangeSelect = (ele: any) => {
		console.log('handleChange')
		setKey(ele.original_title)
		changeId(ele?.id)
	}

	const handleComposition = (e: CompositionEvent<HTMLInputElement>) => {
		if (e.type === 'compositionstart') isCompositionStart.current = true
		else {
			isCompositionStart.current = false
			getSearchList()
		}
	}

	return (
		<header className="fixed mt-10">
			<input
				value={key}
				className="border-b-2 border-purple-500 text-white bg-transparent outline-none w-[400px] pl-4 py-4"
				// TODO: 立即关闭isShowSearch会导致触发不了handleChangeSelect,后续需要优化
				onBlur={() => setTimeout(() => setIsShowSearch(false), 100)}
				onFocus={() => setIsShowSearch(true)}
				onChange={(e) => handleChange(e)}
				onCompositionStart={(e) => handleComposition(e)}
				onCompositionEnd={(e) => handleComposition(e)}
				placeholder="search for keywords!"
			/>
			{isShowSearch &&
				searchData?.map((ele: any) => (
					<Fragment key={ele?.id}>
						<div
							className="py-2 px-2 cursor-pointer bg-gray-200/30 hover:bg-gray-300"
							onClick={() => handleChangeSelect(ele)}
						>
							{ele?.original_title}
						</div>
					</Fragment>
				))}
		</header>
	)
}

export default Search
