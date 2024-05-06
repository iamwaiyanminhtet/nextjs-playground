'use client'
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import './style.css'

export default function Home() {

    const navLinks = [
        { name : 'Home', href : '/' },
        { name : 'About', href : '/about' },
        { name : 'Blog', href : '/blog' },
    ]

    const router = useRouter();
    const pathName = usePathname();

    const handleClick = () => {
        router.push('/about');
        // router.replace('/) & router.back();
    }

    return <>
    <h1>Home page</h1>
    {
        navLinks.map((navLink, idx) => {
            const isActive = pathName === navLink.href
            return <Link key={idx} href={navLink.href} className={`underline ${isActive ? "text-red-500" : "text-sky-500"}`} > {navLink.name}  </Link>
        })
    }
   <div>
   <button onClick={handleClick} className="p-3 bg-teal-500 rounded-lg m-3" >Go to about page</button>
   </div>
    </>
} 