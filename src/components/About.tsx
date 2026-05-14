import '../style/About.css';

const services = [
    {
        title: 'Short-Form Editing',
        desc: 'Crafting scroll-stopping Reels, TikToks, and YouTube Shorts with cinematic pacing, dynamic transitions, and retention-focused hooks.',
        visual: (
            <div className="services__visual services__visual--editing">
                <div className="services__visual-row">
                    <div className="services__mini-card">
                        <span className="services__mini-dot" style={{ background: '#ef4444' }} />
                        Hook Optimization ·
                        <span className="services__mini-sub">Grab attention in the first 3 seconds with dynamic hooks and pattern interrupts.</span>
                    </div>
                    <div className="services__mini-card">
                        <span className="services__mini-dot" style={{ background: '#22c55e' }} />
                        Retention Editing ·
                        <span className="services__mini-sub">Keep viewers watching with pacing, zooms, and beat-synced transitions.</span>
                    </div>
                </div>
            </div>
        ),
    },
    {
        title: 'Color Grading',
        desc: 'Professional color correction and cinematic grading that sets the mood. Custom LUTs, film-inspired looks, and brand-consistent color palettes.',
        visual: (
            <div className="services__visual services__visual--color">
                <div className="services__color-grid">
                    <div className="services__color-swatch" style={{ background: 'linear-gradient(135deg, #f97316, #ef4444)' }} />
                    <div className="services__color-swatch" style={{ background: 'linear-gradient(135deg, #8b5cf6, #6366f1)' }} />
                    <div className="services__color-swatch" style={{ background: 'linear-gradient(135deg, #06b6d4, #3b82f6)' }} />
                    <div className="services__color-swatch" style={{ background: 'linear-gradient(135deg, #22c55e, #10b981)' }} />
                    <div className="services__color-swatch" style={{ background: 'linear-gradient(135deg, #f59e0b, #eab308)' }} />
                    <div className="services__color-swatch" style={{ background: 'linear-gradient(135deg, #ec4899, #f43f5e)' }} />
                </div>
            </div>
        ),
    },
    {
        title: 'Motion Graphics',
        desc: 'Eye-catching animated text, custom transitions, kinetic typography, and visual effects that elevate your content above the competition.',
        visual: (
            <div className="services__visual services__visual--motion">
                <div className="services__motion-grid">
                    <div className="services__motion-item">
                        <span className="services__motion-label">Kinetic Typography</span>
                    </div>
                    <div className="services__motion-item">
                        <span className="services__motion-label">Animated Overlays</span>
                    </div>
                    <div className="services__motion-item">
                        <span className="services__motion-label">Smooth Transitions</span>
                    </div>
                    <div className="services__motion-item">
                        <span className="services__motion-label">Custom Effects</span>
                    </div>
                </div>
            </div>
        ),
    },
];

export default function About() {
    return (
        <section id="about" className="services">
            <div className="services__inner">
                <div className="services__grid">
                    {services.map(s => (
                        <div className="services__card" key={s.title}>
                            {s.visual}
                            <h3 className="services__card-title">{s.title}</h3>
                            <p className="services__card-desc">{s.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}