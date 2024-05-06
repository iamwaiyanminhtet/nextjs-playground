export default function productLayout( {children} : {
    children : React.ReactNode
} ) {
    return <>
    {children}
    <div>all the products will be 5% off during summer</div>
    </>
}