import { TerminalWindow } from "./TerminalWindow";
import { Mail, MapPin, Phone } from "lucide-react";

export const ContactSection = () => {
  return (
    <section id="contact" className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-4xl">
        <div className="mb-8">
          <h2 className="text-2xl text-primary mb-2">~/contact</h2>
        </div>
        
        <TerminalWindow title="contact.sh">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="terminal-prompt">user@portfolio:~$</span>
              <span className="terminal-command">curl -X GET /api/contact</span>
            </div>
            
            <div className="space-y-4">
              <div className="text-terminal-comment">
                {"{"}<br />
                &nbsp;&nbsp;"status": "available",<br />
                &nbsp;&nbsp;"message": "Let's connect and build something amazing together!",<br />
                &nbsp;&nbsp;"contact_methods": [
              </div>

              <div className="ml-8 space-y-3">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <div>
                    <span className="text-primary">"email":</span>
                    <span className="text-muted-foreground"> "yewalesatwik@gmail.com"</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary" />
                  <div>
                    <span className="text-primary">"phone":</span>
                    <span className="text-muted-foreground"> "+91 9309401976"</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  <div>
                    <span className="text-primary">"location":</span>
                    <span className="text-muted-foreground"> "Nagpur , Maharashtra"</span>
                  </div>
                </div>
              </div>

              <div className="text-terminal-comment">
                &nbsp;&nbsp;],<br />
                &nbsp;&nbsp;"social_links": {"{"}
              </div>

              <div className="ml-8 space-y-2">
                <div><span className="text-primary">"github":</span> <span className="text-muted-foreground"><a href="https://github.com/Satvik-Max">"https://github.com/Satvik-Max"</a></span></div>
                <div><span className="text-primary">"linkedin":</span> <span className="text-muted-foreground"><a href="https://www.linkedin.com/in/satvikyewale">"https://www.linkedin.com/in/satvikyewale"</a></span></div>
                <div><span className="text-primary">"twitter":</span> <span className="text-muted-foreground"> <a href="https://twitter.com/Satvik_Yewale">"https://twitter.com/Satvik_Yewale"</a></span></div>
              </div>

              <div className="text-terminal-comment">
                &nbsp;&nbsp;{"}"}<br />
                {"}"}
              </div>
            </div>

            <div className="pt-4 border-t border-terminal-border">
              <div className="flex items-center gap-2">
                <span className="terminal-prompt">user@portfolio:~$</span>
                <span className="terminal-command">echo "Feel free to reach out!"</span>
              </div>
              <div className="text-terminal-comment mt-2">
                Feel free to reach out!
              </div>
            </div>
          </div>
        </TerminalWindow>
      </div>
    </section>
  );
};