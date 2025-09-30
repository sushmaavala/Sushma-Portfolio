"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Briefcase } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const experiences = [
  {
    title: "Full Stack Developer",
    organization: "Cleveland State University",
    location: "Ohio, USA",
    period: "09/2023 – 05/2025",
    project: "Faculty Research Collaboration Portal",
    description:
      "Engineered an AI-driven web platform that streamlined faculty collaboration, reducing manual coordination by 40% with real-time research sharing.",
    keyAchievements: [
      "Built RAG pipeline with LLMs for semantic search over 10,000+ research documents",
      "Reduced response latency by 35% with microservices architecture",
      "Automated deployments with Docker/GitHub Actions, cutting release cycles to under 2 days",
    ],
    technologies: [
      "Java",
      "Spring Boot",
      "Python",
      "FastAPI",
      "React.js",
      "Redux",
      "OpenAI",
      "MySQL",
      "FAISS",
      "Docker",
      "AWS",
    ],
  },
  {
    title: "Full Stack Java Developer",
    organization: "CodeFish Technologies",
    location: "Hyd, India",
    period: "09/2021 – 01/2023",
    project: "E-commerce Platform",
    description:
      "Designed and implemented microservices for product catalog, cart, orders, and payment processing with React.js/Angular frontends.",
    keyAchievements: [
      "Integrated Stripe and Razorpay payment gateways with PCI-compliant flows",
      "Reduced response latency by 40% using Redis caching and AWS CloudFront CDN",
      "Orchestrated CI/CD pipelines with Jenkins and AWS infrastructure",
    ],
    technologies: [
      "Java",
      "Spring Boot",
      "Node.js",
      "React.js",
      "Angular",
      "MySQL",
      "Redis",
      "Docker",
      "Jenkins",
      "AWS",
    ],
  },
]

export function ExperienceSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30" ref={ref}>
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="space-y-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-center">Professional Experience</h2>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden sm:block" />

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative sm:pl-20"
                >
                  <div className="absolute left-0 top-0 w-16 h-16 rounded-full bg-accent/10 border-2 border-accent items-center justify-center hidden sm:flex">
                    <Briefcase className="h-6 w-6 text-accent" />
                  </div>
                  <div className="space-y-4 bg-card border border-border rounded-lg p-6 hover:border-accent/50 transition-colors">
                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold text-foreground">{exp.title}</h3>
                      <div className="flex flex-wrap items-center gap-2 text-accent font-medium">
                        <span>{exp.organization}</span>
                        <span className="text-muted-foreground">•</span>
                        <span className="text-muted-foreground">{exp.location}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">{exp.period}</p>
                      {exp.project && (
                        <p className="text-sm font-medium text-foreground/80 italic">Project: {exp.project}</p>
                      )}
                    </div>

                    <p className="text-muted-foreground leading-relaxed">{exp.description}</p>

                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold text-foreground">Key Achievements:</h4>
                      <ul className="space-y-1.5 list-none">
                        {exp.keyAchievements.map((achievement, aIndex) => (
                          <li key={aIndex} className="text-sm text-muted-foreground leading-relaxed flex gap-2">
                            <span className="text-accent mt-0.5 flex-shrink-0">✓</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold text-foreground">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, tIndex) => (
                          <Badge key={tIndex} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
