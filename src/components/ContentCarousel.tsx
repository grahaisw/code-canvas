import { useState, useEffect } from "react";
import { ChevronDown, ChevronUp, Mail, Phone, MapPin, Briefcase, Code, Palette } from "lucide-react";
import { Button } from "@/components/ui/button";

const pages = [
  {
    id: 1,
    title: "Welcome",
    content: (
      <div className="space-y-6 animate-fade-in">
        <h2 className="text-5xl md:text-6xl font-bold text-foreground text-balance">
          Hello, I'm a Software Developer
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl text-balance">
          Crafting elegant solutions through clean code and innovative design
        </p>
        <div className="pt-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-primary text-sm font-medium">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
            Available for opportunities
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 2,
    title: "About Me",
    content: (
      <div className="space-y-8 animate-fade-in">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">About Me</h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
            I'm a passionate software developer with over 5 years of experience in building 
            scalable web applications. My expertise spans across modern JavaScript frameworks, 
            cloud architecture, and creating intuitive user experiences.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl">
          <div className="flex items-start gap-4 p-4 rounded-lg bg-secondary/50 hover:bg-secondary transition-smooth">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Code className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-1">Full Stack Development</h3>
              <p className="text-sm text-muted-foreground">React, Node.js, TypeScript, Python</p>
            </div>
          </div>
          
          <div className="flex items-start gap-4 p-4 rounded-lg bg-secondary/50 hover:bg-secondary transition-smooth">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Palette className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-1">UI/UX Design</h3>
              <p className="text-sm text-muted-foreground">Figma, Tailwind CSS, Design Systems</p>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 3,
    title: "Portfolio",
    content: (
      <div className="space-y-8 animate-fade-in">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Portfolio</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
            A selection of projects that showcase my skills and passion for development
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl">
          {[
            {
              title: "E-Commerce Platform",
              description: "Full-stack marketplace with payment integration",
              tech: "React, Node.js, Stripe",
            },
            {
              title: "Task Management App",
              description: "Real-time collaboration tool for teams",
              tech: "TypeScript, WebSocket, MongoDB",
            },
            {
              title: "Portfolio Website",
              description: "Modern portfolio with CMS integration",
              tech: "Next.js, Tailwind, Sanity",
            },
            {
              title: "Analytics Dashboard",
              description: "Data visualization and reporting platform",
              tech: "React, D3.js, PostgreSQL",
            },
          ].map((project, index) => (
            <div
              key={index}
              className="group p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-smooth shadow-soft hover:shadow-medium cursor-pointer"
            >
              <div className="flex items-start gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-smooth">
                  <Briefcase className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-smooth">
                  {project.title}
                </h3>
              </div>
              <p className="text-sm text-muted-foreground mb-3">{project.description}</p>
              <p className="text-xs text-muted-foreground font-medium">{project.tech}</p>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: 4,
    title: "Contact",
    content: (
      <div className="space-y-8 animate-fade-in">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Get In Touch</h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>
        </div>
        
        <div className="space-y-4 max-w-xl">
          {[
            { icon: Mail, label: "Email", value: "john.dev@example.com", href: "mailto:john.dev@example.com" },
            { icon: Phone, label: "Phone", value: "+1 (555) 123-4567", href: "tel:+15551234567" },
            { icon: MapPin, label: "Location", value: "San Francisco, CA", href: "#" },
          ].map((contact, index) => (
            <a
              key={index}
              href={contact.href}
              className="flex items-center gap-4 p-5 rounded-xl bg-card border border-border hover:border-primary/50 transition-smooth shadow-soft hover:shadow-medium group"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-smooth">
                <contact.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">{contact.label}</p>
                <p className="font-medium text-foreground group-hover:text-primary transition-smooth">
                  {contact.value}
                </p>
              </div>
            </a>
          ))}
        </div>
        
        <div className="pt-6">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-medium hover:shadow-lg transition-smooth"
          >
            Download Resume
          </Button>
        </div>
      </div>
    ),
  },
];

export const ContentCarousel = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % pages.length);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + pages.length) % pages.length);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown") nextPage();
      if (e.key === "ArrowUp") prevPage();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="relative h-full flex flex-col bg-background">
      {/* Content Area */}
      <div className="flex-1 overflow-hidden flex items-center justify-center p-8 md:p-12 lg:p-16">
        <div className="w-full max-w-5xl">
          {pages[currentPage].content}
        </div>
      </div>

      {/* Navigation */}
      <div className="absolute bottom-8 right-8 flex flex-col gap-2">
        <button
          onClick={prevPage}
          disabled={currentPage === 0}
          className="w-12 h-12 rounded-full bg-card border border-border hover:border-primary text-muted-foreground hover:text-primary disabled:opacity-30 disabled:cursor-not-allowed transition-smooth shadow-soft hover:shadow-medium flex items-center justify-center"
          aria-label="Previous page"
        >
          <ChevronUp className="w-5 h-5" />
        </button>
        
        <div className="flex flex-col items-center gap-2 py-2">
          {pages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index)}
              className={`w-2 h-2 rounded-full transition-smooth ${
                index === currentPage
                  ? "bg-primary w-2 h-8"
                  : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
              }`}
              aria-label={`Go to page ${index + 1}`}
            />
          ))}
        </div>
        
        <button
          onClick={nextPage}
          disabled={currentPage === pages.length - 1}
          className="w-12 h-12 rounded-full bg-card border border-border hover:border-primary text-muted-foreground hover:text-primary disabled:opacity-30 disabled:cursor-not-allowed transition-smooth shadow-soft hover:shadow-medium flex items-center justify-center"
          aria-label="Next page"
        >
          <ChevronDown className="w-5 h-5" />
        </button>
      </div>

      {/* Page Indicator */}
      <div className="absolute bottom-8 left-8 text-sm text-muted-foreground font-medium">
        {currentPage + 1} / {pages.length}
      </div>
    </div>
  );
};
