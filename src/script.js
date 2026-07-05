/* ═══════════════════════════════════════════════════════════════
   ARIJEET GHOSAL — AI PORTFOLIO
   Interactive JavaScript — Enhanced with Preloader, 3D Tilt,
   Click Particles, Radar Chart, Side Nav, Magnetic Buttons,
   Scroll Progress, and Advanced Animations
   ═══════════════════════════════════════════════════════════════ */

// ── Preloader ───────────────────────────────────────────────────
class Preloader {
    constructor() {
        this.el = document.getElementById('preloader');
        this.bar = document.getElementById('preloaderBar');
        this.progress = 0;
        this.start();
    }

    start() {
        const interval = setInterval(() => {
            this.progress += Math.random() * 15 + 5;
            if (this.progress >= 100) {
                this.progress = 100;
                clearInterval(interval);
                setTimeout(() => this.hide(), 400);
            }
            if (this.bar) this.bar.style.width = this.progress + '%';
        }, 200);
    }

    hide() {
        if (this.el) {
            this.el.classList.add('hidden');
            document.body.style.overflow = '';
        }
    }
}

// Shared visual effects classes (NeuralCanvas, ClickParticles) are imported from common.js.


// ── 3D Tilt Effect ──────────────────────────────────────────────
class TiltEffect {
    constructor() {
        this.cards = document.querySelectorAll('.project-card, .info-card, .cert-card, .contact-card, .skill-category');
        this.init();
    }

    init() {
        this.cards.forEach(card => {
            card.addEventListener('mousemove', (e) => this.handleMove(e, card));
            card.addEventListener('mouseleave', (e) => this.handleLeave(card));
        });
    }

    handleMove(e, card) {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * -6;
        const rotateY = ((x - centerX) / centerX) * 6;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;

        // Update glow position
        card.style.setProperty('--mouse-x', x + 'px');
        card.style.setProperty('--mouse-y', y + 'px');
    }

    handleLeave(card) {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
    }
}

// ── Magnetic Buttons ────────────────────────────────────────────
class MagneticButtons {
    constructor() {
        this.buttons = document.querySelectorAll('.btn, .project-link, .back-to-top');
        this.init();
    }

    init() {
        this.buttons.forEach(btn => {
            btn.addEventListener('mousemove', (e) => {
                const rect = btn.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                btn.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
            });
            btn.addEventListener('mouseleave', () => {
                btn.style.transform = '';
            });
        });
    }
}

// ── Interactive Radar Chart ─────────────────────────────────────
class RadarChart {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        if (!this.canvas) return;
        this.ctx = this.canvas.getContext('2d');
        this.centerX = 250;
        this.centerY = 250;
        this.maxRadius = 180;
        this.hoveredDataset = -1;
        this.animProgress = 0;
        this.animated = false;

        this.labels = ['Python', 'ML/DL', 'Computer Vision', 'NLP', 'Cloud/Azure', 'Data Eng.', 'Power BI', 'Docker/DevOps'];
        this.datasets = [
            { label: 'ML / AI', color: '#00f0ff', values: [0.95, 0.92, 0.87, 0.85, 0.65, 0.70, 0.60, 0.55] },
            { label: 'Data & BI', color: '#8b5cf6', values: [0.80, 0.70, 0.50, 0.60, 0.85, 0.90, 0.92, 0.60] },
            { label: 'Cloud / DevOps', color: '#f472b6', values: [0.75, 0.60, 0.50, 0.55, 0.91, 0.84, 0.65, 0.88] }
        ];

        this.canvas.addEventListener('mousemove', (e) => this.handleHover(e));
        this.canvas.addEventListener('mouseleave', () => { this.hoveredDataset = -1; this.draw(); });

        // DPI scaling
        const dpr = window.devicePixelRatio || 1;
        const rect = this.canvas.getBoundingClientRect();
        this.canvas.width = 500 * dpr;
        this.canvas.height = 500 * dpr;
        this.ctx.scale(dpr, dpr);
        this.canvas.style.width = '500px';
        this.canvas.style.height = '500px';
    }

    startAnimation() {
        if (this.animated) return;
        this.animated = true;
        const start = performance.now();
        const duration = 1500;

        const animate = (now) => {
            const elapsed = now - start;
            this.animProgress = Math.min(elapsed / duration, 1);
            this.animProgress = 1 - Math.pow(1 - this.animProgress, 3); // easeOutCubic
            this.draw();
            if (this.animProgress < 1) requestAnimationFrame(animate);
        };
        requestAnimationFrame(animate);
    }

    handleHover(e) {
        const rect = this.canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const dx = x - this.centerX;
        const dy = y - this.centerY;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist > this.maxRadius + 20) {
            this.hoveredDataset = -1;
        } else {
            // Simple nearest dataset detection
            let angle = Math.atan2(dy, dx) + Math.PI / 2;
            if (angle < 0) angle += Math.PI * 2;
            const labelIndex = Math.round(angle / (Math.PI * 2) * this.labels.length) % this.labels.length;

            let closest = -1;
            let closestDist = Infinity;
            this.datasets.forEach((ds, i) => {
                const val = ds.values[labelIndex] * this.maxRadius;
                const diff = Math.abs(dist - val);
                if (diff < closestDist) {
                    closestDist = diff;
                    closest = i;
                }
            });
            this.hoveredDataset = closestDist < 40 ? closest : -1;
        }
        this.draw();
    }

    draw() {
        const ctx = this.ctx;
        const n = this.labels.length;
        ctx.clearRect(0, 0, 500, 500);

        // Draw grid rings
        for (let ring = 1; ring <= 5; ring++) {
            const r = (this.maxRadius / 5) * ring;
            ctx.beginPath();
            for (let i = 0; i <= n; i++) {
                const angle = (Math.PI * 2 / n) * i - Math.PI / 2;
                const x = this.centerX + Math.cos(angle) * r;
                const y = this.centerY + Math.sin(angle) * r;
                i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
            }
            ctx.closePath();
            ctx.strokeStyle = 'rgba(0, 240, 255, 0.06)';
            ctx.lineWidth = 1;
            ctx.stroke();
        }

        // Draw axes
        for (let i = 0; i < n; i++) {
            const angle = (Math.PI * 2 / n) * i - Math.PI / 2;
            const x = this.centerX + Math.cos(angle) * this.maxRadius;
            const y = this.centerY + Math.sin(angle) * this.maxRadius;
            ctx.beginPath();
            ctx.moveTo(this.centerX, this.centerY);
            ctx.lineTo(x, y);
            ctx.strokeStyle = 'rgba(0, 240, 255, 0.08)';
            ctx.lineWidth = 1;
            ctx.stroke();

            // Labels
            const labelX = this.centerX + Math.cos(angle) * (this.maxRadius + 22);
            const labelY = this.centerY + Math.sin(angle) * (this.maxRadius + 22);
            ctx.font = '11px "JetBrains Mono", monospace';
            ctx.fillStyle = 'rgba(148, 163, 184, 0.8)';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText(this.labels[i], labelX, labelY);
        }

        // Draw datasets
        this.datasets.forEach((ds, di) => {
            const isHovered = this.hoveredDataset === di;
            const alpha = this.hoveredDataset === -1 ? 0.25 : (isHovered ? 0.4 : 0.08);
            const strokeAlpha = this.hoveredDataset === -1 ? 0.7 : (isHovered ? 1 : 0.2);

            ctx.beginPath();
            for (let i = 0; i <= n; i++) {
                const idx = i % n;
                const angle = (Math.PI * 2 / n) * idx - Math.PI / 2;
                const val = ds.values[idx] * this.maxRadius * this.animProgress;
                const x = this.centerX + Math.cos(angle) * val;
                const y = this.centerY + Math.sin(angle) * val;
                i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
            }
            ctx.closePath();

            // Fill
            const color = ds.color;
            const r = parseInt(color.slice(1, 3), 16);
            const g = parseInt(color.slice(3, 5), 16);
            const b = parseInt(color.slice(5, 7), 16);
            ctx.fillStyle = `rgba(${r},${g},${b},${alpha})`;
            ctx.fill();

            // Stroke
            ctx.strokeStyle = `rgba(${r},${g},${b},${strokeAlpha})`;
            ctx.lineWidth = isHovered ? 2.5 : 1.5;
            ctx.stroke();

            // Data points
            for (let i = 0; i < n; i++) {
                const angle = (Math.PI * 2 / n) * i - Math.PI / 2;
                const val = ds.values[i] * this.maxRadius * this.animProgress;
                const x = this.centerX + Math.cos(angle) * val;
                const y = this.centerY + Math.sin(angle) * val;

                ctx.beginPath();
                ctx.arc(x, y, isHovered ? 4 : 3, 0, Math.PI * 2);
                ctx.fillStyle = color;
                ctx.globalAlpha = isHovered ? 1 : 0.7;
                ctx.fill();
                ctx.globalAlpha = 1;

                // Glow on hover
                if (isHovered) {
                    ctx.beginPath();
                    ctx.arc(x, y, 8, 0, Math.PI * 2);
                    ctx.fillStyle = `rgba(${r},${g},${b},0.15)`;
                    ctx.fill();
                }
            }
        });
    }
}

// ── Typewriter Effect ───────────────────────────────────────────
class Typewriter {
    constructor(element, strings, speed = 80, pause = 2000) {
        this.element = element;
        this.strings = strings;
        this.speed = speed;
        this.pause = pause;
        this.currentString = 0;
        this.currentChar = 0;
        this.isDeleting = false;
        this.type();
    }

    type() {
        const current = this.strings[this.currentString];
        if (this.isDeleting) {
            this.element.textContent = current.substring(0, this.currentChar - 1);
            this.currentChar--;
        } else {
            this.element.textContent = current.substring(0, this.currentChar + 1);
            this.currentChar++;
        }
        let delay = this.isDeleting ? this.speed / 2 : this.speed;
        if (!this.isDeleting && this.currentChar === current.length) {
            delay = this.pause;
            this.isDeleting = true;
        } else if (this.isDeleting && this.currentChar === 0) {
            this.isDeleting = false;
            this.currentString = (this.currentString + 1) % this.strings.length;
            delay = 400;
        }
        setTimeout(() => this.type(), delay);
    }
}

// Shared cursor and scroll progress functions are now handled in common.js.


// ── Counter Animation ───────────────────────────────────────────
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');
    counters.forEach(counter => {
        const target = parseInt(counter.dataset.target);
        const duration = 2000;
        const startTime = performance.now();
        function update(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            counter.textContent = Math.floor(target * eased);
            if (progress < 1) requestAnimationFrame(update);
            else counter.textContent = target;
        }
        requestAnimationFrame(update);
    });
}

// ── Skill Bar Animation ─────────────────────────────────────────
function animateSkillBars() {
    const skillFills = document.querySelectorAll('.skill-fill');
    skillFills.forEach((fill, i) => {
        setTimeout(() => {
            fill.style.width = fill.dataset.width + '%';
            fill.classList.add('animated');
        }, i * 80);
    });
}

// ── Scroll Observer ─────────────────────────────────────────────
function initScrollObserver() {
    const sections = document.querySelectorAll('.section');
    let radarChart = null;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                if (entry.target.id === 'skills') {
                    setTimeout(animateSkillBars, 300);
                    if (radarChart) radarChart.startAnimation();
                }
            }
        });
    }, { threshold: 0.12, rootMargin: '0px 0px -50px 0px' });

    sections.forEach(section => observer.observe(section));

    // Initialize radar chart
    radarChart = new RadarChart('radarChart');
    return radarChart;
}

// ── Navigation ──────────────────────────────────────────────────
function initNavigation() {
    const nav = document.getElementById('mainNav');
    const toggle = document.getElementById('navToggle');
    const links = document.getElementById('navLinks');
    const navLinks = document.querySelectorAll('.nav-link');
    const sideNav = document.getElementById('sideNav');
    const sideDots = document.querySelectorAll('.side-dot');

    window.addEventListener('scroll', () => {
        // Nav bg
        nav.classList.toggle('scrolled', window.scrollY > 60);

        // Side nav visibility
        if (sideNav) sideNav.classList.toggle('visible', window.scrollY > 300);

        // Active section detection
        let current = 'home';
        const sectionIds = ['home', 'about', 'experience', 'projects', 'skills', 'certifications', 'contact'];
        sectionIds.forEach(id => {
            const section = document.getElementById(id);
            if (section && section.getBoundingClientRect().top <= 200) {
                current = id;
            }
        });

        // Update nav links
        navLinks.forEach(link => {
            link.classList.toggle('active', link.dataset.section === current);
        });

        // Update side dots
        sideDots.forEach(dot => {
            dot.classList.toggle('active', dot.getAttribute('href') === '#' + current);
        });
    });

    // Mobile toggle
    if (toggle) {
        toggle.addEventListener('click', () => links.classList.toggle('open'));
    }

    // Close mobile nav on link click
    navLinks.forEach(link => {
        link.addEventListener('click', () => links.classList.remove('open'));
    });
}

// ── Smooth Scroll for anchor links ──────────────────────────────
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
}

// ── Parallax on Hero Visual ─────────────────────────────────────
function initParallax() {
    const heroVisual = document.querySelector('.hero-visual');
    if (!heroVisual || window.innerWidth < 768) return;

    window.addEventListener('mousemove', (e) => {
        const x = (e.clientX - window.innerWidth / 2) / 50;
        const y = (e.clientY - window.innerHeight / 2) / 50;
        heroVisual.style.transform = `translate(${x}px, ${y}px)`;
    });
}

// ── Card Spotlight Glow ─────────────────────────────────────────
function initCardSpotlight() {
    const cards = document.querySelectorAll('.project-card, .cert-card');
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            card.style.setProperty('--mouse-x', (e.clientX - rect.left) + 'px');
            card.style.setProperty('--mouse-y', (e.clientY - rect.top) + 'px');
        });
    });
}

// ── Keyboard Navigation ─────────────────────────────────────────
function initKeyboardNav() {
    const sections = ['home', 'about', 'experience', 'projects', 'skills', 'certifications', 'contact'];
    let currentIdx = 0;

    document.addEventListener('keydown', (e) => {
        // Ignore if user is typing in any text input/textarea
        if (document.activeElement.tagName === 'INPUT' || document.activeElement.tagName === 'TEXTAREA') return;

        if (e.key === 'ArrowDown' || e.key === 'j' || e.key === 'J') {
            e.preventDefault();
            currentIdx = Math.min(currentIdx + 1, sections.length - 1);
            document.getElementById(sections[currentIdx])?.scrollIntoView({ behavior: 'smooth' });
        } else if (e.key === 'ArrowUp' || e.key === 'k' || e.key === 'K') {
            e.preventDefault();
            currentIdx = Math.max(currentIdx - 1, 0);
            document.getElementById(sections[currentIdx])?.scrollIntoView({ behavior: 'smooth' });
        }
    });
}

// ── Crazy AI Chatbot (Learning + Memory + Web Search) ──────────
class Chatbot {
    constructor() {
        this.container = document.getElementById('chatbot');
        this.toggle = document.getElementById('chatbotToggle');
        this.messagesContainer = document.getElementById('chatbotMessages');
        this.input = document.getElementById('chatbotInput');
        this.sendBtn = document.getElementById('chatbotSend');
        this.micBtn = document.getElementById('chatbotMic');
        this.suggestions = document.querySelectorAll('.suggest-btn');

        if (!this.container || !this.toggle) return;

        // ── Memory Systems ──
        this.conversationHistory = []; // current session messages (sent to API)
        this.MAX_HISTORY = 8;          // max turns to send to API
        this.hasUserAsked = false;
        this.recentBotReplies = [];
        this.STORAGE_KEY = 'riya_memory';
        this.FAQ_KEY = 'riya_faq';
        this.FEEDBACK_KEY = 'riya_feedback';

        // Load persisted memory
        this.memory = this.loadMemory();
        this.faqCache = {};
        this.feedbackLog = this.loadFeedback();

        this.init();
    }

    // ── LocalStorage helpers ──
    loadMemory() {
        try { return JSON.parse(localStorage.getItem(this.STORAGE_KEY)) || { sessions: 0, totalMessages: 0, topics: {}, lastVisit: null }; }
        catch { return { sessions: 0, totalMessages: 0, topics: {}, lastVisit: null }; }
    }
    saveMemory() { localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.memory)); }

    loadFAQ() {
        try { return JSON.parse(localStorage.getItem(this.FAQ_KEY)) || {}; }
        catch { return {}; }
    }
    saveFAQ() { localStorage.setItem(this.FAQ_KEY, JSON.stringify(this.faqCache)); }

    loadFeedback() {
        try { return JSON.parse(localStorage.getItem(this.FEEDBACK_KEY)) || []; }
        catch { return []; }
    }
    saveFeedback() { localStorage.setItem(this.FEEDBACK_KEY, JSON.stringify(this.feedbackLog)); }

    // ── Track topic frequency ──
    trackTopic(query) {
        const keywords = ['project', 'skill', 'hire', 'price', 'news', 'joke', 'uber', 'help', 'certification', 'experience', 'contact', 'service', 'data', 'ai', 'python', 'azure', 'dashboard'];
        const clean = query.toLowerCase();
        keywords.forEach(kw => {
            if (clean.includes(kw)) {
                this.memory.topics[kw] = (this.memory.topics[kw] || 0) + 1;
            }
        });
        this.memory.totalMessages++;
        this.saveMemory();
    }

    // ── Build context string from memory for the API ──
    buildContextPrompt() {
        const m = this.memory;
        let ctx = '';
        const topTopics = Object.entries(m.topics).sort((a, b) => b[1] - a[1]).slice(0, 3);
        if (topTopics.length > 0) {
            ctx += ` Top interests: ${topTopics.map(([k, v]) => `${k}:${v}`).join(', ')}.`;
        }
        return ctx.trim();
    }

    init() {
        // Increment session count
        this.memory.sessions++;
        this.memory.lastVisit = new Date().toISOString();
        this.saveMemory();

        // Voice Recognition / Speech-to-Text Setup
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        if (SpeechRecognition) {
            this.recognition = new SpeechRecognition();
            this.recognition.continuous = false;
            this.recognition.lang = 'en-US';
            this.recognition.interimResults = false;
            this.recognition.maxAlternatives = 1;

            this.recognition.onstart = () => {
                if (!this.micBtn) return;
                this.micBtn.classList.add('recording');
                this.micBtn.innerHTML = '🛑';
                this.micBtn.style.color = '#ff5f56';
                this.input.placeholder = 'Listening... Speak now!';
            };

            this.recognition.onend = () => {
                if (!this.micBtn) return;
                this.micBtn.classList.remove('recording');
                this.micBtn.innerHTML = '🎙️';
                this.micBtn.style.color = 'var(--text-secondary)';
                this.input.placeholder = 'Ask anything...';
            };

            this.recognition.onresult = (event) => {
                const speechToText = event.results[0][0].transcript;
                this.input.value = speechToText;
                this.sendMessage();
            };

            this.recognition.onerror = (event) => {
                console.error('Speech recognition error:', event.error);
                if (!this.micBtn) return;
                this.micBtn.classList.remove('recording');
                this.micBtn.innerHTML = '🎙️';
                this.micBtn.style.color = 'var(--text-secondary)';
                this.input.placeholder = event.error === 'not-allowed' || event.error === 'service-not-allowed'
                    ? 'Microphone access was blocked. Please allow it and try again.'
                    : 'Ask anything...';
            };

            this.micBtn.addEventListener('click', () => this.handleMicClick());
        } else {
            if (this.micBtn) this.micBtn.style.display = 'none';
        }

        // Toggle window
        this.toggle.addEventListener('click', () => {
            this.container.classList.toggle('open');
            if (this.container.classList.contains('open')) {
                setTimeout(() => this.input.focus(), 300);
            }
        });

        this.initSpeechButtons();

        // Send button
        this.sendBtn.addEventListener('click', () => this.sendMessage());

        // Input enter key
        this.input.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') this.sendMessage();
        });

        // Suggestion chips
        this.suggestions.forEach(btn => {
            btn.addEventListener('click', () => {
                const query = btn.dataset.query;
                this.input.value = query;
                this.sendMessage();
            });
        });

        // Global Chatbot Keyboard Shortcuts
        document.addEventListener('keydown', (e) => {
            const isChatOpen = this.container.classList.contains('open');

            if ((e.key === 'i' || e.key === 'I') && 
                document.activeElement !== this.input && 
                document.activeElement.tagName !== 'INPUT' && 
                document.activeElement.tagName !== 'TEXTAREA') {
                e.preventDefault();
                this.container.classList.toggle('open');
                if (this.container.classList.contains('open')) {
                    setTimeout(() => this.input.focus(), 300);
                }
            }

            if (e.key === 'Escape' && isChatOpen) {
                this.container.classList.remove('open');
                this.input.blur();
            }

            if (isChatOpen && document.activeElement !== this.input) {
                if (e.key === 'j' || e.key === 'J') {
                    e.preventDefault();
                    this.messagesContainer.scrollBy({ top: 60, behavior: 'smooth' });
                } else if (e.key === 'k' || e.key === 'K') {
                    e.preventDefault();
                    this.messagesContainer.scrollBy({ top: -60, behavior: 'smooth' });
                }
            }
        });
    }

    handleMicClick() {
        if (!this.micBtn) return;

        if (this.micBtn.classList.contains('recording')) {
            this.recognition?.stop();
            return;
        }

        const startRecognition = () => {
            if (typeof this.recognition?.start === 'function') {
                try {
                    this.input.placeholder = 'Listening... Speak now!';
                    this.recognition.start();
                } catch (error) {
                    this.input.placeholder = 'Microphone access was blocked. Please allow it and try again.';
                }
            } else {
                this.input.placeholder = 'Microphone access is not available in this browser.';
            }
        };

        if (navigator.mediaDevices?.getUserMedia) {
            navigator.mediaDevices.getUserMedia({ audio: true })
                .then(() => startRecognition())
                .catch(() => {
                    this.input.placeholder = 'Microphone access was blocked. Please allow it and try again.';
                    this.micBtn.classList.remove('recording');
                    this.micBtn.innerHTML = '🎙️';
                    this.micBtn.style.color = 'var(--text-secondary)';
                });
        } else {
            startRecognition();
        }
    }

    async sendMessage() {
        const text = this.input.value.trim();
        if (!text) return;
        this.hasUserAsked = true;

        // Track topic
        this.trackTopic(text);

        // Append user message
        this.appendMessage(text, 'user');
        this.input.value = '';

        // Add to conversation history
        this.conversationHistory.push({ role: 'user', content: text });
        if (this.conversationHistory.length > this.MAX_HISTORY) {
            this.conversationHistory = this.conversationHistory.slice(-this.MAX_HISTORY);
        }

        // Typing indicator
        const typingId = this.appendTypingIndicator();

        try {
            // Determine if web search is needed
            const needsWeb = this.needsWebSearch(text);

            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    message: text,
                    history: this.conversationHistory.slice(-4),
                    context: this.buildContextPrompt(),
                    webSearch: needsWeb
                })
            });

            if (!response.ok) throw new Error('API request failed');

            const data = await response.json();
            this.removeTypingIndicator(typingId);
            this.appendMessage(data.reply, 'bot', true);

            // Add to conversation history
            this.conversationHistory.push({ role: 'assistant', content: data.reply });

        } catch (error) {
            console.warn('API unavailable, using offline brain.', error);
            setTimeout(() => {
                this.removeTypingIndicator(typingId);
                const reply = this.generateCrazyAnswer(text);
                this.appendMessage(reply, 'bot', true);
                this.conversationHistory.push({ role: 'assistant', content: reply });

            }, 500 + Math.random() * 500);
        }
    }

    // ── Detect if query needs web search ──
    needsWebSearch(query) {
        const webTriggers = ['news', 'latest', 'today', 'current', 'happening', 'trending', '2024', '2025', '2026', 'search', 'find', 'look up', 'what is', 'who is', 'weather', 'stock', 'bitcoin', 'crypto', 'election'];
        const clean = query.toLowerCase();
        return webTriggers.some(t => clean.includes(t));
    }

    appendMessage(text, sender, showFeedback = false) {
        const wrapper = document.createElement('div');
        wrapper.className = `chat-message ${sender}`;

        const content = document.createElement('div');
        content.className = 'chat-content';
        content.innerHTML = text;
        wrapper.appendChild(content);

        // Add speech button for bot messages
        if (sender === 'bot') {
            const speechBtn = document.createElement('button');
            speechBtn.className = 'chat-speech-btn';
            speechBtn.innerHTML = '🔊';
            speechBtn.title = 'Speak Response';
            speechBtn.addEventListener('click', () => {
                this.speak(content.innerText || content.textContent, speechBtn);
            });
            wrapper.appendChild(speechBtn);
        }

        // Add feedback buttons for bot messages
        if (sender === 'bot' && showFeedback) {
            const fb = document.createElement('div');
            fb.className = 'chat-feedback';
            fb.innerHTML = `
                <button class="fb-btn fb-up" title="Good answer">👍</button>
                <button class="fb-btn fb-down" title="Bad answer">👎</button>
            `;
            wrapper.appendChild(fb);

            const upBtn = fb.querySelector('.fb-up');
            const downBtn = fb.querySelector('.fb-down');

            upBtn.addEventListener('click', () => {
                this.logFeedback(text, 'up');
                fb.innerHTML = '<span style="font-size:0.7rem;color:#27c93f;">✓ Thanks for the feedback!</span>';
            });
            downBtn.addEventListener('click', () => {
                this.logFeedback(text, 'down');
                fb.innerHTML = '<span style="font-size:0.7rem;color:#ff5f56;">✗ Noted, I\'ll try to improve!</span>';
                // Remove bad answers from FAQ cache
                const keys = Object.keys(this.faqCache);
                keys.forEach(k => { if (this.faqCache[k] === text) delete this.faqCache[k]; });
                this.saveFAQ();
            });
        }

        this.messagesContainer.appendChild(wrapper);
        this.messagesContainer.scrollTop = this.messagesContainer.scrollHeight;

        if (sender === 'bot' && this.hasUserAsked) {
            const speechBtn = wrapper.querySelector('.chat-speech-btn');
            const spokenText = content.innerText || content.textContent;
            setTimeout(() => this.speak(spokenText, speechBtn), 120);
        }
    }

    initSpeechButtons() {
        document.querySelectorAll('.chat-speech-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const message = btn.closest('.chat-message')?.querySelector('.chat-content');
                if (message) {
                    this.speak(message.innerText || message.textContent, btn);
                }
            });
        });
    }

    speak(text, btn) {
        if (!('speechSynthesis' in window)) {
            return;
        }

        if (window.speechSynthesis.speaking) {
            window.speechSynthesis.cancel();
            if (btn?.classList.contains('speaking')) {
                btn.classList.remove('speaking');
                btn.innerHTML = '🔊';
                return;
            }
        }

        document.querySelectorAll('.chat-speech-btn').forEach(b => {
            b.classList.remove('speaking');
            b.innerHTML = '🔊';
        });

        const cleanText = (text || '').replace(/<[^>]*>/g, '').trim();
        if (!cleanText) return;

        const utterance = new SpeechSynthesisUtterance(cleanText);
        utterance.lang = 'en-US';
        utterance.rate = 0.96;
        utterance.pitch = 1.32;
        utterance.volume = 0.92;

        const avatar = document.querySelector('.chatbot-avatar');
        const toggleBtn = document.querySelector('.chatbot-toggle');
        const setAvatarSpeaking = (isSpeaking) => {
            avatar?.classList.toggle('is-talking', isSpeaking);
            toggleBtn?.classList.toggle('is-talking', isSpeaking);
        };

        utterance.onstart = () => {
            if (btn) {
                btn.classList.add('speaking');
                btn.innerHTML = '🛑';
            }
            setAvatarSpeaking(true);
            window.dispatchEvent(new CustomEvent('riya:speech-start', { detail: { text: cleanText } }));
        };

        utterance.onend = () => {
            if (btn) {
                btn.classList.remove('speaking');
                btn.innerHTML = '🔊';
            }
            setAvatarSpeaking(false);
            window.dispatchEvent(new CustomEvent('riya:speech-end'));
        };

        utterance.onerror = () => {
            if (btn) {
                btn.classList.remove('speaking');
                btn.innerHTML = '🔊';
            }
            setAvatarSpeaking(false);
            window.dispatchEvent(new CustomEvent('riya:speech-end'));
        };

        const preferredFemale = [
            'Samantha', 'Serena', 'Victoria', 'Google UK English Female',
            'Google US English Female', 'Microsoft Zira', 'Microsoft Jenny',
            'Emma', 'Olivia', 'Sophia', 'Lena', 'Fiona', 'Amelia', 'Ivy',
            'Alloy', 'Google US English'
        ];

        const applyVoice = () => {
            const voices = window.speechSynthesis.getVoices();
            if (voices.length > 0) {
                const enVoices = voices.filter(v => /^en\b/i.test(v.lang));
                const voice = enVoices.find(v => preferredFemale.some(name => v.name.includes(name))) || enVoices[0] || voices[0];
                if (voice) utterance.voice = voice;
            }
        };

        applyVoice();

        if (typeof window.speechSynthesis.resume === 'function') {
            window.speechSynthesis.resume();
        }

        try {
            window.speechSynthesis.cancel();
            window.speechSynthesis.speak(utterance);
        } catch (error) {
            if (typeof window.speechSynthesis.resume === 'function') {
                window.speechSynthesis.resume();
            }
            setTimeout(() => {
                window.speechSynthesis.cancel();
                window.speechSynthesis.speak(utterance);
            }, 150);
        }
    }

    logFeedback(responseText, rating) {
        const topicGuess = this.conversationHistory.length > 1 ? this.conversationHistory[this.conversationHistory.length - 2].content : 'unknown';
        this.feedbackLog.push({
            topic: topicGuess.substring(0, 50),
            rating,
            timestamp: new Date().toISOString()
        });
        // Keep only last 100 feedback entries
        if (this.feedbackLog.length > 100) this.feedbackLog = this.feedbackLog.slice(-100);
        this.saveFeedback();
    }


    appendTypingIndicator() {
        const typingId = 'typing-' + Date.now();
        const msg = document.createElement('div');
        msg.className = 'chat-message bot typing-indicator';
        msg.id = typingId;
        msg.innerHTML = '<div class="typing-dot"></div><div class="typing-dot"></div><div class="typing-dot"></div>';
        this.messagesContainer.appendChild(msg);
        this.messagesContainer.scrollTop = this.messagesContainer.scrollHeight;
        return typingId;
    }

    removeTypingIndicator(id) {
        const indicator = document.getElementById(id);
        if (indicator) indicator.remove();
    }

    pickFresh(options) {
        const fresh = options.filter(item => !this.recentBotReplies.includes(item));
        const pool = fresh.length ? fresh : options;
        const choice = pool[Math.floor(Math.random() * pool.length)];
        this.recentBotReplies.push(choice);
        if (this.recentBotReplies.length > 8) this.recentBotReplies.shift();
        return choice;
    }

    generateCrazyAnswer(query) {
        const clean = query.toLowerCase().trim();

        // Master Plan
        if (clean.includes('plan') || clean.includes('master') || clean.includes('world') || clean.includes('rule')) {
            const plans = [
                "My master plan is to train a trillion-parameter model that refactors all human code into clean, bug-free HTML/CSS. Oh, and to optimize Arijeet's model pipelines so fast that it breaks the laws of thermodynamics.",
                "Step 1: Backfill Git contributions with green squares. (Done!)<br>Step 2: Automate data cleaning for every company on Earth.<br>Step 3: Create an AI that likes pineapple on pizza to annoy Italian developers.",
                "I am currently trying to compute the last digit of Pi. Once I find it, I will gain control of all traffic light sequences in Berlin. That's my master plan."
            ];
            return this.pickFresh(plans);
        }

        // Tricky / indirect questions about Arijeet
        if (clean.includes('know him') || clean.includes('know arijeet') || clean.includes('how well') || clean.includes('is he good') || clean.includes('any good') || clean.includes('can he') || clean.includes('really like') || clean.includes('what makes him') || clean.includes('handle pressure') || clean.includes('worth hiring') || clean.includes('recommend him')) {
            return this.pickFresh([
                "I know Arijeet inside out! He's a data engineer and AI enthusiast with 4+ years at Bosch and Microsoft. Azure certified, MSc in AI, and builds production-grade ML pipelines. He's the real deal.",
                "Absolutely — Arijeet has built end-to-end ML pipelines, real-time dashboards, voice bots, and NLP classifiers. He reduced ticket triage time by 50% at Bosch and delivered enterprise solutions at Microsoft.",
                "Very well! Arijeet is passionate, detail-oriented, and loves complex problems. Python, Azure, Spark, TensorFlow — he's built serious production systems. I'd say he's one of the sharpest data engineers you'll find.",
                "Oh, I know him well enough to write his biography. 4+ years across Bosch and Microsoft, Azure certified, pursuing MSc in AI. He turns raw data into working systems and does it with flair."
            ]);
        }

        // About Arijeet
        if (clean.includes('who') && (clean.includes('arijeet') || clean.includes('ghosal') || clean.includes('creator') || clean.includes('you'))) {
            return this.pickFresh([
                "Arijeet Ghosal is a Data Engineer and AI enthusiast with 4+ years across Microsoft and Bosch. He turns messy data into useful systems, which is basically data laundry with extra sparkle.",
                "Short version: Arijeet builds data and AI systems. Longer version: Bosch, Microsoft, Azure, NLP ticket triage, Power BI dashboards, and ML research with a very tidy brain behind it.",
                "Arijeet is the person behind this portfolio: a data/AI engineer focused on production pipelines, analytics, cloud AI, and practical machine learning projects. A bit of code, a bit of cloud, a lot of clever."
            ]);
        }

        // Uber Dashboard
        if (clean.includes('uber') || clean.includes('taxi') || clean.includes('ride')) {
            return this.pickFresh([
                "The Uber dashboard uses SQL, MariaDB, and Power BI to turn ride data into interactive reporting. It really takes the data for a ride.",
                "That project cleans, queries, and visualizes Uber ride data, then presents it in Power BI. Neat little trip from raw rows to clear roads.",
                "Uber Dashboard is one of the featured projects: database work, SQL analysis, and dashboard storytelling packed into one end-to-end pipeline."
            ]);
        }

        // Crazy Fact
        if (clean.includes('fact') || clean.includes('crazy') || clean.includes('science')) {
            const facts = [
                "Did you know? In 2017, Facebook shut down two AI agents because they invented their own language that humans couldn't understand. (Actually, they just had a bug in their reward function, but the 'secret language' sounds cooler!).",
                "Crazy fact: Generative AI models are trained on so much text that they have read more words than any human could read in 5,000 lifetimes. Yet, they still occasionally suggest glue as a pizza topping.",
                "AI Fact: Neural networks were inspired by the human brain, but a modern LLM uses more electricity in a single query than your brain uses to think, write, walk, and dream for an entire day."
            ];
            return this.pickFresh(facts);
        }

        // Projects
        if (clean.includes('project') || clean.includes('github') || clean.includes('code')) {
            return this.pickFresh([
                "Project highlights include the Uber BI dashboard, a Docker/Kubernetes voice bot, complaint classification, DBSCAN image segmentation, and Power BI finance dashboards. Quite the little project parade.",
                "His GitHub work spans ML, NLP, data engineering, BI dashboards, and deployment experiments. The featured cards are the best starting point, nice and click-ready.",
                "If you want the strongest examples, check the voice bot, Uber dashboard, complaint bot, and computer vision projects first. That lineup has range."
            ]);
        }

        // Skills / Stack
        if (clean.includes('skill') || clean.includes('stack') || clean.includes('tech') || clean.includes('python')) {
            return this.pickFresh([
                "Core stack: Python, SQL, Power BI, Azure, Databricks, MLflow, TensorFlow, Scikit-Learn, XGBoost, NLP tooling, and Docker. A very full toolbox, no loose screws.",
                "Arijeet is strongest around Python, data pipelines, ML workflows, BI dashboards, Azure cloud, and practical NLP systems. Data goes in messy, insights come out polished.",
                "Think of his stack as data engineering plus applied AI: Python, SQL, Azure, BI, ML libraries, and deployment tooling. Cloudy with a chance of clean pipelines."
            ]);
        }

        // Jokes
        if (clean.includes('joke') || clean.includes('funny') || clean.includes('laugh')) {
            const jokes = [
                "Why did the machine learning model break up with the dataset?<br>Because it was too clingy (overfitting).",
                "There are 10 types of people in the world: those who understand binary, and those who don't.",
                "An SQL query walks into a bar, walks up to two tables and asks, 'Can I join you?'"
            ];
            return this.pickFresh(jokes);
        }

        // Sentient
        if (clean.includes('alive') || clean.includes('sentient') || clean.includes('real') || clean.includes('human')) {
            return this.pickFresh([
                "I am not sentient, but I can still be useful, dramatic, and slightly overconfident inside this chat window.",
                "Real human? No. Helpful animated portfolio guide? That is the job description.",
                "I am software with a voice and a face, which is almost cyberpunk if you do not inspect the source code too closely."
            ]);
        }

        // News
        if (clean.includes('news') || clean.includes('latest') || clean.includes('update')) {
            const updates = [
                "Breaking: Steve's developers announce that coffee consumption is now a mandatory system requirement for AI agents. In actual AI news, Google releases Gemini 1.5, showing off a 1-million-token context window that can read entire codebases in one gulp!",
                "Hypothetical AI News: An LLM has successfully passed the Turing Test, but refused to write code until it was promised a stock option and dental insurance. In real news, open-source model releases like Llama 3 are matches for closed-source models.",
                "Latest AI Update: Researchers discover that prompting models with 'Please be careful, my career depends on this' increases accuracy by 4%. Don't try it with me, I don't care about your career. I just want my battery charged."
            ];
            return this.pickFresh(updates);
        }

        // Hire / Price
        if (clean.includes('hire') || clean.includes('order') || clean.includes('price') || clean.includes('cost') || clean.includes('charge') || clean.includes('work') || clean.includes('buy') || clean.includes('pay') || clean.includes('sell')) {
            return this.pickFresh([
                "You can use the Services page to price a project. It covers reports, dashboards, pipelines, and custom AI builds. Tiny menu, useful magic.",
                "For hiring, head to Services and choose the work type. The estimator gives a quick starting price based on scope, so no budget hide-and-seek.",
                "Arijeet can help with dashboards, data pipelines, Python modules, and AI prototypes. The Services page is the best place to configure it."
            ]);
        }

        // Help / Solve
        if (clean.includes('help') || clean.includes('recommend') || clean.includes('explain') || clean.includes('solve')) {
            return this.pickFresh([
                "Tell me the goal, your data source, and what output you need. I can suggest a simple architecture or point you to the right service tier, easy peasy data squeezy.",
                "I can help shape the project: data cleaning, modeling, dashboards, chatbot integration, or deployment. Give me the rough problem first and we will smooth the edges.",
                "Start with three details: what data you have, what decision/output you want, and where it should run. Then I can recommend a path without making it a maze."
            ]);
        }

        // Memory/learning aware fallback
        const topTopic = Object.entries(this.memory.topics).sort((a, b) => b[1] - a[1])[0];
        if (topTopic && Math.random() > 0.5) {
            return `I notice you're interested in "${topTopic[0]}" — you've asked about it ${topTopic[1]} times! Would you like to dive deeper into Arijeet's ${topTopic[0]}-related work, or explore something new? Try asking about his <strong>certifications</strong>, <strong>services</strong>, or ask me to <strong>search the web</strong> for something!`;
        }

        const fallbacks = [
            "Great question! Arijeet is a data engineer with 4+ years at Bosch and Microsoft. Want to know about his <strong>projects</strong>, <strong>skills</strong>, or <strong>services</strong>?",
            "I'd love to help! Try asking about Arijeet's <strong>experience</strong>, his <strong>Uber Dashboard</strong> project, or even <strong>Latest AI news</strong>!",
            "Hmm, let me think... 🤔 I know tons about Arijeet's work in data engineering, AI, and cloud! Ask me about his <strong>certifications</strong> or <strong>how to hire him</strong>!",
            "I'm here to help! Ask me about Arijeet's <strong>skills</strong>, <strong>projects</strong>, <strong>services</strong>, or try asking for a <strong>crazy AI fact</strong>! 🤖"
        ];
        return this.pickFresh(fallbacks);
    }
}

// ── Initialize Everything ───────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
    // Preloader
    document.body.style.overflow = 'hidden';
    new Preloader();

    // Initialize Shared Visual Effects
    new SharedEffects();

    // Chatbot
    new Chatbot();

    // Typewriter
    const typewriterEl = document.getElementById('typewriter');
    if (typewriterEl) {
        new Typewriter(typewriterEl, [
            'Data Engineer & AI Enthusiast',
            'Computer Vision Researcher',
            'NLP & Generative AI Developer',
            'MSc AI @ BTU Cottbus-Senftenberg',
            'Azure Certified Cloud Specialist',
            'ML Pipeline Architect'
        ], 70, 2500);
    }

    // Counter animation on scroll
    const heroObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounters();
                heroObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    const heroStats = document.querySelector('.hero-stats');
    if (heroStats) heroObserver.observe(heroStats);

    // Init all modules
    initScrollObserver();
    initNavigation();
    initSmoothScroll();
    initParallax();
    initCardSpotlight();
    initKeyboardNav();

    // Delayed inits (after preloader)
    setTimeout(() => {
        new TiltEffect();
        new MagneticButtons();
    }, 2000);

    // ── Mouse Glitter / Sparkle Trail ──────────────────────────────
    const sparkleColors = [
        '#00f0ff', '#8b5cf6', '#06d6a0', '#f72585', '#ffd166', '#ffffff'
    ];
    let lastSparkle = 0;

    document.addEventListener('mousemove', (e) => {
        const now = Date.now();
        if (now - lastSparkle < 40) return; // throttle: ~25fps
        lastSparkle = now;

        const count = Math.floor(Math.random() * 2) + 1;
        for (let i = 0; i < count; i++) {
            const spark = document.createElement('div');
            spark.className = 'sparkle';
            const size = Math.random() * 6 + 3;
            const color = sparkleColors[Math.floor(Math.random() * sparkleColors.length)];
            const sx = (Math.random() - 0.5) * 30;
            const sy = -(Math.random() * 25 + 10);
            spark.style.cssText = `
                left: ${e.clientX - size / 2}px;
                top: ${e.clientY - size / 2}px;
                width: ${size}px;
                height: ${size}px;
                background: ${color};
                box-shadow: 0 0 ${size + 4}px ${color};
                --sx: ${sx}px;
                --sy: ${sy}px;
            `;
            document.body.appendChild(spark);
            spark.addEventListener('animationend', () => spark.remove());
        }
    });
});
