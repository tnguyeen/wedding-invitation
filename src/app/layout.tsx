import type { Metadata } from "next"
import { Inter, Lemonada, Dancing_Script } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })
const lemonada = Lemonada({ subsets: ["latin"] })
const dancingScript = Dancing_Script({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Thiệp mời đám cưới",
  description: "Generated by create next app",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
