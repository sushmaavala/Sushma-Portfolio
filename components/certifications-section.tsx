"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink, Award } from "lucide-react"
import { Button } from "@/components/ui/button"

const certifications = [
  {
    title: "AWS Certified Solutions Architect – Associate",
    issuer: "Amazon Web Services (AWS)",
    date: "May 2025",
    credentialId: "View Credential",
    link: "https://www.credly.com/badges/79ef9114-0eb2-48d3-9bb6-4ed58b5be375/linked_in_profile",
  },
  {
    title: "FinOps Certified Engineer",
    issuer: "The Linux Foundation",
    date: "Apr 2025",
    credentialId: "yf3ajwmpcuby",
    link: "https://www.credly.com/badges/fe143455-f052-4747-9d2e-94ea03ec8393/linked_in_profile",
  },
  {
    title: "Introduction to Model Context Protocol",
    issuer: "Anthropic",
    date: "Aug 2025",
    credentialId: "u9r3pfwy5irx",
    link: "https://verify.skilljar.com/c/u9r3pfwy5irx",
  },
  {
    title: "Introduction to FinOps",
    issuer: "FinOps Foundation",
    date: "Apr 2025",
    credentialId: "xpgeq7jrbrwz",
    link: "https://www.linkedin.com/in/sushmareddyavala/details/certifications/",
  },
  {
    title: "Introduction to JAVA Completion Certificate",
    issuer: "Coding Ninjas",
    date: "Mar 2022",
    credentialId: "1937905cff6e83a0a7ba98ba474a20c985bac6f",
    link: "https://files.codingninjas.in/certificate1937905cff6e83a0a7ba98ba474a20c985bac6f.pdf",
  },
  {
    title: "Python Basic Certificate",
    issuer: "HackerRank",
    date: "Feb 2022",
    link: "https://www.hackerrank.com/certificates/34349c443c68",
  },
  {
    title: "Programming in Java (Elite Certification)",
    issuer: "NPTEL",
    date: "Jan 2022",
    credentialId: "NPTEL22CS47S34440014",
    link: "",
  },
]

export function CertificationsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="space-y-12"
        >
          <div className="text-center space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Certifications & Credentials</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Continuous learning and professional development in cutting-edge technologies.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow group">
                  <CardHeader>
                    <div className="flex items-start justify-between gap-2">
                      <Award className="h-8 w-8 text-accent flex-shrink-0" />
                      {cert.link && (
                        <Button size="icon" variant="ghost" className="h-8 w-8" asChild>
                          <a href={cert.link} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        </Button>
                      )}
                    </div>
                    <CardTitle className="text-lg group-hover:text-accent transition-colors">{cert.title}</CardTitle>
                    <CardDescription>
                      {cert.issuer} • {cert.date}
                      {cert.credentialId && (
                        <>
                          <br />
                          <span className="text-xs">ID: {cert.credentialId}</span>
                        </>
                      )}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
