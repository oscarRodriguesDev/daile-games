import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/header/page";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Daile Games Descubra jogos incriveis para se divertir",
  description: "Tudo sobre os games mais irados do planeta",
  keywords:['games','jogos','steam'],
  openGraph:{
    images:[`${process.env.PROJECT_URL}/preview.png`]
  },
    robots:{
      index:true,
      follow:true,
      nocache:true,
      googleBot:{
        index:true,
        follow:true,
        noimageindex:true
      }
    }

  
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
