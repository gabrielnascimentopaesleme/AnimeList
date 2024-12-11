import type { Metadata } from 'next';
import localFont from 'next/font/local';
import Link from 'next/link';
import './globals.css';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'Animoteca',
  description: 'Sua Biblioteca de animes',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[url('/images/bg_ptn.jpg')] w-screen overflow-x-hidden`}
      >
        <nav className='fixed w-screen flex justify-between px-6 py-2 items-center bg-black/[.2] text-slate-200'>
          <div className="text-xl font-extrabold">
            <Link href="/">
              <h2>Biblioteca</h2>
              <h2>de Animes</h2>
            </Link>
          </div>

          <div className='text-sm pr-4'>
              <Link className='border border-[#EE8C04] p-3 rounded-xl hover:bg-[#EE8C04] font-extrabold' href="/login">
                Já tem uma conta?
              </Link>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
