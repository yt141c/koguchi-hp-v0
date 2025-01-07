import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const staffMembers = [
  {
    name: "山田 太郎",
    role: "院長",
    image: "/placeholder.svg?height=300&width=300",
    description: "患者様一人ひとりに寄り添った診療を心がけています。皆様の笑顔のために尽力いたします。"
  },
  {
    name: "鈴木 花子",
    role: "歯科衛生士",
    image: "/placeholder.svg?height=300&width=300",
    description: "予防歯科を中心に、患者様の歯の健康をサポートいたします。"
  },
  {
    name: "佐藤 美咲",
    role: "受付",
    image: "/placeholder.svg?height=300&width=300",
    description: "患者様に安心してご来院いただけるよう、丁寧な対応を心がけています。"
  },
  {
    name: "田中 健太",
    role: "歯科医師",
    image: "/placeholder.svg?height=300&width=300",
    description: "最新の技術と知識を活かし、質の高い治療を提供いたします。"
  }
]

export default function StaffIntro() {
  return (
    <section className="py-16 bg-[#E0E0E0] overflow-hidden">
      <h2 className="text-3xl font-bold text-center mb-12">スタッフ紹介</h2>
      <div className="flex overflow-x-auto pb-8 px-4 -mx-4 scrollbar-hide">
        <div className="flex space-x-6">
          {staffMembers.map((staff, index) => (
            <Card key={index} className="w-80 flex-shrink-0">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <Image
                    src={staff.image}
                    alt={staff.name}
                    width={100}
                    height={100}
                    className="rounded-full object-cover"
                  />
                  <div>
                    <CardTitle>{staff.name}</CardTitle>
                    <p className="text-sm text-gray-500">{staff.role}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{staff.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

