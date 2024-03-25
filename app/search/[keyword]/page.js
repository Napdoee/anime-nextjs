"use client"

import { getAnime } from "@/app/hooks/getAnime"
import AnimeList from "@/app/components/AnimeList"
import Header from "@/app/components/AnimeList/Header"

const Page = ({ params }) => {
	const { keyword } = params;
	const { anime, isLoading } = getAnime(`/anime?q=${keyword}`)

	return (
	    <>
		    <section>
			    <Header title={`Search for ${decodeURI(keyword)}...`} />
			    {isLoading && <h1>Loading bang...</h1>}
			    <AnimeList anime={anime}/>
		    </section>
	    </>
	)
}

export default Page;