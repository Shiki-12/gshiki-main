import type { Metadata } from "next";
import "./globals.css";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  metadataBase: new URL('https://gshiki.my.id'), 
  title: "Shiki — Main Website",
  description: "Developer & Creator · Building the future, one line of code at a time.",
  icons: {
    icon: '/favicon.ico', 
  },
  openGraph: {
    title: "Shiki — Main Website",
    description: "Developer & Creator · Building the future, one line of code at a time.",
    url: "https://gshiki.my.id",
    siteName: "Shiki Main Website",
    images: [
      {
        url: "https://gshiki.my.id/og-main.png", 
        width: 1200,
        height: 630,
        alt: "Shiki - Main Website",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shiki — Main Website",
    description: "Developer & Creator · Building the future, one line of code at a time.",
    images: ["https://gshiki.my.id/og-main.png"], 
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("dark", "font-sans", geist.variable)} suppressHydrationWarning>
      <body className="antialiased">{children}</body>
    </html>
  );
}
