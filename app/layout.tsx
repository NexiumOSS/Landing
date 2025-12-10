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
  title: "Nexium — Show your skills. Get discovered.",
  description:
    "Nexium is evolving into a global platform for creators, developers, and community managers. Launching soon.",
  keywords: [
    "Nexium",
    "talent discovery",
    "creators",
    "developers",
    "community managers",
    "collaboration",
    "platform",
  ],
  authors: [{ name: "Nexium" }],
  openGraph: {
    title: "Nexium — Show your skills. Get discovered.",
    description:
      "Global platform for creators, developers, and community managers. Proof-backed profiles and curated opportunities.",
    url: "https://nexiums.xyz",
    siteName: "Nexium",
    images: [
      {
        url: "/banner.png",
        width: 320,
        height: 320,
        alt: "Nexium logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nexium — Show your skills. Get discovered.",
    description: "Nexium is evolving into a global platform for creators, developers, and community managers. Launching soon.",
    images: ["/banner.png"],
  },
  icons: {
    icon: "/full-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
