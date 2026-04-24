import { TerminalWindow } from "./TerminalWindow";
import { ExternalLink, Github } from "lucide-react";
import eventure from "@/assets/eventure.png";
import surajya from "@/assets/surajya.png";
import foodforhope from "@/assets/foodforhope.png";
import mcp from "@/assets/mcp.png";
import blockify from "@/assets/blockify.png";
import CICD from "@/assets/CICD.png";
import gdgc from "@/assets/gdgc.png";
import pass from "@/assets/Pass.png";
import thread from "@/assets/Thread.jpeg";
import WAF from "@/assets/WAF.png";
import Hostel from "@/assets/Hostel.png";

const projects = [
  {
    name: "Surajya",
    description: "An AI-inspired, rule-driven grievance management platform that integrates blockchain transparency, Supabase as a backend, and intelligent priority-based escalation.The system ensures that citizen issues are processed fairly, efficiently, and with real-time responsiveness.",
    tech: ["React", "Web3", "Solidity", "Supabase"],
    github: "https://github.com/Satvik-Max/Surajya",
    image: surajya
  },
  {
    name: "FoodForHope",
    description: "Which Connects food donors with NGOs or Volunteers to reduce food wastage.",
    tech: ["Node.js", "Express", "MongoDB" , "React" , "OpenRoute" , "A*"],
    github: "https://github.com/Satvik-Max/FoodForHope",
    image: foodforhope
  },
  {
    name: "Eventure",
    description: "Event Tickets Using Blockchain and Reputation Management System Which Leads to Secure and Transparent Event Management.",
    tech: ["React", "Solidity", "Ganache" , "Supabase"],
    github: "https://github.com/Satvik-Max/Eventure",
    image: eventure
  },
  {
    name: "Blockify",
    description: "A Blockchain-based Document Assigning and Verification.",
    tech: ["React", "Solidity", "SHA-256"],
    github: "https://github.com/Satvik-Max/Blockify-",
    image: blockify
  },
  {
    name: "MCP server Twitter post",
    description: "An AI Agent That Take Topic as Input and Create , Delete the Post on the Twitter or X",
    tech: ["MCP-Server", "GenAI", "Tweeter"],
    github: "https://github.com/Satvik-Max/X_Agent-MCP_Server",
    image: mcp
  },
  {
    name: "Hostel Automation",
    description: "A web Application For GPN hostel Student Management Effective Workflow.",
    tech: ["Django", "Sql-lite", "HTML" , "CSS"],
    github: "https://github.com/Satvik-Max/GPN_Hostel_Automation_Updated",
    image: Hostel
  },
  {
    name: "Thread App Clone",
    description: "Thread App Clone using React Native And MongoDB.",
    tech: ["React-Native", "Expo", "MongoDB"],
    github: "https://github.com/Satvik-Max/Thread-App",
    demo: "#",
    image: thread
  },
  {
    name: "CI/CD Pipeline",
    description: "Internship Task For Flow Management using Jenkins .",
    tech: ["Jenkins", "TomCat", "Java-JSP"],
    github: "#",
    image: CICD
  },
  {
    name: "Password Manager",
    description: "Efficient and Secure Way of Password management in multi User Environment",
    tech: ["Advance Java", "MySql", "Swing"],
    github: "https://github.com/Satvik-Max/Secure-Password_Manager",
    image: pass
  },
  {
    name: "Web Application Firewall",
    description: "A Web Monitoring System For Various Attack Prevention.",
    tech: ["JavaScript", "charts", "Web Security Rules"],
    github: "https://github.com/Satvik-Max/WAF",
    image: WAF
  },
  {
    name: "GDGC Gcoen Website & Admin",
    description: "A Live GDGc GCOEN website for event management Along with Admin DashBoard.",
    tech: ["Next.JS", "AppWriter"],
    github: "https://github.com/gvrv03/GDGC-GCOEN",
    image: gdgc
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="min-h-screen flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-6xl">
        <div className="mb-8 fade-in">
          <h2 className="text-2xl text-primary mb-2 glow-text">~/projects</h2>
        </div>
        
        <div className="slide-up">
          <TerminalWindow title="projects.sh">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <span className="terminal-prompt">user@portfolio:~$</span>
              <span className="terminal-command">ls -la projects/</span>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {projects.map((project, index) => (
                <div
                  key={project.name}
                  className="border border-terminal-border rounded bg-terminal-bg/50 interactive-glow group overflow-hidden"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* terminal-style window header (three dots + file) */}
                  <div className="flex items-center justify-between px-3 py-2 bg-terminal-border/40">
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                      <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                      <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
                    </div>
                    <div className="text-xs text-terminal-comment">{project.name}.sh</div>
                  </div>

                  <div className="relative w-full h-36 md:h-44 lg:h-48 overflow-hidden bg-terminal-foreground/5">
                    <img
                      src={project.image}
                      alt={`${project.name} project screenshot`}
                      className="w-full h-full object-cover transition-all duration-300"
                      onError={(e) => {
                        e.currentTarget.src = '/placeholder.svg';
                      }}
                    />
                    <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-all duration-300"></div>
                  </div>

                  <div className="p-4">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-primary font-semibold text-lg group-hover:text-primary-glow transition-colors duration-300">
                          📁 {project.name}
                        </h3>
                        <p className="text-terminal-comment text-sm mt-1">
                          {project.description}
                        </p>
                      </div>
                      <div className="flex gap-2">
                        <a href={project.github} target="_blank">
                          <button className="p-2 rounded hover:bg-primary/20 hover:text-primary transition-all duration-300 interactive-glow">
                          <Github className="w-4 h-4" />
                        </button>
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs bg-terminal-border text-primary rounded hover:bg-primary/20 hover:scale-105 transition-all duration-200 cursor-default"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-terminal-border">
              <div className="flex items-center gap-2">
                <span className="terminal-prompt">user@portfolio:~$</span>
                <span className="terminal-command">echo "More projects coming soon..."</span>
              </div>
              <div className="text-terminal-comment mt-2">
                More projects coming soon...
              </div>
            </div>
          </div>
        </TerminalWindow>
        </div>
      </div>
    </section>
  );
};