/* ═══════════════════════════════════════════════════════════════
   ARIJEET GHOSAL — PROJECT ARCHIVE
   Dynamic filter, search, detail drawers, and shared styles.
   ═══════════════════════════════════════════════════════════════ */

// ── Projects Database ───────────────────────────────────────────
const projects = [
    {
        id: "uber-dashboard",
        title: "Uber Data Analysis Dashboard",
        category: "data-eng",
        categoryLabel: "Data Engineering",
        icon: "🚕",
        desc: "Comprehensive Uber data analysis dashboard built with SQL, MariaDB, and Power BI. End-to-end data pipeline from ingestion to interactive visualization.",
        tech: ["SQL", "MariaDB", "Power BI", "ETL", "Data Pipelines"],
        github: "https://github.com/arijeetghosal/Uber-Data-Analysis-Dashboard---SQL-MariaDB-and-Power-BI",
        details: {
            overview: "Built an end-to-end data pipeline to ingest, clean, transform, and visualize Uber ride metrics. Standardized raw transaction schemas into structured star-schema tables.",
            architecture: [
                "Data Ingestion: Raw transactional log loading.",
                "Database Staging: Star-schema setup in MariaDB featuring fact and dimension tables.",
                "ETL Orchestration: SQL transformations calculating ride durations, speed, and surge multipliers.",
                "Visualization: Power BI reporting dashboards containing geospatial paths and revenue insights."
            ],
            metrics: "Processes 100K+ transactional records with query latency below 200ms."
        }
    },
    {
        id: "nvh-predictability",
        title: "NVH Predictability Dashboard",
        category: "data-analysis",
        categoryLabel: "Data Analysis",
        icon: "🚗",
        desc: "Interactive Power BI dashboard analyzing Noise, Vibration & Harshness (NVH) vehicle performance data with anomaly detection and predictive analytics.",
        tech: ["Power BI", "Anomaly Detection", "Automotive", "Python", "Data Analysis"],
        github: "https://github.com/arijeetghosal/NVH-Predictability-using-PowerBI",
        details: {
            overview: "Designed a statistical analysis dashboard to inspect and predict NVH testing metrics for vehicle systems. Identifies mechanical threshold crossings via anomaly detection.",
            architecture: [
                "Sensor Ingestion: Real-time sensor signal datasets.",
                "Anomaly Detection: Running isolation forests in Python to mark vibration anomalies.",
                "Reporting System: Automated alert emails triggered on crossing mechanical thresholds.",
                "Interactive Dashboards: Dynamic scatter plots, FFT frequency distributions, and failure trend charts."
            ],
            metrics: "Enables engineers to identify signal degradation patterns 30% faster."
        }
    },
    {
        id: "credit-card-dashboard",
        title: "Credit Card Dashboard",
        category: "visualization",
        categoryLabel: "Data Analysis & Visualization",
        icon: "📊",
        desc: "End-to-end credit card financial analytics dashboard using Power BI, SQL & Python. Features KPIs, customer segmentation, and transaction trend analysis.",
        tech: ["Power BI", "SQL", "Python", "Analytics", "Visualization"],
        github: "https://github.com/arijeetghosal/Credit-Card-Dashboard-Using-PowerBI",
        details: {
            overview: "Delivers comprehensive customer spending insights, transaction trends, and financial risk profiles for credit card portfolios.",
            architecture: [
                "Data Modeling: Snowflake schema relational model built inside SQL Server.",
                "Feature Engineering: DAX calculated fields for active accounts, default rates, and customer lifetime value.",
                "Visualization Layout: Multi-tab executive dashboard detailing active accounts, credit usage, and demographic breakdowns."
            ],
            metrics: "Calculates portfolio delinquency rates in real-time."
        }
    },
    {
        id: "complaint-bot",
        title: "Complaint Bot",
        category: "reporting",
        categoryLabel: "Reporting & Documentation",
        icon: "🤖",
        desc: "NLP-powered complaint classification & routing bot using Python, Streamlit & Pipedrive API. Auto-categorizes issues and escalates them to the right team.",
        tech: ["NLP", "Streamlit", "Python", "Automation", "Pipedrive API"],
        github: "https://github.com/arijeetghosal/Complaint_bot",
        details: {
            overview: "Automates customer grievance documentation, logging, and routing. Evaluates ticket descriptions via local text classifiers.",
            architecture: [
                "Frontend Interface: Minimalist Streamlit input dashboard.",
                "NLP Classifier: TF-IDF vectorization with Naive Bayes classification.",
                "API Integration: Automatic CRM ticket creation in Pipedrive with structured metadata fields."
            ],
            metrics: "Reduces ticket sorting overhead by 50% through automatic category tagging."
        }
    },
    {
        id: "multiclass-classification",
        title: "Multiclass Image Classification",
        category: "ai-ml",
        categoryLabel: "AI / ML",
        icon: "👁️",
        desc: "Multi-class image classification using Binary Tree routing algorithms. Implementing advanced computer vision models for accurate categorizations.",
        tech: ["Python", "TensorFlow", "Computer Vision", "Deep Learning", "CNN"],
        github: "https://github.com/arijeetghosal/Multiclass_image_classification",
        details: {
            overview: "Combines hierarchical decision trees with convolutional neural networks to classify images across multiple labels with high accuracy.",
            architecture: [
                "Preprocessing Pipeline: Image augmentation, resizing, and normalization.",
                "Classifier Network: Custom CNN layers with binary routing branches.",
                "Evaluation Module: Confusion matrices and ROC-AUC curve plotting."
            ],
            metrics: "Achieved 91.2% classification accuracy across complex image categories."
        }
    },
    {
        id: "voice-bot",
        title: "Voice Bot — OpenAI & Docker",
        category: "ai-ml",
        categoryLabel: "AI / ML",
        icon: "🎙️",
        desc: "AI-powered voice bot using OpenAI GPT API, containerized with Docker and deployed on Kubernetes. Features speech-to-text, NLP processing, and response generation.",
        tech: ["OpenAI", "Docker", "Kubernetes", "NLP", "FastAPI"],
        github: "https://github.com/arijeetghosal/Voice-Bot-Using-OpenAI-and-Docker",
        details: {
            overview: "A latency-optimized voice conversation agent capable of processing audio queries, extracting intents, and synthesizing replies.",
            architecture: [
                "Audio Processing: WebRTC audio transmission to a FastAPI backend.",
                "STT & TTS: Integration with Whispers Speech-to-Text and OpenAI text generation.",
                "Deployment: Docker container configuration orchestration with Kubernetes pods."
            ],
            metrics: "Average conversation round-trip latency under 1.2 seconds."
        }
    }
];

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

// ── Catalog Controller ──────────────────────────────────────────
class CatalogController {
    constructor() {
        this.catalog = document.getElementById('hubCatalog');
        this.search = document.getElementById('hubSearch');
        this.tabs = document.querySelectorAll('.tab-btn');
        this.currentFilter = 'all';
        this.currentQuery = '';

        this.init();
    }

    init() {
        this.render();

        // Search Input
        this.search.addEventListener('input', (e) => {
            this.currentQuery = e.target.value.toLowerCase().trim();
            this.render();
        });

        // Tabs
        this.tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                this.tabs.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
                this.currentFilter = tab.dataset.filter;
                this.render();
            });
        });
    }

    render() {
        this.catalog.innerHTML = '';

        const filtered = projects.filter(p => {
            const matchesTab = this.currentFilter === 'all' || p.category === this.currentFilter;
            const matchesSearch = p.title.toLowerCase().includes(this.currentQuery) ||
                                  p.desc.toLowerCase().includes(this.currentQuery) ||
                                  p.tech.some(t => t.toLowerCase().includes(this.currentQuery));
            return matchesTab && matchesSearch;
        });

        if (filtered.length === 0) {
            this.catalog.innerHTML = `
                <div class="no-results">
                    <span class="no-results-icon">📂</span>
                    <h3>No modules match search parameters</h3>
                    <p>Try clearing filters or search query.</p>
                </div>
            `;
            return;
        }

        filtered.forEach(p => {
            const card = document.createElement('div');
            card.className = 'project-card';
            card.innerHTML = `
                <div class="project-image">
                    <div class="project-overlay"><div class="overlay-pattern"></div></div>
                    <div class="project-icon">${p.icon}</div>
                </div>
                <div class="project-info">
                    <div class="project-category">${p.categoryLabel}</div>
                    <h3 class="project-title">${p.title}</h3>
                    <p class="project-desc">${p.desc}</p>
                    <div class="project-tech">
                        ${p.tech.map(t => `<span class="tech-tag-interactive">${t}</span>`).join('')}
                    </div>
                    <div class="hub-card-actions">
                        <a href="${p.github}" target="_blank" class="project-link">Source Code <span>→</span></a>
                        <button class="expand-details-btn" data-id="${p.id}">Console Details <span>⚡</span></button>
                    </div>
                </div>
                <div class="project-console-drawer" id="drawer-${p.id}">
                    <div class="drawer-header">
                        <span>[system_log: ${p.id}.cfg]</span>
                        <button class="close-drawer-btn" data-id="${p.id}">CLOSE_CONNECTION [X]</button>
                    </div>
                    <div class="drawer-body">
                        <h4 class="drawer-title">Module Overview</h4>
                        <p class="drawer-text">${p.details.overview}</p>
                        
                        <h4 class="drawer-title">System Architecture</h4>
                        <ul class="drawer-list">
                            ${p.details.architecture.map(step => `<li>${step}</li>`).join('')}
                        </ul>
                        
                        <h4 class="drawer-title">KPI performance</h4>
                        <p class="drawer-text highlight-text">${p.details.metrics}</p>
                    </div>
                </div>
            `;
            this.catalog.appendChild(card);
        });

        // Initialize expand events
        this.initDrawers();
        this.initInteractiveTags();
    }

    initDrawers() {
        const btns = document.querySelectorAll('.expand-details-btn');
        btns.forEach(btn => {
            btn.addEventListener('click', () => {
                const id = btn.dataset.id;
                const drawer = document.getElementById(`drawer-${id}`);
                if (drawer) drawer.classList.toggle('open');
            });
        });

        const closeBtns = document.querySelectorAll('.close-drawer-btn');
        closeBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const id = btn.dataset.id;
                const drawer = document.getElementById(`drawer-${id}`);
                if (drawer) drawer.classList.remove('open');
            });
        });
    }

    initInteractiveTags() {
        const tags = document.querySelectorAll('.tech-tag-interactive');
        tags.forEach(tag => {
            tag.addEventListener('click', (e) => {
                e.stopPropagation();
                const techName = tag.textContent;
                this.search.value = techName;
                this.currentQuery = techName.toLowerCase();
                this.render();
            });
        });
    }
}

// ── Init execution ──────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
    new SharedEffects();
    new CatalogController();
});
