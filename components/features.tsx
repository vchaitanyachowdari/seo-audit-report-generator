"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Search, TrendingUp, Gauge, Shield, Smartphone, BarChart3, Zap, Target, Globe } from "lucide-react"

const features = [
  {
    icon: Search,
    title: "SEO Analysis",
    description: "Comprehensive SEO audit including meta tags, keywords, and technical SEO issues.",
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
  },
  {
    icon: TrendingUp,
    title: "Conversion Optimization",
    description: "Identify conversion bottlenecks and get actionable recommendations to improve CRO.",
    color: "text-green-500",
    bgColor: "bg-green-500/10",
  },
  {
    icon: Gauge,
    title: "Performance Metrics",
    description: "Detailed performance analysis including Core Web Vitals and loading speeds.",
    color: "text-orange-500",
    bgColor: "bg-orange-500/10",
  },
  {
    icon: Shield,
    title: "Security Audit",
    description: "Check for security vulnerabilities and SSL certificate status.",
    color: "text-red-500",
    bgColor: "bg-red-500/10",
  },
  {
    icon: Smartphone,
    title: "Mobile Optimization",
    description: "Mobile-first analysis to ensure your site works perfectly on all devices.",
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
  },
  {
    icon: BarChart3,
    title: "Detailed Reports",
    description: "Get comprehensive PDF reports with visual charts and actionable insights.",
    color: "text-indigo-500",
    bgColor: "bg-indigo-500/10",
  },
  {
    icon: Zap,
    title: "Fast Analysis",
    description: "Get your complete audit report delivered within 2 hours of submission.",
    color: "text-yellow-500",
    bgColor: "bg-yellow-500/10",
  },
  {
    icon: Target,
    title: "Competitor Analysis",
    description: "Compare your site against top competitors in your industry.",
    color: "text-pink-500",
    bgColor: "bg-pink-500/10",
  },
  {
    icon: Globe,
    title: "Global Insights",
    description: "Multi-region performance analysis and international SEO recommendations.",
    color: "text-cyan-500",
    bgColor: "bg-cyan-500/10",
  },
]

export function Features() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold">
            Powerful Features for
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              {" "}
              Complete Analysis
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our comprehensive audit tool analyzes every aspect of your landing page to provide actionable insights for
            better performance and conversions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 border-border/50 bg-card/50 backdrop-blur-sm group hover:scale-105">
                <CardHeader>
                  <div
                    className={`w-12 h-12 rounded-lg ${feature.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                  >
                    <feature.icon className={`w-6 h-6 ${feature.color}`} />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
