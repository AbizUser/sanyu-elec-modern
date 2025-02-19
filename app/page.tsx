import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Building2, CheckCircle, Phone, Wrench, Zap } from "lucide-react"
import ContactForm from "./components/contact-form"
import ServiceCard from "./components/service-card"

export default function Page() {
  return (
    <div className="min-h-screen">
      {/* ヘッダー */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Zap className="w-8 h-8 text-yellow-500" />
            <span className="text-xl font-bold">電気工事株式会社</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#services" className="hover:text-primary">
              サービス
            </a>
            <a href="#strengths" className="hover:text-primary">
              特徴
            </a>
            <a href="#works" className="hover:text-primary">
              実績
            </a>
            <a href="#contact" className="hover:text-primary">
              お問い合わせ
            </a>
          </nav>
          <Button>
            <Phone className="w-4 h-4 mr-2" />
            0120-XXX-XXX
          </Button>
        </div>
      </header>

      {/* ヒーローセクション */}
      <section className="bg-gradient-to-br from-blue-50 to-yellow-50 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            安心・安全な電気設備工事を
            <br />
            ご提供いたします
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            創業30年の実績と信頼。あらゆる電気設備のニーズにお応えします。
          </p>
          <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600">
            お問い合わせはこちら
          </Button>
        </div>
      </section>

      {/* サービス */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">サービス内容</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <ServiceCard icon={Building2} title="商業施設" description="店舗・オフィスビルの電気設備工事" />
            <ServiceCard icon={Wrench} title="保守・メンテナンス" description="定期点検・修理・改修工事" />
            <ServiceCard icon={Zap} title="省エネ提案" description="LED化・省エネ機器の導入支援" />
          </div>
        </div>
      </section>

      {/* 特徴 */}
      <section id="strengths" className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">当社の特徴</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">24時間365日対応</h3>
                    <p className="text-muted-foreground">
                      緊急時でも迅速に対応いたします。お客様の事業を止めないための体制を整えています。
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">資格保有者多数</h3>
                    <p className="text-muted-foreground">
                      電気工事士、電気主任技術者など、専門資格を持つスタッフが在籍しています。
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 実績 */}
      <section id="works" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">施工実績</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="rounded-lg overflow-hidden shadow-lg">
                <img
                  src={`/placeholder.svg?height=200&width=400`}
                  alt={`施工事例 ${i}`}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold mb-2">大規模商業施設の電気設備工事</h3>
                  <p className="text-sm text-muted-foreground">照明設備・動力設備・防災設備の施工を行いました。</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* お問い合わせ */}
      <section id="contact" className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">お問い合わせ</h2>
          <div className="max-w-xl mx-auto">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* フッター */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Zap className="w-6 h-6 text-yellow-500" />
                <span className="text-lg font-bold">電気株式会社</span>
              </div>
              <p className="text-gray-400">
                〒XXX-XXXX
                <br />
                埼玉県○○市○○1-1-1
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">お問い合わせ</h3>
              <p className="text-gray-400">
                TEL: 0120-XXX-XXX
                <br />
                FAX: 03-XXXX-XXXX
                <br />
                Email: info@example.com
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">営業時間</h3>
              <p className="text-gray-400">
                平日 9:00-18:00
                <br />
                ※緊急時は24時間対応
              </p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 電気株式会社 All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

