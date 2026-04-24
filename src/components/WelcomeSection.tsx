import { TerminalWindow } from "./TerminalWindow";
import { TypingEffect } from "./TypingEffect";
import tuxPenguin from "@/assets/tux-penguin.png";
import { Github, Linkedin, Code, Twitter } from "lucide-react";

export const WelcomeSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-20">
      <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-8 items-center">
        <div className="space-y-6 fade-in">
          <TerminalWindow title="welcome.sh">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="terminal-prompt">user@portfolio:~$</span>
                <TypingEffect 
                  text="echo Hello, World!" 
                  className="terminal-command" 
                  speed={80}
                />
              </div>
              
              <div className="space-y-2">
                <h1 className="text-3xl lg:text-4xl font-bold text-primary glow-text">
                  <TypingEffect 
                    text="Hey there, I'm Satvik" 
                    delay={2000}
                    speed={60}
                  />
                </h1>
                <p className="text-xl text-muted-foreground">
                  <TypingEffect 
                    text="LeetCode|Full Stack Developer|AI & Web3 Enthusiast" 
                    delay={4000}
                    speed={80}
                  />
                </p>
                <p className="text-terminal-comment">
                  <TypingEffect 
                    text="Crafting open-source experiences with a terminal twist." 
                    delay={6000}
                    speed={50}
                  />
                </p>
              </div>

              <div className="flex items-center gap-4 pt-4">
                <button className="p-2 rounded hover:bg-primary/20 hover:text-primary transition-all duration-300 interactive-glow group">
                  <a href="https://github.com/Satvik-Max" target="_blank" rel="noopener noreferrer">
                    <Github className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                  </a>
                </button>
                <button className="p-2 rounded hover:bg-primary/20 hover:text-primary transition-all duration-300 interactive-glow group">
                  <a href="https://www.linkedin.com/in/satvikyewale" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                  </a>
                </button>
                <button className="p-2 rounded hover:bg-primary/20 hover:text-primary transition-all duration-300 interactive-glow group">
                  <a href="https://leetcode.com/u/Satvik_Yewale/" target="_blank" rel="noopener noreferrer">
                    <Code className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                  </a>
                </button>
                <button className="p-2 rounded hover:bg-primary/20 hover:text-primary transition-all duration-300 interactive-glow group">
                  <a href="https://twitter.com/Satvik_Yewale" target="_blank" rel="noopener noreferrer">
                    <Twitter className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                  </a>
                </button>
              </div>

              <div className="pt-4">
                <div className="flex items-center gap-2">
                  <span className="terminal-prompt">visitor@portfolio:~$</span>
                  <TypingEffect 
                    text="./explore-portfolio.sh" 
                    className="terminal-command"
                    delay={8000}
                    speed={60}
                  />
                </div>
              </div>
            </div>
          </TerminalWindow>
        </div>

        <div className="flex justify-center slide-up">
          <div className="relative group">
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl group-hover:bg-primary/30 transition-all duration-500 animate-glow-pulse"></div>
            <img 
              src={tuxPenguin}
              alt="Tux Linux Penguin"
              className="relative w-64 h-64 lg:w-80 lg:h-80 object-contain transition-all duration-500 group-hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
};