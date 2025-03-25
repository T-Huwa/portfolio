"use client"

import { motion } from "framer-motion"
import { useRef } from "react"
import { useInView } from "framer-motion"
import { Code, Smartphone, Server, Database, Cpu, Layers, Zap } from "lucide-react"

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const skills = [
    {
      icon: <Smartphone className="h-10 w-10 text-cyan-400" />,
      title: "Mobile Development",
      description: "Flutter, Android with Java",
    },
    {
      icon: <Code className="h-10 w-10 text-purple-400" />,
      title: "Frontend",
      description: "React.js, Next.js, Tailwind CSS",
    },
    {
      icon: <Server className="h-10 w-10 text-green-400" />,
      title: "Backend",
      description: "Node.js, FastAPI, Laravel, PHP",
    },
    {
      icon: <Database className="h-10 w-10 text-blue-400" />,
      title: "Databases",
      description: "SQL, NoSQL, ORM integration",
    },
    {
      icon: <Cpu className="h-10 w-10 text-red-400" />,
      title: "Embedded Systems",
      description: "Arduino, C/C++ programming",
    },
    {
      icon: <Layers className="h-10 w-10 text-yellow-400" />,
      title: "Full-Stack",
      description: "End-to-end application development",
    },
    {
      icon: <Zap className="h-10 w-10 text-orange-400" />,
      title: "Fast Learner",
      description: "Quick adaptation to new technologies",
    },
  ]

  return (
    <section className="relative py-20">
      <div ref={ref} className="container mx-auto px-4">
        <motion.h2
          className="mb-12 text-center text-3xl font-bold tracking-tighter sm:text-4xl"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          Technical Skills
        </motion.h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-6 transition-all hover:border-zinc-700 hover:bg-zinc-900"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <div className="mb-4">{skill.icon}</div>
              <h3 className="mb-2 text-xl font-semibold">{skill.title}</h3>
              <p className="text-gray-400">{skill.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

