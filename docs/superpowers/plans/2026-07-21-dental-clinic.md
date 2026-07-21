# Dental Clinic Landing Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a luxury, high-conversion Dental Clinic Landing Page (Dentiva) featuring dark glassmorphism, soft cream background, interactive Before/After slider, cost estimator, service filter, FAQ accordion, testimonials, and direct WhatsApp integration.

**Architecture:** Single page application with modular Vanilla JS scripts, Tailwind CSS styling, custom CSS design tokens, and optimized asset structure.

**Tech Stack:** HTML5, CSS3, Tailwind CSS (CDN), Vanilla JavaScript.

## Global Constraints
- Primary Dark Hero: `#0F1412` with Violet accent `#8C7CFF` glow and glassmorphism.
- Body Background: Soft organic cream `#F9F9F4`.
- Accents: Lime `#D2F34C`, Violet `#8C7CFF`, Primary Text `#19221D`, Secondary Text `#5A655E`.
- Direct WhatsApp Link Base: `https://wa.me/6285150688320?text=` with custom pre-filled message URL encoding.

---

### Task 1: Setup Workspace Structure, HTML Foundation & Design Tokens

**Files:**
- Create: `index.html`
- Create: `styles.css`

- [ ] **Step 1: Create HTML structure with all 10 sections**
  Build index.html with semantic markup, Google Fonts (Outfit, Plus Jakarta Sans), Tailwind CSS CDN, FontAwesome/Lucide icons, and structure for all 10 sections.

- [ ] **Step 2: Create styles.css design tokens and utility classes**
  Define color variables (`#0F1412`, `#F9F9F4`, `#D2F34C`, `#8C7CFF`), dark glassmorphism classes, typography styles, button pill styles, ambient glow effects, and responsive layout rules.

---

### Task 2: Implement Interactive Before/After Slider & Service Filter in JavaScript

**Files:**
- Create: `main.js`

- [ ] **Step 1: Write main.js logic for Before/After Drag Comparison**
  Implement mouse and touch event listeners to adjust clip-path / width percentage of the "After" image layer seamlessly.

- [ ] **Step 2: Write Service Category Filter logic**
  Add tab switching event handlers to show/hide treatment cards dynamically based on selected categories (All, Cosmetic, Orthodontics, Surgery, General Care).

---

### Task 3: Implement Cost Estimator, FAQ Accordion & Testimonial Carousel

**Files:**
- Modify: `main.js`
- Modify: `index.html`

- [ ] **Step 1: Write Cost Estimator & Dynamic WhatsApp Link Generator**
  Calculate price range based on selected procedure and urgency, update displayed price, and generate dynamic WhatsApp link with pre-filled text.

- [ ] **Step 2: Write FAQ Accordion toggle and smooth height animation**
  Handle accordion click events, toggle active states, and animate panel max-height.

- [ ] **Step 3: Write Testimonial Carousel pagination**
  Add scroll/slide logic for patient review cards with auto-play or button controls.

---

### Task 4: Visual Polish, Images & Final Verification

**Files:**
- Create/Generate: Images in `assets/images/`
- Modify: `index.html`, `styles.css`

- [ ] **Step 1: Generate or embed luxury dental visuals**
  Generate custom hero visuals, patient smile transformations, specialist portraits, and treatment photos using `generate_image` or high-resolution placeholders.

- [ ] **Step 2: Test responsiveness & interactive elements**
  Verify full site rendering on desktop and mobile viewports, confirm all WhatsApp deep links, slider functionality, and smooth anchor scrolling.
