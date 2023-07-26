import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import Footer from '@/components/footer';
import Navbar from '@/components/navbar';

const font = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Store',
  description: 'Marketplace for imaginary demo items!',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={font.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
