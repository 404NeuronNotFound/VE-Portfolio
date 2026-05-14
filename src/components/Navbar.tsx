import { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import '../style/Navbar.css';

const links = ['About', 'Projects', 'Pricing', 'Contact'];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const { theme, toggleTheme } = useTheme();

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const scrollTo = (id: string) => {
        document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
        setMenuOpen(false);
    };

    return (
        <nav className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
            <div className="nav__inner">
                <button className="nav__logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                    Keybeen
                </button>

                <ul className="nav__links">
                    {links.map(l => (
                        <li key={l}>
                            <button onClick={() => scrollTo(l)}>{l}</button>
                        </li>
                    ))}
                </ul>

                <div className="nav__actions">
                    <a
                        href="mailto:keybeen.videoeditor@gmail.com?subject=Video Editing Inquiry"
                        className="nav__cta"
                    >
                        Hire Me
                    </a>

                    <button
                        className="nav__theme-toggle"
                        onClick={toggleTheme}
                        aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
                    >
                        {theme === 'dark' ? (
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="12" cy="12" r="5" />
                                <line x1="12" y1="1" x2="12" y2="3" />
                                <line x1="12" y1="21" x2="12" y2="23" />
                                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                                <line x1="1" y1="12" x2="3" y2="12" />
                                <line x1="21" y1="12" x2="23" y2="12" />
                                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                            </svg>
                        ) : (
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                            </svg>
                        )}
                    </button>
                </div>

                <button
                    className="nav__burger"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    <span className={menuOpen ? 'open' : ''} />
                    <span className={menuOpen ? 'open' : ''} />
                    <span className={menuOpen ? 'open' : ''} />
                </button>
            </div>

            {menuOpen && (
                <div className="nav__mobile">
                    {links.map(l => (
                        <button key={l} onClick={() => scrollTo(l)}>{l}</button>
                    ))}
                    <a href="mailto:keybeen.videoeditor@gmail.com?subject=Video Editing Inquiry" className="nav__cta">
                        Hire Me
                    </a>
                    <button className="nav__theme-toggle-mobile" onClick={toggleTheme}>
                        {theme === 'dark' ? '☀️ Light Mode' : '🌙 Dark Mode'}
                    </button>
                </div>
            )}
        </nav>
    );
}