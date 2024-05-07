export default function productLayout({
    children,
    popular,
    trending
}: {
    children: React.ReactNode,
    popular: React.ReactNode,
    trending: React.ReactNode,
}) {
    return <>
        <div style={{ display: "flex" }} >
            <div>{popular}</div>
            <div>{trending}</div>
        </div>
        <div>
            {children}
        </div>
        <div>all the products will be 5% off during summer</div>
    </>
}