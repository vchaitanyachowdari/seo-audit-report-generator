"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Send, Cog, Mail, CheckCircle } from "lucide-react"

const steps = [
  {
    icon: Send,
    title: "Submit Your URL",
    description: "Enter your landing page URL and email address in our simple form.",
    step: "01",
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
  },
  {
    icon: Cog,
    title: "AI Analysis",
    description: "Our advanced AI analyzes your page for SEO, performance, and conversion issues.",
    step: "02",
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
  },
  {
    icon: Mail,
    title: "Report Generation",
    description: "A comprehensive PDF report is generated with actionable recommendations.",
    step: "03",
    color: "text-green-500",
    bgColor: "bg-green-500/10",
  },
  {
    icon: CheckCircle,
    title: "Receive Results",
    description: "Get your detailed audit report delivered to your inbox within 2 hours.",
    step: "04",
    color: "text-orange-500",
    bgColor: "bg-orange-500/10",
  },
]

export function HowItWorks() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 mb-16"
        >
          <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
            How It Works
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold">
            Get Your Audit in
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              {" "}
              4 Simple Steps
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our streamlined process makes it easy to get comprehensive insights about your landing page performance and
            optimization opportunities.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative"
            >
              <Card className="h-full text-center p-6 border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300 group hover:scale-105">
                <CardContent className="space-y-4">
                  <div className="relative">
                    <div
                      className={`w-16 h-16 rounded-full ${step.bgColor} flex items-center justify-center mx-auto group-hover:scale-110 transition-transform`}
                    >
                      <step.icon className={`w-8 h-8 ${step.color}`} />
                    </div>
                    <Badge variant="secondary" className="absolute -top-2 -right-2 bg-primary text-primary-foreground">
                      {step.step}
                    </Badge>
                  </div>
                  <h3 className="text-xl font-semibold">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>

              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-primary/50 to-transparent" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
