
export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <h1 className="text-center text-9xl text-red-900">hii from layout music</h1>
            <div >{children}</div>
        </>
    );
}
