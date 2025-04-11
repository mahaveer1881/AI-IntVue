import type { Metadata } from 'next';
import { Mona_Sans } from 'next/font/google';
import './globals.css';

const monaSans = Mona_Sans({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'IntVue',
  description:
    'AI-powered platform for candidates to practice mock interviews and prepare for real opportunities.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  console.log('>>>', monaSans);
  return (
    <html lang='en' className='dark'>
      <body className={`${monaSans.className}  antialiased`}>{children}</body>
    </html>
  );
}
