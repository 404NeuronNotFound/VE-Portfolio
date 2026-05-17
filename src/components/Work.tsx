import '../style/Work.css';

interface Project {
    id: number;
    title: string;
    description: string;
    youtubeId: string; // YouTube video ID from: youtube.com/watch?v=THIS_PART
    features: string[];
    tools: string[];
}

interface Short {
    id: number;
    title: string;
    youtubeId: string; // YouTube Shorts ID from: youtube.com/shorts/THIS_PART
    tools: string[];
}

const projects: Project[] = [
    {
        id: 1,
        title: 'Iman Gadzhi Animation Style',
        description: 'A cinematic animation edit inspired by Iman Gadzhi’s style, featuring smooth motion design, dynamic typography, engaging transitions, and premium visual storytelling.',
        youtubeId: 'vYM2uwmwef0', // e.g. 'dQw4w9WgXcQ'
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
        youtubeId: '5FLVq6JBIJ0',
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
        youtubeId: '0A88TbYYuV8',
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
        youtubeId: 'CwGqEUWr_z0',
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
        youtubeId: '-qvNfzmLQyc',
        features: [
            'Clean motion design focused on product explanation',
            'Simple UI showcase animation of the Findify platform',
            'Smooth transitions with minimal and modern visual style',
            'Clear problem-solution storytelling for lost and found use case',
        ],
        tools: ['CapCut', 'Canva', 'Gemini', 'Swish'],
    },
];

const shorts: Short[] = [
    { id: 1, title: 'Crypto Trading Hook', youtubeId: 'DU-04TUj8CI', tools: ['CapCut', 'Canva'] },
    { id: 2, title: 'Documentary Style Reel', youtubeId: 'eFg8CnVTLKA', tools: ['Premiere Pro', 'After Effects'] },
    { id: 3, title: 'Documentary Style Reel', youtubeId: 'OsjvcN7Q9Ig', tools: ['CapCut', 'Alight Motion'] },
    { id: 4, title: 'Motivational Quote Edit', youtubeId: 'OX0MnMCmGOw', tools: ['CapCut', 'Canva'] },
    { id: 5, title: 'Podcast Highlight Clip', youtubeId: 'QrD5091o3nM', tools: ['Premiere Pro', 'DaVinci Resolve'] },
    { id: 6, title: 'Faceless Editing Style', youtubeId: '63yHtgYefZs', tools: ['CapCut', 'Lightroom'] },
    { id: 7, title: 'Faceless Content', youtubeId: 'OEqgcdqMinY', tools: ['After Effects', 'Photoshop'] },
    { id: 8, title: 'Faceless Content', youtubeId: '8qOMlOE4epQ', tools: ['CapCut', 'Figma'] },
    { id: 9, title: 'Instagram Reel Content', youtubeId: '18vnCFR7ZOc', tools: ['Premiere Pro', 'After Effects'] },
    { id: 10, title: 'Instagram Reel Content', youtubeId: 'XbD9fGH0aCM', tools: ['Premiere Pro', 'After Effects'] },
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
                                <iframe
                                    src={`https://www.youtube.com/embed/${p.youtubeId}?autoplay=1&mute=1&loop=1&playlist=${p.youtubeId}&controls=1&rel=0&modestbranding=1`}
                                    title={p.title}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className="projects__card-video"
                                    loading="lazy"
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
                                    <a href={`https://www.youtube.com/watch?v=${p.youtubeId}`} target="_blank" rel="noopener noreferrer" className="projects__btn projects__btn--primary">
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
                                <iframe
                                    src={`https://www.youtube.com/embed/${s.youtubeId}?autoplay=1&mute=1&loop=1&playlist=${s.youtubeId}&controls=0&rel=0&modestbranding=1`}
                                    title={s.title}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className="projects__short-video"
                                    loading="lazy"
                                />
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