import '../style/Tools.css';

/* ─── Tool SVG Icons ─── */
const icons: Record<string, JSX.Element> = {
    'CapCut': (
        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z"/></svg>
    ),
    'Premiere Pro': (
        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M2 2h20v20H2V2zm3 3v14h14V5H5zm3.5 2.5h2.3c1.7 0 2.7.9 2.7 2.4 0 1.6-1.1 2.5-2.8 2.5H9.8v2.6H8.5V7.5zm1.3 3.8h.9c1 0 1.5-.4 1.5-1.3 0-.9-.5-1.3-1.5-1.3h-.9v2.6zm5.7-1.2v1h-.8v3.8c0 .6.2.8.7.8.3 0 .5 0 .7-.1v1c-.3.1-.6.2-1 .2-1.2 0-1.7-.6-1.7-1.8V11h-.7v-1h.7V8.5h1.2V10h.9z"/></svg>
    ),
    'After Effects': (
        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M2 2h20v20H2V2zm3 3v14h14V5H5zm5.2 2.5l2.7 8.5h-1.4L11 14.2H8.7l-.5 1.8H6.8l2.7-8.5h1.7zm-.4 1.6L8.9 13h2l-.9-3.9h-.2zm5.2.4v1h-.7v3.8c0 .6.2.8.7.8.2 0 .4 0 .6-.1v1c-.3.1-.6.2-1 .2-1.2 0-1.6-.6-1.6-1.8v-3.9h-.7v-1h.7V7.5h1.2V9.5h.8z"/></svg>
    ),
    'Photoshop': (
        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M2 2h20v20H2V2zm3 3v14h14V5H5zm3.5 2.5h2.6c1.8 0 2.9 1 2.9 2.5s-1.1 2.6-3 2.6H9.8v2.9H8.5V7.5zm1.3 4h1.2c1.1 0 1.7-.5 1.7-1.4 0-.9-.6-1.4-1.7-1.4H9.8V11.5zm7 .4c-.8 0-1.3.3-1.3.8 0 .6.4.8 1.4 1 1.5.3 2.2.8 2.2 1.9 0 1.3-1 2-2.5 2-.9 0-1.7-.2-2.3-.7l.6-.9c.5.4 1.1.6 1.7.6.8 0 1.3-.3 1.3-.9 0-.5-.3-.7-1.3-1-1.5-.3-2.3-.8-2.3-2 0-1.2 1-1.9 2.4-1.9.9 0 1.6.2 2.1.6l-.5.9c-.5-.3-1-.5-1.5-.5z"/></svg>
    ),
    'Canva': (
        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.5 14.5c-1 .7-2.2 1-3.5 1-3.3 0-6-2.7-6-6s2.7-6 6-6c1.3 0 2.5.4 3.5 1.1l-1.2 1.5C13.5 7.4 12.8 7 12 7c-2.8 0-4.5 2.2-4.5 5s1.7 5 4.5 5c.8 0 1.5-.3 2.3-.8l1.2 1.3z"/></svg>
    ),
    'DaVinci Resolve': (
        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.14-7-7 3.14-7 7-7zm0 2.5a4.5 4.5 0 100 9 4.5 4.5 0 000-9zm0 2a2.5 2.5 0 110 5 2.5 2.5 0 010-5z"/></svg>
    ),
    'Alight Motion': (
        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L14.09 8.26L20 9.27L15.55 13.97L16.91 20L12 16.9L7.09 20L8.45 13.97L4 9.27L9.91 8.26L12 2Z"/></svg>
    ),
    'Lightroom': (
        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M2 2h20v20H2V2zm3 3v14h14V5H5zm3 2.5h1.3v6.2h3.7v1.1H8V7.5zm6.2 2v1h-.7v3.7c0 .6.2.9.7.9.2 0 .4 0 .6-.1v1c-.2.1-.5.2-.9.2-1.2 0-1.7-.6-1.7-1.8v-3.9h-.6v-1h.6V7.8h1.3v1.7h.7z"/></svg>
    ),
    'Figma': (
        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 24c2.2 0 4-1.8 4-4v-4H8c-2.2 0-4 1.8-4 4s1.8 4 4 4zm0-20C5.8 4 4 5.8 4 8s1.8 4 4 4h4V4H8zm0 0"/><path d="M8 4h4v8H8C5.8 12 4 10.2 4 8s1.8-4 4-4z"/><path d="M12 4h4c2.2 0 4 1.8 4 4s-1.8 4-4 4h-4V4z"/><path d="M20 16c0 2.2-1.8 4-4 4s-4-1.8-4-4 1.8-4 4-4 4 1.8 4 4z"/><path d="M8 12h4v8H8c-2.2 0-4-1.8-4-4s1.8-4 4-4z"/></svg>
    ),
    'OBS Studio': (
        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-.5 4.5c1.38 0 2.5.9 2.9 2.14a3 3 0 11-1.4 5.72A2.5 2.5 0 0112 17.5a2.5 2.5 0 01-2.38-3.28A3 3 0 1111.5 9a2.5 2.5 0 010-2.5z"/></svg>
    ),
    'InShot': (
        <svg viewBox="0 0 24 24" fill="currentColor"><rect x="3" y="3" width="18" height="18" rx="4" fill="none" stroke="currentColor" strokeWidth="1.5"/><polygon points="10,8 10,16 17,12" fill="currentColor"/></svg>
    ),
    'Notion': (
        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M4 4.5A2.5 2.5 0 016.5 2H14l6 6v11.5a2.5 2.5 0 01-2.5 2.5h-11A2.5 2.5 0 014 19.5v-15zM14 2v6h6M8 13h8M8 17h5"/><line x1="8" y1="13" x2="16" y2="13" stroke="currentColor" strokeWidth="1.5" fill="none"/><line x1="8" y1="17" x2="13" y2="17" stroke="currentColor" strokeWidth="1.5" fill="none"/></svg>
    ),
    'Audacity': (
        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM8 16V8l2.5 2v4L8 16zm3.5-2V10l2.5-2v8l-2.5-2zm3.5 2V8l2.5 2v4l-2.5 2z"/></svg>
    ),
    'VN Editor': (
        <svg viewBox="0 0 24 24" fill="currentColor"><rect x="2" y="4" width="20" height="16" rx="3" fill="none" stroke="currentColor" strokeWidth="1.5"/><path d="M8 10l3 4-3 4" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><line x1="13" y1="16" x2="18" y2="16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
    ),
    'HandBrake': (
        <svg viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.5"/><path d="M12 7v5l3 3" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><circle cx="12" cy="12" r="1.5" fill="currentColor"/></svg>
    ),
};

interface Tool {
    name: string;
}

const row1: Tool[] = [
    { name: 'CapCut' },
    { name: 'Premiere Pro' },
    { name: 'After Effects' },
    { name: 'Photoshop' },
    { name: 'Canva' },
    { name: 'DaVinci Resolve' },
    { name: 'Alight Motion' },
    { name: 'Lightroom' },
    { name: 'Figma' },
    { name: 'OBS Studio' },
];

const row2: Tool[] = [
    { name: 'Figma' },
    { name: 'Alight Motion' },
    { name: 'InShot' },
    { name: 'Audacity' },
    { name: 'OBS Studio' },
    { name: 'Notion' },
    { name: 'CapCut' },
    { name: 'Premiere Pro' },
    { name: 'Canva' },
    { name: 'Photoshop' },
];

const row3: Tool[] = [
    { name: 'After Effects' },
    { name: 'DaVinci Resolve' },
    { name: 'Lightroom' },
    { name: 'CapCut' },
    { name: 'Notion' },
    { name: 'Photoshop' },
    { name: 'Canva' },
    { name: 'Figma' },
    { name: 'VN Editor' },
    { name: 'Alight Motion' },
];

const row4: Tool[] = [
    { name: 'Audacity' },
    { name: 'Canva' },
    { name: 'OBS Studio' },
    { name: 'InShot' },
    { name: 'After Effects' },
    { name: 'DaVinci Resolve' },
    { name: 'Lightroom' },
    { name: 'Premiere Pro' },
    { name: 'CapCut' },
    { name: 'VN Editor' },
];

function MarqueeRow({ tools, direction }: { tools: Tool[]; direction: 'left' | 'right' }) {
    const doubled = [...tools, ...tools];

    return (
        <div className={`tools__marquee tools__marquee--${direction}`}>
            <div className="tools__track">
                {doubled.map((t, i) => (
                    <div className="tools__card" key={`${t.name}-${i}`}>
                        <div className="tools__card-icon">
                            {icons[t.name]}
                        </div>
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
                <MarqueeRow tools={row3} direction="left" />
                <MarqueeRow tools={row4} direction="right" />
            </div>
        </section>
    );
}
