import type { Metadata } from "next";
import "@cloudscape-design/global-styles/index.css";




import "./globals.css";
import TopNav from "../components/TopNav";

export const metadata: Metadata = {
  title: "Education Software",
  description: "A minimal education software application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="pt-16">
        <TopNav />
        {children}
      </body>
    </html>
  );
}
