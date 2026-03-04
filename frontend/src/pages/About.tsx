import { useState } from 'react';
import { Shield, Users, Globe, Target, CheckCircle, Eye, BarChart3, Zap, ChevronDown, ChevronUp } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './About.css';

/* FAQ Data */
const faqItems = [
    {
        question: 'What is the vision of Sri Vedha Agencies?',
        answer: 'Our vision is to become India\'s most trusted brand-authorized marketplace platform, setting the gold standard for transparency, compliance, and authentic distribution in the e-commerce ecosystem. We aim to eliminate pricing chaos and unauthorized selling across all major online marketplaces.'
    },
    {
        question: 'How does Sri Vedha Agencies protect brands on marketplaces?',
        answer: 'We implement a comprehensive brand protection strategy that includes authorized seller management, real-time pricing monitoring, counterfeit detection and removal, MAP compliance enforcement, and continuous marketplace auditing. Our AI-powered tools identify and remove unauthorized sellers swiftly.'
    },
    {
        question: 'What marketplaces do you operate on?',
        answer: 'We facilitate selling on numerous major platforms including Amazon, Flipkart, JioMart, Meesho, Myntra, Nykaa, Tata 1mg, Ajio, Snapdeal, BigBasket, and many more — ensuring maximum market exposure for your brand across India.'
    },
    {
        question: 'How does your controlled distribution model work?',
        answer: 'Our model ensures only brand-authorized sellers can list and sell products. We verify every seller, monitor pricing compliance, manage inventory through 8 strategically located warehouses, and provide end-to-end supply chain management from procurement to last-mile delivery.'
    },
    {
        question: 'What categories do you specialize in?',
        answer: 'We specialize in Pharma & Cosmetics, personal care, FMCG, and health & wellness categories. Our deep expertise in these sectors allows us to provide category-specific marketplace strategies, regulatory compliance, and optimized distribution solutions.'
    },
];

export default function About() {
    const { ref: storyRef, isVisible: storyVisible } = useScrollAnimation();
    const { ref: mvRef, isVisible: mvVisible } = useScrollAnimation();
    const { ref: valuesRef, isVisible: valuesVisible } = useScrollAnimation();
    const { ref: faqRef, isVisible: faqVisible } = useScrollAnimation();
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    return (
        <main className="about-page" id="about-page">
            {/* Hero Banner — Professional Image Mosaic */}
            <section className="about-hero-mosaic">
                <div className="about-hero-mosaic__grid">
                    <div className="about-hero-mosaic__tile about-hero-mosaic__tile--1">
                        <img src="/about/analytics.png" alt="Analytics & Intelligence" className="about-hero-mosaic__tile-img" />
                        <div className="about-hero-mosaic__tile-overlay" />
                        <div className="about-hero-mosaic__tile-content">
                            <BarChart3 size={28} />
                            <span>Analytics & Intelligence</span>
                        </div>
                    </div>
                    <div className="about-hero-mosaic__tile about-hero-mosaic__tile--2">
                        <img src="/about/partnership.png" alt="Brand Partnerships" className="about-hero-mosaic__tile-img" />
                        <div className="about-hero-mosaic__tile-overlay" />
                        <div className="about-hero-mosaic__tile-content">
                            <Users size={28} />
                            <span>Brand Partnerships</span>
                        </div>
                    </div>
                    <div className="about-hero-mosaic__tile about-hero-mosaic__tile--3">
                        <img src="/about/protection.png" alt="Brand Protection" className="about-hero-mosaic__tile-img" />
                        <div className="about-hero-mosaic__tile-overlay" />
                        <div className="about-hero-mosaic__tile-content">
                            <Shield size={28} />
                            <span>Brand Protection</span>
                        </div>
                    </div>
                    <div className="about-hero-mosaic__tile about-hero-mosaic__tile--4">
                        <img src="/about/logistics.png" alt="Logistics & Distribution" className="about-hero-mosaic__tile-img" />
                        <div className="about-hero-mosaic__tile-overlay" />
                        <div className="about-hero-mosaic__tile-content">
                            <Globe size={28} />
                            <span>Logistics & Distribution</span>
                        </div>
                    </div>
                </div>
                {/* Floating Title Overlay */}
                <div className="about-hero-mosaic__title-overlay">
                    <h1>About Sri Vedha Agencies</h1>
                    <p>Protecting brands. Controlling marketplaces. Delivering trust.</p>
                </div>
            </section>

            {/* Know More / About Story */}
            <section className="about-story" ref={storyRef}>
                <div className={`container about-story__content ${storyVisible ? 'visible' : ''}`}>
                    <span className="section-label">Read About Us</span>
                    <h2 className="section-title" style={{ textAlign: 'center' }}>Know more</h2>
                    <div className="about-story__text">
                        <p>
                            Established with a vision to support compliant and sustainable online distribution, Sri Vedha Agencies specializes in Pharma and Cosmetics marketplace operations. Headquartered in Tamil Nadu, we focus on enabling brands and authorized sellers to build a strong, policy-aligned presence across leading e-commerce platforms.
                        </p>
                        <p>
                            With hands-on marketplace experience and structured supply chain practices, we ensure genuine sourcing, GST-compliant billing, and accurate documentation management. Our operational approach is designed to support smooth inventory handling, timely dispatch, and consistent listing standards that meet platform requirements.
                        </p>
                        <p>
                            At the core of our services is a compliance-first mindset. We understand the importance of authenticity, brand protection, and long-term account health in today’s competitive e-commerce environment. By combining disciplined processes, marketplace knowledge, and organized warehouse operations in Tamil Nadu, we help partners scale responsibly and efficiently.
                        </p>
                        <p>
                            Our commitment is to deliver reliable distribution support, maintain transparent documentation systems, and contribute to sustainable growth for Pharma and Cosmetics brands in the digital marketplace.
                        </p>
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="about-mv" ref={mvRef}>
                <div className={`container about-mv__grid ${mvVisible ? 'visible' : ''}`}>
                    <div className="about-mv__card">
                        <div className="about-mv__card-accent" style={{ background: '#3b82f6' }} />
                        <div className="about-mv__card-icon" style={{ background: 'rgba(59, 130, 246, 0.1)', color: '#3b82f6' }}>
                            <Target size={28} />
                        </div>
                        <h3>Our Mission</h3>
                        <p>
                            To empower brands with complete control over their online marketplace distribution.
                            We eliminate unauthorized reselling, control pricing, and ensure every product
                            reaching customers is genuine and sourced from verified, authorized channels.
                        </p>
                    </div>
                    <div className="about-mv__card">
                        <div className="about-mv__card-accent" style={{ background: '#10b981' }} />
                        <div className="about-mv__card-icon" style={{ background: 'rgba(16, 185, 129, 0.1)', color: '#10b981' }}>
                            <Eye size={28} />
                        </div>
                        <h3>Our Vision</h3>
                        <p>
                            To become India's most trusted brand-authorized marketplace platform, setting the
                            gold standard for transparency, compliance, and authentic distribution in the
                            e-commerce ecosystem.
                        </p>
                    </div>
                </div>
            </section>

            {/* Stats Row */}
            <section className="about-stats-row">
                <div className="container">
                    <div className="about-stats-row__grid">
                        <div className="about-stats-row__item">
                            <Users size={28} />
                            <h3>500+</h3>
                            <p>Brand Partnerships</p>
                        </div>
                        <div className="about-stats-row__item">
                            <Globe size={28} />
                            <h3>Pan-India</h3>
                            <p>Marketplace Presence</p>
                        </div>
                        <div className="about-stats-row__item">
                            <Shield size={28} />
                            <h3>2.5 Cr+</h3>
                            <p>Shipments Delivered</p>
                        </div>
                        <div className="about-stats-row__item">
                            <Target size={28} />
                            <h3>8</h3>
                            <p>Warehouses Nationwide</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="about-values" ref={valuesRef}>
                <div className={`container ${valuesVisible ? 'visible' : ''}`}>
                    <div className="about-values__header">
                        <span className="section-label">Our Commitment</span>
                        <h2 className="section-title">What We Stand For</h2>
                    </div>
                    <div className="about-values__grid">
                        {[
                            { title: 'Authenticity', desc: 'Every product on our platform is genuine and sourced from brand-authorized channels. Zero tolerance for counterfeits.', color: '#3b82f6', icon: <Shield size={24} /> },
                            { title: 'Compliance', desc: 'We adhere to strict marketplace guidelines and brand policies, ensuring full regulatory and brand compliance.', color: '#10b981', icon: <CheckCircle size={24} /> },
                            { title: 'Transparency', desc: 'Full visibility for brands into seller activities, pricing compliance, and marketplace performance.', color: '#8b5cf6', icon: <BarChart3 size={24} /> },
                            { title: 'Innovation', desc: 'AI-powered tools for seller monitoring, pricing control, and brand protection in the digital marketplace.', color: '#f59e0b', icon: <Zap size={24} /> },
                        ].map((value) => (
                            <div key={value.title} className="about-values__card">
                                <div className="about-values__card-accent" style={{ background: value.color }} />
                                <div className="about-values__card-icon-wrap" style={{ background: `${value.color}12`, color: value.color }}>
                                    {value.icon}
                                </div>
                                <h3>{value.title}</h3>
                                <p>{value.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="about-faq" ref={faqRef}>
                <div className={`container ${faqVisible ? 'visible' : ''}`}>
                    <div className="about-faq__header">
                        <span className="section-label">Got Questions?</span>
                        <h2 className="section-title">Frequently Asked Questions</h2>
                    </div>
                    <div className="about-faq__list">
                        {faqItems.map((item, i) => (
                            <div
                                key={i}
                                className={`about-faq__item ${openFaq === i ? 'about-faq__item--open' : ''}`}
                            >
                                <button
                                    className="about-faq__question"
                                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                    aria-expanded={openFaq === i}
                                    id={`faq-btn-${i}`}
                                >
                                    <span>{item.question}</span>
                                    {openFaq === i ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                                </button>
                                <div className="about-faq__answer">
                                    <p>{item.answer}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
