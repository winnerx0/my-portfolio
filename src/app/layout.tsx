import type { Metadata } from "next";
import { Roboto, Roboto_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next"
import "./globals.css";

const robotoSans = Roboto({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"]
});

const robotoMono = Roboto_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Winnerx0",
  description: "Winner Agbonikpeya Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${robotoSans.variable} ${robotoMono.variable} antialiased dark flex items-center justify-center`}
      >
        {children}
        <Analytics/>
      </body>
    </html>
  );
}
