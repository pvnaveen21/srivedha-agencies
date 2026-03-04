import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const navLinks = [
    { label: 'About Us', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Contact', path: '/contact' },
    { label: 'FAQ', path: '/faq' },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileOpen, setIsMobileOpen] = useState(false);

    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsMobileOpen(false);

    }, [location.pathname]);

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (isMobileOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => { document.body.style.overflow = ''; };
    }, [isMobileOpen]);

    return (
        <>
            <header className={`navbar navbar--solid ${isScrolled ? 'navbar--scrolled' : ''}`} id="main-navbar">
                <div className="navbar__container container">
                    <Link to="/" className="navbar__logo" id="navbar-logo">
                        <img src="/logo.png" alt="Sri Vedha Agencies" className="navbar__logo-img" />
                        <div className="navbar__logo-text">
                            <span className="navbar__logo-name">Sri Vedha</span>
                            <span className="navbar__logo-sub">Agencies</span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="navbar__nav navbar__nav--desktop" id="main-nav-desktop">
                        <ul className="navbar__links">
                            {navLinks.map((link) => (
                                <li
                                    key={link.path}
                                    className="navbar__link-item"
                                >
                                    <Link
                                        to={link.path}
                                        className={`navbar__link ${location.pathname === link.path ? 'active' : ''}`}
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <div className="navbar__actions">
                        {/* <Link to="/login" className="navbar__action-btn" id="login-btn" aria-label="Login">
                            <User size={20} />
                        </Link>
                        <Link to="/login" className="btn btn-primary navbar__cta" id="register-cta">
                            Get Started
                        </Link> */}
                        <button
                            className="navbar__hamburger"
                            id="mobile-menu-toggle"
                            onClick={() => setIsMobileOpen(!isMobileOpen)}
                            aria-label="Toggle menu"
                        >
                            {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Drawer Overlay */}
            <div
                className={`mobile-overlay ${isMobileOpen ? 'mobile-overlay--visible' : ''}`}
                onClick={() => setIsMobileOpen(false)}
            />

            {/* Mobile Drawer */}
            <aside className={`mobile-drawer ${isMobileOpen ? 'mobile-drawer--open' : ''}`} id="mobile-drawer">
                {/* Drawer Header */}
                <div className="mobile-drawer__header">
                    <Link to="/" className="mobile-drawer__logo" onClick={() => setIsMobileOpen(false)}>
                        <img src="/logo.png" alt="Sri Vedha Agencies" className="mobile-drawer__logo-img" />
                        <div>
                            <span className="mobile-drawer__logo-name">Sri Vedha</span>
                            <span className="mobile-drawer__logo-sub">Agencies</span>
                        </div>
                    </Link>
                    <button
                        className="mobile-drawer__close"
                        onClick={() => setIsMobileOpen(false)}
                        aria-label="Close menu"
                    >
                        <X size={22} />
                    </button>
                </div>

                {/* Drawer Navigation */}
                <nav className="mobile-drawer__nav">
                    <ul className="mobile-drawer__links">
                        {navLinks.map((link) => (
                            <li key={link.path} className="mobile-drawer__link-item">
                                <Link
                                    to={link.path}
                                    className={`mobile-drawer__link ${location.pathname === link.path ? 'mobile-drawer__link--active' : ''}`}
                                    onClick={() => setIsMobileOpen(false)}
                                >
                                    <span>{link.label}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Drawer Footer */}
                <div className="mobile-drawer__footer">
                    {/* <Link
                        to="/login"
                        className="btn btn-primary mobile-drawer__cta"
                        onClick={() => setIsMobileOpen(false)}
                    >
                        Get Started <ArrowRight size={16} />
                    </Link>
                    <Link
                        to="/login"
                        className="mobile-drawer__signin"
                        onClick={() => setIsMobileOpen(false)}
                    >
                        <User size={16} />
                        <span>Sign In / Register</span>
                    </Link> */}
                </div>
            </aside>
        </>
    );
}
