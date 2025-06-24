import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "SEO Audit Pro - Conversion Rate Optimizer & SEO Report Generator",
  description:
    "Get comprehensive SEO audits and conversion rate optimization reports for your landing pages. Improve your website performance with actionable insights.",
  keywords: "SEO audit, conversion rate optimization, website analysis, landing page optimization, SEO report",
  authors: [{ name: "SEO Audit Pro" }],
  creator: "SEO Audit Pro",
  publisher: "SEO Audit Pro",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://seoauditpro.com",
    title: "SEO Audit Pro - Conversion Rate Optimizer & SEO Report Generator",
    description: "Get comprehensive SEO audits and conversion rate optimization reports for your landing pages.",
    siteName: "SEO Audit Pro",
  },
  twitter: {
    card: "summary_large_image",
    title: "SEO Audit Pro - Conversion Rate Optimizer & SEO Report Generator",
    description: "Get comprehensive SEO audits and conversion rate optimization reports for your landing pages.",
    creator: "@seoauditpro",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="canonical" href="https://seoauditpro.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "SEO Audit Pro",
              description: "Comprehensive SEO audits and conversion rate optimization reports",
              applicationCategory: "BusinessApplication",
              operatingSystem: "Web",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
              },
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
