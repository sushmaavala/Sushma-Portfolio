"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "Faculty Research Collaboration Portal",
    description:
      "AI-driven full-stack platform for faculty collaboration with RAG pipeline, semantic search over 10,000+ documents, and role-based access control.",
    tech: ["React", "Redux", "Spring Boot", "FastAPI", "MySQL", "FAISS", "OpenAI", "Docker"],
    github: "#",
    demo: "#",
  },
  {
    title: "E-Commerce Microservices Platform",
    description:
      "Scalable full-stack application with Spring Boot microservices for product catalog, cart, orders, and payments. Integrated Stripe/Razorpay with PCI-compliant flows.",
    tech: ["Spring Boot", "Node.js", "React", "Angular", "MySQL", "Redis", "AWS", "Docker"],
    github: "#",
    demo: "#",
  },
  {
    title: "AI Research Summarizer",
    description:
      "AI-powered research assistant using RAG pipeline with LangChain for intelligent document summarization and Q&A over research papers.",
    tech: ["Python", "FastAPI", "LangChain", "React", "MySQL", "FAISS", "OpenAI"],
    github: "#",
    demo: "#",
  },
  {
    title: "Real-Time Analytics Dashboard",
    description:
      "Data visualization platform with real-time metrics, optimized MySQL queries, Redis caching, and AWS CloudFront CDN reducing latency by 40%.",
    tech: ["React", "Node.js", "MySQL", "Redis", "AWS CloudFront", "Charts.js"],
    github: "#",
    demo: "#",
  },
]

export function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8" ref={ref}>
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="space-y-12"
        >
          <div className="text-center space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Featured Projects</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A collection of projects showcasing my expertise in full-stack development, data integration, and AI
              technologies.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full flex flex-col hover:shadow-lg transition-shadow group">
                  <CardHeader>
                    <CardTitle className="text-xl group-hover:text-accent transition-colors">{project.title}</CardTitle>
                    <CardDescription className="leading-relaxed">{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="gap-2">
                    <Button size="sm" variant="outline" className="flex-1 bg-transparent" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </a>
                    </Button>
                    <Button size="sm" className="flex-1" asChild>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Demo
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
