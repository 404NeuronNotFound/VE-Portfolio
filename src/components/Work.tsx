import '../style/Work.css';

interface Project {
    id: number;
    title: string;
    description: string;
    videoUrl: string;
    features: string[];
    tools: string[];
}

const projects: Project[] = [
    {
        id: 1,
        title: 'Brand Reel — Cinematic Product Showcase',
        description: 'A high-energy short-form reel showcasing a product launch with cinematic transitions, dynamic text overlays, and beat-synced cuts.',
        videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
        features: [
            'Scroll-stopping 3-second hook with motion graphics',
            'Beat-synced transitions for maximum engagement',
            'Custom color grading with cinematic LUTs',
            'Animated text overlays and call-to-action',
        ],
        tools: ['Premiere Pro', 'After Effects', 'Photoshop'],
    },
    {
        id: 2,
        title: 'Creator Content — YouTube Shorts Series',
        description: 'A series of retention-focused YouTube Shorts for a lifestyle creator, optimized for the algorithm with strong hooks and pacing.',
        videoUrl: 'https://www.w3schools.com/html/movie.mp4',
        features: [
            'Retention-optimized pacing and structure',
            'Custom captions with animated highlighting',
            'Sound design with layered SFX and music',
            'Consistent brand colors and typography',
        ],
        tools: ['CapCut', 'Canva', 'Alight Motion'],
    },
    {
        id: 3,
        title: 'Coaching Ad — TikTok Campaign',
        description: 'A high-converting TikTok ad for a business coach, featuring testimonials, kinetic typography, and a strong CTA sequence.',
        videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
        features: [
            'Hook-first editing structure',
            'Kinetic typography for key messages',
            'Smooth zoom and pan animations',
            'Optimized for TikTok vertical format',
        ],
        tools: ['Premiere Pro', 'After Effects', 'DaVinci Resolve'],
    },
];

export default function Work() {
    return (
        <section id="projects" className="projects">
            <div className="projects__inner">
                <div className="projects__header">
                    <h2 className="projects__title">Latest Projects</h2>
                </div>

                <div className="projects__list">
                    {projects.map((p) => (
                        <div className="projects__card" key={p.id}>
                            <div className="projects__card-media">
                                <video
                                    src={p.videoUrl}
                                    loop
                                    muted
                                    autoPlay
                                    playsInline
                                    className="projects__card-video"
                                />
                            </div>
                            <div className="projects__card-details">
                                <h3 className="projects__card-title">{p.title}</h3>
                                <p className="projects__card-desc">{p.description}</p>

                                <ul className="projects__card-features">
                                    {p.features.map(f => (
                                        <li key={f}>
                                            <span className="projects__feature-icon">✨</span>
                                            {f}
                                        </li>
                                    ))}
                                </ul>

                                <div className="projects__card-tools">
                                    {p.tools.map(t => (
                                        <span className="projects__tool-tag" key={t}>{t}</span>
                                    ))}
                                </div>

                                <div className="projects__card-actions">
                                    <a href={p.videoUrl} target="_blank" rel="noopener noreferrer" className="projects__btn projects__btn--primary">
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                            <polyline points="15 3 21 3 21 9" />
                                            <line x1="10" y1="14" x2="21" y2="3" />
                                        </svg>
                                        Watch Video
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}