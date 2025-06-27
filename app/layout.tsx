import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { Inter } from "next/font/google"
import Navigation from "@/components/navigation"
import logo from "../public/images/Logo .png"
const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "ASD Roseto Calcio - Football Camp",
  icons: {
    icon: "/images/Logo .png",
    apple: "/images/apple-touch-icon.png"
  },
  description: "Official website of ASD Roseto Calcio football camp and Spiagge d'Abruzzo Cup tournament",
    generator: 'v0.dev'

}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="it">
      <body className={inter.className}>
        <Navigation />
        {children}
      </body>
    </html>
  )
}
