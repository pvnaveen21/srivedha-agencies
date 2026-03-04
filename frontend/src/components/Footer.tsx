import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ArrowUp, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';
import './Footer.css';

export default function Footer() {
    const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

    return (
        <footer className="footer" id="footer">
            <div className="footer__wave">
                <svg viewBox="0 0 1440 120" fill="none" preserveAspectRatio="none">
                    <path d="M0,60 C360,120 720,0 1080,60 C1260,90 1380,80 1440,60 L1440,120 L0,120 Z" fill="var(--primary-900)" />
                </svg>
            </div>

            <div className="footer__main">
                <div className="container">
                    <div className="footer__grid">
                        {/* Brand */}
                        <div className="footer__brand">
                            <Link to="/" className="footer__logo">
                                <img src="/logo.png" alt="Srivedha Agencies" className="footer__logo-img" />
                                <div>
                                    <span className="footer__logo-name">Srivedha</span>
                                    <span className="footer__logo-sub">Agencies</span>
                                </div>
                            </Link>
                            <p className="footer__description">
                                Your trusted B2B wholesale partner for quality products at competitive bulk prices. Empowering retailers across India.
                            </p>
                            <div className="footer__socials">
                                <a href="#" className="footer__social" aria-label="Facebook"><Facebook size={18} /></a>
                                <a href="#" className="footer__social" aria-label="Instagram"><Instagram size={18} /></a>
                                <a href="#" className="footer__social" aria-label="Twitter"><Twitter size={18} /></a>
                                <a href="#" className="footer__social" aria-label="LinkedIn"><Linkedin size={18} /></a>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div className="footer__column">
                            <h4 className="footer__column-title">Quick Links</h4>
                            <ul className="footer__links">
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/about">About Us</Link></li>
                                <li><Link to="/categories">Categories</Link></li>
                                <li><Link to="/contact">Contact Us</Link></li>
                                <li><Link to="/faq">FAQ</Link></li>
                            </ul>
                        </div>

                        {/* Categories */}
                        <div className="footer__column">
                            <h4 className="footer__column-title">Categories</h4>
                            <ul className="footer__links">
                                <li><Link to="/categories/fmcg">FMCG Products</Link></li>
                                <li><Link to="/categories/personal-care">Personal Care</Link></li>
                                <li><Link to="/categories/household">Household Items</Link></li>
                                <li><Link to="/categories/groceries">Groceries</Link></li>
                                <li><Link to="/categories/beverages">Beverages</Link></li>
                            </ul>
                        </div>

                        {/* Support */}
                        <div className="footer__column">
                            <h4 className="footer__column-title">Support</h4>
                            <ul className="footer__links">
                                <li><Link to="/faq">Help Center</Link></li>
                                <li><Link to="/privacy">Privacy Policy</Link></li>
                                <li><Link to="/terms">Terms & Conditions</Link></li>
                                <li><Link to="/login">Login / Register</Link></li>
                            </ul>
                        </div>

                        {/* Contact */}
                        <div className="footer__column">
                            <h4 className="footer__column-title">Contact Us</h4>
                            <ul className="footer__contact-list">
                                <li>
                                    <MapPin size={16} />
                                    <span>123 Business Park, Chennai, Tamil Nadu, India</span>
                                </li>
                                <li>
                                    <Phone size={16} />
                                    <span>+91 98765 43210</span>
                                </li>
                                <li>
                                    <Mail size={16} />
                                    <span>info@srivedhaagencies.com</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer__bottom">
                <div className="container footer__bottom-content">
                    <p>&copy; {new Date().getFullYear()} Srivedha Agencies. All rights reserved.</p>
                    <div className="footer__bottom-links">
                        <Link to="/privacy">Privacy</Link>
                        <Link to="/terms">Terms</Link>
                    </div>
                </div>
            </div>

            <button className="footer__scroll-top" onClick={scrollToTop} aria-label="Scroll to top" id="scroll-top-btn">
                <ArrowUp size={20} />
            </button>
        </footer>
    );
}
