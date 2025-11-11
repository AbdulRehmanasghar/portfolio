"use client"

import { useParams } from "next/navigation"
import Link from "next/link"
import { useState } from "react"
import { 
  ArrowLeft, 
  Calendar, 
  User, 
  Zap, 
  AlertCircle, 
  Code2, 
  Target, 
  Award, 
  ChevronDown,
  ChevronUp,
  ExternalLink,
  GitBranch,
  Users,
  TrendingUp,
  CheckCircle,
  Clock,
  Star,
  BarChart3
} from "lucide-react"

export default function ProjectDetail() {
  const params = useParams()
  const projectId = params.id as string
  const [activeTab, setActiveTab] = useState("overview")
  const [expandedChallenges, setExpandedChallenges] = useState<number[]>([])

  const toggleChallenge = (idx: number) => {
    setExpandedChallenges(prev => 
      prev.includes(idx) 
        ? prev.filter(i => i !== idx)
        : [...prev, idx]
    )
  }

  const projects: Record<string, any> = {
    "ecommerce-platform": {
      title: "E-Commerce MERN Platform",
      subtitle: "Full-stack marketplace with real-time features",
      description: "Enterprise-grade e-commerce platform supporting multiple vendors with real-time inventory, advanced analytics, and seamless payment processing.",
      image: "/ecommerce-dashboard.jpg",
      tags: ["React", "Node.js", "MongoDB", "Stripe", "Redis"],
      timeline: "6 months",
      role: "Lead Developer",
      teamSize: "5 developers",
      status: "Production",
      liveUrl: null,
      githubUrl: null,
      metrics: {
        users: "10,000+",
        transactions: "$500K+",
        uptime: "99.9%",
        performance: "60% faster"
      },
      overview: "Developed a comprehensive e-commerce solution from the ground up, architecting both frontend and backend systems. The platform features multi-vendor support, real-time inventory synchronization, secure payment processing through Stripe, and comprehensive analytics dashboards for business insights.",
      techStack: {
        frontend: ["React 18 with Hooks", "Redux Toolkit for State Management", "Tailwind CSS for Styling", "Socket.io for Real-time Updates"],
        backend: ["Node.js with Express Framework", "MongoDB with Mongoose ODM", "JWT Authentication & Authorization", "Redis for Caching & Sessions"],
        infrastructure: ["AWS S3 for File Storage", "Stripe API for Payments", "Docker for Containerization", "Nginx for Load Balancing"]
      },
      architecture: "Implemented microservices architecture with separate services for user management, inventory tracking, payment processing, and notifications. Services communicate through event-driven patterns using Redis pub/sub for real-time updates.",
      keyFeatures: [
        "🛒 Multi-vendor marketplace with vendor dashboards",
        "📊 Real-time inventory synchronization across all vendors", 
        "💳 Secure payment processing with Stripe integration",
        "📱 Mobile-responsive PWA with offline capabilities",
        "📈 Advanced analytics and reporting system",
        "🔐 Role-based access control and permissions",
        "📧 Automated email notifications and order tracking",
        "🎨 Customizable storefront themes and layouts"
      ],
      challenges: [
        {
          title: "Inventory Race Conditions",
          problem: "Multiple simultaneous orders causing inventory overselling and data inconsistencies across vendor stores.",
          solution: "Implemented optimistic locking with database transactions, created a dedicated queue system for order processing, and added inventory reservation mechanism during checkout.",
          impact: "Eliminated overselling completely and reduced order processing conflicts by 100%",
          technical: "Used MongoDB transactions with retry logic and Redis-based distributed locking"
        },
        {
          title: "Payment Processing Delays", 
          problem: "Stripe webhook delays causing user confusion about payment status and abandoned transactions.",
          solution: "Optimized webhook handling with retry mechanisms, implemented real-time payment status updates via WebSocket, and added fallback payment verification.",
          impact: "Reduced payment confirmation time from 30+ seconds to instant, increased conversion rate by 15%",
          technical: "Built webhook queue system with exponential backoff and real-time status broadcasting"
        },
        {
          title: "Performance at Scale",
          problem: "Large product catalogs (50K+ products) causing slow page loads and poor user experience.",
          solution: "Implemented advanced caching strategies, database query optimization, pagination, lazy loading, and CDN integration for assets.",
          impact: "Improved page load times by 60%, reduced server costs by 30%, and enhanced user satisfaction",
          technical: "Redis caching layers, MongoDB indexing optimization, and image compression pipelines"
        }
      ],
      results: [
        { metric: "API Response Time", improvement: "60% reduction", detail: "Average response time decreased from 800ms to 320ms" },
        { metric: "Concurrent Users", achievement: "10,000+ users", detail: "Handles peak traffic without performance degradation" },
        { metric: "Transaction Volume", achievement: "$500K+ processed", detail: "99.9% uptime with zero payment failures" },
        { metric: "Customer Satisfaction", achievement: "95% score", detail: "Based on post-purchase surveys and reviews" }
      ],
      learnings: "This project significantly enhanced my expertise in distributed systems architecture, database optimization strategies, and payment gateway integration. I gained deep insights into handling concurrent transactions, implementing effective caching strategies, and building scalable applications that maintain performance under high load."
    },
    "rag-chatbot": {
      title: "RAG Chatbot Engine",
      subtitle: "AI-powered conversational interface with document understanding",
      description: "Advanced conversational AI system with Retrieval-Augmented Generation for context-aware responses from custom knowledge bases.",
      image: "/ai-chatbot-interface.jpg", 
      tags: ["Python", "OpenAI", "ChromaDB", "FastAPI", "Next.js"],
      timeline: "4 months",
      role: "AI Engineer",
      teamSize: "3 developers", 
      status: "Production",
      liveUrl: null,
      githubUrl: null,
      metrics: {
        accuracy: "90%",
        languages: "15+",
        latency: "60% reduction",
        queries: "50K+ monthly"
      },
      overview: "Architected and developed an intelligent conversational AI system that combines large language models with vector databases for accurate, context-aware responses. The system supports document uploads, multi-language queries, and custom fine-tuning for domain-specific knowledge.",
      techStack: {
        frontend: ["Next.js 14 with App Router", "React Components & Hooks", "TailwindCSS for UI", "Streaming Response UI"],
        backend: ["FastAPI with Python", "LangChain for LLM Orchestration", "ChromaDB for Vector Storage", "Celery for Background Tasks"],
        ai: ["OpenAI GPT-4 & GPT-3.5", "OpenAI Embeddings", "Custom Prompt Engineering", "Vector Similarity Search"]
      },
      architecture: "Microservices architecture with document processing pipeline, vector database for semantic search, LLM orchestration layer, and real-time streaming response system.",
      keyFeatures: [
        "🤖 Advanced RAG implementation for accurate responses",
        "📄 Multi-format document processing (PDF, DOCX, TXT)",
        "🔍 Semantic search with embedding-based retrieval", 
        "🌐 Multi-language support with context preservation",
        "⚡ Streaming responses for better user experience",
        "🎯 Custom fine-tuning for domain expertise",
        "📊 Conversation analytics and improvement insights",
        "🔒 Enterprise security with data privacy controls"
      ],
      challenges: [
        {
          title: "High API Costs",
          problem: "OpenAI API costs escalating rapidly with increased usage, making the solution financially unsustainable.",
          solution: "Implemented intelligent prompt optimization, smart caching for similar queries, and tiered response strategies based on query complexity.",
          impact: "Reduced token usage by 40% while maintaining response quality, saving $2000+ monthly in API costs",
          technical: "Built query similarity detection, response caching with Redis, and prompt compression algorithms"
        },
        {
          title: "Context Length Limitations",
          problem: "Large documents exceeding GPT token limits causing incomplete or inaccurate responses.",
          solution: "Developed intelligent chunking strategies with overlap, implemented hierarchical document processing, and created context window management.",
          impact: "Successfully processed documents up to 100+ pages with maintained context relevance",
          technical: "Recursive text splitting, semantic chunking, and dynamic context window optimization"
        },
        {
          title: "Response Hallucinations", 
          problem: "LLM generating inaccurate information not present in source documents, reducing trust.",
          solution: "Implemented source verification systems, confidence scoring, and citation tracking with fallback mechanisms.",
          impact: "Reduced hallucinations by 85% and increased user trust with transparent source attribution",
          technical: "Built confidence scoring algorithms and source-response alignment verification"
        }
      ],
      results: [
        { metric: "Response Accuracy", improvement: "90% accuracy", detail: "Verified against human-evaluated test sets" },
        { metric: "API Latency", improvement: "60% reduction", detail: "Average response time improved from 5s to 2s" },
        { metric: "Language Support", achievement: "15+ languages", detail: "Maintains context and accuracy across languages" },
        { metric: "User Satisfaction", achievement: "94% positive", detail: "Based on user feedback and interaction analytics" }
      ],
      learnings: "This project provided deep insights into LLM capabilities and limitations, effective prompt engineering techniques, and vector database optimization. I learned to build production-ready AI systems with proper error handling, cost optimization, and performance monitoring."
    }
  }

  const project = projects[projectId]

  if (!project) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-foreground mb-4">Project Not Found</h1>
          <p className="text-foreground/60 mb-8">The project you're looking for doesn't exist.</p>
          <Link
            href="/#github"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
          >
            <ArrowLeft size={16} /> Back to Projects
          </Link>
        </div>
      </div>
    )
  }

  const tabs = [
    { id: "overview", label: "Overview", icon: Target },
    { id: "technical", label: "Technical Details", icon: Code2 },
    { id: "challenges", label: "Challenges & Solutions", icon: Zap },
    { id: "results", label: "Results & Impact", icon: TrendingUp }
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Enhanced Header with Breadcrumbs */}
      <div className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-3 text-sm text-foreground/60">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <span>/</span>
            <Link href="/#github" className="hover:text-primary transition-colors">Projects</Link>
            <span>/</span>
            <span className="text-foreground font-medium">{project.title}</span>
          </div>
          <Link
            href="/#github"
            className="inline-flex items-center gap-2 text-foreground/80 hover:text-primary transition-colors mt-2 font-medium"
          >
            <ArrowLeft size={18} /> Back to Projects
          </Link>
        </div>
      </div>

      {/* Hero Section with Enhanced Design */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Project Info */}
            <div className="space-y-6">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium">
                  <CheckCircle size={16} />
                  {project.status}
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                  {project.title}
                </h1>
                <p className="text-xl text-primary font-semibold">{project.subtitle}</p>
                <p className="text-lg text-foreground/70 leading-relaxed">{project.description}</p>
              </div>

              {/* Key Metrics */}
              <div className="grid grid-cols-2 gap-4">
                {Object.entries(project.metrics).map(([key, value]) => (
                  <div key={key} className="p-4 bg-card/50 border border-border/50 rounded-lg backdrop-blur-sm">
                    <p className="text-2xl font-bold text-foreground">{value as string}</p>
                    <p className="text-sm text-foreground/60 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</p>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
                  >
                    <ExternalLink size={16} />
                    View Live
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground hover:bg-card transition-colors font-medium rounded-lg"
                  >
                    <GitBranch size={16} />
                    View Code
                  </a>
                )}
              </div>
            </div>

            {/* Project Meta Info */}
            <div className="space-y-6">
              <div className="aspect-video bg-card/50 border border-border rounded-xl overflow-hidden">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-foreground/40">
                    <Code2 size={48} />
                  </div>
                )}
              </div>

              {/* Meta Information Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-card border border-border rounded-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <Calendar size={20} className="text-primary" />
                    <span className="text-sm text-foreground/60">Duration</span>
                  </div>
                  <p className="font-semibold text-foreground">{project.timeline}</p>
                </div>
                <div className="p-4 bg-card border border-border rounded-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <User size={20} className="text-primary" />
                    <span className="text-sm text-foreground/60">Role</span>
                  </div>
                  <p className="font-semibold text-foreground">{project.role}</p>
                </div>
                <div className="p-4 bg-card border border-border rounded-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <Users size={20} className="text-primary" />
                    <span className="text-sm text-foreground/60">Team Size</span>
                  </div>
                  <p className="font-semibold text-foreground">{project.teamSize}</p>
                </div>
                <div className="p-4 bg-card border border-border rounded-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <Star size={20} className="text-primary" />
                    <span className="text-sm text-foreground/60">Status</span>
                  </div>
                  <p className="font-semibold text-foreground">{project.status}</p>
                </div>
              </div>

              {/* Technology Tags */}
              <div>
                <h3 className="text-sm font-medium text-foreground/60 mb-3">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag: string) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-primary/10 border border-primary/20 text-primary text-sm rounded-full font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Tab Navigation */}
      <div className="sticky top-16 z-40 bg-background/95 backdrop-blur-md border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto">
            {tabs.map((tab) => {
              const Icon = tab.icon
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-6 py-4 border-b-2 transition-colors whitespace-nowrap font-medium ${
                    activeTab === tab.id
                      ? "border-primary text-primary bg-primary/5"
                      : "border-transparent text-foreground/60 hover:text-foreground hover:border-border"
                  }`}
                >
                  <Icon size={16} />
                  {tab.label}
                </button>
              )
            })}
          </div>
        </div>
      </div>

      {/* Main Content with Enhanced Sections */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="min-h-[60vh]">
          {activeTab === "overview" && (
            <div className="space-y-12 animate-in fade-in duration-300">
              {/* Project Overview */}
              <section>
                <h2 className="text-3xl font-bold text-foreground mb-6">Project Overview</h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-foreground/80 leading-relaxed text-lg">{project.overview}</p>
                </div>
              </section>

              {/* Architecture */}
              <section>
                <h3 className="text-2xl font-bold text-foreground mb-4">System Architecture</h3>
                <div className="p-6 bg-card border border-border rounded-xl">
                  <p className="text-foreground/80 leading-relaxed">{project.architecture}</p>
                </div>
              </section>

              {/* Key Features */}
              <section>
                <h3 className="text-2xl font-bold text-foreground mb-6">Key Features</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {project.keyFeatures.map((feature: string, idx: number) => (
                    <div key={idx} className="flex items-start gap-3 p-4 bg-card border border-border rounded-lg">
                      <CheckCircle size={20} className="text-primary mt-0.5 shrink-0" />
                      <span className="text-foreground/80">{feature}</span>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          )}

          {activeTab === "technical" && (
            <div className="space-y-12 animate-in fade-in duration-300">
              {/* Technology Stack */}
              <section>
                <h2 className="text-3xl font-bold text-foreground mb-6">Technology Stack</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  {Object.entries(project.techStack).map(([category, technologies]) => (
                    <div key={category} className="p-6 bg-card border border-border rounded-xl">
                      <h4 className="text-lg font-semibold text-foreground mb-4 capitalize">
                        {category}
                      </h4>
                      <ul className="space-y-2">
                        {(technologies as string[]).map((tech: string, idx: number) => (
                          <li key={idx} className="flex items-start gap-3 text-foreground/70">
                            <span className="text-primary mt-1 shrink-0">▸</span>
                            {tech}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          )}

          {activeTab === "challenges" && (
            <div className="space-y-8 animate-in fade-in duration-300">
              <h2 className="text-3xl font-bold text-foreground mb-6">Challenges & Solutions</h2>
              {project.challenges.map((challenge: any, idx: number) => (
                <div key={idx} className="border border-border rounded-xl overflow-hidden">
                  <button
                    onClick={() => toggleChallenge(idx)}
                    className="w-full p-6 text-left bg-card hover:bg-card/80 transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-start gap-4">
                        <AlertCircle size={24} className="text-destructive mt-1 shrink-0" />
                        <div>
                          <h3 className="text-xl font-bold text-foreground mb-2">{challenge.title}</h3>
                          <p className="text-foreground/60">{challenge.problem}</p>
                        </div>
                      </div>
                      {expandedChallenges.includes(idx) ? (
                        <ChevronUp className="text-foreground/60 shrink-0" />
                      ) : (
                        <ChevronDown className="text-foreground/60 shrink-0" />
                      )}
                    </div>
                  </button>
                  
                  {expandedChallenges.includes(idx) && (
                    <div className="px-6 pb-6 space-y-4 animate-in slide-in-from-top duration-200">
                      <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
                        <h4 className="font-semibold text-green-800 dark:text-green-300 mb-2">Solution</h4>
                        <p className="text-green-700 dark:text-green-400">{challenge.solution}</p>
                      </div>
                      
                      <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
                        <h4 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">Impact</h4>
                        <p className="text-blue-700 dark:text-blue-400">{challenge.impact}</p>
                      </div>
                      
                      {challenge.technical && (
                        <div className="p-4 bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg">
                          <h4 className="font-semibold text-purple-800 dark:text-purple-300 mb-2">Technical Implementation</h4>
                          <p className="text-purple-700 dark:text-purple-400">{challenge.technical}</p>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {activeTab === "results" && (
            <div className="space-y-12 animate-in fade-in duration-300">
              <h2 className="text-3xl font-bold text-foreground mb-6">Results & Impact</h2>
              
              {/* Results Grid */}
              <div className="grid md:grid-cols-2 gap-6">
                {project.results.map((result: any, idx: number) => (
                  <div key={idx} className="p-6 bg-card border border-border rounded-xl">
                    <div className="flex items-start gap-3 mb-3">
                      <BarChart3 size={24} className="text-primary mt-1 shrink-0" />
                      <div>
                        <h3 className="text-lg font-bold text-foreground">{result.metric}</h3>
                        <p className="text-2xl font-bold text-primary">{result.improvement || result.achievement}</p>
                      </div>
                    </div>
                    <p className="text-foreground/70 text-sm">{result.detail}</p>
                  </div>
                ))}
              </div>

              {/* Key Learnings */}
              <section>
                <h3 className="text-2xl font-bold text-foreground mb-4">Key Learnings</h3>
                <div className="p-6 bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/20 rounded-xl">
                  <p className="text-foreground/80 leading-relaxed text-lg">{project.learnings}</p>
                </div>
              </section>
            </div>
          )}
        </div>

        {/* Call to Action */}
        <div className="mt-16 pt-8 border-t border-border">
          <div className="text-center space-y-6">
            <h3 className="text-2xl font-bold text-foreground">Interested in Similar Projects?</h3>
            <p className="text-foreground/60 max-w-2xl mx-auto">
              I'd love to discuss how I can bring this level of expertise and innovation to your next project.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/#contact"
                className="px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
              >
                Get In Touch
              </Link>
              <Link
                href="/#github"
                className="px-8 py-4 border border-border text-foreground hover:bg-card transition-colors font-medium rounded-lg"
              >
                View All Projects
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}