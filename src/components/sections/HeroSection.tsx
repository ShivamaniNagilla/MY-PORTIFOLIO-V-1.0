import React from 'react';
import { ArrowDown, ArrowUpRight, FileText } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';

interface HeroSectionProps {
  onOpenResume: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenResume }) => (
  <section id="home" className="hero-section">
    <div className="hero-inner">
      <div className="hero-copy">
        <div className="hero-eyebrow"><span className="availability-dot" /> PORTFOLIO / 2026 <span className="hero-eyebrow-divider">—</span> {PERSONAL_INFO.location}</div>
        <h1 className="hero-title">Curious by<br /><span>nature.</span><br />Built to create.</h1>
        <p className="hero-lede">I&apos;m <strong>{PERSONAL_INFO.fullName}</strong> — {PERSONAL_INFO.tagline.toLowerCase()} exploring the space where thoughtful design meets useful technology.</p>
        <div className="hero-meta">
          <span>{PERSONAL_INFO.educationSubtitle}</span>
          <span className="hero-meta-mark">{PERSONAL_INFO.college}</span>
        </div>
        <div className="hero-actions">
          <a href="#projects" className="hero-primary-link">Explore my work <ArrowUpRight aria-hidden="true" /></a>
          <button type="button" onClick={onOpenResume} className="hero-secondary-link"><FileText aria-hidden="true" /> Resume</button>
        </div>
      </div>

      <figure className="hero-portrait-wrap">
        <div className="portrait-index">FIG. 01 <span>—</span> SHIVAMANI NAGILLA</div>
        <div className="hero-portrait-frame">
          <img src={PERSONAL_INFO.avatarUrl} alt="Portrait of Shivamani Nagilla" className="hero-portrait" />
          <div className="portrait-caption"><span>Learning in public.</span><span>Building with intent.</span></div>
        </div>
        <div className="portrait-side-note">COMPUTER SCIENCE · AI &amp; ML</div>
      </figure>
    </div>
    <a className="hero-scroll" href="#about"><span>SCROLL TO EXPLORE</span><ArrowDown aria-hidden="true" /></a>
    <div className="hero-index" aria-hidden="true">01 / 06</div>
  </section>
);
