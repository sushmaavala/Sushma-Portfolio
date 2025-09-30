"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Mail } from "lucide-react"

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8" ref={ref}>
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">About Me</h2>
          <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
            <p>
              Hi, I'm <span className="text-accent font-semibold">Sushma Avala</span> — a passionate Full Stack
              Developer with experience in building modern web apps, integrating data workflows, and learning AI. I
              enjoy solving real-world problems with clean, scalable solutions.
            </p>
            <p>
              My journey in technology has led me to work with cutting-edge frameworks and tools, from React and Next.js
              on the frontend to Spring Boot and FastAPI on the backend. I'm particularly excited about the intersection
              of web development and artificial intelligence, constantly exploring new ways to integrate AI capabilities
              into practical applications.
            </p>
            <div className="flex items-center gap-2 pt-4">
              <Mail className="h-5 w-5 text-accent" />
              <a href="mailto:sushmaa297@gmail.com" className="text-accent hover:underline">
                sushmaa297@gmail.com
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
