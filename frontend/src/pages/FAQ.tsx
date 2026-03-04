import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import './FAQ.css';

const faqData = [
    {
        category: 'General',
        questions: [
            { q: 'What is Srivedha Agencies?', a: 'Srivedha Agencies is a trusted B2B wholesale distributor serving retailers, dealers, and bulk buyers across India with quality products at competitive prices.' },
            { q: 'Who can buy from Srivedha Agencies?', a: 'We serve registered retailers, dealers, kirana store owners, and businesses requiring bulk purchases. Individual consumers should visit their nearest retailer.' },
            { q: 'What product categories do you offer?', a: 'We offer FMCG products, personal care, household items, groceries, beverages, and bulk essentials — covering 10,000+ products from leading brands.' },
        ]
    },
    {
        category: 'Ordering',
        questions: [
            { q: 'What is the minimum order quantity?', a: 'Minimum order quantities vary by product category. Generally, we accept orders starting from one case/carton of each product.' },
            { q: 'How do I place a bulk order?', a: 'Register on our platform, browse categories, add items to cart with desired quantities, and checkout. You can also contact our sales team for assisted ordering.' },
            { q: 'Can I get custom pricing for large orders?', a: 'Yes! For orders exceeding standard bulk quantities, please contact our sales team for personalized wholesale pricing.' },
        ]
    },
    {
        category: 'Delivery & Shipping',
        questions: [
            { q: 'How long does delivery take?', a: 'Most orders are delivered within 24-48 hours for metro cities and 3-5 business days for other locations across India.' },
            { q: 'Do you charge for delivery?', a: 'Free delivery is available for orders above ₹5,000. Standard delivery charges apply for smaller orders.' },
            { q: 'Can I track my order?', a: 'Yes, once your order is dispatched, you\'ll receive real-time tracking updates via SMS, email, and your dashboard.' },
        ]
    },
    {
        category: 'Payments & Returns',
        questions: [
            { q: 'What payment methods do you accept?', a: 'We accept UPI, bank transfers, credit/debit cards, net banking, and also offer credit terms for established retail partners.' },
            { q: 'What is your return policy?', a: 'We accept returns for damaged or incorrect items within 48 hours of delivery. Contact our support team with photos and order details.' },
            { q: 'Do you offer credit terms?', a: 'Yes, established retailers with a good payment history can apply for credit terms of 15-30 days.' },
        ]
    },
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<string | null>(null);

    const toggle = (key: string) => setOpenIndex(openIndex === key ? null : key);

    return (
        <main className="faq-page" id="faq-page">
            <section className="faq-hero">
                <div className="faq-hero__bg" />
                <div className="container faq-hero__content">
                    <span className="section-label" style={{ color: 'var(--accent-300)' }}>Help Center</span>
                    <h1 className="faq-hero__title">Frequently Asked Questions</h1>
                    <p className="faq-hero__subtitle">Find answers to common questions about our wholesale services.</p>
                </div>
            </section>

            <section className="faq-main">
                <div className="container">
                    {faqData.map((section) => (
                        <div key={section.category} className="faq-section">
                            <h2 className="faq-section__title">{section.category}</h2>
                            <div className="faq-section__list">
                                {section.questions.map((item, i) => {
                                    const key = `${section.category}-${i}`;
                                    const isOpen = openIndex === key;
                                    return (
                                        <div key={key} className={`faq-item ${isOpen ? 'faq-item--open' : ''}`}>
                                            <button className="faq-item__question" onClick={() => toggle(key)} id={`faq-${key}`}>
                                                <span>{item.q}</span>
                                                <ChevronDown size={18} className={`faq-item__icon ${isOpen ? 'faq-item__icon--open' : ''}`} />
                                            </button>
                                            <div className={`faq-item__answer ${isOpen ? 'faq-item__answer--open' : ''}`}>
                                                <p>{item.a}</p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}
