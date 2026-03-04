import {
    Shield, ShieldCheck, BarChart3, Truck, Eye, CheckCircle,
    Users, Zap, ArrowRight, Globe, Building2, Target
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './Services.css';

const services = [
    {
        icon: <ShieldCheck size={32} />,
        title: 'Authorized Seller Management',
        desc: 'We onboard, verify, and manage only brand-authorized sellers across marketplaces. Unauthorized or rogue sellers are identified and removed swiftly to protect your brand.',
        color: '#3b82f6',
        features: ['Seller verification & onboarding', 'Unauthorized seller removal', 'Marketplace compliance monitoring'],
    },
    {
        icon: <BarChart3 size={32} />,
        title: 'Pricing Control & Monitoring',
        desc: 'Maintain consistent pricing across all online channels. Our real-time monitoring tools detect pricing violations instantly, ensuring MAP compliance and brand value protection.',
        color: '#10b981',
        features: ['MAP price enforcement', 'Real-time price monitoring', 'Automated violation alerts'],
    },
    {
        icon: <Shield size={32} />,
        title: 'Brand Protection',
        desc: 'Comprehensive brand protection services including counterfeit detection, listing quality control, and intellectual property defense across all major marketplaces.',
        color: '#8b5cf6',
        features: ['Counterfeit detection & removal', 'Listing quality assurance', 'IP protection & enforcement'],
    },
    {
        icon: <Truck size={32} />,
        title: 'Distribution Network',
        desc: 'Leverage our pan-India logistics infrastructure with 8 strategically placed warehouses for fast, reliable distribution to customers through authorized fulfillment channels.',
        color: '#f59e0b',
        features: ['8 warehouses across India', '24-48 hour delivery capability', 'Inventory management'],
    },
    {
        icon: <Eye size={32} />,
        title: 'Marketplace Intelligence',
        desc: 'AI-powered dashboards provide full visibility into marketplace performance, seller activities, pricing trends, and competition analysis for data-driven decisions.',
        color: '#ef4444',
        features: ['Real-time analytics dashboard', 'Competitor monitoring', 'Performance reporting'],
    },
    {
        icon: <Zap size={32} />,
        title: 'Compliance & Documentation',
        desc: 'End-to-end compliance management including GST documentation, marketplace policy adherence, and structured documentation processes ensuring regulatory peace of mind.',
        color: '#06b6d4',
        features: ['GST & regulatory compliance', 'Marketplace policy adherence', 'Structured documentation'],
    },
];

export default function Services() {
    const { ref: servicesRef, isVisible: servicesVisible } = useScrollAnimation();
    const { ref: processRef, isVisible: processVisible } = useScrollAnimation();

    return (
        <main className="services-page" id="services-page">
            {/* Hero */}
            <section className="services-hero">
                <div className="services-hero__bg" />
                <div className="container services-hero__content">
                    <span className="section-label" style={{ color: 'var(--accent-300)' }}>Our Services</span>
                    <h1 className="services-hero__title">Brand-Authorized Marketplace Services</h1>
                    <p className="services-hero__subtitle">
                        Comprehensive solutions to protect your brand, control pricing,
                        and manage authorized distribution across online marketplaces.
                    </p>
                </div>
            </section>

            {/* Services Grid */}
            <section className="services-grid-section" ref={servicesRef}>
                <div className={`container ${servicesVisible ? 'visible' : ''}`}>
                    <div className="services-grid">
                        {services.map((service, i) => (
                            <div
                                key={service.title}
                                className={`services-card stagger-${i + 1} ${servicesVisible ? 'visible' : ''}`}
                                id={`service-card-${i}`}
                            >
                                <div className="services-card__icon" style={{ background: `${service.color}12`, color: service.color }}>
                                    {service.icon}
                                </div>
                                <h3 className="services-card__title">{service.title}</h3>
                                <p className="services-card__desc">{service.desc}</p>
                                <ul className="services-card__features">
                                    {service.features.map(f => (
                                        <li key={f}>
                                            <CheckCircle size={14} />
                                            <span>{f}</span>
                                        </li>
                                    ))}
                                </ul>
                                <div className="services-card__line" style={{ background: service.color }} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* How We Work */}
            <section className="services-process" ref={processRef}>
                <div className={`container ${processVisible ? 'visible' : ''}`}>
                    <div className="services-process__header">
                        <span className="section-label">How We Work</span>
                        <h2 className="section-title">Our Process</h2>
                        <p className="section-subtitle">
                            A structured approach to onboard brands and deliver marketplace excellence.
                        </p>
                    </div>
                    <div className="services-process__steps">
                        {[
                            { icon: <Target size={28} />, title: 'Brand Onboarding', desc: 'We understand your brand goals, current marketplace challenges, and define the scope of authorized distribution.' },
                            { icon: <Users size={28} />, title: 'Seller Verification', desc: 'We verify and onboard only authorized sellers, removing unauthorized and rogue sellers from your marketplace ecosystem.' },
                            { icon: <Globe size={28} />, title: 'Marketplace Setup', desc: 'Complete marketplace setup with optimized listings, pricing controls, and compliance-ready documentation.' },
                            { icon: <Building2 size={28} />, title: 'Ongoing Management', desc: 'Continuous monitoring, performance optimization, seller audit, and real-time reporting for sustained brand growth.' },
                        ].map((step, i) => (
                            <div key={step.title} className={`services-process__step stagger-${i + 1} ${processVisible ? 'visible' : ''}`}>
                                <div className="services-process__step-num">{String(i + 1).padStart(2, '0')}</div>
                                <div className="services-process__step-icon">{step.icon}</div>
                                <h3>{step.title}</h3>
                                <p>{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="services-cta">
                <div className="container">
                    <div className="services-cta__card">
                        <h2>Ready to protect your brand on marketplaces?</h2>
                        <p>Let's discuss how we can help you control your marketplace presence, eliminate unauthorized sellers, and grow your brand.</p>
                        <Link to="/contact" className="btn btn-primary" id="services-cta-btn">
                            Contact Us <ArrowRight size={18} />
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
