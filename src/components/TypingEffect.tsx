import { useState, useEffect } from "react";

interface TypingEffectProps {
  text: string;
  speed?: number;
  className?: string;
  delay?: number;
}

export const TypingEffect = ({ text, speed = 50, className = "", delay = 0 }: TypingEffectProps) => {
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTyping(true);
      let index = 0;
      
      const typeInterval = setInterval(() => {
        setDisplayedText(text.slice(0, index + 1));
        index++;
        
        if (index === text.length) {
          clearInterval(typeInterval);
          setIsTyping(false);
        }
      }, speed);

      return () => clearInterval(typeInterval);
    }, delay);

    return () => clearTimeout(timer);
  }, [text, speed, delay]);

  return (
    <span className={`${className} ${isTyping ? 'typing-cursor' : ''}`}>
      {displayedText}
    </span>
  );
};