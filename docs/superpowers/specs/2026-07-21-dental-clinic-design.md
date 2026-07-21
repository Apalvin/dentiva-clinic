# Dental Clinic Web Design Specification

## Overview
A modern, luxury, high-conversion Dental Clinic Landing Page built using HTML5, Vanilla CSS / Tailwind CSS, and JavaScript. The design combines the dark glassmorphic hero style of Image 5 with the soft cream and vibrant lime color palette of Image 3, and structured layouts from Images 1, 2, 4.

## Color Palette & Theme Tokens
- **Primary Dark Background (Hero)**: `#0F1412` / Dark Glassmorphism with `#8C7CFF` violet/periwinkle accents
- **Body Background**: `#F9F9F4` (Soft organic cream/beige as seen in Image 3)
- **Accent Green (Lime/Soft Green)**: `#D2F34C` / `#CEF149` (As seen in Image 3)
- **Accent Violet/Periwinkle**: `#8C7CFF` (Hero buttons & glow from Image 5)
- **Text Color Primary**: `#19221D` (Dark charcoal green)
- **Text Color Secondary**: `#5A655E` (Muted dark green gray)
- **Card Background**: `#FFFFFF` with subtle border `#E5E7EB` & shadow

## Section Breakdown & Visual References

### Section 1: Glassmorphic Dark Hero Section (Ref: Image 5)
- Full-height dark background with subtle ambient blur gradient (`#8C7CFF` glow).
- Floating frosted glass navbar with brand logo (`Dentiva` / `SmileCraft Dental`), navigation links, and rounded "Book Appointment ↗" pill button.
- Large typography: *"Elevate Your Smile With Advanced Modern Dental Care"* (with italicized accent *Smile*).
- Left CTA: Violet pill button *"Schedule Visit ↗"* opening WhatsApp direct chat.
- Right Floating Social Proof Badge: Glass card with *"185K Happy Patients"*, avatar stack, and star ratings.
- Bottom Slide Indicator: Interactive preview status bar.

### Section 2: Trust Badges & Key Metrics Counter (Ref: Images 1 & 3)
- 4-column metric grid displaying:
  - `8K+` Satisfied Patients
  - `25+` Expert Skilled Surgeons
  - `15+` Years of Dedicated Service
  - `99.4%` Patient Approval Rate

### Section 3: Comprehensive Dental Services Grid (Ref: Images 3 & 4)
- Category Filter Tabs: All, Cosmetic & Aesthetics, Orthodontics, Surgery & Implants, General Care.
- Grid Cards:
  - Teeth Whitening & Smile Design
  - Invisible Orthodontics (Invisalign)
  - Dental Implants & Restorative Surgery
  - Root Canal & Pain-Free General Care
- Card anatomy: Icon/Image, Title, Price starting rate badge (e.g. `From $150`), short description, and "Book Treatment ↗" CTA.

### Section 4: Interactive Before & After Smile Transformation Slider (Ref: Images 1 & 3)
- Interactive visual drag slider comparing Before (e.g., stained/misaligned teeth) vs After (bright, perfectly aligned smile).
- Real patient story badges and procedure tags.

### Section 5: Interactive Treatment Cost & Booking Estimator
- Quick calculator widget: Patient selects treatment type + urgency level → instant estimated price range & direct WhatsApp booking link with auto-filled message.

### Section 6: Meet Our Expert Dental Specialists (Ref: Image 4)
- 3-column doctor profile cards featuring photo, name, specialization, experience, and direct appointment schedule button.

### Section 7: Patient Reviews & Testimonial Carousel (Ref: Images 3 & 4)
- Card carousel featuring patient avatars, star ratings, quotes, verified visit badges, and date.

### Section 8: FAQ Accordion (Ref: Image 4)
- Interactive toggle accordion covering common questions:
  - Insurance & Payment Plans
  - Pain Management Guarantee
  - First Visit Expectations & Duration
  - Consultation Fees

### Section 9: Free Consultation CTA Banner (Ref: Image 3)
- Soft lime green full-width banner with bold typography: *"Have Any Questions? Get Free Initial Dental Consultation"*, paired with a dark charcoal action button.

### Section 10: Footer & Sticky WhatsApp Action Bar
- Comprehensive multi-column footer with contact details, opening hours, interactive Google Map link, emergency call button, and social links.
- Sticky floating WhatsApp quick-action button in bottom-right corner.

## Functional & Interactive Requirements
1. **Direct WhatsApp Integration**: Clicking any booking button generates a custom URL: `https://wa.me/6285150688320?text=Halo%20Klinik%20Gigi,%20saya%20ingin%20booking%20jadwal%20konsultasi...`
2. **Before/After Image Comparison Drag Slider**: Implemented with pure JS touch/drag listeners.
3. **Interactive FAQ Accordion**: Smooth height animation on expand/collapse.
4. **Smooth Scroll**: Anchor navigation between sections.
