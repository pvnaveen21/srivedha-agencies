import { Link, useParams } from 'react-router-dom';
import { ChevronRight, ArrowRight } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './Categories.css';

const allCategories = [
    {
        slug: 'personal-care', icon: '🧴', title: 'Personal Care',
        desc: 'Premium skincare, haircare, and hygiene products from leading personal care brands.',
        items: ['Shampoo & Conditioner', 'Body Wash', 'Face Wash', 'Moisturizers', 'Sunscreen', 'Deodorants', 'Toothpaste', 'Hand Sanitizers'],
        count: '1,800+'
    },
];

export default function Categories() {
    const { slug } = useParams();
    const { ref, isVisible } = useScrollAnimation();

    // Single category view
    if (slug) {
        const category = allCategories.find(c => c.slug === slug);
        if (!category) {
            return (
                <main className="categories-page" id="categories-page">
                    <section className="categories-hero">
                        <div className="categories-hero__bg" />
                        <div className="container categories-hero__content">
                            <h1 className="categories-hero__title">Category Not Found</h1>
                            <p className="categories-hero__subtitle">The category you're looking for doesn't exist.</p>
                        </div>
                    </section>
                </main>
            );
        }

        return (
            <main className="categories-page" id="categories-page">
                <section className="categories-hero">
                    <div className="categories-hero__bg" />
                    <div className="container categories-hero__content">
                        <div className="categories-hero__breadcrumb">
                            <Link to="/">Home</Link>
                            <ChevronRight size={14} />
                            <Link to="/categories">Categories</Link>
                            <ChevronRight size={14} />
                            <span>{category.title}</span>
                        </div>
                        <div className="categories-hero__icon-large">{category.icon}</div>
                        <h1 className="categories-hero__title">{category.title}</h1>
                        <p className="categories-hero__subtitle">{category.desc}</p>
                        <span className="categories-hero__count">{category.count} Products Available</span>
                    </div>
                </section>

                <section className="category-detail" ref={ref}>
                    <div className={`container ${isVisible ? 'visible' : ''}`}>
                        <h2 className="section-title">Sub Categories</h2>
                        <div className="category-detail__grid">
                            {category.items.map((item, i) => (
                                <div key={item} className={`category-detail__card stagger-${(i % 6) + 1} ${isVisible ? 'visible' : ''}`}>
                                    <div className="category-detail__card-icon">{category.icon}</div>
                                    <h3>{item}</h3>
                                    <p>Browse wholesale {item.toLowerCase()} at competitive prices.</p>
                                    <span className="category-detail__card-link">View Products <ChevronRight size={14} /></span>
                                </div>
                            ))}
                        </div>
                        <div className="category-detail__cta">
                            <Link to="/contact" className="btn btn-primary">
                                Request Bulk Quote <ArrowRight size={18} />
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
        );
    }

    // All categories view
    return (
        <main className="categories-page" id="categories-page">
            <section className="categories-hero">
                <div className="categories-hero__bg" />
                <div className="container categories-hero__content">
                    <div className="categories-hero__breadcrumb">
                        <Link to="/">Home</Link>
                        <ChevronRight size={14} />
                        <span>Categories</span>
                    </div>
                    <h1 className="categories-hero__title">All Product Categories</h1>
                    <p className="categories-hero__subtitle">
                        Browse our catalog of premium personal care products.
                    </p>
                </div>
            </section>

            <section className="categories-listing" ref={ref}>
                <div className={`container ${isVisible ? 'visible' : ''}`}>
                    <div className="categories-listing__grid">
                        {allCategories.map((cat, i) => (
                            <Link
                                to={`/categories/${cat.slug}`}
                                key={cat.slug}
                                className={`categories-listing__card stagger-${i + 1} ${isVisible ? 'visible' : ''}`}
                            >
                                <div className="categories-listing__card-header">
                                    <span className="categories-listing__card-icon">{cat.icon}</span>
                                    <span className="categories-listing__card-count">{cat.count} items</span>
                                </div>
                                <h3 className="categories-listing__card-title">{cat.title}</h3>
                                <p className="categories-listing__card-desc">{cat.desc}</p>
                                <div className="categories-listing__card-items">
                                    {cat.items.slice(0, 4).map((item) => (
                                        <span key={item} className="categories-listing__tag">{item}</span>
                                    ))}
                                </div>
                                <div className="categories-listing__card-cta">
                                    Explore Category <ArrowRight size={16} />
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
