import { TerminalWindow } from "./TerminalWindow";

export const AboutSection = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-4xl">
        <div className="mb-8">
          <h2 className="text-2xl text-primary mb-2">~/about</h2>
        </div>
        
        <TerminalWindow title="neofetch">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <span className="terminal-prompt">user@portfolio:~$</span>
              <span className="terminal-command">neofetch</span>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-1 font-mono text-sm">
                <pre className="text-primary whitespace-pre-wrap">
{`  
          
                  @@@@@@@@@@@                  
                @@@@@@@@@@#%@@@                
               @@@@@@@@@@@%%@@@@               
               @@@@@@@@@@@@@@@@@@              
               @@%#@@@@@*=+%@@@@@              
               @#==:+@%--*=:%@@@@              
               @#*@%-#*=*@@:#@@@@              
               @@*=---:::=:-@@@@@              
               @%+=---:::-==%@@@@              
               @@#++========%@#*@@             
               @@+-=+++=--..:%@@@@@            
              @@+..:---:.....-%@@@@@           
            @@@+..............+@@@@@@@         
          @@@@#...............:#@@@@@@@@       
         @@@@@+..............:::#@@@@@@@       
         @@@@-...................#@%%@@@@      
        @@@@=.....................%@@@@@@@     
        @@@*......................*@@%@@@@@    
       @@@@-......................+@@%@@@@@    
      @@@%#:......................+@@@@@@@@    
      @%%%#:......................#@%%%%%@@    
     +=---*%+..................:--+@@@@@%#=    
 =====-----+%@*-...............-=-+@@@@%=--=   
==----------=%@@#-............:-=--=++=-----   
==------------#@@*............-+=------------- 
+=-------------=:............*@#=------------=+
+=-------------=+-........=@@@@#=---------==++*
+===------------+#@@@@@@@@@@@@@*=-----==+***   
  *++++++==---==*#@@@@@@@@@@@@@#*+==++**#      
        #******##%             %#######        
          
          
 `}
                </pre>
              </div>
              
              <div className="space-y-2 text-sm">
                <div><span className="text-primary">OS:</span> <span className="text-muted-foreground">Ubuntu 22.04 LTS</span></div>
                <div><span className="text-primary">Host:</span> <span className="text-muted-foreground">Satvik Yewale</span></div>
                <div><span className="text-primary">Kernel:</span> <span className="text-muted-foreground">5.15.0-generic</span></div>
                <div><span className="text-primary">Shell:</span> <span className="text-muted-foreground">zsh 5.8.1</span></div>
                <div><span className="text-primary">Resolution:</span> <span className="text-muted-foreground">1920x1080</span></div>
                <div><span className="text-primary">Terminal:</span> <span className="text-muted-foreground">gnome-terminal</span></div>
              </div>
            </div>

            <div className="pt-4 border-t border-terminal-border">
              <p className="text-terminal-comment">
                Passionate full-stack developer with expertise in modern web technologies and 
                a love for open-source development. When I'm not coding, you'll find me exploring 
                the Linux distros and solving the problems in relm of programming.
              </p>
            </div>
          </div>
        </TerminalWindow>
      </div>
    </section>
  );
};