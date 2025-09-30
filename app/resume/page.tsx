"use client"

import { Button } from "@/components/ui/button"
import { Download, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { jsPDF } from "jspdf"

const generatePDF = () => {
  const doc = new jsPDF()

  // Set font sizes and styles
  const pageWidth = doc.internal.pageSize.getWidth()
  const margin = 20
  const contentWidth = pageWidth - 2 * margin
  let yPos = 20

  // Header
  doc.setFontSize(24)
  doc.setFont("helvetica", "bold")
  doc.text("Sushma Avala", pageWidth / 2, yPos, { align: "center" })

  yPos += 8
  doc.setFontSize(10)
  doc.setFont("helvetica", "normal")
  doc.text(
    "sushmaa297@gmail.com | (216) 640-4221 | USA | LinkedIn: linkedin.com/in/sushmareddyavala",
    pageWidth / 2,
    yPos,
    { align: "center" },
  )

  yPos += 12

  // Technical Skills
  doc.setFontSize(14)
  doc.setFont("helvetica", "bold")
  doc.text("Technical Skills", margin, yPos)
  doc.line(margin, yPos + 1, pageWidth - margin, yPos + 1)
  yPos += 8

  doc.setFontSize(9)
  doc.setFont("helvetica", "normal")
  const skills = [
    "Languages: Java, JavaScript, Python, HTML, CSS",
    "Databases: SQL, Postgres, MongoDB, Redis",
    "Frameworks, Libraries & Technologies: Spring Boot, Spring, React, NodeJS, AWS, Docker, Kubernetes, Kafka, Redis",
    "AI/ML & NLP Tools: LLMs (OpenAI, Hugging Face), Retrieval-Augmented Generation (RAG), FAISS, Pinecone, Semantic Search",
    "Operating Systems: Linux, AIX, Windows",
  ]

  skills.forEach((skill) => {
    const lines = doc.splitTextToSize(skill, contentWidth)
    doc.text(lines, margin, yPos)
    yPos += lines.length * 5
  })

  yPos += 5

  // Professional Experience
  doc.setFontSize(14)
  doc.setFont("helvetica", "bold")
  doc.text("Professional Experience", margin, yPos)
  doc.line(margin, yPos + 1, pageWidth - margin, yPos + 1)
  yPos += 8

  // Job 1
  doc.setFontSize(11)
  doc.setFont("helvetica", "bold")
  doc.text("Full Stack Developer, Cleveland State University", margin, yPos)
  doc.setFontSize(9)
  doc.text("09/2023 – 05/2025 | Ohio, USA", pageWidth - margin, yPos, { align: "right" })
  yPos += 5
  doc.setFont("helvetica", "italic")
  doc.text("Project: Faculty Research Collaboration Portal", margin, yPos)
  yPos += 5

  doc.setFont("helvetica", "normal")
  const exp1 = [
    "• Engineered an AI-driven internal web platform that streamlined faculty collaboration, reducing manual coordination efforts by 40% and enabling real-time sharing of research outputs across departments.",
    "• Built end-to-end features with Java (Spring Boot) and Python (FastAPI + LangChain) for backend microservices, and React.js + Redux Toolkit for the frontend, boosting user engagement and cutting response latency by 35%.",
    "• Designed and deployed a RAG (Retrieval-Augmented Generation) pipeline leveraging LLMs (OpenAI/GPT, Hugging Face models) with MySQL + Vector DB (FAISS/Pinecone), enabling semantic search and Q&A over 10,000+ research documents.",
    "• Developed secure REST and GraphQL APIs for project creation, member roles, document uploads, and AI-powered summarization, improving research document retrieval time by 50%.",
    "• Implemented role-based access control for faculty, graduate assistants, and department admins using Spring Security, JWT, and OAuth2.0, ensuring compliance with university data security policies.",
    "• Automated deployment pipelines with Docker and GitHub Actions, reducing release cycles from weeks to under 2 days and improving reliability of AI model updates.",
  ]

  exp1.forEach((item) => {
    const lines = doc.splitTextToSize(item, contentWidth - 5)
    if (yPos + lines.length * 4 > 280) {
      doc.addPage()
      yPos = 20
    }
    doc.text(lines, margin + 2, yPos)
    yPos += lines.length * 4 + 2
  })

  yPos += 3

  // Job 2
  doc.setFontSize(11)
  doc.setFont("helvetica", "bold")
  doc.text("Full Stack Java Developer", margin, yPos)
  doc.setFontSize(9)
  doc.text("09/2021 – 01/2023", pageWidth - margin, yPos, { align: "right" })
  yPos += 5
  doc.setFont("helvetica", "italic")
  doc.text("Client: CodeFish Technologies, Hyd, India", margin, yPos)
  yPos += 5

  doc.setFont("helvetica", "normal")
  const exp2 = [
    "• Designed and implemented Spring Boot microservices (Java, Node.js) for product catalog, cart, orders, and payments, exposing REST APIs consumed by React.js/Angular frontends.",
    "• Integrated Stripe and Razorpay payment gateways with transaction validation, retry logic, and webhook-based reconciliation, ensuring PCI-compliant payment flows.",
    "• Optimized MySQL queries and indexing strategies and applied Redis caching + AWS CloudFront CDN, reducing response latency by 40% under peak traffic loads.",
    "• Containerized services using Docker, orchestrated deployments via Jenkins CI/CD pipelines, and provisioned infrastructure on AWS EC2, RDS, S3, CloudFront.",
    "• Implemented monitoring, logging, and alerting with AWS CloudWatch, Nginx logs, and Linux shell scripts, enabling proactive incident detection and resolution.",
  ]

  exp2.forEach((item) => {
    const lines = doc.splitTextToSize(item, contentWidth - 5)
    if (yPos + lines.length * 4 > 280) {
      doc.addPage()
      yPos = 20
    }
    doc.text(lines, margin + 2, yPos)
    yPos += lines.length * 4 + 2
  })

  yPos += 5

  // Check if we need a new page for Projects
  if (yPos > 240) {
    doc.addPage()
    yPos = 20
  }

  // Projects
  doc.setFontSize(14)
  doc.setFont("helvetica", "bold")
  doc.text("Projects", margin, yPos)
  doc.line(margin, yPos + 1, pageWidth - margin, yPos + 1)
  yPos += 8

  // Project 1
  doc.setFontSize(11)
  doc.text("AI Research Summarizer", margin, yPos)
  yPos += 5

  doc.setFontSize(9)
  doc.setFont("helvetica", "normal")
  const proj1 = [
    "• Built a full-stack AI-powered research assistant using Python (FastAPI + LangChain) for backend services, React.js for frontend, and MySQL + FAISS for structured + vector storage.",
    "• Implemented a Retrieval-Augmented Generation (RAG) pipeline integrating LLMs (OpenAI GPT + Hugging Face models) to summarize research papers and enable semantic search over 15,000+ academic documents.",
    "• Developed secure APIs to handle research uploads, intelligent metadata extraction, and AI-driven Q&A, improving faculty research productivity by 45%.",
    "• Containerized with Docker and deployed on AWS (EC2, S3, Lambda) with CI/CD pipelines using GitHub Actions, cutting deployment cycles to under 2 days.",
  ]

  proj1.forEach((item) => {
    const lines = doc.splitTextToSize(item, contentWidth - 5)
    if (yPos + lines.length * 4 > 280) {
      doc.addPage()
      yPos = 20
    }
    doc.text(lines, margin + 2, yPos)
    yPos += lines.length * 4 + 2
  })

  yPos += 3

  // Project 2
  doc.setFontSize(11)
  doc.setFont("helvetica", "bold")
  doc.text("Conversational AI Student Helpdesk", margin, yPos)
  yPos += 5

  doc.setFontSize(9)
  doc.setFont("helvetica", "normal")
  const proj2 = [
    "• Designed and developed a conversational AI system to assist students with course FAQs, scheduling, and document guidance using Java (Spring Boot) + Python (FastAPI) for backend orchestration.",
    "• Integrated LLMs with a RAG pipeline connected to university course material and policies stored in PostgreSQL + Pinecone, enabling contextual responses with 90%+ accuracy.",
    "• Built a React.js + TailwindCSS frontend chat interface supporting real-time AI response streaming via WebSockets.",
    "• Improved query resolution speed by 60%, reducing dependency on manual staff support.",
    "• Deployed on AWS (ECS, RDS, S3, CloudWatch) with containerization via Docker and CI/CD pipelines for continuous updates.",
  ]

  proj2.forEach((item) => {
    const lines = doc.splitTextToSize(item, contentWidth - 5)
    if (yPos + lines.length * 4 > 280) {
      doc.addPage()
      yPos = 20
    }
    doc.text(lines, margin + 2, yPos)
    yPos += lines.length * 4 + 2
  })

  yPos += 5

  // Education
  if (yPos > 260) {
    doc.addPage()
    yPos = 20
  }

  doc.setFontSize(14)
  doc.setFont("helvetica", "bold")
  doc.text("Education", margin, yPos)
  doc.line(margin, yPos + 1, pageWidth - margin, yPos + 1)
  yPos += 8

  doc.setFontSize(11)
  doc.setFont("helvetica", "bold")
  doc.text("Master of Science in Computer and Information Science", margin, yPos)
  yPos += 5
  doc.setFontSize(9)
  doc.setFont("helvetica", "normal")
  doc.text("Cleveland State University", margin, yPos)
  yPos += 8

  // Certifications
  doc.setFontSize(14)
  doc.setFont("helvetica", "bold")
  doc.text("Certifications", margin, yPos)
  doc.line(margin, yPos + 1, pageWidth - margin, yPos + 1)
  yPos += 8

  doc.setFontSize(9)
  doc.setFont("helvetica", "normal")
  doc.text("• AWS Certified Solutions Architect – Associate | Amazon Web Services", margin + 2, yPos)

  return doc
}

export default function ResumePage() {
  const handleDownload = () => {
    const doc = generatePDF()
    doc.save("Sushma_Avala_Resume.pdf")
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header with Download Button */}
      <div className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Portfolio
            </Link>
            <Button onClick={handleDownload}>
              <Download className="mr-2 h-4 w-4" />
              Download PDF
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 max-w-4xl">
        <div className="bg-card rounded-lg shadow-lg p-8 sm:p-12 space-y-6">
          {/* Header */}
          <div className="text-center border-b border-border pb-6">
            <h1 className="text-3xl font-bold mb-2">Sushma Avala</h1>
            <p className="text-sm text-muted-foreground">
              sushmaa297@gmail.com | (216) 640-4221 | USA |{" "}
              <a
                href="https://www.linkedin.com/in/sushmareddyavala/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                LinkedIn
              </a>
            </p>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="text-xl font-bold mb-3 border-b border-border pb-2">Technical Skills</h2>
            <div className="space-y-2 text-sm">
              <p>
                <span className="font-semibold">Languages:</span> Java, JavaScript, Python, HTML, CSS
              </p>
              <p>
                <span className="font-semibold">Databases:</span> SQL, Postgres, MongoDB, Redis
              </p>
              <p>
                <span className="font-semibold">Frameworks, Libraries & Technologies:</span> Spring Boot, Spring, React,
                NodeJS, AWS, Docker, Kubernetes, Kafka, Redis
              </p>
              <p>
                <span className="font-semibold">AI/ML & NLP Tools:</span> LLMs (OpenAI, Hugging Face),
                Retrieval-Augmented Generation (RAG), FAISS, Pinecone, Semantic Search
              </p>
              <p>
                <span className="font-semibold">Operating Systems:</span> Linux, AIX, Windows
              </p>
            </div>
          </div>

          {/* Professional Experience */}
          <div>
            <h2 className="text-xl font-bold mb-3 border-b border-border pb-2">Professional Experience</h2>

            {/* Job 1 */}
            <div className="mb-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-semibold">Full Stack Developer, Cleveland State University</h3>
                <span className="text-sm text-muted-foreground whitespace-nowrap">09/2023 – 05/2025 | Ohio, USA</span>
              </div>
              <p className="text-sm italic mb-2">Project: Faculty Research Collaboration Portal</p>
              <ul className="list-disc list-outside ml-5 space-y-1 text-sm">
                <li>
                  Engineered an AI-driven internal web platform that streamlined faculty collaboration, reducing manual
                  coordination efforts by 40% and enabling real-time sharing of research outputs across departments.
                </li>
                <li>
                  Built end-to-end features with Java (Spring Boot) and Python (FastAPI + LangChain) for backend
                  microservices, and React.js + Redux Toolkit for the frontend, boosting user engagement and cutting
                  response latency by 35%.
                </li>
                <li>
                  Designed and deployed a RAG (Retrieval-Augmented Generation) pipeline leveraging LLMs (OpenAI/GPT,
                  Hugging Face models) with MySQL + Vector DB (FAISS/Pinecone), enabling semantic search and Q&A over
                  10,000+ research documents.
                </li>
                <li>
                  Developed secure REST and GraphQL APIs for project creation, member roles, document uploads, and
                  AI-powered summarization, improving research document retrieval time by 50%.
                </li>
                <li>
                  Implemented role-based access control for faculty, graduate assistants, and department admins using
                  Spring Security, JWT, and OAuth2.0, ensuring compliance with university data security policies.
                </li>
                <li>
                  Automated deployment pipelines with Docker and GitHub Actions, reducing release cycles from weeks to
                  under 2 days and improving reliability of AI model updates.
                </li>
              </ul>
            </div>

            {/* Job 2 */}
            <div>
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-semibold">Full Stack Java Developer</h3>
                <span className="text-sm text-muted-foreground whitespace-nowrap">09/2021 – 01/2023</span>
              </div>
              <p className="text-sm italic mb-2">Client: CodeFish Technologies, Hyd, India</p>
              <ul className="list-disc list-outside ml-5 space-y-1 text-sm">
                <li>
                  Designed and implemented Spring Boot microservices (Java, Node.js) for product catalog, cart, orders,
                  and payments, exposing REST APIs consumed by React.js/Angular frontends.
                </li>
                <li>
                  Integrated Stripe and Razorpay payment gateways with transaction validation, retry logic, and
                  webhook-based reconciliation, ensuring PCI-compliant payment flows.
                </li>
                <li>
                  Optimized MySQL queries and indexing strategies and applied Redis caching + AWS CloudFront CDN,
                  reducing response latency by 40% under peak traffic loads.
                </li>
                <li>
                  Containerized services using Docker, orchestrated deployments via Jenkins CI/CD pipelines, and
                  provisioned infrastructure on AWS EC2, RDS, S3, CloudFront.
                </li>
                <li>
                  Implemented monitoring, logging, and alerting with AWS CloudWatch, Nginx logs, and Linux shell
                  scripts, enabling proactive incident detection and resolution.
                </li>
              </ul>
            </div>
          </div>

          {/* Projects */}
          <div>
            <h2 className="text-xl font-bold mb-3 border-b border-border pb-2">Projects</h2>

            {/* Project 1 */}
            <div className="mb-4">
              <h3 className="text-lg font-semibold mb-2">AI Research Summarizer</h3>
              <ul className="list-disc list-outside ml-5 space-y-1 text-sm">
                <li>
                  Built a full-stack AI-powered research assistant using Python (FastAPI + LangChain) for backend
                  services, React.js for frontend, and MySQL + FAISS for structured + vector storage.
                </li>
                <li>
                  Implemented a Retrieval-Augmented Generation (RAG) pipeline integrating LLMs (OpenAI GPT + Hugging
                  Face models) to summarize research papers and enable semantic search over 15,000+ academic documents.
                </li>
                <li>
                  Developed secure APIs to handle research uploads, intelligent metadata extraction, and AI-driven Q&A,
                  improving faculty research productivity by 45%.
                </li>
                <li>
                  Containerized with Docker and deployed on AWS (EC2, S3, Lambda) with CI/CD pipelines using GitHub
                  Actions, cutting deployment cycles to under 2 days.
                </li>
              </ul>
            </div>

            {/* Project 2 */}
            <div>
              <h3 className="text-lg font-semibold mb-2">Conversational AI Student Helpdesk</h3>
              <ul className="list-disc list-outside ml-5 space-y-1 text-sm">
                <li>
                  Designed and developed a conversational AI system to assist students with course FAQs, scheduling, and
                  document guidance using Java (Spring Boot) + Python (FastAPI) for backend orchestration.
                </li>
                <li>
                  Integrated LLMs with a RAG pipeline connected to university course material and policies stored in
                  PostgreSQL + Pinecone, enabling contextual responses with 90%+ accuracy.
                </li>
                <li>
                  Built a React.js + TailwindCSS frontend chat interface supporting real-time AI response streaming via
                  WebSockets.
                </li>
                <li>Improved query resolution speed by 60%, reducing dependency on manual staff support.</li>
                <li>
                  Deployed on AWS (ECS, RDS, S3, CloudWatch) with containerization via Docker and CI/CD pipelines for
                  continuous updates.
                </li>
              </ul>
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xl font-bold mb-3 border-b border-border pb-2">Education</h2>
            <div>
              <h3 className="text-lg font-semibold">Master of Science in Computer and Information Science</h3>
              <p className="text-sm text-muted-foreground">Cleveland State University</p>
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h2 className="text-xl font-bold mb-3 border-b border-border pb-2">Certifications</h2>
            <ul className="list-disc list-outside ml-5 text-sm">
              <li>AWS Certified Solutions Architect – Associate | Amazon Web Services</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
