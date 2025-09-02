"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Github, ExternalLink } from "lucide-react";

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  // const categories = ["all", "mobile", "web", "backend", "embedded"];
  const categories = ["all", "web", "backend"];

  const projects = [
    {
      id: 1,
      title: "E-Voter",
      category: "web",
      image: "/images/projects/e-voter/1.png",
      description:
        "A blockchain-based web application for students at a university to vote for student council elections and other events.",
      technologies: ["NextJs", "Node.js", "Solidity", "Firebase"],
      github: "#",
      demo: "/projects/e-voter",
    },
    {
      id: 2,
      title: "Secondary School Management System",
      category: "web",
      image: "/images/projects/school/1.png",
      description:
        "Secondary School mamangement system that to track student grades, fees payments and disciplinary incidents, with statistics and reports.",
      technologies: ["FastApi", "NextJs", "PostgreSql"],
      github: "#",
      demo: "/projects/school",
    },
    {
      id: 3,
      title: "Group Loan Management System",
      category: "web",
      image: "/images/projects/loans/1.png",
      description:
        "System for managing group loans where members contribute different amounts but apply as a group.",
      technologies: ["Php", "HTML", "MySQL"],
      github: "#",
      demo: "/projects/loans",
    },
    {
      id: 4,
      title: "Feed Optimization System",
      category: "backend",
      image: "/images/projects/optifeed/1.jpg",
      description:
        "Python backend for system that calculates optimized feed mixtures based on nutrient requirements for broiler and layer chickens.",
      technologies: ["Python", "Pandas"],
      github: "https://github.com/T-Huwa/Optifeed-python",
      demo: "/projects/optifeed",
    },
    {
      id: 5,
      title: "City Signs Management",
      category: "web",
      image: "/images/projects/city-signs/1.png",
      description:
        "Web based system for city council to manage maintainance of road and city signs, with integrated maps to show sign locations.",
      technologies: ["Next.js", "Inertia", "Laravel", "SQLite"],
      github: "#",
      demo: "/projects/city-signs",
    },
    {
      id: 6,
      title: "Extension Officer Appointment System",
      category: "web",
      image: "/images/projects/ulimi/1.png",
      description:
        "System that connects all types of farmers to relevant extension officers with appointment management.",
      technologies: ["Php", "MySQL", "React"],
      github: "",
      demo: "/projects/ulimi",
    },
  ];

  const filteredProjects = projects.filter((project) =>
    selectedCategory === "all" ? true : project.category === selectedCategory
  );

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
          A selection of my recent work across various technologies and
          platforms
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
                        <h3 className="mb-2 text-xl font-semibold text-white">
                          {project.title}
                        </h3>
                        <p className="mb-4 text-sm text-gray-400">
                          {project.description}
                        </p>
                        <div className="mb-4 flex flex-wrap gap-2">
                          {project.technologies.map((tech, index) => (
                            <span
                              key={index}
                              className="rounded-full bg-zinc-800 px-3 py-1 text-xs text-gray-300"
                            >
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
        <div className="mt-8 pt-4">And, Of course, Many more...</div>
      </div>
    </section>
  );
}
