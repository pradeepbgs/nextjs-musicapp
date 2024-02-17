

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
        <h1>This is inner layout</h1>
        <h1>{children}</h1>
    </div>
  );
}
