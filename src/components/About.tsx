import '../style/About.css';

const services = [
    {
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="23 7 16 12 23 17 23 7" />
                <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
            </svg>
        ),
        title: 'Short-Form Editing',
        desc: 'Crafting scroll-stopping Reels, TikToks, and YouTube Shorts with cinematic pacing, dynamic transitions, and retention-focused hooks.',
    },
    {
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                <line x1="9" y1="9" x2="9.01" y2="9" />
                <line x1="15" y1="9" x2="15.01" y2="9" />
            </svg>
        ),
        title: 'Color Grading',
        desc: 'Professional color correction and cinematic grading that sets the mood. Custom LUTs, film-inspired looks, and brand-consistent color palettes.',
    },
    {
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
            </svg>
        ),
        title: 'Motion Graphics',
        desc: 'Eye-catching animated text, custom transitions, kinetic typography, and visual effects that elevate your content above the competition.',
    },
];

export default function About() {
    return (
        <section id="about" className="services">
            <div className="services__inner">
                <div className="services__grid">
                    {services.map(s => (
                        <div className="services__card" key={s.title}>
                            <div className="services__card-icon">{s.icon}</div>
                            <h3 className="services__card-title">{s.title}</h3>
                            <p className="services__card-desc">{s.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}