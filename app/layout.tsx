import type { Metadata } from "next";
import {Montserrat as FontSans } from "next/font/google";
import "./globals.css";

import {cn} from '@/lib/utils'
import { Toaster } from "@/components/ui/toaster";


export const metadata: Metadata = {
  title: "Mustang - Store",
};

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans"

})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn('min-h-screen bg-background font-sans antialiased', fontSans.variable)}
        >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
