import Image from 'next/image'
import { Metadata } from 'next'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import AppointmentInfo from '@/components/AppointmentInfo'
import AccessMap from '@/components/AccessMap'

export const metadata: Metadata = {
  title: '初診の方へ | こぐち歯科クリニック',
  description: 'こぐち歯科クリニックの初診の方向けの情報ページです。診療の流れ、費用、個人情報の取り扱いについてご案内しています。',
}

const steps = [
  { title: '受付', content: '保険証のご提示、問診票の記入、気になる点やご質問のメモをお願いします。' },
  { title: '問診', content: '症状の診査、治療方針の説明、費用や治療期間についての説明を行います。' },
  { title: '応急処置', content: '緊急を要する場合に実施します。患者さんの状況に応じて迅速に対応します。' },
  { title: '検査', content: '口腔内写真撮影、レントゲン撮影、歯周病検査を行います。' },
  { title: '治療計画の説明', content: '検査結果に基づく治療内容の説明、ご不明点やご不安な点のご相談を承ります。' },
  { title: '治療開始', content: '治療計画へのご同意後、治療を開始します。' },
  { title: '治療完了後のチェック', content: '治療箇所の確認、歯茎の状態チェック、クリーニングを行います。' },
  { title: '定期検診の推奨', content: '良好な口腔内環境維持のための定期検診のご案内をいたします。' },
]

export default function FirstVisitPage() {
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
          <h1 className="text-4xl font-bold mb-4">初診の方へ</h1>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">ご予約のお願い</h2>
          <p className="text-gray-600">
            当院では予約制と飛び込み診療を受け付けておりますが、スムーズな診療のため、事前の電話連絡をお願いしております。特に初診の方は、ご来院前にお電話いただけますと幸いです。
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">初診時の費用</h2>
          <Card>
            <CardHeader>
              <CardTitle>初診費用（保険3割負担の場合）</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-primary mb-4">約3,800円前後</p>
              <ul className="list-disc list-inside text-sm text-gray-600">
                <li>初診費用</li>
                <li>口腔内検査</li>
                <li>管理費用</li>
                <li>レントゲン検査</li>
                <li>口腔内写真撮影費用</li>
              </ul>
              <p className="text-xs text-gray-400 mt-4">
                ※急性の痛みを伴う治療など、症状により費用が変動する場合があります
              </p>
            </CardContent>
          </Card>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">初診の流れ</h2>
          <div className="space-y-4">
            {steps.map((step, index) => (
              <div key={index} className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold text-xl">
                  {index + 1}
                </div>
                <div className="ml-4 flex-grow">
                  <h3 className="text-xl font-semibold">{step.title}</h3>
                  <p className="text-gray-600">{step.content}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">個人情報の取り扱いについて</h2>
          <p className="mb-2">当院では、以下の目的で個人情報を利用させていただきます：</p>
          <ul className="list-disc list-inside text-sm text-gray-600">
            <li>当院での医療サービスの提供</li>
            <li>他の医療機関との連携</li>
            <li>他医療機関からの照会への回答</li>
            <li>外部医療機関への意見・助言の依頼</li>
            <li>検体検査業務等の委託</li>
            <li>ご家族への病状説明</li>
            <li>その他、医療提供に関する利用</li>
          </ul>
        </section>

      </div>
      <AppointmentInfo />
      <AccessMap />
    </main>
  )
}

