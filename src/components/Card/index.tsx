'use client'
import React, { HTMLAttributes, useEffect, useState } from 'react'
import { TMDB_CONFIG } from '@/config/constant'
import { queryDetails } from '@/services/TMDB'
import { TMDBQueryDetail } from '@/type/api'

interface CardProps extends HTMLAttributes<HTMLElement> {
	resourceId: number
}

const Card: React.FC<CardProps> = (props) => {
	const { className = '', resourceId } = props
	const [info, setInfo] = useState<TMDBQueryDetail>()

	useEffect(() => {
		const init = async () => {
			const { data } = await queryDetails(resourceId)
			console.log(data)
			setInfo(data)
		}
		void init()
	}, [resourceId])
	return (
		<main
			className="w-screen h-screen flex justify-center items-center "
			style={{
				backgroundImage: `linear-gradient(rgba(0,0,0,.75) 15%, rgba(0,0,0,.2) 40%, rgba(0,0,0,.75) 90%), url(${
					TMDB_CONFIG.IMAGE_BASE + info?.backdrop_path
				}) `,
				backgroundSize: '100% 100%',
			}}
		>
			<section
				className={'lg:w-[400px] lg:h-[560px] bg-fuchsia-900/90 rounded-sm ' + className}
				style={{
					backgroundImage: `url(${TMDB_CONFIG.IMAGE_BASE + info?.poster_path})`,
					backgroundSize: '100% 100%',
				}}
			></section>
		</main>
	)
}

export default Card
