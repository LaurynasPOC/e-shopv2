export default function SalesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="container my-6">{children}</div>;
}
