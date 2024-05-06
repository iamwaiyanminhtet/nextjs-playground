'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"




export default function About() {

    const navLinks = [
        { name : 'Home', href : '/' },
        { name : 'About', href : '/about' },
        { name : 'Blog', href : '/blog' },
    ]

    const pathName = usePathname();

    return <>
    <h1>About page</h1>
    {
        navLinks.map((navLink, idx) => {
            const isActive = pathName === navLink.href
            return <Link key={idx} href={navLink.href} className={`underline ${isActive ? "text-red-500" : "text-sky-500"}`} > {navLink.name}  </Link>
        })
    }
    </>
} 