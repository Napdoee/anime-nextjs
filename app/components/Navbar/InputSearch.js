"use client"

import { MagnifyingGlass } from "@phosphor-icons/react"
import { useRouter } from "next/navigation"
import { useRef } from "react"

const InpustSearch = () => {
	const searchRef = useRef();
	const router = useRouter();

	const handleSearch = (e) => {
		e.preventDefault();
		const keyword = searchRef.current.value;
		if(!keyword) return;
		
		router.push(`/search/${keyword}`)
	}

	return (
		<div className="relative">
			<form>
				<input type="text" placeholder="Search..." 
					className="w-full py-2 px-4 rounded-sm" 
					ref={searchRef} required />
				<button type="submit" className="absolute top-2 end-2" onClick={handleSearch}>
					<MagnifyingGlass size={24} />
				</button>
			</form>
		</div>
	)
}

export default InpustSearch;