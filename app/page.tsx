"use client";
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect } from 'react';
import HeroMolecules from '../components/3d/HeroMolecules';
import NumberCounter from '../components/ui/NumberCounter';

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.animate-fade-in-up').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Head>
        <title>Home - Aditya Chemicals | Leading API Manufacturer</title>
        <meta name="description" content="Aditya Chemicals is one of the best pharmaceutical companies in India. A GMP-certified chemical manufacturer and global leader in active pharmaceutical ingredients, Food Additives, and excipients." />
      </Head>

      <main>
        {/* 2. Hero/Banner Section */}
        <section className="hero">
          <div className="container">
            <div className="hero-grid">

              <div className="hero-content animate-fade-in-up" style={{ textAlign: 'left', margin: 0, paddingRight: '2rem' }}>
                <h1 className="text-4xl md:text-6xl text-primary" style={{ marginBottom: '1.5rem', lineHeight: '1.1' }}>
                  Aditya Chemicals – Delivering Excellence in APIs and Food Additives Worldwide
                </h1>
                <p className="delay-100 animate-fade-in-up text-lg text-muted" style={{ marginBottom: '2.5rem' }}>
                  A Leading Force in Food Additives & API Manufacturers.
                </p>
                <div className="flex gap-sm delay-200 animate-fade-in-up">
                  <Link href="#products" className="btn btn-primary">Explore Products</Link>
                  <Link href="#contact" className="btn btn-outline">Let's Connect</Link>
                </div>
              </div>

              {/* 3D Molecules Animation Carousel */}
              <div className="hero-molecule-wrapper" style={{ minHeight: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <HeroMolecules />
              </div>

            </div>
          </div>
        </section>

        {/* 3. About Section */}
        <section id="about" className="section section-light">
          <div className="container grid md:grid-cols-2 gap-xl items-center">

            <div className="animate-fade-in-up" style={{ order: 2 }}>
              <h2 className="text-3xl md:text-4xl" style={{ marginBottom: '1.5rem', color: 'var(--color-primary)' }}>Who We Are: About Aditya Chemicals.</h2>
              <p className="text-lg text-muted" style={{ marginBottom: '1.5rem', lineHeight: '1.8' }}>
                Aditya Chemicals positions itself as one of the leading pharmaceutical companies in India — a GMP-certified manufacturer and global player in active pharmaceutical ingredients (APIs), food additives, and excipients.
              </p>
              <p className="text-lg text-muted" style={{ lineHeight: '1.8' }}>
                Founded in 1992 as a pioneer in India, it was set up to address the growing need for value-driven, high-purity solutions in pharma and nutrition.
              </p>
            </div>

            <div className="animate-fade-in-up delay-200" style={{ order: 1 }}>
              <div style={{ position: 'relative', width: '100%', height: '400px', borderRadius: '1rem', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}>
                <Image
                  src="/aditya chemicals images/home page/home page images/magnific_massive-pharmaceutical-ma_mCc5jr4hJQ.png"
                  alt="Abstract Pharmaceutical Chemistry"
                  fill
                  style={{ objectFit: 'cover' }}
                  priority
                />
              </div>
            </div>

          </div>
        </section>

        {/* Core Values Section */}
        <section className="section section-light">
          <div className="container">
            <div className="text-center animate-fade-in-up" style={{ maxWidth: '800px', margin: '0 auto' }}>
              <h2 className="text-3xl md:text-4xl" style={{ marginBottom: '1rem', color: 'var(--color-primary)' }}>Our Core Values</h2>
              <p className="text-lg text-muted">The foundational principles that drive our innovation and ensure the highest standards of safety globally.</p>
            </div>

            <div className="core-values-grid animate-fade-in-up delay-100">
              <div className="value-card">
                <div className="value-icon">🔬</div>
                <h3>Unwavering Purity</h3>
                <p>Stringent quality control to ensure pharmaceutical-grade excellence in every batch.</p>
              </div>
              <div className="value-card">
                <div className="value-icon">🛡️</div>
                <h3>Global Safety</h3>
                <p>Adhering to the strictest international standards for FDA-approved manufacturing.</p>
              </div>
              <div className="value-card">
                <div className="value-icon">💡</div>
                <h3>Pioneering Innovation</h3>
                <p>Continuously investing in R&D to lead the next generation of healthcare solutions.</p>
              </div>
              <div className="value-card">
                <div className="value-icon">🤝</div>
                <h3>Trusted Partnerships</h3>
                <p>Building long-term, transparent relationships with the world's leading brands.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. "Our Markets" Section */}
        <section id="products" className="section section-surface">
          <div className="container">
            <div className="text-center animate-fade-in-up" style={{ maxWidth: '800px', margin: '0 auto 4rem auto' }}>
              <h2 className="text-3xl md:text-4xl" style={{ marginBottom: '1rem' }}>Our Markets</h2>
              <p className="text-lg text-muted">We supply innovative solutions across the core sectors of:</p>
            </div>

            <div className="market-accordion animate-fade-in-up delay-100">

              {/* Item 1 */}
              <div className="accordion-item">
                <Image src="/aditya chemicals images/home page/Our Markets/Pharmaceuticals/magnific_modern-pharmaceutical-inn_SOF33RsUb8.png" alt="Pharmaceuticals" fill style={{ objectFit: 'cover' }} />
                <div className="accordion-overlay">
                  <h3 className="accordion-title">Pharmaceuticals</h3>
                  <div className="accordion-content">
                    <p>
                      Our high-performance APIs, developed in FDA-approved API manufacturing environments, meet stringent pharmaceutical regulatory compliance standards. As major API manufacturers, we are among the top food and pharmaceutical companies on which pharmaceutical leaders rely.
                    </p>
                  </div>
                </div>
              </div>

              {/* Item 2 */}
              <div className="accordion-item">
                <Image src="/aditya chemicals images/home page/Our Markets/Nutritional Supplements/magnific_highend-nutraceutical-res_5xIwjbLKxe.png" alt="Nutritional Supplements" fill style={{ objectFit: 'cover' }} />
                <div className="accordion-overlay">
                  <h3 className="accordion-title">Nutritional Supplements</h3>
                  <div className="accordion-content">
                    <p>
                      As trusted nutraceutical ingredient manufacturers, we provide fine-grade products and supplements. Furthermore, we offer low-heavy metal excipients, vitamins & derivatives that meet the diverse requirements of health-focused product formulation.
                    </p>
                  </div>
                </div>
              </div>

              {/* Item 3 */}
              <div className="accordion-item">
                <Image src="/aditya chemicals images/home page/Our Markets/Food Additives/magnific_premium-food-science-labo_gJQ6skvSXO.png" alt="Food Additives" fill style={{ objectFit: 'cover' }} />
                <div className="accordion-overlay">
                  <h3 className="accordion-title">Food Additives</h3>
                  <div className="accordion-content">
                    <p>
                      Our high-priority food additive formulations enhance the taste profiles, improve texture, extend shelf life, and ensure unmatched food safety. Thus, we support industries in meeting ever-evolving global standards. From everyday staples to premium innovations, our additives empower brands.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 5. "What Makes Us Different" Section */}
        <section className="section section-light">
          <div className="container grid md:grid-cols-2 gap-xl items-center">
            <div className="animate-fade-in-up">
              <h2 className="text-3xl md:text-4xl" style={{ marginBottom: '1.5rem' }}>What Makes Us Different</h2>
              <p className="text-lg text-muted" style={{ marginBottom: '2rem' }}>
                For over 30 years, Aditya Chemicals has been a global manufacturer of high-purity APIs, Excipients, Food Additives, and Nutraceutical Ingredients, crafting tailored solutions across industries.
              </p>
              <ul className="bullet-list">
                <li>
                  <strong>Unwavering Innovation</strong> — Pioneer constantly developing new solutions.
                </li>
                <li>
                  <strong>Unmatched Quality</strong> — State-of-the-art facilities, rigorous QC processes.
                </li>
                <li>
                  <strong>Diverse Portfolio</strong> — Broad range of high-purity chemicals, APIs, excipients, food additives, and nutraceutical ingredients.
                </li>
              </ul>
            </div>

            <div className="masonry-grid animate-fade-in-up delay-200">
              <div className="masonry-item">
                <Image src="/aditya chemicals images/home page/home page images/magnific_indian-pharmaceutical-inn_SOF3pgDUb8.png" alt="Innovation" fill />
              </div>
              <div className="masonry-item">
                <Image src="/aditya chemicals images/home page/home page images/magnific_indian-pharmaceutical-qua_9RxWvcENYZ.png" alt="Quality Control" fill />
              </div>
              <div className="masonry-item">
                <Image src="/aditya chemicals images/home page/home page images/magnific_indian-pharmaceutical-res_Pi1noj542C (1).png" alt="Research" fill />
              </div>
              <div className="masonry-item">
                <Image src="/aditya chemicals images/home page/home page images/magnific_pharmaceutical-ingredient_SOF3Y4uUb8.png" alt="Ingredients" fill />
              </div>
            </div>
          </div>
        </section>

        {/* 6. "Advancing Health Through Innovation" Section */}
        <section className="section section-surface" style={{ paddingTop: 0 }}>
          <div className="innovation-banner animate-fade-in-up">
            <div className="innovation-content">
              <h2>Advancing Health Through Innovation</h2>
              <p>
                Innovation is positioned as the key to a healthier future, driven by an R&D team focused on pharma, food, and nutrition research.
              </p>
            </div>
          </div>

          <div className="container">
            <div className="grid md:grid-cols-3 gap-lg mb-8 animate-fade-in-up delay-100" style={{ marginBottom: '4rem' }}>
              <div className="card">
                <div className="card-content">
                  <h3 className="text-xl">Pioneering Solutions</h3>
                  <p className="text-muted text-sm">Continuous development of new/improved products.</p>
                </div>
              </div>
              <div className="card">
                <div className="card-content">
                  <h3 className="text-xl">Uncompromising Quality & Safety</h3>
                  <p className="text-muted text-sm">Latest technologies/methods for high quality and safety standards.</p>
                </div>
              </div>
              <div className="card">
                <div className="card-content">
                  <h3 className="text-xl">Global Impact</h3>
                  <p className="text-muted text-sm">Mission-driven exploration of new frontiers in API and premix development.</p>
                </div>
              </div>
            </div>

            {/* Stats Counters */}
            <div className="grid md:grid-cols-3 animate-fade-in-up delay-200" style={{ marginTop: '2rem' }}>
              <div className="stat-box">
                <div className="stat-number"><NumberCounter end={75} suffix="+" /></div>
                <div className="stat-label uppercase tracking-wider text-sm font-semibold text-gray-500">NO. OF PRODUCTS</div>
              </div>
              <div className="stat-box">
                <div className="stat-number"><NumberCounter end={10} suffix="+" /></div>
                <div className="stat-label uppercase tracking-wider text-sm font-semibold text-gray-500">OPERATIONAL COUNTRIES</div>
              </div>
              <div className="stat-box">
                <div className="stat-number"><NumberCounter end={30} suffix="+" /></div>
                <div className="stat-label uppercase tracking-wider text-sm font-semibold text-gray-500">YEARS OF EXPERIENCE</div>
              </div>
            </div>
          </div>
        </section>

        {/* 7. "Our Clients" Section */}
        <section className="section" style={{ backgroundColor: 'var(--color-background)', paddingBottom: '3rem', paddingTop: '3rem' }}>
          <div className="container">
            <h2 className="text-3xl md:text-4xl text-center" style={{ marginBottom: '3rem', color: 'var(--color-primary)' }}>
              Our <strong>Clients</strong>
            </h2>
            <div className="marquee-container animate-fade-in-up">
              <div className="marquee marquee-left">
                <div className="marquee-content">
                  {[
                    "https://www.adityachemicals.in/wp-content/uploads/2025/07/2solvay.jpg",
                    "https://www.adityachemicals.in/wp-content/uploads/2025/07/3pandg.jpg",
                    "https://www.adityachemicals.in/wp-content/uploads/2025/07/4indchem.jpg",
                    "https://www.adityachemicals.in/wp-content/uploads/2025/07/sun-pharma.jpg",
                    "https://www.adityachemicals.in/wp-content/uploads/2025/07/br_logo1.png",
                    "https://www.adityachemicals.in/wp-content/uploads/2025/07/br_logo2.png",
                    "https://www.adityachemicals.in/wp-content/uploads/2025/07/br_logo3.png",
                    "https://www.adityachemicals.in/wp-content/uploads/2025/07/br_logo4.png",
                    "https://www.adityachemicals.in/wp-content/uploads/2025/07/br_logo5.png",
                    "https://www.adityachemicals.in/wp-content/uploads/2025/07/br_logo6.png"
                  ].map((url, i) => (
                    <div key={i} className="client-logo-wrapper marquee-item">
                      <img src={url} alt={`Client Logo ${i}`} style={{ width: '100%', height: '100%', objectFit: 'contain', padding: '1.25rem' }} />
                    </div>
                  ))}
                  {[
                    "https://www.adityachemicals.in/wp-content/uploads/2025/07/2solvay.jpg",
                    "https://www.adityachemicals.in/wp-content/uploads/2025/07/3pandg.jpg",
                    "https://www.adityachemicals.in/wp-content/uploads/2025/07/4indchem.jpg",
                    "https://www.adityachemicals.in/wp-content/uploads/2025/07/sun-pharma.jpg",
                    "https://www.adityachemicals.in/wp-content/uploads/2025/07/br_logo1.png",
                    "https://www.adityachemicals.in/wp-content/uploads/2025/07/br_logo2.png",
                    "https://www.adityachemicals.in/wp-content/uploads/2025/07/br_logo3.png",
                    "https://www.adityachemicals.in/wp-content/uploads/2025/07/br_logo4.png",
                    "https://www.adityachemicals.in/wp-content/uploads/2025/07/br_logo5.png",
                    "https://www.adityachemicals.in/wp-content/uploads/2025/07/br_logo6.png"
                  ].map((url, i) => (
                    <div key={`dup-${i}`} className="client-logo-wrapper marquee-item">
                      <img src={url} alt={`Client Logo ${i}`} style={{ width: '100%', height: '100%', objectFit: 'contain', padding: '1.25rem' }} />
                    </div>
                  ))}
                </div>
              </div>

              <div className="marquee marquee-right" style={{ marginTop: '1.5rem' }}>
                <div className="marquee-content">
                  {[
                    "https://www.adityachemicals.in/wp-content/uploads/2025/07/5naure-buety.jpg",
                    "https://www.adityachemicals.in/wp-content/uploads/2025/07/6innophos.jpg",
                    "https://www.adityachemicals.in/wp-content/uploads/2025/07/7concord.jpg",
                    "https://www.adityachemicals.in/wp-content/uploads/2025/07/8navana.jpg",
                    "https://www.adityachemicals.in/wp-content/uploads/2025/07/br_logo7.png",
                    "https://www.adityachemicals.in/wp-content/uploads/2025/07/br_logo8.png",
                    "https://www.adityachemicals.in/wp-content/uploads/2025/07/br_logo9.png",
                    "https://www.adityachemicals.in/wp-content/uploads/2025/07/br_logo10.png",
                    "https://www.adityachemicals.in/wp-content/uploads/2025/07/br_logo11.png",
                    "https://www.adityachemicals.in/wp-content/uploads/2025/07/br_logo12.png"
                  ].map((url, i) => (
                    <div key={i} className="client-logo-wrapper marquee-item">
                      <img src={url} alt={`Client Logo ${i}`} style={{ width: '100%', height: '100%', objectFit: 'contain', padding: '1.25rem' }} />
                    </div>
                  ))}
                  {[
                    "https://www.adityachemicals.in/wp-content/uploads/2025/07/5naure-buety.jpg",
                    "https://www.adityachemicals.in/wp-content/uploads/2025/07/6innophos.jpg",
                    "https://www.adityachemicals.in/wp-content/uploads/2025/07/7concord.jpg",
                    "https://www.adityachemicals.in/wp-content/uploads/2025/07/8navana.jpg",
                    "https://www.adityachemicals.in/wp-content/uploads/2025/07/br_logo7.png",
                    "https://www.adityachemicals.in/wp-content/uploads/2025/07/br_logo8.png",
                    "https://www.adityachemicals.in/wp-content/uploads/2025/07/br_logo9.png",
                    "https://www.adityachemicals.in/wp-content/uploads/2025/07/br_logo10.png",
                    "https://www.adityachemicals.in/wp-content/uploads/2025/07/br_logo11.png",
                    "https://www.adityachemicals.in/wp-content/uploads/2025/07/br_logo12.png"
                  ].map((url, i) => (
                    <div key={`dup-${i}`} className="client-logo-wrapper marquee-item">
                      <img src={url} alt={`Client Logo ${i}`} style={{ width: '100%', height: '100%', objectFit: 'contain', padding: '1.25rem' }} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 8. CTA / Partnership Banner Section */}
        <section className="animate-fade-in-up">
          <div className="container">
            <div className="cta-banner">
              <div className="cta-banner-content">

                {/* Left Side: Value Propositions */}
                <div className="cta-info">
                  <h2 className="text-3xl md:text-4xl">
                    Ready to elevate your formulations?
                  </h2>
                  <p className="text-lg" style={{ marginBottom: '2rem', opacity: 0.9 }}>
                    We build partnerships founded on collaborative innovation and absolute precision. Aditya Chemicals has been powering purity for over 30 years.
                  </p>

                  <ul className="cta-features">
                    <li>
                      <span className="cta-icon">✓</span>
                      <div>
                        <strong>FDA-Approved Facilities</strong>
                        <span>Ensuring the highest global compliance & safety standards.</span>
                      </div>
                    </li>
                    <li>
                      <span className="cta-icon">✓</span>
                      <div>
                        <strong>High-Purity APIs</strong>
                        <span>Crafting precision at a molecular level for top-tier pharma.</span>
                      </div>
                    </li>
                    <li>
                      <span className="cta-icon">✓</span>
                      <div>
                        <strong>Global Supply Chain</strong>
                        <span>Exporting to 75+ countries with seamless logistics.</span>
                      </div>
                    </li>
                  </ul>
                </div>

                {/* Right Side: Action Area */}
                <div className="cta-action">
                  <div className="cta-action-card">
                    <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: 'var(--color-primary)' }}>Let's innovate together.</h3>
                    <p style={{ color: 'var(--color-text)', marginBottom: '2rem' }}>
                      Speak directly with our chemical experts to discuss your specific bulk API or excipient needs.
                    </p>
                    <Link href="#contact" className="btn btn-primary" style={{ width: '100%', marginBottom: '1rem', padding: '1rem' }}>
                      Connect with an Expert →
                    </Link>
                    <p style={{ color: 'var(--color-text-light)', fontSize: '0.9rem', margin: 0 }}>
                      Typically replies within 24 hours.
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}