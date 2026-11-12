import React, { useEffect, useState } from 'react';
import { Navbar } from './components/ui/Navbar';
import { HeroSection } from './components/sections/HeroSection';
import { AboutSection } from './components/sections/AboutSection';
import { SkillsSection } from './components/sections/SkillsSection';
import { ProjectsSection } from './components/sections/ProjectsSection';
import { AchievementsSection } from './components/sections/AchievementsSection';
import { ContactSection } from './components/sections/ContactSection';
import { Footer } from './components/sections/Footer';
import { ResumeModal } from './components/ui/ResumeModal';

export default function App() {
  const [resumeOpen, setResumeOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const sections = ['home', 'about', 'skills', 'projects', 'achievements', 'contact'];
    const handleScroll = () => {
      for (let index = sections.length - 1; index >= 0; index -= 1) {
        const section = document.getElementById(sections[index]);
        if (section && section.getBoundingClientRect().top <= 180) {
          setActiveSection(sections[index]);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="portfolio-app relative min-h-screen overflow-x-hidden bg-[#111210] text-zinc-100">
      <div className="relative z-10 flex min-h-screen flex-col">
        <Navbar activeSection={activeSection} onOpenResume={() => setResumeOpen(true)} />
        <HeroSection onOpenResume={() => setResumeOpen(true)} />
        <main className="relative z-10 flex flex-col gap-0 bg-[#111210]">
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <AchievementsSection />
          <ContactSection />
          <Footer />
        </main>
      </div>
      <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />
    </div>
  );
}
