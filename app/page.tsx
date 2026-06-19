import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import HeroMolecules from '../components/3d/HeroMolecules';

export default function Home() {
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
                  src="/about-us-bg.png"
                  alt="Abstract Pharmaceutical Chemistry"
                  fill
                  style={{ objectFit: 'cover' }}
                  priority
                />
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

            <div className="grid md:grid-cols-3 gap-lg">

              {/* Card 1 */}
              <div className="market-card-modern animate-fade-in-up delay-100">
                <h3 className="market-card-title">Pharmaceuticals</h3>
                <div className="market-card-image-box">
                  <Image src="/pharma-market.png" alt="Pharmaceuticals" fill style={{ objectFit: 'cover' }} />
                  <div className="market-card-details-overlay">
                    <p>
                      Our high-performance APIs, developed in FDA-approved API manufacturing environments, meet stringent pharmaceutical regulatory compliance standards. As major API manufacturers, we are among the top food and pharmaceutical companies on which pharmaceutical leaders rely.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="market-card-modern animate-fade-in-up delay-200">
                <h3 className="market-card-title">Nutritional Supplements</h3>
                <div className="market-card-image-box">
                  <Image src="/nutritional-market.png" alt="Nutritional Supplements" fill style={{ objectFit: 'cover' }} />
                  <div className="market-card-details-overlay">
                    <p>
                      As trusted nutraceutical ingredient manufacturers, we provide fine-grade products and supplements. Furthermore, we offer low-heavy metal excipients, vitamins & derivatives that meet the diverse requirements of health-focused product formulation.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 3 */}
              <div className="market-card-modern animate-fade-in-up delay-300">
                <h3 className="market-card-title">Food Additives</h3>
                <div className="market-card-image-box">
                  <Image src="/food-market.png" alt="Food Additives" fill style={{ objectFit: 'cover' }} />
                  <div className="market-card-details-overlay">
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
            </div>
            <div className="animate-fade-in-up delay-100">
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
          </div>
        </section>

        {/* 6. "Advancing Health Through Innovation" Section */}
        <section className="section section-surface">
          <div className="container">
            <div className="text-center animate-fade-in-up" style={{ maxWidth: '800px', margin: '0 auto 4rem auto' }}>
              <h2 className="text-3xl md:text-4xl" style={{ marginBottom: '1.5rem' }}>Advancing Health Through Innovation</h2>
              <p className="text-lg text-muted">
                Innovation is positioned as the key to a healthier future, driven by an R&D team focused on pharma, food, and nutrition research.
              </p>
            </div>

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
                <div className="stat-number">75+</div>
                <div className="stat-label uppercase tracking-wider text-sm font-semibold text-gray-500">NO. OF PRODUCTS</div>
              </div>
              <div className="stat-box">
                <div className="stat-number">10+</div>
                <div className="stat-label uppercase tracking-wider text-sm font-semibold text-gray-500">OPERATIONAL COUNTRIES</div>
              </div>
              <div className="stat-box">
                <div className="stat-number">30+</div>
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
              <h2 className="text-3xl md:text-4xl" style={{ marginBottom: '1.5rem', maxWidth: '800px', margin: '0 auto 1.5rem auto' }}>
                Looking for high-purity APIs manufacturers? Or are you searching for a partner who understands your formulation needs?
              </h2>
              <p className="text-lg" style={{ marginBottom: '2.5rem', opacity: 0.9, maxWidth: '700px', margin: '0 auto 2.5rem auto' }}>
                We built a partnership founded on collaborative innovation. Trusted globally. Crafted precisely. Aditya Chemicals - Powering Purity for Over 30 Years.
              </p>
              <Link href="#contact" className="btn btn-secondary" style={{ padding: '1rem 3rem', fontSize: '1.1rem' }}>
                Let's connect →
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}