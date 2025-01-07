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
  title: 'こぐち歯科',
  description: 'こぐち歯科 - 地域密着型の歯科医院。お口の健康をトータルサポート。koguchishika.com',
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

