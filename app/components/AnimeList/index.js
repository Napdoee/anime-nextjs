import Image from "next/image"
import Link from "next/link"

const AnimeList = ({ anime }) => {	
	return (
      	<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 px-4 md:px-0">
	        {anime.map((data) => {
	        	return (
	        		<div key={data.mal_id}>
						<Link href={`/${data.mal_id}`} className="cursor-pointer">
							<Image src={data.images.webp.image_url} alt={data.title} width={350} height={350} className="w-full max-h-64 object-cover"/>
							<h1 className="font-semibold text-md md:text-xl p-4">{data.title}</h1>
						</Link>
	        		</div>
	        	)
	        })}
      	</div>
	)
}

export default AnimeList;