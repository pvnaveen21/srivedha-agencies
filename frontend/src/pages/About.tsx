import { Award, Users, Globe, Target, CheckCircle } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './About.css';

export default function About() {
    const { ref: missionRef, isVisible: missionVisible } = useScrollAnimation();
    const { ref: valuesRef, isVisible: valuesVisible } = useScrollAnimation();

    return (
        <main className="about-page" id="about-page">
            {/* Hero */}
            <section className="about-hero">
                <div className="about-hero__bg" />
                <div className="container about-hero__content">
                    <span className="section-label" style={{ color: 'var(--accent-300)' }}>About Us</span>
                    <h1 className="about-hero__title">About Srivedha Agencies</h1>
                    <p className="about-hero__subtitle">
                        A trusted wholesale distributor dedicated to serving retailers, dealers,
                        and bulk buyers with quality products across multiple categories.
                    </p>
                </div>
            </section>

            {/* Mission */}
            <section className="about-mission" ref={missionRef}>
                <div className={`container about-mission__grid ${missionVisible ? 'visible' : ''}`}>
                    <div className="about-mission__content">
                        <span className="section-label">Our Mission</span>
                        <h2 className="section-title">Empowering Local Retail Businesses</h2>
                        <p>
                            We focus on affordability, reliability, and fast delivery. Our mission is to bridge the gap
                            between manufacturers and retail businesses, ensuring every retailer has access to quality
                            products at the best wholesale prices.
                        </p>
                        <p>
                            With years of experience in wholesale distribution, we've developed strong relationships
                            with India's leading brands, enabling us to offer competitive pricing and consistent supply.
                        </p>
                        <div className="about-mission__checklist">
                            {['Quality products from trusted brands', 'Competitive wholesale pricing', 'Fast and reliable delivery',
                                'Dedicated customer support', 'Easy bulk ordering platform'].map((item) => (
                                    <div key={item} className="about-mission__check-item">
                                        <CheckCircle size={18} />
                                        <span>{item}</span>
                                    </div>
                                ))}
                        </div>
                    </div>
                    <div className="about-mission__stats">
                        <div className="about-mission__stat-card">
                            <Users size={28} />
                            <h3>500+</h3>
                            <p>Active Retailers</p>
                        </div>
                        <div className="about-mission__stat-card">
                            <Globe size={28} />
                            <h3>50+</h3>
                            <p>Cities Served</p>
                        </div>
                        <div className="about-mission__stat-card">
                            <Award size={28} />
                            <h3>10+</h3>
                            <p>Years Experience</p>
                        </div>
                        <div className="about-mission__stat-card">
                            <Target size={28} />
                            <h3>99.5%</h3>
                            <p>Fulfillment Rate</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="about-values" ref={valuesRef}>
                <div className={`container ${valuesVisible ? 'visible' : ''}`}>
                    <div className="about-values__header">
                        <span className="section-label">Our Values</span>
                        <h2 className="section-title">What Drives Us Forward</h2>
                    </div>
                    <div className="about-values__grid">
                        {[
                            { title: 'Integrity', desc: 'We build trust through transparent business practices and honest pricing.', color: '#3b82f6' },
                            { title: 'Reliability', desc: 'Consistent quality and timely delivery you can always count on.', color: '#10b981' },
                            { title: 'Innovation', desc: 'Leveraging technology to make wholesale buying effortless.', color: '#8b5cf6' },
                            { title: 'Partnership', desc: 'We grow when our retail partners grow. Your success is our success.', color: '#f59e0b' },
                        ].map((value) => (
                            <div key={value.title} className="about-values__card">
                                <div className="about-values__card-accent" style={{ background: value.color }} />
                                <h3>{value.title}</h3>
                                <p>{value.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
