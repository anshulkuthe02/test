import { ReactNode } from "react";

interface TerminalWindowProps {
  title?: string;
  children: ReactNode;
  className?: string;
}

export const TerminalWindow = ({ title = "welcome.sh", children, className = "" }: TerminalWindowProps) => {
  return (
    <div className={`terminal-window ${className}`}>
      <div className="terminal-header">
        <div className="flex items-center gap-2">
          <div className="terminal-button red"></div>
          <div className="terminal-button yellow"></div>
          <div className="terminal-button green"></div>
        </div>
        <div className="flex-1 text-center text-muted-foreground text-sm">
          {title}
        </div>
        <div className="w-12"></div> {/* Spacer for centering */}
      </div>
      <div className="terminal-content">
        {children}
      </div>
    </div>
  );
};