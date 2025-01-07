import Link from 'next/link'
import { Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Drawer from './Drawer'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-primary">こぐち歯科</Link>
        <div className="flex items-center space-x-4">
          <nav className="hidden md:flex items-center space-x-4">
            <Link href="/about" className="text-gray-600 hover:text-primary">医院紹介</Link>
            <Link href="/services" className="text-gray-600 hover:text-primary">診療案内</Link>
            <Link href="/first-visit" className="text-gray-600 hover:text-primary">初診の方へ</Link>
          </nav>
          <Button size="sm" className="hidden md:flex" variant="call">
            <Phone className="mr-2 h-4 w-4" /> 03-1234-5678
          </Button>
          <Drawer />
        </div>
      </div>
    </header>
  )
}

