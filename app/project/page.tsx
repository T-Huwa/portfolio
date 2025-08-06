"use client";

import React, { useState } from "react";
import {
  ChevronLeft,
  ExternalLink,
  Github,
  Calendar,
  User,
  Code,
  Target,
  Award,
  Users,
  Clock,
  Moon,
  Sun,
  Sparkles,
} from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

// Sample project data - replace with your actual project data
const projectData = {
  title: "E-Commerce Dashboard",
  subtitle: "Modern admin panel for online retail management",
  description:
    "A comprehensive e-commerce dashboard built with modern web technologies. This project provides retailers with powerful tools to manage inventory, track sales, analyze customer behavior, and optimize their online presence. The dashboard features real-time analytics, automated reporting, and seamless integration with popular payment gateways.",
  longDescription:
    "This e-commerce dashboard was designed to solve the common problem of fragmented retail management tools. By consolidating inventory management, sales analytics, customer relationship management, and financial reporting into a single, intuitive interface, the platform helps small to medium-sized retailers streamline their operations and make data-driven decisions. The project emphasizes user experience design and performance optimization to ensure smooth operation even with large datasets.",
  images: [
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=600&fit=crop",
  ],
  techStack: [
    "React",
    "TypeScript",
    "Next.js",
    "Tailwind CSS",
    "Node.js",
    "Express",
    "MongoDB",
    "Redis",
    "Stripe API",
    "Chart.js",
    "Framer Motion",
  ],
  role: "Full-Stack Developer & UI/UX Designer",
  responsibilities: [
    "Architected the entire frontend application using React and TypeScript",
    "Designed and implemented RESTful APIs using Node.js and Express",
    "Created responsive UI components and design system",
    "Integrated payment processing with Stripe API",
    "Implemented real-time data visualization with Chart.js",
    "Optimized database queries and implemented caching strategies",
  ],
  duration: "4 months",
  teamSize: "3 developers",
  status: "Completed",
  features: [
    "Real-time inventory tracking",
    "Advanced analytics dashboard",
    "Customer relationship management",
    "Automated report generation",
    "Multi-payment gateway integration",
    "Mobile-responsive design",
  ],
  challenges: [
    "Implementing real-time data synchronization across multiple users",
    "Optimizing performance with large datasets (10k+ products)",
    "Creating an intuitive UX for complex financial data visualization",
  ],
  outcomes: [
    "Reduced inventory management time by 60%",
    "Improved sales reporting accuracy by 40%",
    "Increased user engagement by 35%",
  ],
  liveUrl: "https://demo-ecommerce-dashboard.com",
  githubUrl: "https://github.com/yourusername/ecommerce-dashboard",
  category: "Web Application",
};

export default function ProjectView() {
  const [selectedImage, setSelectedImage] = useState(0);
  const [isDark, setIsDark] = useState(false);

  const toggleDarkMode = () => {
    setIsDark(!isDark);
  };

  return (
    <div
      className={`min-h-screen transition-all duration-500 ${
        isDark
          ? "bg-gradient-to-br from-slate-950 via-slate-900 to-purple-950"
          : "bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50"
      }`}
    >
      {/* Navigation */}
      <nav
        className={`backdrop-blur-xl border-b sticky top-0 z-50 transition-all duration-300 ${
          isDark
            ? "bg-slate-900/80 border-slate-800"
            : "bg-white/80 border-slate-200"
        }`}
      >
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <button
            className={`flex items-center gap-2 transition-all duration-300 hover:scale-105 ${
              isDark
                ? "text-slate-400 hover:text-slate-100"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            <ChevronLeft className="w-5 h-5" />
            Back to Portfolio
          </button>

          <button
            onClick={toggleDarkMode}
            className={`p-3 rounded-xl transition-all duration-300 hover:scale-110 ${
              isDark
                ? "bg-slate-800 text-amber-400 hover:bg-slate-700 shadow-lg shadow-amber-400/20"
                : "bg-slate-100 text-slate-700 hover:bg-slate-200"
            }`}
          >
            {isDark ? (
              <Sun className="w-5 h-5" />
            ) : (
              <Moon className="w-5 h-5" />
            )}
          </button>
        </div>
      </nav>

      <div className="container mx-auto px-6 py-12 max-w-7xl">
        {/* Header Section */}
        <div className="mb-16">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 mb-8">
            <div className="relative">
              {/* Decorative Elements */}
              <div
                className={`absolute -top-6 -left-6 w-20 h-20 rounded-full blur-xl opacity-60 ${
                  isDark ? "bg-purple-500" : "bg-blue-400"
                }`}
              ></div>
              <div
                className={`absolute -bottom-4 -right-4 w-16 h-16 rounded-full blur-lg opacity-40 ${
                  isDark ? "bg-blue-500" : "bg-purple-400"
                }`}
              ></div>

              <div className="relative z-10">
                <h1
                  className={`text-5xl lg:text-6xl font-black mb-3 bg-gradient-to-r bg-clip-text text-transparent transition-all duration-300 ${
                    isDark
                      ? "from-white via-blue-100 to-purple-200"
                      : "from-slate-900 via-blue-600 to-purple-600"
                  }`}
                >
                  {projectData.title}
                </h1>
                <p
                  className={`text-xl lg:text-2xl mb-6 ${
                    isDark ? "text-slate-300" : "text-slate-600"
                  }`}
                >
                  {projectData.subtitle}
                </p>
                <div className="flex flex-wrap gap-6 text-sm">
                  <div
                    className={`flex items-center gap-2 px-3 py-2 rounded-full transition-all duration-300 ${
                      isDark
                        ? "bg-slate-800/60 text-slate-300 border border-slate-700"
                        : "bg-white/60 text-slate-600 border border-slate-200"
                    }`}
                  >
                    <Calendar className="w-4 h-4" />
                    {projectData.duration}
                  </div>
                  <div
                    className={`flex items-center gap-2 px-3 py-2 rounded-full transition-all duration-300 ${
                      isDark
                        ? "bg-slate-800/60 text-slate-300 border border-slate-700"
                        : "bg-white/60 text-slate-600 border border-slate-200"
                    }`}
                  >
                    <Users className="w-4 h-4" />
                    {projectData.teamSize}
                  </div>
                  <div
                    className={`flex items-center gap-2 px-3 py-2 rounded-full transition-all duration-300 ${
                      isDark
                        ? "bg-emerald-900/40 text-emerald-300 border border-emerald-700"
                        : "bg-emerald-50 text-emerald-700 border border-emerald-200"
                    }`}
                  >
                    <Clock className="w-4 h-4" />
                    {projectData.status}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-4 z-10">
              {projectData.liveUrl && (
                <a
                  href={projectData.liveUrl}
                  className="group flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                  Live Demo
                </a>
              )}
              {projectData.githubUrl && (
                <a
                  href={projectData.githubUrl}
                  className={`group flex items-center gap-3 px-8 py-4 rounded-2xl font-semibold transition-all duration-300 hover:scale-105 ${
                    isDark
                      ? "border-2 border-slate-700 text-slate-300 hover:bg-slate-800 hover:border-slate-600 hover:shadow-2xl hover:shadow-slate-700/25"
                      : "border-2 border-slate-300 text-slate-700 hover:bg-slate-50 hover:border-slate-400 hover:shadow-2xl"
                  }`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                  View Code
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Image Gallery */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Sparkles
              className={`w-6 h-6 ${
                isDark ? "text-purple-400" : "text-blue-600"
              }`}
            />
            <h2
              className={`text-3xl font-bold ${
                isDark ? "text-white" : "text-slate-900"
              }`}
            >
              Project Gallery
            </h2>
          </div>
          <div
            className={`rounded-3xl p-8 shadow-2xl border backdrop-blur-sm transition-all duration-300 ${
              isDark
                ? "bg-slate-800/40 border-slate-700 shadow-slate-900/50"
                : "bg-white/70 border-slate-200 shadow-slate-300/50"
            }`}
          >
            {/* Main Image */}
            <div className="mb-8 relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <img
                src={projectData.images[selectedImage]}
                alt={`${projectData.title} screenshot ${selectedImage + 1}`}
                className="w-full h-[500px] object-cover rounded-2xl shadow-xl transition-transform duration-300 group-hover:scale-[1.02]"
              />
            </div>

            {/* Thumbnail Navigation */}
            <div className="flex gap-4 overflow-x-auto pb-2">
              {projectData.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`flex-shrink-0 w-24 h-20 rounded-xl overflow-hidden border-3 transition-all duration-300 hover:scale-110 ${
                    selectedImage === index
                      ? `${
                          isDark
                            ? "border-purple-400 ring-4 ring-purple-400/30 shadow-lg shadow-purple-400/30"
                            : "border-blue-500 ring-4 ring-blue-200 shadow-lg shadow-blue-500/30"
                        }`
                      : `${
                          isDark
                            ? "border-slate-600 hover:border-slate-500"
                            : "border-slate-300 hover:border-slate-400"
                        }`
                  }`}
                >
                  <img
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Project Description */}
            <div
              className={`rounded-3xl p-10 shadow-xl border backdrop-blur-sm transition-all duration-300 hover:shadow-2xl ${
                isDark
                  ? "bg-slate-800/40 border-slate-700 shadow-slate-900/50"
                  : "bg-white/70 border-slate-200 shadow-slate-300/30"
              }`}
            >
              <h2
                className={`text-3xl font-bold mb-6 ${
                  isDark ? "text-white" : "text-slate-900"
                }`}
              >
                Project Overview
              </h2>
              <p
                className={`mb-8 leading-relaxed text-lg ${
                  isDark ? "text-slate-300" : "text-slate-600"
                }`}
              >
                {projectData.description}
              </p>
              <p
                className={`leading-relaxed text-lg ${
                  isDark ? "text-slate-300" : "text-slate-600"
                }`}
              >
                {projectData.longDescription}
              </p>
            </div>

            {/* Key Features */}
            <div
              className={`rounded-3xl p-10 shadow-xl border backdrop-blur-sm transition-all duration-300 hover:shadow-2xl ${
                isDark
                  ? "bg-slate-800/40 border-slate-700 shadow-slate-900/50"
                  : "bg-white/70 border-slate-200 shadow-slate-300/30"
              }`}
            >
              <h2
                className={`text-3xl font-bold mb-8 ${
                  isDark ? "text-white" : "text-slate-900"
                }`}
              >
                Key Features
              </h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {projectData.features.map((feature, index) => (
                  <div
                    key={index}
                    className={`flex items-center gap-4 p-4 rounded-2xl transition-all duration-300 hover:scale-105 ${
                      isDark
                        ? "bg-slate-700/50 hover:bg-slate-700/70"
                        : "bg-slate-50 hover:bg-slate-100"
                    }`}
                  >
                    <div
                      className={`w-3 h-3 rounded-full ${
                        isDark
                          ? "bg-gradient-to-r from-blue-400 to-purple-400"
                          : "bg-gradient-to-r from-blue-500 to-purple-500"
                      }`}
                    ></div>
                    <span
                      className={`font-medium ${
                        isDark ? "text-slate-200" : "text-slate-700"
                      }`}
                    >
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Challenges & Solutions */}
            <div
              className={`rounded-3xl p-10 shadow-xl border backdrop-blur-sm transition-all duration-300 hover:shadow-2xl ${
                isDark
                  ? "bg-slate-800/40 border-slate-700 shadow-slate-900/50"
                  : "bg-white/70 border-slate-200 shadow-slate-300/30"
              }`}
            >
              <h2
                className={`text-3xl font-bold mb-8 ${
                  isDark ? "text-white" : "text-slate-900"
                }`}
              >
                Challenges & Solutions
              </h2>
              <div className="space-y-6">
                {projectData.challenges.map((challenge, index) => (
                  <Alert
                    key={index}
                    className={`border-2 transition-all duration-300 hover:scale-[1.02] ${
                      isDark
                        ? "bg-slate-700/50 border-slate-600 hover:bg-slate-700/70"
                        : "bg-orange-50 border-orange-200 hover:bg-orange-100"
                    }`}
                  >
                    <Target
                      className={`h-5 w-5 ${
                        isDark ? "text-orange-400" : "text-orange-600"
                      }`}
                    />
                    <AlertDescription
                      className={`text-base font-medium ${
                        isDark ? "text-slate-200" : "text-slate-700"
                      }`}
                    >
                      {challenge}
                    </AlertDescription>
                  </Alert>
                ))}
              </div>
            </div>

            {/* Results & Impact */}
            <div
              className={`rounded-3xl p-10 shadow-2xl border-2 backdrop-blur-sm transition-all duration-300 hover:shadow-3xl ${
                isDark
                  ? "bg-gradient-to-br from-emerald-900/30 to-blue-900/30 border-emerald-700"
                  : "bg-gradient-to-br from-emerald-50 to-blue-50 border-emerald-200"
              }`}
            >
              <h2
                className={`text-3xl font-bold mb-8 flex items-center gap-3 ${
                  isDark ? "text-white" : "text-slate-900"
                }`}
              >
                <Award
                  className={`w-8 h-8 ${
                    isDark ? "text-emerald-400" : "text-emerald-600"
                  }`}
                />
                Results & Impact
              </h2>
              <div className="grid sm:grid-cols-3 gap-6">
                {projectData.outcomes.map((outcome, index) => (
                  <div
                    key={index}
                    className={`text-center p-6 rounded-2xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                      isDark
                        ? "bg-slate-800/60 border border-slate-700"
                        : "bg-white/80 border border-slate-200"
                    }`}
                  >
                    <p
                      className={`font-bold text-lg ${
                        isDark ? "text-slate-100" : "text-slate-800"
                      }`}
                    >
                      {outcome}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* My Role */}
            <div
              className={`rounded-3xl p-8 shadow-xl border backdrop-blur-sm transition-all duration-300 hover:shadow-2xl ${
                isDark
                  ? "bg-slate-800/40 border-slate-700 shadow-slate-900/50"
                  : "bg-white/70 border-slate-200 shadow-slate-300/30"
              }`}
            >
              <h3
                className={`text-xl font-bold mb-6 flex items-center gap-3 ${
                  isDark ? "text-white" : "text-slate-900"
                }`}
              >
                <User
                  className={`w-6 h-6 ${
                    isDark ? "text-blue-400" : "text-blue-600"
                  }`}
                />
                My Role
              </h3>
              <p
                className={`font-semibold mb-6 text-lg ${
                  isDark ? "text-slate-200" : "text-slate-700"
                }`}
              >
                {projectData.role}
              </p>
              <div className="space-y-4">
                {projectData.responsibilities.map((responsibility, index) => (
                  <div key={index} className="flex gap-3 group">
                    <div
                      className={`w-2 h-2 rounded-full mt-2.5 flex-shrink-0 transition-all duration-300 group-hover:scale-150 ${
                        isDark
                          ? "bg-gradient-to-r from-blue-400 to-purple-400"
                          : "bg-gradient-to-r from-blue-500 to-purple-500"
                      }`}
                    ></div>
                    <p
                      className={`${
                        isDark ? "text-slate-300" : "text-slate-600"
                      }`}
                    >
                      {responsibility}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack */}
            <div
              className={`rounded-3xl p-8 shadow-xl border backdrop-blur-sm transition-all duration-300 hover:shadow-2xl ${
                isDark
                  ? "bg-slate-800/40 border-slate-700 shadow-slate-900/50"
                  : "bg-white/70 border-slate-200 shadow-slate-300/30"
              }`}
            >
              <h3
                className={`text-xl font-bold mb-6 flex items-center gap-3 ${
                  isDark ? "text-white" : "text-slate-900"
                }`}
              >
                <Code
                  className={`w-6 h-6 ${
                    isDark ? "text-purple-400" : "text-purple-600"
                  }`}
                />
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-3">
                {projectData.techStack.map((tech, index) => (
                  <span
                    key={index}
                    className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-110 hover:shadow-lg ${
                      isDark
                        ? "bg-slate-700/60 text-slate-200 hover:bg-slate-600 border border-slate-600"
                        : "bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200"
                    }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Project Details */}
            <div
              className={`rounded-3xl p-8 shadow-xl border backdrop-blur-sm transition-all duration-300 hover:shadow-2xl ${
                isDark
                  ? "bg-slate-800/40 border-slate-700 shadow-slate-900/50"
                  : "bg-white/70 border-slate-200 shadow-slate-300/30"
              }`}
            >
              <h3
                className={`text-xl font-bold mb-6 ${
                  isDark ? "text-white" : "text-slate-900"
                }`}
              >
                Project Details
              </h3>
              <div className="space-y-6">
                <div
                  className={`p-4 rounded-xl ${
                    isDark ? "bg-slate-700/50" : "bg-slate-50"
                  }`}
                >
                  <p
                    className={`text-sm mb-2 ${
                      isDark ? "text-slate-400" : "text-slate-500"
                    }`}
                  >
                    Category
                  </p>
                  <p
                    className={`font-semibold ${
                      isDark ? "text-slate-200" : "text-slate-700"
                    }`}
                  >
                    {projectData.category}
                  </p>
                </div>
                <div
                  className={`p-4 rounded-xl ${
                    isDark ? "bg-slate-700/50" : "bg-slate-50"
                  }`}
                >
                  <p
                    className={`text-sm mb-2 ${
                      isDark ? "text-slate-400" : "text-slate-500"
                    }`}
                  >
                    Duration
                  </p>
                  <p
                    className={`font-semibold ${
                      isDark ? "text-slate-200" : "text-slate-700"
                    }`}
                  >
                    {projectData.duration}
                  </p>
                </div>
                <div
                  className={`p-4 rounded-xl ${
                    isDark ? "bg-slate-700/50" : "bg-slate-50"
                  }`}
                >
                  <p
                    className={`text-sm mb-2 ${
                      isDark ? "text-slate-400" : "text-slate-500"
                    }`}
                  >
                    Team Size
                  </p>
                  <p
                    className={`font-semibold ${
                      isDark ? "text-slate-200" : "text-slate-700"
                    }`}
                  >
                    {projectData.teamSize}
                  </p>
                </div>
                <div
                  className={`p-4 rounded-xl ${
                    isDark ? "bg-slate-700/50" : "bg-slate-50"
                  }`}
                >
                  <p
                    className={`text-sm mb-2 ${
                      isDark ? "text-slate-400" : "text-slate-500"
                    }`}
                  >
                    Status
                  </p>
                  <span
                    className={`inline-flex items-center px-3 py-1.5 rounded-full text-sm font-semibold ${
                      isDark
                        ? "bg-emerald-900/60 text-emerald-300 border border-emerald-700"
                        : "bg-emerald-100 text-emerald-800 border border-emerald-200"
                    }`}
                  >
                    {projectData.status}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div
          className={`mt-20 rounded-3xl p-12 text-center shadow-2xl backdrop-blur-sm transition-all duration-300 ${
            isDark
              ? "bg-gradient-to-br from-blue-900/60 via-purple-900/60 to-pink-900/60 border border-purple-700"
              : "bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600"
          }`}
        >
          <div className="relative z-10">
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-6 bg-gradient-to-r from-white to-purple-100 bg-clip-text text-transparent">
              Let's Create Something Amazing
            </h2>
            <p
              className={`text-xl mb-10 max-w-3xl mx-auto leading-relaxed ${
                isDark ? "text-blue-100" : "text-blue-100"
              }`}
            >
              I'm passionate about turning innovative ideas into exceptional
              digital experiences. Ready to bring your vision to life with
              cutting-edge technology and creative design.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="group bg-white text-purple-600 px-10 py-4 rounded-2xl font-bold hover:bg-purple-50 transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-lg">
                <span className="flex items-center gap-3">
                  Start a Project
                  <ExternalLink className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                </span>
              </button>
              <button className="group border-2 border-white text-white px-10 py-4 rounded-2xl font-bold hover:bg-white/10 transition-all duration-300 hover:scale-105 backdrop-blur-sm">
                <span className="flex items-center gap-3">
                  View More Work
                  <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                </span>
              </button>
            </div>
          </div>

          {/* Floating Elements */}
          <div className="absolute top-6 left-6 w-16 h-16 bg-white/10 rounded-full blur-lg"></div>
          <div className="absolute bottom-8 right-8 w-12 h-12 bg-purple-300/20 rounded-full blur-md"></div>
          <div className="absolute top-1/2 left-8 w-8 h-8 bg-blue-300/30 rounded-full blur-sm"></div>
        </div>
      </div>
    </div>
  );
}
