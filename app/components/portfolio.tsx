"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Github, ExternalLink } from "lucide-react"

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("all")

  const categories = ["all", "mobile", "web", "backend", "embedded"]

  const projects = [
    {
      id: 1,
      title: "Veterinary Appointment System",
      category: "web",
      image: "/placeholder.svg?height=400&width=600",
      description: "A web-based system allowing farmers to book veterinary appointments with extension workers.",
      technologies: ["Laravel", "Inertia.js", "React"],
      github: "#",
      demo: "#",
    },
    {
      id: 2,
      title: "Secondary School Timetable Generator",
      category: "backend",
      image: "/placeholder.svg?height=400&width=600",
      description: "Python-based system to generate secondary school timetables based on teacher and class constraints.",
      technologies: ["Python"],
      github: "#",
      demo: "#",
    },
    {
      id: 3,
      title: "Group Loan Management System",
      category: "web",
      image: "/placeholder.svg?height=400&width=600",
      description: "System for managing group loans where members contribute different amounts but apply as a group.",
      technologies: ["Laravel", "React", "MySQL"],
      github: "#",
      demo: "#",
    },
    {
      id: 4,
      title: "Emergency Alert Bracelet App",
      category: "mobile",
      image: "/placeholder.svg?height=400&width=600",
      description: "Mobile app prototype that connects with an Arduino bracelet to monitor heart rate and send emergency alerts.",
      technologies: ["Flutter", "Bluetooth", "Firebase"],
      github: "#",
      demo: "#",
    },
    {
      id: 5,
      title: "Teaching Experience - Math & ICT",
      category: "teaching",
      image: "/placeholder.svg?height=400&width=600",
      description: "Teaching IGCSE Mathematics and ICT at Mzuzu International Academy, including preparing lessons, assessments, and engaging activities.",
      technologies: ["Mathematics", "ICT", "Cambridge IGCSE"],
      github: "#",
      demo: "#",
    },
    {
      id: 6,
      title: "Feed Optimization Model",
      category: "backend",
      image: "/placeholder.svg?height=400&width=600",
      description: "Python model calculating optimized feed mixtures based on nutrient requirements for TNC.",
      technologies: ["Python", "Pandas"],
      github: "#",
      demo: "#",
    },
  ]

  const filteredProjects = projects.filter((project) =>
    selectedCategory === "all" ? true : project.category === selectedCategory,
  )

  return (
    <section className="bg-black py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          className="mb-6 text-center text-3xl font-bold tracking-tighter sm:text-4xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Projects
        </motion.h2>
        <motion.p
          className="mx-auto mb-12 max-w-2xl text-center text-gray-400"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          A selection of my recent work across various technologies and platforms
        </motion.p>
        <div className="mb-12 flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className="text-sm capitalize"
            >
              {category}
            </Button>
          ))}
        </div>
        <motion.div layout className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Card className="overflow-hidden bg-zinc-900 transition-all hover:bg-zinc-800">
                  <CardContent className="p-0">
                    <div>
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="aspect-video w-full object-cover"
                      />
                      <div className="p-6">
                        <h3 className="mb-2 text-xl font-semibold text-white">{project.title}</h3>
                        <p className="mb-4 text-sm text-gray-400">{project.description}</p>
                        <div className="mb-4 flex flex-wrap gap-2">
                          {project.technologies.map((tech, index) => (
                            <span key={index} className="rounded-full bg-zinc-800 px-3 py-1 text-xs text-gray-300">
                              {tech}
                            </span>
                          ))}
                        </div>
                        <div className="flex gap-4">
                          <a
                            href={project.github}
                            className="flex items-center gap-1 text-sm text-gray-400 hover:text-white"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Github className="h-4 w-4" /> Code
                          </a>
                          <a
                            href={project.demo}
                            className="flex items-center gap-1 text-sm text-gray-400 hover:text-white"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="h-4 w-4" /> Demo
                          </a>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}

