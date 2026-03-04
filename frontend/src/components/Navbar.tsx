import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, User, Search, Home, ArrowRight } from 'lucide-react';
import './Navbar.css';

const navLinks = [
    // { label: 'Home', path: '/', icon: <Home size={18} /> },
    { label: 'About Us', path: '/about' },
    {
        label: 'Categories',
        path: '/categories',
        submenu: [
            { label: 'FMCG Products', path: '/categories/fmcg' },
            { label: 'Personal Care', path: '/categories/personal-care' },
            { label: 'Household Items', path: '/categories/household' },
            { label: 'Groceries', path: '/categories/groceries' },
            { label: 'Beverages', path: '/categories/beverages' },
            { label: 'Bulk Essentials', path: '/categories/bulk-essentials' },
        ],
    },
    { label: 'Contact', path: '/contact' },
    { label: 'FAQ', path: '/faq' },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileOpen, setIsMobileOpen] = useState(false);
    const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsMobileOpen(false);
        setOpenSubmenu(null);
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
            <header className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`} id="main-navbar">
                <div className="navbar__container container">
                    <Link to="/" className="navbar__logo" id="navbar-logo">
                        <img src="/logo.png" alt="Srivedha Agencies" className="navbar__logo-img" />
                        <div className="navbar__logo-text">
                            <span className="navbar__logo-name">Srivedha</span>
                            <span className="navbar__logo-sub">Agencies</span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="navbar__nav navbar__nav--desktop" id="main-nav-desktop">
                        <ul className="navbar__links">
                            {navLinks.map((link) => (
                                <li
                                    key={link.path}
                                    className={`navbar__link-item ${link.submenu ? 'has-submenu' : ''}`}
                                    onMouseEnter={() => link.submenu && setOpenSubmenu(link.path)}
                                    onMouseLeave={() => link.submenu && setOpenSubmenu(null)}
                                >
                                    <Link
                                        to={link.path}
                                        className={`navbar__link ${location.pathname === link.path ? 'active' : ''}`}
                                        onClick={() => link.submenu && setOpenSubmenu(openSubmenu === link.path ? null : link.path)}
                                    >
                                        {link.label}
                                        {link.submenu && <ChevronDown size={14} />}
                                    </Link>
                                    {link.submenu && (
                                        <ul className={`navbar__submenu ${openSubmenu === link.path ? 'navbar__submenu--open' : ''}`}>
                                            {link.submenu.map((sub) => (
                                                <li key={sub.path}>
                                                    <Link to={sub.path} className="navbar__submenu-link">
                                                        {sub.label}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <div className="navbar__actions">
                        <button className="navbar__action-btn" id="search-btn" aria-label="Search">
                            <Search size={20} />
                        </button>
                        <Link to="/login" className="navbar__action-btn" id="login-btn" aria-label="Login">
                            <User size={20} />
                        </Link>
                        <Link to="/login" className="btn btn-primary navbar__cta" id="register-cta">
                            Get Started
                        </Link>
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
                        <img src="/logo.png" alt="Srivedha Agencies" className="mobile-drawer__logo-img" />
                        <div>
                            <span className="mobile-drawer__logo-name">Srivedha</span>
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
                                    onClick={() => {
                                        if (link.submenu) {
                                            setOpenSubmenu(openSubmenu === link.path ? null : link.path);
                                        } else {
                                            setIsMobileOpen(false);
                                        }
                                    }}
                                >
                                    <span>{link.label}</span>
                                    {link.submenu && (
                                        <ChevronDown
                                            size={16}
                                            className={`mobile-drawer__chevron ${openSubmenu === link.path ? 'mobile-drawer__chevron--open' : ''}`}
                                        />
                                    )}
                                </Link>

                                {/* Submenu */}
                                {link.submenu && (
                                    <ul className={`mobile-drawer__submenu ${openSubmenu === link.path ? 'mobile-drawer__submenu--open' : ''}`}>
                                        {link.submenu.map((sub) => (
                                            <li key={sub.path}>
                                                <Link
                                                    to={sub.path}
                                                    className="mobile-drawer__submenu-link"
                                                    onClick={() => setIsMobileOpen(false)}
                                                >
                                                    {sub.label}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Drawer Footer */}
                <div className="mobile-drawer__footer">
                    <Link
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
                    </Link>
                </div>
            </aside>
        </>
    );
}
