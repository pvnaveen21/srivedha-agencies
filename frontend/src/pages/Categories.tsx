import { Link, useParams } from 'react-router-dom';
import { ChevronRight, ArrowRight } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './Categories.css';

const allCategories = [
    {
        slug: 'fmcg', icon: '🛒', title: 'FMCG Products',
        desc: 'Fast-moving consumer goods from India\'s most trusted brands. Stock your shelves with products your customers love.',
        items: ['Soaps & Detergents', 'Packaged Snacks', 'Instant Noodles', 'Biscuits & Cookies', 'Chocolates', 'Dairy Products', 'Cooking Oil', 'Spices & Masalas'],
        count: '2,500+'
    },
    {
        slug: 'personal-care', icon: '🧴', title: 'Personal Care',
        desc: 'Premium skincare, haircare, and hygiene products from leading personal care brands.',
        items: ['Shampoo & Conditioner', 'Body Wash', 'Face Wash', 'Moisturizers', 'Sunscreen', 'Deodorants', 'Toothpaste', 'Hand Sanitizers'],
        count: '1,800+'
    },
    {
        slug: 'household', icon: '🏠', title: 'Household Items',
        desc: 'Essential cleaning supplies and home care products for every household.',
        items: ['Floor Cleaners', 'Dish Wash', 'Toilet Cleaners', 'Air Fresheners', 'Mops & Brooms', 'Kitchen Rolls', 'Garbage Bags', 'Insect Repellents'],
        count: '1,200+'
    },
    {
        slug: 'groceries', icon: '🥫', title: 'Groceries',
        desc: 'Staples, spices, and packaged foods — everything your customers need daily.',
        items: ['Rice & Dal', 'Atta & Flour', 'Sugar & Salt', 'Cooking Oil', 'Tea & Coffee', 'Spices', 'Pickles', 'Ready-to-Eat Meals'],
        count: '3,000+'
    },
    {
        slug: 'beverages', icon: '🧃', title: 'Beverages',
        desc: 'Juices, soft drinks, health drinks, and more from popular beverage brands.',
        items: ['Fruit Juices', 'Carbonated Drinks', 'Energy Drinks', 'Health Drinks', 'Mineral Water', 'Flavored Milk', 'Iced Tea', 'Protein Drinks'],
        count: '800+'
    },
    {
        slug: 'bulk-essentials', icon: '📦', title: 'Bulk Essentials',
        desc: 'Everyday essentials available at unbeatable wholesale prices for maximum savings.',
        items: ['Paper Products', 'Plastic Containers', 'Packaging Materials', 'Stationery', 'Batteries', 'Light Bulbs', 'Disposable Items', 'Cleaning Cloths'],
        count: '1,500+'
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
                        Browse our extensive catalog of wholesale products across 6 major categories.
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
