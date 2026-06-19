import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer id="contact" className="footer">
      <div className="container flex flex-col items-center" style={{ marginBottom: '3rem', borderBottom: '1px solid var(--color-border)', paddingBottom: '3rem' }}>
        <Image 
          src="/aditya-chemicals-in logo.jpg" 
          alt="Aditya Chemicals" 
          width={240} 
          height={80} 
          style={{ 
            objectFit: 'contain',
            mixBlendMode: 'multiply',
            marginBottom: '2rem'
          }} 
        />
        <p className="text-lg text-primary text-center" style={{ maxWidth: '800px', margin: '0 auto' }}>
          "Aditya Chemicals welcomes your interest in its products, quality, and solutions. Please feel free to contact us by the method of your choice."
        </p>
      </div>

      <div className="container grid md:grid-cols-4 gap-lg" style={{ paddingBottom: '3rem' }}>

        <div className="md:col-span-1">
          <h4 className="footer-title">Address</h4>
          <div className="contact-block">
            <strong>Manufacturing Plant:</strong>
            <p>24-25, Ajanta Industrial Estate, At. Vasna - Iyava, Tal. Sanand, Dist.: Ahmedabad - 382110, Gujarat, INDIA</p>
          </div>
          <div className="contact-block">
            <strong>USA Warehouse:</strong>
            <p>6750 East Roger Circle, Boca Raton, FL 33487, USA</p>
          </div>
        </div>

        <div>
          <h4 className="footer-title">Our Company</h4>
          <Link href="/" className="footer-link">Home</Link>
          <Link href="#about" className="footer-link">About Us</Link>
          <Link href="#products" className="footer-link">Products</Link>
          <Link href="#certificates" className="footer-link">Certificates</Link>
          <Link href="#contact" className="footer-link">Contact Us</Link>
        </div>

        <div>
          <h4 className="footer-title">Our Products</h4>
          <Link href="#" className="footer-link">Amino Acids and Derivatives</Link>
          <Link href="#" className="footer-link">Chelated Minerals</Link>
          <Link href="#" className="footer-link">Vitamins & Derivatives</Link>
          <Link href="#" className="footer-link">Excipients</Link>
        </div>

        <div>
          <h4 className="footer-title">Contact Us</h4>
          <div className="contact-block">
            <strong>Phone:</strong>
            <a href="tel:07926854545" className="footer-link" style={{ marginBottom: 0 }}>07926854545</a>
          </div>
          <div className="contact-block">
            <strong>Email:</strong>
            <a href="mailto:info@adityachemicals.in" className="footer-link" style={{ marginBottom: 0 }}>info@adityachemicals.in</a>
          </div>
          <div className="contact-block">
            <strong>Office:</strong>
            <p>204, President Plaza, Nr. Thaltej Cross Road, S. G. Highway, Ahmedabad</p>
          </div>
        </div>

      </div>

      <div className="container flex flex-col md:flex-row justify-between items-center" style={{ borderTop: '1px solid var(--color-border)', paddingTop: '2rem', paddingBottom: '2rem', fontSize: '0.9rem', color: 'var(--color-text-light)' }}>
        <p>© 2026 Aditya Chemicals. All Rights Reserved.</p>
        <div className="flex gap-sm" style={{ marginTop: '1rem' }}>
          <Link href="#" className="footer-link" style={{ marginBottom: 0 }}>Privacy Policy</Link>
          <span style={{ color: 'var(--color-border)' }}>|</span>
          <Link href="#" className="footer-link" style={{ marginBottom: 0 }}>Terms of Use</Link>
        </div>
      </div>

      <div className="footer-watermark">
        ADITYA CHEMICALS
      </div>
    </footer>
  );
}
