import '../style/Work.css';

interface Project {
    id: number;
    title: string;
    description: string;
    videoUrl: string;
    features: string[];
    tools: string[];
}

interface Short {
    id: number;
    title: string;
    videoUrl: string;
    tools: string[];
}

const projects: Project[] = [
    {
        id: 1,
        title: 'Iman Gadzhi Animation Style',
        description: 'A cinematic animation edit inspired by Iman Gadzhi’s style, featuring smooth motion design, dynamic typography, engaging transitions, and premium visual storytelling.',
        videoUrl: 'public/videos/Iman Gadzhi Style 1.mp4',
        features: [
            'Cinematic motion graphics and smooth animations',
            'Dynamic typography with engaging visual flow',
            'Clean transitions with premium editing style',
            'Modern storytelling focused on viewer retention',
        ],
        tools: ['Premiere Pro', 'Photoshop'],
    },
    {
        id: 2,
        title: 'MagnatesMedia Documentary Style',
        description: 'A documentary-style edit inspired by MagnatesMedia, combining cinematic storytelling, dramatic pacing, immersive visuals, and engaging motion graphics to deliver a premium viewing experience.',
        videoUrl: 'public/videos/MagnatesMedia Style 2.mp4',
        features: [
            'Documentary-style storytelling with cinematic pacing',
            'High-quality motion graphics and visual breakdowns',
            'Immersive sound design with dramatic atmosphere',
            'Clean typography and engaging documentary visuals',
        ],
        tools: ['CapCut', 'Canva', 'Alight Motion'],
    },
    {
        id: 3,
        title: 'Iman Gadzhi Animation Style (Alternate Edit)',
        description: 'A cinematic animation edit inspired by Iman Gadzhi’s style, featuring smooth motion design, dynamic typography, engaging transitions, and premium visual storytelling.',
        videoUrl: 'public/videos/Iman Gadzhi Style 2.mp4',
        features: [
            'Fast-paced cinematic editing with smooth transitions',
            'Dynamic motion graphics and animated typography',
            'Premium visual storytelling with modern pacing',
            'Clean zooms, camera movements, and engaging animations',
        ],
        tools: ['Premiere Pro', 'After Effects', 'DaVinci Resolve'],
    },
    {
        id: 4,
        title: 'MagnatesMedia Documentary Style (Alternate Edit)',
        description: 'A cinematic documentary-style edit inspired by MagnatesMedia, designed to deliver strong narrative impact through storytelling, visuals, and sound-driven pacing.',
        videoUrl: 'public/videos/MagnateMedia Style 3.mp4',
        features: [
            'Strong narrative-driven storytelling with hook-based structure',
            'Cinematic pacing with tension-building scene progression',
            'Layered sound design to enhance emotion and immersion',
            'Minimalist but impactful typography and visual emphasis',
        ],
        tools: ['CapCut', 'Canva', 'Alight Motion'],
    },
    {
        id: 5,
        title: 'Findify Motion Ad (Lost & Found System)',
        description: 'A simple motion ad for Findify, a lost and found management system, designed to clearly explain the platform’s purpose and encourage user engagement through clean visuals and smooth transitions.',
        videoUrl: 'public/videos/Findify Ads.mp4',
        features: [
            'Clean motion design focused on product explanation',
            'Simple UI showcase animation of the Findify platform',
            'Smooth transitions with minimal and modern visual style',
            'Clear problem-solution storytelling for lost and found use case',
        ],
        tools: ['CapCut', 'Canva', 'Gemini', 'Swish'],
    }
];

const shorts: Short[] = [
    {
        id: 1,
        title: 'Crypto Trading Hook',
        videoUrl: 'public/videos/shorts/Editing Style 8.mp4',
        tools: ['CapCut', 'Canva'],
    },
    {
        id: 2,
        title: 'Documentary Style Reel',
        videoUrl: 'public/videos/shorts/Editing Style 1.mp4',
        tools: ['Premiere Pro', 'After Effects'],
    },
    {
        id: 3,
        title: 'Documentary Style Reel',
        videoUrl: 'public/videos/shorts/Editing Style 2.mp4',
        tools: ['CapCut', 'Alight Motion'],
    },
    {
        id: 4,
        title: 'Motivational Quote Edit',
        videoUrl: 'public/videos/shorts/S4 My Content 2.mp4',
        tools: ['CapCut', 'Canva'],
    },
    {
        id: 5,
        title: 'Podcast Highlight Clip',
        videoUrl: 'public/videos/shorts/S4 My Content 11.mp4',
        tools: ['Premiere Pro', 'DaVinci Resolve'],
    },
    {
        id: 6,
        title: 'Faceless Editing Style',
        videoUrl: 'public/videos/shorts/Editing Style 7.mp4',
        tools: ['CapCut', 'Lightroom'],
    },
    {
        id: 7,
        title: 'Faceless Content',
        videoUrl: 'public/videos/shorts/Editing Style 11.mp4',
        tools: ['After Effects', 'Photoshop'],
    },
    {
        id: 8,
        title: 'Faceless Content',
        videoUrl: 'public/videos/shorts/S2 My 5.mp4',
        tools: ['CapCut', 'Figma'],
    },
    {
        id: 9,
        title: 'Instagram Reel Content',
        videoUrl: 'public/videos/shorts/New Editing Style 2.mp4',
        tools: ['Premiere Pro', 'After Effects'],
    },
    {
        id: 10,
        title: 'Instagram Reel Content',
        videoUrl: 'public/videos/shorts/New Editing Style 3.mp4',
        tools: ['Premiere Pro', 'After Effects'],
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
                                            <svg className="projects__feature-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
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

                {/* ── Shorts / Vertical (9:16) ── */}
                <div className="projects__shorts-header">
                    <h3 className="projects__shorts-title">Short-Form & Vertical Edits</h3>
                    <p className="projects__shorts-sub">Reels, TikToks, YouTube Shorts — scroll-stopping vertical content.</p>
                </div>

                <div className="projects__shorts-grid">
                    {shorts.map((s) => (
                        <div className="projects__short-card" key={s.id}>
                            <div className="projects__short-media">
                                <video
                                    src={s.videoUrl}
                                    loop
                                    muted
                                    autoPlay
                                    playsInline
                                    className="projects__short-video"
                                />
                                <div className="projects__short-overlay">
                                    <span className="projects__short-play">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                            <polygon points="6,3 20,12 6,21" />
                                        </svg>
                                    </span>
                                </div>
                            </div>
                            <div className="projects__short-info">
                                <h4 className="projects__short-name">{s.title}</h4>
                                <div className="projects__short-tools">
                                    {s.tools.map(t => (
                                        <span className="projects__tool-tag" key={t}>{t}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}