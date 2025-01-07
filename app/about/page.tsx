import Image from 'next/image'
import { Metadata } from 'next'
import { Button } from '@/components/ui/button'
import AppointmentInfo from '@/components/AppointmentInfo'
import AccessMap from '@/components/AccessMap'

export const metadata: Metadata = {
  title: '医院紹介 | こぐち歯科',
  description: 'こぐち歯科の医院紹介ページです。院長紹介、診療理念、設備紹介などの情報をご覧いただけます。koguchishika.com',
}

export default function AboutPage() {
  return (
    <>
      <main>
        {/* ヒーローセクション */}
        <section className="relative h-[35vh] bg-primary overflow-hidden">
          <Image
            src="/placeholder.svg?height=800&width=1200"
            alt="こぐち歯科クリニックの外観"
            layout="fill"
            objectFit="cover"
            className="absolute inset-0"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50" />
          <div className="relative z-10 h-full flex flex-col justify-center items-center text-center text-white p-4">
            <h1 className="text-4xl font-bold mb-4">安心・信頼の歯科医療</h1>
          </div>
        </section>

        <div className="container mx-auto px-4">
          {/* 院長紹介 */}
          <section className="py-16">
            <h2 className="text-2xl font-bold mb-8">院長紹介</h2>
            <div className="flex flex-col md:flex-row items-start gap-8">
              <Image
                src="/placeholder.svg?height=300&width=300"
                alt="院長 小口克則"
                width={300}
                height={300}
                className="rounded-lg"
              />
              <div>
                <h3 className="text-xl font-semibold mb-2">院長：小口克則</h3>
                <h4 className="text-lg font-medium mb-2">経歴・資格</h4>
                <ul className="list-disc list-inside mb-4">
                  <li>明海大学歯学部 卒業</li>
                  <li>1990年 こぐち歯科 開院</li>
                  <li>日本歯科審美学会会員</li>
                </ul>
                <h4 className="text-lg font-medium mb-2">院長からのメッセージ</h4>
                <div className="text-gray-600 space-y-4">
                  <p>こぐち歯科 院長、小口克則です。</p>

                  <p className="font-semibold text-primary">このホームページで伝えたいこと。</p>
                  <p>歯、お口に不安のある方の気持ちを少しでも取り除いてあげたい。</p>

                  <p>痛い、怖いと思う前に近くの歯医者さんに行こうと思う動機付けになればと思い、ホームページを立ち上げました。
                    まずは一人で悩んでいないで歯医者さんに相談してみてはいかがですか。</p>

                  <p>皆さんの大切な歯の健康を守りいつまでもご自分の歯で噛める、また入れ歯でも長く噛み続けられる様、お手伝いが出来ればと思います。</p>

                  <p className="font-semibold text-primary">おいしく食べる。そして笑顔。</p>
                  <p>素敵なことです。
                    そうした方々が少しでも増えていくことが私の喜びです。</p>

                  <p>歯の事や治療について少しでも疑問に思う事があれば遠慮なく質問してください。</p>
                </div>
              </div>
            </div>
          </section>

          <div className="w-full h-px bg-gray-200"></div>

          {/* 診療理念・治療方針 */}
          <section className="py-16">
            <h2 className="text-2xl font-bold mb-8">診療理念・治療方針</h2>
            <div className="text-gray-600 space-y-4">
              <p>
                こぐち歯科では、<span className="font-semibold text-primary">患者さまの安心と満足を第一に考えた医療サービス</span>を提供しています。
                私たちは以下の2つの柱を軸に、心のこもった診療を行っています：
              </p>
              <div className="pl-4 border-l-4 border-primary">
                <h3 className="font-semibold text-lg mb-2">1. 丁寧でわかりやすい説明</h3>
                <p>
                  専門用語を避け、視覚資料を用いながら、患者さまが理解しやすいように説明いたします。
                  不安や疑問を解消し、安心して治療に臨んでいただけるよう努めています。
                </p>
              </div>
              <div className="pl-4 border-l-4 border-primary">
                <h3 className="font-semibold text-lg mb-2">2. 正確な診察、確実な診療</h3>
                <p>
                  最新の設備と技術を駆使し、精密な診断と確実な治療を提供します。
                  一人ひとりの患者さまに最適な治療計画を立て、確実に実行していきます。
                </p>
              </div>
              <p className="mt-4">
                <span className="font-semibold">予防歯科にも力を入れています。</span>
                歯が痛くなってからではなく、定期的な検診やクリーニングで、問題を早期に発見し対処することが重要です。
                早期発見・早期治療は、患者さまの負担を軽減し、健康な歯を長く保つための鍵となります。
              </p>
              <p>
                <span className="font-semibold text-primary">健康な歯は、豊かな人生の基盤です。</span>
                おいしく食事を楽しみ、自信を持って笑顔になれる、そんな毎日をサポートすることが私たちの喜びです。
                どうぞお気軽にご来院ください。皆さまのお越しを心よりお待ちしております。
              </p>
            </div>
          </section>

          <div className="w-full h-px bg-gray-200"></div>

          {/* 設備紹介 */}
          <section className="py-16">
            <h2 className="text-2xl font-bold mb-8">設備紹介</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-2">デジタルレントゲン</h3>
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="デジタルレントゲン"
                  width={400}
                  height={300}
                  className="rounded-lg mb-2"
                />
                <ul className="list-disc list-inside text-gray-600">
                  <li>従来のレントゲンと比べ放射線量を大幅にカット</li>
                  <li>その場で画像を確認でき、モニターで拡大して詳しく説明可能</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">滅菌システム</h3>
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="滅菌システム"
                  width={400}
                  height={300}
                  className="rounded-lg mb-2"
                />
                <ul className="list-disc list-inside text-gray-600">
                  <li>治療器具は全て滅菌処理を実施</li>
                  <li>衛生管理を徹底し、安心して治療を受けていただける環境を整備</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">口腔内カメラ</h3>
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="口腔内カメラ"
                  width={400}
                  height={300}
                  className="rounded-lg mb-2"
                />
                <ul className="list-disc list-inside text-gray-600">
                  <li>お口の中を撮影し、モニターで確認しながら現状説明</li>
                  <li>治療方針の提案をビジュアルでわかりやすく説明</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </main>
      <AppointmentInfo />
      <AccessMap />
    </>
  )
}

