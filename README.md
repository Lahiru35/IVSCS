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

<style>
*{box-sizing:border-box;margin:0;padding:0}
.wrap{padding:8px 0;max-width:660px;font-family:sans-serif}
.tabs{display:flex;gap:5px;margin-bottom:14px;flex-wrap:wrap}
.tab{flex:1;min-width:100px;padding:8px 6px;border:1px solid var(--color-border-tertiary);border-radius:8px;font-size:11px;font-weight:500;text-align:center;cursor:pointer;color:var(--color-text-secondary);background:var(--color-background-secondary);transition:all 0.15s}
.tab.on{border-color:var(--color-border-info);color:var(--color-text-info);background:var(--color-background-info)}
.pane{display:none}.pane.on{display:block}
.stitle{font-size:10px;letter-spacing:2px;color:var(--color-text-tertiary);text-transform:uppercase;font-weight:500;margin-bottom:12px}
.idea-card{border:1px solid var(--color-border-tertiary);border-radius:10px;margin-bottom:8px;overflow:hidden}
.ic-head{display:flex;align-items:center;gap:10px;padding:11px 14px;cursor:pointer;user-select:none;transition:background 0.1s}
.ic-head:hover{background:var(--color-background-secondary)}
.ic-dot{width:10px;height:10px;border-radius:50%;flex-shrink:0}
.ic-title{font-size:13px;font-weight:500;color:var(--color-text-primary);flex:1}
.ic-badge{font-size:9px;padding:2px 7px;border-radius:8px;font-weight:500;flex-shrink:0}
.ic-chev{font-size:10px;color:var(--color-text-tertiary);transition:transform 0.2s}
.ic-chev.open{transform:rotate(90deg)}
.ic-body{display:none;border-top:1px solid var(--color-border-tertiary);padding:12px 14px}
.ic-body.open{display:block}
.ic-desc{font-size:12px;color:var(--color-text-secondary);line-height:1.7;margin-bottom:10px}
.ic-why{font-size:11px;font-weight:500;color:var(--color-text-primary);margin-bottom:4px}
.steps{font-size:12px;color:var(--color-text-secondary);line-height:1.8;padding-left:2px}
.steps li{margin-bottom:3px;list-style:none;padding-left:14px;position:relative}
.steps li::before{content:"→";position:absolute;left:0;color:var(--color-text-tertiary)}
.tip{background:var(--color-background-success);border:1px solid var(--color-border-success);border-radius:7px;padding:9px 12px;font-size:12px;color:var(--color-text-success);line-height:1.6;margin-top:8px}
.warn{background:var(--color-background-warning);border:1px solid var(--color-border-warning);border-radius:7px;padding:9px 12px;font-size:12px;color:var(--color-text-warning);line-height:1.6;margin-top:8px}
.impact-grid{display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px;margin-bottom:12px}
.imp-card{border:1px solid var(--color-border-tertiary);border-radius:9px;padding:10px 12px;text-align:center}
.imp-num{font-size:22px;font-weight:700;margin-bottom:3px}
.imp-label{font-size:11px;color:var(--color-text-secondary);line-height:1.4}
.roadmap{position:relative;padding-left:26px}
.rm-item{position:relative;margin-bottom:14px}
.rm-dot{position:absolute;left:-22px;top:4px;width:13px;height:13px;border-radius:50%;border:2px solid}
.rm-line{position:absolute;left:-16px;top:17px;width:2px;height:calc(100% + 2px);background:var(--color-border-tertiary)}
.rm-item:last-child .rm-line{display:none}
.rm-phase{font-size:10px;font-weight:600;letter-spacing:1px;margin-bottom:2px}
.rm-title{font-size:13px;font-weight:500;color:var(--color-text-primary);margin-bottom:3px}
.rm-desc{font-size:12px;color:var(--color-text-secondary);line-height:1.6}
.rm-tag{display:inline-block;font-size:9px;padding:2px 7px;border-radius:8px;font-weight:500;margin-top:4px}
</style>

<div class="wrap">
<div class="tabs">
  <div class="tab on" onclick="show('tech')">Tech Upgrades</div>
  <div class="tab" onclick="show('product')">Products</div>
  <div class="tab" onclick="show('business')">Business Ideas</div>
  <div class="tab" onclick="show('impact')">Real World Impact</div>
  <div class="tab" onclick="show('roadmap')">Next Steps</div>
</div>

<!-- ══════ TECH UPGRADES ══════ -->
<div class="pane on" id="p-tech">
<div class="stitle">Technical upgrades — what can be added</div>

<div class="idea-card">
  <div class="ic-head" onclick="tog('t1')">
    <div class="ic-dot" style="background:#378ADD"></div>
    <div class="ic-title">V2V Communication — Vehicle to Vehicle alerts</div>
    <div class="ic-badge" style="background:#E6F1FB;color:#0C447C">High Impact</div>
    <div class="ic-chev" id="ct1">▶</div>
  </div>
  <div class="ic-body" id="t1">
    <div class="ic-desc">When your IVSCS detects a hazard — icy road, sudden braking, pedestrian — it automatically broadcasts a warning to all vehicles within 300m via WiFi Direct or Dedicated Short Range Communication (DSRC). Every car behind you knows before they reach the danger.</div>
    <div class="ic-why">Why this matters:</div>
    <ul class="steps">
      <li>Chain collision prevention — the most common accident type</li>
      <li>Your tyre detects ice → all 10 cars behind you slow down automatically</li>
      <li>No infrastructure needed — car to car direct</li>
      <li>Tech to add: ESP32 WiFi module + broadcast protocol</li>
    </ul>
    <div class="tip">This turns IVSCS from a single-vehicle system into a road safety network. One car protects many.</div>
  </div>
</div>

<div class="idea-card">
  <div class="ic-head" onclick="tog('t2')">
    <div class="ic-dot" style="background:#7F77DD"></div>
    <div class="ic-title">Predictive Road Hazard Mapping (AI + GPS)</div>
    <div class="ic-badge" style="background:#EEEDFE;color:#3C3489">Innovative</div>
    <div class="ic-chev" id="ct2">▶</div>
  </div>
  <div class="ic-body" id="t2">
    <div class="ic-desc">Every time a vehicle with IVSCS drives over a pothole, icy patch, or muddy section, the GPS coordinates and sensor reading are logged. Over time, a real-time road condition map is built — showing exactly where road hazards exist right now, updated by live sensor data from every equipped vehicle.</div>
    <ul class="steps">
      <li>GPS coordinate + sensor reading → cloud database</li>
      <li>Aggregate data from many vehicles → hazard heatmap</li>
      <li>Navigation apps (Google Maps, Waze style) integrate the data</li>
      <li>Road maintenance departments get automatic reports</li>
    </ul>
    <div class="tip">Sri Lanka roads: pothole and flood mapping in real time. This is a product governments will pay for.</div>
  </div>
</div>

<div class="idea-card">
  <div class="ic-head" onclick="tog('t3')">
    <div class="ic-dot" style="background:#1D9E75"></div>
    <div class="ic-title">Autonomous Emergency Steering Assist</div>
    <div class="ic-badge" style="background:#E1F5EE;color:#085041">Advanced</div>
    <div class="ic-chev" id="ct3">▶</div>
  </div>
  <div class="ic-body" id="t3">
    <div class="ic-desc">Currently IVSCS controls braking and engine torque. The next level: when a collision is unavoidable, the AI calculates the safest steering direction — avoiding pedestrians, choosing the softer impact — and assists steering automatically. Combined with the tyre grip data, this can prevent rollovers on ice.</div>
    <ul class="steps">
      <li>Camera detects: obstacle right, clear space left</li>
      <li>Tyre sensor: left tyres have better grip than right</li>
      <li>AI decision: steer left at calculated angle</li>
      <li>Hardware: electric power steering motor override signal</li>
    </ul>
    <div class="warn">This requires real hardware integration — prototype carefully. Steering assist errors can cause accidents. Simulation first, hardware second.</div>
  </div>
</div>

<div class="idea-card">
  <div class="ic-head" onclick="tog('t4')">
    <div class="ic-dot" style="background:#D85A30"></div>
    <div class="ic-title">Driver Behaviour Analysis & Scoring</div>
    <div class="ic-badge" style="background:#FAECE7;color:#993C1D">Valuable</div>
    <div class="ic-chev" id="ct4">▶</div>
  </div>
  <div class="ic-body" id="t4">
    <div class="ic-desc">IVSCS already collects speed, braking force, road grip, and acceleration data. Analyse this data to build a driver behaviour score — harsh braking, cornering speed, reaction times, compliance with road conditions. This data is extremely valuable to insurance companies.</div>
    <ul class="steps">
      <li>Harsh braking events: frequency and severity</li>
      <li>Cornering speed vs grip level ratio</li>
      <li>Speed on wet/icy surfaces</li>
      <li>Following distance (from ultrasonic)</li>
      <li>Score: 0–100 driver safety rating</li>
    </ul>
    <div class="tip">Insurance companies pay for this data. Safe drivers get lower premiums. This is already a $2 billion industry (telematics insurance).</div>
  </div>
</div>

<div class="idea-card">
  <div class="ic-head" onclick="tog('t5')">
    <div class="ic-dot" style="background:#BA7517"></div>
    <div class="ic-title">Night Vision & Thermal Camera Integration</div>
    <div class="ic-badge" style="background:#FAEEDA;color:#633806">Future</div>
    <div class="ic-chev" id="ct5">▶</div>
  </div>
  <div class="ic-body" id="t5">
    <div class="ic-desc">Current IVSCS uses standard USB/IP camera. Adding a low-cost thermal or night vision camera module dramatically improves detection in rain, fog, and darkness — conditions where most fatal accidents occur. Thermal cameras detect pedestrian body heat even in complete darkness.</div>
    <ul class="steps">
      <li>MLX90640 thermal array sensor — Rs. 8,000–15,000</li>
      <li>Detects human body heat at 7m range</li>
      <li>Works in zero visibility (fog, smoke, total darkness)</li>
      <li>Fuse with regular camera: thermal confirms what RGB detects</li>
    </ul>
  </div>
</div>

</div>

<!-- ══════ PRODUCTS ══════ -->
<div class="pane" id="p-product">
<div class="stitle">Products that can be built from IVSCS</div>

<div class="idea-card">
  <div class="ic-head" onclick="tog('p1')">
    <div class="ic-dot" style="background:#378ADD"></div>
    <div class="ic-title">IVSCS Retrofit Kit — for any existing vehicle</div>
    <div class="ic-badge" style="background:#E6F1FB;color:#0C447C">Most Sellable</div>
    <div class="ic-chev" id="cp1">▶</div>
  </div>
  <div class="ic-body" id="p1">
    <div class="ic-desc">Package the IVSCS system as a plug-and-play retrofit kit that any vehicle owner can install in 2 hours without mechanical knowledge. Small box mounts under dashboard, connects to OBD-II port, camera clips to windscreen, phone shows dashboard.</div>
    <ul class="steps">
      <li>Box contains: Raspberry Pi + camera + ultrasonic sensors + 4G module</li>
      <li>OBD-II connection: reads speed, RPM, engine data</li>
      <li>Mobile app: IVSCS dashboard on phone</li>
      <li>No mechanic needed — clip on, plug in, done</li>
      <li>Target: taxi drivers, bus operators, fleet companies</li>
    </ul>
    <div class="tip">Sri Lanka fleet market: CTB buses, private bus operators, taxi companies (PickMe, Uber) — all need safety monitoring. This is a real business right now.</div>
  </div>
</div>

<div class="idea-card">
  <div class="ic-head" onclick="tog('p2')">
    <div class="ic-dot" style="background:#1D9E75"></div>
    <div class="ic-title">Fleet Safety Management Platform</div>
    <div class="ic-badge" style="background:#E1F5EE;color:#085041">B2B Product</div>
    <div class="ic-chev" id="cp2">▶</div>
  </div>
  <div class="ic-body" id="p2">
    <div class="ic-desc">A web platform where fleet operators (bus companies, delivery companies, logistics firms) monitor all their vehicles in real time. Every vehicle running IVSCS sends data to the central dashboard — road conditions, driver scores, alerts, maintenance needs.</div>
    <ul class="steps">
      <li>Real-time map: all vehicles, all sensor data</li>
      <li>Driver score leaderboard (safety ranking)</li>
      <li>Automatic alerts: harsh braking, speeding on wet roads</li>
      <li>Monthly reports: accident risk analysis per driver</li>
      <li>Tyre wear tracking: maintenance schedule automation</li>
    </ul>
    <div class="tip">Every logistics company in Sri Lanka needs this. Price: Rs. 5,000–15,000/vehicle/month subscription. 100 vehicles = Rs. 500,000–1,500,000/month recurring revenue.</div>
  </div>
</div>

<div class="idea-card">
  <div class="ic-head" onclick="tog('p3')">
    <div class="ic-dot" style="background:#7F77DD"></div>
    <div class="ic-title">Smart Tyre Sensor Module — OEM product</div>
    <div class="ic-badge" style="background:#EEEDFE;color:#3C3489">Long Term</div>
    <div class="ic-chev" id="cp3">▶</div>
  </div>
  <div class="ic-body" id="p3">
    <div class="ic-desc">Once the PVDF embedded sensor prototype is proven, package it as a standalone smart tyre sensor module that tyre manufacturers can integrate into their production. Sell the module + licensing to tyre companies — they embed it, you earn royalties per tyre.</div>
    <ul class="steps">
      <li>PVDF film + inductive coil + energy harvesting = one module</li>
      <li>Tyre company installs during manufacturing</li>
      <li>Your company provides the AI classification software</li>
      <li>Revenue model: per-tyre royalty + software subscription</li>
      <li>Global tyre market: 2.5 billion tyres/year</li>
    </ul>
  </div>
</div>

<div class="idea-card">
  <div class="ic-head" onclick="tog('p4')">
    <div class="ic-dot" style="background:#D85A30"></div>
    <div class="ic-title">Road Condition API — sell data to apps</div>
    <div class="ic-badge" style="background:#FAECE7;color:#993C1D">Data Business</div>
    <div class="ic-chev" id="cp4">▶</div>
  </div>
  <div class="ic-body" id="p4">
    <div class="ic-desc">Aggregate anonymised road condition data from all IVSCS vehicles. Package as an API that navigation apps, insurance companies, and government road agencies can subscribe to. Real-time pothole locations, flood zones, ice patches — updated by live vehicle sensor data.</div>
    <ul class="steps">
      <li>Each IVSCS vehicle = a moving road condition sensor</li>
      <li>1,000 vehicles = real-time map of entire city</li>
      <li>API customers: Google Maps, Waze, insurance, municipalities</li>
      <li>Revenue: API call pricing or monthly subscription</li>
      <li>The data gets more valuable as more vehicles join</li>
    </ul>
    <div class="tip">This is a network effect business. More vehicles → better data → more customers → more vehicles. Waze built a $1.3 billion company on the same model.</div>
  </div>
</div>

</div>

<!-- ══════ BUSINESS ══════ -->
<div class="pane" id="p-business">
<div class="stitle">Business models — how to make money</div>

<div class="idea-card">
  <div class="ic-head" onclick="tog('b1')">
    <div class="ic-dot" style="background:#378ADD"></div>
    <div class="ic-title">Start local — Sri Lanka taxi & bus safety</div>
    <div class="ic-badge" style="background:#E6F1FB;color:#0C447C">Start Now</div>
    <div class="ic-chev" id="cb1">▶</div>
  </div>
  <div class="ic-body" id="b1">
    <div class="ic-desc">Sri Lanka has serious road safety problems — one of the highest accident rates in Asia. Bus operators, taxi companies, and logistics firms all need safety monitoring. This is a real paying market you can reach immediately without needing to go anywhere.</div>
    <ul class="steps">
      <li>Build retrofit kit (Raspberry Pi + camera + OBD)</li>
      <li>Approach 1 bus company or taxi fleet for a pilot</li>
      <li>Offer 1 month free — then Rs. 5,000/vehicle/month</li>
      <li>10 vehicles = Rs. 50,000/month to start</li>
      <li>Reinvest to grow to 100 vehicles = Rs. 500,000/month</li>
    </ul>
    <div class="tip">You don't need investment to start this. One prototype kit + one willing fleet operator = a real business.</div>
  </div>
</div>

<div class="idea-card">
  <div class="ic-head" onclick="tog('b2')">
    <div class="ic-dot" style="background:#1D9E75"></div>
    <div class="ic-title">Open source → build reputation → get hired</div>
    <div class="ic-badge" style="background:#E1F5EE;color:#085041">Career Path</div>
    <div class="ic-chev" id="cb2">▶</div>
  </div>
  <div class="ic-body" id="b2">
    <div class="ic-desc">Keep IVSCS open source on GitHub. Write blog posts explaining how it works. Share on LinkedIn, Reddit (r/arduino, r/MachineLearning, r/selfdriving). The automotive tech community is small — if your project is good, people notice. Companies hiring remotely find engineers through GitHub.</div>
    <ul class="steps">
      <li>Write a dev.to or Medium article about your smart tyre concept</li>
      <li>Post the dashboard demo video on LinkedIn</li>
      <li>Share on Reddit r/arduino and r/embedded</li>
      <li>GitHub stars → portfolio credibility → job offers</li>
      <li>One viral post can change your career trajectory</li>
    </ul>
  </div>
</div>

<div class="idea-card">
  <div class="ic-head" onclick="tog('b3')">
    <div class="ic-dot" style="background:#7F77DD"></div>
    <div class="ic-title">Patent the smart tyre embed concept</div>
    <div class="ic-badge" style="background:#EEEDFE;color:#3C3489">Long Term Value</div>
    <div class="ic-chev" id="cb3">▶</div>
  </div>
  <div class="ic-body" id="b3">
    <div class="ic-desc">Your specific concept — manufacturing-time embedded PVDF network with rebar-style wiring + wear tracking + inductive coupling — is novel. No company has a commercial product doing exactly this. Filing a patent establishes your claim before someone else does.</div>
    <ul class="steps">
      <li>Document the concept fully (you already have SMART_TYRE_SENSOR.md)</li>
      <li>Search existing patents: patents.google.com</li>
      <li>File a provisional patent application (Sri Lanka IP Office or US USPTO)</li>
      <li>Provisional patent costs: $300–500 (US) or much less (Sri Lanka)</li>
      <li>Gives 12 months protection while you develop further</li>
    </ul>
    <div class="warn">Do not publicly describe exact technical details before filing a provisional patent. GitHub README is fine at concept level — detailed manufacturing specs should wait.</div>
  </div>
</div>

<div class="idea-card">
  <div class="ic-head" onclick="tog('b4')">
    <div class="ic-dot" style="background:#BA7517"></div>
    <div class="ic-title">University research partnership</div>
    <div class="ic-badge" style="background:#FAEEDA;color:#633806">Accelerator</div>
    <div class="ic-chev" id="cb4">▶</div>
  </div>
  <div class="ic-body" id="b4">
    <div class="ic-desc">University of Moratuwa, University of Peradeniya engineering departments actively look for real industry problems to research. Presenting IVSCS as a research project could get you: lab access, equipment, academic supervision, research funding, and co-authorship on papers.</div>
    <ul class="steps">
      <li>Prepare a 2-page technical summary of the smart tyre concept</li>
      <li>Email the Electronic & Telecommunication Engineering department</li>
      <li>Propose a research collaboration — you bring the concept, they bring the lab</li>
      <li>Published academic paper = massive credibility boost</li>
      <li>Access to vulcanisation equipment for real tyre embedding</li>
    </ul>
    <div class="tip">University of Moratuwa has worked with automotive companies before. Your concept is research-grade.</div>
  </div>
</div>

</div>

<!-- ══════ IMPACT ══════ -->
<div class="pane" id="p-impact">
<div class="stitle">Real world problems this solves</div>

<div class="impact-grid">
  <div class="imp-card">
    <div class="imp-num" style="color:#E24B4A">3,000+</div>
    <div class="imp-label">Road deaths per year in Sri Lanka alone</div>
  </div>
  <div class="imp-card">
    <div class="imp-num" style="color:#BA7517">1.35M</div>
    <div class="imp-label">Global road deaths per year (WHO)</div>
  </div>
  <div class="imp-card">
    <div class="imp-num" style="color:#1D9E75">90%</div>
    <div class="imp-label">Of accidents involve human error or road conditions</div>
  </div>
</div>

<div class="idea-card">
  <div class="ic-head" onclick="tog('i1')">
    <div class="ic-dot" style="background:#E24B4A"></div>
    <div class="ic-title">Preventing rear-end collisions on highways</div>
    <div class="ic-badge" style="background:#FCEBEB;color:#A32D2D">Saves Lives</div>
    <div class="ic-chev" id="ci1">▶</div>
  </div>
  <div class="ic-body" id="i1">
    <div class="ic-desc">Rear-end collisions are the most common accident type globally, especially on highways in wet or foggy conditions. A vehicle with IVSCS that suddenly brakes can instantly alert all following vehicles before they even have time to react. The safety balloon adds physical protection when collision is unavoidable.</div>
    <ul class="steps">
      <li>Reaction time gap: human = 1.5 seconds, IVSCS alert = 0.018 seconds</li>
      <li>At 100 km/h: human reaction = 41 metres, IVSCS = 0.5 metres</li>
      <li>V2V alert: following vehicle brakes before driver notices danger</li>
    </ul>
  </div>
</div>

<div class="idea-card">
  <div class="ic-head" onclick="tog('i2')">
    <div class="ic-dot" style="background:#BA7517"></div>
    <div class="ic-title">Flood and road damage early warning — Sri Lanka</div>
    <div class="ic-badge" style="background:#FAEEDA;color:#633806">Local Impact</div>
    <div class="ic-chev" id="ci2">▶</div>
  </div>
  <div class="ic-body" id="i2">
    <div class="ic-desc">Sri Lanka floods regularly wash out roads. Currently there is no real-time system to warn drivers of flooded roads until they drive into them. IVSCS tyre sensors detecting water + unusual road texture can automatically tag GPS locations as flooded and broadcast warnings to all other vehicles.</div>
    <ul class="steps">
      <li>Tyre detects: deep water splash pattern + grip loss</li>
      <li>GPS logs: "Road flooded at this location"</li>
      <li>Alert sent to all IVSCS vehicles approaching same location</li>
      <li>Navigation reroutes automatically</li>
    </ul>
    <div class="tip">This is a problem every Sri Lankan driver faces every monsoon season. A local solution built locally — that is the most powerful story you can tell.</div>
  </div>
</div>

<div class="idea-card">
  <div class="ic-head" onclick="tog('i3')">
    <div class="ic-dot" style="background:#1D9E75"></div>
    <div class="ic-title">Pedestrian protection in urban areas</div>
    <div class="ic-badge" style="background:#E1F5EE;color:#085041">Social Good</div>
    <div class="ic-chev" id="ci3">▶</div>
  </div>
  <div class="ic-body" id="i3">
    <div class="ic-desc">Camera AI detects pedestrians, cyclists, and motorcyclists — the most vulnerable road users. Combined with tyre grip data, the system knows both that a person is in the path AND whether the vehicle can stop in time given current road conditions. On wet roads, braking starts earlier than on dry.</div>
    <ul class="steps">
      <li>Dry road + pedestrian at 10m = normal brake</li>
      <li>Wet road + pedestrian at 10m = earlier, lighter brake to prevent skid</li>
      <li>Icy road + pedestrian at 10m = engine brake + alert driver immediately</li>
      <li>Braking strategy adapts to surface in real time</li>
    </ul>
  </div>
</div>

</div>

<!-- ══════ NEXT STEPS ══════ -->
<div class="pane" id="p-roadmap">
<div class="stitle">Recommended next steps — in order</div>
<div class="roadmap">

  <div class="rm-item">
    <div class="rm-dot" style="background:#E6F1FB;border-color:#185FA5"></div>
    <div class="rm-line"></div>
    <div class="rm-phase" style="color:#185FA5">WEEK 1–2</div>
    <div class="rm-title">Make a demo video of the dashboard</div>
    <div class="rm-desc">Screen record the IVSCS dashboard running all 4 scenarios. Add your voice explaining what is happening. Upload to YouTube and LinkedIn. This single video will do more for your career than 10 certificates.</div>
    <span class="rm-tag" style="background:#E6F1FB;color:#0C447C">Cost: Rs. 0 · Time: 2 hours</span>
  </div>

  <div class="rm-item">
    <div class="rm-dot" style="background:#EAF3DE;border-color:#3B6D11"></div>
    <div class="rm-line"></div>
    <div class="rm-phase" style="color:#3B6D11">WEEK 2–4</div>
    <div class="rm-title">Build the PVDF bench prototype</div>
    <div class="rm-desc">Rs. 2,000 investment. Piezo sensor in rubber foam, Arduino Nano, Serial Monitor shows road surface. This proves the concept works in reality — not just simulation. Film the test and add to GitHub.</div>
    <span class="rm-tag" style="background:#EAF3DE;color:#27500A">Cost: Rs. 2,000 · High impact proof</span>
  </div>

  <div class="rm-item">
    <div class="rm-dot" style="background:#FAEEDA;border-color:#854F0B"></div>
    <div class="rm-line"></div>
    <div class="rm-phase" style="color:#854F0B">MONTH 2</div>
    <div class="rm-title">Write one technical article about your concept</div>
    <div class="rm-desc">Publish on dev.to or Medium: "How I designed a smart tyre sensor using piezoelectric film." Explain the problem, your concept, the challenges, the solutions. Share it. This establishes you as someone who thinks about this problem seriously.</div>
    <span class="rm-tag" style="background:#FAEEDA;color:#633806">Cost: Rs. 0 · Builds reputation</span>
  </div>

  <div class="rm-item">
    <div class="rm-dot" style="background:#EEEDFE;border-color:#534AB7"></div>
    <div class="rm-line"></div>
    <div class="rm-phase" style="color:#534AB7">MONTH 2–3</div>
    <div class="rm-title">Contact University of Moratuwa Engineering</div>
    <div class="rm-desc">Send a 2-page technical summary to the Electronic & Telecommunication Engineering or Mechanical Engineering department. Propose a research collaboration. Lab access, equipment, funding, and academic paper authorship are all possible outcomes.</div>
    <span class="rm-tag" style="background:#EEEDFE;color:#3C3489">Cost: Rs. 0 · Potentially transformative</span>
  </div>

  <div class="rm-item">
    <div class="rm-dot" style="background:#E1F5EE;border-color:#0F6E56"></div>
    <div class="rm-line"></div>
    <div class="rm-phase" style="color:#0F6E56">MONTH 3–6</div>
    <div class="rm-title">Build the retrofit kit prototype</div>
    <div class="rm-desc">Raspberry Pi + USB camera + IVSCS dashboard on phone. Approach one taxi company or small fleet for a free trial. Real-world testing data, real testimonial, real product experience. This is the first step toward a real business.</div>
    <span class="rm-tag" style="background:#E1F5EE;color:#085041">Cost: Rs. 15,000–25,000 · First product</span>
  </div>

  <div class="rm-item">
    <div class="rm-dot" style="background:#FAECE7;border-color:#993C1D"></div>
    <div class="rm-line"></div>
    <div class="rm-phase" style="color:#993C1D">MONTH 6+</div>
    <div class="rm-title">Apply for Sri Lanka innovation grants / competitions</div>
    <div class="rm-desc">ICTA (ICT Agency Sri Lanka), SLTDA tech grants, University of Moratuwa startup competitions, Asia-Pacific ICT Alliance awards. With a working prototype and GitHub portfolio, you have a real submission. Prize money + visibility + mentorship.</div>
    <span class="rm-tag" style="background:#FAECE7;color:#712B13">Cost: Rs. 0 · Potential funding</span>
  </div>

</div>
<div class="tip">The single most important next step: make a demo video this week. It costs nothing and it shows the world what you have built. Everything else follows from visibility.</div>
</div>

</div>
</div>
<script>
function show(id){
  document.querySelectorAll('.pane').forEach(p=>p.classList.remove('on'));
  document.querySelectorAll('.tab').forEach(t=>t.classList.remove('on'));
  document.getElementById('p-'+id).classList.add('on');
  const m={tech:0,product:1,business:2,impact:3,roadmap:4};
  document.querySelectorAll('.tab')[m[id]].classList.add('on');
}
function tog(id){
  const b=document.getElementById(id);
  const c=document.getElementById('c'+id);
  const o=b.classList.toggle('open');
  c.classList.toggle('open',o);
}
</script>

