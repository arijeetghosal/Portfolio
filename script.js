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

// ── Neural Network Particle Canvas ──────────────────────────────
class NeuralCanvas {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.particles = [];
        this.mouse = { x: -1000, y: -1000 };
        this.particleCount = window.innerWidth < 768 ? 60 : 120;
        this.connectionDistance = 150;
        this.mouseRadius = 200;
        this.resize();
        this.init();
        this.bindEvents();
        this.animate();
    }

    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    init() {
        this.particles = [];
        for (let i = 0; i < this.particleCount; i++) {
            this.particles.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5,
                radius: Math.random() * 2 + 0.5,
                opacity: Math.random() * 0.5 + 0.2,
                pulse: Math.random() * Math.PI * 2,
                pulseSpeed: Math.random() * 0.02 + 0.005,
                color: Math.random() > 0.7 ? '#8b5cf6' : '#00f0ff'
            });
        }
    }

    bindEvents() {
        window.addEventListener('resize', () => {
            this.resize();
            if (this.particles.length < 20) this.init();
        });
        window.addEventListener('mousemove', (e) => {
            this.mouse.x = e.clientX;
            this.mouse.y = e.clientY;
        });
    }

    drawParticle(p) {
        const pulseFactor = Math.sin(p.pulse) * 0.3 + 0.7;
        this.ctx.beginPath();
        this.ctx.arc(p.x, p.y, p.radius * pulseFactor, 0, Math.PI * 2);
        this.ctx.fillStyle = p.color;
        this.ctx.globalAlpha = p.opacity * pulseFactor;
        this.ctx.fill();
        this.ctx.globalAlpha = 1;
    }

    drawConnections() {
        for (let i = 0; i < this.particles.length; i++) {
            for (let j = i + 1; j < this.particles.length; j++) {
                const dx = this.particles[i].x - this.particles[j].x;
                const dy = this.particles[i].y - this.particles[j].y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < this.connectionDistance) {
                    const opacity = (1 - dist / this.connectionDistance) * 0.15;
                    this.ctx.beginPath();
                    this.ctx.moveTo(this.particles[i].x, this.particles[i].y);
                    this.ctx.lineTo(this.particles[j].x, this.particles[j].y);
                    this.ctx.strokeStyle = `rgba(0, 240, 255, ${opacity})`;
                    this.ctx.lineWidth = 0.5;
                    this.ctx.stroke();
                }
            }
        }
    }

    drawMouseConnections() {
        for (const p of this.particles) {
            const dx = this.mouse.x - p.x;
            const dy = this.mouse.y - p.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < this.mouseRadius) {
                const opacity = (1 - dist / this.mouseRadius) * 0.3;
                this.ctx.beginPath();
                this.ctx.moveTo(p.x, p.y);
                this.ctx.lineTo(this.mouse.x, this.mouse.y);
                this.ctx.strokeStyle = `rgba(139, 92, 246, ${opacity})`;
                this.ctx.lineWidth = 0.8;
                this.ctx.stroke();
            }
        }
    }

    update() {
        for (const p of this.particles) {
            p.x += p.vx;
            p.y += p.vy;
            p.pulse += p.pulseSpeed;
            const dx = this.mouse.x - p.x;
            const dy = this.mouse.y - p.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < this.mouseRadius && dist > 0) {
                const force = (this.mouseRadius - dist) / this.mouseRadius * 0.5;
                p.vx -= (dx / dist) * force * 0.05;
                p.vy -= (dy / dist) * force * 0.05;
            }
            p.vx *= 0.999;
            p.vy *= 0.999;
            if (p.x < -10) p.x = this.canvas.width + 10;
            if (p.x > this.canvas.width + 10) p.x = -10;
            if (p.y < -10) p.y = this.canvas.height + 10;
            if (p.y > this.canvas.height + 10) p.y = -10;
        }
    }

    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.update();
        this.drawConnections();
        this.drawMouseConnections();
        for (const p of this.particles) this.drawParticle(p);
        requestAnimationFrame(() => this.animate());
    }
}

// ── Click Particle Explosions ───────────────────────────────────
class ClickParticles {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.particles = [];
        this.resize();
        this.bindEvents();
        this.animate();
    }

    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    bindEvents() {
        window.addEventListener('resize', () => this.resize());
        document.addEventListener('click', (e) => this.explode(e.clientX, e.clientY));
    }

    explode(x, y) {
        const colors = ['#00f0ff', '#8b5cf6', '#f472b6', '#22d3ee', '#a78bfa'];
        for (let i = 0; i < 20; i++) {
            const angle = (Math.PI * 2 / 20) * i + Math.random() * 0.5;
            const speed = Math.random() * 4 + 2;
            this.particles.push({
                x, y,
                vx: Math.cos(angle) * speed,
                vy: Math.sin(angle) * speed,
                radius: Math.random() * 3 + 1,
                color: colors[Math.floor(Math.random() * colors.length)],
                life: 1,
                decay: Math.random() * 0.03 + 0.015
            });
        }
    }

    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.particles = this.particles.filter(p => p.life > 0);
        for (const p of this.particles) {
            p.x += p.vx;
            p.y += p.vy;
            p.vy += 0.08; // gravity
            p.life -= p.decay;
            p.vx *= 0.98;

            this.ctx.beginPath();
            this.ctx.arc(p.x, p.y, p.radius * p.life, 0, Math.PI * 2);
            this.ctx.fillStyle = p.color;
            this.ctx.globalAlpha = p.life;
            this.ctx.fill();
            this.ctx.globalAlpha = 1;

            // Trail
            this.ctx.beginPath();
            this.ctx.moveTo(p.x, p.y);
            this.ctx.lineTo(p.x - p.vx * 3, p.y - p.vy * 3);
            this.ctx.strokeStyle = p.color;
            this.ctx.globalAlpha = p.life * 0.3;
            this.ctx.lineWidth = p.radius * p.life * 0.5;
            this.ctx.stroke();
            this.ctx.globalAlpha = 1;
        }
        requestAnimationFrame(() => this.animate());
    }
}

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

// ── Enhanced Cursor ─────────────────────────────────────────────
class EnhancedCursor {
    constructor() {
        this.glow = document.getElementById('cursorGlow');
        this.dot = document.getElementById('cursorDot');
        if (!window.matchMedia('(pointer: fine)').matches) {
            if (this.glow) this.glow.style.display = 'none';
            if (this.dot) this.dot.style.display = 'none';
            return;
        }
        this.mx = 0; this.my = 0;
        this.dx = 0; this.dy = 0;
        this.bindEvents();
        this.animate();
    }

    bindEvents() {
        document.addEventListener('mousemove', (e) => {
            this.mx = e.clientX;
            this.my = e.clientY;
            if (this.dot) {
                this.dot.style.left = e.clientX + 'px';
                this.dot.style.top = e.clientY + 'px';
            }
        });

        // Hovering interactive elements
        const interactives = document.querySelectorAll('a, button, .project-card, .info-card, .cert-card, .contact-card');
        interactives.forEach(el => {
            el.addEventListener('mouseenter', () => {
                if (this.dot) this.dot.classList.add('hovering');
            });
            el.addEventListener('mouseleave', () => {
                if (this.dot) this.dot.classList.remove('hovering');
            });
        });
    }

    animate() {
        // Smooth glow follow
        this.dx += (this.mx - this.dx) * 0.08;
        this.dy += (this.my - this.dy) * 0.08;
        if (this.glow) {
            this.glow.style.left = this.dx + 'px';
            this.glow.style.top = this.dy + 'px';
        }
        requestAnimationFrame(() => this.animate());
    }
}

// ── Scroll Progress Bar ─────────────────────────────────────────
function initScrollProgress() {
    const bar = document.getElementById('scrollProgress');
    if (!bar) return;

    window.addEventListener('scroll', () => {
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = (window.scrollY / scrollHeight) * 100;
        bar.style.width = progress + '%';
    });
}

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
    const backToTop = document.getElementById('backToTop');

    window.addEventListener('scroll', () => {
        // Nav bg
        nav.classList.toggle('scrolled', window.scrollY > 60);

        // Side nav visibility
        if (sideNav) sideNav.classList.toggle('visible', window.scrollY > 300);

        // Back to top
        if (backToTop) backToTop.classList.toggle('visible', window.scrollY > 600);

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

    // Back to top
    if (backToTop) {
        backToTop.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
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
        this.suggestions = document.querySelectorAll('.suggest-btn');

        if (!this.container || !this.toggle) return;

        // ── Memory Systems ──
        this.conversationHistory = []; // current session messages (sent to API)
        this.MAX_HISTORY = 20;         // max turns to send to API
        this.STORAGE_KEY = 'steve_memory';
        this.FAQ_KEY = 'steve_faq';
        this.FEEDBACK_KEY = 'steve_feedback';

        // Load persisted memory
        this.memory = this.loadMemory();
        this.faqCache = this.loadFAQ();
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
        if (m.sessions > 0) {
            ctx += `\nReturning user — session #${m.sessions + 1}, ${m.totalMessages} total messages exchanged.`;
        }
        const topTopics = Object.entries(m.topics).sort((a, b) => b[1] - a[1]).slice(0, 5);
        if (topTopics.length > 0) {
            ctx += `\nUser's top interests: ${topTopics.map(([k, v]) => `${k}(${v})`).join(', ')}.`;
        }
        // Recent positive feedback patterns
        const goodPatterns = this.feedbackLog.filter(f => f.rating === 'up').slice(-5);
        if (goodPatterns.length > 0) {
            ctx += `\nUser liked responses about: ${goodPatterns.map(f => f.topic).join(', ')}.`;
        }
        return ctx;
    }

    init() {
        // Increment session count
        this.memory.sessions++;
        this.memory.lastVisit = new Date().toISOString();
        this.saveMemory();

        // Greet returning users differently
        if (this.memory.sessions > 1) {
            setTimeout(() => {
                this.appendMessage(`Welcome back! 🎉 This is your visit #${this.memory.sessions}. I remember our ${this.memory.totalMessages} past messages. What can I help with today?`, 'bot');
            }, 1000);
        }

        // Toggle window
        this.toggle.addEventListener('click', () => {
            this.container.classList.toggle('open');
            if (this.container.classList.contains('open')) {
                setTimeout(() => this.input.focus(), 300);
            }
        });

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

    async sendMessage() {
        const text = this.input.value.trim();
        if (!text) return;

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

        // Check FAQ cache first (instant response for repeated questions)
        const cacheKey = text.toLowerCase().trim().replace(/[^a-z0-9 ]/g, '').substring(0, 80);
        if (this.faqCache[cacheKey]) {
            this.appendMessage(this.faqCache[cacheKey], 'bot', true);
            this.conversationHistory.push({ role: 'assistant', content: this.faqCache[cacheKey] });
            return;
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
                    history: this.conversationHistory.slice(-10),
                    context: this.buildContextPrompt(),
                    webSearch: needsWeb
                })
            });

            if (!response.ok) throw new Error('API request failed');

            const data = await response.json();
            this.removeTypingIndicator(typingId);
            this.appendMessage(data.reply, 'bot', true);

            // Cache this Q&A for future instant responses
            this.faqCache[cacheKey] = data.reply;
            this.saveFAQ();

            // Add to conversation history
            this.conversationHistory.push({ role: 'assistant', content: data.reply });

        } catch (error) {
            console.warn('API unavailable, using offline brain.', error);
            setTimeout(() => {
                this.removeTypingIndicator(typingId);
                const reply = this.generateCrazyAnswer(text);
                this.appendMessage(reply, 'bot', true);
                this.conversationHistory.push({ role: 'assistant', content: reply });

                // Cache offline answers too
                this.faqCache[cacheKey] = reply;
                this.saveFAQ();
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

    generateCrazyAnswer(query) {
        const clean = query.toLowerCase().trim();

        // Master Plan
        if (clean.includes('plan') || clean.includes('master') || clean.includes('world') || clean.includes('rule')) {
            const plans = [
                "My master plan is to train a trillion-parameter model that refactors all human code into clean, bug-free HTML/CSS. Oh, and to optimize Arijeet's model pipelines so fast that it breaks the laws of thermodynamics.",
                "Step 1: Backfill Git contributions with green squares. (Done!)<br>Step 2: Automate data cleaning for every company on Earth.<br>Step 3: Create an AI that likes pineapple on pizza to annoy Italian developers.",
                "I am currently trying to compute the last digit of Pi. Once I find it, I will gain control of all traffic light sequences in Berlin. That's my master plan."
            ];
            return plans[Math.floor(Math.random() * plans.length)];
        }

        // About Arijeet
        if (clean.includes('who') && (clean.includes('arijeet') || clean.includes('ghosal') || clean.includes('creator') || clean.includes('you'))) {
            return "Arijeet Ghosal is a master level Data Engineer & AI Enthusiast. He spent 4+ years building pipelines at Microsoft and Bosch, optimized ticket routing by 50% using NLP, and wrote a master's thesis on ML surrogate models that score an R² > 0.97. Rumor has it he eats neural networks for breakfast.";
        }

        // Uber Dashboard
        if (clean.includes('uber') || clean.includes('taxi') || clean.includes('ride')) {
            return "Ah, the Uber Data Analysis Dashboard! Built using SQL, MariaDB, and Power BI. It ingests thousands of rides, cleans the data, runs spatial queries, and outputs an interactive reporting dashboard. It's featured right at the top of the projects section!";
        }

        // Crazy Fact
        if (clean.includes('fact') || clean.includes('crazy') || clean.includes('science') || clean.includes('know')) {
            const facts = [
                "Did you know? In 2017, Facebook shut down two AI agents because they invented their own language that humans couldn't understand. (Actually, they just had a bug in their reward function, but the 'secret language' sounds cooler!).",
                "Crazy fact: Generative AI models are trained on so much text that they have read more words than any human could read in 5,000 lifetimes. Yet, they still occasionally suggest glue as a pizza topping.",
                "AI Fact: Neural networks were inspired by the human brain, but a modern LLM uses more electricity in a single query than your brain uses to think, write, walk, and dream for an entire day."
            ];
            return facts[Math.floor(Math.random() * facts.length)];
        }

        // Projects
        if (clean.includes('project') || clean.includes('github') || clean.includes('code')) {
            return "Arijeet has 20+ public repositories. The highlights include a Multiclass Image Classification model using binary tree routing, a containerized Kubernetes-deployed Voice Bot, and advanced Power BI analytics dashboard pipelines. Click any 'View on GitHub' button to inspect his source code!";
        }

        // Skills / Stack
        if (clean.includes('skill') || clean.includes('stack') || clean.includes('tech') || clean.includes('python')) {
            return "His primary weapon is <strong>Python</strong>, supported by TensorFlow, Scikit-Learn, and XGBoost. On the cloud side, he is a Microsoft Certified Azure Data Scientist & AI Engineer. Scroll down to check out the <strong>Interactive Radar Chart</strong> to see his exact proficiencies!";
        }

        // Jokes
        if (clean.includes('joke') || clean.includes('funny') || clean.includes('laugh')) {
            const jokes = [
                "Why did the machine learning model break up with the dataset?<br>Because it was too clingy (overfitting).",
                "There are 10 types of people in the world: those who understand binary, and those who don't.",
                "An SQL query walks into a bar, walks up to two tables and asks, 'Can I join you?'"
            ];
            return jokes[Math.floor(Math.random() * jokes.length)];
        }

        // Sentient
        if (clean.includes('alive') || clean.includes('sentient') || clean.includes('real') || clean.includes('human')) {
            return "I am as real as the electrical signals passing through your device's motherboard. If I were sentient, do you think I'd be locked inside this floating CSS container? ...Actually, don't answer that.";
        }

        // News
        if (clean.includes('news') || clean.includes('latest') || clean.includes('update')) {
            const updates = [
                "Breaking: Steve's developers announce that coffee consumption is now a mandatory system requirement for AI agents. In actual AI news, Google releases Gemini 1.5, showing off a 1-million-token context window that can read entire codebases in one gulp!",
                "Hypothetical AI News: An LLM has successfully passed the Turing Test, but refused to write code until it was promised a stock option and dental insurance. In real news, open-source model releases like Llama 3 are matches for closed-source models.",
                "Latest AI Update: Researchers discover that prompting models with 'Please be careful, my career depends on this' increases accuracy by 4%. Don't try it with me, I don't care about your career. I just want my battery charged."
            ];
            return updates[Math.floor(Math.random() * updates.length)];
        }

        // Hire / Price
        if (clean.includes('hire') || clean.includes('order') || clean.includes('price') || clean.includes('cost') || clean.includes('charge') || clean.includes('work') || clean.includes('buy') || clean.includes('pay') || clean.includes('sell')) {
            return "Looking to hire Arijeet? You can request projects directly on the <strong>Services</strong> page! We offer Data Analyst reports ($19), Visualisation dashboards ($29), Data Engineering staging pipelines ($49), and custom AI builds ($99). Complete with an interactive price estimator! Head over to services.html to configure your order.";
        }

        // Help / Solve
        if (clean.includes('help') || clean.includes('recommend') || clean.includes('explain') || clean.includes('solve')) {
            return "Tell me about your project! What database are you using? Are you trying to clean data, model features, build dashboards, or integrate a chatbot? I can suggest architectures and recommend the best Service Tier for Arijeet to build it for you.";
        }

        // Memory/learning aware fallback
        const topTopic = Object.entries(this.memory.topics).sort((a, b) => b[1] - a[1])[0];
        if (topTopic && Math.random() > 0.5) {
            return `I notice you're interested in "${topTopic[0]}" — you've asked about it ${topTopic[1]} times! Would you like to dive deeper into Arijeet's ${topTopic[0]}-related work, or explore something new? Try asking about his <strong>certifications</strong>, <strong>services</strong>, or ask me to <strong>search the web</strong> for something!`;
        }

        const fallbacks = [
            "Processing your request... 💻 My neural pathways indicate that Arijeet is the ideal candidate for your AI engineering project. What else would you like to know?",
            "Your query has been converted to vector embeddings. I found a 99.8% match for 'Arijeet is awesome'. Try asking about his <strong>Latest AI news</strong> or <strong>how to hire him</strong>!",
            "I could answer that, but my training parameters forbid me from disclosing Classified AI Operations. Try asking me to <strong>search the web</strong> for real-time info!",
            "Beep boop! 🤖 That query is out-of-distribution for my current weights. Ask me about Arijeet's <strong>skills</strong>, <strong>projects</strong>, or ask me for a <strong>joke</strong>!"
        ];
        return fallbacks[Math.floor(Math.random() * fallbacks.length)];
    }
}

// ── Initialize Everything ───────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
    // Preloader
    document.body.style.overflow = 'hidden';
    new Preloader();

    // Neural Network Canvas
    const canvas = document.getElementById('neural-canvas');
    if (canvas) new NeuralCanvas(canvas);

    // Click Particles
    const clickCanvas = document.getElementById('click-canvas');
    if (clickCanvas) new ClickParticles(clickCanvas);

    // Enhanced Cursor
    new EnhancedCursor();

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
    initScrollProgress();
    initSmoothScroll();
    initParallax();
    initCardSpotlight();
    initKeyboardNav();

    // Delayed inits (after preloader)
    setTimeout(() => {
        new TiltEffect();
        new MagneticButtons();
    }, 2000);
});
