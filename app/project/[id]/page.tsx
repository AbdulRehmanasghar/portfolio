"use client"

import { useParams, useRouter } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, Calendar, User, Zap, AlertCircle } from "lucide-react"

export default function ProjectDetail() {
  const router = useRouter()
  const params = useParams()
  const projectId = params.id as string

  const projects: Record<string, any> = {
    "ecommerce-platform": {
      title: "B2B E-Commerce MERN & Laravel Admin Platform",
      description:
        "Feature enhancement and maintenance phase for a full-stack B2B2 e-commerce admin platform with advanced analytics, statistics, and performance optimization.",
      image: "/ecommerce-dashboard.jpg",
      tags: ["React", "Node.js", "MongoDB", "Laravel"],
      timeline: "Currently Ongoing",
      role: "Lead Full Stack Developer",
      overview:
        "Joined the project during its late development stage to refine, optimize, and expand functionality. Enhanced the React-based frontend, resolved critical bugs, implemented analytics and statistics modules, and optimized Laravel backend performance.",
      techStack: [
        "Frontend: React 18, Redux Toolkit, Tailwind CSS",
        "Backend: Laravel, Node.js, Express, MongoDB",
        "Infrastructure: AWS S3 for file storage, EC2 for hosting, Redis for caching"
      ],
      techChanges:
        "Improved API efficiency, enhanced frontend component structure, and implemented real-time data visualization for analytics pages. Refactored backend endpoints to ensure stable integration between Laravel and MERN modules.",
      challenges: [
        "Debugging complex API integration issues between Laravel backend and React frontend",
        "Improving analytics rendering performance with large datasets",
        "Ensuring smooth deployment and performance consistency across environments"
      ],
      results: [
        "Improved overall platform stability and responsiveness by 40%",
        "Enhanced user experience through refined UI and faster data visualization",
        "Successfully delivered analytics and reporting features with real-time data updates"
      ],
      learnings:
        "Strengthened expertise in full-stack integration between Laravel and MERN ecosystems. Gained deeper insight into performance tuning, bug tracking, and real-time data handling for enterprise admin applications."
    },

    "rag-chatbot": {
      title: "RAG Chatbot Engine",
      description:
        "Context-aware AI assistant that enables users to interact with OpenAI models without storing any chat history permanently. Designed for real-time, privacy-focused conversational AI with future-proof memory layers.",
      image: "/ai-chatbot-interface.jpg",
      tags: ["Python", "LLMs", "Vector DB", "Next.js", "FastAPI"],
      timeline: "4 months (Jul 2024 - Oct 2024)",
      role: "Full Stack Developer",
      overview:
        "Developed a modern AI assistant interface allowing users to chat with OpenAI models securely, without persistent storage. Created a sleek mobile-first UI, real-time responses, and groundwork for future context-based memory using vector databases.",
      techStack: [
        "Frontend: Next.js 14, React Components, TailwindCSS, Mobile-responsive UI",
        "Backend: FastAPI, Python, Langchain for LLM orchestration",
        "AI: OpenAI GPT-4 API, Embedding models, ChromaDB/Pinecone for future vector-based memory"
      ],
      techChanges:
        "Implemented ephemeral chat storage to ensure privacy, added real-time streaming responses for enhanced UX, and prepared modular architecture to integrate future vector DB memory layers for context-aware conversations.",
      challenges: [
        "Preventing any chat data from being stored permanently while maintaining session context",
        "Ensuring responsive, mobile-friendly UI with real-time streaming from the AI backend",
        "Designing architecture ready for future RAG memory integration without affecting current UX"
      ],
      results: [
        "Delivered a fully functional, privacy-focused AI chat interface",
        "Achieved smooth real-time responses for user queries",
        "Built foundation for future context-aware AI using vector databases and memory layers"
      ],
      learnings:
        "Gained practical experience in privacy-focused AI system design, ephemeral session handling, and integrating LLMs with modern web frameworks. Learned best practices for building scalable, context-ready AI interfaces.",
    },

    "wordpress-plugins": {
      title: "WordPress Plugin Suite",
      description:
        "Suite of 5 premium WordPress plugins with 10,000+ installations for SEO optimization, performance monitoring, and advanced analytics.",
      image: "/wordpress-plugins.jpg",
      tags: ["PHP", "WordPress", "JavaScript", "MySQL", "REST API"],
      timeline: "Ongoing (12+ months)",
      role: "Plugin Developer & Maintainer",
      overview:
        "Created and maintained a suite of premium WordPress plugins that help businesses optimize their websites for performance and SEO. Active plugin ecosystem with monthly updates and support.",
      techStack: [
        "PHP 8, WordPress Plugin API, Custom Post Types, Taxonomies",
        "Frontend: Vue.js for admin interface, Vanilla JS for frontend",
        "Database: MySQL custom tables with efficient indexing",
      ],
      techChanges:
        "Refactored plugin architecture for better modularity and testability. Migrated from legacy PHP to OOP patterns. Implemented automated testing with PHPUnit.",
      challenges: [
        "WordPress version compatibility - Built version detection and fallback mechanisms",
        "Database performance with large sites - Optimized queries and implemented batching",
        "Security vulnerabilities - Implemented nonces, escaping, and regular security audits",
      ],
      results: [
        "10,000+ active installations with 4.8/5 star rating",
        "99% uptime across all plugins",
        "Monthly recurring revenue from premium versions",
      ],
      learnings:
        "Gained expertise in WordPress ecosystem, security best practices, and long-term software maintenance. Learned how to manage community feedback and continuous updates.",
    },
    // "laravel-cms": {
    //   title: "Laravel Admin CMS",
    //   description:
    //     "Enterprise-grade content management system with role-based access control, media management, and advanced SEO optimization tools.",
    //   image: "/cms-dashboard.jpg",
    //   tags: ["Laravel", "Vue.js", "PostgreSQL", "Redis", "Blade"],
    //   timeline: "5 months (Feb 2024 - Jun 2024)",
    //   role: "Backend Lead",
    //   overview:
    //     "Architected and developed a scalable CMS for enterprise clients supporting multiple content types, workflows, and user roles. Handles 500K+ page views monthly.",
    //   techStack: [
    //     "Backend: Laravel 11, PostgreSQL, Redis for caching",
    //     "Frontend: Vue 3, Inertia.js for server-side rendering",
    //     "APIs: RESTful and GraphQL endpoints for content delivery",
    //   ],
    //   techChanges:
    //     "Implemented Redis caching layer reducing database queries by 70%, improving response times by 40%. Added async job processing with Laravel Queues for heavy operations.",
    //   challenges: [
    //     "Complex role-based permissions - Built custom authorization middleware with policy-based access control",
    //     "Large file uploads - Implemented chunked uploads with resume capability and virus scanning",
    //     "High concurrency traffic - Used database connection pooling and query optimization",
    //   ],
    //   results: [
    //     "40% performance improvement with caching strategy",
    //     "Support for 500K+ monthly page views",
    //     "Admin panel used by 100+ content managers",
    //   ],
    //   learnings:
    //     "Mastered Laravel ecosystem, database design for scalability, and building permission systems. Learned effective team collaboration for backend development.",
    // },
    // "analytics-dashboard": {
    //   title: "Real-time Analytics Dashboard",
    //   description:
    //     "Interactive analytics platform with live WebSocket updates, custom visualizations, and exportable reports for data-driven insights.",
    //   image: "/analytics-dashboard.png",
    //   tags: ["React", "D3.js", "WebSocket", "Node.js", "PostgreSQL"],
    //   timeline: "3 months (Aug 2024 - Oct 2024)",
    //   role: "Full Stack Developer",
    //   overview:
    //     "Built a comprehensive analytics dashboard that processes and visualizes real-time data from multiple sources. Supports custom dashboards, scheduled reports, and data export.",
    //   techStack: [
    //     "Frontend: React, D3.js, Chart.js for visualizations",
    //     "Backend: Node.js Express server with WebSocket support",
    //     "Data: PostgreSQL with time-series data optimization",
    //   ],
    //   techChanges:
    //     "Implemented WebSocket connections for live data streaming, reducing update latency from 5s to real-time. Added data aggregation pipelines for efficient querying.",
    //   challenges: [
    //     "Rendering 100K+ data points without performance degradation - Implemented virtual scrolling and canvas-based rendering",
    //     "Memory leaks with WebSocket connections - Proper cleanup and connection pooling",
    //     "Complex time-series queries - Optimized with materialized views and caching",
    //   ],
    //   results: [
    //     "Real-time updates with <100ms latency",
    //     "Support for 100K+ data points without lag",
    //     "3x faster report generation with aggregation",
    //   ],
    //   learnings:
    //     "Advanced data visualization techniques, real-time data handling, and performance optimization for large datasets.",
    // },
    "mobile-backend": {
      title: "Mobile App Backend API",
      description:
        "Scalable RESTful API powering mobile chat functionality with Twilio integration, push notifications via Firebase, JWT authentication, and cloud storage support.",
      image: "/mobile-backend-api.jpg",
      tags: ["Express", "PostgreSQL", "Firebase", "Twilio", "JWT", "Docker"],
      timeline: "4 months (Sep 2024 - Dec 2024)",
      role: "API Architect",
      overview:
        "Designed and implemented a robust backend API for mobile applications, including real-time chat using Twilio, push notifications with Firebase, user authentication, and social features. Supports 50K+ users with scalable architecture.",
      techStack: [
        "Backend: Express.js, Node.js",
        "Database: PostgreSQL with Sequelize ORM",
        "Chat & Messaging: Twilio Programmable Chat",
        "Push Notifications: Firebase Cloud Messaging",
        "Authentication: JWT tokens, refresh tokens, OAuth 2.0",
        "Deployment: Docker, AWS ECS"
      ],
      techChanges:
        "Added Twilio-based real-time chat module, integrated Firebase push notifications, and implemented API versioning, rate limiting, and scalable architecture for high concurrency.",
      challenges: [
        "Ensuring reliable message delivery and synchronization across devices via Twilio",
        "Push notification reliability and handling offline devices with Firebase",
        "Secure authentication and token management across multiple devices"
      ],
      results: [
        "Successfully serving 50K+ daily active users",
        "Real-time chat and notifications delivered with 99.9% reliability",
        "Average API response time <200ms with high concurrency handling"
      ],
      learnings:
        "Deepened expertise in mobile backend architecture, real-time chat integration, push notifications, and scalable API design for high-traffic mobile applications."
    },

  }

  const project = projects[projectId]

  if (!project) {
    return (
      <div className="min-h-screen bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h1 className="text-3xl font-bold text-foreground mb-4">Project Not Found</h1>
          <Link
            href="/#github"
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
          >
            <ArrowLeft size={16} /> Back to Projects
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header Navigation */}
      <div className="sticky top-0 z-40 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link
            href="/#github"
            className="inline-flex items-center gap-2 text-foreground/60 hover:text-primary transition-colors"
          >
            <ArrowLeft size={18} /> Back to Projects
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="mb-12">
          <img
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            className="w-full h-80 object-cover rounded-xl mb-8"
          />

          <div className="flex items-start justify-between gap-4 mb-6 flex-wrap">
            <div>
              <h1 className="text-4xl font-bold text-foreground mb-2">{project.title}</h1>
              <p className="text-foreground/60 text-lg">{project.description}</p>
            </div>
          </div>

          {/* Meta Information */}
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            <div className="flex items-center gap-3 p-4 bg-card border border-border rounded-lg">
              <Calendar size={20} className="text-primary flex-shrink-0" />
              <div>
                <p className="text-sm text-foreground/60">Timeline</p>
                <p className="font-semibold text-foreground">{project.timeline}</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 bg-card border border-border rounded-lg">
              <User size={20} className="text-primary flex-shrink-0" />
              <div>
                <p className="text-sm text-foreground/60">Role</p>
                <p className="font-semibold text-foreground">{project.role}</p>
              </div>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {project.tags.map((tag: string) => (
              <span
                key={tag}
                className="px-4 py-2 bg-primary/10 border border-primary/30 text-primary text-sm rounded-full font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Content Sections */}
        <div className="space-y-12">
          {/* Overview */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Overview</h2>
            <p className="text-foreground/70 leading-relaxed">{project.overview}</p>
          </section>

          {/* Tech Stack */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Technology Stack</h2>
            <ul className="space-y-2">
              {project.techStack.map((tech: string, idx: number) => (
                <li key={idx} className="flex gap-3 text-foreground/70">
                  <span className="text-primary flex-shrink-0 mt-1">▹</span>
                  {tech}
                </li>
              ))}
            </ul>
          </section>

          {/* Technical Changes */}
          <section className="bg-primary/5 border border-primary/20 rounded-xl p-6">
            <div className="flex gap-3 mb-3">
              <Zap size={24} className="text-primary flex-shrink-0" />
              <h2 className="text-2xl font-bold text-foreground">Technical Changes & Improvements</h2>
            </div>
            <p className="text-foreground/70 leading-relaxed">{project.techChanges}</p>
          </section>

          {/* Challenges & Solutions */}
          <section>
            <div className="flex gap-3 mb-4">
              <AlertCircle size={24} className="text-destructive flex-shrink-0" />
              <h2 className="text-2xl font-bold text-foreground">Challenges & Solutions</h2>
            </div>
            <div className="space-y-4">
              {project.challenges.map((challenge: string, idx: number) => (
                <div key={idx} className="p-4 bg-card border border-border rounded-lg">
                  <p className="text-foreground/80">{challenge}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Results */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Results & Impact</h2>
            <ul className="space-y-2">
              {project.results.map((result: string, idx: number) => (
                <li key={idx} className="flex gap-3 text-foreground/70">
                  <span className="text-primary flex-shrink-0 mt-1">✓</span>
                  {result}
                </li>
              ))}
            </ul>
          </section>

          {/* Learnings */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Key Learnings</h2>
            <p className="text-foreground/70 leading-relaxed">{project.learnings}</p>
          </section>
        </div>

        {/* CTA */}
        <div className="mt-16 pt-8 border-t border-border flex gap-4">
          <Link
            href="/#contact"
            className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
          >
            Get in Touch
          </Link>
          <Link
            href="/#github"
            className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-background border border-border text-foreground hover:bg-card transition-colors font-medium"
          >
            <ArrowLeft size={16} /> View All Projects
          </Link>
        </div>
      </div>
    </div>
  )
}
