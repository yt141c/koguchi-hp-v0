import Image from 'next/image'
import { Metadata } from 'next'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import DentalTreatmentsTable from '@/components/dental-treatments-table'
import AppointmentInfo from '@/components/AppointmentInfo'
import AccessMap from '@/components/AccessMap'

export const metadata: Metadata = {
  title: '診療案内 | こぐち歯科クリニック',
  description: 'こぐち歯科クリニックの診療案内ページです。一般歯科、審美歯科、ホワイトニング、義歯など、様々な治療について詳しく説明しています。',
}

const services = [
  {
    title: "一般歯科",
    description: "虫歯治療や歯周病の治療など、通常皆さんが歯科医院に通院した際に受ける治療の大半を指します。矯正歯科・口腔外科以外の治療が含まれます。",
    image: "/placeholder.svg?height=300&width=400"
  },
  {
    title: "審美歯科",
    description: "歯の機能を回復させることと、美しく健康的な歯にすることを目的としています。歯の外見だけでなく、噛む機能を回復させることが基本です。金属を使わない入れ歯（バネが見えない）も提供しています。",
    image: "/placeholder.svg?height=300&width=400"
  },
  {
    title: "ホワイトニング",
    description: "歯の漂白を行い、現在の歯よりも白くしたい方に最適です。主に「ホームホワイトニング」を推奨しています。歯科医師の指導のもと、自宅でマウスピースと薬剤を使用して行います。",
    image: "/placeholder.svg?height=300&width=400"
  },
  {
    title: "義歯（入れ歯）",
    description: "弾力性義歯：金属を使用しない、バネが見えない義歯です。審美的にも優れ、金属アレルギーの方にも使用可能です。金属床義歯：薄く作成でき、温度感覚があるため食事が美味しく感じられます。",
    image: "/placeholder.svg?height=300&width=400"
  },
  {
    title: "掌蹠膿疱症",
    description: "手のひらや足の裏に小さい膿疱が現れる症状です。金属アレルギーが原因の場合、金属を使わない治療を提案します。",
    image: "/placeholder.svg?height=300&width=400"
  }
]

export default function ServicesPage() {
  return (
    <main>
      {/* ヒーローセクション */}
      <section className="relative h-[35vh] bg-primary overflow-hidden">
        <Image
          src="/placeholder.svg?height=800&width=1200"
          alt="こぐち歯科クリニックの診療室"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center text-white p-4">
          <h1 className="text-4xl font-bold mb-4">診療案内</h1>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <section className="mb-12">
          <p className="text-gray-600 mb-4">
            いつまでもご自身の歯でお食事を楽しめるよう、当院では悪い歯の早期発見、早期治療はもちろんのこと、患者さんのお口の健康維持に努め、ご理解･ご協力を得ながら、信頼される歯科医療を目指していきたいと考えています。
          </p>
          <p className="text-gray-600 mb-4 font-semibold">
            矯正歯科に関しては、専門医を紹介します。インプラントの治療は行っていませんが、専門医を紹介します。
          </p>
          <p className="text-gray-600 mb-4">
            当医院では<span className="font-bold">自費治療</span>も取り扱っております。
            <a href="#self-pay-treatments" className="text-primary hover:underline">料金表はこちら</a>
          </p>
        </section>

        {services.map((service, index) => (
          <section key={index} className="mb-12">
            <Card>
              <CardHeader>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="w-full md:w-1/3 flex-shrink-0">
                    <Image
                      src={service.image}
                      alt={service.title}
                      width={300}
                      height={225}
                      className="rounded-lg object-cover w-full h-auto"
                    />
                  </div>
                  <div className="w-full md:w-2/3">
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>
        ))}

        <section className="mb-12">
          <p className="text-gray-600">
            必要に応じて、各項目の治療方法に関する詳細を相談できます。
          </p>
        </section>

        <section id="self-pay-treatments" className="mb-12">
          <h2 className="text-2xl font-bold mb-4">自費治療料金表</h2>
          <div className="overflow-hidden">
            <DentalTreatmentsTable />
          </div>
        </section>
      </div>
      <AppointmentInfo />
      <AccessMap />
    </main>
  )
}

