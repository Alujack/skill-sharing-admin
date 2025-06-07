'use client'
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SideBar from "@/components/sidebar";
import Providers from "../provider/provider";
import { AuthProvider } from '@/context/authContext';
import { useEffect ,useState} from 'react';
import { useRouter } from 'next/navigation';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

 const router = useRouter();

 useEffect(() => {
  const token = localStorage.getItem('token');
  const publicRoutes = ['/auth/signin', '/auth/signup'];

  const currentPath = window.location.pathname;

  // Only redirect if the current path is NOT public
  if (!token && !publicRoutes.includes(currentPath)) {
    router.push('/auth/signin');
  }
}, [router]);
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-100`}
      >
        <div className="flex h-screen">
          <SideBar>
            <div className=" rounded-lg dark:border-gray-700">
                <AuthProvider>
            <Providers>
              <div className="flex-1 overflow-y-auto">{children}</div>
            </Providers>
            </AuthProvider>
            </div>
          </SideBar>
        </div>
      </body>
    </html>
  );
}
