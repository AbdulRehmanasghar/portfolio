"use client"

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux", "Framer Motion","tanstack Query"],
      icon: "🎨",
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express", "Nest", "PHP", "Laravel", "MongoDB", "PostgreSQL"],
      icon: "⚙️",
    },
    {
      title: "CMS & Plugins",
      skills: ["WordPress", "Plugin Development", "Headless CMS", "Contentful"],
      icon: "🔌",
    },
    {
      title: "AI Engineering",
      skills: ["RAG Chatbots", "LLM Integration", "Vector DB", "Prompt Engineering", "LangChain","MCP Servers",""],
      icon: "🤖",
    },
  ]

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Skills & <span className="text-primary">Expertise</span>
          </h2>
          <p className="text-foreground/60 max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable web applications across the entire stack.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="bg-card border border-border rounded-xl p-8 hover:border-primary/50 hover:bg-card/80 transition-all duration-300 group"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl">{category.icon}</span>
                <h3 className="text-2xl font-bold text-foreground">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-background/50 border border-border rounded-full text-sm text-foreground/80 group-hover:border-primary/50 group-hover:text-primary transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
