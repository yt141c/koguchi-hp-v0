import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

const testimonials = [
  {
    name: "佐藤さん（32歳）",
    content: "丁寧な説明と痛みの少ない治療で、歯医者嫌いだった私も安心して通えるようになりました。",
    avatar: "/avatar1.jpg"
  },
  {
    name: "田中さん（45歳）",
    content: "予防歯科に力を入れている点が素晴らしいです。定期的なクリーニングで歯の健康が維持できています。",
    avatar: "/avatar2.jpg"
  },
  {
    name: "鈴木さん（28歳）",
    content: "最新の設備で治療が速く、効果的です。仕事の合間に通いやすいのも助かっています。",
    avatar: "/avatar3.jpg"
  },
  {
    name: "山田さん（50歳）",
    content: "長年の歯の悩みを解決していただき、人生が変わりました。笑顔に自信が持てるようになりました。",
    avatar: "/avatar4.jpg"
  }
]

export default function Testimonials() {
  return (
    <section className="py-16 bg-white overflow-hidden">
      <h2 className="text-2xl font-bold text-center mb-8">患者様の声</h2>
      <div className="flex overflow-x-auto pb-8 px-4 -mx-4 scrollbar-hide md:mx-auto hidden-scrollbar">
        <div className="flex space-x-6 md:mx-auto mx-4">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="w-80 flex-shrink-0">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Avatar className="mr-2">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                  </Avatar>
                  {testimonial.name}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>{testimonial.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

