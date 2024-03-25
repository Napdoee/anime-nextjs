import InputSearch from "./InputSearch"
import Link from "next/link"

const Navbar = () => {
	return (
		<header className="bg-accent">
			<div className="flex flex-col md:flex-row justify-between md:items-center py-2 px-4">
				<Link href="/" className="text-slate-100 text-lg font-bold uppercase mb-3 md:mb-0">Anime List</Link>
				<InputSearch />
			</div>
		</header>
	)
}

export default Navbar;