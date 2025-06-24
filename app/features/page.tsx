import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BackgroundAnimation } from "@/components/background-animation"
import { Features } from "@/components/features"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const detailedFeatures = [
  {
    category: "SEO Analysis",
    features: [
      "Meta tags optimization",
      "Keyword density analysis",
      "Internal linking structure",
      "Schema markup validation",
      "Robots.txt analysis",
      "XML sitemap validation",
    ],
  },
  {
    category: "Performance Optimization",
    features: [
      "Core Web Vitals assessment",
      "Page load speed analysis",
      "Image optimization recommendations",
      "CSS and JavaScript minification",
      "Caching strategy suggestions",
      "CDN implementation advice",
    ],
  },
  {
    category: "Conversion Rate Optimization",
    features: [
      "Call-to-action analysis",
      "Form optimization suggestions",
      "User experience evaluation",
      "Mobile conversion optimization",
      "A/B testing recommendations",
      "Landing page best practices",
    ],
  },
  {
    category: "Technical SEO",
    features: [
      "SSL certificate validation",
      "Mobile-friendliness check",
      "Structured data analysis",
      "Canonical URL validation",
      "Redirect chain analysis",
      "HTTP status code review",
    ],
  },
]

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <BackgroundAnimation />
      <Header />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-6 max-w-4xl mx-auto">
              <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                Features
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold">
                Everything You Need for
                <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                  {" "}
                  Complete Optimization
                </span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Our comprehensive audit tool analyzes every aspect of your website to provide actionable insights for
                better performance, higher rankings, and increased conversions.
              </p>
            </div>
          </div>
        </section>

        {/* Main Features */}
        <Features />

        {/* Detailed Features */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl md:text-4xl font-bold">Detailed Feature Breakdown</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Get a comprehensive analysis across all critical areas of your website performance
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {detailedFeatures.map((category, index) => (
                <Card key={category.category} className="border-border/50 bg-card/50 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-xl">{category.category}</CardTitle>
                    <CardDescription>Comprehensive analysis and recommendations</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {category.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-3">
                          <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-6 max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold">Ready to Optimize Your Website?</h2>
              <p className="text-xl text-muted-foreground">
                Get your free comprehensive audit report and start improving your website performance today.
              </p>
              <Button asChild size="lg" className="bg-gradient-to-r from-primary to-primary/80">
                <Link href="/#audit-form">
                  Get Free Audit Report
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
