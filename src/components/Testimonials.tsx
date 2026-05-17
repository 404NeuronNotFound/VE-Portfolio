import '../style/Testimonials.css';

interface Testimonial {
    name: string;
    role: string;
    project: string;
    rating: number;
    date: string;
    quote: string;
    platform: string;
}

const row1: Testimonial[] = [
    {
        name: 'Vivian',
        role: 'Crypto Trader & Blockchained Sniper Owner',
        project: 'Crypto Trading Highlight Reels',
        rating: 5.0,
        date: 'Jan 15, 2025 – Feb 2, 2025',
        quote: 'Keybeen delivered beyond expectations. The edits were sharp, cinematic, and perfectly captured the energy of our brand. Highly recommend!',
        platform: 'Direct Client',
    },
    {
        name: 'Crypto Mom',
        role: 'Financial Manager of Blockchained Sniper',
        project: 'Financial Content & Social Media Clips',
        rating: 4.8,
        date: 'Mar 5, 2025 – Mar 20, 2025',
        quote: 'Very professional and easy to work with. The turnaround time was impressive and the quality was top-notch every single time.',
        platform: 'Direct Client',
    },
    {
        name: 'Arham Sheikh',
        role: 'YouTube Vlogger',
        project: 'YouTube Vlogs & Shorts Editing',
        rating: 5.0,
        date: 'Nov 10, 2024 – Dec 8, 2024',
        quote: 'Incredible editing skills. My engagement went up 40% after switching to Keybeen. The pacing and transitions are next level.',
        platform: 'Upwork',
    },
    {
        name: 'Rhys Livingstone',
        role: 'Fitness Coach',
        project: 'Fitness Transformation Reels',
        rating: 4.5,
        date: 'Sep 1, 2024 – Sep 28, 2024',
        quote: 'Keybeen understood my vision from day one. Clean cuts, great music sync, and the color grading made my content look premium.',
        platform: 'Fiverr',
    },
];

const row2: Testimonial[] = [
    {
        name: 'Eli Lowham',
        role: 'Speech-Language Pathologist',
        project: 'Educational Content for Social Media',
        rating: 4.8,
        date: 'Jul 12, 2024 – Aug 5, 2024',
        quote: 'Did a great job. Delivered quality results fast. The captions and pacing were perfect for my educational content.',
        platform: 'Upwork',
    },
    {
        name: 'Akil Ja',
        role: 'Crypto Trader',
        project: 'Crypto Market Analysis Videos',
        rating: 5.0,
        date: 'Jun 3, 2024 – Jun 22, 2024',
        quote: 'Very good soul. Completed my job before time. Excellent work and very prompt. I really recommend him for video editing projects.',
        platform: 'Upwork',
    },
    {
        name: 'Amy Chan',
        role: 'Breakup Bootcamp Founder',
        project: 'Brand Promo & Instagram Reels',
        rating: 4.5,
        date: 'Apr 18, 2024 – May 10, 2024',
        quote: 'Keybeen brought our brand story to life. The edits were emotional, polished, and drove real engagement on our socials.',
        platform: 'Direct Client',
    },
    {
        name: 'Marcus Rivera',
        role: 'E-commerce Brand Owner',
        project: 'Product Showcase & Ad Creatives',
        rating: 4.8,
        date: 'Oct 5, 2023 – Nov 2, 2023',
        quote: 'The product videos Keybeen created drove a 3x increase in our ad click-through rate. Absolutely worth every penny.',
        platform: 'Fiverr',
    },
];

const row3: Testimonial[] = [
    {
        name: 'Kari Paola',
        role: 'YouTube Stories',
        project: 'YouTube Story-Style Compilations',
        rating: 5.0,
        date: 'Feb 8, 2024 – Mar 1, 2024',
        quote: 'Amazing storytelling through editing. The transitions and effects kept viewers hooked from start to finish. Will definitely hire again.',
        platform: 'Fiverr',
    },
    {
        name: 'Koplanyi Brothers',
        role: 'Podcast',
        project: 'Podcast Clips & Short-Form Highlights',
        rating: 4.5,
        date: 'Dec 1, 2023 – Jan 15, 2024',
        quote: 'Good work, professional, and would hire again. Turned our long podcast episodes into viral-worthy clips effortlessly.',
        platform: 'Upwork',
    },
    {
        name: 'Jasmine Okafor',
        role: 'Lifestyle Content Creator',
        project: 'TikTok & Reels Content Package',
        rating: 4.8,
        date: 'Aug 20, 2023 – Sep 18, 2023',
        quote: 'Smooth transitions, perfect music choices, and the color grading gives my content that premium aesthetic I was looking for.',
        platform: 'Direct Client',
    },
    {
        name: 'Daniel Kim',
        role: 'Tech Reviewer',
        project: 'Tech Review Shorts & B-Roll Editing',
        rating: 4.8,
        date: 'Jul 1, 2023 – Jul 25, 2023',
        quote: 'Keybeen has a great eye for detail. My tech review videos look way more professional now. Fast delivery and great communication.',
        platform: 'Upwork',
    },
];

function Stars({ count }: { count: number }) {
    return (
        <div className="testi__stars">
            <svg width="0" height="0" style={{ position: 'absolute' }}>
                <defs>
                    <linearGradient id="half-star-grad" x1="0" x2="1" y1="0" y2="0">
                        <stop offset="50%" stopColor="#f59e0b" />
                        <stop offset="50%" stopColor="transparent" />
                    </linearGradient>
                </defs>
            </svg>
            {Array.from({ length: 5 }, (_, i) => {
                const filled = i + 1 <= Math.floor(count);
                const half = !filled && i < count && count % 1 >= 0.4;
                return (
                    <svg
                        key={i}
                        width="13"
                        height="13"
                        viewBox="0 0 24 24"
                        fill={filled ? '#f59e0b' : half ? 'url(#half-star-grad)' : 'none'}
                        stroke={filled || half ? '#f59e0b' : 'var(--text-muted)'}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                );
            })}
            <span className="testi__score">{count.toFixed(1)}</span>
        </div>
    );
}

function TestiCard({ t }: { t: Testimonial }) {
    return (
        <div className="testi__card">
            <h3 className="testi__project">{t.project}</h3>
            <div className="testi__meta">
                <Stars count={t.rating} />
                <span className="testi__date">{t.date}</span>
            </div>
            <p className="testi__quote">"{t.quote}"</p>
            <div className="testi__footer">
                <div className="testi__author">
                    <span className="testi__name">{t.name}</span>
                    <span className="testi__role">{t.role}</span>
                </div>
                <span className="testi__platform">{t.platform}</span>
            </div>
        </div>
    );
}

function MarqueeRow({ items, direction }: { items: Testimonial[]; direction: 'left' | 'right' }) {
    const doubled = [...items, ...items];
    return (
        <div className={`testi__marquee testi__marquee--${direction}`}>
            <div className="testi__track">
                {doubled.map((t, i) => (
                    <TestiCard t={t} key={`${t.name}-${i}`} />
                ))}
            </div>
        </div>
    );
}

export default function Testimonials() {
    return (
        <section id="testimonials" className="testi">
            <div className="testi__header">
                <h2 className="testi__heading">Testimonials</h2>
            </div>
            <div className="testi__rows">
                <MarqueeRow items={row1} direction="left" />
                <MarqueeRow items={row2} direction="right" />
                <MarqueeRow items={row3} direction="left" />
            </div>
        </section>
    );
}
