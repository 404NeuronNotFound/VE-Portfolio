import { useState } from 'react';
import type { FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import '../style/Contact.css';

// ─── Replace with your real EmailJS credentials ──────────────────────────────
const SERVICE_ID = 'service_df4ek3d';
const TEMPLATE_ID = 'template_dgkkzca';
const PUBLIC_KEY = 'aAV_enHD0H7_WAdRG';
// ─────────────────────────────────────────────────────────────────────────────

type Status = 'idle' | 'sending' | 'sent' | 'error';

export default function Contact() {
    const [form, setForm] = useState({ name: '', email: '', service: '', message: '' });
    const [status, setStatus] = useState<Status>('idle');

    const handleChange =
        (key: keyof typeof form) =>
            (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
                setForm((f) => ({ ...f, [key]: e.target.value }));

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setStatus('sending');
        try {
            await emailjs.send(
                SERVICE_ID,
                TEMPLATE_ID,
                {
                    from_name: form.name,
                    from_email: form.email,
                    service_type: form.service,
                    message: form.message,
                    to_email: 'keybeen.videoeditor@gmail.com',
                },
                PUBLIC_KEY,
            );
            setStatus('sent');
            setForm({ name: '', email: '', service: '', message: '' });
        } catch {
            setStatus('error');
        }
    };

    return (
        <section id="contact" className="contact">
            <div className="contact__inner">

                {/* Left */}
                <div className="contact__left">
                    <h2 className="contact__title">
                        Let's make something<br />
                        great together.
                    </h2>
                    <p className="contact__desc">
                        Ready to level up your content? Send me a message and I'll get back to you within 24 hours.
                    </p>

                    <div className="contact__info-list">
                        <a href="mailto:keybeen.videoeditor@gmail.com" className="contact__info-item">
                            <div className="contact__info-icon">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <rect x="2" y="4" width="20" height="16" rx="2" />
                                    <path d="M22 4L12 13L2 4" />
                                </svg>
                            </div>
                            <div className="contact__info-text">
                                <span className="contact__info-label">Email</span>
                                <span className="contact__info-val">keybeen.videoeditor@gmail.com</span>
                            </div>
                        </a>

                        <div className="contact__info-item">
                            <div className="contact__info-icon">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="12" cy="12" r="10" />
                                    <polyline points="12 6 12 12 16 14" />
                                </svg>
                            </div>
                            <div className="contact__info-text">
                                <span className="contact__info-label">Response Time</span>
                                <span className="contact__info-val">Within 24 hours</span>
                            </div>
                        </div>

                        <div className="contact__info-item">
                            <div className="contact__info-icon">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="12" cy="12" r="10" />
                                    <line x1="2" y1="12" x2="22" y2="12" />
                                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                                </svg>
                            </div>
                            <div className="contact__info-text">
                                <span className="contact__info-label">Timezone</span>
                                <span className="contact__info-val">PHT (UTC+8) — Philippines</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right — Form */}
                <div className="contact__right">
                    <form className="contact__form" onSubmit={handleSubmit} noValidate>

                        <div className="contact__row">
                            <div className="contact__field">
                                <label className="contact__label" htmlFor="ct-name">Your Name</label>
                                <input
                                    id="ct-name"
                                    className="contact__input"
                                    type="text"
                                    required
                                    placeholder="Cardo Dalisay"
                                    value={form.name}
                                    onChange={handleChange('name')}
                                />
                            </div>
                            <div className="contact__field">
                                <label className="contact__label" htmlFor="ct-email">Email Address</label>
                                <input
                                    id="ct-email"
                                    className="contact__input"
                                    type="email"
                                    required
                                    placeholder="cardo.dalisay@gmail.com"
                                    value={form.email}
                                    onChange={handleChange('email')}
                                />
                            </div>
                        </div>

                        <div className="contact__field">
                            <label className="contact__label" htmlFor="ct-service">Service Interested In</label>
                            <select
                                id="ct-service"
                                className="contact__input contact__select"
                                required
                                value={form.service}
                                onChange={handleChange('service')}
                            >
                                <option value="">Select a service...</option>
                                <option value="Per Video ($49)">Per Video — $49/video</option>
                                <option value="Monthly Retainer ($1,000)">Monthly Retainer — $1,000/month</option>
                                <option value="Custom Package">Custom Package</option>
                            </select>
                        </div>

                        <div className="contact__field">
                            <label className="contact__label" htmlFor="ct-message">Tell me about your project</label>
                            <textarea
                                id="ct-message"
                                className="contact__input contact__textarea"
                                required
                                rows={5}
                                placeholder="What kind of content do you create? What platforms? What's your goal?"
                                value={form.message}
                                onChange={handleChange('message')}
                            />
                        </div>

                        <button
                            type="submit"
                            className="contact__submit"
                            disabled={status === 'sending'}
                        >
                            {status === 'sending'
                                ? 'Sending…'
                                : status === 'sent'
                                    ? '✓ Message Sent!'
                                    : 'Send Message'}
                        </button>

                        {status === 'error' && (
                            <p className="contact__error">
                                Something went wrong. Email me directly at keybeen.videoeditor@gmail.com
                            </p>
                        )}
                        {status === 'sent' && (
                            <p className="contact__success">🎉 Got it! I'll reply within 24 hours.</p>
                        )}
                    </form>
                </div>

            </div>
        </section>
    );
}