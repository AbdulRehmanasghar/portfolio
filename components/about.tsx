"use client"

export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              About <span className="text-primary">Me</span>
            </h2>
            <div className="space-y-4 text-foreground/70">
              <p className="leading-relaxed">
                I'm a passionate full-stack developer with a keen interest in building scalable, user-centric web
                applications. My journey started with WordPress plugin development, which evolved into a deep expertise
                in modern web technologies.
              </p>
              <p className="leading-relaxed">
                Currently, I specialize in MERN stack development, backend services with PHP and Laravel, and
                cutting-edge AI solutions including RAG-based chatbots. I believe in writing clean, maintainable code
                and creating intuitive user experiences.
              </p>
              <p className="leading-relaxed">
                When I'm not coding, I'm exploring new technologies, contributing to open-source projects, or sharing
                knowledge with the developer community.
              </p>
            </div>
          </div>

          {/* Right Column - Stats */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-background/50 border border-border rounded-xl p-6 hover:border-primary/50 transition-colors">
              <div className="text-3xl font-bold text-primary mb-2">5+</div>
              <div className="text-sm text-foreground/60">Years of Experience</div>
            </div>
            <div className="bg-background/50 border border-border rounded-xl p-6 hover:border-primary/50 transition-colors">
              <div className="text-3xl font-bold text-primary mb-2">50+</div>
              <div className="text-sm text-foreground/60">Projects Completed</div>
            </div>
            <div className="bg-background/50 border border-border rounded-xl p-6 hover:border-primary/50 transition-colors">
              <div className="text-3xl font-bold text-primary mb-2">30+</div>
              <div className="text-sm text-foreground/60">Happy Clients</div>
            </div>
            <div className="bg-background/50 border border-border rounded-xl p-6 hover:border-primary/50 transition-colors">
              <div className="text-3xl font-bold text-primary mb-2">7</div>
              <div className="text-sm text-foreground/60">Tech Stacks</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
