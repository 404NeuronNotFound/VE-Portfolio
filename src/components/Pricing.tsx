import '../style/Pricing.css';

const plans = [
    {
        name: 'Per Video',
        price: '$49',
        period: 'per video',
        desc: 'Perfect for one-off projects or trying out my editing style.',
        featured: false,
        cta: 'Get Started',
        features: [
            'Up to 60 seconds (short-form)',
            'Color grading & LUTs',
            'Captions & subtitles',
            'Background music sync',
            '2 rounds of revisions',
            '48-hour delivery',
        ],
    },
    {
        name: 'Monthly Retainer',
        price: '$1,000',
        period: 'per month',
        desc: 'Full content pipeline. Ideal for creators and brands posting consistently.',
        featured: true,
        cta: 'Book a Call',
        features: [
            'Up to 30 short-form videos/month',
            'Priority turnaround (24h)',
            'Color grading & motion graphics',
            'Captions, subtitles & hooks',
            'Unlimited revisions',
            'Dedicated editor (me)',
            'Monthly strategy check-in',
            'Custom intro/outro templates',
        ],
    },
];

export default function Pricing() {
    return (
        <section id="pricing" className="pricing">
            <div className="pricing__inner">
                <div className="pricing__header">
                    <h2 className="pricing__title">Simple, Transparent Pricing</h2>
                    <p className="pricing__sub">No hidden fees. No surprises. Just great videos.</p>
                </div>

                <div className="pricing__grid">
                    {plans.map((plan) => (
                        <div key={plan.name} className={`pricing__card ${plan.featured ? 'pricing__card--featured' : ''}`}>
                            {plan.featured && (
                                <div className="pricing__badge">Most Popular</div>
                            )}

                            <div className="pricing__card-top">
                                <h3 className="pricing__name">{plan.name}</h3>
                                <p className="pricing__desc">{plan.desc}</p>
                            </div>

                            <div className="pricing__price-row">
                                <span className="pricing__price">{plan.price}</span>
                                <span className="pricing__period">/{plan.period}</span>
                            </div>

                            <ul className="pricing__features">
                                {plan.features.map((f) => (
                                    <li key={f} className="pricing__feature">
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <polyline points="20 6 9 17 4 12" />
                                        </svg>
                                        <span>{f}</span>
                                    </li>
                                ))}
                            </ul>

                            <a
                                href={`mailto:keybeen.videoeditor@gmail.com?subject=Inquiry: ${plan.name} Plan`}
                                className={`pricing__btn ${plan.featured ? 'pricing__btn--accent' : ''}`}
                            >
                                {plan.cta}
                            </a>
                        </div>
                    ))}
                </div>

                <p className="pricing__note">
                    Need something custom?{' '}
                    <a href="mailto:keybeen.videoeditor@gmail.com?subject=Custom Package Inquiry">Let's talk →</a>
                </p>
            </div>
        </section>
    );
}