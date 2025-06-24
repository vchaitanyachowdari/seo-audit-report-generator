import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BackgroundAnimation } from "@/components/background-animation"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle, Star } from "lucide-react"
import Link from "next/link"

const plans = [
  {
    name: "Free Audit",
    price: "$0",
    description: "Perfect for getting started with website optimization",
    features: [
      "Complete SEO analysis",
      "Performance metrics",
      "Mobile optimization check",
      "Basic conversion recommendations",
      "PDF report delivery",
      "Email support",
    ],
    popular: false,
    cta: "Get Free Audit",
    href: "/#audit-form",
  },
  {
    name: "Pro Analysis",
    price: "$29",
    description: "Advanced insights for serious optimization",
    features: [
      "Everything in Free Audit",
      "Competitor analysis",
      "Advanced technical SEO",
      "Detailed conversion optimization",
      "Priority email support",
      "Monthly re-audits",
      "Custom recommendations",
    ],
    popular: true,
    cta: "Coming Soon",
    href: "#",
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Tailored solutions for large organizations",
    features: [
      "Everything in Pro Analysis",
      "Multiple website audits",
      "White-label reports",
      "API access",
      "Dedicated account manager",
      "Custom integrations",
      "SLA guarantee",
    ],
    popular: false,
    cta: "Contact Sales",
    href: "/contact",
  },
]

export default function Pricing() {
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
                Pricing
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold">
                Simple, Transparent
                <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                  {" "}
                  Pricing
                </span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Start with our free audit and upgrade when you need more advanced features. No hidden fees, no
                surprises.
              </p>
            </div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {plans.map((plan, index) => (
                <Card
                  key={plan.name}
                  className={`relative border-border/50 bg-card/50 backdrop-blur-sm ${
                    plan.popular ? "border-primary/50 shadow-lg scale-105" : ""
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-primary text-primary-foreground">
                        <Star className="w-3 h-3 mr-1" />
                        Most Popular
                      </Badge>
                    </div>
                  )}

                  <CardHeader className="text-center pb-8">
                    <CardTitle className="text-2xl">{plan.name}</CardTitle>
                    <div className="mt-4">
                      <span className="text-4xl font-bold">{plan.price}</span>
                      {plan.price !== "Custom" && plan.price !== "$0" && (
                        <span className="text-muted-foreground">/month</span>
                      )}
                    </div>
                    <CardDescription className="mt-4">{plan.description}</CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-6">
                    <ul className="space-y-3">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-3">
                          <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Button
                      asChild
                      className={`w-full ${
                        plan.popular
                          ? "bg-gradient-to-r from-primary to-primary/80"
                          : "bg-background text-foreground border border-border hover:bg-muted"
                      }`}
                      disabled={plan.cta === "Coming Soon"}
                    >
                      <Link href={plan.href}>{plan.cta}</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl md:text-4xl font-bold">Frequently Asked Questions</h2>
              <p className="text-xl text-muted-foreground">Common questions about our pricing and plans</p>
            </div>

            <div className="max-w-3xl mx-auto space-y-6">
              <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-lg">Is the free audit really free?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Yes, absolutely! Our free audit provides comprehensive SEO and performance analysis with no hidden
                    costs or credit card required. You'll receive a detailed PDF report within 2 hours.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-lg">When will Pro Analysis be available?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We're currently developing our Pro Analysis features and expect to launch in Q2 2024. Sign up for
                    our newsletter to be notified when it becomes available.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-lg">Can I upgrade or downgrade my plan?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Once our paid plans are available, you'll be able to upgrade or downgrade at any time. Changes will
                    be prorated and reflected in your next billing cycle.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
