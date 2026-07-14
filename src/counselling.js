/* ═══════════════════════════════════════════════════════════════
   ARIJEET GHOSAL — ADMISSIONS & CAREER COUNSELLING
   Interactive Roadmap Accordion, Tab Controllers, and Terminal logs.
   ═══════════════════════════════════════════════════════════════ */

// ── Interactive Roadmap Accordion ──────────────────────────────
window.toggleRoadmapItem = function(cardElement) {
    const isExpanded = cardElement.classList.contains('expanded');
    
    // Close other expanded cards (optional, but clean)
    document.querySelectorAll('.timeline-card').forEach(card => {
        card.classList.remove('expanded');
    });

    // Toggle current
    if (!isExpanded) {
        cardElement.classList.add('expanded');
    }
};

// ── Interactive Tab Switcher ────────────────────────────────────
window.switchCareerTab = function(tabId) {
    // Deactivate all triggers
    document.querySelectorAll('.tab-trigger').forEach(trigger => {
        trigger.classList.remove('active');
    });

    // Deactivate all panels
    document.querySelectorAll('.tab-panel').forEach(panel => {
        panel.classList.remove('active');
    });

    // Activate current trigger
    const activeTrigger = Array.from(document.querySelectorAll('.tab-trigger')).find(tr => 
        tr.getAttribute('onclick').includes(tabId)
    );
    if (activeTrigger) activeTrigger.classList.add('active');

    // Activate current panel
    const activePanel = document.getElementById(tabId);
    if (activePanel) activePanel.classList.add('active');
};

// ── Booking Form Controller ─────────────────────────────────────
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

        // Show console
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

        // Open Mailto link
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

// Instantiate on load
document.addEventListener('DOMContentLoaded', () => {
    new BookingController();
});
