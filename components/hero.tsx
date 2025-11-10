"use client"

import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById("contact")
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute w-96 h-96 bg-primary/20 rounded-full blur-3xl -top-40 -right-40 opacity-30" />
        <div className="absolute w-96 h-96 bg-accent/10 rounded-full blur-3xl -bottom-40 -left-40 opacity-20" />
      </div>

      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8 inline-block">
          <span className="px-4 py-2 rounded-full border border-primary/30 text-primary text-sm font-medium">
            👋 Welcome to my portfolio
          </span>
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
          Full-Stack Developer
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary">
            Building Modern Web Experiences
          </span>
        </h1>

        <p className="text-lg sm:text-xl text-foreground/60 mb-8 max-w-2xl mx-auto leading-relaxed">
          Specialized in MERN stack, PHP, Laravel, WordPress plugin development, and AI-powered chatbots. Let's create
          something extraordinary together.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button
            onClick={scrollToContact}
            className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-all duration-300 flex items-center justify-center gap-2 group"
          >
            Get In Touch
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <a
            href="#projects"
            className="px-8 py-3 border border-primary/50 text-primary rounded-lg font-medium hover:bg-primary/10 transition-all duration-300"
          >
            View My Work
          </a>
        </div>

        {/* Social Links */}
        <div className="flex gap-6 justify-center">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-lg bg-card hover:bg-card border border-border hover:border-primary/50 text-foreground/60 hover:text-primary transition-all duration-300"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-lg bg-card hover:bg-card border border-border hover:border-primary/50 text-foreground/60 hover:text-primary transition-all duration-300"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="mailto:hello@example.com"
            className="p-3 rounded-lg bg-card hover:bg-card border border-border hover:border-primary/50 text-foreground/60 hover:text-primary transition-all duration-300"
            aria-label="Email"
          >
            <Mail size={20} />
          </a>
        </div>
      </div>
    </section>
  )
}
