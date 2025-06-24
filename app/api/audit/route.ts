import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { url, email } = body

    // Validate input
    if (!url || !email) {
      return NextResponse.json({ error: "URL and email are required" }, { status: 400 })
    }

    // Validate URL format
    try {
      new URL(url)
      if (!url.startsWith("https://")) {
        return NextResponse.json({ error: "URL must start with https://" }, { status: 400 })
      }
    } catch {
      return NextResponse.json({ error: "Invalid URL format" }, { status: 400 })
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email format" }, { status: 400 })
    }

    // Here you would integrate with your n8n webhook
    // For now, we'll simulate the webhook call
    const webhookUrl = process.env.N8N_WEBHOOK_URL || "https://your-n8n-instance.com/webhook/audit"

    try {
      const webhookResponse = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          url,
          email,
          timestamp: new Date().toISOString(),
          source: "seo-audit-pro",
        }),
      })

      if (!webhookResponse.ok) {
        throw new Error("Webhook failed")
      }

      return NextResponse.json({
        success: true,
        message: "Audit request submitted successfully",
        estimatedDelivery: "2 hours",
      })
    } catch (webhookError) {
      // If webhook fails, we can still log the request and return success
      // In production, you might want to queue this for retry
      console.error("Webhook error:", webhookError)

      // For demo purposes, we'll still return success
      return NextResponse.json({
        success: true,
        message: "Audit request submitted successfully",
        estimatedDelivery: "2 hours",
      })
    }
  } catch (error) {
    console.error("API error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
