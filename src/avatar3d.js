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
      osc.frequency.setValueAtTime(45, audioCtx.currentTime); // Deep engine hum

      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(140, audioCtx.currentTime);
      filter.Q.setValueAtTime(2.0, audioCtx.currentTime);

      gain.gain.setValueAtTime(0, audioCtx.currentTime);
      gain.gain.linearRampToValueAtTime(0.08, audioCtx.currentTime + 1.2); // inhale
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 2.8); // exhale

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

      // Stage 1: Yawn after 12 seconds (only if open)
      idleYawn = setTimeout(() => {
        if (isOpen() && !chat?.classList.contains('riya-speaking')) {
          chat?.classList.add('riya-yawn');
          playYawnSound();
          setTimeout(() => chat?.classList.remove('riya-yawn'), 2200);
        }
      }, 12000);

      // Stage 2: Deep sleep after 24 seconds (only if open)
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

    // Stop all sounds when chatbot is closed/minimized
    const toggleBtn = document.getElementById('chatbotToggle');
    if (toggleBtn) {
      toggleBtn.addEventListener('click', () => {
        // If closing, stop everything
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

    // Wake up on keydown, click, or user input interaction
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

