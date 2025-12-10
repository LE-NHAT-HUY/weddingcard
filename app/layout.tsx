import type React from "react"
import type { Metadata, Viewport } from "next"
import { Playfair_Display, Great_Vibes, Quicksand, Sacramento } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const playfair = Playfair_Display({
  subsets: ["latin", "vietnamese"],
  variable: "--font-playfair",
})

const greatVibes = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-great-vibes",
})

const quicksand = Quicksand({
  subsets: ["latin", "vietnamese"],
  variable: "--font-quicksand",
})

const sacramento = Sacramento({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-sacramento",
})

export const metadata: Metadata = {
  title: "Thiệp Cưới Online - Wedding Invitation Editor | CineLove Style",
  description: "Tạo và chỉnh sửa thiệp cưới online đẹp mắt theo phong cách CineLove",
  keywords: "thiệp cưới online, wedding invitation, thiệp cưới điện tử, mẫu thiệp cưới đẹp",
  generator: "v0.app",

  viewport: "width=390, initial-scale=1, maximum-scale=1",
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="vi" className="overflow-x-hidden max-w-[100vw] w-full">
  <body
    className={`${playfair.variable} ${greatVibes.variable} ${quicksand.variable} ${sacramento.variable} font-sans antialiased overflow-x-hidden max-w-[100vw] w-full relative`}
  >
    {children}
    <Analytics />
  </body>
</html>

  )
}
