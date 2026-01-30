import type React from "react"
import type { Metadata } from "next"
import { Geist } from 'next/font/google'
import "./globals.css"

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
})

export const metadata: Metadata = {
  title: "TRAZO - Tito + Rothenberger Arquitectura",
  description: "Estudio de arquitectura y diseño en Mar del Plata",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${geist.variable} font-[family-name:var(--font-geist-sans)] antialiased bg-white text-[#212f35]`}>
        {children}
      </body>
    </html>
  )
}
