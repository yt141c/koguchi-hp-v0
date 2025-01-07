import type { Metadata } from 'next'
import { Noto_Sans_JP } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import MobileBottomBar from '@/components/MobileBottomBar'

const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  variable: '--font-sans',
})

export const metadata: Metadata = {
  title: 'こぐち歯科クリニック',
  description: '安心・安全な歯科治療をご提供します',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className={`${notoSansJP.variable} font-sans antialiased bg-[#F7F7F7] text-[#333333]`}>
        <Header />
        <main className="pb-16 md:pb-0">{children}</main>
        <Footer />
        <MobileBottomBar />
      </body>
    </html>
  )
}

