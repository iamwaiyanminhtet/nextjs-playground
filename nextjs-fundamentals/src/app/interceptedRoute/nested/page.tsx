import Link from "next/link"

export default function Nested() {
    return <>
    <h1>Nested Intercept...</h1>
    <Link href={'/interceptedRoute/above'} >See Above</Link>
    <Link href={'/about'} >About</Link>
    </>
}