import './Privacy.css';

export default function Privacy() {
    return (
        <main className="legal-page" id="privacy-page">
            <section className="legal-hero">
                <div className="legal-hero__bg" />
                <div className="container legal-hero__content">
                    <h1 className="legal-hero__title">Privacy Policy</h1>
                    <p className="legal-hero__subtitle">Last updated: March 2026</p>
                </div>
            </section>
            <section className="legal-content">
                <div className="container legal-content__wrapper">
                    <div className="legal-section">
                        <h2>1. Information We Collect</h2>
                        <p>We collect information you provide when registering an account, placing orders, or contacting us. This includes your name, email address, phone number, business details, shipping address, and payment information.</p>
                    </div>
                    <div className="legal-section">
                        <h2>2. How We Use Your Information</h2>
                        <p>We use your information to process orders, manage your account, provide customer support, send order updates, improve our services, and communicate relevant offers and updates about our wholesale platform.</p>
                    </div>
                    <div className="legal-section">
                        <h2>3. Data Security</h2>
                        <p>We implement industry-standard security measures to protect your personal information. All payment transactions are encrypted using SSL technology. We regularly review and update our security practices.</p>
                    </div>
                    <div className="legal-section">
                        <h2>4. Information Sharing</h2>
                        <p>We do not sell, trade, or rent your personal information to third parties. We may share information with trusted service providers who assist us in operating our platform, conducting business, or serving you.</p>
                    </div>
                    <div className="legal-section">
                        <h2>5. Cookies</h2>
                        <p>Our website uses cookies to enhance your browsing experience, analyze site traffic, and personalize content. You can choose to disable cookies through your browser settings.</p>
                    </div>
                    <div className="legal-section">
                        <h2>6. Your Rights</h2>
                        <p>You have the right to access, correct, update, or delete your personal information at any time by contacting us or through your account settings. You may also opt out of marketing communications.</p>
                    </div>
                    <div className="legal-section">
                        <h2>7. Contact Us</h2>
                        <p>If you have questions about this Privacy Policy, please contact us at privacy@srivedhaagencies.com or call +91 98765 43210.</p>
                    </div>
                </div>
            </section>
        </main>
    );
}
