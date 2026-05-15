import '../style/Footer.css';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer__inner">
                <div className="footer__top">
                    <div className="footer__brand">
                        <span className="footer__logo">Keybeen</span>
                        <p>Creative and cinematic video editing for creators, brands, and businesses.</p>
                    </div>
                    <div className="footer__links">
                        {['About', 'Projects', 'Pricing', 'Contact'].map(l => (
                            <button
                                key={l}
                                onClick={() => document.getElementById(l.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })}
                            >
                                {l}
                            </button>
                        ))}
                    </div>
                </div>
                <div className="footer__bottom">
                    <span>© {new Date().getFullYear()} Keybeen. All rights reserved.</span>
                    <a href="mailto:keybeen.videoeditor@gmail.com">keybeen.videoeditor@gmail.com</a>
                </div>
            </div>
        </footer>
    );
}