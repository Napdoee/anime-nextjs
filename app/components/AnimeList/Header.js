import Link from "next/link"

const Header = ({title, linkHref, linkTitle}) => {
	return (
		<div className="flex justify-between items-center mb-3 px-4 md:px-0">
	        <h1 className="text-2xl font-bold">{title}</h1>
	        { (linkHref && linkTitle) ?  
	        	<Link href={linkHref} className="text-sm md:text-md underline hover:text-indigo-500 tranisition-all cursor-pointer">
	        		{linkTitle}
	        	</Link>
	        	: null
	    	}
      	</div>
	)
}

export default Header;