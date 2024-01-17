import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import LeftSidebar from '@/components/shared/LeftSidebar';
import RightSidebar from '@/components/shared/RightSidebar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'X',
  description: `X`,
  icons: {
    icon: 'assets/images/site-logo.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        {/* {children} */}
        <div className='grid grid-cols-12 h-screen w-screen px-20'>
          <LeftSidebar />
          <div className='col-span-6  border-x-[0.2px] border-x-slate-500'>
            {children}
          </div>
          <RightSidebar />
        </div>
      </body>
    </html>
  );
}