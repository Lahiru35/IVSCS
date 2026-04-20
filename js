/**
 * IVSCS — Main Entry Point
 * Initialises the system, starts the animation loop, and wires up shared globals.
 */

/* Globals used across modules */
let events    = 0;
let startTime = Date.now();
let frameCount = 0;

/* ── Clock ──────────────────────────────────────────────────────── */
function updateClock() {
  const n = new Date();
  document.getElementById('clock').textContent =
    String(n.getHours()).padStart(2, '0')   + ':' +
    String(n.getMinutes()).padStart(2, '0') + ':' +
    String(n.getSeconds()).padStart(2, '0');
}

/* ── Natural Sensor Noise (Normal scenario only) ────────────────── */
function addNoise() {
  if (scenario !== 'normal') return;
  state.grip      = Math.min(0.99, Math.max(0.75, state.grip + (Math.random() - 0.5) * 0.03));
  state.vib       = Math.max(8,    Math.min(20,   state.vib  + (Math.random() - 0.5) * 4));
  state.frontDist = Math.max(30,   Math.min(60,   state.frontDist + (Math.random() - 0.5) * 3));
  state.risk      = Math.max(1,    Math.min(8,    state.risk + (Math.random() - 0.5) * 2));
  state.speed     = Math.max(68,   Math.min(76,   state.speed + (Math.random() - 0.5) * 1));
}

/* ── Animation Loop ─────────────────────────────────────────────── */
function loop() {
  drawRadar();          // radar.js
  frameCount++;

  /* Update UI ~15 fps (every 4 frames at ~60 fps) */
  if (frameCount % 4 === 0) {
    addNoise();
    updateUI();         // ui.js
    updateClock();
  }

  requestAnimationFrame(loop);
}

/* ── Boot ───────────────────────────────────────────────────────── */
setScenario('normal'); // scenarios.js — set initial state and log boot messages
loop();

/**
 * IVSCS — Scenario Controller
 * Defines the four simulation scenarios and their timed sequences.
 */

let scenario      = 'normal'; // current active scenario
let scenarioTimer = null;     // handle for pending setTimeout chains

/**
 * Activate a named scenario.
 * @param {string} s - 'normal' | 'slip' | 'object' | 'rear'
 */
function setScenario(s) {
  /* Highlight the correct button */
  document.querySelectorAll('.scen-btn').forEach(b => b.classList.remove('active'));
  document.getElementById('scen-' + s).classList.add('active');

  /* Cancel any in-progress scenario sequence */
  if (scenarioTimer) {
    clearTimeout(scenarioTimer);
    scenarioTimer = null;
  }

  scenario = s;

  switch (s) {
    case 'normal':  runNormal(); break;
    case 'slip':    runSlip();   break;
    case 'object':  runObject(); break;
    case 'rear':    runRear();   break;
  }
}

/* ── Scenario: Normal ─────────────────────────────────────────────── */
function runNormal() {
  Object.assign(state, {
    grip: 0.87, vib: 12, frontDist: 48, rearSpeed: 0,
    objDetected: false, risk: 2, speed: 72,
    torque: 100, brakePressure: 0,
    brakeActive: false, antiskidActive: false,
    ecuActive: false, balloonDeployed: false,
    roadState: 'DRY',
  });
  log('Scenario NORMAL — all clear', 'safe');
}

/* ── Scenario: Slippery Road ──────────────────────────────────────── */
function runSlip() {
  Object.assign(state, {
    grip: 0.18, vib: 38, roadState: 'ICY', risk: 55,
    antiskidActive: true, ecuActive: true,
    torque: 55, brakePressure: 2.4,
  });
  log('⚠ Slippery road detected — grip 0.18μ', 'warn');
  log('AI: Activating anti-skid control',       'cmd');
  log('AI: Reducing engine torque → 55%',        'cmd');
  events++;

  scenarioTimer = setTimeout(() => {
    log('Grip stabilizing… recovery in progress', 'safe');
    state.risk = 35;
  }, 3000);
}

/* ── Scenario: Object Detected ────────────────────────────────────── */
function runObject() {
  Object.assign(state, {
    frontDist: 12, objDetected: true, risk: 75, speed: 42,
    brakeActive: true, ecuActive: true,
    torque: 30, brakePressure: 7.8,
  });
  log('🚨 Object detected — 12 m distance!',       'err');
  log('AI: Emergency brake pre-charge initiated',  'cmd');
  log('AI: Engine torque reduced → 30%',           'cmd');
  log('AI: Smart braking ENGAGED',                 'cmd');
  events++;

  /* Phase 2: deceleration */
  scenarioTimer = setTimeout(() => {
    state.frontDist = 28;
    state.speed     = 18;
    log('Vehicle decelerating — 18 km/h', 'warn');

    /* Phase 3: safe stop */
    scenarioTimer = setTimeout(() => {
      Object.assign(state, {
        speed: 0, frontDist: 3.5, risk: 8,
        brakeActive: false, objDetected: false,
      });
      log('✓ SAFE STOP achieved — 3.5 m clearance', 'safe');
      events++;
    }, 3000);
  }, 2000);
}

/* ── Scenario: Rear Collision ─────────────────────────────────────── */
function runRear() {
  Object.assign(state, {
    rearSpeed: 118, risk: 95, balloonDeployed: true,
  });
  log('🚨 CRITICAL: Rear collision imminent!',        'err');
  log('AI: Rear approach speed 118 km/h',             'err');
  log('AI: DEPLOYING exterior safety balloon!',       'cmd');
  log('AI: Preparing impact mitigation protocol',     'cmd');
  events++;

  /* Phase 2: impact cushioned */
  scenarioTimer = setTimeout(() => {
    log('Balloon DEPLOYED — impact cushioned', 'warn');

    /* Phase 3: threat neutralized */
    scenarioTimer = setTimeout(() => {
      state.rearSpeed = 0;
      state.risk      = 30;
      log('Rear threat neutralized — monitoring', 'safe');
    }, 2500);
  }, 1500);
}

/**
 * IVSCS — UI Update Module
 * Reads from the global `state` object and updates all DOM elements.
 * Called every ~250 ms from the main animation loop.
 */

/** Update the entire dashboard from current state. */
function updateUI() {
  updateSensors();
  updateRisk();
  updateActions();
  updateWorkflow();
  updateBottomBar();
  updateStatusBadge();
}

/* ── Sensors ──────────────────────────────────────────────────────── */
function updateSensors() {
  /* Grip */
  const gPct = Math.round(state.grip * 100);
  document.getElementById('v-grip').innerHTML = state.grip.toFixed(2) + ' <span>μ</span>';
  setBar('b-grip', gPct, 60, 30);
  document.getElementById('s-grip').className = 'sensor-item' + severityClass(gPct, 60, 30, true);

  /* Vibration */
  const vPct = Math.min(100, Math.round(state.vib * 2));
  document.getElementById('v-vib').innerHTML = Math.round(state.vib) + ' <span>Hz</span>';
  setBar('b-vib', vPct, 30, 60);
  document.getElementById('s-vib').className = 'sensor-item' + severityClass(vPct, 30, 60, false);

  /* Front distance */
  const fPct = Math.min(100, Math.round((state.frontDist / 60) * 100));
  document.getElementById('v-front').innerHTML = Math.round(state.frontDist) + ' <span>m</span>';
  setBar('b-front', fPct, 40, 20);
  document.getElementById('s-front').className = 'sensor-item' + severityClass(fPct, 40, 20, true);

  /* Rear speed */
  const rPct = Math.min(100, Math.round((state.rearSpeed / 150) * 100));
  document.getElementById('v-rear').innerHTML = Math.round(state.rearSpeed) + ' <span>km/h</span>';
  setBar('b-rear', rPct, 30, 60);
  document.getElementById('s-rear').className = 'sensor-item' + severityClass(rPct, 30, 60, false);

  /* Object detection */
  const objEl = document.getElementById('v-obj');
  objEl.textContent = state.objDetected ? '⚠ DETECTED' : 'CLEAR';
  objEl.style.color = state.objDetected ? '#ffd600' : '#39ff14';
  document.getElementById('s-obj').className = 'sensor-item' + (state.objDetected ? ' warning' : '');
}

/**
 * Set a sensor bar width and colour.
 * @param {string}  id       - element id
 * @param {number}  pct      - 0–100
 * @param {number}  warnAt   - warning threshold
 * @param {number}  dangerAt - danger threshold
 */
function setBar(id, pct, warnAt, dangerAt) {
  const el = document.getElementById(id);
  el.style.width = pct + '%';
  if (dangerAt > warnAt) {
    // Higher = worse (vibration, rear speed)
    el.style.background = pct > dangerAt ? '#ff1744' : pct > warnAt ? '#ffd600' : '#39ff14';
  } else {
    // Lower = worse (grip, front distance)
    el.style.background = pct < dangerAt ? '#ff1744' : pct < warnAt ? '#ffd600' : '#39ff14';
  }
}

/**
 * Return a CSS class suffix based on value severity.
 * @param {number}  val
 * @param {number}  warnThresh
 * @param {number}  dangerThresh
 * @param {boolean} lowerIsBad  - true when lower values are worse
 */
function severityClass(val, warnThresh, dangerThresh, lowerIsBad) {
  if (lowerIsBad) {
    if (val < dangerThresh) return ' danger';
    if (val < warnThresh)   return ' warning';
  } else {
    if (val > dangerThresh) return ' danger';
    if (val > warnThresh)   return ' warning';
  }
  return '';
}

/* ── Risk Ring ──────────────────────────────────────────────────── */
function updateRisk() {
  const arc   = document.getElementById('risk-arc');
  const valEl = document.getElementById('risk-val');
  const offset = 264 - (state.risk / 100) * 264;
  const color  = state.risk > 70 ? '#ff1744' : state.risk > 40 ? '#ffd600' : '#39ff14';

  arc.setAttribute('stroke-dashoffset', offset);
  arc.setAttribute('stroke', color);

  valEl.textContent   = Math.round(state.risk) + '%';
  valEl.style.color   = color;

  document.getElementById('speed-val').textContent = Math.round(state.speed);
}

/* ── Status Badge ───────────────────────────────────────────────── */
function updateStatusBadge() {
  const badge = document.getElementById('status-badge');
  const text  = document.getElementById('status-text');

  if (state.risk > 70) {
    badge.className  = 'status-badge danger';
    text.textContent = 'CRITICAL — INTERVENTION ACTIVE';
  } else if (state.risk > 40) {
    badge.className  = 'status-badge warning';
    text.textContent = 'WARNING — MONITORING ELEVATED';
  } else {
    badge.className  = 'status-badge active';
    text.textContent = 'ALL SYSTEMS NOMINAL';
  }
}

/* ── Action Buttons ─────────────────────────────────────────────── */
function updateActions() {
  setAction('act-ecu',      state.ecuActive,        'REDUCING',  'NOMINAL',  '#ff6b35');
  setAction('act-brake',    state.brakeActive,       'ENGAGED',   'STANDBY',  '#ff6b35');
  setAction('act-antiskid', state.antiskidActive,    'ACTIVE',    'IDLE',     '#ffd600');

  const balloonBtn = document.getElementById('act-balloon');
  const balloonSt  = document.getElementById('act-balloon-s');
  balloonBtn.className     = 'action-btn' + (state.balloonDeployed ? ' fired' : '');
  balloonSt.textContent    = state.balloonDeployed ? 'DEPLOYED!' : state.balloonArmed ? 'ARMED' : 'SAFE';
  balloonSt.style.color    = state.balloonDeployed ? '#ff1744' : '#6a8faf';

  /* Balloon graphic in radar */
  document.getElementById('balloon').classList.toggle('show', state.balloonDeployed);
}

function setAction(btnId, isActive, activeLabel, idleLabel, activeColor) {
  document.getElementById(btnId).className       = 'action-btn' + (isActive ? ' active' : '');
  document.getElementById(btnId + '-s').textContent = isActive ? activeLabel : idleLabel;
  document.getElementById(btnId + '-s').style.color = isActive ? activeColor  : '#6a8faf';
}

/* ── Workflow Steps ─────────────────────────────────────────────── */
function updateWorkflow() {
  const steps = ['wf1', 'wf2', 'wf3', 'wf4', 'wf5'];
  steps.forEach((id, i) => {
    const el = document.getElementById(id);
    if (state.risk > 70 && i >= 2) {
      el.style.borderColor = '#ff1744';
      el.style.background  = 'rgba(255,23,68,0.12)';
      el.style.color       = '#ff6b6b';
    } else if (state.risk > 40 && i >= 1) {
      el.style.borderColor = '#ffd600';
      el.style.background  = 'rgba(255,214,0,0.08)';
      el.style.color       = '#ffd600';
    } else {
      el.style.borderColor = 'rgba(0,229,255,0.15)';
      el.style.background  = '#0a1f3d';
      el.style.color       = '#c8e6f7';
    }
  });
}

/* ── Bottom Bar ─────────────────────────────────────────────────── */
function updateBottomBar() {
  document.getElementById('s-react').textContent  = state.brakeActive ? '8' : '18';
  document.getElementById('s-torque').textContent = Math.round(state.torque);
  document.getElementById('s-bpress').textContent = state.brakePressure.toFixed(1);
  document.getElementById('s-events').textContent = events;

  const roadEl = document.getElementById('s-road');
  roadEl.textContent  = state.roadState;
  roadEl.style.color  = state.roadState === 'ICY' ? '#00e5ff'
                      : state.roadState === 'WET' ? '#64b5f6'
                      : '#39ff14';
}

/* ── AI Log ─────────────────────────────────────────────────────── */
/**
 * Append a message to the AI decision log.
 * @param {string} msg   - log message
 * @param {string} type  - CSS class: 'safe' | 'warn' | 'err' | 'cmd' | ''
 */
function log(msg, type = '') {
  const el      = document.getElementById('ai-log');
  const elapsed = String(Math.floor((Date.now() - startTime) / 1000)).padStart(5, '0');
  const div     = document.createElement('div');
  div.innerHTML = `<span class="ts">[${elapsed}s]</span><span class="${type}">${msg}</span>`;
  div.style.animation = 'slide-in 0.3s ease';
  el.appendChild(div);
  el.scrollTop = el.scrollHeight;
  while (el.children.length > 20) el.removeChild(el.firstChild);
}

/**
 * IVSCS — Radar Canvas Renderer
 * Draws the rotating radar sweep, grid rings, vehicle marker, and scenario blips.
 */

const canvas = document.getElementById('radar-canvas');
const ctx    = canvas.getContext('2d');
const W = 260, H = 260, cx = 130, cy = 130;

let radarAngle = 0;
let blips = [];

/**
 * Add a temporary blip to the radar at (x, y).
 * @param {number} x
 * @param {number} y
 * @param {string} color  - CSS rgba string
 * @param {number} size   - radius in px
 */
function addBlip(x, y, color, size) {
  blips.push({ x, y, color, size, age: 0, maxAge: 80 });
}

/**
 * Draw one radar frame onto the canvas.
 * Called every animation frame from main.js.
 */
function drawRadar() {
  ctx.clearRect(0, 0, W, H);

  /* Background */
  ctx.fillStyle = '#040d1a';
  ctx.fillRect(0, 0, W, H);

  /* Range rings */
  for (let r = 30; r <= 120; r += 30) {
    ctx.beginPath();
    ctx.arc(cx, cy, r, 0, Math.PI * 2);
    ctx.strokeStyle = 'rgba(0,229,255,0.08)';
    ctx.lineWidth   = 0.5;
    ctx.stroke();
  }

  /* Cross-hair */
  ctx.strokeStyle = 'rgba(0,229,255,0.08)';
  ctx.lineWidth   = 0.5;
  ctx.beginPath(); ctx.moveTo(cx - 120, cy); ctx.lineTo(cx + 120, cy); ctx.stroke();
  ctx.beginPath(); ctx.moveTo(cx, cy - 120); ctx.lineTo(cx, cy + 120); ctx.stroke();

  /* Sweep gradient fan */
  ctx.save();
  ctx.translate(cx, cy);
  ctx.rotate(radarAngle);
  const g = ctx.createLinearGradient(0, 0, 120, 0);
  g.addColorStop(0, 'rgba(0,229,255,0.35)');
  g.addColorStop(1, 'rgba(0,229,255,0)');
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.arc(0, 0, 120, -0.3, 0);
  ctx.closePath();
  ctx.fillStyle = g;
  ctx.fill();
  ctx.restore();

  /* Ego vehicle (center marker) */
  ctx.save();
  ctx.translate(cx, cy);
  ctx.fillStyle = 'rgba(0,229,255,0.9)';
  ctx.beginPath();
  ctx.roundRect(-8, -14, 16, 28, 3);
  ctx.fill();
  ctx.restore();

  /* Decay blips */
  blips.forEach(b => {
    const alpha = 1 - b.age / b.maxAge;
    ctx.beginPath();
    ctx.arc(b.x, b.y, b.size, 0, Math.PI * 2);
    ctx.fillStyle = b.color.replace('1)', alpha + ')');
    ctx.fill();
    b.age++;
  });
  blips = blips.filter(b => b.age < b.maxAge);

  /* Scenario-specific overlays */
  if (typeof scenario !== 'undefined') {
    if (scenario === 'object') {
      /* Pedestrian blip (front) */
      ctx.beginPath();
      ctx.arc(cx, cy - 65, 8, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(255,214,0,0.9)';
      ctx.fill();
      ctx.fillStyle = 'rgba(255,214,0,0.2)';
      ctx.beginPath();
      ctx.arc(cx, cy - 65, 14, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = 'rgba(0,229,255,0.7)';
      ctx.font       = '9px Share Tech Mono';
      ctx.textAlign  = 'center';
      ctx.fillText('PEDESTRIAN', cx, cy - 80);
    }

    if (scenario === 'rear') {
      /* Incoming vehicle blip (rear) */
      ctx.beginPath();
      ctx.arc(cx, cy + 80, 10, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(255,23,68,0.9)';
      ctx.fill();
      ctx.fillStyle = 'rgba(255,23,68,0.2)';
      ctx.beginPath();
      ctx.arc(cx, cy + 80, 18, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = 'rgba(255,23,68,0.7)';
      ctx.font       = '9px Share Tech Mono';
      ctx.textAlign  = 'center';
      ctx.fillText('INCOMING', cx, cy + 100);
    }
  }

  radarAngle += 0.04;
}

/**
 * IVSCS — State Management
 * Central vehicle state object shared across all modules.
 */

const state = {
  grip:            0.87,   // Road grip coefficient (μ)
  vib:             12,     // Road vibration (Hz)
  frontDist:       48,     // Front obstacle distance (m)
  rearSpeed:       0,      // Rear approaching vehicle speed (km/h)
  objDetected:     false,  // Front object detection flag
  risk:            2,      // Collision risk percentage (0–100)
  speed:           72,     // Vehicle speed (km/h)
  torque:          100,    // Engine torque percentage (0–100)
  brakePressure:   0,      // Brake hydraulic pressure (bar)
  brakeActive:     false,  // Smart braking engaged flag
  antiskidActive:  false,  // Anti-skid control active flag
  ecuActive:       false,  // ECU torque reduction active flag
  balloonArmed:    true,   // Rear safety balloon armed flag
  balloonDeployed: false,  // Rear safety balloon deployed flag
  roadState:       'DRY',  // Road condition label: DRY | WET | ICY
};
