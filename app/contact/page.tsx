import Link from "next/link"
import { ArrowLeft } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function Contact() {
  return (
    <div className="min-h-screen bg-muted">
      <div className="container mx-auto px-4 py-8">
        <Button variant="ghost" asChild className="mb-8">
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            トップページに戻る
          </Link>
        </Button>
        <div className="mx-auto max-w-2xl rounded-lg bg-background p-8 shadow-lg">
          <h1 className="mb-8 text-center text-3xl font-bold">お問い合わせ</h1>
          <form className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="company">会社名</Label>
              <Input id="company" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="name">
                担当者名 <span className="text-red-500">*</span>
              </Label>
              <Input id="name" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">
                メールアドレス <span className="text-red-500">*</span>
              </Label>
              <Input id="email" type="email" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">
                電話番号 <span className="text-red-500">*</span>
              </Label>
              <Input id="phone" type="tel" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">
                お問い合わせ内容 <span className="text-red-500">*</span>
              </Label>
              <Textarea id="message" rows={6} required />
            </div>
            <Button type="submit" className="w-full">
              送信する
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}

