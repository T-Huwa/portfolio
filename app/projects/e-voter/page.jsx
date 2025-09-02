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
  Sparkles,
} from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import Link from "next/link";

const projectData = {
  title: "E-Voter",
  subtitle: "Decentralized Online Voting Platform",
  description:
    "E-Voter is a decentralized voting platform geared specifically towards voting in a university context. It is designed to provide secure, transparent, and efficient online elections. It leverages blockchain technology for vote integrity and a modern web stack for user experience.",
  longDescription:
    "The platform ensures vote immutability, transparency, and voter privacy using Ethereum smart contracts. Admins can manage elections, candidates, and positions while voters securely cast ballots. The modular architecture supports scalability, making it adaptable to new authentication providers, voting types, and blockchain networks.",
  images: Array.from(
    { length: 10 },
    (_, i) => `/images/projects/e-voter/${i + 1}.png`
  ),
  techStack: [
    "Next.js",
    "Tailwind CSS",
    "TypeScript",
    "Node.js",
    "Express.js",
    "Firebase",
    "Truffle",
    "Solidity",
    "Ethereum",
  ],
  role: "Full-Stack Developer (Smart Contracts, Backend & Frontend)",
  responsibilities: [
    "Designed and deployed Solidity smart contracts for secure voting",
    "Integrated Ethereum blockchain with Node.js backend using Truffle",
    "Implemented Firebase authentication for voter and admin roles",
    "Built a responsive Next.js frontend with Tailwind CSS",
    "Developed role-based election, candidate, and position management",
    "Created real-time election results dashboard from blockchain data",
  ],
  duration: "6 months",
  teamSize: "1 developer",
  status: "Completed",
  features: [
    "Decentralized and transparent blockchain-based voting",
    "Role-based authentication with Firebase",
    "Election management: launch, pause, and close",
    "Dynamic candidate and position creation",
    "End-to-end vote privacy and prevention of double voting",
    "Real-time results directly fetched from blockchain",
    "Scalable modular architecture",
  ],
  challenges: [
    "Ensuring end-to-end vote privacy while maintaining transparency",
    "Integrating blockchain results with a responsive UI",
    "Managing role-based access securely between admins and voters",
    "Building a scalable architecture ready for production deployment",
  ],
  outcomes: [
    "Successfully deployed and tested secure elections on Ethereum testnets",
    "Delivered a production-ready system compatible with cloud providers",
    "Improved transparency and security compared to centralized systems",
  ],
  liveUrl: "", //"http://localhost:3000", // replace with real deployed demo if available
  githubUrl: "", //"https://github.com/t-huwa/e-voter", // replace with your repo link
  category: "Blockchain Web Application",
};

export default function ProjectView() {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="min-h-screen transition-all duration-500 bg-gray-900">
      {/* Navigation */}
      <nav className="backdrop-blur-xl border-b sticky top-0 z-50 transition-all duration-300 bg-white/80 border-slate-200 dark:bg-slate-900/80 dark:border-slate-800">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link
            href={"/"}
            className="flex items-center gap-2 transition-all duration-300 hover:scale-105 text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100"
          >
            <ChevronLeft className="w-5 h-5" />
            Back to Portfolio
          </Link>
        </div>
      </nav>

      <div className="container mx-auto px-6 py-12 max-w-7xl">
        {/* Header Section */}
        <div className="mb-16">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 mb-8">
            <div className="relative">
              {/* Decorative Elements */}
              <div className="absolute -top-6 -left-6 w-20 h-20 rounded-full blur-xl opacity-60 bg-blue-400 dark:bg-purple-500"></div>
              <div className="absolute -bottom-4 -right-4 w-16 h-16 rounded-full blur-lg opacity-40 bg-purple-400 dark:bg-blue-500"></div>

              <div className="relative z-10">
                <h1 className="text-5xl lg:text-6xl font-black mb-3 bg-gradient-to-r bg-clip-text text-transparent transition-all duration-300 from-slate-900 via-blue-600 to-purple-600 dark:from-white dark:via-blue-100 dark:to-purple-200">
                  {projectData.title}
                </h1>
                <p className="text-xl lg:text-2xl mb-6 text-slate-600 dark:text-slate-300">
                  {projectData.subtitle}
                </p>
                <div className="flex flex-wrap gap-6 text-sm">
                  <div className="flex items-center gap-2 px-3 py-2 rounded-full transition-all duration-300 bg-white/60 text-slate-600 border border-slate-200 dark:bg-slate-800/60 dark:text-slate-300 dark:border-slate-700">
                    <Calendar className="w-4 h-4" />
                    {projectData.duration}
                  </div>
                  <div className="flex items-center gap-2 px-3 py-2 rounded-full transition-all duration-300 bg-white/60 text-slate-600 border border-slate-200 dark:bg-slate-800/60 dark:text-slate-300 dark:border-slate-700">
                    <Users className="w-4 h-4" />
                    {projectData.teamSize}
                  </div>
                  <div className="flex items-center gap-2 px-3 py-2 rounded-full transition-all duration-300 bg-emerald-50 text-emerald-700 border border-emerald-200 dark:bg-emerald-900/40 dark:text-emerald-300 dark:border-emerald-700">
                    <Clock className="w-4 h-4" />
                    {projectData.status}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-4 z-10">
              <a
                href={projectData.liveUrl || "#"}
                className={`group flex items-center gap-3 px-8 py-4 rounded-2xl font-semibold ${
                  !projectData.liveUrl
                    ? "disabled bg-gray-500"
                    : "bg-blue-600 text-white hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 "
                }`}
                target={projectData.liveUrl && "_blank"}
                rel="noopener noreferrer"
              >
                <ExternalLink className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                Live Demo
              </a>

              <a
                href={projectData.githubUrl || "#"}
                className={`group flex items-center gap-3 px-8 py-4 rounded-2xl font-semibold ${
                  !projectData.githubUrl
                    ? "disabled bg-gray-500 text-white"
                    : "hover:bg-slate-50 hover:border-slate-400 hover:shadow-2xl dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:border-slate-600 dark:hover:shadow-2xl dark:hover:shadow-slate-700/25 transition-all duration-300 hover:scale-105 border-2 border-slate-300 text-slate-700"
                }`}
                target={projectData.githubUrl && "_blank"}
                rel="noopener noreferrer"
              >
                <Github className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                View Code
              </a>
            </div>
          </div>
        </div>

        {/* Image Gallery */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Sparkles className="w-6 h-6 text-blue-600 dark:text-purple-400" />
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
              Project Gallery
            </h2>
          </div>
          <div className="rounded-3xl p-8 shadow-2xl border backdrop-blur-sm transition-all duration-300 bg-white/70 border-slate-200 shadow-slate-300/50 dark:bg-slate-800/40 dark:border-slate-700 dark:shadow-slate-900/50">
            {/* Main Image */}
            <div className="mb-8 relative group flex justify-center">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <img
                src={projectData.images[selectedImage]}
                alt={`${projectData.title} screenshot ${selectedImage + 1}`}
                className="max-h-[500px] w-auto max-w-full object-contain rounded-2xl shadow-xl transition-transform duration-300 group-hover:scale-[1.02]"
                loading="eager"
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
                      ? "border-blue-500 ring-4 ring-blue-200 shadow-lg shadow-blue-500/30 dark:border-purple-400 dark:ring-purple-400/30 dark:shadow-purple-400/30"
                      : "border-slate-300 hover:border-slate-400 dark:border-slate-600 dark:hover:border-slate-500"
                  }`}
                >
                  <img
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-full object-contain transition-transform duration-300 hover:scale-110"
                    loading="lazy"
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
            <div className="rounded-3xl p-10 shadow-xl border backdrop-blur-sm transition-all duration-300 hover:shadow-2xl bg-white/70 border-slate-200 shadow-slate-300/30 dark:bg-slate-800/40 dark:border-slate-700 dark:shadow-slate-900/50">
              <h2 className="text-3xl font-bold mb-6 text-slate-900 dark:text-white">
                Project Overview
              </h2>
              <p className="mb-8 leading-relaxed text-lg text-slate-600 dark:text-slate-300">
                {projectData.description}
              </p>
              <p className="leading-relaxed text-lg text-slate-600 dark:text-slate-300">
                {projectData.longDescription}
              </p>
            </div>

            {/* Key Features */}
            <div className="rounded-3xl p-10 shadow-xl border backdrop-blur-sm transition-all duration-300 hover:shadow-2xl bg-white/70 border-slate-200 shadow-slate-300/30 dark:bg-slate-800/40 dark:border-slate-700 dark:shadow-slate-900/50">
              <h2 className="text-3xl font-bold mb-8 text-slate-900 dark:text-white">
                Key Features
              </h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {projectData.features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-4 rounded-2xl transition-all duration-300 hover:scale-105 bg-slate-50 hover:bg-slate-100 dark:bg-slate-700/50 dark:hover:bg-slate-700/70"
                  >
                    <div className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 dark:from-blue-400 dark:to-purple-400"></div>
                    <span className="font-medium text-slate-700 dark:text-slate-200">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Challenges & Solutions */}
            <div className="rounded-3xl p-10 shadow-xl border backdrop-blur-sm transition-all duration-300 hover:shadow-2xl bg-white/70 border-slate-200 shadow-slate-300/30 dark:bg-slate-800/40 dark:border-slate-700 dark:shadow-slate-900/50">
              <h2 className="text-3xl font-bold mb-8 text-slate-900 dark:text-white">
                Challenges & Solutions
              </h2>
              <div className="space-y-6">
                {projectData.challenges.map((challenge, index) => (
                  <Alert
                    key={index}
                    className="border-2 transition-all duration-300 hover:scale-[1.02] bg-orange-50 border-orange-200 hover:bg-orange-100 dark:bg-slate-700/50 dark:border-slate-600 dark:hover:bg-slate-700/70"
                  >
                    <Target className="h-5 w-5 text-orange-600 dark:text-orange-400" />
                    <AlertDescription className="text-base font-medium text-slate-700 dark:text-slate-200">
                      {challenge}
                    </AlertDescription>
                  </Alert>
                ))}
              </div>
            </div>

            {/* Results & Impact */}
            <div className="rounded-3xl p-10 shadow-2xl border-2 backdrop-blur-sm transition-all duration-300 hover:shadow-3xl bg-gradient-to-br from-emerald-50 to-blue-50 border-emerald-200 dark:from-emerald-900/30 dark:to-blue-900/30 dark:border-emerald-700">
              <h2 className="text-3xl font-bold mb-8 flex items-center gap-3 text-slate-900 dark:text-white">
                <Award className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
                Results & Impact
              </h2>
              <div className="grid sm:grid-cols-3 gap-6">
                {projectData.outcomes.map((outcome, index) => (
                  <div
                    key={index}
                    className="text-center p-6 rounded-2xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl bg-white/80 border border-slate-200 dark:bg-slate-800/60 dark:border-slate-700"
                  >
                    <p className="font-bold text-lg text-slate-800 dark:text-slate-100">
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
            <div className="rounded-3xl p-8 shadow-xl border backdrop-blur-sm transition-all duration-300 hover:shadow-2xl bg-white/70 border-slate-200 shadow-slate-300/30 dark:bg-slate-800/40 dark:border-slate-700 dark:shadow-slate-900/50">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-3 text-slate-900 dark:text-white">
                <User className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                My Role
              </h3>
              <p className="font-semibold mb-6 text-lg text-slate-700 dark:text-slate-200">
                {projectData.role}
              </p>
              <div className="space-y-4">
                {projectData.responsibilities.map((responsibility, index) => (
                  <div key={index} className="flex gap-3 group">
                    <div className="w-2 h-2 rounded-full mt-2.5 flex-shrink-0 transition-all duration-300 group-hover:scale-150 bg-gradient-to-r from-blue-500 to-purple-500 dark:from-blue-400 dark:to-purple-400"></div>
                    <p className="text-slate-600 dark:text-slate-300">
                      {responsibility}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack */}
            <div className="rounded-3xl p-8 shadow-xl border backdrop-blur-sm transition-all duration-300 hover:shadow-2xl bg-white/70 border-slate-200 shadow-slate-300/30 dark:bg-slate-800/40 dark:border-slate-700 dark:shadow-slate-900/50">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-3 text-slate-900 dark:text-white">
                <Code className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-3">
                {projectData.techStack.map((tech, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-110 hover:shadow-lg bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200 dark:bg-slate-700/60 dark:text-slate-200 dark:hover:bg-slate-600 dark:border-slate-600"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Project Details */}
            <div className="rounded-3xl p-8 shadow-xl border backdrop-blur-sm transition-all duration-300 hover:shadow-2xl bg-white/70 border-slate-200 shadow-slate-300/30 dark:bg-slate-800/40 dark:border-slate-700 dark:shadow-slate-900/50">
              <h3 className="text-xl font-bold mb-6 text-slate-900 dark:text-white">
                Project Details
              </h3>
              <div className="space-y-6">
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-700/50">
                  <p className="text-sm mb-2 text-slate-500 dark:text-slate-400">
                    Category
                  </p>
                  <p className="font-semibold text-slate-700 dark:text-slate-200">
                    {projectData.category}
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-700/50">
                  <p className="text-sm mb-2 text-slate-500 dark:text-slate-400">
                    Duration
                  </p>
                  <p className="font-semibold text-slate-700 dark:text-slate-200">
                    {projectData.duration}
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-700/50">
                  <p className="text-sm mb-2 text-slate-500 dark:text-slate-400">
                    Team Size
                  </p>
                  <p className="font-semibold text-slate-700 dark:text-slate-200">
                    {projectData.teamSize}
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-700/50">
                  <p className="text-sm mb-2 text-slate-500 dark:text-slate-400">
                    Status
                  </p>
                  <span className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-semibold bg-emerald-100 text-emerald-800 border border-emerald-200 dark:bg-emerald-900/60 dark:text-emerald-300 dark:border-emerald-700">
                    {projectData.status}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
