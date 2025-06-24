"use client"

import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"

const faqs = [
  {
    question: "How long does it take to receive my audit report?",
    answer:
      "Your comprehensive SEO and conversion optimization report will be delivered to your email within 2 hours of submission. Our automated system works 24/7 to ensure fast turnaround times.",
  },
  {
    question: "Is the SEO audit really free?",
    answer:
      "Yes, our basic SEO audit is completely free with no hidden costs. You get a comprehensive report including SEO analysis, performance metrics, and actionable recommendations without any payment required.",
  },
  {
    question: "What does the audit report include?",
    answer:
      "Our audit report includes SEO analysis, conversion rate optimization recommendations, performance metrics, mobile optimization insights, security checks, competitor analysis, and a detailed action plan with prioritized tasks.",
  },
  {
    question: "Can I audit multiple websites?",
    answer:
      "Yes, you can submit multiple audit requests for different websites. Each website will receive its own detailed report. There are no limits on the number of free audits you can request.",
  },
  {
    question: "How accurate are the recommendations?",
    answer:
      "Our AI-powered analysis uses industry-leading tools and algorithms to provide highly accurate recommendations. The insights are based on current SEO best practices, Google guidelines, and conversion optimization principles.",
  },
  {
    question: "Do I need technical knowledge to implement the recommendations?",
    answer:
      "No, our reports are designed for both technical and non-technical users. Each recommendation includes clear explanations, step-by-step instructions, and priority levels to help you implement changes effectively.",
  },
  {
    question: "What makes your audit different from others?",
    answer:
      "Our audit combines SEO analysis with conversion rate optimization, provides competitor insights, includes mobile-first analysis, and delivers professional-grade reports typically found in expensive agency audits - all for free.",
  },
  {
    question: "Can I get support if I have questions about my report?",
    answer:
      "Yes, we provide email support to help you understand your audit report and implement the recommendations. Our team is available to answer questions and provide additional guidance.",
  },
]

export function FAQ() {
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
            FAQ
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold">
            Frequently Asked
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              {" "}
              Questions
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get answers to common questions about our SEO audit tool and how it can help improve your website
            performance.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-border/50 rounded-lg px-6 bg-card/50 backdrop-blur-sm"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="font-semibold">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-muted-foreground">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
