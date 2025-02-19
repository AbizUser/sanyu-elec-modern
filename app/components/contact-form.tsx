"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"

export default function ContactForm() {
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    // ここに実際の送信処理を実装
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setLoading(false)
    alert("お問い合わせを受け付けました。")
  }

  return (
    <Card>
      <CardContent className="p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name">お名前</Label>
            <Input id="name" required />
          </div>

          <div className="space-y-2">
            <Label htmlFor="company">会社名</Label>
            <Input id="company" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">メールアドレス</Label>
            <Input id="email" type="email" required />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">電話番号</Label>
            <Input id="phone" type="tel" required />
          </div>

          <div className="space-y-2">
            <Label>お問い合わせ種別</Label>
            <RadioGroup defaultValue="estimate">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="estimate" id="estimate" />
                <Label htmlFor="estimate">お見積り</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="consultation" id="consultation" />
                <Label htmlFor="consultation">ご相談</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="other" id="other" />
                <Label htmlFor="other">その他</Label>
              </div>
            </RadioGroup>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">お問い合わせ内容</Label>
            <Textarea id="message" required className="min-h-[120px]" />
          </div>

          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? "送信中..." : "送信する"}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}

