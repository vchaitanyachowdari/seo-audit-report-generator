"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"
import { Loader2, Send, CheckCircle, Globe, Mail } from "lucide-react"

const formSchema = z.object({
  url: z
    .string()
    .url("Please enter a valid URL")
    .refine((url) => url.startsWith("https://"), {
      message: "URL must start with https://",
    }),
  email: z.string().email("Please enter a valid email address").min(1, "Email is required"),
})

type FormData = z.infer<typeof formSchema>

type FormState = "idle" | "loading" | "success" | "error"

export function AuditForm() {
  const [formState, setFormState] = useState<FormState>("idle")
  const { toast } = useToast()

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  })

  const onSubmit = async (data: FormData) => {
    setFormState("loading")

    try {
      // Simulate webhook call to n8n
      const response = await fetch("/api/audit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error("Failed to submit audit request")
      }

      setFormState("success")
      toast({
        title: "Audit Request Submitted!",
        description: "Your SEO audit report will be sent to your email within 2 hours.",
      })

      // Reset form after 3 seconds
      setTimeout(() => {
        setFormState("idle")
        reset()
      }, 3000)
    } catch (error) {
      setFormState("error")
      toast({
        title: "Error",
        description: "Failed to submit audit request. Please try again.",
        variant: "destructive",
      })

      setTimeout(() => {
        setFormState("idle")
      }, 2000)
    }
  }

  return (
    <div className="space-y-6" id="audit-form">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold">Get Your Free SEO Audit</h2>
        <p className="text-muted-foreground">Enter your landing page URL and email to receive a comprehensive report</p>
      </div>

      <AnimatePresence mode="wait">
        {formState === "success" ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="text-center py-8 space-y-4"
          >
            <div className="w-16 h-16 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle className="w-8 h-8 text-green-600 dark:text-green-400" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-green-600 dark:text-green-400">
                Request Submitted Successfully!
              </h3>
              <p className="text-sm text-muted-foreground mt-2">
                Your SEO audit report will be delivered to your inbox within 2 hours.
              </p>
            </div>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-4"
          >
            <div className="space-y-2">
              <Label htmlFor="url" className="flex items-center space-x-2">
                <Globe className="w-4 h-4" />
                <span>Landing Page URL</span>
              </Label>
              <Input
                id="url"
                type="url"
                placeholder="https://example.com"
                {...register("url")}
                className={errors.url ? "border-red-500" : ""}
                disabled={formState === "loading"}
              />
              {errors.url && <p className="text-sm text-red-500">{errors.url.message}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>Email Address</span>
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                {...register("email")}
                className={errors.email ? "border-red-500" : ""}
                disabled={formState === "loading"}
              />
              {errors.email && <p className="text-sm text-red-500">{errors.email.message}</p>}
            </div>

            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70"
              disabled={formState === "loading"}
            >
              {formState === "loading" ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Analyzing...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4 mr-2" />
                  Get Free Audit Report
                </>
              )}
            </Button>

            <p className="text-xs text-muted-foreground text-center">
              By submitting this form, you agree to our{" "}
              <a href="/privacy" className="text-primary hover:underline">
                Privacy Policy
              </a>{" "}
              and{" "}
              <a href="/terms" className="text-primary hover:underline">
                Terms of Service
              </a>
            </p>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  )
}
