import { Link } from 'react-router-dom';
import { useState, type FormEvent } from 'react';
import {
    ArrowRight, Shield, ChevronRight, Star, X, CheckCircle, Lock,
    ShieldCheck, BarChart3, Zap, Eye,
    TrendingUp, Truck, MapPin, Building2, Handshake
} from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './Home.css';

/* ===== DEMO MODAL ===== */
interface DemoFormData {
    fullName: string;
    email: string;
    mobile: string;
    organization: string;
    comments: string;
}

function DemoModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
    const [formData, setFormData] = useState<DemoFormData>({
        fullName: '',
        email: '',
        mobile: '',
        organization: '',
        comments: '',
    });
    const [errors, setErrors] = useState<Partial<DemoFormData>>({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const validate = (): boolean => {
        const newErrors: Partial<DemoFormData> = {};
        if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
            newErrors.email = 'Please enter a valid email address';
        }
        if (!formData.mobile.trim()) {
            newErrors.mobile = 'Mobile number is required';
        } else if (!/^[0-9]{10}$/.test(formData.mobile.replace(/\s/g, ''))) {
            newErrors.mobile = 'Please enter a valid 10-digit mobile number';
        }
        if (!formData.organization.trim()) newErrors.organization = 'Organization name is required';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (!validate()) return;
        setIsSubmitting(true);
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSubmitted(true);
        }, 1500);
    };

    const handleChange = (field: keyof DemoFormData, value: string) => {
        // For mobile field, only allow digits
        if (field === 'mobile') {
            value = value.replace(/[^0-9]/g, '').slice(0, 10);
        }
        setFormData(prev => ({ ...prev, [field]: value }));
        if (errors[field]) {
            setErrors(prev => ({ ...prev, [field]: undefined }));
        }
    };

    const handleClose = () => {
        onClose();
        setTimeout(() => {
            setFormData({ fullName: '', email: '', mobile: '', organization: '', comments: '' });
            setErrors({});
            setIsSubmitted(false);
            setIsSubmitting(false);
        }, 300);
    };

    if (!isOpen) return null;

    return (
        <div className="demo-modal-overlay" onClick={handleClose}>
            <div className="demo-modal" onClick={e => e.stopPropagation()}>
                <button className="demo-modal__close" onClick={handleClose} id="demo-modal-close">
                    <X size={20} />
                </button>

                {isSubmitted ? (
                    <div className="demo-modal__success">
                        <div className="demo-modal__success-icon">
                            <CheckCircle size={56} />
                        </div>
                        <h3>Thank You!</h3>
                        <p>Our team will contact you within 24 hours.</p>
                        <button className="btn btn-primary" onClick={handleClose} id="demo-success-close">
                            Got It
                        </button>
                    </div>
                ) : (
                    <>
                        <div className="demo-modal__header">
                            <h2>Book Your Demo</h2>
                            <p>Submit the details below and our team will schedule a demo for you.</p>
                        </div>

                        <form className="demo-modal__form" onSubmit={handleSubmit} id="demo-form" noValidate>
                            <div className={`demo-modal__field ${errors.fullName ? 'demo-modal__field--error' : ''}`}>
                                <label htmlFor="demo-fullName">Full Name <span className="demo-modal__required">*</span></label>
                                <input
                                    type="text"
                                    id="demo-fullName"
                                    placeholder="Enter your full name"
                                    value={formData.fullName}
                                    onChange={e => handleChange('fullName', e.target.value)}
                                    autoComplete="name"
                                />
                                {errors.fullName && <span className="demo-modal__error">{errors.fullName}</span>}
                            </div>

                            <div className={`demo-modal__field ${errors.email ? 'demo-modal__field--error' : ''}`}>
                                <label htmlFor="demo-email">Email Address <span className="demo-modal__required">*</span></label>
                                <input
                                    type="email"
                                    id="demo-email"
                                    placeholder="Enter your email address"
                                    value={formData.email}
                                    onChange={e => handleChange('email', e.target.value)}
                                    autoComplete="email"
                                />
                                {errors.email && <span className="demo-modal__error">{errors.email}</span>}
                            </div>

                            <div className={`demo-modal__field ${errors.mobile ? 'demo-modal__field--error' : ''}`}>
                                <label htmlFor="demo-mobile">Mobile Number <span className="demo-modal__required">*</span></label>
                                <input
                                    type="tel"
                                    id="demo-mobile"
                                    placeholder="Enter your 10-digit mobile number"
                                    value={formData.mobile}
                                    onChange={e => handleChange('mobile', e.target.value)}
                                    inputMode="numeric"
                                    maxLength={10}
                                    autoComplete="tel"
                                />
                                {errors.mobile && <span className="demo-modal__error">{errors.mobile}</span>}
                            </div>

                            <div className={`demo-modal__field ${errors.organization ? 'demo-modal__field--error' : ''}`}>
                                <label htmlFor="demo-organization">Organization Name <span className="demo-modal__required">*</span></label>
                                <input
                                    type="text"
                                    id="demo-organization"
                                    placeholder="Enter your organization name"
                                    value={formData.organization}
                                    onChange={e => handleChange('organization', e.target.value)}
                                    autoComplete="organization"
                                />
                                {errors.organization && <span className="demo-modal__error">{errors.organization}</span>}
                            </div>

                            <div className="demo-modal__field">
                                <label htmlFor="demo-comments">Comments / Message <span className="demo-modal__optional">(Optional)</span></label>
                                <textarea
                                    id="demo-comments"
                                    placeholder="Tell us about your requirements..."
                                    rows={3}
                                    value={formData.comments}
                                    onChange={e => handleChange('comments', e.target.value)}
                                />
                            </div>

                            <button
                                type="submit"
                                className="btn btn-primary demo-modal__submit"
                                disabled={isSubmitting}
                                id="demo-submit-btn"
                            >
                                {isSubmitting ? (
                                    <span className="demo-modal__spinner" />
                                ) : (
                                    <>Schedule Demo <ArrowRight size={18} /></>
                                )}
                            </button>

                            <div className="demo-modal__privacy">
                                <Lock size={14} />
                                <span>We respect your privacy. Your information will not be shared.</span>
                            </div>
                        </form>
                    </>
                )}
            </div>
        </div>
    );
}

/* ===== HERO SECTION ===== */
function HeroSection({ onOpenDemo }: { onOpenDemo: () => void }) {
    return (
        <section className="hero" id="hero-section">
            <div className="container hero__container">
                <div className="hero__content">
                    <div className="hero__badge">
                        <ShieldCheck size={14} />
                        <span>Empowering Pharma & Cosmetics Brands to Sell Smarter</span>
                    </div>
                    <h1 className="hero__title">
                        One-stop Partner for
                        <span className="hero__title-accent"> Pharma & Cosmetics </span>
                        E-commerce Distribution
                    </h1>
                    <p className="hero__subtitle">
                        Discover how our integrated Pharma & Cosmetics e-commerce solutions operate in harmony to accelerate sustainable online growth. Backed by structured documentation, compliance-focused processes, and experienced marketplace management, Sri Vedha Agencies ensures reliable distribution and long-term brand protection.
                    </p>

                    {/* Reviews & CTA */}
                    <div className="hero__reviews">
                        <div className="hero__stars">
                            <Star size={18} fill="#fbbf24" color="#fbbf24" />
                            <Star size={18} fill="#fbbf24" color="#fbbf24" />
                            <Star size={18} fill="#fbbf24" color="#fbbf24" />
                            <Star size={18} fill="#fbbf24" color="#fbbf24" />
                            <Star size={18} fill="#fbbf24" color="#fbbf24" />
                        </div>
                        <span className="hero__reviews-text">Trusted by 100+ Reviews</span>
                    </div>

                    <div className="hero__buttons">
                        <button
                            className="btn btn-primary hero__btn hero__join-btn"
                            onClick={onOpenDemo}
                            id="hero-join-btn"
                        >
                            Join Us <ArrowRight size={18} />
                        </button>
                        <Link to="/services" className="btn btn-outline hero__btn hero__explore-btn" id="hero-explore-btn">
                            Our Services <ChevronRight size={18} />
                        </Link>
                    </div>
                </div>

                <div className="hero__image-wrapper">
                    <img
                        src="/hero-marketplace.png"
                        alt="Brand-controlled marketplace platform with verified sellers and trust verification"
                        className="hero__image"
                    />
                    <div className="hero__image-glow" />
                </div>
            </div>
        </section>
    );
}

/* ===== WHY US SECTION ===== */
const whyUsFeatures = [
    {
        icon: <ShieldCheck size={28} />,
        title: 'Authorized Seller Control',
        desc: 'Only brand-authorized sellers can list products. Unauthorized resellers are identified and removed instantly.',
        color: '#3b82f6'
    },
    {
        icon: <Shield size={28} />,
        title: 'Brand Protection',
        desc: 'We safeguard your brand identity, ensuring no counterfeit or unauthorized products reach customers.',
        color: '#10b981'
    },
    {
        icon: <BarChart3 size={28} />,
        title: 'Controlled Pricing',
        desc: 'Maintain consistent pricing across all sellers. No price wars, no undercutting — just fair, controlled pricing.',
        color: '#8b5cf6'
    },
    {
        icon: <Truck size={28} />,
        title: 'Strong Distribution Network',
        desc: 'Leverage our nationwide logistics infrastructure for seamless, reliable, and fast distribution.',
        color: '#f59e0b'
    },
    {
        icon: <Eye size={28} />,
        title: 'Transparent Ecosystem',
        desc: 'Full visibility into seller activities, pricing compliance, and distribution performance with real-time dashboards.',
        color: '#ef4444'
    },
    {
        icon: <CheckCircle size={28} />,
        title: 'Trust & Compliance',
        desc: 'Every seller is verified and compliant. Build customer trust through genuine products and authorized channels.',
        color: '#06b6d4'
    },
];

function WhyUsSection() {
    const { ref, isVisible } = useScrollAnimation();

    return (
        <section className="why-us" id="why-us-section" ref={ref}>
            <div className={`container ${isVisible ? 'visible' : ''}`}>
                <div className="why-us__header">
                    <span className="section-label">Why Choose Us</span>
                    <h2 className="section-title">Why Sri Vedha Agencies?</h2>
                    <p className="section-subtitle">
                        Unlock the full potential of your Pharma & Cosmetics e-commerce business with Sri Vedha Agencies.                    </p>
                </div>

                <div className="why-us__grid">
                    {whyUsFeatures.map((feature, i) => (
                        <div
                            key={feature.title}
                            className={`why-us__card stagger-${i + 1} ${isVisible ? 'visible' : ''}`}
                            id={`why-us-card-${i}`}
                        >
                            <div className="why-us__card-icon" style={{ background: `${feature.color}12`, color: feature.color }}>
                                {feature.icon}
                            </div>
                            <h3 className="why-us__card-title">{feature.title}</h3>
                            <p className="why-us__card-desc">{feature.desc}</p>
                            <div className="why-us__card-line" style={{ background: feature.color }} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

/* ===== PRODUCT CATEGORY (Personal Care Only) ===== */
function CategorySection() {
    const { ref, isVisible } = useScrollAnimation();

    return (
        <section className="category-focus" id="category-section" ref={ref}>
            <div className={`container category-focus__container ${isVisible ? 'visible' : ''}`}>
                <div className="category-focus__content">
                    <span className="section-label">Our Focus</span>
                    <h2 className="section-title">Personal Care</h2>
                    <p className="category-focus__desc">
                        We specialize in authorized distribution of premium personal care brands across online marketplaces.
                        Our controlled ecosystem ensures brand integrity, consistent pricing, and genuine product delivery.
                    </p>
                    <div className="category-focus__highlights">
                        <div className="category-focus__highlight">
                            <ShieldCheck size={18} />
                            <span>Authorized Distribution</span>
                        </div>
                        <div className="category-focus__highlight">
                            <BarChart3 size={18} />
                            <span>Controlled Pricing</span>
                        </div>
                        <div className="category-focus__highlight">
                            <CheckCircle size={18} />
                            <span>Genuine Products Only</span>
                        </div>
                    </div>
                </div>
                <div className="category-focus__visual">
                    <div className="category-focus__icon-wrapper">
                        🧴
                    </div>
                    <div className="category-focus__stats-row">
                        <div className="category-focus__stat">
                            <strong>1,800+</strong>
                            <span>Products</span>
                        </div>
                        <div className="category-focus__stat-divider" />
                        <div className="category-focus__stat">
                            <strong>50+</strong>
                            <span>Brands</span>
                        </div>
                        <div className="category-focus__stat-divider" />
                        <div className="category-focus__stat">
                            <strong>100%</strong>
                            <span>Authorized</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ===== KEY STATISTICS SECTION ===== */
function KeyStatsSection() {
    const { ref, isVisible } = useScrollAnimation();

    return (
        <section className="key-stats" id="key-stats-section" ref={ref}>
            <div className={`container ${isVisible ? 'visible' : ''}`}>
                <div className="key-stats__header">
                    <span className="section-label">Our Impact</span>
                    <h2 className="section-title">Driving Growth at Scale</h2>
                    <p className="section-subtitle">
                        Our numbers speak for themselves — a testament to the trust brands place in our platform.
                    </p>
                </div>
                <div className="key-stats__grid">
                    <div className={`key-stats__card stagger-1 ${isVisible ? 'visible' : ''}`} id="stat-shipments">
                        <div className="key-stats__card-image">
                            <img src="/stat-shipments.png" alt="Shipments" />
                        </div>
                        <div className="key-stats__card-number">2.5 Cr+</div>
                        <div className="key-stats__card-label">Shipments</div>
                    </div>
                    <div className={`key-stats__card stagger-2 ${isVisible ? 'visible' : ''}`} id="stat-warehouses">
                        <div className="key-stats__card-image">
                            <img src="/stat-warehouses.png" alt="Warehouses" />
                        </div>
                        <div className="key-stats__card-number">8</div>
                        <div className="key-stats__card-label">Warehouses</div>
                    </div>
                    <div className={`key-stats__card stagger-3 ${isVisible ? 'visible' : ''}`} id="stat-brands">
                        <div className="key-stats__card-image">
                            <img src="/stat-brands.png" alt="Brand Associations" />
                        </div>
                        <div className="key-stats__card-number">500+</div>
                        <div className="key-stats__card-label">Brand Associations</div>
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ===== OUR REACH SECTION ===== */
const marketplacePlatforms = [
    { name: 'Amazon', logo: '/platforms/amazon.png', color: '#FF9900' },
    { name: 'Flipkart', logo: '/platforms/flipkart.jpeg', color: '#2874F0' },
    { name: 'JioMart', logo: '/platforms/jio.png', color: '#0078AD' },
    { name: 'Meesho', logo: '/platforms/meesho.png', color: '#E83E8C' },
    { name: 'Myntra', logo: '/platforms/myntra.jpeg ', color: '#FF3F6C' },
    { name: 'Nykaa', logo: '/platforms/nykaa.png', color: '#FC2779' },
    { name: 'Tata 1mg', logo: '/platforms/tata.png', color: '#FF6F61' },
    { name: 'Ajio', logo: '/platforms/ajio.png', color: '#3F3B80' },
    { name: 'Snapdeal', logo: '/platforms/snap.png', color: '#E40046' },
    { name: 'BigBasket', logo: '/platforms/bigBasket.png', color: '#84C225' },
];

const reachHighlights = [
    { icon: <MapPin size={22} />, title: 'Pan-India Presence', desc: 'Active across all major Indian states and metros' },
    { icon: <Building2 size={22} />, title: '8 Warehouses', desc: 'Strategically positioned fulfillment centers' },
    { icon: <Truck size={22} />, title: '24-48hr Delivery', desc: 'Fast, reliable nationwide logistics network' },
    { icon: <Handshake size={22} />, title: '500+ Brands', desc: 'Trusted brand partnerships across categories' },
    { icon: <TrendingUp size={22} />, title: 'End-to-End Supply Chain', desc: 'Procurement to last-mile delivery' },
    { icon: <Zap size={22} />, title: 'AI-Powered Tools', desc: 'Pricing control & seller monitoring' },
];

function OurReachSection() {
    const { ref, isVisible } = useScrollAnimation();

    return (
        <section className="our-reach" id="our-reach-section" ref={ref}>
            <div className={`container ${isVisible ? 'visible' : ''}`}>
                <div className="our-reach__header">
                    <span className="section-label">Our Reach</span>
                    <h2 className="section-title">We facilitate selling on numerous<br />platforms for maximum market exposure</h2>
                    <p className="section-subtitle">
                        We enable Pharma & Cosmetics brands to sell across leading e-commerce platforms, ensuring maximum market visibility and structured distribution support.                    </p>
                </div>

                {/* Marketplace Platforms Grid */}
                <div className="our-reach__platforms">
                    {marketplacePlatforms.map((platform, i) => (
                        <div
                            key={platform.name}
                            className={`our-reach__platform-card stagger-${(i % 6) + 1} ${isVisible ? 'visible' : ''}`}
                        >
                            <img src={platform.logo} alt={`${platform.name} logo`} className="our-reach__platform-logo" style={{ height: '75px' }} />
                            <span className="our-reach__platform-name">{platform.name}</span>
                        </div>
                    ))}
                </div>

                {/* Reach Highlights */}
                <div className="our-reach__highlights">
                    {reachHighlights.map((item, i) => (
                        <div key={item.title} className={`our-reach__highlight-card stagger-${(i % 6) + 1} ${isVisible ? 'visible' : ''}`}>
                            <div className="our-reach__highlight-icon">{item.icon}</div>
                            <div>
                                <h4 className="our-reach__highlight-title">{item.title}</h4>
                                <p className="our-reach__highlight-desc">{item.desc}</p>
                            </div>
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
function CTASection({ onOpenDemo }: { onOpenDemo: () => void }) {
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
                        Ready to protect your brand<br />on online marketplaces?
                    </h2>
                    <p className="cta-section__desc">
                        Join 500+ brands who trust Sri Vedha Agencies for authorized marketplace distribution,
                        pricing control, and brand protection.
                    </p>
                    <div className="cta-section__buttons">
                        <button className="btn btn-primary" onClick={onOpenDemo} id="cta-register">
                            Join Us <ArrowRight size={18} />
                        </button>
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
    const [isDemoOpen, setIsDemoOpen] = useState(false);

    return (
        <main id="home-page">
            <HeroSection onOpenDemo={() => setIsDemoOpen(true)} />
            <WhyUsSection />
            <CategorySection />
            <KeyStatsSection />
            <OurReachSection />
            <TrustedPartnersSection />
            <CTASection onOpenDemo={() => setIsDemoOpen(true)} />
            <DemoModal isOpen={isDemoOpen} onClose={() => setIsDemoOpen(false)} />
        </main>
    );
}
