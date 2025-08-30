import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "个人技术博客 - React, Next.js, Tailwind CSS 技术分享",
  description: "探索现代Web开发技术，分享React、Next.js、Tailwind CSS等技术文章和实践经验",
  keywords: ["React", "Next.js", "Tailwind CSS", "Web开发", "前端技术"],
  authors: [{ name: "技术博客作者" }],
  openGraph: {
    title: "个人技术博客",
    description: "现代Web开发技术分享与实践经验",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
