import '../style/About.css';

const experience = [
    {
        company: 'Blockchained Snipers',
        role: 'Video Editor | Motion Graphics | Graphic Designer',
        period: 'December 2024 – Present',
        description:
            'Creating cinematic short-form and long-form content for clients across multiple platforms. Specializing in Reels, TikToks, and social media ads with dynamic transitions and retention-focused editing.',
        color: '#22c55e',
        initials: 'BS',
    },
    {
        company: '15 International Clients',
        role: 'Freelance Video Editor',
        period: 'August 2022 – 2023',
        description:
            'Delivering high-quality video edits for international clients, including product videos, faceless YouTube content, and promotional reels.',
        color: '#2d22c5ff',
        initials: 'FV',
    },
    {
        company: 'Upwork',
        role: 'Freelance Video Editor',
        period: 'June 2022 – 2023',
        description: '',
        color: '#06d45cff',
        initials: 'UP',
    },
];

const education = [
    {
        institution: 'Mindanao State University at Naawan',
        credential: 'Bachelor of Science in Information Technology',
        description:
            'Focused on database systems, software development, and information management, with training in programming, system analysis, and modern technology solutions.',
        color: '#191970',
        initials: 'MSU',
    },
    {
        institution: 'Skillshare',
        credential: 'VIDEO EDITING MASTERCLASS',
        description:
            'In-depth course covering cinematic editing, color grading, sound design, and storytelling for short-form and long-form video content.',
        color: '#ec4899',
        initials: 'SK',
    },
];

export default function About() {
    return (
        <section id="about" className="about">
            <div className="about__inner">
                {/* ── Work Experience ── */}
                <div className="about__block">
                    <h2 className="about__heading">Work Experience</h2>
                    <div className="about__timeline">
                        {experience.map((item) => (
                            <div className="about__entry" key={item.company}>
                                <div className="about__entry-icon" style={{ background: item.color }}>
                                    {item.initials}
                                </div>
                                <div className="about__entry-body">
                                    <div className="about__entry-header">
                                        <div>
                                            <h3 className="about__entry-title">
                                                {item.company}{' '}
                                                <svg
                                                    className="about__entry-arrow"
                                                    width="12"
                                                    height="12"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                >
                                                    <path d="M7 17L17 7" />
                                                    <path d="M7 7h10v10" />
                                                </svg>
                                            </h3>
                                            <span className="about__entry-role">{item.role}</span>
                                        </div>
                                        <span className="about__entry-period">{item.period}</span>
                                    </div>
                                    {item.description && (
                                        <p className="about__entry-desc">{item.description}</p>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ── Education ── */}
                <div className="about__block">
                    <h2 className="about__heading">Education</h2>
                    <div className="about__timeline">
                        {education.map((item) => (
                            <div className="about__entry" key={item.credential}>
                                <div className="about__entry-icon" style={{ background: item.color }}>
                                    {item.initials}
                                </div>
                                <div className="about__entry-body">
                                    <div className="about__entry-header">
                                        <div>
                                            <h3 className="about__entry-title about__entry-title--credential">
                                                {item.credential}{' '}
                                                <svg
                                                    className="about__entry-arrow"
                                                    width="12"
                                                    height="12"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                >
                                                    <path d="M7 17L17 7" />
                                                    <path d="M7 7h10v10" />
                                                </svg>
                                            </h3>
                                            <span className="about__entry-role">{item.institution}</span>
                                        </div>
                                    </div>
                                    {item.description && (
                                        <p className="about__entry-desc">{item.description}</p>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}