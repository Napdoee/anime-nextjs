"use client"

import { getAnime } from "./hooks/getAnime"
import AnimeList from "./components/AnimeList"
import Header from "./components/AnimeList/Header"

const Page = () => {
  const { anime, isLoading } = getAnime('/top/anime?limit=8');

  return (
    <>
      <section>
        <Header title="Top Anime" linkTitle="See More" linkHref="/top" />
        {isLoading && <h1>Loading bang...</h1>}
        <AnimeList anime={anime}/>
      </section>
    </>
  )
}

export default Page;