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