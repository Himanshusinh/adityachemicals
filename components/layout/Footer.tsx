import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top-accent"></div>
      <div className="container">
        {/* Top Section */}
        <div className="footer-grid">

          {/* Column 1: Branding */}
          <div className="footer-col">
            <Link href="/" style={{ display: 'inline-block', marginBottom: '25px' }}>
              <Image
                src="/aditya-chemicals-in logo.jpg"
                alt="Aditya Chemicals Logo"
                width={180}
                height={45}
                style={{ objectFit: 'contain', width: 'auto', height: '32px' }}
              />
            </Link>
            <p className="footer-desc">
              Since 1992, Aditya Chemicals has been manufacturing ultra-pure APIs, food additives, and excipients trusted by global leaders in pharma and nutrition.
            </p>
            <div className="footer-socials">
              <a href="#" className="social-btn facebook" aria-label="Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social-btn linkedin" aria-label="LinkedIn">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#" className="social-btn twitter" aria-label="Twitter">
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>

          {/* Column 2: Links */}
          <div className="footer-col">
            <h3 className="footer-title">Quick Links</h3>
            <ul className="footer-links-list">
              <li><Link href="/">Home</Link></li>
              <li><Link href="#about">About Us</Link></li>
              <li><Link href="#markets">Our Markets</Link></li>
              <li><Link href="#contact">Contact Us</Link></li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div className="footer-col">
            <h3 className="footer-title">Contact Info</h3>
            <ul className="footer-contact-list">
              <li>
                <div className="contact-icon-box">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <span>123 Industrial Area, Phase II,<br />Ahmedabad, Gujarat 380015</span>
              </li>
              <li>
                <div className="contact-icon-box">
                  <i className="fas fa-phone-alt"></i>
                </div>
                <span><a href="tel:+918320634870">+91 83206 34870</a></span>
              </li>
              <li>
                <div className="contact-icon-box">
                  <i className="fas fa-envelope"></i>
                </div>
                <span><a href="mailto:info@adityachemicals.com">info@adityachemicals.com</a></span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="footer-bottom">
          <p className="footer-copyright">&copy; {new Date().getFullYear()} Aditya Chemicals. All Rights Reserved.</p>
          <p className="footer-credits">
            Crafted with <i className="fas fa-heart heart-pulse"></i> by WildMindAI
          </p>
        </div>
      </div>
    </footer>
  );
}
