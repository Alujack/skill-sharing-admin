import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SideBar from "@/components/sidebar";
import Providers from "./provider/provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Admin Dashboard",
  description: "Admin panel for managing the application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-100`}
      >
        <div className="flex h-screen">
          <SideBar>
            <div className=" rounded-lg dark:border-gray-700">
            <Providers>
              <div className="flex-1 overflow-y-auto">{children}</div>
              </Providers>
            </div>
          </SideBar>
        </div>
      </body>
    </html>
  );
}
