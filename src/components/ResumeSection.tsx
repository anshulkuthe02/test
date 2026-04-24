import { TerminalWindow } from "./TerminalWindow";
import { Download, FileText } from "lucide-react";

export const ResumeSection = () => {
  return (
    <section id="resume" className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-4xl">
        <div className="mb-8">
          <h2 className="text-2xl text-primary mb-2">~/resume</h2>
        </div>
        
        <TerminalWindow title="resume.sh">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="terminal-prompt">user@portfolio:~$</span>
              <span className="terminal-command">cat resume.txt</span>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <FileText className="w-6 h-6 text-primary" />
                  <div>
                    <h3 className="text-primary font-semibold">Resume.pdf</h3>
                    <p className="text-terminal-comment text-sm">Last updated: 2025</p>
                  </div>
                </div>
                <a href="https://drive.google.com/file/d/1iOF2Mw4y7-VijiNAiBNcHcxAdQRaQ177/view">
                <button className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded hover:bg-primary/90 transition-colors">
                  <Download className="w-4 h-4" />
                  Download
                </button>
                </a>                
              </div>

              <div className="space-y-4 text-sm">
                <div>
                  <h4 className="text-primary font-semibold mb-2">## Experience</h4>
                  <div className="space-y-3 ml-4">
                    <div>
                      <div className="text-muted-foreground">Developer</div>
                      <div className="text-terminal-comment">GDG on Campus • 2024-25</div>
                      <div className="text-terminal-comment">• Built scalable web applications using Next.js & Appwriter</div>
                      <div className="text-terminal-comment">• Contributed in Organiznig Hackathon & Events</div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-primary font-semibold mb-2">## Education</h4>
                  <div className="ml-4">
                    <div className="text-muted-foreground">Government College of Engineering</div>
                    <div className="text-terminal-comment">CSE • 2024 - 2027</div>
                  </div>
                  <br />
                  <div className="ml-4">
                    <div className="text-muted-foreground">Government Polytechnic Nagpur</div>
                    <div className="text-terminal-comment">Information Technology • 2021 - 2024</div>
                    <div className="text-terminal-comment">Grade : 93.60 %</div>
                  </div>
                  <br />
                  <div className="ml-4">
                    <div className="text-muted-foreground">DVK</div>
                    <div className="text-terminal-comment">10th• 2020 - 2021</div>
                    <div className="text-terminal-comment">Grade : 92.40 %</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-terminal-border">
              <div className="flex items-center gap-2">
                <span className="terminal-prompt">user@portfolio:~$</span>
                <span className="terminal-command">echo "Ready for new opportunities!"</span>
              </div>
              <div className="text-terminal-comment mt-2">
                Ready for new opportunities!
              </div>
            </div>
          </div>
        </TerminalWindow>
      </div>
    </section>
  );
};