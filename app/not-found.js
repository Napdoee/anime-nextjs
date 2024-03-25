import Link from "next/link"

const NotFound = () => {
	return (
		<div className="w-full min-h-[75vh] flex justify-center items-center">
			<h1 className="text-2xl font-bold text-slate-500">
				<span className="text-black">404</span> Not Found
				<Link href="/" className="text-sm md:text-md underline hover:text-indigo-500 tranisition-all cursor-pointer">
	        		Back to Home
	        	</Link>
			</h1>
		</div>
	)
}

export default NotFound;