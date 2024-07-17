import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/next";
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';

import "./globals.css";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";


export const metadata: Metadata = {
  metadataBase: new URL('https://joseabriljr.dev'),
  title: "Jose Abril, Jr.",
  description: "Developer, Founder, and creator.",
  openGraph: {
    title: 'Jose Abril, Jr.',
    description: 'Developer, Founder, and creator.',
    url: 'https://joseabriljr.dev',
    siteName: 'Jose Abril, Jr.',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    title: 'Jose Abril, Jr.',
    card: 'summary_large_image',
  },
};

const cx = (...classes: string[]) => classes.filter(Boolean).join(' ');

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html 
      lang="en"
      className={cx(
        'text-black bg-white dark:text-white dark:bg-[#111010]',
        GeistSans.variable,
        GeistMono.variable
      )}
    >
      <body className="antialiased max-w-2xl mb-40 flex flex-col md:flex-row mx-4 mt-8 lg:mx-auto dark:bg-[#111010]">
        <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0 dark:bg-[#111010]">
          <Navbar />
          {children}
          <Footer />
          <Analytics />
          <SpeedInsights />
        </main>
      </body>
    </html>
  );
}
