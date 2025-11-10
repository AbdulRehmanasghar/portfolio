"use client"

import { ExternalLink, Github } from "lucide-react"

export default function Projects() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "Full-stack MERN application with real-time inventory management, payment gateway integration, and admin dashboard.",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "/ecommerce-dashboard.jpg",
      links: {
        github: "#",
        live: "#",
      },
    },
    {
      title: "AI Chatbot Assistant",
      description:
        "RAG-based intelligent chatbot with document understanding, context awareness, and multi-language support.",
      tags: ["Next.js", "Python", "Vector DB", "LLMs"],
      image: "/ai-chatbot-interface.jpg",
      links: {
        github: "#",
        live: "#",
      },
    },
    {
      title: "WordPress Plugin Suite",
      description:
        "Custom WordPress plugins for SEO optimization, performance monitoring, and advanced analytics reporting.",
      tags: ["PHP", "WordPress", "JavaScript", "MySQL"],
      image: "/wordpress-plugins.jpg",
      links: {
        github: "#",
        live: "#",
      },
    },
    {
      title: "Laravel CMS",
      description:
        "Enterprise-level content management system with role-based access control, media management, and SEO tools.",
      tags: ["Laravel", "Vue.js", "PostgreSQL", "Redis"],
      image: "/cms-dashboard.jpg",
      links: {
        github: "#",
        live: "#",
      },
    },
    {
      title: "Real-time Analytics Dashboard",
      description:
        "Interactive dashboard with live data visualization, user behavior tracking, and customizable reports.",
      tags: ["React", "D3.js", "WebSocket", "Node.js"],
      image: "/analytics-dashboard.png",
      links: {
        github: "#",
        live: "#",
      },
    },
    {
      title: "Mobile App Backend",
      description:
        "Scalable RESTful API with JWT authentication, real-time notifications, and cloud storage integration.",
      tags: ["Express", "PostgreSQL", "Firebase", "JWT"],
      image: "/mobile-backend-api.jpg",
      links: {
        github: "#",
        live: "#",
      },
    },
  ]

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-foreground/60 max-w-2xl mx-auto">
            A selection of recent projects showcasing my expertise in full-stack development and innovative solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-background border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden h-40 bg-background/50">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2">{project.title}</h3>
                <p className="text-foreground/60 text-sm mb-4 line-clamp-2">{project.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-primary/10 border border-primary/30 text-primary text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3 pt-4 border-t border-border">
                  <a
                    href={project.links.github}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-background hover:bg-background/80 border border-border hover:border-primary/50 text-foreground/70 hover:text-primary rounded-lg transition-colors text-sm font-medium"
                  >
                    <Github size={16} /> Code
                  </a>
                  <a
                    href={project.links.live}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-primary/10 hover:bg-primary/20 text-primary rounded-lg transition-colors text-sm font-medium"
                  >
                    <ExternalLink size={16} /> Live
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
