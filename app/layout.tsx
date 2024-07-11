import type { Metadata } from "next";
import { Inter, Noto_Sans_SC } from "next/font/google";
import "./globals.css";

import { cn } from "@/lib/utils";

const fontInter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const fontNotoSansSC = Noto_Sans_SC({
  subsets: ["latin"],
  variable: "--font-noto-sans-sc",
});

export const metadata: Metadata = {
  title: "北京AI产品经理岗位分析",
  description: "北京AI产品经理岗位分析",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontInter.variable,
          fontNotoSansSC.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}
