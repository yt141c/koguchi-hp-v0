import { Button } from '@/components/ui/button'
import { MapPin } from 'lucide-react'

export default function AccessMap() {
  return (
    <section className="py-16 bg-[#E0E0E0]">
      <h2 className="text-2xl font-bold text-center mb-8">アクセス</h2>
      <div className="w-full h-[225px] sm:h-[300px] md:h-[375px] lg:h-[450px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.8280303808788!2d139.76493611525882!3d35.68123618019432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188bfbd89f700b%3A0x277c49ba34ed38!2z5p2x5Lqs6aeF!5e0!3m2!1sja!2sjp!4v1651825387025!5m2!1sja!2sjp"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="container mx-auto px-4 mt-8 text-center">
        <p className="mb-4">〒100-0005 東京都千代田区丸の内1-1-1</p>
        <p className="mb-4">東京駅丸の内北口から徒歩5分</p>
        <Button variant="outline" className='font-bold'>
          <MapPin className="mr-2 h-4 w-4" /> Google マップで見る
        </Button>
      </div>
    </section>
  )
}

