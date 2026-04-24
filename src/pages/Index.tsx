import { TerminalNavigation } from "@/components/TerminalNavigation";
import { WelcomeSection } from "@/components/WelcomeSection";
import { AboutSection } from "@/components/AboutSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ResumeSection } from "@/components/ResumeSection";
import { ContactSection } from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <TerminalNavigation />
      <main>
        <WelcomeSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <ResumeSection />
        <ContactSection />
      </main>
    </div>
  );
};

export default Index;
