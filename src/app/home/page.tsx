'use client'
import { FC, useState } from 'react'
import Card from '@components/Card'
import Search from '@components/Search'

const PageHome: FC = () => {
	const [id, setId] = useState<number>(1771)

	return (
		<main className={'h-screen flex flex-col items-center bg-gray-700 '}>
			<Search changeId={(id: number) => setId(id)} />
			<Card resourceId={id} className={'mt-20'} />
		</main>
	)
}

export default PageHome
