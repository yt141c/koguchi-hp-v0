import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function FAQ() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-8">よくある質問</h2>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>初診の際に必要なものは何ですか？</AccordionTrigger>
            <AccordionContent>
              初診の際は、健康保険証と診察券（お持ちの方）をご持参ください。また、現在服用中のお薬がある場合は、お薬手帳もあるとより安全な治療が可能です。
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>予約は必要ですか？</AccordionTrigger>
            <AccordionContent>
              スムーズな診療のため、できる限り予約をお願いしています。ただし、急な痛みなどの緊急時は、お電話でご相談ください。可能な限り対応いたします。
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>支払方法は何がありますか？</AccordionTrigger>
            <AccordionContent>
              現金、クレジットカード（VISA、MasterCard、JCB）、電子マネー（交通系ICカード、QRコード決済）に対応しています。
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  )
}

