'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

const slides = [
  {
    title: "こぐち歯科の強み",
    content: "患者さん一人ひとりに寄り添った丁寧な治療と、地域密着型の親しみやすい雰囲気が特徴です。小口先生は、歯の美しさと機能を考慮した「トータルコーディネート」を重視しています。",
    image: "/img/members.jpg",
  },
  {
    title: "Smile, Support, Sincerity",
    content: "「素敵な笑顔を」「歯の悩みを支援」「誠実な治療」という3つの理念を掲げ、患者さんとの信頼関係を築き、長期的なお口の健康をサポートします。",
    image: "/img/member3.jpg",
  },
  {
    title: "おいしく食べる。そして笑顔。",
    content: "患者さんのQOL（生活の質）向上に貢献することを目指し、コミュニケーションを大切にしながら、信頼関係を築いていきます。プライバシーにも配慮し、安心して治療を受けていただけます。",
    image: "/img/interia1.jpg",
  },
]

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000) // Change slide every 5 seconds
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative h-[70vh] bg-primary overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            layout="fill"
            objectFit="cover"
            className="absolute inset-0"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50" />
          <div className="relative z-10 h-full flex flex-col justify-center items-center text-center text-white p-4">
            <h2 className="text-4xl font-bold mb-4">{slide.title}</h2>
            <p className="text-lg max-w-2xl mb-8">{slide.content}</p>
            <Button size="lg" className="bg-secondary hover:bg-secondary/90">
              予約する
            </Button>
          </div>
        </div>
      ))}
    </section>
  )
}

