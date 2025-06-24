"use client"

import { motion } from "framer-motion"
import { AuditForm } from "@/components/audit-form"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Zap } from "lucide-react"

const stats = [
  { label: "Websites Analyzed", value: "10,000+" },
  { label: "Average CRO Improvement", value: "34%" },
  { label: "SEO Issues Found", value: "50,000+" },
]

const benefits = [
  "Comprehensive SEO Analysis",
  "Conversion Rate Optimization",
  "Performance Metrics",
  "Actionable Recommendations",
]

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                <Zap className="w-3 h-3 mr-1" />
                Free SEO Audit Tool
              </Badge>

              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
                  Optimize Your
                </span>
                <br />
                <span className="text-foreground">Landing Pages</span>
                <br />
                <span className="bg-gradient-to-r from-primary/80 to-primary bg-clip-text text-transparent">
                  Like a Pro
                </span>
              </h1>

              <p className="text-xl text-muted-foreground max-w-lg">
                Get comprehensive SEO audits and conversion rate optimization reports delivered to your inbox within 2
                hours. Completely free.
              </p>
            </div>

            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="flex items-center space-x-3"
                >
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="text-muted-foreground">{benefit}</span>
                </motion.div>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-2xl font-bold text-primary">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10 blur-3xl rounded-full" />
            <div className="relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 shadow-2xl">
              <AuditForm />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
