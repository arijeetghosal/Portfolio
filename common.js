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