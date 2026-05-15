import '../style/Hero.css';

export default function Hero() {
    const scrollTo = (id: string) =>
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

    return (
        <section className="hero">
            <div className="hero__content">
                <div className="hero__text">
                    <h1 className="hero__title">
                        Keybeen | Creatives
                    </h1>
                    <p className="hero__sub">
                        I create cinematic and engaging video edits for short-form and long-form content, including Reels, TikToks, YouTube Shorts, commercials, faceless videos, and social media content. I combine creative storytelling, smooth pacing, and modern editing techniques to turn raw footage into high-quality visuals that capture attention and keep viewers engaged.
                    </p>

                    <div className="hero__actions">
                        <a
                            href="mailto:keybeen.videoeditor@gmail.com?subject=Video Editing Inquiry"
                            className="hero__btn hero__btn--primary"
                        >
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="2" y="4" width="20" height="16" rx="2" />
                                <path d="M22 4L12 13L2 4" />
                            </svg>
                            Hire me
                        </a>

                        <a href="https://www.tiktok.com/@keybcuts.codes" target="_blank" rel="noopener noreferrer" className="hero__social" aria-label="TikTok">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                            </svg>
                        </a>

                        <a href="https://www.instagram.com/keybeen.creatives/" target="_blank" rel="noopener noreferrer" className="hero__social" aria-label="Instagram">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="2" y="2" width="20" height="20" rx="5" />
                                <circle cx="12" cy="12" r="5" />
                                <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
                            </svg>
                        </a>
                    </div>
                </div>

                {/* ── 3 Service Cards (inside hero) ── */}
                <div className="hero__services">
                    <div className="hero__svc-card">
                        <div className="hero__svc-visual">
                            <div className="hero__svc-info-block">
                                <span className="hero__svc-info-dot" style={{ background: '#ef4444' }} />
                                <div>
                                    <strong>Hook Optimization</strong>
                                    <span>Grab attention in the first 3 seconds with dynamic hooks and pattern interrupts.</span>
                                </div>
                            </div>
                            <div className="hero__svc-info-block">
                                <span className="hero__svc-info-dot" style={{ background: '#22c55e' }} />
                                <div>
                                    <strong>Retention Editing</strong>
                                    <span>Keep viewers watching with pacing, zooms, and beat-synced cuts.</span>
                                </div>
                            </div>
                        </div>
                        <h3 className="hero__svc-title">Short-Form Editing</h3>
                        <p className="hero__svc-desc">
                            Crafting scroll-stopping Reels, TikToks, and YouTube Shorts with cinematic pacing and dynamic transitions.
                        </p>
                    </div>

                    <div className="hero__svc-card">
                        <div className="hero__svc-visual hero__svc-visual--color">
                            <div className="hero__svc-color-row">
                                <div className="hero__svc-swatch" style={{ background: 'linear-gradient(135deg, #f97316, #ef4444)' }} />
                                <div className="hero__svc-swatch" style={{ background: 'linear-gradient(135deg, #8b5cf6, #6366f1)' }} />
                                <div className="hero__svc-swatch" style={{ background: 'linear-gradient(135deg, #06b6d4, #3b82f6)' }} />
                            </div>
                            <div className="hero__svc-color-row">
                                <div className="hero__svc-swatch" style={{ background: 'linear-gradient(135deg, #22c55e, #10b981)' }} />
                                <div className="hero__svc-swatch" style={{ background: 'linear-gradient(135deg, #f59e0b, #eab308)' }} />
                                <div className="hero__svc-swatch" style={{ background: 'linear-gradient(135deg, #ec4899, #f43f5e)' }} />
                            </div>
                        </div>
                        <h3 className="hero__svc-title">Color Grading</h3>
                        <p className="hero__svc-desc">
                            Professional color correction and cinematic grading. Custom LUTs, film-inspired looks, and brand-consistent palettes.
                        </p>
                    </div>

                    <div className="hero__svc-card">
                        <div className="hero__svc-visual hero__svc-visual--motion">
                            <div className="hero__svc-motion-grid">
                                <div className="hero__svc-motion-pill">Kinetic Typography</div>
                                <div className="hero__svc-motion-pill">Animated Overlays</div>
                                <div className="hero__svc-motion-pill">Smooth Transitions</div>
                                <div className="hero__svc-motion-pill">Custom Effects</div>
                            </div>
                        </div>
                        <h3 className="hero__svc-title">Motion Graphics</h3>
                        <p className="hero__svc-desc">
                            Eye-catching animated text, custom transitions, kinetic typography, and effects that elevate your content.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}