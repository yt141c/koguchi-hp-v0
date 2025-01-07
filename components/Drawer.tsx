'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'

export default function Drawer() {
  const [open, setOpen] = useState(false)

  // const toggleDrawer = () => setOpen((prev) => !prev) //Removed toggleDrawer function

  const menuItems = [
    { href: '/', label: 'ホーム' },
    { href: '/about', label: '医院紹介' },
    { href: '/services', label: '診療案内' },
    { href: '/first-visit', label: '初診の方へ' },
  ]

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">メニューを開く</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <nav className="flex flex-col h-full">
          <ul className="flex flex-col space-y-4 mt-4">
            {menuItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-gray-600 hover:text-primary transition-colors"
                  //onClick={toggleDrawer} //Removed onClick
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-auto pb-4">
            <Button className="w-full bg-secondary hover:bg-secondary/90">
              <Phone className="mr-2 h-4 w-4" /> 03-1234-5678
            </Button>
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  )
}

