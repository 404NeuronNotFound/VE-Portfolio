import { useState, useRef, useEffect } from 'react';
import type { FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import ReCAPTCHA from 'react-google-recaptcha';
import '../style/Contact.css';

// ─── EmailJS credentials ──────────────────────────────────────────────────────
const SERVICE_ID = 'service_df4ek3d';
const TEMPLATE_ID = 'template_dgkkzca';
const PUBLIC_KEY = 'aAV_enHD0H7_WAdRG';

// ─── reCAPTCHA site key ───────────────────────────────────────────────────────
// Get yours at https://www.google.com/recaptcha/admin → v2 "I'm not a robot"
// Add localhost + your production domain to the allowed-domains list.
const RECAPTCHA_SITE_KEY = '6LdrdewsAAAAAFhyGTs0H4nFj8Pv5UXO_O-_LPhq';
// ─────────────────────────────────────────────────────────────────────────────

// ─── Rate-limit helpers (max 3 submissions per hour, stored in localStorage) ──
const RATE_KEY = 've_contact_submissions';
const RATE_LIMIT = 3;
const RATE_WINDOW_MS = 60 * 60 * 1000; // 1 hour

function isRateLimited(): boolean {
    try {
        const raw = localStorage.getItem(RATE_KEY);
        const timestamps: number[] = raw ? JSON.parse(raw) : [];
        const now = Date.now();
        const recent = timestamps.filter((t) => now - t < RATE_WINDOW_MS);
        return recent.length >= RATE_LIMIT;
    } catch {
        return false;
    }
}

function recordSubmission(): void {
    try {
        const raw = localStorage.getItem(RATE_KEY);
        const timestamps: number[] = raw ? JSON.parse(raw) : [];
        const now = Date.now();
        const recent = timestamps.filter((t) => now - t < RATE_WINDOW_MS);
        recent.push(now);
        localStorage.setItem(RATE_KEY, JSON.stringify(recent));
    } catch { /* ignore */ }
}
// ─────────────────────────────────────────────────────────────────────────────

type Status = 'idle' | 'sending' | 'sent' | 'error' | 'rate-limited';
type Errors = Partial<Record<'name' | 'email' | 'service' | 'message', string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const MIN_FORM_TIME_MS = 3000; // must spend ≥ 3 s on the form

export default function Contact() {
    const [form, setForm] = useState({ name: '', email: '', service: '', message: '' });
    const [status, setStatus] = useState<Status>('idle');
    const [errors, setErrors] = useState<Errors>({});

    // Honeypot — must remain empty; bots typically auto-fill every input
    const [honeypot, setHoneypot] = useState('');

    // reCAPTCHA ref so we can get the token and reset the widget
    const recaptchaRef = useRef<ReCAPTCHA>(null);
    const [captchaToken, setCaptchaToken] = useState<string | null>(null);
    const [captchaError, setCaptchaError] = useState(false);

    // Time-on-form guard
    const formOpenedAt = useRef<number>(Date.now());
    useEffect(() => { formOpenedAt.current = Date.now(); }, []);

    // ── field change ─────────────────────────────────────────────────────────
    const handleChange =
        (key: keyof typeof form) =>
            (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
                setForm((f) => ({ ...f, [key]: e.target.value }));
                setErrors((prev) => ({ ...prev, [key]: undefined }));
            };

    // ── field validation ─────────────────────────────────────────────────────
    const validate = (): Errors => {
        const e: Errors = {};
        if (!form.name.trim()) e.name = 'Name is required.';
        if (!form.email.trim()) e.email = 'Email address is required.';
        else if (!EMAIL_RE.test(form.email.trim())) e.email = 'Please enter a valid email address.';
        if (!form.service) e.service = 'Please select a service.';
        if (!form.message.trim()) e.message = 'Message cannot be empty.';
        else if (form.message.trim().length < 10) e.message = 'Message is too short (min 10 characters).';
        return e;
    };

    // ── submit ───────────────────────────────────────────────────────────────
    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        // 1. Honeypot check — silently fail if filled
        if (honeypot) return;

        // 2. Time-on-form check — bots submit instantly
        if (Date.now() - formOpenedAt.current < MIN_FORM_TIME_MS) return;

        // 3. Rate-limit check
        if (isRateLimited()) {
            setStatus('rate-limited');
            return;
        }

        // 4. Field validation
        const fieldErrors = validate();
        if (Object.keys(fieldErrors).length > 0) {
            setErrors(fieldErrors);
            return;
        }

        // 5. reCAPTCHA check
        if (!captchaToken) {
            setCaptchaError(true);
            return;
        }
        setCaptchaError(false);

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
            recordSubmission();
            recaptchaRef.current?.reset();
            setCaptchaToken(null);
        } catch {
            setStatus('error');
            recaptchaRef.current?.reset();
            setCaptchaToken(null);
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

                        {/* ── Honeypot (invisible to humans, bots fill it) ── */}
                        <div className="contact__honeypot" aria-hidden="true">
                            <input
                                type="text"
                                name="website"
                                tabIndex={-1}
                                autoComplete="off"
                                value={honeypot}
                                onChange={(e) => setHoneypot(e.target.value)}
                            />
                        </div>

                        <div className="contact__row">
                            <div className="contact__field">
                                <label className="contact__label" htmlFor="ct-name">Your Name</label>
                                <input
                                    id="ct-name"
                                    className={`contact__input${errors.name ? ' contact__input--error' : ''}`}
                                    type="text"
                                    placeholder="Cardo Dalisay"
                                    value={form.name}
                                    onChange={handleChange('name')}
                                />
                                {errors.name && <span className="contact__field-error">{errors.name}</span>}
                            </div>
                            <div className="contact__field">
                                <label className="contact__label" htmlFor="ct-email">Email Address</label>
                                <input
                                    id="ct-email"
                                    className={`contact__input${errors.email ? ' contact__input--error' : ''}`}
                                    type="email"
                                    placeholder="cardo.dalisay@gmail.com"
                                    value={form.email}
                                    onChange={handleChange('email')}
                                />
                                {errors.email && <span className="contact__field-error">{errors.email}</span>}
                            </div>
                        </div>

                        <div className="contact__field">
                            <label className="contact__label" htmlFor="ct-service">Service Interested In</label>
                            <select
                                id="ct-service"
                                className={`contact__input contact__select${errors.service ? ' contact__input--error' : ''}`}
                                value={form.service}
                                onChange={handleChange('service')}
                            >
                                <option value="">Select a service...</option>
                                <option value="Per Video ($49)">Per Video — $49/video</option>
                                <option value="Monthly Retainer ($1,000)">Monthly Retainer — $1,000/month</option>
                                <option value="Custom Package">Custom Package</option>
                            </select>
                            {errors.service && <span className="contact__field-error">{errors.service}</span>}
                        </div>

                        <div className="contact__field">
                            <label className="contact__label" htmlFor="ct-message">Tell me about your project</label>
                            <textarea
                                id="ct-message"
                                className={`contact__input contact__textarea${errors.message ? ' contact__input--error' : ''}`}
                                rows={5}
                                placeholder="What kind of content do you create? What platforms? What's your goal?"
                                value={form.message}
                                onChange={handleChange('message')}
                            />
                            {errors.message && <span className="contact__field-error">{errors.message}</span>}
                        </div>

                        {/* ── Google reCAPTCHA v2 ── */}
                        <div className="contact__recaptcha-wrap">
                            <ReCAPTCHA
                                ref={recaptchaRef}
                                sitekey={RECAPTCHA_SITE_KEY}
                                theme="dark"
                                onChange={(token) => {
                                    setCaptchaToken(token);
                                    setCaptchaError(false);
                                }}
                                onExpired={() => {
                                    setCaptchaToken(null);
                                    setCaptchaError(false);
                                }}
                            />
                            {captchaError && (
                                <p className="contact__captcha-msg">Please complete the reCAPTCHA verification.</p>
                            )}
                        </div>

                        <button
                            type="submit"
                            id="ct-submit"
                            className="contact__submit"
                            disabled={status === 'sending'}
                        >
                            {status === 'sending'
                                ? 'Sending…'
                                : status === 'sent'
                                    ? '✓ Message Sent!'
                                    : 'Send Message'}
                        </button>

                        {status === 'rate-limited' && (
                            <p className="contact__error">
                                Too many messages sent. Please wait an hour before trying again.
                            </p>
                        )}
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