import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Eye, EyeOff, ArrowRight, ArrowLeft, Home } from 'lucide-react';
import './Login.css';

export default function Login() {
    const [isLogin, setIsLogin] = useState(true);
    const [showPw, setShowPw] = useState(false);

    return (
        <main className="login-page" id="login-page">
            <div className="login-page__bg" />
            <div className="login-page__container">
                {/* Left Panel */}
                <div className="login-panel">
                    <div className="login-panel__content">
                        <Link to="/" className="login-panel__back" id="login-back-home">
                            <ArrowLeft size={16} />
                            <span>Back to Home</span>
                        </Link>
                        <Link to="/" className="login-panel__logo">
                            <img src="/logo.png" alt="Srivedha Agencies" className="login-panel__logo-img" />
                            <div>
                                <span className="login-panel__logo-name">Srivedha</span>
                                <span className="login-panel__logo-sub">Agencies</span>
                            </div>
                        </Link>
                        <h1 className="login-panel__title">
                            {isLogin ? 'Welcome back!' : 'Join our retail network'}
                        </h1>
                        <p className="login-panel__subtitle">
                            {isLogin
                                ? 'Sign in to access your wholesale dashboard, manage orders, and browse our catalog.'
                                : 'Create your account to start ordering wholesale products at competitive bulk prices.'}
                        </p>
                        <div className="login-panel__features">
                            <div className="login-panel__feature">✅ Access to 10,000+ wholesale products</div>
                            <div className="login-panel__feature">✅ Exclusive wholesale prices</div>
                            <div className="login-panel__feature">✅ Order tracking & analytics</div>
                            <div className="login-panel__feature">✅ Priority customer support</div>
                        </div>
                    </div>
                </div>

                {/* Right Panel - Form */}
                <div className="login-form-panel">
                    <div className="login-form-wrapper">
                        {/* Mobile-visible back to home */}
                        <Link to="/" className="login-form__back-home" id="login-mobile-back-home">
                            <Home size={16} />
                            <span>Back to Home</span>
                        </Link>
                        <div className="login-form__tabs">
                            <button
                                className={`login-form__tab ${isLogin ? 'login-form__tab--active' : ''}`}
                                onClick={() => setIsLogin(true)}
                                id="login-tab"
                            >
                                Sign In
                            </button>
                            <button
                                className={`login-form__tab ${!isLogin ? 'login-form__tab--active' : ''}`}
                                onClick={() => setIsLogin(false)}
                                id="register-tab"
                            >
                                Register
                            </button>
                        </div>

                        <form className="login-form" onSubmit={(e) => e.preventDefault()} id="auth-form">
                            {!isLogin && (
                                <>
                                    <div className="login-form__row">
                                        <div className="login-form__field">
                                            <label htmlFor="reg-firstname">First Name</label>
                                            <input id="reg-firstname" type="text" placeholder="First name" required />
                                        </div>
                                        <div className="login-form__field">
                                            <label htmlFor="reg-lastname">Last Name</label>
                                            <input id="reg-lastname" type="text" placeholder="Last name" required />
                                        </div>
                                    </div>
                                    <div className="login-form__field">
                                        <label htmlFor="reg-company">Business / Company Name</label>
                                        <input id="reg-company" type="text" placeholder="Your business name" required />
                                    </div>
                                    <div className="login-form__field">
                                        <label htmlFor="reg-phone">Phone Number</label>
                                        <input id="reg-phone" type="tel" placeholder="+91 XXXXX XXXXX" required />
                                    </div>
                                </>
                            )}

                            <div className="login-form__field">
                                <label htmlFor="auth-email">Email Address</label>
                                <input id="auth-email" type="email" placeholder="your@email.com" required />
                            </div>

                            <div className="login-form__field">
                                <label htmlFor="auth-password">Password</label>
                                <div className="login-form__pw-wrapper">
                                    <input
                                        id="auth-password"
                                        type={showPw ? 'text' : 'password'}
                                        placeholder="Enter your password"
                                        required
                                    />
                                    <button
                                        type="button"
                                        className="login-form__pw-toggle"
                                        onClick={() => setShowPw(!showPw)}
                                        aria-label="Toggle password"
                                    >
                                        {showPw ? <EyeOff size={18} /> : <Eye size={18} />}
                                    </button>
                                </div>
                            </div>

                            {isLogin && (
                                <div className="login-form__options">
                                    <label className="login-form__checkbox">
                                        <input type="checkbox" id="remember-me" />
                                        <span>Remember me</span>
                                    </label>
                                    <a href="#" className="login-form__forgot">Forgot password?</a>
                                </div>
                            )}

                            {!isLogin && (
                                <div className="login-form__field">
                                    <label htmlFor="auth-confirm-password">Confirm Password</label>
                                    <input id="auth-confirm-password" type="password" placeholder="Confirm your password" required />
                                </div>
                            )}

                            <button type="submit" className="btn btn-primary login-form__submit" id="auth-submit-btn">
                                {isLogin ? 'Sign In' : 'Create Account'} <ArrowRight size={18} />
                            </button>

                            <p className="login-form__switch">
                                {isLogin ? "Don't have an account? " : "Already have an account? "}
                                <button type="button" onClick={() => setIsLogin(!isLogin)}>
                                    {isLogin ? 'Register here' : 'Sign in'}
                                </button>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    );
}
