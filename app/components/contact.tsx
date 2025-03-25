"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ClockCircleOutlined, MailOutlined } from "@ant-design/icons"
import { MapPin, Smartphone } from "lucide-react"

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
})

export default function Contact() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
    // send data to server
  }

  return (
    <section className="relative overflow-hidden bg-zinc-900 py-20">
      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="mb-4 text-3xl font-bold tracking-tighter sm:text-4xl">Get in Touch</h2>
          <p className="mb-8 text-gray-400">
          Are you interested in collaborating or have a project in mind? Let’s connect and explore how I can help turn your ideas into reality.
          </p>
        </motion.div>

        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="mb-6 text-xl font-semibold">Contact Information</h3>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MailOutlined className="mt-1 h-5 w-5 text-cyan-400" />
                <div>
                  <h4 className="font-medium">Email</h4>
                  <p className="text-gray-400">huwathom@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Smartphone className="mt-1 h-5 w-5 text-cyan-400" />
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <p className="text-gray-400">+265 990 268 999</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MapPin className="mt-1 h-5 w-5 text-cyan-400" />
                <div>
                  <h4 className="font-medium">Location</h4>
                  <p className="text-gray-400">Mzuzu, Malawi</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <ClockCircleOutlined className="mt-1 h-5 w-5 text-cyan-400" />
                <div>
                  <h4 className="font-medium">Working Hours</h4>
                  <p className="text-gray-400">Monday - Saturday: 7AM - 8PM</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="your@email.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Tell me about your project..." className="min-h-[120px]" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </Form>
          </motion.div>
        </div>
      </div>

      <div className="absolute inset-0 z-0 opacity-30">
        <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          {Array.from({ length: 50 }).map((_, i) => (
            <line key={i} x1={i * 2} y1="0" x2={i * 2} y2="100" stroke="cyan" strokeWidth="0.1" />
          ))}
        </svg>
      </div>
    </section>
  )
}

