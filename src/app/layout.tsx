import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/header/page";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Daile Games",
  description: "Tudo sobre os games mais irados do planeta",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
    <Header />
        {children}
        </body>
    </html>
  );
}
