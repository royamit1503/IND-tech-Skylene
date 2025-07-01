import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

const font = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Skylene | Design & Digital Services",
  description: "Grow your business with Skylene, a design & development studio.",
  openGraph: {
    images: [
      {
        url: 'https://imgs.search.brave.com/i4RMczlK8xiryfLQO97b4fCpmnNbkPty_kAX6WvWHio/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90b3Bw/bmcuY29tL3VwbG9h/ZHMvcHJldmlldy9h/bWl0LTNkLWxldHRl/ci1wbmctbmFtZS1h/bWl0LW5hbWUtbG9n/by0xMTU2MzEzNzg1/N2RpNjlhZGttcm0u/cG5n',
        width: 1200,
        height: 630,
        alt: 'Amit Logo',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>

        {children}
        <Analytics />

      </body>
    </html>
  );
}
