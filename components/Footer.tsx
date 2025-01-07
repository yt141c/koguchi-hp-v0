import { Facebook, Instagram, Twitter } from 'lucide-react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-8 pb-24 md:pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">〇〇歯科クリニック</h3>
            <p>〒100-0005 東京都千代田区丸の内1-1-1</p>
            <p>TEL: 03-1234-5678</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">リンク</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:underline">ホーム</Link></li>
              <li><Link href="/about" className="hover:underline">医院紹介</Link></li>
              <li><Link href="#" className="hover:underline">診療案内</Link></li>
              <li><Link href="#" className="hover:underline">スタッフ紹介</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">フォローする</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-secondary">
                <Facebook />
              </a>
              <a href="#" className="hover:text-secondary">
                <Twitter />
              </a>
              <a href="#" className="hover:text-secondary">
                <Instagram />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2024 〇〇歯科クリニック. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

