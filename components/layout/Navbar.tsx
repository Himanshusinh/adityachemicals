import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="container flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image
            src="/aditya-chemicals-in logo.jpg"
            alt="Aditya Chemicals"
            width={180}
            height={60}
            style={{
              objectFit: 'contain',
              mixBlendMode: 'multiply' /* Removes the white background on light surfaces */
            }}
            priority
          />
        </Link>

        <div className="nav-desktop flex items-center gap-md">
          <Link href="/" className="nav-link">Home</Link>
          <Link href="#about" className="nav-link">About Us</Link>

          {/* Products Dropdown */}
          <div className="dropdown-container">
            <Link href="#products" className="nav-link flex items-center" style={{ gap: '4px' }}>
              Products
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <div className="dropdown-menu">
              <Link href="#" className="dropdown-item">Amino Acids and Derivatives</Link>
              <Link href="#" className="dropdown-item">Chelated Minerals (Calcium, Copper, Ferrous, Magnesium, Manganese, Potassium, Zinc)</Link>
              <Link href="#" className="dropdown-item">Vitamins & Derivatives</Link>
              <Link href="#" className="dropdown-item">Excipients</Link>
            </div>
          </div>

          <Link href="#certificates" className="nav-link">Certificates</Link>
          <Link href="#events" className="nav-link">Events</Link>
          <Link href="#contact" className="nav-link">Contact Us</Link>
          <Link href="#" className="btn btn-primary text-sm" style={{ padding: '0.6rem 1.5rem', marginLeft: '1rem' }}>
            Brochure (download)
          </Link>
        </div>
      </div>
    </nav>
  );
}
