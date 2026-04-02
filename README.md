![piezo_embedded_tyre_crosssection](https://github.com/user-attachments/assets/c65349b9-ddca-4bd5-b8f8-6dca699295ed)# IVSCS
Intelligent Vehicle Safety &amp; Control System
Intelligent Vehicle Safety & Control System (IVSCS)
Project Overview
The Intelligent Vehicle Safety & Control System (IVSCS) is an advanced, AI-driven automotive safety solution designed to prevent accidents by integrating real-time road condition sensing with proactive vehicle control. Unlike traditional systems that rely solely on cameras, IVSCS uses "Tactile Sensing" via intelligent wheels to detect road grip and friction, allowing the vehicle to adjust engine power and braking before a collision occurs.

Key Features
Intelligent Wheel Sensing: Real-time detection of road surface (wet, icy, sandy) using vibration and acoustic sensors.

Predictive Powertrain Control: Automatically reduces engine torque (Engine Braking) based on road grip levels to maintain stability.

AI-Enhanced Object Detection: Uses Computer Vision to identify pedestrians and obstacles in the front and high-speed threats from the rear.

Exterior Collision Mitigation: A conceptual safety system that deploys external safety balloons/airbags if a rear-end collision is imminent.

Real-time Wireless Data Sync: High-speed data transmission from tire-mounted sensors to the central AI processing unit.

System Architecture
The project is built on a 4-layer architecture:

Sensing Layer: (MPU6050, Ultrasonic, Pi Camera) - Capturing environmental data.

Communication Layer: (nRF24L01 / ESP-NOW) - Wireless transmission from wheels to the ECU.

Processing Layer: (Python & OpenCV) - AI algorithms for risk assessment and decision logic.

Actuation Layer: (ECU Interface) - Controlling engine output and smart braking sequences.

Technologies Used
Programming: Python (Primary), C++ (for Microcontrollers)

AI/ML: OpenCV for Object Detection, NumPy for sensor data analysis.

Hardware Platform: Raspberry Pi / Arduino.

Communication Protocols: RF (2.4GHz), SPI, I2C.

![WhatsApp Image 2026-03-18 at 9 57 23 PM](https://github.com/user-attachments/assets/a62538be-6172-473c-bd0c-fa7409798f14)

![WhatsApp Image 2026-03-18 at 9 58 21 PM](https://github.com/user-attachments/assets/ef5a175e-6858-4ec9-8c24-d16ad53c2823)


Future Vision: Embedded Sensor Grids (The "Reinforcement" Concept)
Due to current economic and technical constraints, this specific part of the project remains a Conceptual Blueprint. My vision is to move away from surface-mounted sensors that wear out. Instead, I propose an "Embedded Sensor Grid" integrated during the tire manufacturing process—similar to reinforcement bars (rebar) in construction.

These micro-sensors would wear down uniformly with the rubber, providing consistent data throughout the tire's lifecycle.

This is a cost-effective, long-term solution for autonomous vehicle safety that eliminates the need for sensor replacement.

Current Constraints & Development Goals
As a developer from Sri Lanka, I face certain economic challenges and limited access to high-end automotive manufacturing labs to build a full-scale physical prototype of this "Embedded Grid." However:

Software Simulation: I am using my skills in Python and AI to simulate how this data would be processed by an ECU.

Scalable Thinking: I have designed the logic to be adaptable. Once the necessary resources or industrial partnerships are available, this concept can be transitioned from a digital twin to a physical product.

Ambition: My goal is to join a forward-thinking automotive organization (especially in Germany) where I can bring these conceptual innovations to life using world-class technology.


![Uploading piezo_embedd<svg width="100%" viewBox="0 0 680 500" xmlns="http://www.w3.org/2000/svg">
<defs>
  <marker id="arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
    <path d="M2 1L8 5L2 9" fill="none" stroke="context-stroke" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </marker>
  <clipPath id="tyre-clip">
    <ellipse cx="260" cy="260" rx="200" ry="200"/>
  </clipPath>
<mask id="imagine-text-gaps-3x7040" maskUnits="userSpaceOnUse"><rect x="0" y="0" width="680" height="500" fill="white"/><rect x="245.92091369628906" y="251.6110076904297" width="28.437976837158203" height="16.27790641784668" fill="black" rx="2"/><rect x="204.89617919921875" y="461.5554504394531" width="110.6518783569336" height="15.333452224731445" fill="black" rx="2"/><rect x="460.0000305175781" y="91.61100769042969" width="116.28067016601562" height="17.222360610961914" fill="black" rx="2"/><rect x="460.0000305175781" y="131.6110076904297" width="88.06890106201172" height="17.222360610961914" fill="black" rx="2"/><rect x="460.0000305175781" y="169.6110076904297" width="54.61842346191406" height="17.222360610961914" fill="black" rx="2"/><rect x="460.0000305175781" y="207.6110076904297" width="62.06510925292969" height="17.222360610961914" fill="black" rx="2"/><rect x="459.0555725097656" y="243.6110076904297" width="58.210105895996094" height="17.222360610961914" fill="black" rx="2"/><rect x="460.0000305175781" y="294.61102294921875" width="146.0738067626953" height="17.222360610961914" fill="black" rx="2"/><rect x="460.0000305175781" y="309.61102294921875" width="107.4439926147461" height="16.27790641784668" fill="black" rx="2"/><rect x="459.0555725097656" y="344.61102294921875" width="79.540283203125" height="17.222360610961914" fill="black" rx="2"/><rect x="460.0000305175781" y="359.6109924316406" width="117.48222351074219" height="16.27790641784668" fill="black" rx="2"/><rect x="459.0555725097656" y="405.61102294921875" width="87.55223083496094" height="17.222360610961914" fill="black" rx="2"/><rect x="460.0000305175781" y="420.61102294921875" width="105.95145416259766" height="16.27790641784668" fill="black" rx="2"/><rect x="125.9752197265625" y="8.666548728942871" width="269.152099609375" height="18.16681480407715" fill="black" rx="2"/></mask></defs>

<!-- Outer rubber tread (dark) -->
<ellipse cx="260" cy="260" rx="200" ry="200" fill="#2a2a2a" style="fill:rgb(42, 42, 42);stroke:none;color:rgb(255, 255, 255);stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;opacity:1;font-family:&quot;Anthropic Sans&quot;, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, sans-serif;font-size:16px;font-weight:400;text-anchor:start;dominant-baseline:auto"/>

<!-- Steel belt layer -->
<ellipse cx="260" cy="260" rx="178" ry="178" fill="#4a4a4a" style="fill:rgb(74, 74, 74);stroke:none;color:rgb(255, 255, 255);stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;opacity:1;font-family:&quot;Anthropic Sans&quot;, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, sans-serif;font-size:16px;font-weight:400;text-anchor:start;dominant-baseline:auto"/>

<!-- Body ply layer -->
<ellipse cx="260" cy="260" rx="158" ry="158" fill="#333" style="fill:rgb(51, 51, 51);stroke:none;color:rgb(255, 255, 255);stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;opacity:1;font-family:&quot;Anthropic Sans&quot;, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, sans-serif;font-size:16px;font-weight:400;text-anchor:start;dominant-baseline:auto"/>

<!-- Inner liner -->
<ellipse cx="260" cy="260" rx="138" ry="138" fill="#222" style="fill:rgb(34, 34, 34);stroke:none;color:rgb(255, 255, 255);stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;opacity:1;font-family:&quot;Anthropic Sans&quot;, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, sans-serif;font-size:16px;font-weight:400;text-anchor:start;dominant-baseline:auto"/>

<!-- Air cavity -->
<ellipse cx="260" cy="260" rx="118" ry="118" fill="#0d1f33" style="fill:rgb(13, 31, 51);stroke:none;color:rgb(255, 255, 255);stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;opacity:1;font-family:&quot;Anthropic Sans&quot;, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, sans-serif;font-size:16px;font-weight:400;text-anchor:start;dominant-baseline:auto"/>

<!-- Rim (center) -->
<ellipse cx="260" cy="260" rx="60" ry="60" fill="#5a5a5a" style="fill:rgb(90, 90, 90);stroke:none;color:rgb(255, 255, 255);stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;opacity:1;font-family:&quot;Anthropic Sans&quot;, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, sans-serif;font-size:16px;font-weight:400;text-anchor:start;dominant-baseline:auto"/>
<ellipse cx="260" cy="260" rx="44" ry="44" fill="#333" style="fill:rgb(51, 51, 51);stroke:none;color:rgb(255, 255, 255);stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;opacity:1;font-family:&quot;Anthropic Sans&quot;, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, sans-serif;font-size:16px;font-weight:400;text-anchor:start;dominant-baseline:auto"/>
<text font-family="sans-serif" font-size="11" fill="#aaa" text-anchor="middle" x="260" y="264" style="fill:rgb(170, 170, 170);stroke:none;color:rgb(255, 255, 255);stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;opacity:1;font-family:sans-serif;font-size:11px;font-weight:400;text-anchor:middle;dominant-baseline:auto">RIM</text>

<!-- ═══ PIEZO SENSORS embedded in tread layer ═══ -->
<!-- Distributed around contact zone — bottom arc -->
<!-- Sensor 1 (contact patch center) -->
<rect x="240" y="436" width="18" height="8" rx="2" fill="#00e5ff" opacity="0.9" style="fill:rgb(0, 229, 255);stroke:none;color:rgb(255, 255, 255);stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;opacity:0.9;font-family:&quot;Anthropic Sans&quot;, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, sans-serif;font-size:16px;font-weight:400;text-anchor:start;dominant-baseline:auto"/>
<!-- Sensor 2 -->
<rect x="194" y="420" width="18" height="8" rx="2" fill="#00e5ff" opacity="0.85" transform="rotate(-25 203 424)" style="fill:rgb(0, 229, 255);stroke:none;color:rgb(255, 255, 255);stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;opacity:0.85;font-family:&quot;Anthropic Sans&quot;, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, sans-serif;font-size:16px;font-weight:400;text-anchor:start;dominant-baseline:auto"/>
<!-- Sensor 3 -->
<rect x="288" y="420" width="18" height="8" rx="2" fill="#00e5ff" opacity="0.85" transform="rotate(25 297 424)" style="fill:rgb(0, 229, 255);stroke:none;color:rgb(255, 255, 255);stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;opacity:0.85;font-family:&quot;Anthropic Sans&quot;, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, sans-serif;font-size:16px;font-weight:400;text-anchor:start;dominant-baseline:auto"/>
<!-- Sensor 4 -->
<rect x="152" y="390" width="18" height="8" rx="2" fill="#00bcd4" opacity="0.7" transform="rotate(-50 161 394)" style="fill:rgb(0, 188, 212);stroke:none;color:rgb(255, 255, 255);stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;opacity:0.7;font-family:&quot;Anthropic Sans&quot;, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, sans-serif;font-size:16px;font-weight:400;text-anchor:start;dominant-baseline:auto"/>
<!-- Sensor 5 -->
<rect x="326" y="390" width="18" height="8" rx="2" fill="#00bcd4" opacity="0.7" transform="rotate(50 335 394)" style="fill:rgb(0, 188, 212);stroke:none;color:rgb(255, 255, 255);stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;opacity:0.7;font-family:&quot;Anthropic Sans&quot;, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, sans-serif;font-size:16px;font-weight:400;text-anchor:start;dominant-baseline:auto"/>
<!-- Sensor 6 (top) -->
<rect x="240" y="60" width="18" height="8" rx="2" fill="#00bcd4" opacity="0.4" style="fill:rgb(0, 188, 212);stroke:none;color:rgb(255, 255, 255);stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;opacity:0.4;font-family:&quot;Anthropic Sans&quot;, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, sans-serif;font-size:16px;font-weight:400;text-anchor:start;dominant-baseline:auto"/>
<!-- Sensor 7 left -->
<rect x="50" y="248" width="18" height="8" rx="2" fill="#00bcd4" opacity="0.4" transform="rotate(90 59 252)" style="fill:rgb(0, 188, 212);stroke:none;color:rgb(255, 255, 255);stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;opacity:0.4;font-family:&quot;Anthropic Sans&quot;, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, sans-serif;font-size:16px;font-weight:400;text-anchor:start;dominant-baseline:auto"/>
<!-- Sensor 8 right -->
<rect x="432" y="248" width="18" height="8" rx="2" fill="#00bcd4" opacity="0.4" transform="rotate(90 441 252)" style="fill:rgb(0, 188, 212);stroke:none;color:rgb(255, 255, 255);stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;opacity:0.4;font-family:&quot;Anthropic Sans&quot;, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, sans-serif;font-size:16px;font-weight:400;text-anchor:start;dominant-baseline:auto"/>

<!-- Wiring network (like rebar in concrete) — circumferential wires -->
<ellipse cx="260" cy="260" rx="168" ry="168" fill="none" stroke="#ff6b35" stroke-width="0.6" stroke-dasharray="3 4" opacity="0.5" style="fill:none;stroke:rgb(255, 107, 53);color:rgb(255, 255, 255);stroke-width:0.6px;stroke-dasharray:3px, 4px;stroke-linecap:butt;stroke-linejoin:miter;opacity:0.5;font-family:&quot;Anthropic Sans&quot;, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, sans-serif;font-size:16px;font-weight:400;text-anchor:start;dominant-baseline:auto"/>
<ellipse cx="260" cy="260" rx="150" ry="150" fill="none" stroke="#ff6b35" stroke-width="0.6" stroke-dasharray="3 4" opacity="0.4" style="fill:none;stroke:rgb(255, 107, 53);color:rgb(255, 255, 255);stroke-width:0.6px;stroke-dasharray:3px, 4px;stroke-linecap:butt;stroke-linejoin:miter;opacity:0.4;font-family:&quot;Anthropic Sans&quot;, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, sans-serif;font-size:16px;font-weight:400;text-anchor:start;dominant-baseline:auto"/>

<!-- Radial wires (like rebar radials) -->
<line x1="260" y1="92" x2="260" y2="142" stroke="#ff6b35" stroke-width="0.7" stroke-dasharray="2 3" opacity="0.5" style="fill:rgb(0, 0, 0);stroke:rgb(255, 107, 53);color:rgb(255, 255, 255);stroke-width:0.7px;stroke-dasharray:2px, 3px;stroke-linecap:butt;stroke-linejoin:miter;opacity:0.5;font-family:&quot;Anthropic Sans&quot;, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, sans-serif;font-size:16px;font-weight:400;text-anchor:start;dominant-baseline:auto"/>
<line x1="260" y1="378" x2="260" y2="428" stroke="#ff6b35" stroke-width="0.7" stroke-dasharray="2 3" opacity="0.9" style="fill:rgb(0, 0, 0);stroke:rgb(255, 107, 53);color:rgb(255, 255, 255);stroke-width:0.7px;stroke-dasharray:2px, 3px;stroke-linecap:butt;stroke-linejoin:miter;opacity:0.9;font-family:&quot;Anthropic Sans&quot;, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, sans-serif;font-size:16px;font-weight:400;text-anchor:start;dominant-baseline:auto"/>
<line x1="92" y1="260" x2="142" y2="260" stroke="#ff6b35" stroke-width="0.7" stroke-dasharray="2 3" opacity="0.5" style="fill:rgb(0, 0, 0);stroke:rgb(255, 107, 53);color:rgb(255, 255, 255);stroke-width:0.7px;stroke-dasharray:2px, 3px;stroke-linecap:butt;stroke-linejoin:miter;opacity:0.5;font-family:&quot;Anthropic Sans&quot;, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, sans-serif;font-size:16px;font-weight:400;text-anchor:start;dominant-baseline:auto"/>
<line x1="378" y1="260" x2="428" y2="260" stroke="#ff6b35" stroke-width="0.7" stroke-dasharray="2 3" opacity="0.5" style="fill:rgb(0, 0, 0);stroke:rgb(255, 107, 53);color:rgb(255, 255, 255);stroke-width:0.7px;stroke-dasharray:2px, 3px;stroke-linecap:butt;stroke-linejoin:miter;opacity:0.5;font-family:&quot;Anthropic Sans&quot;, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, sans-serif;font-size:16px;font-weight:400;text-anchor:start;dominant-baseline:auto"/>
<line x1="147" y1="147" x2="183" y2="183" stroke="#ff6b35" stroke-width="0.7" stroke-dasharray="2 3" opacity="0.4" style="fill:rgb(0, 0, 0);stroke:rgb(255, 107, 53);color:rgb(255, 255, 255);stroke-width:0.7px;stroke-dasharray:2px, 3px;stroke-linecap:butt;stroke-linejoin:miter;opacity:0.4;font-family:&quot;Anthropic Sans&quot;, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, sans-serif;font-size:16px;font-weight:400;text-anchor:start;dominant-baseline:auto"/>
<line x1="337" y1="337" x2="373" y2="373" stroke="#ff6b35" stroke-width="0.7" stroke-dasharray="2 3" opacity="0.4" style="fill:rgb(0, 0, 0);stroke:rgb(255, 107, 53);color:rgb(255, 255, 255);stroke-width:0.7px;stroke-dasharray:2px, 3px;stroke-linecap:butt;stroke-linejoin:miter;opacity:0.4;font-family:&quot;Anthropic Sans&quot;, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, sans-serif;font-size:16px;font-weight:400;text-anchor:start;dominant-baseline:auto"/>
<line x1="373" y1="147" x2="337" y2="183" stroke="#ff6b35" stroke-width="0.7" stroke-dasharray="2 3" opacity="0.4" style="fill:rgb(0, 0, 0);stroke:rgb(255, 107, 53);color:rgb(255, 255, 255);stroke-width:0.7px;stroke-dasharray:2px, 3px;stroke-linecap:butt;stroke-linejoin:miter;opacity:0.4;font-family:&quot;Anthropic Sans&quot;, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, sans-serif;font-size:16px;font-weight:400;text-anchor:start;dominant-baseline:auto"/>
<line x1="147" y1="373" x2="183" y2="337" stroke="#ff6b35" stroke-width="0.7" stroke-dasharray="2 3" opacity="0.4" style="fill:rgb(0, 0, 0);stroke:rgb(255, 107, 53);color:rgb(255, 255, 255);stroke-width:0.7px;stroke-dasharray:2px, 3px;stroke-linecap:butt;stroke-linejoin:miter;opacity:0.4;font-family:&quot;Anthropic Sans&quot;, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, sans-serif;font-size:16px;font-weight:400;text-anchor:start;dominant-baseline:auto"/>

<!-- Contact patch indicator (ground) -->
<rect x="180" y="462" width="160" height="14" rx="4" fill="#1D9E75" opacity="0.7" style="fill:rgb(29, 158, 117);stroke:none;color:rgb(255, 255, 255);stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;opacity:0.7;font-family:&quot;Anthropic Sans&quot;, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, sans-serif;font-size:16px;font-weight:400;text-anchor:start;dominant-baseline:auto"/>
<text font-family="sans-serif" font-size="10" fill="#9FE1CB" text-anchor="middle" x="260" y="473" style="fill:rgb(159, 225, 203);stroke:none;color:rgb(255, 255, 255);stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;opacity:1;font-family:sans-serif;font-size:10px;font-weight:400;text-anchor:middle;dominant-baseline:auto">Contact patch (ground)</text>

<!-- Active sensor glow at contact -->
<ellipse cx="249" cy="440" rx="12" ry="5" fill="#00e5ff" opacity="0.25" style="fill:rgb(0, 229, 255);stroke:none;color:rgb(255, 255, 255);stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;opacity:0.25;font-family:&quot;Anthropic Sans&quot;, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, sans-serif;font-size:16px;font-weight:400;text-anchor:start;dominant-baseline:auto"/>
<ellipse cx="249" cy="440" rx="7" ry="3" fill="#00e5ff" opacity="0.5" style="fill:rgb(0, 229, 255);stroke:none;color:rgb(255, 255, 255);stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;opacity:0.5;font-family:&quot;Anthropic Sans&quot;, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, sans-serif;font-size:16px;font-weight:400;text-anchor:start;dominant-baseline:auto"/>

<!-- ═══ RIGHT SIDE LABELS ═══ -->
<!-- Layer labels -->
<line x1="460" y1="100" x2="390" y2="125" stroke="#888" stroke-width="0.5" stroke-dasharray="3 2" style="fill:rgb(0, 0, 0);stroke:rgb(136, 136, 136);color:rgb(255, 255, 255);stroke-width:0.5px;stroke-dasharray:3px, 2px;stroke-linecap:butt;stroke-linejoin:miter;opacity:1;font-family:&quot;Anthropic Sans&quot;, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, sans-serif;font-size:16px;font-weight:400;text-anchor:start;dominant-baseline:auto"/>
<text font-family="sans-serif" font-size="12" fill="#c8e6f7" x="464" y="104" style="fill:rgb(200, 230, 247);stroke:none;color:rgb(255, 255, 255);stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;opacity:1;font-family:sans-serif;font-size:12px;font-weight:400;text-anchor:start;dominant-baseline:auto">Tread rubber (outer)</text>

<line x1="460" y1="140" x2="415" y2="155" stroke="#888" stroke-width="0.5" stroke-dasharray="3 2" style="fill:rgb(0, 0, 0);stroke:rgb(136, 136, 136);color:rgb(255, 255, 255);stroke-width:0.5px;stroke-dasharray:3px, 2px;stroke-linecap:butt;stroke-linejoin:miter;opacity:1;font-family:&quot;Anthropic Sans&quot;, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, sans-serif;font-size:16px;font-weight:400;text-anchor:start;dominant-baseline:auto"/>
<text font-family="sans-serif" font-size="12" fill="#c8e6f7" x="464" y="144" style="fill:rgb(200, 230, 247);stroke:none;color:rgb(255, 255, 255);stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;opacity:1;font-family:sans-serif;font-size:12px;font-weight:400;text-anchor:start;dominant-baseline:auto">Steel belt layer</text>

<line x1="460" y1="178" x2="430" y2="185" stroke="#888" stroke-width="0.5" stroke-dasharray="3 2" style="fill:rgb(0, 0, 0);stroke:rgb(136, 136, 136);color:rgb(255, 255, 255);stroke-width:0.5px;stroke-dasharray:3px, 2px;stroke-linecap:butt;stroke-linejoin:miter;opacity:1;font-family:&quot;Anthropic Sans&quot;, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, sans-serif;font-size:16px;font-weight:400;text-anchor:start;dominant-baseline:auto"/>
<text font-family="sans-serif" font-size="12" fill="#c8e6f7" x="464" y="182" style="fill:rgb(200, 230, 247);stroke:none;color:rgb(255, 255, 255);stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;opacity:1;font-family:sans-serif;font-size:12px;font-weight:400;text-anchor:start;dominant-baseline:auto">Body ply</text>

<line x1="460" y1="216" x2="398" y2="222" stroke="#888" stroke-width="0.5" stroke-dasharray="3 2" style="fill:rgb(0, 0, 0);stroke:rgb(136, 136, 136);color:rgb(255, 255, 255);stroke-width:0.5px;stroke-dasharray:3px, 2px;stroke-linecap:butt;stroke-linejoin:miter;opacity:1;font-family:&quot;Anthropic Sans&quot;, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, sans-serif;font-size:16px;font-weight:400;text-anchor:start;dominant-baseline:auto"/>
<text font-family="sans-serif" font-size="12" fill="#c8e6f7" x="464" y="220" style="fill:rgb(200, 230, 247);stroke:none;color:rgb(255, 255, 255);stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;opacity:1;font-family:sans-serif;font-size:12px;font-weight:400;text-anchor:start;dominant-baseline:auto">Inner liner</text>

<line x1="460" y1="252" x2="378" y2="252" stroke="#888" stroke-width="0.5" stroke-dasharray="3 2" mask="url(#imagine-text-gaps-3x7040)" style="fill:rgb(0, 0, 0);stroke:rgb(136, 136, 136);color:rgb(255, 255, 255);stroke-width:0.5px;stroke-dasharray:3px, 2px;stroke-linecap:butt;stroke-linejoin:miter;opacity:1;font-family:&quot;Anthropic Sans&quot;, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, sans-serif;font-size:16px;font-weight:400;text-anchor:start;dominant-baseline:auto"/>
<text font-family="sans-serif" font-size="12" fill="#6ab7cc" x="464" y="256" style="fill:rgb(106, 183, 204);stroke:none;color:rgb(255, 255, 255);stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;opacity:1;font-family:sans-serif;font-size:12px;font-weight:400;text-anchor:start;dominant-baseline:auto">Air cavity</text>

<!-- Piezo label -->
<line x1="460" y1="310" x2="368" y2="356" stroke="#00e5ff" stroke-width="0.5" stroke-dasharray="3 2" style="fill:rgb(0, 0, 0);stroke:rgb(0, 229, 255);color:rgb(255, 255, 255);stroke-width:0.5px;stroke-dasharray:3px, 2px;stroke-linecap:butt;stroke-linejoin:miter;opacity:1;font-family:&quot;Anthropic Sans&quot;, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, sans-serif;font-size:16px;font-weight:400;text-anchor:start;dominant-baseline:auto"/>
<text font-family="sans-serif" font-size="12" fill="#00e5ff" x="464" y="307" style="fill:rgb(0, 229, 255);stroke:none;color:rgb(255, 255, 255);stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;opacity:1;font-family:sans-serif;font-size:12px;font-weight:400;text-anchor:start;dominant-baseline:auto">Piezo sensor (embedded)</text>
<text font-family="sans-serif" font-size="11" fill="#6ab7cc" x="464" y="322" style="fill:rgb(106, 183, 204);stroke:none;color:rgb(255, 255, 255);stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;opacity:1;font-family:sans-serif;font-size:11px;font-weight:400;text-anchor:start;dominant-baseline:auto">in tread rubber layer</text>

<!-- Wire network label -->
<line x1="460" y1="360" x2="430" y2="340" stroke="#ff6b35" stroke-width="0.5" stroke-dasharray="3 2" mask="url(#imagine-text-gaps-3x7040)" style="fill:rgb(0, 0, 0);stroke:rgb(255, 107, 53);color:rgb(255, 255, 255);stroke-width:0.5px;stroke-dasharray:3px, 2px;stroke-linecap:butt;stroke-linejoin:miter;opacity:1;font-family:&quot;Anthropic Sans&quot;, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, sans-serif;font-size:16px;font-weight:400;text-anchor:start;dominant-baseline:auto"/>
<text font-family="sans-serif" font-size="12" fill="#ff6b35" x="464" y="357" style="fill:rgb(255, 107, 53);stroke:none;color:rgb(255, 255, 255);stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;opacity:1;font-family:sans-serif;font-size:12px;font-weight:400;text-anchor:start;dominant-baseline:auto">Wire network</text>
<text font-family="sans-serif" font-size="11" fill="#c07050" x="464" y="372" style="fill:rgb(192, 112, 80);stroke:none;color:rgb(255, 255, 255);stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;opacity:1;font-family:sans-serif;font-size:11px;font-weight:400;text-anchor:start;dominant-baseline:auto">(like rebar in concrete)</text>

<!-- Active zone label -->
<line x1="460" y1="420" x2="365" y2="438" stroke="#1D9E75" stroke-width="0.5" stroke-dasharray="3 2" mask="url(#imagine-text-gaps-3x7040)" style="fill:rgb(0, 0, 0);stroke:rgb(29, 158, 117);color:rgb(255, 255, 255);stroke-width:0.5px;stroke-dasharray:3px, 2px;stroke-linecap:butt;stroke-linejoin:miter;opacity:1;font-family:&quot;Anthropic Sans&quot;, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, sans-serif;font-size:16px;font-weight:400;text-anchor:start;dominant-baseline:auto"/>
<text font-family="sans-serif" font-size="12" fill="#9FE1CB" x="464" y="418" style="fill:rgb(159, 225, 203);stroke:none;color:rgb(255, 255, 255);stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;opacity:1;font-family:sans-serif;font-size:12px;font-weight:400;text-anchor:start;dominant-baseline:auto">Active sensors</text>
<text font-family="sans-serif" font-size="11" fill="#5DCAA5" x="464" y="433" style="fill:rgb(93, 202, 165);stroke:none;color:rgb(255, 255, 255);stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;opacity:1;font-family:sans-serif;font-size:11px;font-weight:400;text-anchor:start;dominant-baseline:auto">at contact zone only</text>

<!-- Title -->
<text font-family="sans-serif" font-size="13" font-weight="500" fill="#c8e6f7" text-anchor="middle" x="260" y="22" style="fill:rgb(200, 230, 247);stroke:none;color:rgb(255, 255, 255);stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;opacity:1;font-family:sans-serif;font-size:13px;font-weight:500;text-anchor:middle;dominant-baseline:auto">Tyre cross-section — piezo embedded layout</text>
</svg>ed_tyre_crosssection.svg…]()

# 🚗 IVSCS — Intelligent Vehicle Safety & Control System

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
- **Rear Safety Balloon** — Deploys an external airbag/cushion at the rear when a rear-end collision is imminent, with pressure-safe inflation control to prevent bursting
- **Rear Vehicle Alert** — Warns the trailing vehicle via lights and signals

### Layer 4 — Workflow Logic
```
START → Monitor sensors → Road slippery? → Reduce torque + activate anti-skid
                       → Object detected? → Pre-charge brakes → Safe stop
                       → Rear collision? → Deploy safety balloon + alert
                       → All clear → Log state → Loop
```

---

## 💡 Key Innovation — Embedded Piezoelectric Smart Tyre

The most novel component of this system is the **piezoelectric sensor network embedded inside the tyre rubber layer during manufacturing**.

- Sensors are placed within the tread layer — not on the surface, not attached externally
- The wire network runs circumferentially and radially through the rubber, like rebar reinforcing concrete
- This makes the tyre **stronger**, not weaker — the sensor network adds structural integrity
- As the tyre wears, the sensors wear proportionally — enabling **tyre life monitoring** through signal degradation
- Ground contact is guaranteed on every rotation — the contact patch always touches the road
- Signal transfer from rotating tyre to fixed chassis uses **inductive coupling** (wireless, no physical contact, no wear)

**Road surface detection from tyre signals:**
| Surface | Signal Pattern |
|---------|---------------|
| Dry asphalt | Sharp, consistent pulse |
| Wet road | Dampened, slightly irregular |
| Mud / soft soil | Chaotic, low-frequency |
| Sand | High-frequency vibration, low grip |
| Ice | Weak, near-flat signal |

---

## 🖥️ Dashboard

A real-time web-based HUD dashboard built with vanilla HTML/CSS/JavaScript:

- Live sensor readouts (grip level, vibration, front/rear distance, object detection)
- Rotating radar view with AI decision log
- Collision risk ring (0–100%)
- Action layer status (ECU, braking, anti-skid, safety balloon)
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
| Tyre Sensor | Piezoelectric film, inductive coupling (slip ring) |
| GPS | Browser Geolocation API |

---

## 📁 Project Structure

```
IVSCS/
├── index.html          # Main dashboard UI
├── README.md           # Project documentation
├── css/
│   ├── style.css       # Core styles and animations
│   └── mobile.css      # Responsive + GPS panel styles
└── js/
    ├── state.js        # Central vehicle state object
    ├── radar.js        # Canvas radar renderer
    ├── ui.js           # DOM update functions
    ├── scenarios.js    # Simulation scenarios
    ├── gps.js          # GPS speed module
    └── main.js         # Boot, clock, animation loop
```

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
- **Rear Hit** — rear collision balloon deployment

---

## 🔮 Roadmap

- [ ] Python AI core — road surface classifier training
- [ ] YOLOv8 integration with USB/IP camera
- [ ] Arduino hardware interface code (solenoid + pressure control)
- [ ] Inductive coupling PCB design for tyre signal transfer
- [ ] Real sensor data feed into dashboard (replace simulation)
- [ ] Mobile app for alerts and monitoring

---

## 👤 Author

Designed and developed as a personal research and engineering project exploring the intersection of **embedded sensing**, **machine learning**, and **active vehicle safety systems**.

---

## 📄 License hh ivscs nn

MIT License — free to use, modify, and build upon.

[IVSCS_expansion_ideas.html](https://github.com/user-attachments/files/26221298/IVSCS_expansion_ideas.html)

