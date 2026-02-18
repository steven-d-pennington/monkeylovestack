import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
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
  title: "MonkeyLoveStack — AI Operations Partner",
  description:
    "I replaced three marketing hires with AI agents. Now I run them for you. Fully managed lead generation, podcast production, and social media — starting at $300/mo.",
  openGraph: {
    title: "MonkeyLoveStack — AI Operations Partner",
    description:
      "Fully managed AI systems for lead gen, podcast production, and social media. Built and run by Steven Pennington.",
    url: "https://monkeylovestack.com",
    siteName: "MonkeyLoveStack",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MonkeyLoveStack — AI Operations Partner",
    description:
      "I replaced three marketing hires with AI agents. Now I run them for you.",
  },
  metadataBase: new URL("https://monkeylovestack.com"),
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
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
