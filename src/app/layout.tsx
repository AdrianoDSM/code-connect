import type { Metadata } from "next";
import "./globals.css";
import { Aside } from "@/components/Aside";
import { Prompt } from 'next/font/google'
import { SearchBox } from "@/components/SearchBox";

const prompt = Prompt({
  weight: ['400', '500','600'],
  subsets: ["latin"],
  display: "swap",

});

export const metadata: Metadata = {
  title: "Code Connect",
  description: "Uma rede social para devs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className={prompt.className}>
      <body>
        <div className="app-container">
          <div>
            <Aside/>
          </div>
          <div className="main-content">
            <SearchBox/>
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
