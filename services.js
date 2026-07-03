/* ═══════════════════════════════════════════════════════════════
   ARIJEET GHOSAL — SERVICES & CALCULATOR
   Interactive Quote Calculator & terminal simulation.
   ═══════════════════════════════════════════════════════════════ */

// ── Shared Effects Initialization ────────────────────────────────
class SharedEffects {
    constructor() {
        this.initProgress();
        this.initCursor();
        this.initNeuralCanvas();
        this.initClickCanvas();
        this.initNavigation();
    }

    initProgress() {
        const bar = document.getElementById('scrollProgress');
        if (!bar) return;
        window.addEventListener('scroll', () => {
            const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = (window.scrollY / scrollHeight) * 100;
            bar.style.width = progress + '%';
        });
    }

    initCursor() {
        const glow = document.getElementById('cursorGlow');
        const dot = document.getElementById('cursorDot');
        if (!window.matchMedia('(pointer: fine)').matches) {
            if (glow) glow.style.display = 'none';
            if (dot) dot.style.display = 'none';
            return;
        }
        let mx = 0, my = 0, dx = 0, dy = 0;
        document.addEventListener('mousemove', (e) => {
            mx = e.clientX;
            my = e.clientY;
            if (dot) {
                dot.style.left = e.clientX + 'px';
                dot.style.top = e.clientY + 'px';
            }
        });
        const animate = () => {
            dx += (mx - dx) * 0.08;
            dy += (my - dy) * 0.08;
            if (glow) {
                glow.style.left = dx + 'px';
                glow.style.top = dy + 'px';
            }
            requestAnimationFrame(animate);
        };
        animate();
    }

    initNeuralCanvas() {
        const canvas = document.getElementById('neural-canvas');
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        let particles = [];
        let mouse = { x: -1000, y: -1000 };
        const particleCount = window.innerWidth < 768 ? 40 : 80;

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resize();
        window.addEventListener('resize', resize);
        window.addEventListener('mousemove', (e) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        });

        for (let i = 0; i < particleCount; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                vx: (Math.random() - 0.5) * 0.4,
                vy: (Math.random() - 0.5) * 0.4,
                radius: Math.random() * 2 + 0.5,
                color: Math.random() > 0.7 ? '#8b5cf6' : '#00f0ff'
            });
        }

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            for (let i = 0; i < particles.length; i++) {
                const p = particles[i];
                p.x += p.vx;
                p.y += p.vy;
                if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
                if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

                ctx.beginPath();
                ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
                ctx.fillStyle = p.color;
                ctx.globalAlpha = 0.3;
                ctx.fill();
                ctx.globalAlpha = 1;

                // mouse interact
                const dx = mouse.x - p.x;
                const dy = mouse.y - p.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < 150) {
                    ctx.beginPath();
                    ctx.moveTo(p.x, p.y);
                    ctx.lineTo(mouse.x, mouse.y);
                    ctx.strokeStyle = `rgba(0, 240, 255, ${(1 - dist/150) * 0.15})`;
                    ctx.stroke();
                }
            }
            requestAnimationFrame(animate);
        };
        animate();
    }

    initClickCanvas() {
        const canvas = document.getElementById('click-canvas');
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        let particles = [];

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resize();
        window.addEventListener('resize', resize);

        document.addEventListener('click', (e) => {
            const colors = ['#00f0ff', '#8b5cf6', '#f472b6'];
            for (let i = 0; i < 15; i++) {
                const angle = (Math.PI * 2 / 15) * i + Math.random() * 0.5;
                const speed = Math.random() * 3 + 2;
                particles.push({
                    x: e.clientX,
                    y: e.clientY,
                    vx: Math.cos(angle) * speed,
                    vy: Math.sin(angle) * speed,
                    radius: Math.random() * 2.5 + 1,
                    color: colors[Math.floor(Math.random() * colors.length)],
                    life: 1,
                    decay: Math.random() * 0.03 + 0.015
                });
            }
        });

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles = particles.filter(p => p.life > 0);
            for (const p of particles) {
                p.x += p.vx;
                p.y += p.vy;
                p.vy += 0.06;
                p.life -= p.decay;
                if (p.life <= 0) continue;
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.radius * p.life, 0, Math.PI * 2);
                ctx.fillStyle = p.color;
                ctx.globalAlpha = p.life;
                ctx.fill();
            }
            requestAnimationFrame(animate);
        };
        animate();
    }

    initNavigation() {
        const backToTop = document.getElementById('backToTop');
        window.addEventListener('scroll', () => {
            if (backToTop) backToTop.classList.toggle('visible', window.scrollY > 400);
        });
        if (backToTop) {
            backToTop.addEventListener('click', () => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        }
    }
}

// ── Calculator Controller ───────────────────────────────────────
class CalculatorController {
    constructor() {
        this.select = document.getElementById('serviceSelect');
        this.checkboxes = document.querySelectorAll('.addon-checkbox');
        this.scope = document.getElementById('projectScope');
        this.email = document.getElementById('clientEmail');
        this.priceDisplay = document.getElementById('calcPrice');
        this.tierDisplay = document.getElementById('breakdownTier');
        this.addonsDisplay = document.getElementById('breakdownAddons');
        this.form = document.getElementById('projectForm');
        
        this.consoleLog = document.getElementById('subConsole');
        this.consoleBody = document.getElementById('subConsoleBody');

        this.init();
    }

    init() {
        // Form updates
        this.select.addEventListener('change', () => this.updateQuote());
        this.checkboxes.forEach(box => {
            box.addEventListener('change', () => this.updateQuote());
        });

        // Form submit
        this.form.addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleSubmission();
        });

        this.updateQuote();
    }

    updateQuote() {
        const basePrice = parseInt(this.select.value);
        const selectedOption = this.select.options[this.select.selectedIndex];
        const tierName = selectedOption.dataset.label;

        let addonsPrice = 0;
        this.checkboxes.forEach(box => {
            if (box.checked) {
                addonsPrice += parseInt(box.value);
            }
        });

        const totalPrice = basePrice + addonsPrice;

        this.priceDisplay.textContent = totalPrice;
        this.tierDisplay.textContent = tierName;
        this.addonsDisplay.textContent = addonsPrice;
    }

    async handleSubmission() {
        if (!this.email.value) return;

        // Show console
        this.consoleLog.classList.add('visible');
        this.consoleBody.innerHTML = '';
        
        const logs = [
            `[sys] initializing mail_dispatch daemon...`,
            `[sys] establishing tunnel routing connection...`,
            `[sys] compiling parameters for: ${this.tierDisplay.textContent}`,
            `[sys] calculating final project budget estimate: $${this.priceDisplay.textContent}`,
            `[sys] validating payload contents...`,
            `[sys] mapping client endpoint email: ${this.email.value}`,
            `[sys] packaging requirements body: "${this.scope.value.substring(0, 30)}..."`,
            `[success] proposal parcel generated successfully!`,
            `[sys] opening secure default system mail service...`
        ];

        for (let i = 0; i < logs.length; i++) {
            await new Promise(resolve => setTimeout(resolve, 350));
            const logEl = document.createElement('div');
            logEl.className = 'console-log-line';
            if (logs[i].includes('[success]')) logEl.style.color = '#27c93f';
            if (logs[i].includes('[sys]')) logEl.style.color = '#00f0ff';
            logEl.textContent = logs[i];
            this.consoleBody.appendChild(logEl);
            this.consoleLog.scrollTop = this.consoleLog.scrollHeight;
        }

        // Open Mailto link
        setTimeout(() => {
            const subject = encodeURIComponent(`Project Proposal Request: ${this.tierDisplay.textContent}`);
            const body = encodeURIComponent(
                `Hello Arijeet,\n\n` +
                `I would like to hire you for a project using your portfolio calculator.\n\n` +
                `Project Tier: ${this.tierDisplay.textContent}\n` +
                `Final Estimated Price: $${this.priceDisplay.textContent}\n` +
                `My Email: ${this.email.value}\n\n` +
                `Requirements Details:\n` +
                `${this.scope.value}\n\n` +
                `Best regards.`
            );
            window.location.href = `mailto:arijeetghosal.de@gmail.com?subject=${subject}&body=${body}`;
        }, 800);
    }
}

// ── Query Form Controller ─────────────────────────────────────────
class QueryFormController {
    constructor() {
        this.form = document.getElementById('queryForm');
        this.name = document.getElementById('queryName');
        this.email = document.getElementById('queryEmail');
        this.subject = document.getElementById('querySubject');
        this.body = document.getElementById('queryBody');
        
        this.consoleLog = document.getElementById('queryConsole');
        this.consoleBody = document.getElementById('queryConsoleBody');

        if (!this.form) return;
        this.init();
    }

    init() {
        this.form.addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleSubmission();
        });
    }

    async handleSubmission() {
        if (!this.email.value || !this.body.value) return;

        this.consoleLog.classList.add('visible');
        this.consoleBody.innerHTML = '';

        const logs = [
            `[sys] initiating query_dispatcher service...`,
            `[sys] resolving socket hostname for SMTP transmission...`,
            `[sys] mapping message sender: "${this.name.value}" <${this.email.value}>`,
            `[sys] packaging query content payload (subject: "${this.subject.value}")...`,
            `[sys] encrypting packets with custom SSL handshake...`,
            `[success] message payload compiled into standard email protocol!`,
            `[sys] transferring dispatch control to local mail utility...`
        ];

        for (let i = 0; i < logs.length; i++) {
            await new Promise(resolve => setTimeout(resolve, 300));
            const logEl = document.createElement('div');
            logEl.className = 'console-log-line';
            if (logs[i].includes('[success]')) logEl.style.color = '#27c93f';
            if (logs[i].includes('[sys]')) logEl.style.color = '#00f0ff';
            logEl.textContent = logs[i];
            this.consoleBody.appendChild(logEl);
            this.consoleLog.scrollTop = this.consoleLog.scrollHeight;
        }

        setTimeout(() => {
            const subjectStr = encodeURIComponent(`General Inquiry: ${this.subject.value}`);
            const bodyStr = encodeURIComponent(
                `Hello Arijeet,\n\n` +
                `I am sending this general inquiry from your portfolio services page.\n\n` +
                `Name: ${this.name.value}\n` +
                `Email: ${this.email.value}\n\n` +
                `Message Details:\n` +
                `${this.body.value}\n\n` +
                `Best regards.`
            );
            window.location.href = `mailto:arijeetghosal.de@gmail.com?subject=${subjectStr}&body=${bodyStr}`;
        }, 800);
    }
}

// ── Full Project Submission Controller ─────────────────────────────
class FullProjectController {
    constructor() {
        this.form = document.getElementById('fullProjectForm');
        if (!this.form) return;

        this.name = document.getElementById('fpName');
        this.email = document.getElementById('fpEmail');
        this.phone = document.getElementById('fpPhone');
        this.company = document.getElementById('fpCompany');
        this.category = document.getElementById('fpCategory');
        this.title = document.getElementById('fpTitle');
        this.description = document.getElementById('fpDescription');
        this.doc = document.getElementById('fpDoc');
        this.budget = document.getElementById('fpBudget');
        this.deadline = document.getElementById('fpDeadline');
        this.notes = document.getElementById('fpNotes');

        this.consoleLog = document.getElementById('fpConsole');
        this.consoleBody = document.getElementById('fpConsoleBody');

        this.init();
    }

    init() {
        this.form.addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleSubmission();
        });
    }

    async handleSubmission() {
        if (!this.email.value || !this.description.value || !this.budget.value) return;

        this.consoleLog.classList.add('visible');
        this.consoleBody.innerHTML = '';

        const fileName = this.doc.files.length > 0 ? this.doc.files[0].name : 'none';
        const fileSize = this.doc.files.length > 0 ? (this.doc.files[0].size / 1024).toFixed(1) + ' KB' : 'N/A';

        const logs = [
            `[sys] booting project_intake.service daemon...`,
            `[sys] authenticating client credentials: ${this.name.value} <${this.email.value}>`,
            `[sys] parsing project category: "${this.category.value}"`,
            `[sys] indexing project title: "${this.title.value}"`,
            `[sys] scanning uploaded documentation: ${fileName} (${fileSize})`,
            `[sys] registering proposed budget: $${this.budget.value}`,
            this.deadline.value ? `[sys] deadline flagged: ${this.deadline.value}` : `[sys] no hard deadline specified — flexible delivery`,
            `[sys] compressing project brief payload...`,
            `[success] full project brief compiled successfully!`,
            `[sys] routing dispatch to arijeetghosal.de@gmail.com...`
        ];

        for (let i = 0; i < logs.length; i++) {
            await new Promise(resolve => setTimeout(resolve, 300));
            const logEl = document.createElement('div');
            logEl.className = 'console-log-line';
            if (logs[i].includes('[success]')) logEl.style.color = '#27c93f';
            if (logs[i].includes('[sys]')) logEl.style.color = '#00f0ff';
            logEl.textContent = logs[i];
            this.consoleBody.appendChild(logEl);
            this.consoleLog.scrollTop = this.consoleLog.scrollHeight;
        }

        setTimeout(() => {
            const subject = encodeURIComponent(`Full Project Brief: ${this.title.value} [${this.category.value}]`);
            const body = encodeURIComponent(
                `Hello Arijeet,\n\n` +
                `I would like to submit a full project brief from your portfolio services page.\n\n` +
                `=== CLIENT INFO ===\n` +
                `Name: ${this.name.value}\n` +
                `Email: ${this.email.value}\n` +
                `Phone: ${this.phone.value || 'N/A'}\n` +
                `Company: ${this.company.value || 'N/A'}\n\n` +
                `=== PROJECT DETAILS ===\n` +
                `Category: ${this.category.value}\n` +
                `Title: ${this.title.value}\n` +
                `Proposed Budget: $${this.budget.value}\n` +
                `Preferred Deadline: ${this.deadline.value || 'Flexible'}\n\n` +
                `Description:\n${this.description.value}\n\n` +
                `Additional Notes:\n${this.notes.value || 'None'}\n\n` +
                `Attached Documentation: ${fileName}\n` +
                `(Note: Please follow up with the document attached via email reply)\n\n` +
                `Best regards,\n${this.name.value}`
            );
            window.location.href = `mailto:arijeetghosal.de@gmail.com?subject=${subject}&body=${body}`;
        }, 800);
    }
}

// ── Make all sections visible ────────────────────────────────────
function revealSections() {
    document.querySelectorAll('.section').forEach(s => s.classList.add('visible'));
    const hero = document.querySelector('.hub-hero');
    if (hero) hero.classList.add('visible');
}

// ── Init execution ──────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
    new SharedEffects();
    new CalculatorController();
    new QueryFormController();
    new FullProjectController();
    revealSections();
});
