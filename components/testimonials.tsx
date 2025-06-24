"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Marketing Director",
    company: "TechStart Inc.",
    avatar: "/placeholder.svg?height=40&width=40",
    content:
      "SEO Audit Pro helped us identify critical issues that were hurting our conversion rates. After implementing their recommendations, we saw a 45% increase in leads!",
    rating: 5,
    improvement: "+45% Conversion Rate",
  },
  {
    name: "Michael Chen",
    role: "E-commerce Manager",
    company: "ShopFlow",
    avatar: "/placeholder.svg?height=40&width=40",
    content:
      "The detailed SEO analysis was incredibly thorough. We fixed the technical issues they found and our organic traffic doubled within 3 months.",
    rating: 5,
    improvement: "+120% Organic Traffic",
  },
  {
    name: "Emily Rodriguez",
    role: "Digital Marketing Specialist",
    company: "GrowthLab",
    avatar: "/placeholder.svg?height=40&width=40",
    content:
      "Best free SEO audit tool I've used. The reports are professional-grade and the recommendations are actionable. Highly recommend!",
    rating: 5,
    improvement: "+67% Page Speed",
  },
  {
    name: "David Thompson",
    role: "Founder",
    company: "LocalBiz Pro",
    avatar: "/placeholder.svg?height=40&width=40",
    content:
      "As a small business owner, this tool gave me insights I couldn't afford from expensive agencies. The mobile optimization tips alone were worth it.",
    rating: 5,
    improvement: "+89% Mobile Score",
  },
  {
    name: "Lisa Park",
    role: "SEO Consultant",
    company: "Digital Boost",
    avatar: "/placeholder.svg?height=40&width=40",
    content:
      "I use SEO Audit Pro for all my client audits. The comprehensive analysis and beautiful reports make my job so much easier.",
    rating: 5,
    improvement: "+156% Client Satisfaction",
  },
  {
    name: "James Wilson",
    role: "Product Manager",
    company: "InnovateCorp",
    avatar: "/placeholder.svg?height=40&width=40",
    content:
      "The competitor analysis feature is fantastic. We discovered gaps in our strategy and improved our market position significantly.",
    rating: 5,
    improvement: "+34% Market Share",
  },
]

export function Testimonials() {
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
          <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
            Testimonials
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold">
            Trusted by
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              {" "}
              10,000+ Businesses
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See how businesses like yours have improved their performance with our comprehensive SEO and conversion
            optimization insights.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300 group hover:scale-105">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  <p className="text-muted-foreground italic">"{testimonial.content}"</p>

                  <div className="flex items-center justify-between pt-4 border-t border-border/50">
                    <div className="flex items-center space-x-3">
                      <Avatar className="w-10 h-10">
                        <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                        <AvatarFallback>
                          {testimonial.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-semibold text-sm">{testimonial.name}</div>
                        <div className="text-xs text-muted-foreground">
                          {testimonial.role} at {testimonial.company}
                        </div>
                      </div>
                    </div>
                  </div>

                  <Badge
                    variant="secondary"
                    className="bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-300"
                  >
                    {testimonial.improvement}
                  </Badge>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
