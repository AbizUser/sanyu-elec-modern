import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Building2, FlashlightIcon as Flash, Lightbulb, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">

      {/* ヒーローセクション */}
      <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden bg-black ">
        <div className="absolute inset-0 z-0">
          <Image
            src="/urban-skyline.jpg?height=1080&width=1920"
            alt="電気工事現場"
            width={1920}
            height={1080}
            className="h-full w-full object-cover opacity-50"
            priority
          />
        </div>
        <div className="container relative z-10 mx-auto px-4 text-center text-white">
          <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl ">
            確かな技術で、
            <br />
            未来を明るく照らす
          </h1>
          <p className="mb-8 text-lg text-gray-300 sm:text-xl">
            創業60年の実績と信頼。あらゆる電気設備工事に対応します。
          </p>
          <Button asChild size="lg" className="bg-white text-black hover:bg-gray-100">
            <Link href="#contact">
              お問い合わせ <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* サービス紹介 */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tight sm:text-4xl">提供サービス</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardContent className="flex flex-col items-center p-6">
                <Building2 className="mb-4 h-12 w-12 text-primary" />
                <h3 className="mb-2 text-xl font-semibold">ビル設備工事</h3>
                <p className="text-center text-muted-foreground">
                  オフィスビルや商業施設の電気設備工事を手掛けています。
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex flex-col items-center p-6">
                <Flash className="mb-4 h-12 w-12 text-primary" />
                <h3 className="mb-2 text-xl font-semibold">受変電設備</h3>
                <p className="text-center text-muted-foreground">
                  高圧受電設備の設計・施工から保守点検まで対応します。
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex flex-col items-center p-6">
                <Lightbulb className="mb-4 h-12 w-12 text-primary" />
                <h3 className="mb-2 text-xl font-semibold">LED照明工事</h3>
                <p className="text-center text-muted-foreground">省エネ効果の高いLED照明の導入をサポートします。</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 会社概要 */}
      <section className="bg-muted py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tight sm:text-4xl">会社概要</h2>
          <div className="mx-auto max-w-3xl space-y-8">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="font-semibold">社名</div>
              <div>三友電業社</div>
              <div className="font-semibold">設立</div>
              <div>19XX年4月</div>
              <div className="font-semibold">資本金</div>
              <div>2,000万円</div>
              <div className="font-semibold">従業員数</div>
              <div>10名</div>
              <div className="font-semibold">所在地</div>
              <div>〒000-0000 埼玉県三郷市東町1-1-1</div>
              <div className="font-semibold">資格</div>
              <div>
                第一種電気工事士 5名
                <br />
                第二種電気工事士 1名
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 実績紹介 */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tight sm:text-4xl">施工実績</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="overflow-hidden rounded-lg">
                <Image
                  src={`/placeholder.png?height=400&width=600`}
                  alt={`施工実績 ${i}`}
                  width={600}
                  height={400}
                  className="h-48 w-full object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="p-4">
                  <h3 className="mb-2 font-semibold">〇〇ビル電気設備工事</h3>
                  <p className="text-sm text-muted-foreground">受変電設備更新、LED照明導入、配線工事一式</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* お問い合わせ */}
      <section id="contact" className="bg-primary py-16 text-primary-foreground md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-12 text-3xl font-bold tracking-tight sm:text-4xl">お問い合わせ</h2>
          <div className="mx-auto max-w-lg">
            <div className="mb-8 flex items-center justify-center gap-4">
              <Phone className="h-6 w-6" />
              <span className="text-2xl font-semibold">03-0000-0000</span>
            </div>
            <p className="mb-8">
              お電話でのお問い合わせは平日9:00〜18:00で承っております。
              <br />
              メールでのお問い合わせは24時間受付中です。
            </p>
            <Button size="lg" variant="secondary" className="w-full max-w-sm" asChild>
              <Link href="/contact">
                メールでのお問い合わせ <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* フッター */}
      <footer className="border-t py-8">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>© 2025 三友電業社 All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  )
}

