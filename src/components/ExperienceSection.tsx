import { TerminalWindow } from "./TerminalWindow";
import { Calendar, MapPin, Award, Trophy } from "lucide-react";
import informatrix_it_solution_pvt_ltd_logo from "@/assets/informatrix_it_solution_pvt_ltd_logo.jpeg";
import CIH_2 from "@/assets/CIH_2.jpg";
import kdk from "@/assets/kdk.jpg";
import VNIT from "@/assets/VNIT.jpg";
import Enigma from "@/assets/Enigma.jpg";


const experiences = [
  {
    type: "internship",
    title: "DevOps Intern",
    company: "Informatrix Lntd",
    location: "Nagpur",
    duration: "January 2024 - April 2024",
    description: "Handled the Various tasks like CI/CD pipeline , User Management , Load Balancing",
    skills: ["Docker", "Shell-Script", "tomcat", "jenkins"],
    image: informatrix_it_solution_pvt_ltd_logo
  },
  {
    type: "hackathon",
    title: "Enigma-25",
    location: "YCCE Nagpur",
    duration: "Feb 2025",
    description: "1st Position – Created an app that real-time detects and stores vehicle number plates in traffic.",
    skills: ["YOLO-V8", "CV", "MySql"],
    image: Enigma
  },
  {
    type: "hackathon",
    title: "Hackathonix",
    location: "KDKCE Nagpur",
    duration: "Feb 2025",
    description: "Built an BlockChain Based Document Verification that won 2nd place Among 90+ teams.",
    skills: ["Solidity", "React", "FireBase", "SHA-256"],
    image: kdk
  },
  {
    type: "hackathon",
    title: "CIH_2.0",
    location: "SCET Nagpur",
    duration: "June 2025",
    description: "24hrs Hackthon where I was selected in top 50 among 800+ teams and Created Eventure",
    skills: ["React", "solidity", "Supabase", "Web3" , "Ganache"],
    image: CIH_2
  },
  {
    type: "hackathon",
    title: "VNIT-Hack-A-Thon",
    location: "IT park VNIT",
    duration: "March 2025",
    description: "VNIT Hackathon Where top 20 Finalist Among 900+ participants Are Selected & Idea was FoodForHope.",
    skills: ["MERN", "OpenRoute" , "A*"],
    image: VNIT
  },
];

export const ExperienceSection = () => {
  return (
    <section id="experience" className="min-h-screen flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-6xl">
        <div className="mb-8 fade-in">
          <h2 className="text-2xl text-primary mb-2 glow-text">~/experience</h2>
        </div>
        
        <div className="slide-up">
          <TerminalWindow title="experience.sh">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <span className="terminal-prompt">user@portfolio:~$</span>
              <span className="terminal-command">find ./experience -type f -name "*.md"</span>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="border border-terminal-border rounded bg-terminal-bg/50 interactive-glow group overflow-hidden animate-fade-in"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="flex items-center justify-between px-3 py-2 bg-terminal-border/40">
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                      <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                      <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
                    </div>
                    <div className="text-xs text-terminal-comment">{exp.title}</div>
                  </div>

                  <div className="relative w-full h-40 md:h-44 lg:h-48 overflow-hidden bg-terminal-foreground/5 flex items-center justify-center">
                    <img
                      src={exp.image}
                      alt={`${exp.title} at ${exp.company}`}
                      className="w-1/2 h-auto object-contain transition-all duration-300"
                      onError={(e) => {
                        e.currentTarget.src = '/placeholder.svg';
                      }}
                    />
                    <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-all duration-300"></div>
                  </div>

                  <div className="p-4">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          {exp.type === "hackathon" ? (
                            <Trophy className="w-4 h-4 text-terminal-yellow animate-glow-pulse" />
                          ) : (
                            <Award className="w-4 h-4 text-primary" />
                          )}
                          <h3 className="text-primary font-semibold text-lg group-hover:text-primary-glow transition-colors duration-300">
                            {exp.title}
                          </h3>
                        </div>
                        <p className="text-muted-foreground font-medium">
                          {exp.company}
                        </p>
                        <div className="flex items-center gap-4 text-sm text-terminal-comment mt-1">
                          <div className="flex items-center gap-1 hover:text-primary transition-colors duration-200">
                            <Calendar className="w-3 h-3" />
                            {exp.duration}
                          </div>
                          <div className="flex items-center gap-1 hover:text-primary transition-colors duration-200">
                            <MapPin className="w-3 h-3" />
                            {exp.location}
                          </div>
                        </div>
                      </div>
                      <span className={`px-2 py-1 text-xs rounded transition-all duration-300 hover:scale-105 ${
                        exp.type === "hackathon" 
                          ? "bg-terminal-yellow/20 text-terminal-yellow hover:bg-terminal-yellow/30" 
                          : "bg-primary/20 text-primary hover:bg-primary/30"
                      }`}>
                        {exp.type}
                      </span>
                    </div>

                    <p className="text-terminal-comment text-sm mb-3 group-hover:text-muted-foreground transition-colors duration-300">
                      {exp.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2 py-1 text-xs bg-terminal-border text-primary rounded hover:bg-primary/20 hover:scale-105 transition-all duration-200 cursor-default"
                        >
                          {skill}
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
                <span className="terminal-command">echo "Always learning, always growing!"</span>
              </div>
              <div className="text-terminal-comment mt-2">
                Always learning, always growing!
              </div>
            </div>
          </div>
        </TerminalWindow>
        </div>
      </div>
    </section>
  );
};