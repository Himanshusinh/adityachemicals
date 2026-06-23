'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import NumberCounter from '../components/ui/NumberCounter';

const LOGOS_ROW_1 = [
  'https://www.adityachemicals.in/wp-content/uploads/2025/07/br_logo1.png',
  'https://www.adityachemicals.in/wp-content/uploads/2025/07/br_logo2.png',
  'https://www.adityachemicals.in/wp-content/uploads/2025/07/br_logo3.png',
  'https://www.adityachemicals.in/wp-content/uploads/2025/07/br_logo4.png',
  'https://www.adityachemicals.in/wp-content/uploads/2025/07/br_logo5.png',
  'https://www.adityachemicals.in/wp-content/uploads/2025/07/br_logo6.png',
  'https://www.adityachemicals.in/wp-content/uploads/2025/07/2solvay.jpg',
  'https://www.adityachemicals.in/wp-content/uploads/2025/07/3pandg.jpg',
  'https://www.adityachemicals.in/wp-content/uploads/2025/07/4indchem.jpg',
  'https://www.adityachemicals.in/wp-content/uploads/2025/07/sun-pharma.jpg',
];

const LOGOS_ROW_2 = [
  'https://www.adityachemicals.in/wp-content/uploads/2025/07/br_logo7.png',
  'https://www.adityachemicals.in/wp-content/uploads/2025/07/br_logo8.png',
  'https://www.adityachemicals.in/wp-content/uploads/2025/07/br_logo9.png',
  'https://www.adityachemicals.in/wp-content/uploads/2025/07/br_logo10.png',
  'https://www.adityachemicals.in/wp-content/uploads/2025/07/br_logo11.png',
  'https://www.adityachemicals.in/wp-content/uploads/2025/07/br_logo12.png',
  'https://www.adityachemicals.in/wp-content/uploads/2025/07/5naure-buety.jpg',
  'https://www.adityachemicals.in/wp-content/uploads/2025/07/6innophos.jpg',
  'https://www.adityachemicals.in/wp-content/uploads/2025/07/7concord.jpg',
  'https://www.adityachemicals.in/wp-content/uploads/2025/07/8navana.jpg',
];

const HERO_IMAGES = [
  '/aditya chemicals images/home page/home page images/magnific_massive-pharmaceutical-ma_mCc5jr4hJQ.png',
  '/aditya chemicals images/home page/home page images/magnific_indian-pharmaceutical-qua_9RxWvcENYZ.png',
  '/aditya chemicals images/home page/home page images/magnific_indian-pharmaceutical-res_Pi1noj542C (1).png'
];

export default function Home() {
  const heroRef = useRef<HTMLElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    document.querySelectorAll('.animate-on-scroll').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Optional: Add some slight mouse parallax to hero if desired
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      const bg = heroRef.current.querySelector('.hero-bg') as HTMLElement;
      if (bg) {
        bg.style.transform = `scale(1.05) translate(${x}px, ${y}px)`;
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <main>
      {/* ══════════════════════════════════════════
          1. DEEP DIVE HERO SECTION
      ══════════════════════════════════════════ */}
      <section className="hero-section" ref={heroRef}>
        <div className="hero-bg">
          {HERO_IMAGES.map((img, index) => (
            <div
              key={index}
              className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
              style={{ backgroundImage: `url('${img}')` }}
            ></div>
          ))}
        </div>
        <div className="hero-overlay"></div>
        <div className="container hero-container">
          <div className="hero-content">
            <span className="hero-subtitle">Established 1992</span>
            <h1 className="hero-title">
              Aditya Chemicals – <br />
              Delivering Excellence in <span className="text-neon">APIs & Food Additives Worldwide.</span>
            </h1>
            <p className="hero-desc">
              A Leading Force in Food Additives & API Manufacturers.
            </p>
            <div className="d-flex justify-content-center" style={{ gap: '20px' }}>
              <a href="#markets" className="btn-neon" style={{ background: 'var(--primary)', color: '#fff' }}>
                Explore Products
              </a>
              <a href="#about" className="btn-neon">
                Discover Our Legacy
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          2. REDESIGNED ABOUT SECTION (ASYMMETRICAL SPLIT)
      ══════════════════════════════════════════ */}
      <section id="about" className="about-section">
        <div className="ambient-glow"></div>
        <div className="container">
          <div className="about-wrapper">

            {/* Left Column: Overlapping Visuals */}
            <div className="about-visuals animate-on-scroll">
              <div className="visuals-frame">
                <div className="accent-backdrop"></div>
                <div className="main-image-wrapper">
                  <Image
                    src="/aditya chemicals images/home page/home page images/magnific_indian-pharmaceutical-inn_SOF3pgDUb8.png"
                    alt="Aditya Chemicals Manufacturing Plant"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="about-image"
                  />
                </div>
                <div className="floating-badge-legacy">
                  <div className="badge-icon-box">
                    <i className="fas fa-award"></i>
                  </div>
                  <div className="badge-text-box">
                    <span className="badge-title">Established</span>
                    <span className="badge-desc">1992</span>
                  </div>
                </div>
                <div className="floating-badge-gmp">
                  <i className="fas fa-check-circle badge-gmp-icon"></i>
                  <span>GMP Certified</span>
                </div>
              </div>
            </div>

            {/* Right Column: Copy & Milestones */}
            <div className="about-content-panel animate-on-scroll">
              <span className="hero-subtitle" style={{ letterSpacing: '2px', marginBottom: '15px' }}>About Aditya Chemicals</span>
              <h2 className="about-heading">
                Chemistry Engineered with <br />
                <span className="text-neon">Uncompromising Purity.</span>
              </h2>

              <p className="about-lead">
                For over three decades, Aditya Chemicals has been at the forefront of engineering ultra-pure APIs, food additives, and excipients. We don&apos;t just manufacture chemicals; we engineer the essential building blocks of global health.
              </p>

              <p className="about-body">
                Our FDA-approved manufacturing units are managed under strict international safety standards, utilizing automated systems to maintain peak purity in every batch.
              </p>

              {/* Stats Block */}
              <div className="about-stats-grid">
                <div className="stat-card">
                  <div className="stat-num-wrapper">
                    <NumberCounter end={30} suffix="+" duration={2000} />
                  </div>
                  <span className="stat-label">Years of Excellence</span>
                </div>

                <div className="stat-card">
                  <div className="stat-num-wrapper">
                    <NumberCounter end={10} suffix="+" duration={1500} />
                  </div>
                  <span className="stat-label">Countries Served</span>
                </div>
              </div>

              {/* Key Certifications/Bullet Points */}
              <ul className="highlights-list">
                <li>
                  <div className="highlight-icon">
                    <i className="fas fa-shield-alt"></i>
                  </div>
                  <div className="highlight-text-block">
                    <h4>FDA & GMP Compliance</h4>
                    <p>Adhering to strict pharmaceutical standards for premium grades.</p>
                  </div>
                </li>
                <li>
                  <div className="highlight-icon">
                    <i className="fas fa-atom"></i>
                  </div>
                  <div className="highlight-text-block">
                    <h4>Ultra-Pure Grades</h4>
                    <p>Meticulously filtered and processed to minimize chemical impurities.</p>
                  </div>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          3. STICKY STACK MARKETS SECTION
      ══════════════════════════════════════════ */}
      <section id="markets" className="sticky-section">
        <div className="container">
          <div style={{ marginBottom: '80px', position: 'relative', zIndex: 1 }}>
            <span className="hero-subtitle" style={{ letterSpacing: '2px' }}>Our Markets</span>
            <h2 style={{ fontSize: '4rem', fontWeight: 800, maxWidth: '600px', lineHeight: 1.1 }}>
              Sectors We Power.
            </h2>
          </div>

          <div className="sticky-container">

            {/* Card 1 */}
            <div className="sticky-card glass-panel" style={{ background: 'rgba(255,255,255,0.9)' }}>
              <div className="card-number">01</div>
              <div style={{ flex: 1, position: 'relative', height: '100%', borderRadius: '15px', overflow: 'hidden' }}>
                <Image src="/aditya chemicals images/home page/Our Markets/Pharmaceuticals/magnific_modern-pharmaceutical-inn_SOF33RsUb8.png" alt="Pharma" fill style={{ objectFit: 'cover' }} />
              </div>
              <div style={{ flex: 1, padding: '40px' }}>
                <i className="fas fa-pills" style={{ fontSize: '2rem', color: 'var(--secondary)', marginBottom: '20px' }}></i>
                <h3 style={{ fontSize: '2.5rem', marginBottom: '15px' }}>Pharmaceuticals</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', marginBottom: '30px' }}>
                  High-performance APIs developed in FDA-approved environments, meeting the most stringent pharmaceutical regulatory compliance standards globally.
                </p>
                <a href="#" className="btn-neon">Learn More</a>
              </div>
            </div>

            {/* Card 2 */}
            <div className="sticky-card glass-panel" style={{ background: 'rgba(245,247,250,0.95)' }}>
              <div className="card-number">02</div>
              <div style={{ flex: 1, position: 'relative', height: '100%', borderRadius: '15px', overflow: 'hidden' }}>
                <Image src="/aditya chemicals images/home page/Our Markets/Nutritional Supplements/magnific_highend-nutraceutical-res_5xIwjbLKxe.png" alt="Nutraceuticals" fill style={{ objectFit: 'cover' }} />
              </div>
              <div style={{ flex: 1, padding: '40px' }}>
                <i className="fas fa-leaf" style={{ fontSize: '2rem', color: 'var(--secondary)', marginBottom: '20px' }}></i>
                <h3 style={{ fontSize: '2.5rem', marginBottom: '15px' }}>Nutraceuticals</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', marginBottom: '30px' }}>
                  Fine-grade vitamins, minerals, and excipients perfectly tailored to meet the exacting requirements of modern health-focused formulations.
                </p>
                <a href="#" className="btn-neon">Learn More</a>
              </div>
            </div>

            {/* Card 3 */}
            <div className="sticky-card glass-panel" style={{ background: 'rgba(235,240,245,0.95)' }}>
              <div className="card-number">03</div>
              <div style={{ flex: 1, position: 'relative', height: '100%', borderRadius: '15px', overflow: 'hidden' }}>
                <Image src="/aditya chemicals images/home page/Our Markets/Food Additives/magnific_premium-food-science-labo_gJQ6skvSXO.png" alt="Food Additives" fill style={{ objectFit: 'cover' }} />
              </div>
              <div style={{ flex: 1, padding: '40px' }}>
                <i className="fas fa-apple-alt" style={{ fontSize: '2rem', color: 'var(--secondary)', marginBottom: '20px' }}></i>
                <h3 style={{ fontSize: '2.5rem', marginBottom: '15px' }}>Food Additives</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', marginBottom: '30px' }}>
                  Formulations that enhance taste, improve texture, and extend shelf life—helping global brands meet evolving food safety standards.
                </p>
                <a href="#" className="btn-neon">Learn More</a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          3.5 STATS BANNER SECTION
      ══════════════════════════════════════════ */}
      <section className="stats-banner">
        <div className="container">
          <div className="stats-banner-grid">
            <div className="stats-banner-item animate-on-scroll">
              <div className="stats-banner-number">
                <NumberCounter end={75} suffix="+" duration={2000} />
              </div>
              <span className="stats-banner-label">No. Of Products</span>
            </div>

            <div className="stats-banner-item animate-on-scroll">
              <div className="stats-banner-number">
                <NumberCounter end={10} suffix="+" duration={1500} />
              </div>
              <span className="stats-banner-label">Operational Countries</span>
            </div>

            <div className="stats-banner-item animate-on-scroll">
              <div className="stats-banner-number">
                <NumberCounter end={30} suffix="+" duration={2000} />
              </div>
              <span className="stats-banner-label">Years Of Experience</span>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          4. INFINITE GLOW MARQUEE & CTA
      ══════════════════════════════════════════ */}
      <section className="partners-section" style={{ overflow: 'hidden' }}>
        <div className="ambient-glow" style={{ background: 'radial-gradient(circle, rgba(0,255,204,0.1) 0%, rgba(0,0,0,0) 70%)' }}></div>
        <div className="container text-center" style={{ position: 'relative', zIndex: 2 }}>
          <h2 style={{ fontSize: '3rem', marginBottom: '60px' }}>Trusted by Industry Leaders</h2>

          <div className="marquee-container">
            {/* Row 1: Scrolling Left */}
            <div className="marquee-wrapper scroll-left">
              <div className="marquee-track">
                {LOGOS_ROW_1.map((logo, i) => (
                  <div key={`row1-${i}`} className="partner-logo-card">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={logo} alt={`Partner ${i}`} className="partner-logo" />
                  </div>
                ))}
                {/* Duplicate for infinite effect */}
                {LOGOS_ROW_1.map((logo, i) => (
                  <div key={`row1-dup-${i}`} className="partner-logo-card">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={logo} alt={`Partner ${i}`} className="partner-logo" />
                  </div>
                ))}
              </div>
            </div>

            {/* Row 2: Scrolling Right */}
            <div className="marquee-wrapper scroll-right">
              <div className="marquee-track">
                {LOGOS_ROW_2.map((logo, i) => (
                  <div key={`row2-${i}`} className="partner-logo-card">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={logo} alt={`Partner ${i}`} className="partner-logo" />
                  </div>
                ))}
                {/* Duplicate for infinite effect */}
                {LOGOS_ROW_2.map((logo, i) => (
                  <div key={`row2-dup-${i}`} className="partner-logo-card">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={logo} alt={`Partner ${i}`} className="partner-logo" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="cta-card animate-on-scroll">
            <div className="cta-content">
              <span className="hero-subtitle" style={{ letterSpacing: '2px', marginBottom: '15px', color: 'var(--primary)' }}>Get In Touch</span>
              <h2 className="cta-title">Ready to Innovate?</h2>
              <p className="cta-desc">
                Partner with Aditya Chemicals for ultra-pure, high-performance APIs and excipients engineered to your exact specifications. Let&apos;s build the future of medicine together.
              </p>
              <div className="cta-actions">
                <a href="mailto:info@adityachemicals.com" className="btn-neon" style={{ background: 'var(--primary)', color: '#fff', fontSize: '15px', padding: '15px 35px' }}>
                  Contact Our Experts <i className="fas fa-arrow-right" style={{ marginLeft: '10px' }}></i>
                </a>
              </div>
            </div>
            <div className="cta-image-wrapper">
              <Image 
                src="/aditya chemicals images/home page/home page images/magnific_large-glowing-molecular-s_ubeLU6LQLD.png" 
                alt="Molecular Innovation" 
                fill 
                sizes="(max-width: 991px) 100vw, 40vw"
                className="cta-image" 
              />
              <div className="cta-image-overlay"></div>
              <div className="cta-badge">
                <i className="fas fa-atom badge-pulse"></i>
                <span>Advanced Chemistry</span>
              </div>
            </div>
          </div>

        </div>
      </section>

    </main>
  );
}
