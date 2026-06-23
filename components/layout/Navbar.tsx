'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`site-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          
          <div className="site-branding">
            <Link href="/" className="logo-text d-flex align-items-center">
              <Image 
                src="/aditya-chemicals-in logo.jpg" 
                alt="Aditya Chemicals Logo" 
                width={200} 
                height={50} 
                style={{ objectFit: 'contain', width: 'auto', height: '36px' }}
                priority
              />
            </Link>
          </div>

          <nav className="d-none-sm">
            <ul className="nav-menu">
              <li><Link href="/">Home</Link></li>
              <li><Link href="#about">About Us</Link></li>
              <li><Link href="#markets">Products</Link></li>
              <li><Link href="#about">Certificates</Link></li>
              <li><Link href="#about">Events</Link></li>
              <li><Link href="#contact">Contact Us</Link></li>
            </ul>
          </nav>

          <div className="nav-actions">
            <a href="#contact" className="btn-brochure">
              Brochure
            </a>
          </div>

        </div>
      </div>
    </header>
  );
}
