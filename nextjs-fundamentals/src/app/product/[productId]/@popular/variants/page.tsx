import Link from "next/link"

export default function Variants() {
    return <div>
        <h1>Products variants....</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus at ab dolorem eaque? Quos id distinctio explicabo odio dolore, culpa ipsum dicta itaque officia porro, maxime illum esse cumque vero.</p>
        <Link href={'/product/1'} >See Original</Link>
    </div>
}