import { useState, useEffect } from "react";

const navItems = [
  { path: "~/home", label: "home", href: "#home" },
  { path: "~/about", label: "about", href: "#about" },
  { path: "~/skills", label: "skills", href: "#skills" },
  { path: "~/experience", label: "experience", href: "#experience" },
  { path: "~/projects", label: "projects", href: "#projects" },
  { path: "~/resume", label: "resume", href: "#resume" },
  { path: "~/contact", label: "contact", href: "#contact" },
];

export const TerminalNavigation = () => {
  const [activeItem, setActiveItem] = useState("home");

  const scrollToSection = (href: string, label: string) => {
    setActiveItem(label);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ 
        behavior: "smooth",
        block: "start"
      });
    }
  };

  // Update active item based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => ({
        id: item.href.substring(1),
        element: document.querySelector(item.href)
      }));

      const currentSection = sections.find(section => {
        if (section.element) {
          const rect = section.element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        const item = navItems.find(item => item.href === `#${currentSection.id}`);
        if (item) {
          setActiveItem(item.label);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-lg border-b border-terminal-border/50 transition-all duration-300">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent"></div>
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="flex items-center h-16">
          <div className="flex items-center gap-2 mr-8">
            <span className="terminal-prompt glow-text">user@portfolio:~$</span>
          </div>
          <div className="flex items-center gap-6">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href, item.label)}
                className={`text-sm transition-all duration-300 hover:text-primary hover:scale-105 relative group ${
                  activeItem === item.label ? "text-primary glow-text" : "text-muted-foreground"
                }`}
              >
                <span className="relative z-10">{item.path}</span>
                {activeItem === item.label && (
                  <div className="absolute inset-0 bg-primary/10 rounded blur-sm"></div>
                )}
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};