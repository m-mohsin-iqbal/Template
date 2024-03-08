import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"

import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';

import { Providers } from '@/lib/providers';


import './globals.css';

const inter = Inter({ subsets: ['latin'] });

const title = 'Mohsin Iqbal | Full Stack Developer| React | Next |Node ';
const description =
  'A seasoned full-stack developer excelling in React/Next.js and Node.js technologies, passionately committed to delivering robust web solutions.';
const url = 'https://mohsindev.tech';

export const metadata: Metadata = {
  metadataBase: new URL(url),
  title,
  description,
  keywords: [
    'Frontend Developer',
    'Full Stack Developer',
    'React Developer',
    'Next.js Developer',
    'Node.js Developer',
    'MERN'
  ],
  creator: 'Mohsin Iqbal',
  openGraph: {
    type: 'website',
    url,
    title,
    description,
    siteName: title,
    images: [
      {
        url: 'https://full-pose.s3.amazonaws.com/open-graph-mohsin.png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    creator: '@MohsinIqbal',
    images: 'https://full-pose.s3.amazonaws.com/open-graph-mohsin.png',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
};

export const viewport={ themeColor: [
  { media: '(prefers-color-scheme: light)', color: 'white' },
  { media: '(prefers-color-scheme: dark)', color: 'black' },
]}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.className} bg-gray text-gray-600 antialiased`}>
        <Providers>
          <Header />
          <SpeedInsights/>
          <Analytics/>
          <main className="flex min-h-screen w-full flex-col">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
