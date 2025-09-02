"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Particle[] = [];
    const particleCount = 100;

    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 0.1;
        this.speedX = Math.random() * 2 - 1;
        this.speedY = Math.random() * 2 - 1;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvas.width) this.x = 0;
        if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        if (this.y < 0) this.y = canvas.height;
      }

      draw() {
        if (!ctx) return;
        ctx.fillStyle = "rgba(0, 255, 255, 0.5)";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    function animate() {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const particle of particles) {
        particle.update();
        particle.draw();
      }

      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      if (!canvasRef.current) return;
      canvasRef.current.width = window.innerWidth;
      canvasRef.current.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 h-full w-full bg-black"
      />
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
        {/* Circular Image */}
        <motion.div
          className="mb-6 h-52 w-52 rounded-full overflow-hidden border-4 border-cyan-400"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="/images/mikodi.jpg"
            alt="Profile"
            className="h-full w-full object-cover"
          />
        </motion.div>
        <motion.h1
          className="mb-6 text-6xl font-bold tracking-tighter sm:text-7xl lg:text-8xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Thom Huwa
        </motion.h1>
        <motion.p
          className="max-w-[800px] text-lg text-gray-400 sm:text-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Full-Stack Developer & Technology Enthusiast, with a Bachelor's Degree
          in ICT from Mzuzu University
        </motion.p>
        <motion.div
          className="mt-8 flex flex-wrap justify-center gap-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <span className="rounded-full bg-cyan-900/30 px-4 py-2 text-sm text-cyan-400">
            Flutter
          </span>
          <span className="rounded-full bg-orange-900/30 px-4 py-2 text-sm text-orange-400">
            Java
          </span>
          <span className="rounded-full bg-blue-900/30 px-4 py-2 text-sm text-blue-400">
            Arduino/C++
          </span>
          <span className="rounded-full bg-purple-900/30 px-4 py-2 text-sm text-purple-400">
            React/Next.js
          </span>
          <span className="rounded-full bg-green-900/30 px-4 py-2 text-sm text-green-400">
            Node.js
          </span>
          <span className="rounded-full bg-red-900/30 px-4 py-2 text-sm text-red-400">
            Laravel
          </span>
          <span className="rounded-full bg-yellow-900/30 px-4 py-2 text-sm text-yellow-400">
            Python
          </span>
        </motion.div>
      </div>
    </div>
  );
}
