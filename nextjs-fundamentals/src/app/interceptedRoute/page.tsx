import Link from "next/link"

export default function Base() {
    return <>
    <h1>Base Route</h1>
    <Link href={'/interceptedRoute/original/'} >Original</Link>
    </>
}