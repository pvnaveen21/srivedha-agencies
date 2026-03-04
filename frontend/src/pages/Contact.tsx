import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import './Contact.css';

export default function Contact() {
    const [formData, setFormData] = useState({ name: '', email: '', phone: '', company: '', message: '' });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 3000);
        setFormData({ name: '', email: '', phone: '', company: '', message: '' });
    };

    return (
        <main className="contact-page" id="contact-page">
            <section className="contact-hero">
                <div className="contact-hero__bg" />
                <div className="container contact-hero__content">
                    <span className="section-label" style={{ color: 'var(--accent-300)' }}>Get In Touch</span>
                    <h1 className="contact-hero__title">Contact Us</h1>
                    <p className="contact-hero__subtitle">
                        Have questions about wholesale pricing or want to become a retail partner? We'd love to hear from you.
                    </p>
                </div>
            </section>

            <section className="contact-main">
                <div className="container contact-main__grid">
                    {/* Contact Info */}
                    <div className="contact-info">
                        <h2>Let's Start a Conversation</h2>
                        <p>Whether you're a retailer looking for wholesale partners or have inquiries about our products, our team is ready to help.</p>

                        <div className="contact-info__cards">
                            <div className="contact-info__card">
                                <div className="contact-info__card-icon"><MapPin size={22} /></div>
                                <div>
                                    <h4>Our Office</h4>
                                    <p>123 Business Park, Chennai, Tamil Nadu, India - 600001</p>
                                </div>
                            </div>
                            <div className="contact-info__card">
                                <div className="contact-info__card-icon"><Phone size={22} /></div>
                                <div>
                                    <h4>Phone</h4>
                                    <p>+91 98765 43210</p>
                                    <p>+91 44 2345 6789</p>
                                </div>
                            </div>
                            <div className="contact-info__card">
                                <div className="contact-info__card-icon"><Mail size={22} /></div>
                                <div>
                                    <h4>Email</h4>
                                    <p>info@srivedhaagencies.com</p>
                                    <p>sales@srivedhaagencies.com</p>
                                </div>
                            </div>
                            <div className="contact-info__card">
                                <div className="contact-info__card-icon"><Clock size={22} /></div>
                                <div>
                                    <h4>Business Hours</h4>
                                    <p>Mon - Sat: 9:00 AM - 6:00 PM</p>
                                    <p>Sunday: Closed</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="contact-form-wrapper">
                        <form className="contact-form" onSubmit={handleSubmit} id="contact-form">
                            <h3>Send us a Message</h3>
                            <div className="contact-form__row">
                                <div className="contact-form__field">
                                    <label htmlFor="contact-name">Full Name</label>
                                    <input id="contact-name" type="text" placeholder="Your full name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required />
                                </div>
                                <div className="contact-form__field">
                                    <label htmlFor="contact-email">Email</label>
                                    <input id="contact-email" type="email" placeholder="your@email.com" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required />
                                </div>
                            </div>
                            <div className="contact-form__row">
                                <div className="contact-form__field">
                                    <label htmlFor="contact-phone">Phone</label>
                                    <input id="contact-phone" type="tel" placeholder="+91 XXXXX XXXXX" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />
                                </div>
                                <div className="contact-form__field">
                                    <label htmlFor="contact-company">Company Name</label>
                                    <input id="contact-company" type="text" placeholder="Your business name" value={formData.company} onChange={(e) => setFormData({ ...formData, company: e.target.value })} />
                                </div>
                            </div>
                            <div className="contact-form__field">
                                <label htmlFor="contact-message">Message</label>
                                <textarea id="contact-message" placeholder="Tell us about your wholesale requirements..." rows={5} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} required />
                            </div>
                            <button type="submit" className="btn btn-primary contact-form__submit" id="contact-submit">
                                Send Message <Send size={18} />
                            </button>
                            {submitted && (
                                <div className="contact-form__success">
                                    ✅ Thank you! Your message has been sent. We'll get back to you within 24 hours.
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </section>
        </main>
    );
}
