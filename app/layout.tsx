import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Harshita Dabir's Digital Portfolio",
  description: "Get a deeper insight into my projects and passions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <main className="flex-1 h-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
