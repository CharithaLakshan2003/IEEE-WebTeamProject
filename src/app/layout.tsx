import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css";



export const metadata: Metadata = {
  title: "ReidXtreme 3.0 - Inter-University Competitive Programming Hackathon",
  description:
    "Join ReidXtreme 3.0, an Inter-University Competitive Programming Hackathon organized by IEEE Student Branch of UCSC in collaboration with ACM Student Chapter of UCSC. October 20-21, 2025.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
