import React from 'react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const dentalTreatments = {
  "dental_treatments": {
    "歯冠修復": {
      "支台（コア）": [
        { "name": "金パラコア", "price": "1万円" },
        { "name": "20Kゴールドコア", "price": "3万円～5万円" },
        { "name": "ファイバーポストコア", "price": "1万円" }
      ],
      "部分的な詰め物（インレー）": [
        { "name": "20Kゴールドインレー", "price": "5万円" },
        { "name": "ハイブリッドセラミックインレー", "price": "5万円" },
        { "name": "セラミック CAD", "price": "5万円" },
        { "name": "e.max CAD", "price": "5万円" },
        { "name": "ジルコニア CAD", "price": "5万円" }
      ],
      "部分的な詰め物（4/5冠）": [
        { "name": "20Kゴールド", "price": "6万円" },
        { "name": "ハイブリッドセラミック", "price": "6万円" }
      ],
      "被せもの（クラウン）": [
        { "name": "ハイブリッドレジン CAD", "price": "5万円" },
        { "name": "20Kゴールドクラウン", "price": "8万円" },
        { "name": "セラミック CAD", "price": "10万円" },
        { "name": "e.max CAD", "price": "10万円" },
        { "name": "ジルコニア CAD", "price": "10万円" },
        { "name": "e.max カットバック／レイヤリング", "price": "12万円" },
        { "name": "メタルボンドセラミッククラウン", "price": "12万円" },
        { "name": "カタナジルコニア CAD", "price": "14万円" },
        { "name": "ジルコボンドセラミッククラウン", "price": "14万円" }
      ]
    },
    "有床義歯": {
      "部分入れ歯（部分義歯）": [
        { "name": "コバルトクロム金属床", "price": "30万円" },
        { "name": "バルプラスト床", "price": "25万円" },
        { "name": "バルプラスト金属床", "price": "35万円" },
        { "name": "エステショット床", "price": "25万円" },
        { "name": "エステショット金属床", "price": "35万円" }
      ],
      "総入れ歯（総義歯）": [
        { "name": "コバルトクロム床", "price": "上顎: 35万円, 下顎: 30万円" },
        { "name": "チタン床", "price": "上顎: 40万円, 下顎: 35万円" },
        { "name": "金合金床", "price": "上顎: 70万円, 下顎: 70万円" },
        { "name": "白金加金床", "price": "上顎: 100万円, 下顎: 100万円" }
      ]
    },
    "ホワイトニング": {
      "ホームホワイトニング": [
        { "name": "上顎マウスピース", "price": "1万円" },
        { "name": "下顎マウスピース", "price": "1万円" },
        { "name": "薬剤4本", "price": "2万円" }
      ]
    }
  }
}

const DentalTreatmentsTable: React.FC = () => {
  return (
    <div>
      {Object.entries(dentalTreatments.dental_treatments).map(([category, subcategories]) => (
        <Card key={category} className="mb-6 overflow-x-auto">
          <CardHeader>
            <CardTitle>{category}</CardTitle>
          </CardHeader>
          <CardContent>
            {Object.entries(subcategories).map(([subcategory, treatments]) => (
              <div key={subcategory} className="mb-4">
                <h3 className="text-lg font-semibold mb-2">{subcategory}</h3>
                <Table className="w-full">
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-2/3">治療名</TableHead>
                      <TableHead className="w-1/3 text-right">価格</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {Array.isArray(treatments) ? (
                      treatments.map((treatment, index) => (
                        <TableRow key={index}>
                          <TableCell>{treatment.name}</TableCell>
                          <TableCell className="text-right">{treatment.price}</TableCell>
                        </TableRow>
                      ))
                    ) : (
                      <TableRow>
                        <TableCell colSpan={2}>{treatments}</TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </div>
            ))}
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

export default DentalTreatmentsTable

