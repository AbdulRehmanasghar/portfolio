"use client"

import { Github, ChevronRight } from "lucide-react"
import Link from "next/link"

export default function GitHubProjects() {
  const repos = [
    {
      id: 1,
      title: "E-Commerce MERN Platform",
      description:
        "Full-stack e-commerce platform with real-time inventory, Stripe payment integration, and advanced admin dashboard.",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      role: "Lead Developer",
      techChanges: "Migrated from REST API to GraphQL for optimized queries",
      problems: "Solved race conditions in inventory management using database transactions",
      link: "/project/ecommerce-platform",
      isPrivate: true,
    },
    {
      id: 2,
      title: "RAG Chatbot Engine",
      description:
        "Advanced conversational AI with Retrieval-Augmented Generation, document processing, and multi-language support.",
      tags: ["Python", "LLMs", "Vector DB", "Next.js"],
      role: "Full Stack Developer",
      techChanges: "Implemented semantic search using embeddings for better context retrieval",
      problems: "Optimized token usage and reduced API latency by 60%",
      link: "/project/rag-chatbot",
      isPrivate: true,
    },
    {
      id: 3,
      title: "WordPress Plugin Suite",
      description:
        "Suite of 5 premium WordPress plugins for SEO, performance optimization, and analytics with 10k+ installations.",
      tags: ["PHP", "WordPress", "JavaScript", "MySQL"],
      role: "Plugin Developer & Maintainer",
      techChanges: "Refactored plugin architecture for better code modularity",
      problems: "Resolved compatibility issues with WordPress 6.0+",
      link: "/project/wordpress-plugins",
      isPrivate: true,
    },
    {
      id: 4,
      title: "Laravel Admin CMS",
      description:
        "Enterprise-grade content management system with role-based access control, media management, and SEO tools.",
      tags: ["Laravel", "Vue.js", "PostgreSQL", "Redis"],
      role: "Backend Lead",
      techChanges: "Implemented Redis caching for 40% performance improvement",
      problems: "Built custom queue system for large file uploads",
      link: "/project/laravel-cms",
      isPrivate: true,
    },
    {
      id: 5,
      title: "Real-time Analytics Dashboard",
      description:
        "Interactive analytics platform with live WebSocket updates, custom visualizations, and exportable reports.",
      tags: ["React", "D3.js", "WebSocket", "Node.js"],
      role: "Full Stack Developer",
      techChanges: "Implemented WebSocket for real-time data streaming",
      problems: "Optimized rendering performance for 100k+ data points",
      link: "/project/analytics-dashboard",
      isPrivate: true,
    },
    {
      id: 6,
      title: "Mobile API Backend",
      description: "Scalable RESTful API with JWT authentication, push notifications, and cloud storage integration.",
      tags: ["Express", "PostgreSQL", "Firebase", "JWT"],
      role: "API Architect",
      techChanges: "Migrated to microservices architecture for better scalability",
      problems: "Implemented rate limiting and security measures",
      link: "/project/mobile-backend",
      isPrivate: true,
    },
  ]

  return (
    <section id="github" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            GitHub <span className="text-primary">Projects</span>
          </h2>
          <p className="text-foreground/60 max-w-2xl mx-auto">
            Explore my private repository projects with detailed insights into my role, technical implementations, and
            challenges overcome.
          </p>
        </div>

        <div className="space-y-4">
          {repos.map((repo) => (
            <Link
              key={repo.id}
              href={repo.link}
              className="group block p-6 bg-card border border-border rounded-xl hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:bg-card/50"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-2">
                    <Github size={20} className="text-primary flex-shrink-0" />
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {repo.title}
                    </h3>
                    <span className="px-2 py-1 bg-primary/10 border border-primary/30 text-primary text-xs rounded-full ml-auto flex-shrink-0">
                      Private
                    </span>
                  </div>

                  <p className="text-foreground/60 text-sm mb-3">{repo.description}</p>

                  <div className="space-y-2 mb-4 text-sm">
                    <p>
                      <span className="text-primary font-semibold">Role:</span>{" "}
                      <span className="text-foreground/70">{repo.role}</span>
                    </p>
                    <p>
                      <span className="text-primary font-semibold">Technical Changes:</span>{" "}
                      <span className="text-foreground/70">{repo.techChanges}</span>
                    </p>
                    <p>
                      <span className="text-primary font-semibold">Problem Solved:</span>{" "}
                      <span className="text-foreground/70">{repo.problems}</span>
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {repo.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-primary/10 border border-primary/30 text-primary text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <ChevronRight
                  className="text-primary/50 group-hover:text-primary group-hover:translate-x-1 transition-all duration-300 flex-shrink-0 mt-1"
                  size={24}
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
