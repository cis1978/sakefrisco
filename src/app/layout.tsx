import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
    <header>sakefrisco.com
    <img src="/E9D20A5F-91EF-4D82-AEF2-ADC49A52EEF2_1_201_a.jpeg" alt="Sakefrisco Logo" style={{ width: '65px', height: '65px',padding:'10px', }} />
    </header>
    
        {children}
    </body>
    </html>
  );
}
