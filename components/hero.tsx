"use client"

import { useEffect, useState } from "react"
import { ArrowRight, Github, Linkedin, Mail, Copy, Check } from "lucide-react"

export default function Hero() {
  const [copied, setCopied] = useState(false)
  const [open, setOpen] = useState(false)
  const email = "abdulrehmanbhatti6598@gmail.com"

  const scrollToContact = () => {
    const element = document.getElementById("contact")
    element?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    if (!copied) return
    const t = setTimeout(() => setCopied(false), 2000)
    return () => clearTimeout(t)
  }, [copied])

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email)
      setCopied(true)
    } catch (e) {
      // Fallback for older browsers
      const ta = document.createElement("textarea")
      ta.value = email
      document.body.appendChild(ta)
      ta.select()
      try {
        document.execCommand("copy")
        setCopied(true)
      } catch (_) {
        // ignore
      }
      ta.remove()
    }
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
        Core expertise in the MERN stack, with additional experience in PHP, Laravel, WordPress plugin development, and AI-powered chatbots. 
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
        <div className="flex gap-6 justify-center items-center">
          <a
            href="https://github.com/SamiRehmanCode"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-lg bg-card border border-border hover:border-primary/50 text-foreground/60 hover:text-primary transition-all duration-300"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/abdulrehman-bhatti-b753b8264/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-lg bg-card border border-border hover:border-primary/50 text-foreground/60 hover:text-primary transition-all duration-300"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>

          {/* Email with hover tooltip + copy button */}
          <div
            className="relative"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
            onFocus={() => setOpen(true)}
            onBlur={() => setOpen(false)}
          >
            <a
              href={`mailto:${email}`}
              className="w-10 h-10 flex items-center justify-center rounded-lg bg-card border border-border hover:border-primary/50 text-foreground/60 hover:text-primary transition-all duration-300"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>

            {/* Top-center tooltip that appears on hover/focus and is interactive */}
            <div
              className={
                "absolute -top-7 left-0 transition-all duration-150 flex items-center gap-2 bg-card/30 border border-border/20 rounded-sm px-2 py-0.5 text-xs backdrop-blur-sm " +
                (open
                  ? "opacity-100 pointer-events-auto translate-y-0"
                  : "opacity-0 pointer-events-none translate-y-1")
              }
              role="dialog"
              aria-hidden={!open}
            >
              <button
                type="button"
                onClick={copyEmail}
                className="p-1 rounded hover:bg-primary/10 text-foreground/70"
                aria-label="Copy email"
              >
                {copied ? <Check size={14} className="text-green-500" /> : <Copy size={14} />}
              </button>
              <span className="text-xs text-foreground/100">{email}</span>
            </div>

            {/* transient copy feedback */}
            {copied && (
              <div className="absolute top-full right-0 mt-2 text-xs text-green-500 bg-transparent">
                Email copied
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
