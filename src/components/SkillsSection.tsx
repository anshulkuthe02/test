import { TerminalWindow } from "./TerminalWindow";

const skillCategories = [
  {
    title: "Languages",
    skills: [
      "C",
      "C++",
      "Java",
      "Python",
      "JavaScript",
      "PLSQL",
      "Solidity",
      "Shell Scripting",
    ],
  },
  {
    title: "Frontend",
    skills: [
      "React",
      "React Native",
      "JavaScript",
      "Figma",
    ],
  },
  {
    title: "Backend",
    skills: [
      "Node.js",
      "Express",
      "Django",
      "Flask",
      "Supabase",
      "Firebase",
      "MySQL",
      "MongoDB",
      "SQL",
      "SQLite",
    ],
  },
  {
    title: "DevOps",
    skills: [
      "Docker",
      "Linux",
      "CI/CD",
      "Load Balancer",
      "LVM",
    ],
  },
  {
    title: "Tools",
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "Vim",
      "Postman",
    ],
  },
  {
    title: "Computer Science Fundamentals",
    skills: [
      "DSA",
      "DBMS",
      "AI Models",
      "Problem Solving",
    ],
  },
  {
    title: "Soft Skills",
    skills: [
      "Project Management",
      "Collaboration",
    ],
  },
];

export const SkillsSection = () => {
  return (
    <section id="skills" className="min-h-screen flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-6xl">
        <div className="mb-8">
          <h2 className="text-2xl text-primary mb-2">~/skills</h2>
        </div>
        
        <TerminalWindow title="skill-tree.sh">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <span className="terminal-prompt">user@portfolio:~$</span>
              <span className="terminal-command">./skill-tree.sh --list-all</span>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {skillCategories.map((category, index) => (
                <div key={category.title} className="space-y-3">
                  <h3 className="text-primary font-semibold">
                    ├── {category.title}/
                  </h3>
                  <div className="ml-4 space-y-1">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skill} className="flex items-center gap-2">
                        <span className="text-terminal-comment">
                          {skillIndex === category.skills.length - 1 ? "└──" : "├──"}
                        </span>
                        <span className="text-muted-foreground">{skill}</span>
                      </div>
                    ))}
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
    </section>
  );
};