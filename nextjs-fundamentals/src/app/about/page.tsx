'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"


const generateRandom = (number : number) => {
    return Math.floor(Math.random() * number);
}

export default function About() {

    const navLinks = [
        { name : 'Home', href : '/' },
        { name : 'About', href : '/about' },
        { name : 'Blog', href : '/blog' },
    ]

    const pathName = usePathname();

    const randomNum = generateRandom(2);

    if(randomNum === 1) {
        throw new Error('Error from About page')
    }

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