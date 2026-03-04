import { Link } from 'react-router-dom';
import {
    ArrowRight, ShoppingCart, Truck, BarChart3, Shield,
    UserPlus, Search, Package, Clock,
    ChevronRight, Star, Users, Globe, Award
} from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './Home.css';

/* ===== HERO SECTION ===== */
function HeroSection() {
    return (
        <section className="hero" id="hero-section">
            {/* Animated background elements */}
            <div className="hero__bg">
                <div className="hero__bg-orb hero__bg-orb--1" />
                <div className="hero__bg-orb hero__bg-orb--2" />
                <div className="hero__bg-orb hero__bg-orb--3" />
                <div className="hero__bg-grid" />
            </div>

            <div className="container hero__container">
                <div className="hero__content">
                    <div className="hero__badge">
                        <Star size={14} />
                        <span>Empower Your Sales Growth Today</span>
                    </div>
                    <h1 className="hero__title">
                        One-stop Partner for
                        <span className="hero__title-accent"> Pharma & Cosmetics </span>
                        E-commerce Distribution
                    </h1>
                    <p className="hero__subtitle">
                        Discover how our integrated Pharma & Cosmetics e-commerce solutions operate in harmony to accelerate sustainable online growth. Backed by structured documentation, compliance-focused processes, and experienced marketplace management, Sri Vedha Agencies ensures reliable distribution and long-term brand protection.
                    </p>
                    <div className="hero__buttons">
                        <Link to="/categories" className="btn btn-primary hero__btn" id="hero-explore-btn">
                            Explore Products <ArrowRight size={18} />
                        </Link>
                    </div>

                </div>

                <div className="hero__visual">
                    <div className="hero__card hero__card--main">
                        <div className="hero__card-header">
                            <div className="hero__card-dot" />
                            <div className="hero__card-dot" />
                            <div className="hero__card-dot" />
                        </div>
                        <div className="hero__card-content">
                            <div className="hero__card-row">
                                <div className="hero__card-icon"><Package size={20} /></div>
                                <div>
                                    <div className="hero__card-title">Bulk Order #1247</div>
                                    <div className="hero__card-sub">FMCG Products • 250 units</div>
                                </div>
                                <span className="hero__card-badge hero__card-badge--success">Shipped</span>
                            </div>
                            <div className="hero__card-row">
                                <div className="hero__card-icon"><Package size={20} /></div>
                                <div>
                                    <div className="hero__card-title">Order #1246</div>
                                    <div className="hero__card-sub">Personal Care • 180 units</div>
                                </div>
                                <span className="hero__card-badge hero__card-badge--pending">Processing</span>
                            </div>
                            <div className="hero__card-row">
                                <div className="hero__card-icon"><Package size={20} /></div>
                                <div>
                                    <div className="hero__card-title">Order #1245</div>
                                    <div className="hero__card-sub">Household • 320 units</div>
                                </div>
                                <span className="hero__card-badge hero__card-badge--success">Delivered</span>
                            </div>
                        </div>
                    </div>

                    <div className="hero__floating-card hero__floating-card--1">
                        <Truck size={20} />
                        <div>
                            <strong>Fast Delivery</strong>
                            <span>24-48 hours</span>
                        </div>
                    </div>

                    <div className="hero__floating-card hero__floating-card--2">
                        <Shield size={20} />
                        <div>
                            <strong>Secure Payments</strong>
                            <span>100% Protected</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ===== ABOUT SECTION ===== */
function AboutSection() {
    const { ref, isVisible } = useScrollAnimation();

    return (
        <section className="about" id="about-section" ref={ref}>
            <div className={`container about__container ${isVisible ? 'visible' : ''}`}>
                <div className="about__content">
                    <span className="section-label">About Us</span>
                    <h2 className="section-title">About Srivedha Agencies</h2>
                    <p className="about__text">
                        Srivedha Agencies is a trusted wholesale distributor dedicated to serving retailers, dealers,
                        and bulk buyers with quality products across multiple categories. We focus on affordability,
                        reliability, and fast delivery.
                    </p>
                    <p className="about__text">
                        With years of experience in the wholesale distribution industry, we've built lasting
                        relationships with both manufacturers and retailers, ensuring a seamless supply chain
                        that delivers value at every step.
                    </p>
                    <div className="about__highlights">
                        <div className="about__highlight">
                            <Users size={20} />
                            <span>500+ Retail Partners</span>
                        </div>
                        <div className="about__highlight">
                            <Globe size={20} />
                            <span>Pan-India Distribution</span>
                        </div>
                        <div className="about__highlight">
                            <Award size={20} />
                            <span>10+ Years Experience</span>
                        </div>
                    </div>
                    <Link to="/about" className="btn btn-outline" id="about-learn-more">
                        Learn More <ArrowRight size={16} />
                    </Link>
                </div>
                <div className="about__visual">
                    <div className="about__card-stack">
                        <div className="about__metric-card about__metric-card--1">
                            <div className="about__metric-number">10K+</div>
                            <div className="about__metric-label">Products Available</div>
                        </div>
                        <div className="about__metric-card about__metric-card--2">
                            <div className="about__metric-number">₹50Cr+</div>
                            <div className="about__metric-label">Annual Distribution</div>
                        </div>
                        <div className="about__metric-card about__metric-card--3">
                            <div className="about__metric-number">99.5%</div>
                            <div className="about__metric-label">Order Fulfillment</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ===== CATEGORIES SECTION ===== */
const categories = [
    { icon: '🛒', title: 'FMCG Products', desc: 'Fast-moving consumer goods from top brands', count: '2,500+ Items', slug: 'fmcg' },
    { icon: '🧴', title: 'Personal Care', desc: 'Skincare, haircare, and hygiene essentials', count: '1,800+ Items', slug: 'personal-care' },
    { icon: '🏠', title: 'Household Items', desc: 'Cleaning supplies and home essentials', count: '1,200+ Items', slug: 'household' },
    { icon: '🥫', title: 'Groceries', desc: 'Staples, spices, and packaged foods', count: '3,000+ Items', slug: 'groceries' },
    { icon: '🧃', title: 'Beverages', desc: 'Juices, soft drinks, and health drinks', count: '800+ Items', slug: 'beverages' },
    { icon: '📦', title: 'Bulk Essentials', desc: 'Daily essentials at wholesale prices', count: '1,500+ Items', slug: 'bulk-essentials' },
];

function CategoriesSection() {
    const { ref, isVisible } = useScrollAnimation();

    return (
        <section className="categories" id="categories-section" ref={ref}>
            <div className={`container ${isVisible ? 'visible' : ''}`}>
                <div className="categories__header">
                    <div>
                        <span className="section-label">Our Products</span>
                        <h2 className="section-title">Product Categories</h2>
                        <p className="section-subtitle">
                            Browse through our extensive range of wholesale products curated for retailers.
                        </p>
                    </div>
                    <Link to="/categories" className="btn btn-outline categories__view-all" id="categories-view-all">
                        View All Categories <ArrowRight size={16} />
                    </Link>
                </div>

                <div className="categories__grid">
                    {categories.map((cat, i) => (
                        <Link
                            to={`/categories/${cat.slug}`}
                            key={cat.slug}
                            className={`categories__card stagger-${i + 1} ${isVisible ? 'visible' : ''}`}
                            id={`category-card-${cat.slug}`}
                        >
                            <div className="categories__card-icon">{cat.icon}</div>
                            <h3 className="categories__card-title">{cat.title}</h3>
                            <p className="categories__card-desc">{cat.desc}</p>
                            <div className="categories__card-footer">
                                <span className="categories__card-count">{cat.count}</span>
                                <ChevronRight size={16} />
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}

/* ===== WHY CHOOSE US SECTION ===== */
const features = [
    {
        icon: <ShoppingCart size={28} />,
        title: 'Competitive Wholesale Pricing',
        desc: 'Get the best bulk prices directly from manufacturers. Our pricing ensures maximum margins for your retail business.',
        color: '#3b82f6'
    },
    {
        icon: <Truck size={28} />,
        title: 'Fast & Reliable Delivery',
        desc: 'Enjoy swift delivery across all pin codes with real-time tracking. Most orders delivered within 24-48 hours.',
        color: '#10b981'
    },
    {
        icon: <BarChart3 size={28} />,
        title: 'Easy Bulk Ordering',
        desc: 'Our intuitive platform makes placing bulk orders effortless. Smart inventory management and reorder alerts included.',
        color: '#8b5cf6'
    },
    {
        icon: <Shield size={28} />,
        title: 'Secure Transactions',
        desc: 'Bank-grade security for all transactions. Multiple payment options with dedicated support for every order.',
        color: '#f59e0b'
    },
];

function WhyChooseSection() {
    const { ref, isVisible } = useScrollAnimation();

    return (
        <section className="why-choose" id="why-choose-section" ref={ref}>
            <div className={`container ${isVisible ? 'visible' : ''}`}>
                <div className="why-choose__header">
                    <span className="section-label">Why Choose Us</span>
                    <h2 className="section-title">Built for Retailers,<br />Designed for Growth</h2>
                    <p className="section-subtitle">
                        We provide everything you need to streamline your wholesale purchasing and grow your retail business.
                    </p>
                </div>

                <div className="why-choose__grid">
                    {features.map((feature, i) => (
                        <div
                            key={feature.title}
                            className={`why-choose__card stagger-${i + 1} ${isVisible ? 'visible' : ''}`}
                            id={`feature-card-${i}`}
                        >
                            <div className="why-choose__card-icon" style={{ background: `${feature.color}15`, color: feature.color }}>
                                {feature.icon}
                            </div>
                            <h3 className="why-choose__card-title">{feature.title}</h3>
                            <p className="why-choose__card-desc">{feature.desc}</p>
                            <div className="why-choose__card-line" style={{ background: feature.color }} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

/* ===== HOW IT WORKS SECTION ===== */
const steps = [
    { icon: <UserPlus size={28} />, title: 'Register as Retailer', desc: 'Create your free account in minutes. Verify your business and get approved instantly.' },
    { icon: <Search size={28} />, title: 'Browse Categories', desc: 'Explore our vast catalog of 10,000+ products across multiple wholesale categories.' },
    { icon: <Package size={28} />, title: 'Place Bulk Order', desc: 'Select products, choose quantities, and place your order with competitive bulk pricing.' },
    { icon: <Clock size={28} />, title: 'Fast Delivery to Your Store', desc: 'Sit back while we handle logistics. Your order arrives within 24-48 hours.' },
];

function HowItWorksSection() {
    const { ref, isVisible } = useScrollAnimation();

    return (
        <section className="how-it-works" id="how-it-works-section" ref={ref}>
            <div className={`container ${isVisible ? 'visible' : ''}`}>
                <div className="how-it-works__header">
                    <span className="section-label">How It Works</span>
                    <h2 className="section-title">Get Started in 4 Simple Steps</h2>
                    <p className="section-subtitle">
                        From registration to delivery, our streamlined process makes wholesale buying effortless.
                    </p>
                </div>

                <div className="how-it-works__steps">
                    {steps.map((step, i) => (
                        <div
                            key={step.title}
                            className={`how-it-works__step stagger-${i + 1} ${isVisible ? 'visible' : ''}`}
                            id={`step-${i + 1}`}
                        >
                            <div className="how-it-works__step-number">{String(i + 1).padStart(2, '0')}</div>
                            <div className="how-it-works__step-icon">{step.icon}</div>
                            <h3 className="how-it-works__step-title">{step.title}</h3>
                            <p className="how-it-works__step-desc">{step.desc}</p>
                            {i < steps.length - 1 && <div className="how-it-works__connector" />}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

/* ===== TRUSTED PARTNERS SECTION ===== */
const partners = [
    'Hindustan Unilever', 'ITC Limited', 'P&G India', 'Dabur', 'Godrej',
    'Britannia', 'Nestlé', 'Marico', 'Colgate', 'Emami',
    'Parle', 'Amul', 'Tata Consumer', 'Patanjali', 'Wipro Consumer'
];

function TrustedPartnersSection() {
    const { ref, isVisible } = useScrollAnimation();

    return (
        <section className="partners" id="partners-section" ref={ref}>
            <div className={`container ${isVisible ? 'visible' : ''}`}>
                <div className="partners__header">
                    <span className="section-label">Our Partners</span>
                    <h2 className="section-title">Trusted by Leading Brands</h2>
                </div>

                <div className="partners__scroll-container">
                    <div className="partners__scroll-track">
                        {[...partners, ...partners].map((partner, i) => (
                            <div key={`${partner}-${i}`} className="partners__logo-card">
                                <span className="partners__logo-text">{partner}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ===== CTA SECTION ===== */
function CTASection() {
    const { ref, isVisible } = useScrollAnimation();

    return (
        <section className="cta-section" id="cta-section" ref={ref}>
            <div className={`container cta-section__container ${isVisible ? 'visible' : ''}`}>
                <div className="cta-section__bg-orbs">
                    <div className="cta-section__orb cta-section__orb--1" />
                    <div className="cta-section__orb cta-section__orb--2" />
                </div>
                <div className="cta-section__content">
                    <h2 className="cta-section__title">
                        Ready to grow your retail<br />business with us?
                    </h2>
                    <p className="cta-section__desc">
                        Join 500+ retailers who trust Srivedha Agencies for their wholesale needs.
                        Register now and get exclusive first-order discounts.
                    </p>
                    <div className="cta-section__buttons">
                        <Link to="/login" className="btn btn-primary" id="cta-register">
                            Register Now <ArrowRight size={18} />
                        </Link>
                        <Link to="/contact" className="btn btn-secondary" id="cta-contact">
                            Contact Sales Team
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ===== HOME PAGE ===== */
export default function Home() {
    return (
        <main id="home-page">
            <HeroSection />
            <AboutSection />
            <CategoriesSection />
            <WhyChooseSection />
            <HowItWorksSection />
            <TrustedPartnersSection />
            <CTASection />
        </main>
    );
}
