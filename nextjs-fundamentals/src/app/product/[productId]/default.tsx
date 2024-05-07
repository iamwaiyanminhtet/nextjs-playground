import { Metadata } from "next"

type Props = {
    params : { productId : string }
}

export const generateMetadata = ({params} : Props) : Metadata => {
    return {
        title : `Product ${params.productId}`
    }
}

export default function DefaultProductDetails({ params } : Props) {
    return  <>
    <h1>Details of product { params.productId }</h1>
    </>
} 