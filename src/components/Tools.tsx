import '../style/Tools.css';

interface Tool {
    name: string;
    icon: string; // SVG path or emoji
}

const row1: Tool[] = [
    { name: 'CapCut', icon: '✂️' },
    { name: 'Premiere Pro', icon: '🎬' },
    { name: 'After Effects', icon: '✨' },
    { name: 'Photoshop', icon: '🖼️' },
    { name: 'Canva', icon: '🎨' },
    { name: 'DaVinci Resolve', icon: '🎞️' },
    { name: 'Alight Motion', icon: '💫' },
    { name: 'Lightroom', icon: '📷' },
];

const row2: Tool[] = [
    { name: 'InShot', icon: '📱' },
    { name: 'CapCut Mobile', icon: '📲' },
    { name: 'VN Editor', icon: '🎥' },
    { name: 'Figma', icon: '🎯' },
    { name: 'Audacity', icon: '🎧' },
    { name: 'OBS Studio', icon: '📺' },
    { name: 'HandBrake', icon: '⚙️' },
    { name: 'Notion', icon: '📝' },
];

function MarqueeRow({ tools, direction }: { tools: Tool[]; direction: 'left' | 'right' }) {
    const doubled = [...tools, ...tools];

    return (
        <div className={`tools__marquee tools__marquee--${direction}`}>
            <div className="tools__track">
                {doubled.map((t, i) => (
                    <div className="tools__card" key={`${t.name}-${i}`}>
                        <span className="tools__card-icon">{t.icon}</span>
                        <span className="tools__card-name">{t.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default function Tools() {
    return (
        <section id="tools" className="tools">
            <div className="tools__inner">
                <h2 className="tools__title">Editing Tools</h2>
            </div>
            <div className="tools__rows">
                <MarqueeRow tools={row1} direction="left" />
                <MarqueeRow tools={row2} direction="right" />
            </div>
        </section>
    );
}
