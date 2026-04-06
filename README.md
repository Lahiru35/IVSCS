![piezo_embedded_tyre_crosssection](https://github.com/user-attachments/assets/c65349b9-ddca-4bd5-b8f8-6dca699295ed)

# IVSCS — Intelligent Vehicle Safety & Control System

> A real-time AI-powered vehicle safety system that combines smart tyre sensing, computer vision, and automated safety responses to protect drivers, passengers, and pedestrians.

---

## 🔍 Overview

IVSCS is an intelligent, multi-layered vehicle safety platform designed to detect road hazards, identify obstacles, assess collision risk, and trigger protective actions — all in real time and controlled by a single AI brain.

The system was conceived around a core idea: **what if a vehicle could sense the road the same way a human feels it through their feet?** By embedding piezoelectric sensors directly inside tyre rubber during manufacturing (similar to rebar in concrete), the tyres themselves become intelligent sensors — detecting road texture, moisture, slipperiness, mud, sand, and ice before the driver even notices.

---

## 🧠 How It Works

The system operates across four synchronized layers:

### Layer 1 — Sensing
| Sensor | Purpose |
|--------|---------|
| **Smart Tyre (Piezoelectric)** | Detects road surface type: dry, wet, mud, sand, ice |
| **Front Camera (USB/IP)** | AI object detection — pedestrians, vehicles, obstacles |
| **Rear Camera** | Detects approaching vehicles and calculates impact speed |
| **Ultrasonic Sensor** | Measures precise distance to front obstacles |

### Layer 2 — AI Processing (Python)
- **Road Surface Classifier** — Machine learning model classifies road condition from tyre vibration and pressure patterns
- **Vision AI** — YOLOv8 + OpenCV detects and identifies objects, estimates distance
- **Risk Engine** — Calculates real-time collision probability score (0–100%)
- **Decision Logic** — Issues control commands based on fused sensor data

### Layer 3 — Action
- **ECU Control** — Reduces engine torque on slippery surfaces before the driver reacts
- **Smart Braking** — Applies grip-adjusted brake pressure (advanced ABS)
- **External Airbag (Rear)** — Deploys an external airbag/cushion at the rear when a rear-end collision is imminent, with pressure-safe inflation control to prevent bursting
- **Rear Vehicle Alert** — Warns the trailing vehicle via lights and signals

### Layer 4 — Workflow Logic

---

## 💡 Key Innovation — Embedded Piezoelectric Smart Tyre

The most novel component of this system is the **piezoelectric (piezo) sensor network embedded inside the tyre rubber layer during manufacturing**.

- Sensors are placed within the tread layer — not on the surface, not attached externally
- The wire network runs circumferentially and radially through the rubber, like rebar reinforcing concrete
- This makes the tyre **stronger**, not weaker — the sensor network adds structural integrity
- As the tyre wears, the sensors wear proportionally — enabling **tyre life monitoring** through signal degradation
- Ground contact is guaranteed on every rotation — the contact patch always touches the road
- Signal transfer from rotating tyre to fixed chassis uses **inductive coupling** (wireless, no physical contact, no wear)

**Road surface detection from tyre signals:**

| Surface | Signal Pattern | Confidence |
|---------|---------------|------------|
| Dry asphalt | Sharp, consistent pulse with high amplitude | High |
| Wet road | Dampened waveform, slightly irregular, reduced amplitude | High |
| Mud / soft soil | Chaotic, low-frequency, highly variable | Medium |
| Sand | High-frequency vibration, low amplitude, scattered pattern | Medium |
| Ice | Very weak, near-flat signal with occasional spikes | High |

> **Note:** Waveform visualization and ML classification model is under active development.

---

## 🖥️ Dashboard

A real-time web-based HUD dashboard built with vanilla HTML/CSS/JavaScript:

- Live sensor readouts (grip level, vibration, front/rear distance, object detection)
- Rotating radar view with AI decision log
- Collision risk ring (0–100%)
- Action layer status (ECU, braking, anti-skid, external airbag)
- 4-step workflow highlighter
- GPS speed integration via browser Geolocation API
- QR code for opening on mobile phone (same WiFi network)
- 4 simulation scenarios: Normal, Slippery Road, Object Detected, Rear Collision

---

## 🛠️ Tech Stack

| Component | Technology |
|-----------|-----------|
| AI / ML | Python, scikit-learn, YOLOv8, OpenCV |
| Dashboard | HTML5, CSS3, Vanilla JavaScript, Canvas API |
| Hardware Interface | Arduino / Raspberry Pi, Serial/USB |
| Actuators | Solenoid valve, pressure sensor, LED, buzzer |
| Tyre Sensor | Piezoelectric film (PVDF-TrFE), inductive coupling (LF ~125 kHz) |
| GPS | Browser Geolocation API |

---

## 📁 Project Structure
IVSCS/
├── index.html # Main dashboard UI
├── README.md # Project documentation
├── LICENSE # MIT License
├── css/
│ ├── style.css # Core styles and animations
│ └── mobile.css # Responsive + GPS panel styles
└── js/
├── state.js # Central vehicle state object
├── radar.js # Canvas radar renderer
├── ui.js # DOM update functions
├── scenarios.js # Simulation scenarios
├── gps.js # GPS speed module
└── main.js # Boot, clock, animation loop


---

## 🚀 Getting Started

### Run the Dashboard (No install needed)
1. Download or clone the repository
2. Open `index.html` in Chrome, Firefox, or Edge
3. Click **"Connect GPS"** on a mobile device (same WiFi) to stream real speed data

### Simulate Scenarios
Use the scenario buttons in the dashboard:
- **Normal** — baseline cruise with live sensor noise
- **Slippery** — icy road response (anti-skid + torque reduction)
- **Object** — emergency braking to safe stop
- **Rear Hit** — rear collision external airbag deployment

---

## 🔮 Future Work / Roadmap

| Status | Feature |
|--------|---------|
| 🟡 In Progress | Python AI core — road surface classifier training |
| ⬜ Planned | YOLOv8 integration with USB/IP camera |
| ⬜ Planned | Arduino hardware interface code (solenoid + pressure control) |
| ⬜ Planned | Inductive coupling PCB design for tyre signal transfer (LF 125 kHz) |
| ⬜ Planned | Real sensor data feed into dashboard (replace simulation) |
| ⬜ Planned | Mobile app for alerts and monitoring |

---

## 👤 Author

Designed and developed as a personal research and engineering project exploring the intersection of **embedded sensing**, **machine learning**, and **active vehicle safety systems**.

📍 Based in Sri Lanka — facing hardware access constraints, but open to global collaboration.

---

## 📄 License

MIT License — free to use, modify, and build upon.


---

## 📎 Related Files

- [`SMART_TYRE_SENSOR.md`](SMART_TYRE_SENSOR.md) — Detailed technical challenges and solutions for the piezoelectric smart tyre system
- [`index.html`](index.html) — Live dashboard (open in browser)
- [`js/state.js`](js/state.js) — Vehicle state object
- [`js/scenarios.js`](js/scenarios.js) — Simulation scenarios


