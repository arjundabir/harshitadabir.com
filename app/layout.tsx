import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Harshita Dabir's Digital Portfolio",
  description: "Get a deeper insight into my projects and passions.",
  icons: { icon: "/apple.png", apple: "/apple.png" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="">
      <head>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-XW1J9QKM39"></Script>
        <Script id="google analytics">
          {`window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-XW1J9QKM39'); `}
        </Script>
      </head>
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <main className="flex-1 h-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
