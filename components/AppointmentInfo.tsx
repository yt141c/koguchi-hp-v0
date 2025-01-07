import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Button } from '@/components/ui/button'
import { Phone } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function AppointmentInfo() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center">診療時間・予約案内</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="text-center">診療時間</TableHead>
                  <TableHead className="text-center">月</TableHead>
                  <TableHead className="text-center">火</TableHead>
                  <TableHead className="text-center">水</TableHead>
                  <TableHead className="text-center">木</TableHead>
                  <TableHead className="text-center">金</TableHead>
                  <TableHead className="text-center">土</TableHead>
                  <TableHead className="text-center">日祝</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="text-center">9:00-13:00</TableCell>
                  <TableCell className="text-center">○</TableCell>
                  <TableCell className="text-center">○</TableCell>
                  <TableCell className="text-center">○</TableCell>
                  <TableCell className="text-center">○</TableCell>
                  <TableCell className="text-center">○</TableCell>
                  <TableCell className="text-center">○</TableCell>
                  <TableCell className="text-center">-</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="text-center">15:00-19:00</TableCell>
                  <TableCell className="text-center">○</TableCell>
                  <TableCell className="text-center">○</TableCell>
                  <TableCell className="text-center">○</TableCell>
                  <TableCell className="text-center">○</TableCell>
                  <TableCell className="text-center">○</TableCell>
                  <TableCell className="text-center">-</TableCell>
                  <TableCell className="text-center">-</TableCell>
                </TableRow>
              </TableBody>
            </Table>
            <p className="text-center mt-4 mb-8 text-gray-600">※木曜午後、土曜午後、日曜、祝日は休診</p>
            <div className="text-center">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90">
                <Phone className="mr-2 h-5 w-5" /> 03-1234-5678
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

