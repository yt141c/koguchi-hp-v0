'use client'

import { Phone, Map } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function MobileBottomBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg md:hidden">
      <div className="flex justify-between items-center p-4">
        <Button
          variant="outline"
          className="flex-1 mr-2"
          onClick={() => window.open('https://goo.gl/maps/your-clinic-location', '_blank')}
        >
          <Map className="mr-2 h-4 w-4" />
          Google Map
        </Button>
        <Button
          variant="default"
          className="flex-1 ml-2 bg-green-500 hover:bg-green-600"
          onClick={() => window.location.href = 'tel:000-000-0000'}
        >
          <Phone className="mr-2 h-4 w-4" />
          000-000-0000
        </Button>
      </div>
    </div>
  )
}

