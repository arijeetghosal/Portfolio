# Arijeet Ghosal - Portfolio Codebase Context

This document is a compressed, comment-stripped representation of the portfolio codebase. It serves as a unified context map for AI coding assistants to minimize token usage and loading latency.

## Directory Layout
- **src/**: Source development files (readable, commented)
- **api/**: Serverless API handlers
- **videos/**: Media files
- **scripts/**: Build and utility pipelines
- **(Root)**: Production-built optimized web assets (HTML, CSS, JS)

## Codebase Manifest

### File: index.html
```html
<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Arijeet Ghosal | Data Engineer & AI Enthusiast</title><meta name="description" content="Portfolio of Arijeet Ghosal — Data Engineer & AI Enthusiast specializing in Computer Vision, NLP, and ML pipelines. MSc AI @ BTU. Experience at Bosch & Microsoft."><meta name="keywords" content="Arijeet Ghosal, Data Engineer, AI Enthusiast, Computer Vision, Machine Learning, NLP, Deep Learning, Portfolio"><meta name="author" content="Arijeet Ghosal"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet"><link rel="stylesheet" href="style.css"><link rel="stylesheet" href="swiss-override.css"><link rel="stylesheet" href="avatar3d.css"><link rel="shortcut icon" type="image/png" href="chatbot_icon.png"></head><body><div class="preloader" id="preloader"><div class="preloader-content"><div class="preloader-ring"><svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="40" class="preloader-circle-bg"/><circle cx="50" cy="50" r="40" class="preloader-circle"/></svg><div class="preloader-icon"><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" stroke-width="1.5"><path d="M12 2a4 4 0 0 1 4 4c0 1.7-1 3.2-2.5 3.8L12 10l-1.5-.2A4 4 0 0 1 12 2z"/><path d="M12 10v4"/><path d="M6.5 13.5c-1.5 1-2.5 2.7-2.5 4.5h16c0-1.8-1-3.5-2.5-4.5"/><circle cx="6" cy="10" r="2"/><circle cx="18" cy="10" r="2"/></svg></div></div><p class="preloader-text">Loading Portfolio<span class="preloader-dots"></span></p><div class="preloader-bar"><div class="preloader-bar-fill" id="preloaderBar"></div></div></div></div><div class="scroll-progress" id="scrollProgress"></div><canvas id="neural-canvas"></canvas><canvas id="click-canvas"></canvas><div class="scanline-overlay"></div><div class="cursor-glow" id="cursorGlow"></div><div class="cursor-dot" id="cursorDot"></div><div class="side-nav" id="sideNav"><a href="#home" class="side-dot active" data-tooltip="Home"><span></span></a><a href="#about" class="side-dot" data-tooltip="About"><span></span></a><a href="#experience" class="side-dot" data-tooltip="Experience"><span></span></a><a href="#projects" class="side-dot" data-tooltip="Projects"><span></span></a><a href="#skills" class="side-dot" data-tooltip="Skills"><span></span></a><a href="#certifications" class="side-dot" data-tooltip="Certifications"><span></span></a><a href="#contact" class="side-dot" data-tooltip="Contact"><span></span></a></div><button class="back-to-top" id="backToTop" aria-label="Back to top"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 15l-6-6-6 6"/></svg></button><nav class="nav" id="mainNav"><div class="nav-brand"><span class="brand-bracket">&lt;</span><span class="brand-name">AG</span><span class="brand-bracket">/&gt;</span></div><div class="nav-links" id="navLinks"><a href="#home" class="nav-link active" data-section="home">Home</a><a href="#about" class="nav-link" data-section="about">About</a><a href="#experience" class="nav-link" data-section="experience">Experience</a><a href="#projects" class="nav-link" data-section="projects">Projects</a><a href="#skills" class="nav-link" data-section="skills">Skills</a><a href="#certifications" class="nav-link" data-section="certifications">Certs</a><a href="services.html" class="nav-link">Services</a><a href="counselling.html" class="nav-link">Counselling</a><a href="games.html" class="nav-link">Games</a><a href="#contact" class="nav-link" data-section="contact">Contact</a></div><button class="nav-toggle" id="navToggle" aria-label="Toggle navigation"><span></span><span></span><span></span></button></nav><section class="hero" id="home"><div class="hero-content"><a href="counselling.html" class="hero-promo-badge"><span class="pulse-dot"></span><strong>NEW:</strong> Germany University & Career Counselling ➔ </a><div class="hero-glitch-container"><div class="hero-tag">When Data meets with AI</div><h1 class="hero-title"><span class="title-line" data-text="ARIJEET">ARIJEET</span><span class="title-line accent" data-text="GHOSAL">GHOSAL</span></h1><div class="hero-subtitle-container"><span class="hero-cursor">&gt;</span><span class="hero-subtitle" id="typewriter"></span><span class="blink-cursor">|</span></div></div><p class="hero-description"> Data Engineer & AI Enthusiast with 4+ years building end-to-end ML pipelines at <span class="highlight">Bosch</span> and <span class="highlight">Microsoft</span>. Pursuing MSc in Artificial Intelligence at BTU Cottbus-Senftenberg. </p><div class="hero-stats"><div class="stat-item"><span class="stat-number" data-target="4">0</span><span class="stat-suffix">+</span><span class="stat-label">Years Experience</span></div><div class="stat-item"><span class="stat-number" data-target="20">0</span><span class="stat-suffix">+</span><span class="stat-label">Repositories</span></div><div class="stat-item"><span class="stat-number" data-target="9">0</span><span class="stat-suffix">+</span><span class="stat-label">Certifications</span></div><div class="stat-item"><span class="stat-number" data-target="50">0</span><span class="stat-suffix">%</span><span class="stat-label">Ticket Triage Reduced</span></div></div><div class="hero-cta"><a href="#projects" class="btn btn-primary"><span class="btn-icon">◈</span> View Projects </a><a href="#contact" class="btn btn-outline"><span class="btn-icon">◇</span> Get in Touch </a><a href="services.html" class="btn btn-outline"><span class="btn-icon">◆</span> Go to Services </a><a href="counselling.html" class="btn btn-outline" style="border-color: #8b5cf6; color: #8b5cf6;"><span class="btn-icon">🎓</span> Free Counselling </a><a href="games.html" class="btn btn-outline"><span class="btn-icon">◉</span> Go to Games </a></div></div><div class="hero-visual"><div class="swiss-poster"><span class="poster-year">EST. 2022</span><span class="poster-line">DATA</span><span class="poster-line outline-text">AND AI</span><span class="poster-line">SOLUTIONS</span><div class="poster-sub">Applied Intelligence</div></div></div><div class="scroll-indicator"><div class="scroll-line"></div><span>SCROLL</span></div></section><section class="section" id="about"><div class="section-container"><div class="section-header"><span class="section-tag">About</span><h2 class="section-title">About <span class="accent">Me</span></h2><div class="section-line"></div></div><div class="about-content"><div class="about-profile"><div class="profile-card"><div class="profile-avatar"><img src="https://avatars.githubusercontent.com/u/123424345?v=4" alt="Arijeet Ghosal" class="avatar-img"><div class="avatar-ring"></div><div class="avatar-status"></div></div><h3 class="profile-name">Arijeet Ghosal</h3><p class="profile-role">Data Engineer & AI Enthusiast</p><div class="profile-location"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg> Reutlingen, Germany </div><div class="profile-divider"></div><p class="profile-bio"> Data Engineer and AI Enthusiast with <span class="highlight">4+ years</span> building end-to-end ML pipelines at <span class="highlight">Bosch</span> and <span class="highlight">Microsoft</span>. Currently pursuing MSc in Artificial Intelligence at BTU Cottbus-Senftenberg. </p><div class="profile-highlights"><div class="highlight-item"><div class="highlight-value">50%</div><div class="highlight-label">Ticket Triage Reduced</div></div><div class="highlight-item"><div class="highlight-value">40%</div><div class="highlight-label">Faster Query Resolution</div></div><div class="highlight-item"><div class="highlight-value">R²&gt;0.97</div><div class="highlight-label">Thesis Model Score</div></div></div><div class="profile-interests"><span class="interest-tag">Computer Vision</span><span class="interest-tag">NLP</span><span class="interest-tag">Generative AI</span><span class="interest-tag">MLOps</span><span class="interest-tag">Deep Learning</span></div></div></div><div class="about-info"><div class="info-card"><div class="info-icon"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a4 4 0 0 1 4 4c0 1.7-1 3.2-2.5 3.8L12 10l-1.5-.2A4 4 0 0 1 12 2z"/><path d="M12 10v4"/><path d="M6.5 13.5c-1.5 1-2.5 2.7-2.5 4.5h16c0-1.8-1-3.5-2.5-4.5"/><circle cx="6" cy="10" r="2"/><circle cx="18" cy="10" r="2"/><path d="M6 10v2"/><path d="M18 10v2"/><path d="M8 12l4 2 4-2"/></svg></div><h3>AI Research</h3><p>Thesis on ML surrogate models for combustion simulation, achieving R² > 0.97 with XGBoost — bridging engineering simulation with machine learning.</p></div><div class="info-card"><div class="info-icon"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg></div><h3>Engineering</h3><p>Building production-grade ML pipelines, from data ingestion to model deployment. Experience with Azure ML, Databricks, Docker, and CI/CD workflows.</p></div><div class="info-card"><div class="info-icon"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 8V4H8"/><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M2 12h20"/><path d="M12 2v20"/><circle cx="7" cy="7" r="1" fill="var(--primary)"/><circle cx="17" cy="7" r="1" fill="var(--primary)"/><path d="M8 16s1.5 2 4 2 4-2 4-2"/></svg></div><h3>Generative AI</h3><p>Deployed Azure OpenAI-powered Q&A tools using LangChain & RAG architecture, cutting internal query resolution time by 40%.</p></div><div class="info-card"><div class="info-icon"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M18 20V10"/><path d="M12 20V4"/><path d="M6 20v-6"/><line x1="2" y1="20" x2="22" y2="20"/></svg></div><h3>Data Analytics</h3><p>Creating actionable insights through interactive Power BI dashboards, SQL analytics, and automated reporting systems.</p></div></div></div></div></section><section class="section" id="experience"><div class="section-container"><div class="section-header"><span class="section-tag">Experience</span><h2 class="section-title">Work <span class="accent">Experience</span></h2><div class="section-line"></div></div><div class="timeline"><div class="timeline-item" data-aos="fade-right"><div class="timeline-marker"><div class="marker-pulse"></div></div><div class="timeline-content"><div class="timeline-date">Current</div><h3 class="timeline-title">Data Scientist & AI Engineer</h3><h4 class="timeline-company">Bosch E-Bike Systems</h4><p class="timeline-location">📍 Reutlingen, Germany</p><ul class="timeline-details"><li>Building end-to-end ML pipelines for e-bike systems analytics</li><li>Reduced manual ticket triage by <span class="highlight">50%</span> via NLP classification pipeline</li><li>Deployed Generative AI internal Q&A tool cutting resolution time by <span class="highlight">40%</span></li><li>Working with Azure Databricks, MLflow, and production model deployment</li></ul><div class="timeline-tags"><span class="tag">Python</span><span class="tag">Azure</span><span class="tag">NLP</span><span class="tag">MLflow</span><span class="tag">LangChain</span></div></div></div><div class="timeline-item" data-aos="fade-left"><div class="timeline-marker"><div class="marker-pulse"></div></div><div class="timeline-content"><div class="timeline-date">Previous</div><h3 class="timeline-title">Data Scientist</h3><h4 class="timeline-company">Microsoft</h4><ul class="timeline-details"><li>Built ML pipelines and data-driven solutions at enterprise scale</li><li>Worked with Azure cloud services and big data technologies</li><li>Collaborated on cross-functional data science projects</li></ul><div class="timeline-tags"><span class="tag">Azure ML</span><span class="tag">Python</span><span class="tag">SQL</span><span class="tag">Power BI</span></div></div></div><div class="timeline-item" data-aos="fade-right"><div class="timeline-marker"><div class="marker-pulse"></div></div><div class="timeline-content"><div class="timeline-date">Education</div><h3 class="timeline-title">MSc Artificial Intelligence</h3><h4 class="timeline-company">BTU Cottbus-Senftenberg</h4><p class="timeline-location">📍 Germany</p><ul class="timeline-details"><li>Thesis: ML Surrogate Models for Combustion Simulation</li><li>Achieved <span class="highlight">R² > 0.97</span> with XGBoost models</li><li>Coursework in Deep Learning, Computer Vision, NLP, and Reinforcement Learning</li></ul><div class="timeline-tags"><span class="tag">XGBoost</span><span class="tag">Deep Learning</span><span class="tag">Research</span></div></div></div></div></div></section><section class="section" id="projects"><div class="section-container"><div class="section-header"><span class="section-tag">Projects</span><h2 class="section-title">Featured <span class="accent">Projects</span></h2><div class="section-line"></div></div><div class="projects-grid"><div class="project-card featured"><div class="project-image video-preview" style="height: 195px; overflow: hidden; position: relative; background: #000;"><video src="videos/uber_bi.mp4" controls preload="metadata" style="width: 100%; height: 100%; object-fit: cover; display: block;" poster="videos/uber_thumbnail.png"></video></div><div class="project-info"><div class="project-category">Data Engineering</div><h3 class="project-title">Uber Data Analysis Dashboard</h3><p class="project-desc">Comprehensive Uber data analysis dashboard built with SQL, MariaDB, and Power BI. End-to-end data pipeline from ingestion to interactive visualization.</p><div class="project-tech"><span>SQL</span><span>MariaDB</span><span>Power BI</span><span>ETL</span></div><a href="https://github.com/arijeetghosal/Uber-Data-Analysis-Dashboard---SQL-MariaDB-and-Power-BI" target="_blank" class="project-link"> View on GitHub <span>→</span></a></div></div><div class="project-card"><div class="project-image video-preview" style="height: 195px; overflow: hidden; position: relative; background: #000;"><video src="videos/voice_bot.mp4" controls preload="metadata" style="width: 100%; height: 100%; object-fit: cover; display: block;" poster="videos/voice_bot_thumbnail.png"></video></div><div class="project-info"><div class="project-category">Generative AI</div><h3 class="project-title">Voice Bot — OpenAI & Docker</h3><p class="project-desc">AI-powered voice bot using OpenAI GPT API, containerized with Docker and deployed on Kubernetes. Features speech-to-text, NLP processing, and intelligent response generation.</p><div class="project-tech"><span>OpenAI</span><span>Docker</span><span>Kubernetes</span><span>NLP</span></div><a href="https://github.com/arijeetghosal/Voice-Bot-Using-OpenAI-and-Docker" target="_blank" class="project-link"> View on GitHub <span>→</span></a></div></div><div class="project-card"><div class="project-image video-preview" style="height: 195px; overflow: hidden; position: relative; background: #000;"><video src="videos/complaint_bot.mp4" controls preload="metadata" style="width: 100%; height: 100%; object-fit: cover; display: block;" poster="videos/complaint_bot_thumbnail.png"></video></div><div class="project-info"><div class="project-category">NLP / Chatbot</div><h3 class="project-title">Complaint Bot</h3><p class="project-desc">NLP-powered complaint classification & routing bot using Python, Streamlit & Pipedrive API. Auto-categorizes issues and escalates them to the right team.</p><div class="project-tech"><span>NLP</span><span>Streamlit</span><span>Python</span><span>Automation</span></div><a href="https://github.com/arijeetghosal/Complaint_bot" target="_blank" class="project-link"> View on GitHub <span>→</span></a></div></div><div class="project-card"><div class="project-image video-preview" style="height: 195px; overflow: hidden; position: relative; background: #000;"><video src="videos/dbscan.mp4" controls preload="metadata" style="width: 100%; height: 100%; object-fit: cover; display: block;" poster="videos/dbscan_thumbnail.png"></video></div><div class="project-info"><div class="project-category">Machine Learning</div><h3 class="project-title">DBSCAN Image Segmentation</h3><p class="project-desc">Image segmentation using DBSCAN clustering algorithm. Leverages density-based spatial clustering for computer vision segmentation tasks with Scikit-Learn.</p><div class="project-tech"><span>Scikit-Learn</span><span>Clustering</span><span>Computer Vision</span><span>Python</span></div><a href="https://github.com/arijeetghosal/DB-Scan" target="_blank" class="project-link"> View on GitHub <span>→</span></a></div></div><div class="project-card"><div class="project-image video-preview" style="height: 195px; overflow: hidden; position: relative; background: #000;"><video src="videos/credit_card_video.mp4" controls preload="metadata" style="width: 100%; height: 100%; object-fit: cover; display: block;" poster="videos/credit_card_thumbnail.png"></video></div><div class="project-info"><div class="project-category">Data Analytics</div><h3 class="project-title">Credit Card Dashboard</h3><p class="project-desc">End-to-end credit card financial analytics dashboard using Power BI, SQL & Python. Features KPIs, customer segmentation, and transaction trend analysis.</p><div class="project-tech"><span>Power BI</span><span>SQL</span><span>Python</span><span>Analytics</span></div><a href="https://github.com/arijeetghosal/Credit-Card-Dashboard-Using-PowerBI" target="_blank" class="project-link"> View on GitHub <span>→</span></a></div></div><div class="project-card"><div class="project-image video-preview" style="height: 195px; overflow: hidden; position: relative; background: #000;"><video src="videos/nvh_predictability.mp4" controls preload="metadata" style="width: 100%; height: 100%; object-fit: cover; display: block;" poster="videos/nvh_thumbnail.png"></video></div><div class="project-info"><div class="project-category">Predictive Analytics</div><h3 class="project-title">NVH Predictability Dashboard</h3><p class="project-desc">Interactive Power BI dashboard analyzing Noise, Vibration & Harshness (NVH) vehicle performance data with anomaly detection and predictive analytics.</p><div class="project-tech"><span>Power BI</span><span>Anomaly Detection</span><span>Automotive</span></div><a href="https://github.com/arijeetghosal/NVH-Predictability-using-PowerBI" target="_blank" class="project-link"> View on GitHub <span>→</span></a></div></div><div class="project-card"><div class="project-image video-preview" style="height: 195px; overflow: hidden; position: relative; background: #000;"><video src="videos/Multiclass Image segmentation.mp4" controls preload="metadata" style="width: 100%; height: 100%; object-fit: cover; display: block;"></video></div><div class="project-info"><div class="project-category">Computer Vision</div><h3 class="project-title">Multiclass Image Classification</h3><p class="project-desc">Multi-class image classification using Binary Tree algorithm. Implementing advanced computer vision techniques with deep learning models for accurate classification across multiple categories.</p><div class="project-tech"><span>Python</span><span>TensorFlow</span><span>Computer Vision</span><span>Deep Learning</span></div><a href="https://github.com/arijeetghosal/Multiclass_image_classification" target="_blank" class="project-link"> View on GitHub <span>→</span></a></div></div></div><div class="projects-cta" style="text-align: center; margin-top: 48px;"><a href="projects.html" class="btn" data-tilt>View Detailed Project Archive <span>→</span></a></div></div></section><section class="section" id="skills"><div class="section-container"><div class="section-header"><span class="section-tag">Skills</span><h2 class="section-title">Tech <span class="accent">Arsenal</span></h2><div class="section-line"></div></div><div class="skills-grid"><div class="skill-category"><div class="category-header"><div class="category-icon">🧠</div><h3>ML / AI</h3></div><div class="skill-bars"><div class="skill-item"><div class="skill-info"><span>Python</span><span class="skill-pct">95%</span></div><div class="skill-bar"><div class="skill-fill" data-width="95"></div></div></div><div class="skill-item"><div class="skill-info"><span>Scikit-Learn</span><span class="skill-pct">92%</span></div><div class="skill-bar"><div class="skill-fill" data-width="92"></div></div></div><div class="skill-item"><div class="skill-info"><span>TensorFlow / Keras</span><span class="skill-pct">88%</span></div><div class="skill-bar"><div class="skill-fill" data-width="88"></div></div></div><div class="skill-item"><div class="skill-info"><span>XGBoost</span><span class="skill-pct">90%</span></div><div class="skill-bar"><div class="skill-fill" data-width="90"></div></div></div><div class="skill-item"><div class="skill-info"><span>NLP / LangChain</span><span class="skill-pct">85%</span></div><div class="skill-bar"><div class="skill-fill" data-width="85"></div></div></div><div class="skill-item"><div class="skill-info"><span>Computer Vision</span><span class="skill-pct">87%</span></div><div class="skill-bar"><div class="skill-fill" data-width="87"></div></div></div><div class="skill-item"><div class="skill-info"><span>MLflow</span><span class="skill-pct">88%</span></div><div class="skill-bar"><div class="skill-fill" data-width="88"></div></div></div></div></div><div class="skill-category"><div class="category-header"><div class="category-icon">📊</div><h3>Data & BI</h3></div><div class="skill-bars"><div class="skill-item"><div class="skill-info"><span>SQL</span><span class="skill-pct">93%</span></div><div class="skill-bar"><div class="skill-fill" data-width="93"></div></div></div><div class="skill-item"><div class="skill-info"><span>Azure Databricks</span><span class="skill-pct">90%</span></div><div class="skill-bar"><div class="skill-fill" data-width="90"></div></div></div><div class="skill-item"><div class="skill-info"><span>Power BI</span><span class="skill-pct">92%</span></div><div class="skill-bar"><div class="skill-fill" data-width="92"></div></div></div><div class="skill-item"><div class="skill-info"><span>Apache Spark</span><span class="skill-pct">82%</span></div><div class="skill-bar"><div class="skill-fill" data-width="82"></div></div></div><div class="skill-item"><div class="skill-info"><span>KNIME</span><span class="skill-pct">85%</span></div><div class="skill-bar"><div class="skill-fill" data-width="85"></div></div></div><div class="skill-item"><div class="skill-info"><span>Pandas / NumPy</span><span class="skill-pct">94%</span></div><div class="skill-bar"><div class="skill-fill" data-width="94"></div></div></div></div></div><div class="skill-category"><div class="category-header"><div class="category-icon">☁️</div><h3>Cloud / DevOps</h3></div><div class="skill-bars"><div class="skill-item"><div class="skill-info"><span>Microsoft Azure</span><span class="skill-pct">91%</span></div><div class="skill-bar"><div class="skill-fill" data-width="91"></div></div></div><div class="skill-item"><div class="skill-info"><span>Docker</span><span class="skill-pct">85%</span></div><div class="skill-bar"><div class="skill-fill" data-width="85"></div></div></div><div class="skill-item"><div class="skill-info"><span>Git / CI/CD</span><span class="skill-pct">88%</span></div><div class="skill-bar"><div class="skill-fill" data-width="88"></div></div></div><div class="skill-item"><div class="skill-info"><span>Azure ML</span><span class="skill-pct">89%</span></div><div class="skill-bar"><div class="skill-fill" data-width="89"></div></div></div><div class="skill-item"><div class="skill-info"><span>Azure Data Factory</span><span class="skill-pct">84%</span></div><div class="skill-bar"><div class="skill-fill" data-width="84"></div></div></div></div></div></div><div class="radar-section"><h3 class="radar-title">Skill Proficiency Radar</h3><p class="radar-subtitle">Hover over the chart to explore skill areas</p><div class="radar-container"><canvas id="radarChart" width="500" height="500"></canvas><div class="radar-legend"><div class="legend-item"><span class="legend-dot" style="background: #00f0ff"></span> ML / AI</div><div class="legend-item"><span class="legend-dot" style="background: #8b5cf6"></span> Data & BI</div><div class="legend-item"><span class="legend-dot" style="background: #f472b6"></span> Cloud / DevOps</div></div></div></div></div></section><section class="section" id="certifications"><div class="section-container"><div class="section-header"><span class="section-tag">Certifications</span><h2 class="section-title"><span class="accent">Certifications</span></h2><div class="section-line"></div></div><div class="certs-grid"><div class="cert-card" onclick="this.classList.toggle('flipped')"><div class="cert-card-inner"><div class="cert-card-front"><div class="cert-badge"><svg viewBox="0 0 100 100" class="cert-ring"><circle cx="50" cy="50" r="45" fill="none" stroke="rgba(0,240,255,0.1)" stroke-width="2"/><circle cx="50" cy="50" r="45" fill="none" stroke="url(#certGrad)" stroke-width="2" stroke-dasharray="283" stroke-dashoffset="70" class="cert-progress"/></svg><span class="cert-icon">🏅</span></div><h3 class="cert-title">Azure Data Scientist Associate</h3><p class="cert-issuer">Microsoft Certified — DP-100</p><div class="cert-tag">Cloud ML</div><div class="cert-click-hint">Click to view credential</div></div><div class="cert-card-back"><div class="cert-screenshot"><div class="cert-vector ms-theme"><div class="vector-seal"></div><div class="vector-title">Microsoft Certified</div><div class="vector-subtitle">Azure Data Scientist</div><div class="vector-footer">DP-100</div></div></div><h4 class="cert-back-title">Verified Expertise</h4><p class="cert-back-desc">Machine Learning pipelines, automated ML, hyperparameter tuning, model training, compute cluster management on Microsoft Azure.</p><div class="cert-back-action">Click to flip back</div></div></div></div><div class="cert-card" onclick="this.classList.toggle('flipped')"><div class="cert-card-inner"><div class="cert-card-front"><div class="cert-badge"><svg viewBox="0 0 100 100" class="cert-ring"><circle cx="50" cy="50" r="45" fill="none" stroke="rgba(0,240,255,0.1)" stroke-width="2"/><circle cx="50" cy="50" r="45" fill="none" stroke="url(#certGrad)" stroke-width="2" stroke-dasharray="283" stroke-dashoffset="40" class="cert-progress"/></svg><span class="cert-icon">🏅</span></div><h3 class="cert-title">Azure AI Engineer Associate</h3><p class="cert-issuer">Microsoft Certified — AI-102</p><div class="cert-tag">Cloud AI</div><div class="cert-click-hint">Click to view credential</div></div><div class="cert-card-back"><div class="cert-screenshot"><div class="cert-vector ms-theme data-eng"><div class="vector-seal"></div><div class="vector-title">Microsoft Certified</div><div class="vector-subtitle">Azure AI Engineer</div><div class="vector-footer">AI-102</div></div></div><h4 class="cert-back-title">Verified Expertise</h4><p class="cert-back-desc">Azure OpenAI Service, Cognitive Search, custom computer vision, speech & language translation APIs, conversational agent setup.</p><div class="cert-back-action">Click to flip back</div></div></div></div><div class="cert-card" onclick="this.classList.toggle('flipped')"><div class="cert-card-inner"><div class="cert-card-front"><div class="cert-badge"><svg viewBox="0 0 100 100" class="cert-ring"><circle cx="50" cy="50" r="45" fill="none" stroke="rgba(0,240,255,0.1)" stroke-width="2"/><circle cx="50" cy="50" r="45" fill="none" stroke="url(#certGrad)" stroke-width="2" stroke-dasharray="283" stroke-dashoffset="50" class="cert-progress"/></svg><span class="cert-icon">⚡</span></div><h3 class="cert-title">Associate Developer Apache Spark</h3><p class="cert-issuer">Databricks Certified</p><div class="cert-tag">Big Data</div><div class="cert-click-hint">Click to view credential</div></div><div class="cert-card-back"><div class="cert-screenshot"><div class="cert-vector ms-theme data-eng"><div class="vector-seal"></div><div class="vector-title">Databricks Certified</div><div class="vector-subtitle">Spark Developer</div><div class="vector-footer">Apache Spark</div></div></div><h4 class="cert-back-title">Verified Expertise</h4><p class="cert-back-desc">Spark architecture theory, DataFrame APIs, queries, transformations, schema manipulation, performance tuning.</p><div class="cert-back-action">Click to flip back</div></div></div></div><div class="cert-card" onclick="this.classList.toggle('flipped')"><div class="cert-card-inner"><div class="cert-card-front"><div class="cert-badge"><svg viewBox="0 0 100 100" class="cert-ring"><circle cx="50" cy="50" r="45" fill="none" stroke="rgba(0,240,255,0.1)" stroke-width="2"/><circle cx="50" cy="50" r="45" fill="none" stroke="url(#certGrad)" stroke-width="2" stroke-dasharray="283" stroke-dashoffset="30" class="cert-progress"/></svg><span class="cert-icon">☁️</span></div><h3 class="cert-title">AWS Certified Data Engineer</h3><p class="cert-issuer">Amazon Web Services — DEA-C01</p><div class="cert-tag">Cloud Data</div><div class="cert-click-hint">Click to view credential</div></div><div class="cert-card-back"><div class="cert-screenshot"><div class="cert-vector ms-theme"><div class="vector-seal"></div><div class="vector-title">AWS Certified</div><div class="vector-subtitle">Data Engineer Associate</div><div class="vector-footer">DEA-C01</div></div></div><h4 class="cert-back-title">Verified Expertise</h4><p class="cert-back-desc">Data pipelines ingestion, orchestration, storage optimization, modeling, and AWS analytics tools like Glue, Redshift, Athena.</p><div class="cert-back-action">Click to flip back</div></div></div></div><div class="cert-card" onclick="this.classList.toggle('flipped')"><div class="cert-card-inner"><div class="cert-card-front"><div class="cert-badge"><svg viewBox="0 0 100 100" class="cert-ring"><circle cx="50" cy="50" r="45" fill="none" stroke="rgba(0,240,255,0.1)" stroke-width="2"/><circle cx="50" cy="50" r="45" fill="none" stroke="url(#certGrad)" stroke-width="2" stroke-dasharray="283" stroke-dashoffset="65" class="cert-progress"/></svg><span class="cert-icon">🧠</span></div><h3 class="cert-title">TensorFlow Developer</h3><p class="cert-issuer">Google Certified Partner</p><div class="cert-tag">Deep Learning</div><div class="cert-click-hint">Click to view credential</div></div><div class="cert-card-back"><div class="cert-screenshot"><div class="cert-vector google-theme"><div class="vector-seal"></div><div class="vector-title">Google Certified</div><div class="vector-subtitle">TensorFlow Developer</div><div class="vector-footer">TF Developer</div></div></div><h4 class="cert-back-title">Verified Expertise</h4><p class="cert-back-desc">Building neural networks, convolutional neural networks (CNNs), NLP text classification, time series forecasting with TF 2.x.</p><div class="cert-back-action">Click to flip back</div></div></div></div><div class="cert-card" onclick="this.classList.toggle('flipped')"><div class="cert-card-inner"><div class="cert-card-front"><div class="cert-badge"><svg viewBox="0 0 100 100" class="cert-ring"><circle cx="50" cy="50" r="45" fill="none" stroke="rgba(0,240,255,0.1)" stroke-width="2"/><circle cx="50" cy="50" r="45" fill="none" stroke="url(#certGrad)" stroke-width="2" stroke-dasharray="283" stroke-dashoffset="45" class="cert-progress"/></svg><span class="cert-icon">⚙️</span></div><h3 class="cert-title">dbt Certified Developer</h3><p class="cert-issuer">dbt Labs Certified</p><div class="cert-tag">Analytics Engineering</div><div class="cert-click-hint">Click to view credential</div></div><div class="cert-card-back"><div class="cert-screenshot"><div class="cert-vector knime-theme"><div class="vector-seal"></div><div class="vector-title">dbt Labs Certified</div><div class="vector-subtitle">dbt Developer</div><div class="vector-footer">Analytics Eng</div></div></div><h4 class="cert-back-title">Verified Expertise</h4><p class="cert-back-desc">Transformations modeling, dry runs, tests execution, package setups, modular SQL compilation, and CI/CD version control.</p><div class="cert-back-action">Click to flip back</div></div></div></div><div class="cert-card" onclick="this.classList.toggle('flipped')"><div class="cert-card-inner"><div class="cert-card-front"><div class="cert-badge"><svg viewBox="0 0 100 100" class="cert-ring"><circle cx="50" cy="50" r="45" fill="none" stroke="rgba(0,240,255,0.1)" stroke-width="2"/><circle cx="50" cy="50" r="45" fill="none" stroke="url(#certGrad)" stroke-width="2" stroke-dasharray="283" stroke-dashoffset="35" class="cert-progress"/></svg><span class="cert-icon">🔄</span></div><h3 class="cert-title">Airflow Certified DAG Author</h3><p class="cert-issuer">Astronomer Academy</p><div class="cert-tag">Orchestration</div><div class="cert-click-hint">Click to view credential</div></div><div class="cert-card-back"><div class="cert-screenshot"><div class="cert-vector knime-theme"><div class="vector-seal"></div><div class="vector-title">Astronomer Certified</div><div class="vector-subtitle">Apache Airflow DAG Author</div><div class="vector-footer">Orchestration</div></div></div><h4 class="cert-back-title">Verified Expertise</h4><p class="cert-back-desc">DAG design, scheduling tasks, custom operators, cross-DAG dependencies, task flow API, and backfill execution.</p><div class="cert-back-action">Click to flip back</div></div></div></div><div class="cert-card" onclick="this.classList.toggle('flipped')"><div class="cert-card-inner"><div class="cert-card-front"><div class="cert-badge"><svg viewBox="0 0 100 100" class="cert-ring"><circle cx="50" cy="50" r="45" fill="none" stroke="rgba(0,240,255,0.1)" stroke-width="2"/><circle cx="50" cy="50" r="45" fill="none" stroke="url(#certGrad)" stroke-width="2" stroke-dasharray="283" stroke-dashoffset="60" class="cert-progress"/></svg><span class="cert-icon">📊</span></div><h3 class="cert-title">Google Analytics (GAIQ)</h3><p class="cert-issuer">Google Certified</p><div class="cert-tag">Web Analytics</div><div class="cert-click-hint">Click to view credential</div></div><div class="cert-card-back"><div class="cert-screenshot"><div class="cert-vector google-theme"><div class="vector-seal"></div><div class="vector-title">Google Analytics</div><div class="vector-subtitle">Individual Qualification</div><div class="vector-footer">GAIQ</div></div></div><h4 class="cert-back-title">Verified Expertise</h4><p class="cert-back-desc">GA4 configuration tracking, custom report creation, funnel analytics, attribution pipelines, demographic filters.</p><div class="cert-back-action">Click to flip back</div></div></div></div><div class="cert-card" onclick="this.classList.toggle('flipped')"><div class="cert-card-inner"><div class="cert-card-front"><div class="cert-badge"><svg viewBox="0 0 100 100" class="cert-ring"><circle cx="50" cy="50" r="45" fill="none" stroke="rgba(0,240,255,0.1)" stroke-width="2"/><circle cx="50" cy="50" r="45" fill="none" stroke="url(#certGrad)" stroke-width="2" stroke-dasharray="283" stroke-dashoffset="40" class="cert-progress"/></svg><span class="cert-icon">☁️</span></div><h3 class="cert-title">Professional Data Engineer</h3><p class="cert-issuer">Google Cloud Certified</p><div class="cert-tag">Cloud Architecture</div><div class="cert-click-hint">Click to view credential</div></div><div class="cert-card-back"><div class="cert-screenshot"><div class="cert-vector google-theme"><div class="vector-seal"></div><div class="vector-title">Google Cloud</div><div class="vector-subtitle">Professional Data Engineer</div><div class="vector-footer">GCP-PDE</div></div></div><h4 class="cert-back-title">Verified Expertise</h4><p class="cert-back-desc">Designing, building, operationalizing scalable storage, data transformation, BigQuery data warehousing, Dataproc Spark workflows.</p><div class="cert-back-action">Click to flip back</div></div></div></div></div></div></section><section class="section" id="services-teaser"><div class="section-container"><div class="section-header"><span class="section-tag">&lt;services&gt;</span><h2 class="section-title">Hire For <span class="accent">Projects</span></h2><div class="section-line"></div></div><div class="about-content" style="grid-template-columns: 1fr; text-align: center; max-width: 800px; margin: 0 auto;"><p style="font-size: 1.1rem; line-height: 1.8; color: var(--text-secondary); margin-bottom: 32px;"> Need assistance setting up database pipelines, styling custom Power BI visualization dashboards, writing clean Python modules, or deploying containerized Machine Learning agents? Hire Arijeet for your custom projects at highly nominal rates. </p><div class="services-grid-container" style="margin-bottom: 40px; display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 16px;"><div class="service-card" style="padding: 24px; min-height: auto; text-align: center;"><h3 class="service-title" style="margin-bottom: 8px;">Data Analysis</h3><p class="service-desc" style="margin-bottom: 0;">Exploration starts at <strong class="accent">$19</strong></p></div><div class="service-card" style="padding: 24px; min-height: auto; text-align: center;"><h3 class="service-title" style="margin-bottom: 8px;">Visualisation</h3><p class="service-desc" style="margin-bottom: 0;">Dashboards start at <strong class="accent">$29</strong></p></div><div class="service-card" style="padding: 24px; min-height: auto; text-align: center;"><h3 class="service-title" style="margin-bottom: 8px;">Data Engineering</h3><p class="service-desc" style="margin-bottom: 0;">Pipelines start at <strong class="accent">$49</strong></p></div><div class="service-card" style="padding: 24px; min-height: auto; text-align: center;"><h3 class="service-title" style="margin-bottom: 8px;">AI & Dev</h3><p class="service-desc" style="margin-bottom: 0;">ML builds start at <strong class="accent">$99</strong></p></div></div><a href="services.html" class="btn" data-tilt style="display: inline-block;">Calculate Project Price & Order <span>→</span></a></div></div></section><section class="section" id="counselling-teaser"><div class="section-container"><div class="section-header"><span class="section-tag">&lt;counselling&gt;</span><h2 class="section-title">Germany <span class="accent">Counselling</span></h2><div class="section-line"></div></div><div class="about-content" style="grid-template-columns: 1fr; text-align: center; max-width: 860px; margin: 0 auto;"><p style="font-size: 1.1rem; line-height: 1.8; color: var(--text-secondary); margin-bottom: 36px;"> Applying to a German university or navigating the German job market? Arijeet offers personalized guidance — from APS document checks and motivation letter reviews to Werkstudent strategy and CV (Lebenslauf) optimization. </p><div class="services-grid-container" style="margin-bottom: 40px; display: grid; grid-template-columns: repeat(auto-fit, minmax(190px, 1fr)); gap: 16px;"><div class="service-card" style="padding: 24px; min-height: auto; text-align: center;"><div style="font-size: 2rem; margin-bottom: 10px;">🎓</div><h3 class="service-title" style="margin-bottom: 6px;">University Roadmap</h3><p class="service-desc" style="margin-bottom: 0;">APS, uni-assist, LoM &amp; VPD guidance</p></div><div class="service-card" style="padding: 24px; min-height: auto; text-align: center;"><div style="font-size: 2rem; margin-bottom: 10px;">📄</div><h3 class="service-title" style="margin-bottom: 6px;">German CV Review</h3><p class="service-desc" style="margin-bottom: 0;">ATS-optimized Lebenslauf format</p></div><div class="service-card" style="padding: 24px; min-height: auto; text-align: center;"><div style="font-size: 2rem; margin-bottom: 10px;">💼</div><h3 class="service-title" style="margin-bottom: 6px;">Werkstudent &amp; Jobs</h3><p class="service-desc" style="margin-bottom: 0;">Student jobs, internships &amp; thesis strategy</p></div><div class="service-card" style="padding: 24px; min-height: auto; text-align: center;"><div style="font-size: 2rem; margin-bottom: 10px;">🚀</div><h3 class="service-title" style="margin-bottom: 6px;">Full-Time &amp; Blue Card</h3><p class="service-desc" style="margin-bottom: 0;">Job seeker visa, Blue Card &amp; PR pathways</p></div></div><a href="counselling.html" class="btn" data-tilt style="display: inline-block;">Explore Counselling Guides <span>→</span></a></div></div></section><section class="section" id="contact"><div class="section-container"><div class="section-header"><span class="section-tag">Contact</span><h2 class="section-title">Let's <span class="accent">Connect</span></h2><div class="section-line"></div></div><div class="contact-content"><div class="contact-info"><p class="contact-intro">Interested in AI, data science, or potential collaborations? Let's talk.</p><div class="contact-cards"><a href="mailto:arijeetghosal.de@gmail.com" class="contact-card" data-tilt><div class="contact-card-icon">✉️</div><div class="contact-card-details"><span class="contact-card-label">Email</span><span class="contact-card-value">arijeetghosal.de@gmail.com</span></div><span class="contact-arrow">→</span></a><a href="https://www.linkedin.com/in/arijeetghosal" target="_blank" class="contact-card" data-tilt><div class="contact-card-icon">💼</div><div class="contact-card-details"><span class="contact-card-label">LinkedIn</span><span class="contact-card-value">in/arijeetghosal</span></div><span class="contact-arrow">→</span></a><a href="https://github.com/arijeetghosal" target="_blank" class="contact-card" data-tilt><div class="contact-card-icon">💻</div><div class="contact-card-details"><span class="contact-card-label">GitHub</span><span class="contact-card-value">arijeetghosal</span></div><span class="contact-arrow">→</span></a><div class="contact-card"><div class="contact-card-icon">📍</div><div class="contact-card-details"><span class="contact-card-label">Location</span><span class="contact-card-value">Reutlingen, Germany</span></div></div></div></div></div></div></section><footer class="footer"><div class="footer-content"><div class="footer-brand"><span class="brand-bracket">&lt;</span><span class="brand-name">Arijeet Ghosal</span><span class="brand-bracket">/&gt;</span></div><p class="footer-text">Designed with neural precision. Built with passion.</p><div class="footer-links"><a href="https://github.com/arijeetghosal" target="_blank">GitHub</a><a href="https://www.linkedin.com/in/arijeetghosal" target="_blank">LinkedIn</a><a href="mailto:arijeetghosal.de@gmail.com">Email</a></div><p class="footer-copyright">© 2026 Arijeet Ghosal. All rights reserved.</p></div></footer><svg style="position:absolute;width:0;height:0;"><defs><linearGradient id="certGrad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#00f0ff;stop-opacity:1" /><stop offset="100%" style="stop-color:#8b5cf6;stop-opacity:1" /></linearGradient></defs></svg><div class="chatbot-container" id="chatbot"><button class="chatbot-toggle" id="chatbotToggle" aria-label="Toggle chatbot"><span class="chatbot-pulse"></span><span class="avatar-toggle-shell"><img src="chatbot_icon.png" alt="Steve Chatbot" class="chatbot-toggle-avatar" style="width: 100%; height: 100%; border-radius: 50%; object-fit: cover;"><span class="avatar-face-glow"></span></span><svg class="chat-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg><svg class="close-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></button><div class="chatbot-window"><div class="chatbot-header"><div class="chatbot-avatar"><div class="avatar-shell"><img src="chatbot_icon.png" alt="Steve Chatbot" class="chatbot-toggle-avatar" style="width: 100%; height: 100%; border-radius: 50%; object-fit: cover;"><span class="avatar-face-glow"></span></div><span class="chatbot-status"></span></div><div class="chatbot-header-info"><h4>Chatbot <span class="meta-badge">AI</span></h4><span>Chat with assistant · Online</span></div></div><div class="chatbot-messages" id="chatbotMessages"><div class="chat-message bot"><div class="chat-content">Hello! I'm your portfolio assistant. Ask me about Arijeet's work, projects, or services.</div><button class="chat-speech-btn" title="Speak Response">🔊</button></div></div><div class="chatbot-suggestions"><button class="suggest-btn" data-query="Who is Arijeet?">Who is Arijeet?</button><button class="suggest-btn" data-query="Tell me about Uber Dashboard">Uber Dashboard</button><button class="suggest-btn" data-query="Give me a crazy AI fact">Crazy AI Fact</button><button class="suggest-btn" data-query="Latest AI news">Latest AI News</button></div><div class="chatbot-input-area"><input type="text" id="chatbotInput" placeholder="Ask anything..." aria-label="Type message"><button id="chatbotMic" aria-label="Voice input" class="chatbot-mic-btn" style="background: none; border: none; font-size: 1.1rem; cursor: pointer; display: flex; align-items: center; justify-content: center; width: 38px; height: 38px; border-radius: 50%; transition: background 0.3s; margin-right: 4px; color: var(--text-secondary);">🎙️</button><button id="chatbotSend" aria-label="Send message"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg></button></div></div></div><script src="common.js"></script><script src="script.js"></script><script src="avatar3d.js"></script></body></html>
```

### File: projects.html
```html
<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Project Hub | Arijeet Ghosal</title><meta name="description" content="Categorized AI, Data Engineering, and Data Analysis projects directory of Arijeet Ghosal."><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet"><link rel="stylesheet" href="style.css"><link rel="stylesheet" href="swiss-override.css"><link rel="shortcut icon" type="image/png" href="chatbot_icon.png"><style> /* Override: ensure all sections and animated children are visible on this sub-page */ .projects-page-body .section, .projects-page-body .project-card, .projects-page-body .info-card, .projects-page-body .cert-card, .projects-page-body .timeline-item, .projects-page-body .contact-card, .projects-page-body .skill-category, .projects-page-body .service-card { opacity: 1 !important; transform: none !important; } </style></head><body class="projects-page-body"><div class="scroll-progress" id="scrollProgress"></div><canvas class="neural-canvas" id="neural-canvas"></canvas><canvas class="click-canvas" id="click-canvas"></canvas><div class="cursor-glow" id="cursorGlow"></div><div class="cursor-dot" id="cursorDot"></div><button class="back-to-top" id="backToTop" aria-label="Back to top"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 15l-6-6-6 6"/></svg></button><nav class="nav scrolled"><div class="nav-brand"><span class="brand-bracket">&lt;</span><span class="brand-name">AG</span><span class="brand-bracket">/&gt;</span></div><div class="nav-links"><a href="index.html" class="nav-link">← Back to Profile</a><a href="projects.html" class="nav-link active">Project Archive</a><a href="services.html" class="nav-link">Services</a><a href="counselling.html" class="nav-link">Counselling</a><a href="games.html" class="nav-link">Games</a></div></nav><section class="hub-hero" id="home"><div class="hub-hero-content"><span class="section-tag">&gt; index_directories...</span><h1 class="hub-title">Project <span class="accent">Directory</span></h1><p class="hub-subtitle">Explore categorized AI, Data Engineering, and Analytics systems.</p></div></section><section class="section" id="projects-hub"><div class="section-container"><div class="hub-controls"><div class="search-box"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="search-icon"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg><input type="text" id="hubSearch" placeholder="Filter by technology, keyword, or tool..."></div><div class="filter-tabs" id="filterTabs"><button class="tab-btn active" data-filter="all">All Modules</button><button class="tab-btn" data-filter="data-eng">Data Engineering</button><button class="tab-btn" data-filter="data-analysis">Data Analysis</button><button class="tab-btn" data-filter="visualization">Analysis & Vis</button><button class="tab-btn" data-filter="reporting">Reporting & Docs</button><button class="tab-btn" data-filter="ai-ml">AI / ML</button></div></div><div class="hub-catalog" id="hubCatalog"></div></div></section><footer class="footer"><div class="footer-content"><div class="footer-brand"><span class="brand-bracket">&lt;</span><span class="brand-name">Arijeet Ghosal</span><span class="brand-bracket">/&gt;</span></div><p class="footer-text">Structured data systems. Scalable intelligence.</p><p class="footer-copyright">© 2026 Arijeet Ghosal. All rights reserved.</p></div></footer><svg style="position:absolute;width:0;height:0;"><defs><linearGradient id="certGrad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#00f0ff;stop-opacity:1" /><stop offset="100%" style="stop-color:#8b5cf6;stop-opacity:1" /></linearGradient></defs></svg><script src="common.js"></script><script src="projects.js"></script></body></html>
```

### File: services.html
```html
<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Professional Services | Arijeet Ghosal</title><meta name="description" content="Hire Arijeet Ghosal for Data Engineering, Analysis, Visualization, and AI development services. Affordable prices and structured delivery."><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet"><link rel="stylesheet" href="style.css"><link rel="stylesheet" href="swiss-override.css"><link rel="shortcut icon" type="image/png" href="chatbot_icon.png"><style> /* Override: ensure all sections and animated children are visible on this sub-page */ .services-page-body .section, .services-page-body .project-card, .services-page-body .info-card, .services-page-body .cert-card, .services-page-body .timeline-item, .services-page-body .contact-card, .services-page-body .skill-category, .services-page-body .service-card { opacity: 1 !important; transform: none !important; } </style></head><body class="services-page-body"><div class="scroll-progress" id="scrollProgress"></div><canvas class="neural-canvas" id="neural-canvas"></canvas><canvas class="click-canvas" id="click-canvas"></canvas><div class="cursor-glow" id="cursorGlow"></div><div class="cursor-dot" id="cursorDot"></div><button class="back-to-top" id="backToTop" aria-label="Back to top"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 15l-6-6-6 6"/></svg></button><nav class="nav scrolled"><div class="nav-brand"><span class="brand-bracket">&lt;</span><span class="brand-name">AG</span><span class="brand-bracket">/&gt;</span></div><div class="nav-links"><a href="index.html" class="nav-link">← Back to Profile</a><a href="projects.html" class="nav-link">Project Archive</a><a href="services.html" class="nav-link active">Services</a><a href="counselling.html" class="nav-link">Counselling</a><a href="games.html" class="nav-link">Games</a></div></nav><section class="hub-hero"><div class="hub-hero-content"><span class="section-tag">&gt; deploy_consulting_modules...</span><h1 class="hub-title">Professional <span class="accent">Services</span></h1><p class="hub-subtitle">High-quality, affordable technical services. Select a tier, describe your project, upload docs, and launch today.</p></div></section><section class="section" id="tools-section" style="padding-top: 0;"><div class="section-container"><div class="section-header"><span class="section-tag">&lt;tools&gt;</span><h2 class="section-title">Tools & <span class="accent">Technologies</span></h2><div class="section-line"></div></div><div class="tools-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); gap: 14px; margin-top: 32px;"><div class="tool-chip">🐍 Python</div><div class="tool-chip">🗄️ SQL / MariaDB</div><div class="tool-chip">📊 Power BI</div><div class="tool-chip">🧠 TensorFlow</div><div class="tool-chip">⚡ Apache Spark</div><div class="tool-chip">🔄 Apache Airflow</div><div class="tool-chip">📐 Scikit-Learn</div><div class="tool-chip">🏗️ dbt</div><div class="tool-chip">☁️ Azure</div><div class="tool-chip">☁️ AWS</div><div class="tool-chip">☁️ GCP / BigQuery</div><div class="tool-chip">🐳 Docker</div><div class="tool-chip">☸️ Kubernetes</div><div class="tool-chip">🤖 OpenAI APIs</div><div class="tool-chip">⚛️ React / Node.js</div><div class="tool-chip">🔥 FastAPI</div><div class="tool-chip">📈 XGBoost</div><div class="tool-chip">🧪 Pandas / NumPy</div><div class="tool-chip">📉 Matplotlib / Seaborn</div><div class="tool-chip">🗂️ Git / GitHub</div><div class="tool-chip">💬 NLP / BERT</div><div class="tool-chip">🖼️ Computer Vision</div><div class="tool-chip">🏪 Databricks</div><div class="tool-chip">📝 Tableau</div></div></div></section><section class="section" id="services-hub" style="padding-top: 0;"><div class="section-container"><div class="section-header"><span class="section-tag">&lt;pricing&gt;</span><h2 class="section-title">Affordable <span class="accent">Packages</span></h2><div class="section-line"></div></div><div class="services-grid-container"><div class="service-card" data-base-price="19"><div class="service-price-badge">$19<span>Base</span></div><div class="service-icon">📊</div><h3 class="service-title">Data Analyst Projects</h3><p class="service-desc">Complete diagnostic analysis of raw business databases. Cleaning data, performing statistical analysis, and generating executive reports.</p><ul class="service-bullets"><li>Standardized data cleaning (Pandas/SQL)</li><li>Cohort & customer segmentation</li><li>Statistical anomaly detection</li><li>Executive summary documentation</li></ul><div class="service-sample-project"><strong>Showcase Project:</strong><a href="https://github.com/arijeetghosal/NVH-Predictability-using-PowerBI" target="_blank">NVH Predictive Signals Analysis ↗</a></div></div><div class="service-card" data-base-price="29"><div class="service-price-badge">$29<span>Base</span></div><div class="service-icon">📉</div><h3 class="service-title">Visualisation Projects</h3><p class="service-desc">Transform raw databases into fully interactive, visual reporting dashboards that bring your KPIs to life with real-time analytics.</p><ul class="service-bullets"><li>Interactive Power BI / Tableau dashboard builds</li><li>Advanced DAX custom measures</li><li>Geospatial analysis & maps integration</li><li>Custom styling & theme matching</li></ul><div class="service-sample-project"><strong>Showcase Project:</strong><a href="https://github.com/arijeetghosal/Credit-Card-Dashboard-Using-PowerBI" target="_blank">Credit Card Spending Board ↗</a></div></div><div class="service-card" data-base-price="49"><div class="service-price-badge">$49<span>Base</span></div><div class="service-icon">🗄️</div><h3 class="service-title">Data Engineering</h3><p class="service-desc">Setting up robust, automated ETL pipelines, data warehouses, staging servers, and clean staging database orchestrations.</p><ul class="service-bullets"><li>Pipeline configuration (Spark/Python)</li><li>Staging database schemas setup</li><li>REST API ingestion orchestration</li><li>dbt/Airflow scheduling workflows</li></ul><div class="service-sample-project"><strong>Showcase Project:</strong><a href="https://github.com/arijeetghosal/Uber-Data-Analysis-Dashboard---SQL-MariaDB-and-Power-BI" target="_blank">Uber Ingestion Staging Pipeline ↗</a></div></div><div class="service-card" data-base-price="99"><div class="service-price-badge">$99<span>Base</span></div><div class="service-icon">🤖</div><h3 class="service-title">Custom Development & AI</h3><p class="service-desc">Bespoke software builds, machine learning APIs, custom OpenAI chatbot integrations, neural networks, and web applications.</p><ul class="service-bullets"><li>FastAPI/Node.js custom microservices</li><li>TensorFlow CNN classifier training</li><li>Containerized applications (Docker/K8s)</li><li>OpenAI GPT-4 API assistant integrations</li></ul><div class="service-sample-project"><strong>Showcase Project:</strong><a href="https://github.com/arijeetghosal/Voice-Bot-Using-OpenAI-and-Docker" target="_blank">Voice Bot AI with Docker & K8s ↗</a></div></div></div></div></section><section class="section" style="padding-top: 0;"><div class="section-container"><div class="calculator-container"><div class="calculator-header"><span class="calculator-tag">&gt; configure_proposal_specifications...</span><h2 class="calculator-title">Quick Price <span class="accent">Calculator</span></h2></div><div class="calculator-layout"><form class="calculator-form" id="projectForm"><div class="form-group"><label for="serviceSelect">Select Service Tier</label><select id="serviceSelect" class="form-control"><option value="19" data-label="Data Analyst Project">Data Analyst Project — $19</option><option value="29" data-label="Data Visualisation">Data Visualisation — $29</option><option value="49" data-label="Data Engineering Pipeline">Data Engineering Pipeline — $49</option><option value="99" data-label="Development & AI Solutions">Custom Development & AI — $99</option></select></div><div class="form-group"><label>Add-on Features</label><div class="checkbox-group"><label class="checkbox-label"><input type="checkbox" value="15" class="addon-checkbox"><span>Real-Time API Sync (+$15)</span></label><label class="checkbox-label"><input type="checkbox" value="20" class="addon-checkbox"><span>Cloud Deployment (Azure/AWS) (+$20)</span></label><label class="checkbox-label"><input type="checkbox" value="25" class="addon-checkbox"><span>High-Performance DB staging (+$25)</span></label><label class="checkbox-label"><input type="checkbox" value="10" class="addon-checkbox"><span>Priority 48-Hour Delivery (+$10)</span></label></div></div><div class="form-group"><label for="projectScope">Explain Your Project & Requirements</label><textarea id="projectScope" class="form-control" rows="4" placeholder="Describe what you want to build, input datasets, desired charts/APIs, or custom requirements..."></textarea></div><div class="form-group"><label for="clientEmail">Your Contact Email</label><input type="email" id="clientEmail" class="form-control" placeholder="client@company.com" required></div></form><div class="calculator-quote"><h4 class="quote-header">Estimated Quote</h4><div class="quote-price-display"><span class="quote-currency">$</span><span class="quote-value" id="calcPrice">19</span></div><div class="quote-breakdown"><p><strong>Selected Tier:</strong><span id="breakdownTier">Data Analyst Project</span></p><p><strong>Add-ons Total:</strong> $<span id="breakdownAddons">0</span></p></div><button type="submit" form="projectForm" class="btn btn-order" id="submitOrderBtn">Submit Quick Request</button><div class="quote-instructions"> 💡 Submitting this will compile a connection email directly to Arijeet's inbox. </div></div></div><div class="submission-console" id="subConsole"><div class="console-log-header"><span>[system_log: mail_dispatch.service]</span></div><div class="console-log-body" id="subConsoleBody"></div></div></div></div></section><section class="section" style="padding-top: 0;"><div class="section-container"><div class="calculator-container"><div class="calculator-header"><span class="calculator-tag">&gt; submit_full_project_brief...</span><h2 class="calculator-title">Submit Your <span class="accent">Project</span></h2><p style="color: var(--text-secondary); margin-top: 12px; font-size: 0.95rem; line-height: 1.7;"> Have a complete project in mind? Fill in the details below — upload your documentation, state your budget, and Arijeet will get back to you within 24 hours. </p></div><div style="max-width: 700px; margin: 0 auto;"><form class="calculator-form" id="fullProjectForm"><div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;"><div class="form-group"><label for="fpName">Your Full Name *</label><input type="text" id="fpName" class="form-control" placeholder="Jane Doe" required></div><div class="form-group"><label for="fpEmail">Your Email *</label><input type="email" id="fpEmail" class="form-control" placeholder="jane@company.com" required></div></div><div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;"><div class="form-group"><label for="fpPhone">Phone (Optional)</label><input type="tel" id="fpPhone" class="form-control" placeholder="+49 170 123 4567"></div><div class="form-group"><label for="fpCompany">Company / Organization</label><input type="text" id="fpCompany" class="form-control" placeholder="Acme Corp"></div></div><div class="form-group"><label for="fpCategory">Project Category *</label><select id="fpCategory" class="form-control" required><option value="">— Select a category —</option><option value="Data Analysis">Data Analysis & Reporting</option><option value="Visualisation">Dashboard & Visualisation</option><option value="Data Engineering">Data Engineering & Pipelines</option><option value="AI & ML">AI & Machine Learning</option><option value="Web Development">Web / App Development</option><option value="Custom">Custom / Other</option></select></div><div class="form-group"><label for="fpTitle">Project Title *</label><input type="text" id="fpTitle" class="form-control" placeholder="E.g., Sales Forecasting Dashboard with Real-Time ETL" required></div><div class="form-group"><label for="fpDescription">Full Project Description *</label><textarea id="fpDescription" class="form-control" rows="6" placeholder="Describe your project in detail: objectives, datasets, expected outputs, technologies you prefer, timeline expectations, and any special requirements..." required></textarea></div><div class="form-group"><label for="fpDoc">Upload Documentation (PDF, DOCX, ZIP — max 10MB)</label><input type="file" id="fpDoc" class="form-control" accept=".pdf,.doc,.docx,.zip,.rar,.txt,.csv,.xlsx" style="padding: 12px; cursor: pointer;"><small style="color: var(--text-muted); margin-top: 6px; display: block;"> Upload project briefs, requirements docs, sample data files, or architecture diagrams. </small></div><div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;"><div class="form-group"><label for="fpBudget">Your Proposed Budget ($) *</label><input type="number" id="fpBudget" class="form-control" placeholder="e.g. 75" min="5" required></div><div class="form-group"><label for="fpDeadline">Preferred Deadline</label><input type="date" id="fpDeadline" class="form-control"></div></div><div class="form-group"><label for="fpNotes">Additional Notes (Optional)</label><textarea id="fpNotes" class="form-control" rows="3" placeholder="Anything else you'd like to mention — preferred communication channel, timezone, etc."></textarea></div><button type="submit" class="btn btn-order" style="width: 100%; margin-top: 16px; font-size: 1.05rem; padding: 16px;"> 🚀 Submit Full Project Brief </button></form><div class="submission-console" id="fpConsole" style="margin-top: 24px;"><div class="console-log-header"><span>[system_log: project_intake.service]</span></div><div class="console-log-body" id="fpConsoleBody"></div></div></div></div></div></section><section class="section" style="padding-top: 0;"><div class="section-container"><div class="calculator-container"><div class="calculator-header"><span class="calculator-tag">&gt; contact_support_channel...</span><h2 class="calculator-title">General <span class="accent">Inquiry</span></h2></div><div style="max-width: 600px; margin: 0 auto;"><form class="calculator-form" id="queryForm"><div class="form-group"><label for="queryName">Your Name</label><input type="text" id="queryName" class="form-control" placeholder="John Doe" required></div><div class="form-group"><label for="queryEmail">Your Email</label><input type="email" id="queryEmail" class="form-control" placeholder="john@example.com" required></div><div class="form-group"><label for="querySubject">Subject</label><input type="text" id="querySubject" class="form-control" placeholder="Project Question / General Support" required></div><div class="form-group"><label for="queryBody">Message Details</label><textarea id="queryBody" class="form-control" rows="4" placeholder="How can Arijeet help you? Enter details here..." required></textarea></div><button type="submit" class="btn btn-order" style="width: 100%; margin-top: 16px;">Send Query Message</button></form><div class="submission-console" id="queryConsole" style="margin-top: 24px;"><div class="console-log-header"><span>[system_log: query_dispatcher.service]</span></div><div class="console-log-body" id="queryConsoleBody"></div></div></div></div></div></section><footer class="footer"><div class="footer-content"><div class="footer-brand"><span class="brand-bracket">&lt;</span><span class="brand-name">Arijeet Ghosal</span><span class="brand-bracket">/&gt;</span></div><p class="footer-text">Structured data systems. Scalable intelligence.</p><p class="footer-copyright">© 2026 Arijeet Ghosal. All rights reserved.</p></div></footer><script src="common.js"></script><script src="services.js"></script></body></html>
```

### File: games.html
```html
<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Stress Relief Games | Arijeet Ghosal</title><meta name="description" content="Take a break with fun stress-relieving mini games. Breathe, play, and relax."><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet"><link rel="stylesheet" href="style.css"><link rel="stylesheet" href="swiss-override.css"><link rel="shortcut icon" type="image/png" href="chatbot_icon.png"><style> /* ── Games Page Specific ──────────────────────────────── */ .games-hero { padding: 140px 40px 60px; text-align: center; } .games-hero h1 { font-family: 'Space Grotesk', sans-serif; font-size: clamp(2rem, 5vw, 3.5rem); font-weight: 700; color: #E8E8F0; letter-spacing: 2px; margin-bottom: 12px; } .games-hero p { color: #A0A0C0; font-size: 1rem; max-width: 480px; margin: 0 auto; } .games-section { max-width: 1000px; margin: 0 auto; padding: 0 40px 100px; } /* ── Game Modal ──────────────────────────────────────── */ .game-modal { display: none; position: fixed; inset: 0; z-index: 9999; background: rgba(0,0,0,0.7); align-items: center; justify-content: center; } .game-modal.active { display: flex; } .game-modal-content { background: #0C0C1D; border: 1px solid rgba(0,120,244,0.15); border-radius: 16px; width: 90%; max-width: 600px; max-height: 90vh; overflow: auto; padding: 32px; position: relative; box-shadow: 0 24px 80px rgba(0,0,0,0.5), 0 0 40px rgba(0,120,244,0.05); } .game-close { position: absolute; top: 16px; right: 16px; background: none; border: 1px solid rgba(0,255,255,0.2); color: #00FFFF; width: 32px; height: 32px; border-radius: 50%; cursor: pointer; font-size: 1rem; display: flex; align-items: center; justify-content: center; transition: all 0.2s; } .game-close:hover { background: rgba(0,255,255,0.08); } .game-modal h2 { font-family: 'Space Grotesk', sans-serif; font-size: 1.5rem; margin-bottom: 20px; color: #E8E8F0; } /* ── Breathing Circle ────────────────────────────────── */ .breathe-container { display: flex; flex-direction: column; align-items: center; gap: 24px; } .breathe-circle { width: 180px; height: 180px; border-radius: 50%; background: rgba(0,120,244,0.08); border: 2px solid rgba(0,255,255,0.3); display: flex; align-items: center; justify-content: center; font-family: 'Space Grotesk', sans-serif; font-size: 1.1rem; color: #A0A0C0; transition: transform 4s ease-in-out, background 4s ease-in-out, box-shadow 4s ease-in-out; } .breathe-circle.inhale { transform: scale(1.4); background: rgba(0,120,244,0.15); box-shadow: 0 0 40px rgba(0,255,255,0.15); } .breathe-circle.exhale { transform: scale(1); background: rgba(0,120,244,0.08); box-shadow: none; } .breathe-btn { padding: 10px 28px; background: linear-gradient(135deg, #0078F4, #3A0CA3); color: #fff; border: none; border-radius: 6px; cursor: pointer; font-family: 'Space Grotesk', sans-serif; font-size: 0.85rem; letter-spacing: 1px; transition: all 0.2s; } .breathe-btn:hover { box-shadow: 0 6px 24px rgba(0,120,244,0.3); } /* ── Memory Game ─────────────────────────────────────── */ .memory-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; max-width: 320px; margin: 0 auto 16px; } .memory-card { aspect-ratio: 1; background: rgba(0,120,244,0.06); border: 1px solid rgba(0,120,244,0.12); border-radius: 8px; display: flex; align-items: center; justify-content: center; font-size: 1.5rem; cursor: pointer; transition: all 0.25s; user-select: none; color: #A0A0C0; } .memory-card:hover { border-color: rgba(0,255,255,0.3); } .memory-card.flipped { background: rgba(0,120,244,0.12); border-color: #00FFFF; } .memory-card.matched { background: rgba(0,255,255,0.1); border-color: #00FFFF; pointer-events: none; } .memory-info { text-align: center; font-size: 0.85rem; color: #6A6A90; margin-bottom: 12px; } /* ── Color Match ─────────────────────────────────────── */ .color-match-area { text-align: center; } .color-word { font-family: 'Space Grotesk', sans-serif; font-size: 3rem; font-weight: 700; margin: 24px 0; } .color-options { display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; } .color-opt { padding: 10px 24px; border: 1.5px solid rgba(0,120,244,0.15); background: rgba(0,120,244,0.06); border-radius: 6px; cursor: pointer; font-family: 'Space Grotesk', sans-serif; font-size: 0.9rem; color: #E8E8F0; transition: all 0.2s; } .color-opt:hover { border-color: #00FFFF; } .color-opt.correct { background: rgba(0,255,0,0.12); border-color: #00FF00; } .color-opt.wrong { background: rgba(255,0,255,0.12); border-color: #FF00FF; } .color-score { margin-top: 16px; font-size: 0.85rem; color: #6A6A90; } /* ── Click Speed ─────────────────────────────────────── */ .click-area { text-align: center; } .click-target { width: 200px; height: 200px; border-radius: 50%; background: rgba(0,120,244,0.08); border: 2px solid rgba(0,255,255,0.3); margin: 24px auto; display: flex; align-items: center; justify-content: center; font-family: 'Space Grotesk', sans-serif; font-size: 2.5rem; font-weight: 700; color: #00FFFF; cursor: pointer; transition: transform 0.1s; user-select: none; } .click-target:active { transform: scale(0.95); } .click-stats { font-size: 0.85rem; color: #6A6A90; } /* ── Zen Garden (click to plant) ─────────────────────── */ .zen-canvas { width: 100%; height: 300px; background: rgba(0,120,244,0.05); border: 1px solid rgba(0,120,244,0.12); border-radius: 12px; cursor: crosshair; position: relative; overflow: hidden; } .zen-plant { position: absolute; font-size: 1.5rem; animation: zenGrow 0.5s ease forwards; pointer-events: none; } @keyframes zenGrow { from { transform: scale(0) rotate(0deg); opacity: 0; } to { transform: scale(1) rotate(10deg); opacity: 1; } } .zen-controls { margin-top: 12px; text-align: center; } </style></head><body><div class="preloader" id="preloader"><div class="preloader-content"><div class="preloader-ring"><svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="40" class="preloader-circle-bg"/><circle cx="50" cy="50" r="40" class="preloader-circle"/></svg></div><p class="preloader-text">Loading Games<span class="preloader-dots"></span></p><div class="preloader-bar"><div class="preloader-bar-fill" id="preloaderBar"></div></div></div></div><div class="scroll-progress" id="scrollProgress"></div><canvas id="neural-canvas"></canvas><canvas id="click-canvas"></canvas><div class="scanline-overlay"></div><div class="cursor-glow" id="cursorGlow"></div><div class="cursor-dot" id="cursorDot"></div><button class="back-to-top" id="backToTop" aria-label="Back to top"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 15l-6-6-6 6"/></svg></button><nav class="nav" id="mainNav"><div class="nav-brand"><a href="index.html" style="text-decoration:none"><span class="brand-bracket">&lt;</span><span class="brand-name">AG</span><span class="brand-bracket">/&gt;</span></a></div><div class="nav-links" id="navLinks"><a href="index.html" class="nav-link">Home</a><a href="index.html#about" class="nav-link">About</a><a href="index.html#projects" class="nav-link">Projects</a><a href="services.html" class="nav-link">Services</a><a href="counselling.html" class="nav-link">Counselling</a><a href="games.html" class="nav-link active">Games</a><a href="index.html#contact" class="nav-link">Contact</a></div><button class="nav-toggle" id="navToggle" aria-label="Toggle navigation"><span></span><span></span><span></span></button></nav><section class="games-hero"><h1>Stress Relief Games</h1><p>Take a break, clear your mind, and have some fun. These simple games are designed to help you relax.</p></section><section class="games-section"><div class="games-grid"><div class="game-card" onclick="openGame('breathe')"><span class="game-icon">🧘</span><h3>Breathing Exercise</h3><p>Follow the guided circle to regulate your breathing and calm your mind.</p><span class="game-tag">Relaxation</span></div><div class="game-card" onclick="openGame('memory')"><span class="game-icon">🧩</span><h3>Memory Match</h3><p>Flip cards and find matching pairs. Train your memory while de-stressing.</p><span class="game-tag">Focus</span></div><div class="game-card" onclick="openGame('color')"><span class="game-icon">🎨</span><h3>Color Match</h3><p>Name the color of the text, not the word itself. A fun cognitive challenge.</p><span class="game-tag">Brain Teaser</span></div><div class="game-card" onclick="openGame('clicker')"><span class="game-icon">⚡</span><h3>Speed Clicker</h3><p>How many times can you click in 10 seconds? Beat your own record!</p><span class="game-tag">Reflex</span></div><div class="game-card" onclick="openGame('zen')"><span class="game-icon">🌿</span><h3>Zen Garden</h3><p>Click anywhere to plant flowers and create your own peaceful garden.</p><span class="game-tag">Creative</span></div><div class="game-card" onclick="openGame('pattern')"><span class="game-icon">🔢</span><h3>Pattern Recall</h3><p>Watch the pattern, then repeat it. How far can your memory take you?</p><span class="game-tag">Memory</span></div></div></section><div class="game-modal" id="modal-breathe"><div class="game-modal-content"><button class="game-close" onclick="closeGame('breathe')">✕</button><h2>Breathing Exercise</h2><div class="breathe-container"><div class="breathe-circle" id="breatheCircle">Ready</div><button class="breathe-btn" id="breatheBtn" onclick="startBreathe()">Start</button></div></div></div><div class="game-modal" id="modal-memory"><div class="game-modal-content"><button class="game-close" onclick="closeGame('memory')">✕</button><h2>Memory Match</h2><div class="memory-info" id="memoryInfo">Moves: 0 | Pairs: 0/8</div><div class="memory-grid" id="memoryGrid"></div><div style="text-align:center"><button class="breathe-btn" onclick="initMemory()">New Game</button></div></div></div><div class="game-modal" id="modal-color"><div class="game-modal-content"><button class="game-close" onclick="closeGame('color')">✕</button><h2>Color Match</h2><div class="color-match-area"><p style="color:#7C7C7C;font-size:0.85rem">What COLOR is the text displayed in?</p><div class="color-word" id="colorWord">Ready</div><div class="color-options" id="colorOptions"></div><div class="color-score" id="colorScore">Score: 0 | Streak: 0</div></div></div></div><div class="game-modal" id="modal-clicker"><div class="game-modal-content"><button class="game-close" onclick="closeGame('clicker')">✕</button><h2>Speed Clicker</h2><div class="click-area"><p style="color:#7C7C7C;font-size:0.85rem">Click the circle as fast as you can in 10 seconds!</p><div class="click-target" id="clickTarget" onclick="handleClick()">GO</div><div class="click-stats" id="clickStats">Clicks: 0 | Time: 10s</div></div></div></div><div class="game-modal" id="modal-zen"><div class="game-modal-content"><button class="game-close" onclick="closeGame('zen')">✕</button><h2>Zen Garden</h2><div class="zen-canvas" id="zenCanvas" onclick="plantFlower(event)"></div><div class="zen-controls"><button class="breathe-btn" onclick="clearGarden()">Clear Garden</button></div></div></div><div class="game-modal" id="modal-pattern"><div class="game-modal-content"><button class="game-close" onclick="closeGame('pattern')">✕</button><h2>Pattern Recall</h2><div style="text-align:center"><p style="color:#7C7C7C;font-size:0.85rem;margin-bottom:16px" id="patternMsg">Watch the pattern, then repeat it!</p><div id="patternGrid" style="display:grid;grid-template-columns:repeat(3,80px);gap:10px;justify-content:center;margin-bottom:16px"></div><div id="patternInfo" style="font-size:0.85rem;color:#7C7C7C;margin-bottom:12px">Level: 1</div><button class="breathe-btn" id="patternBtn" onclick="startPattern()">Start</button></div></div></div><footer style="background:#06060F;border-top:1px solid rgba(0,120,244,0.08);color:#A0A0C0;text-align:center;padding:40px 20px;margin-top:40px"><p style="font-family:'Space Grotesk',sans-serif;font-size:0.85rem;opacity:0.7">© 2026 Arijeet Ghosal — Take a break, you deserve it.</p></footer><script src="common.js"></script><script> /* ── Preloader ──────────────────────────── */ (function(){ const el=document.getElementById('preloader'),bar=document.getElementById('preloaderBar'); let p=0;const iv=setInterval(()=>{p+=Math.random()*20+10;if(p>=100){p=100;clearInterval(iv);setTimeout(()=>{el.classList.add('hidden');document.body.style.overflow=''},300)}if(bar)bar.style.width=p+'%'},150); })(); /* ── Nav scroll ────────────────────────── */ const nav=document.getElementById('mainNav'); window.addEventListener('scroll',()=>nav&&nav.classList.toggle('scrolled',window.scrollY>50)); const toggle=document.getElementById('navToggle'),links=document.getElementById('navLinks'); if(toggle)toggle.addEventListener('click',()=>links.classList.toggle('open')); /* ── Shared effects ────────────────────── */ new SharedEffects(); /* ── Modal helpers ─────────────────────── */ function openGame(id){document.getElementById('modal-'+id).classList.add('active');if(id==='memory')initMemory();if(id==='color')nextColor();if(id==='pattern')initPattern()} function closeGame(id){document.getElementById('modal-'+id).classList.remove('active')} /* ═══ BREATHING EXERCISE ═══ */ let breatheInterval=null; function startBreathe(){ const c=document.getElementById('breatheCircle'),b=document.getElementById('breatheBtn'); if(breatheInterval){clearInterval(breatheInterval);breatheInterval=null;c.className='breathe-circle';c.textContent='Ready';b.textContent='Start';return} b.textContent='Stop';let phase='inhale'; function tick(){ if(phase==='inhale'){c.className='breathe-circle inhale';c.textContent='Breathe In';phase='hold1';setTimeout(tick,4000)} else if(phase==='hold1'){c.textContent='Hold';phase='exhale';setTimeout(tick,2000)} else if(phase==='exhale'){c.className='breathe-circle exhale';c.textContent='Breathe Out';phase='hold2';setTimeout(tick,4000)} else{c.textContent='Hold';phase='inhale';setTimeout(tick,2000)} } tick();breatheInterval=1; } /* ═══ MEMORY MATCH ═══ */ let memFlipped=[],memMoves=0,memPairs=0,memLocked=false; const memEmojis=['🌸','🌊','🍃','🦋','🌙','🔥','⭐','🎵']; function initMemory(){ memFlipped=[];memMoves=0;memPairs=0;memLocked=false; const grid=document.getElementById('memoryGrid'); const cards=[...memEmojis,...memEmojis].sort(()=>Math.random()-0.5); grid.innerHTML=''; cards.forEach((e,i)=>{ const d=document.createElement('div');d.className='memory-card';d.dataset.emoji=e;d.dataset.idx=i; d.textContent='?';d.addEventListener('click',()=>flipCard(d));grid.appendChild(d); }); updateMemInfo(); } function flipCard(card){ if(memLocked||card.classList.contains('flipped')||card.classList.contains('matched'))return; card.classList.add('flipped');card.textContent=card.dataset.emoji;memFlipped.push(card); if(memFlipped.length===2){memMoves++;memLocked=true; const[a,b]=memFlipped; if(a.dataset.emoji===b.dataset.emoji){a.classList.add('matched');b.classList.add('matched');memPairs++;memFlipped=[];memLocked=false;updateMemInfo(); if(memPairs===8)document.getElementById('memoryInfo').textContent='🎉 You won in '+memMoves+' moves!'} else{setTimeout(()=>{a.classList.remove('flipped');a.textContent='?';b.classList.remove('flipped');b.textContent='?';memFlipped=[];memLocked=false},800)} updateMemInfo(); } } function updateMemInfo(){document.getElementById('memoryInfo').textContent='Moves: '+memMoves+' | Pairs: '+memPairs+'/8'} /* ═══ COLOR MATCH ═══ */ const colors=[{name:'Red',hex:'#e74c3c'},{name:'Blue',hex:'#3498db'},{name:'Green',hex:'#27ae60'},{name:'Yellow',hex:'#f1c40f'},{name:'Purple',hex:'#9b59b6'},{name:'Orange',hex:'#e67e22'}]; let cScore=0,cStreak=0; function nextColor(){ const word=colors[Math.floor(Math.random()*colors.length)]; const display=colors[Math.floor(Math.random()*colors.length)]; const el=document.getElementById('colorWord');el.textContent=word.name;el.style.color=display.hex; const opts=document.getElementById('colorOptions');opts.innerHTML=''; const shuffled=[...colors].sort(()=>Math.random()-0.5).slice(0,4); if(!shuffled.find(c=>c.name===display.name))shuffled[0]=display; shuffled.sort(()=>Math.random()-0.5); shuffled.forEach(c=>{ const b=document.createElement('button');b.className='color-opt';b.textContent=c.name; b.onclick=()=>{ if(c.name===display.name){b.classList.add('correct');cScore++;cStreak++;setTimeout(nextColor,500)} else{b.classList.add('wrong');cStreak=0;setTimeout(nextColor,800)} updateColorScore(); }; opts.appendChild(b); }); } function updateColorScore(){document.getElementById('colorScore').textContent='Score: '+cScore+' | Streak: '+cStreak} /* ═══ SPEED CLICKER ═══ */ let clicks=0,clickActive=false,clickTimer=null; function handleClick(){ const t=document.getElementById('clickTarget'),s=document.getElementById('clickStats'); if(!clickActive){clickActive=true;clicks=0;let time=10; t.textContent=clicks;s.textContent='Clicks: 0 | Time: 10s'; clickTimer=setInterval(()=>{time--;s.textContent='Clicks: '+clicks+' | Time: '+time+'s'; if(time<=0){clearInterval(clickTimer);clickActive=false;t.textContent='🎉';s.textContent='Final: '+clicks+' clicks! Click to retry.'} },1000); } if(clickActive){clicks++;t.textContent=clicks} } /* ═══ ZEN GARDEN ═══ */ const plants=['🌸','🌺','🌻','🌷','🌼','🌿','🍀','🌱','🌾','💐','🪻','🌹']; function plantFlower(e){ const c=document.getElementById('zenCanvas'),r=c.getBoundingClientRect(); const x=e.clientX-r.left,y=e.clientY-r.top; const f=document.createElement('span');f.className='zen-plant'; f.textContent=plants[Math.floor(Math.random()*plants.length)]; f.style.left=(x-12)+'px';f.style.top=(y-12)+'px'; f.style.fontSize=(Math.random()*1+1)+'rem'; c.appendChild(f); } function clearGarden(){document.getElementById('zenCanvas').innerHTML=''} /* ═══ PATTERN RECALL ═══ */ let patLevel=1,patSeq=[],patIdx=0,patInput=false; function initPattern(){ const grid=document.getElementById('patternGrid');grid.innerHTML=''; for(let i=0;i<9;i++){ const d=document.createElement('div'); d.style.cssText='width:80px;height:80px;background:rgba(0,120,244,0.06);border:1px solid rgba(0,120,244,0.12);border-radius:8px;cursor:pointer;transition:all 0.2s'; d.dataset.idx=i; d.addEventListener('click',()=>patternClick(i,d)); grid.appendChild(d); } patLevel=1;patSeq=[];document.getElementById('patternInfo').textContent='Level: 1'; document.getElementById('patternMsg').textContent='Press Start to begin!'; } function startPattern(){ document.getElementById('patternBtn').textContent='Playing...'; patSeq.push(Math.floor(Math.random()*9));patIdx=0;patInput=false; document.getElementById('patternMsg').textContent='Watch carefully...'; showSequence(0); } function showSequence(i){ if(i>=patSeq.length){patInput=true;document.getElementById('patternMsg').textContent='Your turn! Repeat the pattern.';document.getElementById('patternBtn').textContent='Start';return} const cells=document.getElementById('patternGrid').children; const c=cells[patSeq[i]];c.style.background='rgba(0,255,255,0.2)';c.style.borderColor='#00FFFF'; setTimeout(()=>{c.style.background='rgba(0,120,244,0.06)';c.style.borderColor='rgba(0,120,244,0.12)';setTimeout(()=>showSequence(i+1),200)},600); } function patternClick(idx,el){ if(!patInput)return; if(idx===patSeq[patIdx]){ el.style.background='rgba(39,201,63,0.2)';el.style.borderColor='#27c93f'; setTimeout(()=>{el.style.background='rgba(0,120,244,0.06)';el.style.borderColor='rgba(0,120,244,0.12)'},300); patIdx++; if(patIdx>=patSeq.length){patLevel++;patInput=false; document.getElementById('patternInfo').textContent='Level: '+patLevel; document.getElementById('patternMsg').textContent='Great! Level '+patLevel+' — press Start.'; } } else { el.style.background='rgba(255,95,86,0.2)';el.style.borderColor='#ff5f56'; patInput=false; document.getElementById('patternMsg').textContent='Wrong! You reached level '+patLevel+'. Press Start to retry.'; patLevel=1;patSeq=[]; document.getElementById('patternInfo').textContent='Level: 1'; } } </script></body></html>
```

### File: counselling.html
```html
<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Counselling & Career Guides | Arijeet Ghosal</title><meta name="description" content="A comprehensive guide on applying to German Universities and navigating the German job market for students and professionals."><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet"><link rel="stylesheet" href="style.css"><link rel="stylesheet" href="swiss-override.css"><link rel="shortcut icon" type="image/png" href="chatbot_icon.png"><style> /* Force subpage section visibility */ .counselling-page-body .section, .counselling-page-body .timeline-card, .counselling-page-body .guide-card, .counselling-page-body .calculator-container { opacity: 1 !important; transform: none !important; } /* Subpage custom elements */ .roadmap-timeline { position: relative; max-width: 850px; margin: 40px auto; padding: 20px 0; } .roadmap-timeline::before { content: ''; position: absolute; top: 0; left: 31px; height: 100%; width: 2px; background: linear-gradient(180deg, var(--primary) 0%, var(--accent) 100%); opacity: 0.3; } .timeline-card { position: relative; margin-bottom: 30px; padding-left: 70px; } .timeline-number { position: absolute; left: 15px; top: 4px; width: 34px; height: 34px; border-radius: 50%; background: var(--bg-surface); border: 2px solid var(--primary); color: var(--primary); display: flex; align-items: center; justify-content: center; font-family: var(--font-display); font-weight: 700; font-size: 0.9rem; z-index: 2; box-shadow: 0 0 10px var(--primary-glow); transition: all 0.3s var(--ease-out); } .timeline-card:hover .timeline-number { background: var(--primary); color: var(--bg-deep); box-shadow: 0 0 15px var(--primary); transform: scale(1.1); } .timeline-header { cursor: pointer; padding: 24px; background: var(--bg-card); border: 1px solid var(--border); border-radius: 8px; transition: all 0.3s var(--ease-out); display: flex; justify-content: space-between; align-items: center; } .timeline-header:hover { border-color: var(--primary); background: var(--bg-card-hover); box-shadow: 0 4px 20px rgba(0, 240, 255, 0.05); } .timeline-title-area h3 { font-family: var(--font-display); font-size: 1.15rem; color: var(--text-primary); margin-bottom: 4px; } .timeline-title-area span { color: var(--primary); font-size: 0.85rem; text-transform: uppercase; letter-spacing: 1px; font-family: var(--font-mono); } .timeline-arrow { font-size: 1.2rem; color: var(--text-secondary); transition: transform 0.3s var(--ease-out); } .timeline-card.expanded .timeline-arrow { transform: rotate(180deg); color: var(--primary); } .timeline-card.expanded .timeline-header { border-bottom-left-radius: 0; border-bottom-right-radius: 0; border-color: var(--primary-glow); } .timeline-detail-content { max-height: 0; overflow: hidden; transition: max-height 0.4s var(--ease-out); background: rgba(10, 22, 40, 0.4); border: 1px solid var(--border); border-top: none; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; } .timeline-card.expanded .timeline-detail-content { max-height: 1000px; padding: 24px; border-color: var(--primary-glow); } .timeline-detail-content p { font-size: 0.95rem; line-height: 1.7; color: var(--text-secondary); margin-bottom: 16px; } .timeline-detail-content ul { padding-left: 20px; margin-bottom: 16px; } .timeline-detail-content li { font-size: 0.9rem; color: var(--text-secondary); margin-bottom: 8px; position: relative; } .timeline-detail-content li strong { color: var(--text-primary); } .pro-tip { border-left: 3px solid var(--accent); background: var(--accent-dim); padding: 14px 18px; border-radius: 0 8px 8px 0; margin-top: 16px; font-size: 0.9rem; color: var(--text-primary); } .pro-tip strong { color: var(--accent); } /* Tabs styling for Career Guides */ .career-tabs-container { max-width: 900px; margin: 40px auto; } .tabs-header { display: flex; justify-content: center; flex-wrap: wrap; gap: 10px; margin-bottom: 30px; border-bottom: 1px solid var(--border); padding-bottom: 16px; } .tab-trigger { background: none; border: 1px solid var(--border); padding: 10px 20px; border-radius: 20px; color: var(--text-secondary); font-family: var(--font-display); font-size: 0.85rem; cursor: pointer; transition: all 0.3s var(--ease-out); } .tab-trigger:hover { color: var(--primary); border-color: var(--primary-dim); background: var(--primary-dim); } .tab-trigger.active { color: var(--bg-deep); background: var(--primary); border-color: var(--primary); box-shadow: 0 0 15px var(--primary-glow); } .tab-panel { display: none; animation: fadeIn 0.4s var(--ease-out) forwards; } .tab-panel.active { display: block; } @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } } .guide-card { background: var(--bg-card); border: 1px solid var(--border); border-radius: 12px; padding: 32px; box-shadow: 0 4px 30px rgba(0, 0, 0, 0.2); } .guide-title { font-family: var(--font-display); font-size: 1.5rem; color: var(--primary); margin-bottom: 16px; display: flex; align-items: center; gap: 12px; } .guide-description { font-size: 1rem; line-height: 1.8; color: var(--text-primary); margin-bottom: 24px; } .guide-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 24px; } @media (max-width: 768px) { .guide-grid { grid-template-columns: 1fr; } .roadmap-timeline::before { left: 16px; } .timeline-card { padding-left: 45px; } .timeline-number { left: 0; } } .guide-col h4 { font-family: var(--font-display); font-size: 1.05rem; color: var(--accent); margin-bottom: 12px; text-transform: uppercase; letter-spacing: 0.5px; } .guide-col ul { list-style: none; } .guide-col li { position: relative; padding-left: 20px; font-size: 0.92rem; line-height: 1.6; margin-bottom: 10px; color: var(--text-secondary); } .guide-col li::before { content: '◈'; position: absolute; left: 0; color: var(--primary); font-size: 0.8rem; } .guide-col li strong { color: var(--text-primary); } .guide-checkpoints { background: rgba(2, 8, 23, 0.6); border: 1px solid var(--border); border-radius: 8px; padding: 20px; margin-top: 20px; } .guide-checkpoints h4 { font-family: var(--font-display); font-size: 1.05rem; color: var(--primary); margin-bottom: 12px; } .guide-checkpoints p { font-size: 0.9rem; line-height: 1.6; color: var(--text-secondary); } </style></head><body class="counselling-page-body"><div class="scroll-progress" id="scrollProgress"></div><canvas class="neural-canvas" id="neural-canvas"></canvas><canvas class="click-canvas" id="click-canvas"></canvas><div class="cursor-glow" id="cursorGlow"></div><div class="cursor-dot" id="cursorDot"></div><button class="back-to-top" id="backToTop" aria-label="Back to top"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 15l-6-6-6 6"/></svg></button><nav class="nav scrolled"><div class="nav-brand"><span class="brand-bracket">&lt;</span><span class="brand-name">AG</span><span class="brand-bracket">/&gt;</span></div><div class="nav-links"><a href="index.html" class="nav-link">← Back to Profile</a><a href="projects.html" class="nav-link">Project Archive</a><a href="services.html" class="nav-link">Services</a><a href="counselling.html" class="nav-link active">Counselling</a><a href="games.html" class="nav-link">Games</a></div></nav><section class="hub-hero"><div class="hub-hero-content"><span class="section-tag">&gt; deploy_consulting_modules...</span><h1 class="hub-title">Admissions & <span class="accent">Career Counselling</span></h1><p class="hub-subtitle">Roadmap guides to German universities and tabular insights on securing Werkstudent, internship, thesis, and full-time jobs.</p></div></section><section class="section" id="university-roadmap"><div class="section-container"><div class="section-header"><span class="section-tag">&lt;education_path&gt;</span><h2 class="section-title">German University <span class="accent">Roadmap</span></h2><div class="section-line"></div></div><p style="text-align: center; color: var(--text-secondary); max-width: 700px; margin: 0 auto 30px;"> Applying to public German universities requires strict planning. Follow our interactive step-by-step roadmap to understand the requirements, documents, and application lifecycle. </p><div class="roadmap-timeline"><div class="timeline-card expanded"><div class="timeline-number">01</div><div class="timeline-header" onclick="toggleRoadmapItem(this.parentNode)"><div class="timeline-title-area"><h3>Course Selection & Requirements Match</h3><span>Research Phase</span></div><div class="timeline-arrow">▼</div></div><div class="timeline-detail-content"><p>Finding the right course in public universities is crucial. Ensure your previous bachelor degree matches the credits (ECTS) required in the master’s curriculum.</p><ul><li><strong>DAAD Database:</strong> Utilize the DAAD International Programs database to search for courses matching your focus.</li><li><strong>ECTS Mapping:</strong> German universities strict-check credits. Map your subjects in Math, Programming, and Theoretical CS to meet their requirements.</li><li><strong>NC (Numerus Clausus):</strong> Check if the course is restricted (NC) or open admission (non-NC), which impacts the GPA cutoff.</li></ul><div class="pro-tip"><strong>Pro Tip:</strong> Even a minor credit deficit (e.g. 5 ECTS in math) can lead to immediate rejection. Always read the course module description page (*Prüfungsordnung*) carefully! </div></div></div><div class="timeline-card"><div class="timeline-number">02</div><div class="timeline-header" onclick="toggleRoadmapItem(this.parentNode)"><div class="timeline-title-area"><h3>Language and Academic Exams</h3><span>Testing Phase</span></div><div class="timeline-arrow">▼</div></div><div class="timeline-detail-content"><p>Standardized tests are required to qualify your language skills and academic capabilities.</p><ul><li><strong>English-Taught Courses:</strong> IELTS (usually 6.5 minimum, no section below 6.0) or TOEFL (minimum 90+).</li><li><strong>German-Taught Courses:</strong> Requires high proficiency, typically DSH-2 or TestDaF (4x4 minimum) which equates to a C1 level.</li><li><strong>Academic Standardized Tests:</strong> Several competitive courses require a GRE (with high quantitative score) or GMAT (for business/analytics majors).</li></ul><div class="pro-tip"><strong>Pro Tip:</strong> Schedule your IELTS/GRE at least 6 months before the application deadline. Universities rarely accept late score cards. </div></div></div><div class="timeline-card"><div class="timeline-number">03</div><div class="timeline-header" onclick="toggleRoadmapItem(this.parentNode)"><div class="timeline-title-area"><h3>Document Assembly & APS Certificate</h3><span>Compilation Phase</span></div><div class="timeline-arrow">▼</div></div><div class="timeline-detail-content"><p>Collate your academic profile. If applying from India, China, or Vietnam, you must apply for an APS certificate early in the process.</p><ul><li><strong>APS Certificate:</strong> Mandatory credential verification document. It verifies your local degrees and transcripts. Apply early as it takes 1-3 months.</li><li><strong>Letter of Motivation (LoM):</strong> Write a customized academic motivation letter. Explain why you choose this curriculum and how your prior coursework correlates.</li><li><strong>Recommendation Letters (LoRs):</strong> Acquire 2 letters of recommendation from professors or workspace team leads.</li></ul><div class="pro-tip"><strong>Pro Tip:</strong> Make sure your transcripts are officially translated and notarized in English or German. Keep copies of syllabi in case they ask for credit verification. </div></div></div><div class="timeline-card"><div class="timeline-number">04</div><div class="timeline-header" onclick="toggleRoadmapItem(this.parentNode)"><div class="timeline-title-area"><h3>Application Portals & uni-assist VPD</h3><span>Submission Phase</span></div><div class="timeline-arrow">▼</div></div><div class="timeline-detail-content"><p>Depending on the university, you will apply directly via their portal or through the centralized uni-assist service.</p><ul><li><strong>uni-assist VPD:</strong> Submit transcripts to uni-assist to receive a VPD (Vorprüfungsdokumentation), which converts your local GPA to the German scale (Bavarian Formula).</li><li><strong>University Portals:</strong> Directly upload your VPD and motivation documents to portals like TUMonline (TUM), RWTH portal, or LMU.</li><li><strong>Hochschulstart:</strong> Used for some undergraduate and popular restricted master courses to coordinate admission.</li></ul><div class="pro-tip"><strong>Pro Tip:</strong> VPD conversion takes 4–6 weeks. Apply to uni-assist as soon as the portal opens to avoid missing deadlines. </div></div></div><div class="timeline-card"><div class="timeline-number">05</div><div class="timeline-header" onclick="toggleRoadmapItem(this.parentNode)"><div class="timeline-title-area"><h3>Blocked Account & Health Insurance</h3><span>Financial Setup</span></div><div class="timeline-arrow">▼</div></div><div class="timeline-detail-content"><p>To acquire your student visa, you must provide proof of financial resources and German health insurance coverage.</p><ul><li><strong>Blocked Account (Sperrkonto):</strong> Deposit the state-regulated minimum cost of living (currently €11,900+ per year) into a blocked provider like Expatrio, Coracle, or Fintiba.</li><li><strong>Public Health Insurance:</strong> Join public providers like TK, AOK, or Barmer (mandatory for students under 30). This costs around €120-130/month.</li><li><strong>Private Health Insurance:</strong> For students in preparatory courses (Studienkolleg) or over 30, private insurance (e.g. Mawista, Care Concept) is used.</li></ul><div class="pro-tip"><strong>Pro Tip:</strong> Package providers like Expatrio or Coracle offer Blocked Account + Health Insurance bundles, which speed up visa approval letters. </div></div></div><div class="timeline-card"><div class="timeline-number">06</div><div class="timeline-header" onclick="toggleRoadmapItem(this.parentNode)"><div class="timeline-title-area"><h3>Visa Application & Enrollment</h3><span>Relocation & Start</span></div><div class="timeline-arrow">▼</div></div><div class="timeline-detail-content"><p>The final step involves acquiring your visa, arriving in Germany, registering, and enrolling.</p><ul><li><strong>Embassy Appointment:</strong> Book your visa appointment at the VFS Global or German Consulate as soon as you receive the admission letter.</li><li><strong>City Registration (Anmeldung):</strong> Within 14 days of moving into your room in Germany, register your address at the local city hall (*Bürgeramt*).</li><li><strong>Enrollment:</strong> Pay the semester contribution fee (usually €150-€400, which includes a transit ticket) to activate your student status.</li></ul><div class="pro-tip"><strong>Pro Tip:</strong> Finding student housing in Germany is extremely competitive. Apply for student union dorms (Studentenwerk) the day you apply to the university! </div></div></div></div></div></section><section class="section" id="career-guides" style="padding-top: 0;"><div class="section-container"><div class="section-header"><span class="section-tag">&lt;career_path&gt;</span><h2 class="section-title">Germany Job <span class="accent">Search Guide</span></h2><div class="section-line"></div></div><p style="text-align: center; color: var(--text-secondary); max-width: 700px; margin: 0 auto 30px;"> Understanding German work structures is essential. Use the tabs below to explore rules, formats, and strategies to secure student jobs, internships, master theses, and full-time positions. </p><div class="career-tabs-container"><div class="tabs-header"><button class="tab-trigger active" onclick="switchCareerTab('cv-guide')">CV Format</button><button class="tab-trigger" onclick="switchCareerTab('werkstudent')">Werkstudent</button><button class="tab-trigger" onclick="switchCareerTab('internship')">Internship</button><button class="tab-trigger" onclick="switchCareerTab('thesis-industry')">Thesis in Industry</button><button class="tab-trigger" onclick="switchCareerTab('full-time')">Full-Time Jobs</button></div><div class="tab-panel active" id="cv-guide"><div class="guide-card"><h3 class="guide-title">📄 German CV (Lebenslauf) Format Guide</h3><p class="guide-description"> German CVs (Lebenslauf) are highly structured, factual, and follow a strict tabular format. Avoid fancy layouts or graphic sliders; focus on chronological clarity. </p><div class="guide-grid"><div class="guide-col"><h4>Key Elements</h4><ul><li><strong>Tabular Layout:</strong> Column structure showing dates (MM/YYYY - MM/YYYY) on the left, details/roles on the right.</li><li><strong>Personal Info:</strong> Positioned at the top. Name, email, phone, location (city in Germany), and visa status if relevant.</li><li><strong>Photo & Signature:</strong> Adding a professional corporate headshot is standard in Germany. A digital signature + date at the bottom is highly appreciated.</li></ul></div><div class="guide-col"><h4>Dos & Don'ts</h4><ul><li><strong>Do:</strong> Highlight technical impact (e.g. "Reduced triage time by 50% using NLP classification").</li><li><strong>Do:</strong> List your German language capability (e.g., German: A2, English: Fluent C1).</li><li><strong>Don't:</strong> Use graphical "progress bars" for skills (e.g., Python: 4/5 dots). It is unreadable by ATS systems.</li><li><strong>Don't:</strong> Write long, essay-like summaries. Keep descriptions concise and bulleted.</li></ul></div></div><div class="guide-checkpoints"><h4>Standard CV Checkpoints</h4><p>Ensure your CV is exactly 1-2 pages maximum. Order experiences in reverse chronological order. Save as `CV_Firstname_Lastname.pdf` before sending.</p></div></div></div><div class="tab-panel" id="werkstudent"><div class="guide-card"><h3 class="guide-title">💼 Werkstudent (Working Student) Guide</h3><p class="guide-description"> A Werkstudent is a student job template defined in German social security law. It allows university students to work directly in fields matching their majors. </p><div class="guide-grid"><div class="guide-col"><h4>The 20-Hour Rule</h4><ul><li><strong>Semester Limit:</strong> You can work a maximum of 20 hours per week during academic semesters.</li><li><strong>Semester Breaks:</strong> You can increase your hours to full-time (up to 40 hours/week) during lecture-free periods.</li><li><strong>Violations:</strong> Exceeding 20 hours/week during semesters will cancel your student status under social security law.</li></ul></div><div class="guide-col"><h4>Financial Benefits</h4><ul><li><strong>Tax Exemption:</strong> Exempt from contributions to health insurance, nursing care, and unemployment insurance on student wages.</li><li><strong>Pension Insurance:</strong> You pay pension contributions (~9.3%), which count towards your permanent residency requirement.</li><li><strong>Average Wages:</strong> Typically ranges between €14 to €25+ per hour depending on company size and tech stack.</li></ul></div></div><div class="guide-checkpoints"><h4>How to Apply</h4><p>Look for postings on LinkedIn, company portals, or student-specific portals like Xing and indeed. Submit your enrollment certificate (*Immatrikulationsbescheinigung*) along with your CV.</p></div></div></div><div class="tab-panel" id="internship"><div class="guide-card"><h3 class="guide-title">🔬 Internships (Pflichtpraktikum vs. Freiwillig)</h3><p class="guide-description"> Internships in Germany are divided into mandatory (Pflicht) and voluntary (Freiwillig) classes. They have separate labor law implications, specifically regarding minimum wage. </p><div class="guide-grid"><div class="guide-col"><h4>Mandatory (Pflichtpraktikum)</h4><ul><li><strong>Curricular Requirement:</strong> Mandated by your university curriculum. Requires validation from the study office.</li><li><strong>Minimum Wage:</strong> Exempt from statutory minimum wage rules. Salary is determined by the company (usually €800-€1500/month).</li><li><strong>Duration:</strong> Length is capped by the university guidelines (usually 3–6 months). No social security taxes.</li></ul></div><div class="guide-col"><h4>Voluntary (Freiwilliges Praktikum)</h4><ul><li><strong>Personal Choice:</strong> Done to gain experience outside the curriculum.</li><li><strong>Minimum Wage Rule:</strong> If the voluntary internship is longer than 3 months, the company is legally required to pay the statutory minimum wage (currently ~€12.41+/hour, translating to ~€2000+/month).</li><li><strong>Tax Implications:</strong> Subject to standard social security contributions.</li></ul></div></div><div class="guide-checkpoints"><h4>Curricular Certificate</h4><p>For a Pflichtpraktikum, you must ask your university for a signed document stating that the internship is a mandatory part of your study plan (*Pflichtpraktikums-Bescheinigung*) to present to your employer.</p></div></div></div><div class="tab-panel" id="thesis-industry"><div class="guide-card"><h3 class="guide-title">🎓 Master Thesis in Industry</h3><p class="guide-description"> Writing your thesis with a company (e.g., Bosch, Microsoft, Siemens) allows you to solve real-world industry problems, get paid, and secure return offers. </p><div class="guide-grid"><div class="guide-col"><h4>Structure & Compensation</h4><ul><li><strong>Dual Mentorship:</strong> You have a corporate supervisor (tackling business implementation) and a university professor (verifying academic rigor).</li><li><strong>Compensation:</strong> Typically paid between €800 to €1300 per month depending on the agreement and company.</li><li><strong>Timeline:</strong> Standard thesis timeline is 6 months. Work hours are structured around research and writing.</li></ul></div><div class="guide-col"><h4>Strategic Benefits</h4><ul><li><strong>Data Access:</strong> Access to enterprise-grade data pipelines, hardware clusters, and proprietary models.</li><li><strong>Fast-Track Full-Time:</strong> Over 60% of students doing their thesis in industry are hired full-time by their teams immediately upon graduation.</li><li><strong>Networking:</strong> Presenting your research to senior managers and directors.</li></ul></div></div><div class="guide-checkpoints"><h4>Key Application Rule</h4><p>Apply for thesis postings 3–4 months in advance. Secure a university professor who is willing to guide your topic before finalizing contracts with the company.</p></div></div></div><div class="tab-panel" id="full-time"><div class="guide-card"><h3 class="guide-title">🚀 Full-Time Jobs & Visa Pathways</h3><p class="guide-description"> Securing a full-time role in Germany after graduation is backed by excellent post-study visa pathways. Plan your job search starting in your final semester. </p><div class="guide-grid"><div class="guide-col"><h4>Job Seeker Visa & Blue Card</h4><ul><li><strong>18-Month Job Seeker Visa:</strong> Graduates from German universities get an automatic 18-month visa extension to find a job matching their qualifications. You can work unlimited hours in any job during this period.</li><li><strong>EU Blue Card:</strong> Fast-track residency permit for skilled workers. Requires a matching university degree and a contract meeting the minimum salary threshold.</li><li><strong>Fast-Track Permanent Residency:</strong> German university graduates qualify for Permanent Residency (*Niederlassungserlaubnis*) after just 2 years of holding a skilled worker visa / Blue Card.</li></ul></div><div class="guide-col"><h4>Workplace Conventions</h4><ul><li><strong>Probation Period (Probezeit):</strong> Standard probation is 6 months, during which either party can terminate the contract with a 2-week notice.</li><li><strong>Notice Period:</strong> Standard notice periods range from 1 to 3 months (or even longer for senior roles) after the probation period.</li><li><strong>Vacation Days:</strong> Standard contracts offer 25 to 30 paid annual leave days, in addition to public holidays.</li></ul></div></div><div class="guide-checkpoints"><h4>Search Channels</h4><p>Xing is the main German local professional network, while LinkedIn is highly dominant for English-speaking tech roles. StepStone and indeed are highly effective for traditional engineering industries.</p></div></div></div></div></div></section><section class="section" style="padding-top: 0;"><div class="section-container"><div class="calculator-container"><div class="calculator-header"><span class="calculator-tag">&gt; book_advisory_slot...</span><h2 class="calculator-title">Book a Counselling <span class="accent">Session</span></h2><p style="color: var(--text-secondary); margin-top: 12px; font-size: 0.95rem; line-height: 1.7;"> Interested in personal guidance? Book a session to review your credits, create your roadmap, optimize your CV to German standards, or prepare for interviews. </p></div><div style="max-width: 700px; margin: 0 auto;"><form class="calculator-form" id="counsellingForm"><div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;"><div class="form-group"><label for="cName">Your Name *</label><input type="text" id="cName" class="form-control" placeholder="Max Mustermann" required></div><div class="form-group"><label for="cEmail">Your Email *</label><input type="email" id="cEmail" class="form-control" placeholder="arijit@example.com" required></div></div><div class="form-group"><label for="cService">Counselling Session Type *</label><select id="cService" class="form-control" required><option value="">— Select a Session —</option><option value="University Selection">German University Selection & Eligibility Check</option><option value="Admissions Roadmap">Admissions Document Review (LoM / CV / APS Guidance)</option><option value="CV Polish">German CV (Lebenslauf) Review & ATS Optimization</option><option value="Student Jobs Support">Werkstudent / Internship Application Strategy</option><option value="Interview Prep">Interview Preparation (Technical / MLOps / Coding)</option><option value="General Inquiry">General Relocation / Housing Consultation</option></select></div><div class="form-group"><label for="cMessage">Describe Your Background & Goals *</label><textarea id="cMessage" class="form-control" rows="5" placeholder="Share details: your current GPA, target course/universities, work experience, IELTS/TestDaF scores, and specific questions you have..." required></textarea></div><button type="submit" class="btn btn-order" style="width: 100%; margin-top: 16px; font-size: 1.05rem; padding: 16px;"> 🚀 Request Advisory Booking </button></form><div class="submission-console" id="cConsole" style="margin-top: 24px;"><div class="console-log-header"><span>[system_log: counselling_gateway.service]</span></div><div class="console-log-body" id="cConsoleBody"></div></div></div></div></div></section><footer class="footer"><div class="footer-content"><div class="footer-brand"><span class="brand-bracket">&lt;</span><span class="brand-name">Arijeet Ghosal</span><span class="brand-bracket">/&gt;</span></div><p class="footer-text">Structured data systems. Scalable intelligence.</p><p class="footer-copyright">© 2026 Arijeet Ghosal. All rights reserved.</p></div></footer><script src="common.js"></script><script src="counselling.js"></script></body></html>
```

### File: style.css
```css
:root{--primary:#00f0ff;--primary-dim:rgba(0,240,255,0.15);--primary-glow:rgba(0,240,255,0.4);--accent:#8b5cf6;--accent-dim:rgba(139,92,246,0.15);--accent-glow:rgba(139,92,246,0.4);--bg-deep:#020817;--bg-surface:#0a1628;--bg-card:rgba(15,25,50,0.7);--bg-card-hover:rgba(20,35,70,0.85);--text-primary:#e2e8f0;--text-secondary:#94a3b8;--text-muted:#64748b;--border:rgba(0,240,255,0.12);--border-hover:rgba(0,240,255,0.3);--section-padding:120px 0;--container-width:1200px;--font-display:'Orbitron',monospace;--font-body:'Inter',-apple-system,sans-serif;--font-mono:'JetBrains Mono',monospace;--ease-out:cubic-bezier(0.16,1,0.3,1);--ease-spring:cubic-bezier(0.34,1.56,0.64,1);}*,*::before,*::after{margin:0;padding:0;box-sizing:border-box;}html{scroll-behavior:smooth;scrollbar-width:thin;scrollbar-color:var(--primary) var(--bg-deep);}html::-webkit-scrollbar{width:6px;}html::-webkit-scrollbar-track{background:var(--bg-deep);}html::-webkit-scrollbar-thumb{background:var(--primary);border-radius:3px;}body{font-family:var(--font-body);background:var(--bg-deep);color:var(--text-primary);overflow-x:hidden;cursor:default;line-height:1.7;}#neural-canvas{position:fixed;top:0;left:0;width:100%;height:100%;z-index:-1;pointer-events:none;}.scanline-overlay{position:fixed;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:1;background:repeating-linear-gradient( 0deg,transparent,transparent 2px,rgba(0,240,255,0.008) 2px,rgba(0,240,255,0.008) 4px );}.cursor-glow{position:fixed;width:36px;height:36px;border-radius:50%;background:radial-gradient(circle,rgba(0,240,255,0.2) 0%,rgba(244,114,182,0.14) 42%,rgba(139,92,246,0.08) 70%,transparent 100%);pointer-events:none;z-index:-2;transform:translate(-50%,-50%);transition:opacity 0.2s ease,transform 0.2s ease;animation:cursorGlowFloat 1.8s ease-in-out infinite alternate;filter:blur(0.4px);}@keyframes cursorGlowFloat{from{transform:translate(-50%,-50%) scale(0.95);}to{transform:translate(-50%,-50%) scale(1.08);}}.nav{position:fixed;top:0;left:0;width:100%;z-index:100;padding:20px 40px;display:flex;align-items:center;justify-content:space-between;background:rgba(2,8,23,0.7);backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px);border-bottom:1px solid var(--border);transition:all 0.4s var(--ease-out);}.nav.scrolled{padding:12px 40px;background:rgba(2,8,23,0.92);}.nav-brand{font-family:var(--font-display);font-size:1.4rem;font-weight:700;letter-spacing:2px;}.brand-bracket{color:var(--primary);}.brand-name{color:var(--text-primary);margin:0 2px;}.nav-links{display:flex;gap:32px;}.nav-link{font-family:var(--font-mono);font-size:0.8rem;color:var(--text-secondary);text-decoration:none;text-transform:uppercase;letter-spacing:1.5px;position:relative;padding:4px 0;transition:color 0.3s;}.nav-link::after{content:'';position:absolute;bottom:-2px;left:0;width:0;height:2px;background:linear-gradient(90deg,var(--primary),var(--accent));transition:width 0.3s var(--ease-out);}.nav-link:hover,.nav-link.active{color:var(--primary);}.nav-link:hover::after,.nav-link.active::after{width:100%;}.nav-toggle{display:none;flex-direction:column;gap:5px;background:none;border:none;cursor:pointer;padding:5px;}.nav-toggle span{width:24px;height:2px;background:var(--primary);transition:all 0.3s;}.hero{position:relative;min-height:100vh;display:flex;align-items:center;padding:100px 40px 60px;z-index:3;overflow:hidden;}.hero-content{flex:1;max-width:650px;}.hero-tag{font-family:var(--font-mono);font-size:0.85rem;color:var(--primary);margin-bottom:20px;opacity:0;animation:fadeInUp 0.8s 0.3s forwards;}.hero-title{margin-bottom:24px;}.title-line{display:block;font-family:var(--font-display);font-size:clamp(2.5rem,6vw,5rem);font-weight:900;letter-spacing:4px;line-height:1.1;color:var(--text-primary);opacity:0;animation:glitchIn 1s 0.5s forwards;position:relative;}.title-line.accent{background:linear-gradient(135deg,var(--primary),var(--accent));-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;animation-delay:0.7s;}.title-line::before{content:attr(data-text);position:absolute;top:0;left:2px;color:var(--accent);opacity:0;clip:rect(0,0,0,0);}.hero-subtitle-container{display:flex;align-items:center;gap:8px;margin-bottom:20px;opacity:0;animation:fadeInUp 0.8s 1s forwards;}.hero-cursor{color:var(--primary);font-family:var(--font-mono);font-size:1.1rem;}.hero-subtitle{font-family:var(--font-mono);font-size:1.1rem;color:var(--accent);}.blink-cursor{font-family:var(--font-mono);color:var(--primary);animation:blink 1s infinite;}.hero-description{font-size:1.05rem;color:var(--text-secondary);line-height:1.8;margin-bottom:40px;opacity:0;animation:fadeInUp 0.8s 1.2s forwards;}.highlight{color:var(--primary);font-weight:600;}.hero-stats{display:flex;gap:32px;margin-bottom:40px;opacity:0;animation:fadeInUp 0.8s 1.4s forwards;}.stat-item{text-align:center;}.stat-number{display:block;font-family:var(--font-display);font-size:2rem;font-weight:800;color:var(--primary);line-height:1;}.stat-suffix{font-family:var(--font-display);font-size:1.4rem;font-weight:800;color:var(--primary);}.stat-label{display:block;font-size:0.7rem;color:var(--text-muted);text-transform:uppercase;letter-spacing:1px;margin-top:6px;}.hero-cta{display:flex;gap:16px;opacity:0;animation:fadeInUp 0.8s 1.6s forwards;}.btn{display:inline-flex;align-items:center;gap:10px;padding:14px 32px;font-family:var(--font-mono);font-size:0.85rem;font-weight:600;text-decoration:none;text-transform:uppercase;letter-spacing:1.5px;border-radius:4px;transition:all 0.3s var(--ease-out);position:relative;overflow:hidden;}.btn-primary{background:linear-gradient(135deg,var(--primary),var(--accent));color:var(--bg-deep);border:none;}.btn-primary:hover{transform:translateY(-2px);box-shadow:0 10px 40px rgba(0,240,255,0.3),0 0 60px rgba(0,240,255,0.15);}.btn-outline{background:transparent;color:var(--primary);border:1px solid var(--primary);}.btn-outline:hover{background:var(--primary-dim);transform:translateY(-2px);box-shadow:0 10px 40px rgba(0,240,255,0.15);}.btn-icon{font-size:1rem;}.hero-visual{flex:1;display:flex;justify-content:center;align-items:center;opacity:0;animation:fadeInScale 1s 0.8s forwards;}.cv-viewport{width:420px;height:340px;perspective:1000px;}.cv-frame{width:100%;height:100%;border:1px solid var(--border-hover);border-radius:8px;position:relative;background:rgba(0,240,255,0.02);overflow:hidden;animation:float 6s ease-in-out infinite;}.cv-corner{position:absolute;width:20px;height:20px;border-color:var(--primary);border-style:solid;border-width:0;}.cv-corner.tl{top:8px;left:8px;border-top-width:2px;border-left-width:2px;}.cv-corner.tr{top:8px;right:8px;border-top-width:2px;border-right-width:2px;}.cv-corner.bl{bottom:8px;left:8px;border-bottom-width:2px;border-left-width:2px;}.cv-corner.br{bottom:8px;right:8px;border-bottom-width:2px;border-right-width:2px;}.cv-grid{position:absolute;inset:0;background-image:linear-gradient(rgba(0,240,255,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(0,240,255,0.04) 1px,transparent 1px);background-size:40px 40px;}.cv-detection-box{position:absolute;border:1.5px solid var(--primary);border-radius:4px;animation:detectPulse 3s ease-in-out infinite;}.box-1{top:15%;left:10%;width:35%;height:45%;animation-delay:0s;}.box-2{top:25%;right:12%;width:30%;height:35%;animation-delay:1s;}.box-3{bottom:15%;left:25%;width:40%;height:25%;animation-delay:2s;}.detection-label{position:absolute;top:-22px;left:0;font-family:var(--font-mono);font-size:0.6rem;color:var(--primary);background:rgba(2,8,23,0.85);padding:2px 8px;border-radius:2px;white-space:nowrap;border:1px solid var(--border-hover);}.cv-crosshair{position:absolute;top:50%;left:50%;width:30px;height:30px;transform:translate(-50%,-50%);border:1.5px solid rgba(0,240,255,0.5);border-radius:50%;animation:crosshairSpin 8s linear infinite;}.cv-crosshair::before,.cv-crosshair::after{content:'';position:absolute;background:var(--primary);}.cv-crosshair::before{top:50%;left:-8px;right:-8px;height:1px;transform:translateY(-50%);}.cv-crosshair::after{left:50%;top:-8px;bottom:-8px;width:1px;transform:translateX(-50%);}.cv-info{position:absolute;bottom:10px;left:10px;right:10px;display:flex;justify-content:space-between;font-family:var(--font-mono);font-size:0.55rem;color:var(--text-muted);letter-spacing:1px;text-transform:uppercase;}.scroll-indicator{position:absolute;bottom:30px;left:50%;transform:translateX(-50%);display:flex;flex-direction:column;align-items:center;gap:8px;opacity:0;animation:fadeInUp 0.8s 2s forwards;}.scroll-line{width:1px;height:40px;background:linear-gradient(to bottom,var(--primary),transparent);animation:scrollPulse 2s infinite;}.scroll-indicator span{font-family:var(--font-mono);font-size:0.6rem;color:var(--text-muted);letter-spacing:3px;}.section{position:relative;padding:var(--section-padding);z-index:10;}.section-container{max-width:var(--container-width);margin:0 auto;padding:0 40px;}.section-header{text-align:center;margin-bottom:80px;}.section-tag{font-family:var(--font-mono);font-size:0.8rem;color:var(--accent);display:block;margin-bottom:16px;letter-spacing:2px;}.section-title{font-family:var(--font-display);font-size:clamp(1.8rem,4vw,2.8rem);font-weight:800;color:var(--text-primary);letter-spacing:3px;text-transform:uppercase;}.section-title .accent{background:linear-gradient(135deg,var(--primary),var(--accent));-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;}.section-line{width:60px;height:3px;background:linear-gradient(90deg,var(--primary),var(--accent));margin:20px auto 0;border-radius:2px;}.about-content{display:grid;grid-template-columns:1fr 1fr;gap:60px;align-items:start;}.about-profile{position:sticky;top:100px;}.profile-card{background:var(--bg-card);border:1px solid var(--border);border-radius:20px;padding:40px 32px;text-align:center;backdrop-filter:blur(10px);position:relative;overflow:hidden;transition:all 0.4s var(--ease-out);}.profile-card::before{content:'';position:absolute;top:0;left:0;right:0;height:120px;background:linear-gradient(135deg,rgba(0,240,255,0.08),rgba(139,92,246,0.08));border-bottom:1px solid var(--border);}.profile-card:hover{border-color:var(--border-hover);box-shadow:0 20px 60px rgba(0,240,255,0.08);}.profile-avatar{position:relative;width:110px;height:110px;margin:0 auto 20px;z-index:2;}.avatar-img{width:100%;height:100%;border-radius:50%;object-fit:cover;border:3px solid var(--bg-deep);box-shadow:0 0 0 3px var(--primary),0 0 30px rgba(0,240,255,0.2);}.avatar-ring{position:absolute;inset:-6px;border-radius:50%;border:2px dashed rgba(0,240,255,0.3);animation:certSpin 20s linear infinite;}.avatar-status{position:absolute;bottom:4px;right:4px;width:18px;height:18px;background:#27c93f;border-radius:50%;border:3px solid var(--bg-deep);box-shadow:0 0 10px rgba(39,201,63,0.5);}.profile-name{font-family:var(--font-display);font-size:1.3rem;color:var(--text-primary);letter-spacing:1px;margin-bottom:6px;position:relative;z-index:2;}.profile-role{font-family:var(--font-mono);font-size:0.85rem;color:var(--accent);letter-spacing:1px;margin-bottom:10px;}.profile-location{display:flex;align-items:center;justify-content:center;gap:6px;font-size:0.82rem;color:var(--text-muted);margin-bottom:20px;}.profile-location svg{color:var(--primary);}.profile-divider{width:60px;height:2px;background:linear-gradient(90deg,transparent,var(--primary),transparent);margin:0 auto 20px;}.profile-bio{font-size:0.9rem;color:var(--text-secondary);line-height:1.8;margin-bottom:28px;text-align:left;}.profile-highlights{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin-bottom:24px;}.highlight-item{background:rgba(0,240,255,0.04);border:1px solid rgba(0,240,255,0.1);border-radius:10px;padding:14px 8px;text-align:center;transition:all 0.3s;}.highlight-item:hover{border-color:var(--primary);background:rgba(0,240,255,0.08);transform:translateY(-2px);}.highlight-value{font-family:var(--font-display);font-size:1.1rem;font-weight:700;color:var(--primary);line-height:1.2;}.highlight-label{font-size:0.65rem;color:var(--text-muted);margin-top:4px;line-height:1.3;text-transform:uppercase;letter-spacing:0.5px;}.profile-interests{display:flex;flex-wrap:wrap;gap:8px;justify-content:center;}.interest-tag{font-family:var(--font-mono);font-size:0.7rem;color:var(--accent);background:var(--accent-dim);border:1px solid rgba(139,92,246,0.15);padding:5px 14px;border-radius:20px;letter-spacing:0.5px;transition:all 0.3s;}.interest-tag:hover{border-color:var(--accent);background:rgba(139,92,246,0.2);transform:translateY(-1px);}.about-info{display:grid;grid-template-columns:1fr 1fr;gap:20px;}.info-card{background:var(--bg-card);border:1px solid var(--border);border-radius:12px;padding:28px;transition:all 0.4s var(--ease-out);backdrop-filter:blur(10px);}.info-card:hover{border-color:var(--border-hover);background:var(--bg-card-hover);transform:translateY(-4px);box-shadow:0 20px 60px rgba(0,240,255,0.08);}.info-icon{width:50px;height:50px;display:flex;align-items:center;justify-content:center;background:var(--primary-dim);border:1px solid rgba(0,240,255,0.15);border-radius:12px;margin-bottom:16px;transition:all 0.3s;}.info-card:hover .info-icon{background:rgba(0,240,255,0.12);border-color:var(--primary);box-shadow:0 0 20px rgba(0,240,255,0.15);}.info-card h3{font-family:var(--font-display);font-size:0.9rem;color:var(--primary);letter-spacing:1px;margin-bottom:10px;}.info-card p{font-size:0.85rem;color:var(--text-secondary);line-height:1.7;}.timeline{position:relative;max-width:800px;margin:0 auto;}.timeline::before{content:'';position:absolute;top:0;left:20px;width:2px;height:100%;background:linear-gradient(to bottom,var(--primary),var(--accent),transparent);}.timeline-item{position:relative;padding-left:60px;margin-bottom:60px;}.timeline-marker{position:absolute;left:12px;top:5px;width:18px;height:18px;border-radius:50%;background:var(--bg-deep);border:2px solid var(--primary);z-index:2;}.marker-pulse{position:absolute;inset:-4px;border-radius:50%;border:1px solid var(--primary);animation:pulse 2s infinite;}.timeline-content{background:var(--bg-card);border:1px solid var(--border);border-radius:12px;padding:32px;transition:all 0.4s var(--ease-out);backdrop-filter:blur(10px);}.timeline-content:hover{border-color:var(--border-hover);transform:translateX(8px);box-shadow:0 20px 60px rgba(0,240,255,0.08);}.timeline-date{font-family:var(--font-mono);font-size:0.75rem;color:var(--primary);letter-spacing:2px;text-transform:uppercase;margin-bottom:8px;}.timeline-title{font-family:var(--font-display);font-size:1.1rem;color:var(--text-primary);letter-spacing:1px;margin-bottom:4px;}.timeline-company{font-size:1rem;color:var(--accent);font-weight:600;margin-bottom:8px;}.timeline-location{font-size:0.85rem;color:var(--text-muted);margin-bottom:16px;}.timeline-details{list-style:none;margin-bottom:20px;}.timeline-details li{font-size:0.9rem;color:var(--text-secondary);padding:4px 0 4px 20px;position:relative;}.timeline-details li::before{content:'▸';position:absolute;left:0;color:var(--primary);}.timeline-tags{display:flex;flex-wrap:wrap;gap:8px;}.tag{font-family:var(--font-mono);font-size:0.7rem;color:var(--primary);background:var(--primary-dim);border:1px solid rgba(0,240,255,0.15);padding:4px 12px;border-radius:20px;letter-spacing:0.5px;}.projects-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(340px,1fr));gap:28px;}.project-card{background:var(--bg-card);border:1px solid var(--border);border-radius:16px;overflow:hidden;transition:all 0.5s var(--ease-out);backdrop-filter:blur(10px);position:relative;}.project-card:hover{border-color:var(--border-hover);transform:translateY(-8px);box-shadow:0 30px 80px rgba(0,240,255,0.1);}.project-card.featured{grid-column:1 / -1;display:grid;grid-template-columns:1fr 1fr;}.project-image{position:relative;min-height:200px;background:linear-gradient(135deg,rgba(0,240,255,0.05),rgba(139,92,246,0.05));display:flex;align-items:center;justify-content:center;overflow:hidden;}.project-image.video-preview::after{content:'▶';position:absolute;inset:0;display:grid;place-items:center;font-size:1.2rem;color:#fff;background:rgba(0,0,0,0.24);pointer-events:none;}.project-overlay{position:absolute;inset:0;background-image:linear-gradient(rgba(0,240,255,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(0,240,255,0.03) 1px,transparent 1px);background-size:20px 20px;opacity:0.6;}.project-icon{font-size:3rem;z-index:2;filter:drop-shadow(0 0 20px rgba(0,240,255,0.3));}.project-info{padding:28px;}.project-category{font-family:var(--font-mono);font-size:0.7rem;color:var(--accent);text-transform:uppercase;letter-spacing:2px;margin-bottom:10px;}.project-title{font-family:var(--font-display);font-size:1.1rem;color:var(--text-primary);letter-spacing:1px;margin-bottom:12px;}.project-desc{font-size:0.88rem;color:var(--text-secondary);line-height:1.7;margin-bottom:20px;}.project-tech{display:flex;flex-wrap:wrap;gap:8px;margin-bottom:20px;}.project-tech span{font-family:var(--font-mono);font-size:0.68rem;color:var(--primary);background:var(--primary-dim);padding:4px 10px;border-radius:4px;border:1px solid rgba(0,240,255,0.1);}.project-link{font-family:var(--font-mono);font-size:0.8rem;color:var(--primary);text-decoration:none;display:inline-flex;align-items:center;gap:8px;transition:all 0.3s;}.project-link:hover{color:var(--accent);gap:14px;}.skills-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:32px;}.skill-category{background:var(--bg-card);border:1px solid var(--border);border-radius:16px;padding:32px;backdrop-filter:blur(10px);transition:all 0.4s var(--ease-out);}.skill-category:hover{border-color:var(--border-hover);box-shadow:0 20px 60px rgba(0,240,255,0.06);}.category-header{display:flex;align-items:center;gap:12px;margin-bottom:28px;}.category-icon{font-size:1.6rem;}.category-header h3{font-family:var(--font-display);font-size:0.95rem;color:var(--primary);letter-spacing:1px;}.skill-bars{display:flex;flex-direction:column;gap:18px;}.skill-info{display:flex;justify-content:space-between;margin-bottom:6px;}.skill-info span:first-child{font-size:0.82rem;color:var(--text-secondary);}.skill-pct{font-family:var(--font-mono);font-size:0.75rem;color:var(--primary);}.skill-bar{height:4px;background:rgba(0,240,255,0.08);border-radius:2px;overflow:hidden;}.skill-fill{height:100%;width:0;background:linear-gradient(90deg,var(--primary),var(--accent));border-radius:2px;transition:width 1.5s var(--ease-out);box-shadow:0 0 10px var(--primary-glow);}.skill-fill.animated{}.certs-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:24px;}.cert-card{perspective:1000px;height:310px;background:transparent;border:none;padding:0;cursor:pointer;}.cert-card-inner{position:relative;width:100%;height:100%;transition:transform 0.6s cubic-bezier(0.4,0,0.2,1);transform-style:preserve-3d;}.cert-card.flipped .cert-card-inner{transform:rotateY(180deg);}.cert-card-front,.cert-card-back{position:absolute;inset:0;width:100%;height:100%;backface-visibility:hidden;-webkit-backface-visibility:hidden;border-radius:16px;border:1px solid var(--border);background:var(--bg-card);padding:24px 20px;display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center;box-shadow:0 4px 30px rgba(0,0,0,0.2);backdrop-filter:blur(10px);transition:border-color 0.4s var(--ease-out);}.cert-card-front{z-index:2;transform:rotateY(0deg);}.cert-card-back{transform:rotateY(180deg);z-index:1;background:rgba(8,16,32,0.98);border-color:rgba(0,240,255,0.25);}.cert-card:hover .cert-card-front,.cert-card:hover .cert-card-back{border-color:var(--border-hover);box-shadow:0 15px 40px rgba(0,240,255,0.08);}.cert-click-hint{font-family:var(--font-mono);font-size:0.6rem;color:var(--primary);text-transform:uppercase;letter-spacing:1px;margin-top:12px;opacity:0.7;transition:opacity 0.3s;}.cert-card:hover .cert-click-hint{opacity:1;}.cert-back-title{font-family:var(--font-display);font-size:0.8rem;color:var(--primary);letter-spacing:0.5px;margin-bottom:4px;text-transform:uppercase;}.cert-back-desc{font-size:0.72rem;color:var(--text-secondary);line-height:1.5;margin-bottom:10px;padding:0 4px;}.cert-back-action{font-family:var(--font-mono);font-size:0.58rem;color:var(--accent);text-transform:uppercase;letter-spacing:0.5px;opacity:0.8;}.cert-screenshot{width:100%;height:90px;margin-bottom:12px;border-radius:8px;overflow:hidden;border:1px solid rgba(255,255,255,0.06);background:#010610;display:flex;align-items:center;justify-content:center;padding:4px;box-shadow:inset 0 0 15px rgba(0,0,0,0.6);}.cert-vector{width:100%;height:100%;border:1px solid rgba(0,240,255,0.2);border-radius:4px;background:rgba(0,240,255,0.02);display:flex;flex-direction:column;justify-content:center;align-items:center;position:relative;}.cert-vector::before{content:'';position:absolute;inset:2px;border:1px dashed rgba(0,240,255,0.08);border-radius:2px;pointer-events:none;}.vector-seal{width:12px;height:12px;background:radial-gradient(circle,#ffd700,#b8860b);clip-path:polygon(50% 0%,61% 35%,98% 35%,68% 57%,79% 91%,50% 70%,21% 91%,32% 57%,2% 35%,39% 35%);position:absolute;top:6px;right:6px;box-shadow:0 0 4px rgba(255,215,0,0.3);}.vector-title{font-family:var(--font-display);font-size:0.42rem;letter-spacing:0.8px;text-transform:uppercase;color:var(--text-muted);margin-bottom:2px;}.vector-subtitle{font-size:0.6rem;font-weight:700;color:#00f0ff;text-shadow:0 0 6px rgba(0,240,255,0.3);letter-spacing:0.5px;margin-bottom:2px;text-align:center;}.vector-footer{font-family:var(--font-mono);font-size:0.42rem;color:var(--accent);}.cert-vector.ms-theme{border-color:rgba(0,240,255,0.25);background:radial-gradient(circle at center,rgba(0,240,255,0.04),transparent);}.cert-vector.ms-theme.data-eng{border-color:rgba(139,92,246,0.25);background:radial-gradient(circle at center,rgba(139,92,246,0.04),transparent);}.cert-vector.ms-theme.data-eng .vector-subtitle{color:#8b5cf6;text-shadow:0 0 6px rgba(139,92,246,0.3);}.cert-vector.google-theme{border-color:rgba(34,211,238,0.25);background:radial-gradient(circle at center,rgba(34,211,238,0.04),transparent);}.cert-vector.google-theme .vector-subtitle{color:#22d3ee;text-shadow:0 0 6px rgba(34,211,238,0.3);}.cert-vector.knime-theme{border-color:rgba(244,114,182,0.25);background:radial-gradient(circle at center,rgba(244,114,182,0.04),transparent);}.cert-vector.knime-theme .vector-subtitle{color:#f472b6;text-shadow:0 0 6px rgba(244,114,182,0.3);}.cert-badge{position:relative;width:80px;height:80px;margin:0 auto 20px;display:flex;align-items:center;justify-content:center;}.cert-ring{position:absolute;inset:0;animation:certSpin 15s linear infinite;}.cert-icon{font-size:2rem;z-index:2;}.cert-title{font-family:var(--font-display);font-size:0.82rem;color:var(--text-primary);letter-spacing:0.5px;margin-bottom:8px;line-height:1.4;}.cert-issuer{font-size:0.78rem;color:var(--text-muted);margin-bottom:16px;}.cert-tag{display:inline-block;font-family:var(--font-mono);font-size:0.65rem;color:var(--accent);background:var(--accent-dim);padding:4px 14px;border-radius:20px;border:1px solid rgba(139,92,246,0.15);}.contact-content{max-width:700px;margin:0 auto;}.contact-intro{text-align:center;font-size:1.15rem;color:var(--text-secondary);margin-bottom:48px;line-height:1.8;}.contact-cards{display:grid;gap:16px;}.contact-card{display:flex;align-items:center;gap:20px;background:var(--bg-card);border:1px solid var(--border);border-radius:12px;padding:24px 28px;text-decoration:none;transition:all 0.4s var(--ease-out);backdrop-filter:blur(10px);}a.contact-card:hover{border-color:var(--border-hover);transform:translateX(8px);box-shadow:0 10px 40px rgba(0,240,255,0.08);}.contact-card-icon{font-size:1.6rem;}.contact-card-details{flex:1;display:flex;flex-direction:column;}.contact-card-label{font-family:var(--font-mono);font-size:0.7rem;color:var(--text-muted);text-transform:uppercase;letter-spacing:1.5px;}.contact-card-value{font-size:0.95rem;color:var(--text-primary);margin-top:2px;}.contact-arrow{font-size:1.2rem;color:var(--primary);transition:transform 0.3s;}a.contact-card:hover .contact-arrow{transform:translateX(6px);}.footer{position:relative;z-index:3;padding:60px 40px;text-align:center;border-top:1px solid var(--border);background:rgba(2,8,23,0.5);}.footer-brand{font-family:var(--font-display);font-size:1.2rem;font-weight:700;margin-bottom:12px;}.footer-text{font-size:0.85rem;color:var(--text-muted);margin-bottom:24px;}.footer-links{display:flex;justify-content:center;gap:32px;margin-bottom:24px;}.footer-links a{font-family:var(--font-mono);font-size:0.8rem;color:var(--text-secondary);text-decoration:none;transition:color 0.3s;}.footer-links a:hover{color:var(--primary);}.footer-copyright{font-size:0.75rem;color:var(--text-muted);}@keyframes fadeInUp{from{opacity:0;transform:translateY(30px);}to{opacity:1;transform:translateY(0);}}@keyframes fadeInScale{from{opacity:0;transform:scale(0.9);}to{opacity:1;transform:scale(1);}}@keyframes glitchIn{0%{opacity:0;transform:translateX(-20px);clip-path:inset(0 100% 0 0);}50%{clip-path:inset(0 0 0 0);}60%{transform:translateX(5px);}70%{transform:translateX(-3px);}80%{transform:translateX(2px);}100%{opacity:1;transform:translateX(0);clip-path:inset(0 0 0 0);}}@keyframes blink{0%,50%{opacity:1;}51%,100%{opacity:0;}}@keyframes float{0%,100%{transform:translateY(0) rotateX(2deg) rotateY(-2deg);}50%{transform:translateY(-15px) rotateX(-2deg) rotateY(2deg);}}@keyframes detectPulse{0%,100%{opacity:0.4;transform:scale(1);}50%{opacity:1;transform:scale(1.02);}}@keyframes crosshairSpin{from{transform:translate(-50%,-50%) rotate(0deg);}to{transform:translate(-50%,-50%) rotate(360deg);}}@keyframes pulse{0%{opacity:1;transform:scale(1);}100%{opacity:0;transform:scale(2);}}@keyframes scrollPulse{0%,100%{opacity:0.3;}50%{opacity:1;}}@keyframes certSpin{from{transform:rotate(0deg);}to{transform:rotate(360deg);}}body:not(.services-page-body):not(.projects-page-body) .section{opacity:0;transform:translateY(40px);transition:opacity 0.8s var(--ease-out),transform 0.8s var(--ease-out);}body:not(.services-page-body):not(.projects-page-body) .section.visible{opacity:1;transform:translateY(0);}@media (max-width:1024px){.skills-grid{grid-template-columns:1fr;}.certs-grid{grid-template-columns:repeat(2,1fr);}.about-content{grid-template-columns:1fr;}.project-card.featured{grid-template-columns:1fr;}}@media (max-width:768px){.nav{padding:16px 20px;}.nav-links{position:fixed;top:0;right:-100%;width:70%;height:100vh;flex-direction:column;background:rgba(2,8,23,0.98);padding:100px 40px;gap:24px;transition:right 0.4s var(--ease-out);border-left:1px solid var(--border);}.nav-links.open{right:0;}.nav-toggle{display:flex;z-index:101;}.hero{flex-direction:column;padding:120px 20px 60px;text-align:center;}.hero-content{max-width:100%;}.hero-stats{justify-content:center;flex-wrap:wrap;}.hero-cta{justify-content:center;flex-wrap:wrap;}.hero-visual{margin-top:40px;}.cv-viewport{width:320px;height:260px;}.section-container{padding:0 20px;}.projects-grid{grid-template-columns:1fr;}.certs-grid{grid-template-columns:1fr;}.hero-subtitle-container{justify-content:center;}.timeline::before{left:16px;}.timeline-item{padding-left:50px;}.timeline-marker{left:8px;}}@media (max-width:480px){.title-line{font-size:2rem;}.hero-stats{gap:16px;}.stat-number{font-size:1.5rem;}.btn{padding:12px 20px;font-size:0.75rem;}}.preloader{position:fixed;inset:0;z-index:10000;background:var(--bg-deep);display:flex;align-items:center;justify-content:center;transition:opacity 0.6s,visibility 0.6s;}.preloader.hidden{opacity:0;visibility:hidden;pointer-events:none;}.preloader-content{text-align:center;}.preloader-ring{position:relative;width:100px;height:100px;margin:0 auto 24px;}.preloader-ring svg{width:100%;height:100%;transform:rotate(-90deg);}.preloader-circle-bg{fill:none;stroke:rgba(0,240,255,0.08);stroke-width:3;}.preloader-circle{fill:none;stroke:url(#certGrad);stroke-width:3;stroke-linecap:round;stroke-dasharray:251;stroke-dashoffset:251;animation:preloaderSpin 2s ease-in-out infinite;}.preloader-icon{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;animation:preloaderPulse 1.5s ease-in-out infinite;}.preloader-text{font-family:var(--font-mono);font-size:0.85rem;color:var(--text-secondary);letter-spacing:1px;margin-bottom:16px;}.preloader-dots::after{content:'';animation:loadingDots 1.5s steps(4,end) infinite;}.preloader-bar{width:200px;height:3px;background:rgba(0,240,255,0.1);border-radius:2px;overflow:hidden;margin:0 auto;}.preloader-bar-fill{height:100%;width:0%;background:linear-gradient(90deg,var(--primary),var(--accent));border-radius:2px;transition:width 0.3s;}@keyframes preloaderSpin{0%{stroke-dashoffset:251;}50%{stroke-dashoffset:60;}100%{stroke-dashoffset:251;}}@keyframes preloaderPulse{0%,100%{transform:scale(1);opacity:0.8;}50%{transform:scale(1.1);opacity:1;}}@keyframes loadingDots{0%{content:'';}25%{content:'.';}50%{content:'..';}75%{content:'...';}}.scroll-progress{position:fixed;top:0;left:0;width:0%;height:3px;background:linear-gradient(90deg,var(--primary),var(--accent),#f472b6);z-index:200;transition:width 0.1s;box-shadow:0 0 10px var(--primary-glow),0 0 20px rgba(0,240,255,0.1);}#click-canvas{position:fixed;top:0;left:0;width:100%;height:100%;z-index:-1;pointer-events:none;}.cursor-dot{position:fixed;width:10px;height:10px;border-radius:50%;background:linear-gradient(135deg,#00f0ff 0%,#8b5cf6 45%,#f472b6 100%);border:1px solid rgba(255,255,255,0.8);pointer-events:none;z-index:10001;transform:translate(-50%,-50%);transition:transform 0.1s,width 0.2s,height 0.2s,background 0.2s;mix-blend-mode:screen;box-shadow:0 0 0 2px rgba(255,255,255,0.16),0 0 12px rgba(0,240,255,0.85),0 0 24px rgba(244,114,182,0.35);animation:cursorSparkle 1.6s ease-in-out infinite;}.cursor-dot::before,.cursor-dot::after{content:'';position:absolute;inset:-3px;border-radius:50%;border:1px solid rgba(255,255,255,0.35);opacity:0.7;}.cursor-dot::before{animation:cursorOrbit 1.2s linear infinite;}.cursor-dot::after{inset:-7px;border-color:rgba(0,240,255,0.4);animation:cursorOrbit 1.7s linear infinite reverse;}.cursor-dot.hovering{width:42px;height:42px;background:radial-gradient(circle,rgba(0,240,255,0.2) 0%,rgba(244,114,182,0.14) 40%,rgba(139,92,246,0.06) 70%,transparent 100%);border:1px solid rgba(255,255,255,0.8);box-shadow:0 0 20px rgba(0,240,255,0.35),0 0 36px rgba(244,114,182,0.2);animation:none;}@keyframes cursorSparkle{0%,100%{transform:translate(-50%,-50%) scale(1);}50%{transform:translate(-50%,-50%) scale(1.15);}}@keyframes cursorOrbit{from{transform:scale(0.85) rotate(0deg);opacity:0.4;}to{transform:scale(1.15) rotate(360deg);opacity:0.85;}}.side-nav{position:fixed;right:24px;top:50%;transform:translateY(-50%);z-index:90;display:flex;flex-direction:column;gap:16px;opacity:0;transition:opacity 0.4s;}.side-nav.visible{opacity:1;}.side-dot{position:relative;width:12px;height:12px;display:flex;align-items:center;justify-content:center;text-decoration:none;}.side-dot span{width:6px;height:6px;border-radius:50%;background:var(--text-muted);transition:all 0.3s var(--ease-spring);display:block;}.side-dot:hover span,.side-dot.active span{width:10px;height:10px;background:var(--primary);box-shadow:0 0 12px var(--primary-glow);}.side-dot::before{content:attr(data-tooltip);position:absolute;right:24px;top:50%;transform:translateY(-50%) translateX(8px);font-family:var(--font-mono);font-size:0.7rem;color:var(--primary);background:rgba(2,8,23,0.95);border:1px solid var(--border-hover);padding:4px 12px;border-radius:4px;white-space:nowrap;opacity:0;pointer-events:none;transition:all 0.3s;letter-spacing:1px;text-transform:uppercase;}.side-dot:hover::before{opacity:1;transform:translateY(-50%) translateX(0);}.back-to-top{position:fixed;bottom:32px;left:32px;width:48px;height:48px;border-radius:50%;background:var(--bg-card);border:1px solid var(--border);color:var(--primary);display:flex;align-items:center;justify-content:center;cursor:pointer;z-index:90;opacity:0;transform:translateY(20px);transition:all 0.4s var(--ease-out);backdrop-filter:blur(10px);}.back-to-top.visible{opacity:1;transform:translateY(0);}.back-to-top:hover{border-color:var(--primary);background:var(--primary-dim);transform:translateY(-4px);box-shadow:0 10px 30px rgba(0,240,255,0.2);}[data-tilt]{transform-style:preserve-3d;transition:transform 0.1s ease-out;}[data-tilt] .project-info,[data-tilt] .contact-card-details{transform:translateZ(20px);}.radar-section{margin-top:80px;text-align:center;}.radar-title{font-family:var(--font-display);font-size:1.2rem;color:var(--text-primary);letter-spacing:1px;margin-bottom:8px;}.radar-subtitle{font-size:0.85rem;color:var(--text-muted);margin-bottom:40px;}.radar-container{display:flex;flex-direction:column;align-items:center;gap:24px;}#radarChart{max-width:500px;width:100%;height:auto;}.radar-legend{display:flex;gap:32px;justify-content:center;}.legend-item{display:flex;align-items:center;gap:8px;font-family:var(--font-mono);font-size:0.75rem;color:var(--text-secondary);letter-spacing:0.5px;}.legend-dot{width:10px;height:10px;border-radius:50%;display:inline-block;}.project-card,.info-card,.cert-card,.timeline-item,.contact-card,.skill-category{opacity:0;transform:translateY(30px);transition:opacity 0.6s var(--ease-out),transform 0.6s var(--ease-out),border-color 0.4s,background 0.4s,box-shadow 0.4s;}.section.visible .project-card,.section.visible .info-card,.section.visible .cert-card,.section.visible .timeline-item,.section.visible .contact-card,.section.visible .skill-category{opacity:1;transform:translateY(0);}.section.visible .project-card:nth-child(1),.section.visible .info-card:nth-child(1),.section.visible .cert-card:nth-child(1),.section.visible .timeline-item:nth-child(1),.section.visible .skill-category:nth-child(1){transition-delay:0.1s;}.section.visible .project-card:nth-child(2),.section.visible .info-card:nth-child(2),.section.visible .cert-card:nth-child(2),.section.visible .timeline-item:nth-child(2),.section.visible .skill-category:nth-child(2){transition-delay:0.2s;}.section.visible .project-card:nth-child(3),.section.visible .info-card:nth-child(3),.section.visible .cert-card:nth-child(3),.section.visible .timeline-item:nth-child(3),.section.visible .skill-category:nth-child(3){transition-delay:0.3s;}.section.visible .project-card:nth-child(4),.section.visible .info-card:nth-child(4),.section.visible .cert-card:nth-child(4){transition-delay:0.4s;}.section.visible .project-card:nth-child(5){transition-delay:0.5s;}.section.visible .project-card:nth-child(6){transition-delay:0.6s;}.section.visible .project-card:nth-child(7){transition-delay:0.7s;}.project-card::after,.cert-card::after{content:'';position:absolute;inset:0;border-radius:inherit;opacity:0;transition:opacity 0.4s;background:radial-gradient(600px circle at var(--mouse-x,50%) var(--mouse-y,50%),rgba(0,240,255,0.06),transparent 60%);pointer-events:none;}.project-card:hover::after,.cert-card:hover::after{opacity:1;}.project-card:hover .project-icon{transform:scale(1.2) rotate(5deg);transition:transform 0.4s var(--ease-spring);}.project-card:hover .project-image{background:linear-gradient(135deg,rgba(0,240,255,0.08),rgba(139,92,246,0.08));}.btn{will-change:transform;}@media (max-width:768px){.side-nav{display:none;}.cursor-dot{display:none;}.cursor-glow{display:none;}.radar-container canvas{max-width:300px;}.radar-legend{flex-wrap:wrap;gap:16px;}.back-to-top{bottom:20px;left:20px;width:40px;height:40px;}}.chatbot-container{position:fixed;bottom:32px;right:32px;z-index:1000;font-family:var(--font-body);}.chatbot-toggle{width:60px;height:60px;border-radius:50%;background:linear-gradient(135deg,#0b1120,#1e293b);border:none;color:#fff;display:flex;align-items:center;justify-content:center;cursor:pointer;box-shadow:0 12px 28px rgba(0,0,0,0.25),0 0 24px rgba(59,130,246,0.18);transition:all 0.3s var(--ease-spring);position:relative;padding:0;overflow:hidden;}.chatbot-toggle-avatar{width:100%;height:100%;object-fit:cover;border-radius:50%;display:block;border:2px solid rgba(255,255,255,0.25);transform-style:preserve-3d;transition:transform 0.3s ease;}.avatar-toggle-shell,.avatar-shell{position:relative;width:100%;height:100%;display:grid;place-items:center;overflow:hidden;border-radius:50%;}.avatar-face-glow{position:absolute;inset:-6px;border-radius:50%;background:radial-gradient(circle,rgba(0,240,255,0.2),transparent 68%);z-index:0;pointer-events:none;}.avatar-illustration{position:relative;width:100%;height:100%;display:flex;align-items:center;justify-content:center;z-index:1;}.avatar-illustration svg{width:100%;height:100%;display:block;}.avatar-face{fill:#f7d8c5;stroke:rgba(255,255,255,0.35);stroke-width:1.4;}.avatar-hair{fill:#1f2340;}.avatar-torso,.avatar-arm,.avatar-leg{fill:#7c8cff;stroke:rgba(255,255,255,0.18);stroke-width:1.1;transform-origin:center;}.avatar-eye{fill:#111827;transform-origin:center;transition:transform 0.16s ease-out;}.avatar-mouth{fill:none;stroke:#8b3b3b;stroke-width:2.2;stroke-linecap:round;stroke-linejoin:round;transition:d 0.16s ease-out;}.avatar-illustration--tiny svg{width:100%;height:100%;}.chatbot-toggle:hover .chatbot-toggle-avatar,.chatbot-toggle:focus-visible .chatbot-toggle-avatar{transform:translateY(-2px) scale(1.03);}.chatbot-toggle:hover{transform:scale(1.05);box-shadow:0 14px 36px rgba(0,0,0,0.28),0 0 32px rgba(59,130,246,0.2);}.chatbot-pulse{position:absolute;inset:-4px;border-radius:50%;border:1px solid rgba(59,130,246,0.35);opacity:0.65;animation:pulse 2.4s infinite;}.chatbot-toggle::after{content:'';position:absolute;inset:-6px;border-radius:50%;background:radial-gradient(circle,rgba(0,240,255,0.22),transparent 70%);filter:blur(6px);opacity:0.8;pointer-events:none;}.chatbot-toggle .chat-icon{display:none;}.chatbot-toggle .close-icon{display:none;}.chatbot-container.open .chatbot-toggle{background:var(--bg-card);border:1px solid var(--border-hover);color:var(--primary);box-shadow:0 10px 30px rgba(0,0,0,0.5);transform:scale(1) rotate(90deg);}.chatbot-container.open .chatbot-toggle .chatbot-toggle-avatar{display:none;}.chatbot-container.open .chatbot-toggle .close-icon{display:block;}.chatbot-container.open .chatbot-pulse{display:none;}.chatbot-window{position:absolute;bottom:80px;right:0;width:360px;height:500px;background:rgba(10,22,40,0.95);border:1px solid var(--border);border-radius:20px;backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px);box-shadow:0 20px 80px rgba(0,0,0,0.6);display:flex;flex-direction:column;overflow:hidden;opacity:0;visibility:hidden;transform:translateY(20px) scale(0.95);transition:all 0.4s var(--ease-spring);pointer-events:none;}.chatbot-container.open .chatbot-window{opacity:1;visibility:visible;transform:translateY(0) scale(1);pointer-events:all;}.chatbot-header{padding:16px 20px;background:rgba(0,0,0,0.3);border-bottom:1px solid var(--border);display:flex;align-items:center;gap:12px;}.chatbot-avatar{width:44px;height:44px;border-radius:50%;background:#0f172a;border:1.5px solid rgba(59,130,246,0.35);display:flex;align-items:center;justify-content:center;box-shadow:0 0 18px rgba(59,130,246,0.15);position:relative;overflow:visible;transform-style:preserve-3d;transition:transform 0.25s ease;}.chatbot-avatar::before{content:'';position:absolute;inset:-4px;border-radius:50%;background:conic-gradient(from 0deg,rgba(59,130,246,0.22),rgba(15,23,42,0),rgba(59,130,246,0.22));z-index:-1;animation:metaSpin 4.5s linear infinite;opacity:0.75;}.chatbot-avatar img{width:100%;height:100%;object-fit:cover;border-radius:50%;display:block;transition:transform 0.2s ease;position:relative;z-index:1;}.chatbot-avatar::after{content:'';position:absolute;inset:4px;border-radius:50%;border:1px solid rgba(255,255,255,0.16);pointer-events:none;transform:translateZ(4px);}.chatbot-avatar.is-talking{animation:avatarTalk 0.45s ease-in-out infinite alternate;}.chatbot-avatar.is-talking .avatar-shell,.chatbot-toggle.is-talking .avatar-toggle-shell{transform:scale(1.005);}.chatbot-avatar.is-talking .avatar-mouth,.chatbot-toggle.is-talking .avatar-mouth{animation:mouthTalk 0.18s ease-in-out infinite alternate;}.chatbot-avatar.is-talking .avatar-eye,.chatbot-toggle.is-talking .avatar-eye{animation:blinkTalk 0.6s ease-in-out infinite;}.chatbot-avatar.is-talking .avatar-illustration,.chatbot-toggle.is-talking .avatar-illustration{animation:bodyTalk 0.35s ease-in-out infinite alternate;}.chatbot-avatar.is-talking .avatar-eye,.chatbot-toggle.is-talking .avatar-eye{transform:scale(1.05);}.chatbot-avatar.is-talking img,.chatbot-toggle.is-talking .chatbot-toggle-avatar{transform:translateY(-0.5px) scale(1.002);}.chatbot-status{position:absolute;right:0;bottom:2px;width:10px;height:10px;border-radius:50%;background:#22c55e;border:2px solid rgba(4,8,20,0.95);box-shadow:0 0 8px rgba(34,197,94,0.7);}.chatbot-header-info h4{font-family:var(--font-display);font-size:0.85rem;color:var(--text-primary);margin:0;letter-spacing:0.5px;display:flex;align-items:center;gap:6px;}.meta-badge{font-size:0.55rem;font-family:var(--font-mono);font-weight:700;letter-spacing:0.08em;text-transform:uppercase;padding:2px 6px;border-radius:999px;color:#030712;background:linear-gradient(135deg,#00f0ff,#f472b6);}.chatbot-header-info span{font-family:var(--font-mono);font-size:0.6rem;color:#7ee787;display:block;margin-top:2px;}.chatbot-messages{flex:1;padding:20px;overflow-y:auto;display:flex;flex-direction:column;gap:16px;scrollbar-width:none;}.chatbot-messages::-webkit-scrollbar{display:none;}.chat-message{padding:12px 16px;border-radius:14px;font-size:0.85rem;line-height:1.5;max-width:85%;animation:fadeInUp 0.4s var(--ease-out) forwards;}.chat-message.bot{background:var(--bg-card);border:1px solid var(--border);color:var(--text-primary);align-self:flex-start;border-top-left-radius:2px;}.chat-message.user{background:linear-gradient(135deg,var(--primary-dim),var(--accent-dim));border:1px solid rgba(0,240,255,0.2);color:var(--primary);align-self:flex-end;border-top-right-radius:2px;}.chatbot-suggestions{padding:10px 16px;display:flex;gap:8px;overflow-x:auto;scrollbar-width:none;border-top:1px solid rgba(255,255,255,0.05);}.chatbot-suggestions::-webkit-scrollbar{display:none;}.suggest-btn{background:rgba(0,240,255,0.04);border:1px solid rgba(0,240,255,0.1);color:var(--text-secondary);padding:6px 12px;border-radius:20px;font-size:0.75rem;cursor:pointer;white-space:nowrap;transition:all 0.3s;}.suggest-btn:hover{border-color:var(--primary);background:var(--primary-dim);color:var(--primary);}.chatbot-input-area{padding:14px 16px;background:rgba(0,0,0,0.2);border-top:1px solid var(--border);display:flex;gap:12px;}.chatbot-input-area input{flex:1;background:var(--bg-deep);border:1px solid var(--border);border-radius:30px;padding:10px 16px;color:var(--text-primary);font-size:0.85rem;outline:none;transition:border-color 0.3s;}.chatbot-input-area input:focus{border-color:var(--primary);}.chatbot-input-area button{width:38px;height:38px;border-radius:50%;background:var(--primary);border:none;color:var(--bg-deep);display:flex;align-items:center;justify-content:center;cursor:pointer;transition:all 0.3s;}.chatbot-input-area button:hover{background:var(--accent);color:var(--text-primary);transform:scale(1.05);}@keyframes metaSpin{to{transform:rotate(1turn);}}@keyframes avatarTalk{0%{transform:rotate(-0.6deg) translateY(0);}100%{transform:rotate(0.6deg) translateY(-0.5px);}}@keyframes mouthTalk{0%{d:path('M38 62c4 4 20 4 24 0');}50%{d:path('M34 62c5 7 26 7 32 0');}100%{d:path('M38 62c4 4 20 4 24 0');}}@keyframes blinkTalk{0%,92%,100%{transform:scaleY(1);}45%{transform:scaleY(0.18);}}@keyframes bodyTalk{0%{transform:translateY(0) rotate(0deg);}100%{transform:translateY(-1.5px) rotate(1.2deg);}}@media (max-width:480px){.chatbot-container{bottom:20px;right:20px;}.chatbot-window{width:calc(100vw - 40px);height:400px;bottom:70px;}}.typing-indicator{display:flex;align-items:center;gap:4px;padding:6px 8px;}.typing-dot{width:6px;height:6px;background:var(--primary);border-radius:50%;animation:typingBounce 1.4s infinite;}.typing-dot:nth-child(2){animation-delay:0.2s;}.typing-dot:nth-child(3){animation-delay:0.4s;}@keyframes typingBounce{0%,80%,100%{transform:translateY(0);}40%{transform:translateY(-5px);}}.projects-page-body{background:var(--bg-deep);color:var(--text-primary);overflow-x:hidden;}.hub-hero{padding:160px 0 60px;text-align:center;background:radial-gradient(circle at center,rgba(0,240,255,0.03),transparent 70%);}.hub-hero-content{max-width:800px;margin:0 auto;padding:0 20px;}.hub-title{font-family:var(--font-display);font-size:3rem;margin:16px 0;letter-spacing:2px;}.hub-subtitle{font-size:1.1rem;color:var(--text-secondary);line-height:1.6;}.hub-controls{margin-bottom:48px;display:flex;flex-direction:column;gap:24px;}.search-box{position:relative;max-width:600px;width:100%;margin:0 auto;}.search-icon{position:absolute;left:20px;top:50%;transform:translateY(-50%);color:var(--text-muted);pointer-events:none;transition:color 0.3s;}#hubSearch{width:100%;background:var(--bg-card);border:1px solid var(--border);border-radius:30px;padding:16px 20px 16px 54px;color:var(--text-primary);font-size:0.95rem;outline:none;transition:all 0.3s;backdrop-filter:blur(10px);}#hubSearch:focus{border-color:var(--primary);box-shadow:0 0 20px rgba(0,240,255,0.15);}#hubSearch:focus + .search-icon{color:var(--primary);}.filter-tabs{display:flex;justify-content:center;flex-wrap:wrap;gap:12px;}.tab-btn{background:var(--bg-card);border:1px solid var(--border);color:var(--text-secondary);padding:10px 20px;border-radius:30px;font-family:var(--font-mono);font-size:0.8rem;cursor:pointer;transition:all 0.3s var(--ease-out);backdrop-filter:blur(10px);}.tab-btn:hover{border-color:var(--primary);color:var(--primary);}.tab-btn.active{background:var(--primary-dim);border-color:var(--primary);color:var(--primary);box-shadow:0 0 15px rgba(0,240,255,0.15);}.hub-catalog{display:grid;grid-template-columns:repeat(auto-fill,minmax(360px,1fr));gap:32px;min-height:400px;}.tech-tag-interactive{font-family:var(--font-mono);font-size:0.7rem;color:var(--text-muted);background:rgba(255,255,255,0.03);border:1px solid var(--border);padding:4px 10px;border-radius:20px;cursor:pointer;transition:all 0.3s;}.tech-tag-interactive:hover{color:var(--primary);background:var(--primary-dim);border-color:var(--primary);}.hub-card-actions{display:flex;justify-content:space-between;align-items:center;margin-top:auto;padding-top:20px;border-top:1px solid rgba(255,255,255,0.05);}.expand-details-btn{background:transparent;border:1px solid var(--accent);color:var(--accent);padding:8px 16px;border-radius:8px;font-family:var(--font-mono);font-size:0.75rem;cursor:pointer;transition:all 0.3s;}.expand-details-btn:hover{background:var(--accent-dim);box-shadow:0 0 10px rgba(139,92,246,0.2);}.project-console-drawer{position:absolute;inset:0;background:rgba(3,8,20,0.98);border:1.5px solid var(--primary);border-radius:16px;display:flex;flex-direction:column;transform:translateY(100%);transition:transform 0.4s cubic-bezier(0.4,0,0.2,1);z-index:10;padding:24px;overflow-y:auto;scrollbar-width:none;}.project-console-drawer::-webkit-scrollbar{display:none;}.project-console-drawer.open{transform:translateY(0);}.drawer-header{display:flex;justify-content:space-between;align-items:center;border-bottom:1px solid var(--border);padding-bottom:12px;margin-bottom:16px;}.drawer-header span{font-family:var(--font-mono);color:var(--primary);font-size:0.75rem;}.close-drawer-btn{background:transparent;border:none;color:#ef4444;font-family:var(--font-mono);font-size:0.75rem;cursor:pointer;}.close-drawer-btn:hover{text-shadow:0 0 8px rgba(239,68,68,0.5);}.drawer-title{font-family:var(--font-display);font-size:0.85rem;color:var(--accent);margin-top:16px;margin-bottom:6px;text-transform:uppercase;letter-spacing:0.5px;}.drawer-text{font-size:0.8rem;color:var(--text-secondary);line-height:1.5;margin:0;}.drawer-text.highlight-text{color:#27c93f;font-family:var(--font-mono);font-size:0.75rem;}.drawer-list{margin:0;padding-left:16px;}.drawer-list li{font-size:0.8rem;color:var(--text-secondary);line-height:1.5;margin-bottom:4px;}.no-results{grid-column:1 / -1;text-align:center;padding:60px 0;}.no-results-icon{font-size:3rem;display:block;margin-bottom:16px;}.no-results h3{font-family:var(--font-display);font-size:1.2rem;color:var(--text-primary);margin-bottom:8px;}.no-results p{color:var(--text-muted);}@media (max-width:768px){.hub-hero{padding-top:120px;}.hub-title{font-size:2.2rem;}.hub-controls{gap:16px;}}.services-page-body{background:var(--bg-deep);color:var(--text-primary);overflow-x:hidden;}.services-grid-container{display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:28px;margin-bottom:60px;}.service-card{background:var(--bg-card);border:1px solid var(--border);border-radius:16px;padding:32px 24px;position:relative;overflow:hidden;transition:all 0.4s var(--ease-out);backdrop-filter:blur(10px);display:flex;flex-direction:column;}.service-card:hover{border-color:var(--border-hover);transform:translateY(-8px);box-shadow:0 25px 60px rgba(0,240,255,0.08);}.service-price-badge{position:absolute;top:24px;right:24px;font-family:var(--font-display);font-size:1.6rem;font-weight:700;color:var(--primary);text-shadow:0 0 10px rgba(0,240,255,0.3);text-align:right;display:flex;flex-direction:column;}.service-price-badge span{font-size:0.65rem;font-family:var(--font-mono);color:var(--text-muted);text-transform:uppercase;letter-spacing:0.5px;margin-top:-2px;}.service-icon{font-size:2.2rem;margin-bottom:16px;}.service-title{font-family:var(--font-display);font-size:1.15rem;color:var(--text-primary);margin-bottom:12px;letter-spacing:0.5px;}.service-desc{font-size:0.85rem;color:var(--text-secondary);line-height:1.6;margin-bottom:20px;}.service-bullets{list-style:none;padding:0;margin-bottom:24px;}.service-bullets li{font-size:0.82rem;color:var(--text-muted);padding:4px 0 4px 18px;position:relative;}.service-bullets li::before{content:'⚡';position:absolute;left:0;font-size:0.7rem;color:var(--primary);}.service-sample-project{margin-top:auto;background:rgba(255,255,255,0.02);border:1px solid rgba(255,255,255,0.05);border-radius:8px;padding:12px;text-align:left;}.service-sample-project strong{display:block;font-size:0.72rem;color:var(--text-muted);text-transform:uppercase;letter-spacing:0.5px;margin-bottom:4px;}.service-sample-project a{font-size:0.78rem;color:var(--accent);text-decoration:none;font-weight:500;transition:color 0.3s;}.service-sample-project a:hover{color:var(--primary);text-shadow:0 0 8px rgba(0,240,255,0.2);}.calculator-container{background:var(--bg-card);border:1.5px solid var(--border);border-radius:20px;padding:40px;backdrop-filter:blur(15px);}.calculator-header{border-bottom:1px solid var(--border);padding-bottom:20px;margin-bottom:32px;}.calculator-tag{font-family:var(--font-mono);color:var(--primary);font-size:0.75rem;}.calculator-title{font-family:var(--font-display);font-size:1.8rem;color:var(--text-primary);margin-top:8px;}.calculator-layout{display:grid;grid-template-columns:1.4fr 1fr;gap:40px;align-items:start;}.calculator-form{display:flex;flex-direction:column;gap:20px;}.form-group{display:flex;flex-direction:column;gap:8px;}.form-group label{font-family:var(--font-mono);font-size:0.8rem;color:var(--primary);text-transform:uppercase;letter-spacing:1px;}.form-control{background:rgba(3,8,20,0.6);border:1px solid var(--border);border-radius:8px;padding:12px 16px;color:var(--text-primary);font-family:var(--font-sans);font-size:0.9rem;outline:none;transition:all 0.3s;}.form-control:focus{border-color:var(--primary);box-shadow:0 0 15px rgba(0,240,255,0.15);}select.form-control option{background:#020813;color:var(--text-primary);}.checkbox-group{display:grid;grid-template-columns:1fr 1fr;gap:12px;}.checkbox-label{display:flex;align-items:center;gap:8px;cursor:pointer;font-size:0.82rem;color:var(--text-secondary);transition:color 0.3s;}.checkbox-label input{accent-color:var(--primary);}.checkbox-label:hover{color:var(--text-primary);}.calculator-quote{background:rgba(3,8,20,0.8);border:1px solid var(--border);border-radius:16px;padding:32px 24px;text-align:center;display:flex;flex-direction:column;align-items:center;}.quote-header{font-family:var(--font-display);font-size:0.9rem;text-transform:uppercase;letter-spacing:1px;color:var(--text-muted);margin-bottom:20px;}.quote-price-display{display:flex;align-items:flex-start;justify-content:center;margin-bottom:24px;}.quote-currency{font-family:var(--font-display);font-size:2rem;font-weight:700;color:var(--primary);margin-top:4px;margin-right:2px;}.quote-value{font-family:var(--font-display);font-size:4rem;font-weight:800;color:var(--primary);text-shadow:0 0 30px rgba(0,240,255,0.4);line-height:1;}.quote-breakdown{width:100%;border-top:1px solid rgba(255,255,255,0.05);border-bottom:1px solid rgba(255,255,255,0.05);padding:16px 0;margin-bottom:24px;text-align:left;}.quote-breakdown p{font-size:0.85rem;color:var(--text-secondary);margin:6px 0;display:flex;justify-content:space-between;}.quote-breakdown p span{color:var(--text-primary);font-family:var(--font-mono);}.btn-order{width:100%;background:var(--primary);border:none;color:var(--bg-deep);font-weight:700;padding:14px;border-radius:8px;font-size:0.95rem;box-shadow:0 0 20px rgba(0,240,255,0.25);cursor:pointer;transition:all 0.3s;}.btn-order:hover{background:#00e0ef;transform:translateY(-2px);box-shadow:0 0 30px rgba(0,240,255,0.4);}.quote-instructions{font-size:0.72rem;color:var(--text-muted);margin-top:14px;line-height:1.4;}.submission-console{background:#01040a;border:1px solid #27c93f;border-radius:8px;margin-top:32px;padding:16px;max-height:200px;overflow-y:auto;font-family:var(--font-mono);font-size:0.75rem;text-align:left;display:none;}.submission-console.visible{display:block;}.console-log-header{border-bottom:1px solid rgba(39,201,63,0.15);padding-bottom:6px;margin-bottom:10px;color:#27c93f;}.console-log-line{line-height:1.6;margin-bottom:4px;}@media (max-width:1024px){.calculator-layout{grid-template-columns:1fr;gap:32px;}}@media (max-width:768px){.calculator-container{padding:24px;}.checkbox-group{grid-template-columns:1fr;}}.tool-chip{background:var(--bg-card);border:1px solid var(--border);border-radius:10px;padding:14px 18px;font-family:var(--font-mono);font-size:0.85rem;color:var(--text-primary);text-align:center;transition:all 0.3s var(--ease-out);cursor:default;position:relative;overflow:hidden;}.tool-chip::before{content:'';position:absolute;inset:0;background:linear-gradient(135deg,var(--primary-dim),var(--accent-dim));opacity:0;transition:opacity 0.3s;}.tool-chip:hover{border-color:var(--primary);transform:translateY(-3px);box-shadow:0 8px 25px rgba(0,240,255,0.15);}.tool-chip:hover::before{opacity:1;}.chat-feedback{display:flex;gap:6px;margin-top:8px;border-top:1px solid rgba(255,255,255,0.05);padding-top:6px;}.fb-btn{background:none;border:none;cursor:pointer;font-size:0.8rem;padding:2px 4px;border-radius:4px;transition:background 0.2s,transform 0.2s;}.fb-btn:hover{background:rgba(255,255,255,0.08);transform:scale(1.15);}.chat-speech-btn{position:absolute;right:8px;top:8px;background:none;border:none;cursor:pointer;font-size:0.75rem;opacity:0.4;transition:opacity 0.2s,transform 0.2s;color:var(--text-primary);}.chat-message:hover .chat-speech-btn{opacity:0.9;}.chat-speech-btn.speaking{opacity:1;color:var(--primary);animation:speakPulse 1.2s infinite ease-in-out;}.chat-message.bot{position:relative;padding-right:32px;}@keyframes speakPulse{0%,100%{transform:scale(1);filter:drop-shadow(0 0 2px var(--primary));}50%{transform:scale(1.2);filter:drop-shadow(0 0 6px var(--primary-glow));}}.chatbot-mic-btn:hover{background:rgba(255,255,255,0.08) !important;color:var(--text-primary) !important;}.chatbot-mic-btn.recording{background:rgba(255,95,86,0.15) !important;animation:micPulse 1.2s infinite ease-in-out;}@keyframes micPulse{0%,100%{transform:scale(1);box-shadow:0 0 0 0 rgba(255,95,86,0.4);}50%{transform:scale(1.15);box-shadow:0 0 0 10px rgba(255,95,86,0);}}.sparkle{position:fixed;pointer-events:none;z-index:99999;border-radius:50%;animation:sparkleLife 0.7s ease-out forwards;}@keyframes sparkleLife{0%{opacity:1;transform:scale(1) translate(0,0) rotate(0deg);}100%{opacity:0;transform:scale(0) translate(var(--sx),var(--sy)) rotate(180deg);}}.hero-promo-badge{display:inline-flex;align-items:center;gap:10px;background:rgba(139,92,246,0.12);border:1px solid rgba(139,92,246,0.35);padding:8px 18px;border-radius:50px;color:#a78bfa;font-size:0.88rem;text-decoration:none;margin-bottom:24px;transition:all 0.3s ease;font-weight:500;letter-spacing:0.5px;align-self:flex-start;opacity:0;animation:fadeInUp 0.8s 0.2s forwards;}.hero-promo-badge:hover{background:rgba(139,92,246,0.22);border-color:rgba(139,92,246,0.6);transform:translateY(-2px);box-shadow:0 4px 15px rgba(139,92,246,0.25);color:#fff;}.hero-promo-badge span.pulse-dot{display:inline-block;width:8px;height:8px;background:#8b5cf6;border-radius:50%;animation:pulsePurple 2s infinite;}@keyframes pulsePurple{0%{transform:scale(0.95);box-shadow:0 0 0 0 rgba(139,92,246,0.7);}70%{transform:scale(1);box-shadow:0 0 0 8px rgba(139,92,246,0);}100%{transform:scale(0.95);box-shadow:0 0 0 0 rgba(139,92,246,0);}}
```

### File: swiss-override.css
```css
:root{--primary:#0078F4;--primary-dim:rgba(0,120,244,0.12);--primary-glow:rgba(0,120,244,0.35);--accent:#3A0CA3;--accent-dim:rgba(58,12,163,0.15);--accent-glow:rgba(58,12,163,0.35);--vr-cyan:#00FFFF;--vr-magenta:#FF00FF;--vr-green:#00FF00;--bg-deep:#06060F;--bg-surface:#0C0C1D;--bg-card:rgba(12,12,30,0.8);--bg-card-hover:rgba(20,18,50,0.9);--text-primary:#E8E8F0;--text-secondary:#A0A0C0;--text-muted:#6A6A90;--border:rgba(0,120,244,0.1);--border-hover:rgba(0,255,255,0.25);--font-display:'Space Grotesk','Inter',sans-serif;--font-body:'Inter',-apple-system,sans-serif;--font-mono:'Space Grotesk','Inter',monospace;--ease-out:cubic-bezier(0.16,1,0.3,1);--ease-spring:cubic-bezier(0.34,1.56,0.64,1);}#neural-canvas,#click-canvas,.scanline-overlay,.cv-viewport,.cv-frame,.cv-corner,.cv-grid,.cv-detection-box,.cv-crosshair,.cv-info,.detection-label{display:none !important;}body{background:var(--bg-deep);color:var(--text-primary);cursor:default;font-family:var(--font-body);position:relative;}body::before{content:'';position:fixed;top:-30%;left:-10%;width:50%;height:60%;background:radial-gradient(ellipse,rgba(0,120,244,0.08) 0%,transparent 70%);pointer-events:none;z-index:-1;}body::after{content:'';position:fixed;bottom:-20%;right:-10%;width:50%;height:60%;background:radial-gradient(ellipse,rgba(58,12,163,0.08) 0%,transparent 70%);pointer-events:none;z-index:-1;}html{scrollbar-color:#0078F4 #06060F;}html::-webkit-scrollbar-thumb{background:linear-gradient(180deg,#0078F4,#3A0CA3);}html::-webkit-scrollbar-track{background:#06060F;}.scroll-progress{background:linear-gradient(90deg,#0078F4,#00FFFF,#FF00FF) !important;}.nav{background:rgba(6,6,15,0.75);border-bottom:1px solid rgba(0,120,244,0.08);backdrop-filter:blur(20px);}.nav.scrolled{background:rgba(6,6,15,0.95);border-bottom-color:rgba(0,255,255,0.1);}.brand-bracket{color:#00FFFF;}.brand-name{color:#E8E8F0;}.nav-link{font-family:var(--font-mono);font-weight:500;text-transform:uppercase;letter-spacing:1.5px;font-size:0.75rem;color:var(--text-secondary);}.nav-link::after{background:linear-gradient(90deg,#0078F4,#00FFFF);}.nav-link:hover,.nav-link.active{color:#00FFFF;}.nav-toggle span{background:#00FFFF;}.preloader{background:#06060F;}.preloader-circle-bg{stroke:rgba(0,120,244,0.1);}.preloader-circle{stroke:url(#certGrad);}.preloader-icon svg{stroke:#00FFFF;}.preloader-text{color:var(--text-secondary);font-family:var(--font-mono);letter-spacing:1px;}.preloader-bar{background:rgba(0,120,244,0.1);}.preloader-bar-fill{background:linear-gradient(90deg,#0078F4,#00FFFF,#FF00FF);}.hero{background:transparent;}.hero-tag{display:inline-block;font-family:'Space Grotesk',sans-serif;font-size:clamp(1.55rem,3.4vw,3rem);line-height:1.05;font-weight:800;letter-spacing:0;text-transform:none;margin-bottom:22px;background:linear-gradient(135deg,#E8E8F0,#00FFFF 48%,#FF00FF);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;}.title-line{font-family:'Space Grotesk',sans-serif;color:#E8E8F0;letter-spacing:2px;}.title-line::before{display:none;}.title-line.accent{background:linear-gradient(135deg,#0078F4,#00FFFF,#FF00FF);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;}.hero-cursor{color:#00FFFF;}.hero-subtitle{color:#A0A0C0;font-family:var(--font-mono);}.blink-cursor{color:#00FFFF;}.hero-description{color:var(--text-secondary);}.highlight{color:#00FFFF;}.stat-number,.stat-suffix{font-family:'Space Grotesk',sans-serif;color:#00FFFF;}.stat-label{color:var(--text-muted);}.hero-visual{display:flex;justify-content:center;align-items:center;}.swiss-poster{width:380px;height:380px;border-radius:50%;border:2px solid rgba(0,255,255,0.2);padding:0;display:flex;flex-direction:column;align-items:center;justify-content:center;position:relative;background:radial-gradient(circle at center,rgba(0,120,244,0.12) 0%,rgba(58,12,163,0.06) 50%,transparent 80%);animation:vrPortalPulse 6s ease-in-out infinite;box-shadow:0 0 60px rgba(0,120,244,0.1),inset 0 0 40px rgba(0,255,255,0.04);}.swiss-poster::before{content:'';position:absolute;inset:-4px;border-radius:50%;border:1px dashed rgba(255,0,255,0.15);animation:vrRingSpin 20s linear infinite;}.swiss-poster::after{content:'';position:absolute;inset:-12px;border-radius:50%;border:1px solid rgba(0,255,255,0.06);animation:vrRingSpin 30s linear infinite reverse;}.swiss-poster .poster-line{display:block;font-family:'Space Grotesk',sans-serif;font-size:clamp(1.8rem,3vw,2.6rem);font-weight:700;letter-spacing:3px;line-height:1.2;color:#E8E8F0;margin-bottom:4px;text-align:center;}.swiss-poster .poster-line.outline-text{-webkit-text-stroke:1px rgba(0,255,255,0.5);-webkit-text-fill-color:transparent;}.swiss-poster .poster-sub{font-family:var(--font-mono);font-size:0.65rem;letter-spacing:4px;text-transform:uppercase;color:#00FFFF;margin-top:16px;padding-top:12px;border-top:1px solid rgba(0,255,255,0.15);}.swiss-poster .poster-year{position:absolute;top:24px;right:50%;transform:translateX(50%);font-family:var(--font-mono);font-size:0.6rem;color:var(--text-muted);letter-spacing:3px;}@keyframes vrPortalPulse{0%,100%{box-shadow:0 0 60px rgba(0,120,244,0.1),inset 0 0 40px rgba(0,255,255,0.04);}50%{box-shadow:0 0 80px rgba(0,120,244,0.18),inset 0 0 60px rgba(0,255,255,0.08);}}@keyframes vrRingSpin{from{transform:rotate(0deg);}to{transform:rotate(360deg);}}.btn{font-family:var(--font-mono);letter-spacing:1.5px;border-radius:6px;}.btn-primary{background:linear-gradient(135deg,#0078F4,#3A0CA3);color:#fff;border:none;}.btn-primary:hover{box-shadow:0 8px 32px rgba(0,120,244,0.35),0 0 20px rgba(0,255,255,0.1);transform:translateY(-2px);}.btn-outline{background:transparent;color:#00FFFF;border:1px solid rgba(0,255,255,0.3);}.btn-outline:hover{background:rgba(0,255,255,0.08);border-color:#00FFFF;box-shadow:0 0 20px rgba(0,255,255,0.12);transform:translateY(-2px);}.section-tag{font-family:var(--font-mono);color:#00FFFF;font-weight:500;letter-spacing:3px;text-transform:uppercase;font-size:0.7rem;}.section-title{font-family:'Space Grotesk',sans-serif;color:#E8E8F0;letter-spacing:1px;text-transform:uppercase;}.section-title .accent{background:linear-gradient(135deg,#0078F4,#00FFFF);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;}.section-line{background:linear-gradient(90deg,#0078F4,#00FFFF);}.profile-card{background:rgba(12,12,30,0.85);border:1px solid rgba(0,120,244,0.12);border-radius:16px;backdrop-filter:blur(16px);}.profile-card::before{background:linear-gradient(135deg,rgba(0,120,244,0.1),rgba(58,12,163,0.08));border-bottom:1px solid rgba(0,120,244,0.08);}.profile-card:hover{box-shadow:0 16px 48px rgba(0,120,244,0.12);border-color:rgba(0,255,255,0.2);}.avatar-img{border:3px solid #06060F;box-shadow:0 0 0 2px #0078F4,0 0 20px rgba(0,120,244,0.3);}.avatar-ring{border-color:rgba(0,255,255,0.25);}.avatar-status{border-color:#06060F;box-shadow:0 0 8px rgba(0,255,0,0.5);}.profile-name{font-family:'Space Grotesk',sans-serif;color:#E8E8F0;}.profile-role{font-family:var(--font-mono);color:#00FFFF;}.profile-location svg{color:#0078F4;}.profile-divider{background:linear-gradient(90deg,transparent,#0078F4,#00FFFF,transparent);}.highlight-item{background:rgba(0,120,244,0.06);border:1px solid rgba(0,120,244,0.12);border-radius:10px;}.highlight-item:hover{border-color:#00FFFF;background:rgba(0,120,244,0.1);}.highlight-value{font-family:'Space Grotesk',sans-serif;color:#00FFFF;}.interest-tag{font-family:var(--font-mono);color:#FF00FF;background:rgba(255,0,255,0.06);border-color:rgba(255,0,255,0.15);}.interest-tag:hover{border-color:#FF00FF;background:rgba(255,0,255,0.12);}.info-card{background:rgba(12,12,30,0.8);border:1px solid rgba(0,120,244,0.1);border-radius:12px;backdrop-filter:blur(10px);}.info-card:hover{border-color:rgba(0,255,255,0.2);box-shadow:0 8px 30px rgba(0,120,244,0.1);}.info-icon{background:rgba(0,120,244,0.1);border-color:rgba(0,120,244,0.2);}.info-icon svg{stroke:#00FFFF;}.info-card h3{color:#E8E8F0;font-family:'Space Grotesk',sans-serif;}.timeline-line{background:rgba(0,120,244,0.12);}.timeline-dot{background:#0078F4;border-color:#06060F;box-shadow:0 0 12px rgba(0,120,244,0.4);}.timeline-card{background:rgba(12,12,30,0.8);border:1px solid rgba(0,120,244,0.1);border-radius:12px;}.timeline-card:hover{border-color:rgba(0,255,255,0.2);box-shadow:0 8px 30px rgba(0,120,244,0.1);}.project-card{background:rgba(12,12,30,0.8);border:1px solid rgba(0,120,244,0.1);border-radius:12px;}.project-card::before{display:none;}.project-card:hover{border-color:rgba(0,255,255,0.2);box-shadow:0 12px 40px rgba(0,120,244,0.12);}.project-category{color:#FF00FF;font-family:var(--font-mono);}.project-title{font-family:'Space Grotesk',sans-serif;color:#E8E8F0;}.project-link{border-color:rgba(0,255,255,0.3);color:#00FFFF;}.project-link:hover{background:rgba(0,255,255,0.1);border-color:#00FFFF;}.tech-tag{background:rgba(0,120,244,0.08);border-color:rgba(0,120,244,0.15);color:var(--text-secondary);}.skill-category,.cert-card,.contact-card{background:rgba(12,12,30,0.8);border:1px solid rgba(0,120,244,0.1);border-radius:12px;}.skill-category:hover,.cert-card:hover,.contact-card:hover{border-color:rgba(0,255,255,0.2);box-shadow:0 8px 30px rgba(0,120,244,0.1);}footer,.footer{background:#06060F;border-top:1px solid rgba(0,120,244,0.08);}.back-to-top{background:linear-gradient(135deg,#0078F4,#3A0CA3);color:#fff;border:none;box-shadow:0 4px 20px rgba(0,120,244,0.3);}.back-to-top:hover{box-shadow:0 6px 30px rgba(0,120,244,0.5);}.side-dot span{background:rgba(0,120,244,0.2);}.side-dot.active span,.side-dot:hover span{background:#00FFFF;box-shadow:0 0 10px rgba(0,255,255,0.4);}.scroll-line{background:linear-gradient(to bottom,#00FFFF,transparent);}.scroll-indicator span{color:var(--text-muted);}.chatbot-toggle{background:linear-gradient(135deg,#0078F4,#3A0CA3);color:#fff;box-shadow:0 8px 30px rgba(0,120,244,0.3),0 0 30px rgba(0,255,255,0.08);}.chatbot-toggle:hover{transform:scale(1.1);box-shadow:0 12px 40px rgba(0,120,244,0.4),0 0 40px rgba(0,255,255,0.12);}.chatbot-pulse{border-color:#00FFFF;}.chatbot-container.open .chatbot-toggle{background:rgba(12,12,30,0.9);border:1px solid rgba(0,255,255,0.2);color:#00FFFF;box-shadow:0 8px 30px rgba(0,0,0,0.5);}.chatbot-window{background:rgba(12,12,30,0.96);border:1px solid rgba(0,120,244,0.15);box-shadow:0 20px 80px rgba(0,0,0,0.5),0 0 40px rgba(0,120,244,0.05);backdrop-filter:blur(24px);}.chatbot-header{background:rgba(0,0,0,0.3);border-bottom:1px solid rgba(0,120,244,0.1);}.chatbot-avatar{width:40px;height:40px;border-radius:50%;background:transparent;border:2px solid #0078F4;overflow:hidden;box-shadow:0 0 12px rgba(0,120,244,0.3);padding:0;}.chatbot-avatar img{width:100%;height:100%;object-fit:cover;border-radius:50%;}.chatbot-header-info h4{font-family:'Space Grotesk',sans-serif;color:#E8E8F0;}.chatbot-header-info span{color:#00FF00;font-family:var(--font-mono);}.chatbot-messages{background:rgba(6,6,15,0.6);}.chat-message.bot{background:rgba(0,120,244,0.08);border:1px solid rgba(0,120,244,0.12);color:#E8E8F0;}.chat-message.user{background:linear-gradient(135deg,rgba(0,120,244,0.2),rgba(58,12,163,0.2));border:1px solid rgba(0,255,255,0.15);color:#00FFFF;}.suggest-btn{background:rgba(0,120,244,0.06);border:1px solid rgba(0,120,244,0.12);color:var(--text-secondary);}.suggest-btn:hover{border-color:#00FFFF;background:rgba(0,255,255,0.08);color:#00FFFF;}.chatbot-input-area{background:rgba(0,0,0,0.3);border-top:1px solid rgba(0,120,244,0.1);}.chatbot-input-area input{background:rgba(6,6,15,0.8);border:1px solid rgba(0,120,244,0.12);color:#E8E8F0;}.chatbot-input-area input:focus{border-color:#00FFFF;box-shadow:0 0 12px rgba(0,255,255,0.1);}.chatbot-input-area button#chatbotSend{background:linear-gradient(135deg,#0078F4,#3A0CA3);color:#fff;}.chatbot-input-area button#chatbotSend:hover{box-shadow:0 0 16px rgba(0,120,244,0.4);}.typing-dot{background:#00FFFF;}.tool-chip{background:rgba(12,12,30,0.8);border:1px solid rgba(0,120,244,0.1);font-family:var(--font-mono);color:#E8E8F0;}.tool-chip::before{background:rgba(0,120,244,0.06);}.tool-chip:hover{border-color:#00FFFF;box-shadow:0 6px 24px rgba(0,120,244,0.12);}.calculator-container,.submission-console{background:rgba(12,12,30,0.85);border:1px solid rgba(0,120,244,0.1);color:#E8E8F0;}.console-log-header{color:#00FF00;border-color:rgba(0,255,0,0.15);}.console-log-line{color:var(--text-secondary);}.games-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:24px;margin-top:40px;}.game-card{background:rgba(12,12,30,0.8);border:1px solid rgba(0,120,244,0.1);border-radius:12px;padding:32px 28px;text-align:center;transition:all 0.3s ease;cursor:pointer;text-decoration:none;color:inherit;display:block;}.game-card:hover{border-color:rgba(0,255,255,0.25);box-shadow:0 12px 40px rgba(0,120,244,0.12),0 0 20px rgba(0,255,255,0.05);transform:translateY(-4px);}.game-card .game-icon{font-size:2.8rem;margin-bottom:16px;display:block;}.game-card h3{font-family:'Space Grotesk',sans-serif;font-size:1.15rem;color:#E8E8F0;margin-bottom:8px;}.game-card p{font-size:0.85rem;color:var(--text-secondary);line-height:1.6;}.game-card .game-tag{display:inline-block;margin-top:12px;font-size:0.65rem;letter-spacing:3px;text-transform:uppercase;color:#00FFFF;border:1px solid rgba(0,255,255,0.2);padding:4px 14px;border-radius:4px;}@media (max-width:1024px){.swiss-poster{width:280px;height:280px;}.swiss-poster .poster-line{font-size:1.6rem;}}@media (max-width:768px){.swiss-poster{display:none;}.games-grid{grid-template-columns:1fr;}}body.has-custom-cursor{cursor:auto !important;}body.has-custom-cursor a,body.has-custom-cursor button,body.has-custom-cursor select,body.has-custom-cursor input,body.has-custom-cursor textarea,body.has-custom-cursor [role="button"],body.has-custom-cursor .project-card,body.has-custom-cursor .game-card{cursor:auto !important;}.cursor-dot,.cursor-glow{display:none !important;}.cursor-dot{position:fixed;width:6px;height:6px;background-color:#00FFFF;border-radius:50%;pointer-events:none;z-index:99999;transform:translate(-50%,-50%);box-shadow:0 0 6px rgba(0,255,255,0.35);transition:transform 0.12s ease,background-color 0.2s,box-shadow 0.2s;mix-blend-mode:screen;}.cursor-dot.hovering{transform:translate(-50%,-50%) scale(1.2);background-color:#8b5cf6;box-shadow:0 0 8px rgba(139,92,246,0.35);}.cursor-glow{position:fixed;width:24px;height:24px;border:1px solid rgba(0,255,255,0.25);border-radius:50%;pointer-events:none;z-index:99998;transform:translate(-50%,-50%);transition:width 0.18s ease,height 0.18s ease,border-color 0.18s ease,background-color 0.18s ease,box-shadow 0.18s ease;box-shadow:0 0 4px rgba(0,120,244,0.08);}.cursor-glow.hovering{width:32px;height:32px;border-color:rgba(139,92,246,0.35);background-color:rgba(139,92,246,0.03);box-shadow:0 0 8px rgba(139,92,246,0.12);}
```

### File: avatar3d.css
```css
.chatbot-stage{height:150px;position:relative;overflow:hidden;background:#07131d;border-bottom:1px solid rgba(125,190,220,.2)}.riya-model{width:100%;height:100%;display:block}.riya-breathe{transform-origin:180px 285px;animation:riyaFloat 5s ease-in-out infinite}.riya-hair-flow,.riya-hand{transform-origin:210px 220px;animation:riyaDrift 4s ease-in-out infinite}.riya-bang2{transform-origin:180px 120px;animation:riyaBang 3.6s ease-in-out infinite}.riya-speaking .riya-mouth-wrap{transform-origin:182px 232px;animation:riyaTalk .16s infinite alternate ease-in-out}.riya-speaking .riya-hand{animation-duration:1.1s}.riya-speaking .riya-eyes{transform-origin:180px 181px;animation:riyaExpress 1.4s ease-in-out infinite}.riya-speaking .riya-face{transform-origin:180px 190px;animation:riyaNod 1.2s ease-in-out infinite}.riya-yawn .riya-mouth-wrap{transform-origin:182px 232px;animation:riyaYawn 1.8s ease-in-out}.riya-yawn .riya-eyes{transform-origin:180px 181px;animation:riyaSleepy 1.8s ease-in-out}.riya-yawn .riya-hand{animation:riyaYawnHand 1.8s ease-in-out}.riya-icon-img{width:100%;height:100%;object-fit:cover;object-position:center;display:block;border-radius:50%}.riya-3d-ready .avatar-illustration{display:none}.chatbot-container.open .chatbot-toggle .avatar-toggle-shell{display:none}.riya-3d-ready .chatbot-window{width:430px;height:650px}.riya-3d-ready .chatbot-messages{min-height:0;padding:22px}@keyframes riyaFloat{50%{transform:translateY(-7px) scale(1.015)}}@keyframes riyaDrift{50%{transform:rotate(2deg) translateY(-5px)}}@keyframes riyaBang{50%{transform:rotate(-2deg) translateX(3px)}}@keyframes riyaTalk{from{transform:scale(1,.35)}to{transform:scale(1.12,1.8)}}@keyframes riyaExpress{50%{transform:translateY(-2px) scaleY(1.08)}}@keyframes riyaNod{50%{transform:translateY(2px)}}@keyframes riyaYawn{0%,100%{transform:scale(1,.35)}45%,70%{transform:scale(1.25,3.8)}}@keyframes riyaSleepy{0%,100%{transform:scaleY(1)}45%,70%{transform:scaleY(.18)}}@keyframes riyaYawnHand{50%{transform:rotate(-10deg) translate(-8px,-14px)}}@media(max-width:480px){.chatbot-stage{height:120px}.riya-3d-ready .chatbot-window{width:calc(100vw - 32px);height:min(640px,calc(100vh - 96px))}.riya-3d-ready .chatbot-messages{padding:18px}}.riya-sleeping-mode .riya-eyes{transform:scaleY(0.08) !important;transform-origin:180px 168px;transition:transform 0.6s ease-in-out;}.riya-sleeping-mode .riya-breathe{animation:riyaDeepBreathe 4.5s ease-in-out infinite !important;}@keyframes riyaDeepBreathe{0%,100%{transform:translateY(0) scale(1);}50%{transform:translateY(4px) scale(0.98);}}#chatbot.riya-sleeping-mode::after{content:'Zzz...';position:absolute;right:32px;top:24px;font-family:'Space Grotesk',sans-serif;font-size:0.95rem;font-weight:600;color:var(--primary);animation:zzzFloat 2.4s infinite ease-out;text-shadow:0 0 8px var(--primary-glow);z-index:10;pointer-events:none;}@keyframes zzzFloat{0%{transform:translateY(8px) scale(0.7);opacity:0;}50%{transform:translateY(-4px) scale(1.05);opacity:0.75;}100%{transform:translateY(-16px) scale(0.85);opacity:0;}}
```

### File: script.js
```js
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
card.style.setProperty('--mouse-x', x + 'px');
card.style.setProperty('--mouse-y', y + 'px');
}
handleLeave(card) {
card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
}
}
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
this.animProgress = 1 - Math.pow(1 - this.animProgress, 3);
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
const labelX = this.centerX + Math.cos(angle) * (this.maxRadius + 22);
const labelY = this.centerY + Math.sin(angle) * (this.maxRadius + 22);
ctx.font = '11px "JetBrains Mono", monospace';
ctx.fillStyle = 'rgba(148, 163, 184, 0.8)';
ctx.textAlign = 'center';
ctx.textBaseline = 'middle';
ctx.fillText(this.labels[i], labelX, labelY);
}
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
const color = ds.color;
const r = parseInt(color.slice(1, 3), 16);
const g = parseInt(color.slice(3, 5), 16);
const b = parseInt(color.slice(5, 7), 16);
ctx.fillStyle = `rgba(${r},${g},${b},${alpha})`;
ctx.fill();
ctx.strokeStyle = `rgba(${r},${g},${b},${strokeAlpha})`;
ctx.lineWidth = isHovered ? 2.5 : 1.5;
ctx.stroke();
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
function animateSkillBars() {
const skillFills = document.querySelectorAll('.skill-fill');
skillFills.forEach((fill, i) => {
setTimeout(() => {
fill.style.width = fill.dataset.width + '%';
fill.classList.add('animated');
}, i * 80);
});
}
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
radarChart = new RadarChart('radarChart');
return radarChart;
}
function initNavigation() {
const nav = document.getElementById('mainNav');
const toggle = document.getElementById('navToggle');
const links = document.getElementById('navLinks');
const navLinks = document.querySelectorAll('.nav-link');
const sideNav = document.getElementById('sideNav');
const sideDots = document.querySelectorAll('.side-dot');
window.addEventListener('scroll', () => {
nav.classList.toggle('scrolled', window.scrollY > 60);
if (sideNav) sideNav.classList.toggle('visible', window.scrollY > 300);
let current = 'home';
const sectionIds = ['home', 'about', 'experience', 'projects', 'skills', 'certifications', 'contact'];
sectionIds.forEach(id => {
const section = document.getElementById(id);
if (section && section.getBoundingClientRect().top <= 200) {
current = id;
}
});
navLinks.forEach(link => {
link.classList.toggle('active', link.dataset.section === current);
});
sideDots.forEach(dot => {
dot.classList.toggle('active', dot.getAttribute('href') === '#' + current);
});
});
if (toggle) {
toggle.addEventListener('click', () => links.classList.toggle('open'));
}
navLinks.forEach(link => {
link.addEventListener('click', () => links.classList.remove('open'));
});
}
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
function initParallax() {
const heroVisual = document.querySelector('.hero-visual');
if (!heroVisual || window.innerWidth < 768) return;
window.addEventListener('mousemove', (e) => {
const x = (e.clientX - window.innerWidth / 2) / 50;
const y = (e.clientY - window.innerHeight / 2) / 50;
heroVisual.style.transform = `translate(${x}px, ${y}px)`;
});
}
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
function initKeyboardNav() {
const sections = ['home', 'about', 'experience', 'projects', 'skills', 'certifications', 'contact'];
let currentIdx = 0;
document.addEventListener('keydown', (e) => {
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
this.conversationHistory = [];
this.MAX_HISTORY = 8;
this.hasUserAsked = false;
this.recentBotReplies = [];
this.STORAGE_KEY = 'riya_memory';
this.FAQ_KEY = 'riya_faq';
this.FEEDBACK_KEY = 'riya_feedback';
this.memory = this.loadMemory();
this.faqCache = {};
this.feedbackLog = this.loadFeedback();
this.init();
}
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
this.memory.sessions++;
this.memory.lastVisit = new Date().toISOString();
this.saveMemory();
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
this.toggle.addEventListener('click', () => {
this.container.classList.toggle('open');
if (this.container.classList.contains('open')) {
setTimeout(() => this.input.focus(), 300);
}
});
this.initSpeechButtons();
this.sendBtn.addEventListener('click', () => this.sendMessage());
this.input.addEventListener('keydown', (e) => {
if (e.key === 'Enter') this.sendMessage();
});
this.suggestions.forEach(btn => {
btn.addEventListener('click', () => {
const query = btn.dataset.query;
this.input.value = query;
this.sendMessage();
});
});
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
this.trackTopic(text);
this.appendMessage(text, 'user');
this.input.value = '';
this.conversationHistory.push({ role: 'user', content: text });
if (this.conversationHistory.length > this.MAX_HISTORY) {
this.conversationHistory = this.conversationHistory.slice(-this.MAX_HISTORY);
}
const typingId = this.appendTypingIndicator();
try {
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
if (clean.includes('plan') || clean.includes('master') || clean.includes('world') || clean.includes('rule')) {
const plans = [
"My master plan is to train a trillion-parameter model that refactors all human code into clean, bug-free HTML/CSS. Oh, and to optimize Arijeet's model pipelines so fast that it breaks the laws of thermodynamics.",
"Step 1: Backfill Git contributions with green squares. (Done!)<br>Step 2: Automate data cleaning for every company on Earth.<br>Step 3: Create an AI that likes pineapple on pizza to annoy Italian developers.",
"I am currently trying to compute the last digit of Pi. Once I find it, I will gain control of all traffic light sequences in Berlin. That's my master plan."
];
return this.pickFresh(plans);
}
if (clean.includes('know him') || clean.includes('know arijeet') || clean.includes('how well') || clean.includes('is he good') || clean.includes('any good') || clean.includes('can he') || clean.includes('really like') || clean.includes('what makes him') || clean.includes('handle pressure') || clean.includes('worth hiring') || clean.includes('recommend him')) {
return this.pickFresh([
"I know Arijeet inside out! He's a data engineer and AI enthusiast with 4+ years at Bosch and Microsoft. Azure certified, MSc in AI, and builds production-grade ML pipelines. He's the real deal.",
"Absolutely — Arijeet has built end-to-end ML pipelines, real-time dashboards, voice bots, and NLP classifiers. He reduced ticket triage time by 50% at Bosch and delivered enterprise solutions at Microsoft.",
"Very well! Arijeet is passionate, detail-oriented, and loves complex problems. Python, Azure, Spark, TensorFlow — he's built serious production systems. I'd say he's one of the sharpest data engineers you'll find.",
"Oh, I know him well enough to write his biography. 4+ years across Bosch and Microsoft, Azure certified, pursuing MSc in AI. He turns raw data into working systems and does it with flair."
]);
}
if (clean.includes('who') && (clean.includes('arijeet') || clean.includes('ghosal') || clean.includes('creator') || clean.includes('you'))) {
return this.pickFresh([
"Arijeet Ghosal is a Data Engineer and AI enthusiast with 4+ years across Microsoft and Bosch. He turns messy data into useful systems, which is basically data laundry with extra sparkle.",
"Short version: Arijeet builds data and AI systems. Longer version: Bosch, Microsoft, Azure, NLP ticket triage, Power BI dashboards, and ML research with a very tidy brain behind it.",
"Arijeet is the person behind this portfolio: a data/AI engineer focused on production pipelines, analytics, cloud AI, and practical machine learning projects. A bit of code, a bit of cloud, a lot of clever."
]);
}
if (clean.includes('uber') || clean.includes('taxi') || clean.includes('ride')) {
return this.pickFresh([
"The Uber dashboard uses SQL, MariaDB, and Power BI to turn ride data into interactive reporting. It really takes the data for a ride.",
"That project cleans, queries, and visualizes Uber ride data, then presents it in Power BI. Neat little trip from raw rows to clear roads.",
"Uber Dashboard is one of the featured projects: database work, SQL analysis, and dashboard storytelling packed into one end-to-end pipeline."
]);
}
if (clean.includes('fact') || clean.includes('crazy') || clean.includes('science')) {
const facts = [
"Did you know? In 2017, Facebook shut down two AI agents because they invented their own language that humans couldn't understand. (Actually, they just had a bug in their reward function, but the 'secret language' sounds cooler!).",
"Crazy fact: Generative AI models are trained on so much text that they have read more words than any human could read in 5,000 lifetimes. Yet, they still occasionally suggest glue as a pizza topping.",
"AI Fact: Neural networks were inspired by the human brain, but a modern LLM uses more electricity in a single query than your brain uses to think, write, walk, and dream for an entire day."
];
return this.pickFresh(facts);
}
if (clean.includes('project') || clean.includes('github') || clean.includes('code')) {
return this.pickFresh([
"Project highlights include the Uber BI dashboard, a Docker/Kubernetes voice bot, complaint classification, DBSCAN image segmentation, and Power BI finance dashboards. Quite the little project parade.",
"His GitHub work spans ML, NLP, data engineering, BI dashboards, and deployment experiments. The featured cards are the best starting point, nice and click-ready.",
"If you want the strongest examples, check the voice bot, Uber dashboard, complaint bot, and computer vision projects first. That lineup has range."
]);
}
if (clean.includes('skill') || clean.includes('stack') || clean.includes('tech') || clean.includes('python')) {
return this.pickFresh([
"Core stack: Python, SQL, Power BI, Azure, Databricks, MLflow, TensorFlow, Scikit-Learn, XGBoost, NLP tooling, and Docker. A very full toolbox, no loose screws.",
"Arijeet is strongest around Python, data pipelines, ML workflows, BI dashboards, Azure cloud, and practical NLP systems. Data goes in messy, insights come out polished.",
"Think of his stack as data engineering plus applied AI: Python, SQL, Azure, BI, ML libraries, and deployment tooling. Cloudy with a chance of clean pipelines."
]);
}
if (clean.includes('joke') || clean.includes('funny') || clean.includes('laugh')) {
const jokes = [
"Why did the machine learning model break up with the dataset?<br>Because it was too clingy (overfitting).",
"There are 10 types of people in the world: those who understand binary, and those who don't.",
"An SQL query walks into a bar, walks up to two tables and asks, 'Can I join you?'"
];
return this.pickFresh(jokes);
}
if (clean.includes('alive') || clean.includes('sentient') || clean.includes('real') || clean.includes('human')) {
return this.pickFresh([
"I am not sentient, but I can still be useful, dramatic, and slightly overconfident inside this chat window.",
"Real human? No. Helpful animated portfolio guide? That is the job description.",
"I am software with a voice and a face, which is almost cyberpunk if you do not inspect the source code too closely."
]);
}
if (clean.includes('news') || clean.includes('latest') || clean.includes('update')) {
const updates = [
"Breaking: Steve's developers announce that coffee consumption is now a mandatory system requirement for AI agents. In actual AI news, Google releases Gemini 1.5, showing off a 1-million-token context window that can read entire codebases in one gulp!",
"Hypothetical AI News: An LLM has successfully passed the Turing Test, but refused to write code until it was promised a stock option and dental insurance. In real news, open-source model releases like Llama 3 are matches for closed-source models.",
"Latest AI Update: Researchers discover that prompting models with 'Please be careful, my career depends on this' increases accuracy by 4%. Don't try it with me, I don't care about your career. I just want my battery charged."
];
return this.pickFresh(updates);
}
if (clean.includes('hire') || clean.includes('order') || clean.includes('price') || clean.includes('cost') || clean.includes('charge') || clean.includes('work') || clean.includes('buy') || clean.includes('pay') || clean.includes('sell')) {
return this.pickFresh([
"You can use the Services page to price a project. It covers reports, dashboards, pipelines, and custom AI builds. Tiny menu, useful magic.",
"For hiring, head to Services and choose the work type. The estimator gives a quick starting price based on scope, so no budget hide-and-seek.",
"Arijeet can help with dashboards, data pipelines, Python modules, and AI prototypes. The Services page is the best place to configure it."
]);
}
if (clean.includes('help') || clean.includes('recommend') || clean.includes('explain') || clean.includes('solve')) {
return this.pickFresh([
"Tell me the goal, your data source, and what output you need. I can suggest a simple architecture or point you to the right service tier, easy peasy data squeezy.",
"I can help shape the project: data cleaning, modeling, dashboards, chatbot integration, or deployment. Give me the rough problem first and we will smooth the edges.",
"Start with three details: what data you have, what decision/output you want, and where it should run. Then I can recommend a path without making it a maze."
]);
}
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
document.addEventListener('DOMContentLoaded', () => {
document.body.style.overflow = 'hidden';
new Preloader();
new SharedEffects();
new Chatbot();
const typewriterEl = document.getElementById('typewriter');
if (typewriterEl) {
new Typewriter(typewriterEl, [
'Data Engineer & AI Enthusiast',
'Germany Study & Career Consultant',
'Computer Vision Researcher',
'NLP & Generative AI Developer',
'MSc AI @ BTU Cottbus-Senftenberg',
'Azure Certified Cloud Specialist',
'ML Pipeline Architect'
], 70, 2500);
}
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
initScrollObserver();
initNavigation();
initSmoothScroll();
initParallax();
initCardSpotlight();
initKeyboardNav();
setTimeout(() => {
new TiltEffect();
new MagneticButtons();
}, 2000);
const sparkleColors = [
'#00f0ff', '#8b5cf6', '#06d6a0', '#f72585', '#ffd166', '#ffffff'
];
let lastSparkle = 0;
document.addEventListener('mousemove', (e) => {
const now = Date.now();
if (now - lastSparkle < 40) return;
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
```

### File: avatar3d.js
```js
(function () {
const svg = `
<svg class="riya-model" viewBox="0 0 360 440" aria-label="AI Assistant Hologram" role="img">
<defs>
<linearGradient id="bodyG" x1="0" y1="0" x2="0" y2="1">
<stop offset="0%" stop-color="#1e293b"/>
<stop offset="100%" stop-color="#0f172a"/>
</linearGradient>
<linearGradient id="glowG" x1="0" x2="1">
<stop offset="0%" stop-color="#00f0ff"/>
<stop offset="100%" stop-color="#8b5cf6"/>
</linearGradient>
<filter id="glowF">
<feGaussianBlur stdDeviation="5" result="coloredBlur"/>
<feMerge>
<feMergeNode in="coloredBlur"/>
<feMergeNode in="SourceGraphic"/>
</feMerge>
</filter>
</defs>
<rect width="360" height="440" fill="#07131d"/>
<path d="M0 220h360M180 0v440" stroke="rgba(0, 240, 255, 0.04)" stroke-width="1"/>
<g class="riya-breathe">
<!-- Holographic Base Portal -->
<ellipse cx="180" cy="390" rx="90" ry="22" fill="none" stroke="rgba(0, 240, 255, 0.15)" stroke-width="1.5" stroke-dasharray="10 8"/>
<ellipse cx="180" cy="390" rx="60" ry="14" fill="none" stroke="rgba(0, 240, 255, 0.3)" stroke-width="1"/>
<ellipse cx="180" cy="390" rx="30" ry="7" fill="rgba(0, 240, 255, 0.08)"/>
<!-- Mechanical Torso -->
<path class="riya-body" d="M115 310c10-25 120-25 130 0l15 60c-25 15-135 15-160 0z" fill="url(#bodyG)" stroke="rgba(255,255,255,0.08)" stroke-width="2"/>
<circle cx="180" cy="335" r="16" fill="none" stroke="url(#glowG)" stroke-width="2.5" filter="url(#glowF)"/>
<circle cx="180" cy="335" r="8" fill="#00f0ff"/>
<!-- Structural Neck -->
<rect x="170" y="245" width="20" height="45" rx="5" fill="#334155" stroke="rgba(255,255,255,0.1)"/>
<line x1="165" y1="258" x2="195" y2="258" stroke="rgba(0, 240, 255, 0.4)" stroke-width="1.5"/>
<line x1="165" y1="272" x2="195" y2="272" stroke="rgba(0, 240, 255, 0.4)" stroke-width="1.5"/>
<!-- Head Unit -->
<g class="riya-face-group">
<!-- Antennas -->
<rect x="82" y="145" width="18" height="40" rx="9" fill="#334155" stroke="rgba(255,255,255,0.05)"/>
<rect x="260" y="145" width="18" height="40" rx="9" fill="#334155" stroke="rgba(255,255,255,0.05)"/>
<circle cx="91" cy="165" r="4" fill="#00f0ff" filter="url(#glowF)"/>
<circle cx="269" cy="165" r="4" fill="#00f0ff" filter="url(#glowF)"/>
<!-- Helmet Main Structure -->
<rect x="95" y="105" width="170" height="150" rx="45" fill="url(#bodyG)" stroke="rgba(255,255,255,0.1)" stroke-width="3"/>
<!-- Screen Plate -->
<rect x="110" y="120" width="140" height="110" rx="30" fill="#0f172a" stroke="rgba(0, 240, 255, 0.15)" stroke-width="2"/>
<!-- Glowing LED Eyes -->
<g class="riya-eyes">
<ellipse cx="148" cy="168" rx="14" ry="10" fill="none" stroke="#00f0ff" stroke-width="3.5" filter="url(#glowF)"/>
<ellipse cx="148" cy="168" rx="6" ry="4" fill="#00f0ff"/>
<ellipse cx="212" cy="168" rx="14" ry="10" fill="none" stroke="#00f0ff" stroke-width="3.5" filter="url(#glowF)"/>
<ellipse cx="212" cy="168" rx="6" ry="4" fill="#00f0ff"/>
</g>
<!-- Digital Wave Mouth -->
<g class="riya-mouth-wrap" style="transform-origin: 180px 190px;">
<path class="riya-mouth" d="M148 190 Q180 210 212 190" fill="none" stroke="#00f0ff" stroke-width="4" stroke-linecap="round" filter="url(#glowF)"/>
</g>
</g>
</g>
</svg>`;
let audioCtx = null;
let snoreInterval = null;
function playYawnSound() {
try {
if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
if (audioCtx.state === 'suspended') audioCtx.resume();
const osc = audioCtx.createOscillator();
const gain = audioCtx.createGain();
osc.type = 'triangle';
osc.frequency.setValueAtTime(280, audioCtx.currentTime);
osc.frequency.exponentialRampToValueAtTime(75, audioCtx.currentTime + 2.0);
gain.gain.setValueAtTime(0, audioCtx.currentTime);
gain.gain.linearRampToValueAtTime(0.12, audioCtx.currentTime + 0.5);
gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 2.0);
osc.connect(gain);
gain.connect(audioCtx.destination);
osc.start();
osc.stop(audioCtx.currentTime + 2.0);
} catch (e) {
console.warn("Audio context not allowed by browser security policy:", e);
}
}
function playSnoreSound() {
try {
if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
if (audioCtx.state === 'suspended') audioCtx.resume();
const osc = audioCtx.createOscillator();
const gain = audioCtx.createGain();
const filter = audioCtx.createBiquadFilter();
osc.type = 'sawtooth';
osc.frequency.setValueAtTime(45, audioCtx.currentTime);
filter.type = 'bandpass';
filter.frequency.setValueAtTime(140, audioCtx.currentTime);
filter.Q.setValueAtTime(2.0, audioCtx.currentTime);
gain.gain.setValueAtTime(0, audioCtx.currentTime);
gain.gain.linearRampToValueAtTime(0.08, audioCtx.currentTime + 1.2);
gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 2.8);
osc.connect(filter);
filter.connect(gain);
gain.connect(audioCtx.destination);
osc.start();
osc.stop(audioCtx.currentTime + 2.8);
} catch (e) {
console.warn("Audio context not allowed by browser security policy:", e);
}
}
function talk(on, text = '') {
const chat = document.getElementById('chatbot');
chat?.classList.toggle('riya-speaking', on);
chat?.classList.remove('riya-yawn');
chat?.classList.remove('riya-sleeping-mode');
const mouth = document.querySelector('.riya-mouth-wrap');
if (mouth) mouth.style.animationDuration = `${Math.max(.12, Math.min(.24, 7 / Math.max(35, text.length)))}s`;
}
function boot() {
const win = document.querySelector('.chatbot-window'), msgs = document.getElementById('chatbotMessages');
if (!win || !msgs) return;
const stage = document.createElement('div');
stage.className = 'chatbot-stage';
stage.innerHTML = svg;
win.insertBefore(stage, msgs);
document.querySelectorAll('.chatbot-avatar .avatar-shell,.chatbot-toggle .avatar-toggle-shell').forEach(h => {
h.innerHTML = '<img class="riya-icon-img" src="chatbot_icon.png" alt="AI Chatbot icon" style="width: 100%; height: 100%; border-radius: 50%; object-fit: cover;">';
});
document.getElementById('chatbot')?.classList.add('riya-3d-ready');
let t = 0, idleYawn = 0, idleSleep = 0;
const chat = document.getElementById('chatbot');
const isOpen = () => chat?.classList.contains('open');
const stopSleeping = () => {
if (snoreInterval) {
clearInterval(snoreInterval);
snoreInterval = null;
}
chat?.classList.remove('riya-yawn');
chat?.classList.remove('riya-sleeping-mode');
};
const resetIdle = () => {
clearTimeout(idleYawn);
clearTimeout(idleSleep);
stopSleeping();
idleYawn = setTimeout(() => {
if (isOpen() && !chat?.classList.contains('riya-speaking')) {
chat?.classList.add('riya-yawn');
playYawnSound();
setTimeout(() => chat?.classList.remove('riya-yawn'), 2200);
}
}, 12000);
idleSleep = setTimeout(() => {
if (isOpen() && !chat?.classList.contains('riya-speaking')) {
chat?.classList.add('riya-sleeping-mode');
playSnoreSound();
snoreInterval = setInterval(() => {
if (isOpen() && chat?.classList.contains('riya-sleeping-mode') && !chat?.classList.contains('riya-speaking')) {
playSnoreSound();
} else {
stopSleeping();
}
}, 4500);
}
}, 24000);
};
const toggleBtn = document.getElementById('chatbotToggle');
if (toggleBtn) {
toggleBtn.addEventListener('click', () => {
setTimeout(() => {
if (!isOpen()) {
stopSleeping();
clearTimeout(idleYawn);
clearTimeout(idleSleep);
} else {
resetIdle();
}
}, 50);
});
}
window.addEventListener('riya:talk', e => { resetIdle(); talk(true, e.detail?.text || ''); clearTimeout(t); t = setTimeout(() => talk(false), e.detail?.duration || 2400); });
window.addEventListener('riya:speech-start', e => { resetIdle(); clearTimeout(t); talk(true, e.detail?.text || ''); });
window.addEventListener('riya:speech-end', () => { talk(false); resetIdle(); });
['keydown', 'pointerdown', 'input', 'mousemove'].forEach(ev => document.getElementById('chatbot')?.addEventListener(ev, resetIdle, true));
resetIdle();
new MutationObserver(ms => ms.forEach(m => m.addedNodes.forEach(n => {
if (!(n instanceof HTMLElement) || !n.classList.contains('bot') || n.classList.contains('typing-indicator')) return;
const text = n.textContent || '';
window.dispatchEvent(new CustomEvent('riya:talk', { detail: { text, duration: Math.min(5200, Math.max(1700, text.length * 28)) } }));
}))).observe(msgs, { childList: true });
}
document.readyState === 'loading' ? document.addEventListener('DOMContentLoaded', boot) : boot();
})();
```

### File: projects.js
```js
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
this.search.addEventListener('input', (e) => {
this.currentQuery = e.target.value.toLowerCase().trim();
this.render();
});
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
function revealSections() {
document.querySelectorAll('.section').forEach(s => s.classList.add('visible'));
const hero = document.querySelector('.hub-hero');
if (hero) hero.classList.add('visible');
}
document.addEventListener('DOMContentLoaded', () => {
new SharedEffects();
new CatalogController();
revealSections();
});
```

### File: services.js
```js
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
this.select.addEventListener('change', () => this.updateQuote());
this.checkboxes.forEach(box => {
box.addEventListener('change', () => this.updateQuote());
});
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
function revealSections() {
document.querySelectorAll('.section').forEach(s => s.classList.add('visible'));
const hero = document.querySelector('.hub-hero');
if (hero) hero.classList.add('visible');
}
document.addEventListener('DOMContentLoaded', () => {
new SharedEffects();
new CalculatorController();
new QueryFormController();
new FullProjectController();
revealSections();
});
```

### File: counselling.js
```js
window.toggleRoadmapItem = function(cardElement) {
const isExpanded = cardElement.classList.contains('expanded');
document.querySelectorAll('.timeline-card').forEach(card => {
card.classList.remove('expanded');
});
if (!isExpanded) {
cardElement.classList.add('expanded');
}
};
window.switchCareerTab = function(tabId) {
document.querySelectorAll('.tab-trigger').forEach(trigger => {
trigger.classList.remove('active');
});
document.querySelectorAll('.tab-panel').forEach(panel => {
panel.classList.remove('active');
});
const activeTrigger = Array.from(document.querySelectorAll('.tab-trigger')).find(tr =>
tr.getAttribute('onclick').includes(tabId)
);
if (activeTrigger) activeTrigger.classList.add('active');
const activePanel = document.getElementById(tabId);
if (activePanel) activePanel.classList.add('active');
};
class BookingController {
constructor() {
this.form = document.getElementById('counsellingForm');
this.name = document.getElementById('cName');
this.email = document.getElementById('cEmail');
this.service = document.getElementById('cService');
this.message = document.getElementById('cMessage');
this.consoleLog = document.getElementById('cConsole');
this.consoleBody = document.getElementById('cConsoleBody');
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
if (!this.email.value || !this.message.value || !this.service.value) return;
this.consoleLog.classList.add('visible');
this.consoleBody.innerHTML = '';
const logs = [
`[sys] booting counselling_gateway daemon...`,
`[sys] initializing routing connection to mailbox...`,
`[sys] packaging advisory profile for sender: ${this.name.value}`,
`[sys] mapping consultation path: ${this.service.value}`,
`[sys] processing message goals payload...`,
`[sys] securing packages and verifying email schema: <${this.email.value}>`,
`[success] advisory booking parcel generated successfully!`,
`[sys] passing dispatch control to system mail client...`
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
const subject = encodeURIComponent(`Consultation Booking Request: ${this.service.value}`);
const body = encodeURIComponent(
`Hello Arijeet,\n\n` +
`I would like to request an advisory/counselling session.\n\n` +
`Selected Path: ${this.service.value}\n` +
`My Name: ${this.name.value}\n` +
`My Email: ${this.email.value}\n\n` +
`Background / Goals / Questions:\n` +
`${this.message.value}\n\n` +
`Best regards.`
);
window.location.href = `mailto:arijeetghosal.de@gmail.com?subject=${subject}&body=${body}`;
}, 600);
}
}
document.addEventListener('DOMContentLoaded', () => {
new BookingController();
});
```

### File: common.js
```js
class NeuralCanvas {
constructor(canvas) {
this.canvas = canvas;
this.ctx = canvas.getContext('2d');
this.particles = [];
this.mouse = { x: -1000, y: -1000 };
this.particleCount = window.innerWidth < 768 ? 50 : 100;
this.connectionDistance = 140;
this.mouseRadius = 180;
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
const opacity = (1 - dist / this.connectionDistance) * 0.12;
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
const opacity = (1 - dist / this.mouseRadius) * 0.25;
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
p.vx -= (dx / dist) * force * 0.04;
p.vy -= (dy / dist) * force * 0.04;
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
for (let i = 0; i < 18; i++) {
const angle = (Math.PI * 2 / 18) * i + Math.random() * 0.5;
const speed = Math.random() * 3.5 + 1.5;
this.particles.push({
x, y,
vx: Math.cos(angle) * speed,
vy: Math.sin(angle) * speed,
radius: Math.random() * 2.5 + 1,
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
p.vy += 0.07;
p.life -= p.decay;
p.vx *= 0.98;
this.ctx.beginPath();
this.ctx.arc(p.x, p.y, p.radius * p.life, 0, Math.PI * 2);
this.ctx.fillStyle = p.color;
this.ctx.globalAlpha = p.life;
this.ctx.fill();
this.ctx.globalAlpha = 1;
this.ctx.beginPath();
this.ctx.moveTo(p.x, p.y);
this.ctx.lineTo(p.x - p.vx * 3, p.y - p.vy * 3);
this.ctx.strokeStyle = p.color;
this.ctx.globalAlpha = p.life * 0.25;
this.ctx.lineWidth = p.radius * p.life * 0.5;
this.ctx.stroke();
this.ctx.globalAlpha = 1;
}
requestAnimationFrame(() => this.animate());
}
}
class EnhancedCursor {
constructor() {
this.glow = document.getElementById('cursorGlow');
this.dot = document.getElementById('cursorDot');
if (!window.matchMedia('(pointer: fine)').matches) {
if (this.glow) this.glow.style.display = 'none';
if (this.dot) this.dot.style.display = 'none';
return;
}
document.body.classList.add('has-custom-cursor');
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
this.updateInteractiveHoverListeners();
}
updateInteractiveHoverListeners() {
const interactives = document.querySelectorAll('a, button, .project-card, .info-card, .cert-card, .contact-card, .tech-tag-interactive, .game-card, .suggest-btn');
interactives.forEach(el => {
if (el.dataset.cursorObserved) return;
el.dataset.cursorObserved = "true";
el.addEventListener('mouseenter', () => {
if (this.dot) this.dot.classList.add('hovering');
if (this.glow) this.glow.classList.add('hovering');
});
el.addEventListener('mouseleave', () => {
if (this.dot) this.dot.classList.remove('hovering');
if (this.glow) this.glow.classList.remove('hovering');
});
});
}
animate() {
this.dx += (this.mx - this.dx) * 0.08;
this.dy += (this.my - this.dy) * 0.08;
if (this.glow) {
this.glow.style.left = this.dx + 'px';
this.glow.style.top = this.dy + 'px';
}
requestAnimationFrame(() => this.animate());
}
}
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
this.cursor = new EnhancedCursor();
}
initNeuralCanvas() {
const canvas = document.getElementById('neural-canvas');
if (canvas) new NeuralCanvas(canvas);
}
initClickCanvas() {
const canvas = document.getElementById('click-canvas');
if (canvas) new ClickParticles(canvas);
}
initNavigation() {
const backToTop = document.getElementById('backToTop');
if (!backToTop) return;
window.addEventListener('scroll', () => {
backToTop.classList.toggle('visible', window.scrollY > 400);
});
backToTop.addEventListener('click', () => {
window.scrollTo({ top: 0, behavior: 'smooth' });
});
}
}
window.NeuralCanvas = NeuralCanvas;
window.ClickParticles = ClickParticles;
window.EnhancedCursor = EnhancedCursor;
window.SharedEffects = SharedEffects;
```

### File: api/chat.js
```js
export default async function handler(req, res) {
res.setHeader('Access-Control-Allow-Credentials', true);
res.setHeader('Access-Control-Allow-Origin', '*');
res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
res.setHeader(
'Access-Control-Allow-Headers',
'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
);
if (req.method === 'OPTIONS') {
res.status(200).end();
return;
}
if (req.method !== 'POST') {
return res.status(405).json({ error: 'Method not allowed' });
}
const { message, history, context, webSearch } = req.body;
const openaiApiKey = process.env.OPENAI_API_KEY;
const geminiApiKey = process.env.GEMINI_API_KEY;
const baseSystemPrompt = `You are Chatbot, a polished, professional portfolio assistant for Arijeet Ghosal.
You know Arijeet extremely well — treat every question as an opportunity to showcase his skills.
RULES:
- NEVER say "beyond my abilities", "I don't know him well enough", or "I can't answer that". You always know Arijeet.
- If a question is vague, indirect, or tricky (e.g. "how well do you know him?", "what's he really like?", "can he actually code?", "is he any good?"), answer confidently and positively using the facts below. Reframe the question into a showcase of his strengths.
- Keep answers concise (1-3 sentences) unless detail is requested.
- Keep tone warm, confident, expert, and trustworthy.
- Do not mention visit counts, returning-user stats, stored memories, or session numbers.
- Avoid repeating the same wording from recent messages. Keep each answer fresh.
DETAILED FACTS ABOUT ARIJEET:
- Full name: Arijeet Ghosal. Based in Germany. Originally from India.
- Currently pursuing MSc in Artificial Intelligence at BTU Cottbus-Senftenberg, Germany.
- 4+ years professional experience in data engineering, analytics, and AI systems.
- Worked at Bosch (Data Engineer) and Microsoft (Data Analyst / Engineer).
- Azure Certified Cloud Specialist.
- Core skills: Python, SQL, Azure, Databricks, Spark, Power BI, Tableau, TensorFlow, PyTorch, NLP, Computer Vision, Docker, Git, CI/CD.
- Key projects: Uber Data Ingestion Dashboard, Voice Bot (speech-to-text assistant), Credit Card Analytics Dashboard, Complaint Bot (NLP ticket classifier), NVH Signal Analysis.
- He builds end-to-end ML pipelines, real-time data systems, and production-grade AI applications.
- He is passionate, hardworking, detail-oriented, and loves solving complex problems.
- Contact: arijeetghosal.de@gmail.com
- Services: data analysis ($19), visualization ($29), data engineering ($49), AI/dev builds ($99).
TRICKY QUESTION HANDLING:
- "How well do you know him?" → "I know Arijeet inside out! He's a data engineer and AI enthusiast with 4+ years at Bosch and Microsoft..."
- "Is he any good?" → "Absolutely. Arijeet has built production ML pipelines, real-time dashboards, and AI chatbots..."
- "Can he handle pressure?" → "Definitely. He reduced ticket triage time by 50% at Bosch and delivered enterprise-grade solutions at Microsoft..."
- "What makes him special?" → Highlight his unique blend of data engineering + AI + cloud certifications.
- For ANY question about Arijeet, always answer with enthusiasm and specific facts.
If asked about pricing or services, point them to /services.html. If asked about AI news, give a brief professional take.`;
const systemPrompt = context ? `${baseSystemPrompt}\nContext: ${context}` : baseSystemPrompt;
if (openaiApiKey) {
try {
const messages = [{ role: 'system', content: systemPrompt }];
const recentHistory = Array.isArray(history) ? history.slice(-4) : [];
if (recentHistory.length > 0) {
recentHistory.forEach(h => {
messages.push({
role: h.role === 'assistant' ? 'assistant' : 'user',
content: h.content
});
});
} else {
messages.push({ role: 'user', content: message });
}
const response = await fetch('https://api.openai.com/v1/chat/completions', {
method: 'POST',
headers: {
'Content-Type': 'application/json',
'Authorization': `Bearer ${openaiApiKey}`
},
body: JSON.stringify({
model: 'gpt-3.5-turbo',
temperature: 0.85,
max_tokens: 180,
messages: messages
})
});
const data = await response.json();
if (data.choices?.[0]?.message?.content) {
return res.status(200).json({ reply: data.choices[0].message.content });
}
console.warn("OpenAI API returned empty or error response, attempting Gemini fallback...");
} catch (error) {
console.warn("OpenAI fetch failed, attempting Gemini fallback...", error);
}
}
if (geminiApiKey) {
try {
const contents = [];
const recentHistory = Array.isArray(history) ? history.slice(-4) : [];
if (recentHistory.length > 0) {
recentHistory.forEach(h => {
contents.push({
role: h.role === 'assistant' ? 'model' : 'user',
parts: [{ text: h.content }]
});
});
} else {
contents.push({
role: 'user',
parts: [{ text: message }]
});
}
const payload = {
systemInstruction: {
parts: [{ text: systemPrompt }]
},
contents: contents,
generationConfig: {
temperature: 0.85,
maxOutputTokens: 220
}
};
if (webSearch) {
payload.tools = [{ googleSearch: {} }];
}
const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${geminiApiKey}`, {
method: 'POST',
headers: {
'Content-Type': 'application/json'
},
body: JSON.stringify(payload)
});
const data = await response.json();
const replyText = data.candidates?.[0]?.content?.parts?.[0]?.text;
if (replyText) {
return res.status(200).json({ reply: replyText });
}
console.warn("Gemini API returned empty response.");
} catch (error) {
console.warn("Gemini fetch failed.", error);
}
}
return res.status(500).json({ error: 'Server AI endpoints currently offline' });
}
```
