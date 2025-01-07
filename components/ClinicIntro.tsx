import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function ClinicIntro() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">当院の特徴</h2>
        <div className="space-y-16">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-1/2">
              <Image
                src="/placeholder.svg?height=400&width=600"
                width={600}
                height={400}
                alt="わかりやすい説明と寄り添う姿勢"
                className="rounded-lg object-cover w-full h-[300px] md:h-[400px]"
              />
            </div>
            <div className="w-full md:w-1/2 space-y-4">
              <h3 className="text-2xl font-semibold text-primary">わかりやすい説明と寄り添う姿勢</h3>
              <p className="text-gray-600">
                歯科治療には不安や疑問がつきものですが、こぐち歯科では患者さんの目線に立った治療説明を心がけています。治療前にしっかり内容や進め方をお伝えし、ちょっとした声かけやフォローも忘れません。
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row-reverse items-center gap-8">
            <div className="w-full md:w-1/2">
              <Image
                src="/placeholder.svg?height=400&width=600"
                width={600}
                height={400}
                alt="夜遅くまで診療、忙しい方でも通いやすい"
                className="rounded-lg object-cover w-full h-[300px] md:h-[400px]"
              />
            </div>
            <div className="w-full md:w-1/2 space-y-4">
              <h3 className="text-2xl font-semibold text-primary">夜遅くまで診療、忙しい方でも通いやすい</h3>
              <p className="text-gray-600">
                月曜と金曜は夜21時まで診療を行っているので、お仕事や家事で遅くなりがちな方でも無理なく通っていただけます。
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-1/2">
              <Image
                src="/placeholder.svg?height=400&width=600"
                width={600}
                height={400}
                alt="地域の皆さまの歯の健康を支える幅広い診療"
                className="rounded-lg object-cover w-full h-[300px] md:h-[400px]"
              />
            </div>
            <div className="w-full md:w-1/2 space-y-4">
              <h3 className="text-2xl font-semibold text-primary">地域の皆さまの歯の健康を支える幅広い診療</h3>
              <p className="text-gray-600">
                一般歯科から審美歯科、入れ歯まで、多様な治療に対応しているのもこぐち歯科の特長です。上石神井の地に根ざした歯科医院として、子どもからご年配の方まで、幅広い年代の方に通っていただいています。
              </p>
              <Link href="/about">
                <Button variant="outline">医院紹介を見る</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

