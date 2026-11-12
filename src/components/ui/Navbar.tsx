import React, { useEffect, useState } from 'react';
import { Menu, X, ArrowUpRight, FileText } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';

interface NavbarProps {
  onOpenResume: () => void;
  activeSection: string;
}

const navLinks = [
  { label: 'About', href: '#about', id: 'about' },
  { label: 'Skills', href: '#skills', id: 'skills' },
  { label: 'Projects', href: '#projects', id: 'projects' },
  { label: 'Milestones', href: '#achievements', id: 'achievements' },
];

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume, activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 32);
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`site-header${isScrolled ? ' is-scrolled' : ''}`}>
      <div className="nav-shell">
        <a href="#home" className="brand-mark" aria-label={`${PERSONAL_INFO.fullName} — home`}>
          <span className="brand-initials">NS</span>
          <span className="brand-name">{PERSONAL_INFO.fullName}<small>Developer · Student</small></span>
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          {navLinks.map((link) => <a key={link.id} href={link.href} className={activeSection === link.id ? 'active' : ''}>{link.label}</a>)}
        </nav>
        <div className="nav-actions">
          <a className="nav-contact" href="#contact">Let&apos;s talk <ArrowUpRight aria-hidden="true" /></a>
          <button type="button" className="nav-resume" onClick={onOpenResume} aria-label="Open resume"><FileText aria-hidden="true" /></button>
          <button type="button" className="menu-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'} aria-expanded={mobileMenuOpen} aria-controls="mobile-navigation">
            {mobileMenuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>
      </div>
      {mobileMenuOpen && <div className="mobile-nav-panel" id="mobile-navigation">
        <nav aria-label="Mobile navigation">
          {navLinks.map((link, index) => <a key={link.id} href={link.href} onClick={() => setMobileMenuOpen(false)}><span>0{index + 1}</span>{link.label}<ArrowUpRight aria-hidden="true" /></a>)}
          <a href="#contact" onClick={() => setMobileMenuOpen(false)}><span>05</span>Contact<ArrowUpRight aria-hidden="true" /></a>
        </nav>
        <button type="button" onClick={() => { setMobileMenuOpen(false); onOpenResume(); }}><FileText aria-hidden="true" /> View resume</button>
      </div>}
    </header>
  );
};
