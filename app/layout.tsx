import type { Metadata } from 'next'
import { Space_Grotesk } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/shared/Navbar'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700']
})

export const metadata: Metadata = {
  title: 'Pricewise',
  description: 'Smart price tracking for your favorite products'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={spaceGrotesk.className}>
        <main className="max-w-10xl mx-auto px-6 md:px-12 py-4">
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  )
}
