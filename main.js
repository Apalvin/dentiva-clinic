/**
 * Dentiva - Klinik Gigi Modern & Estetika JavaScript Engine
 */

document.addEventListener('DOMContentLoaded', () => {
  initHeroCarousel();
  initScrollReveal();
  initBeforeAfterSlider();
  initServiceFilter();
  initCostEstimator();
  initFAQAccordion();
  initTestimonialCarousel();
  initWhatsAppBookingHandlers();
  initStickyNavbar();
  initSmoothScroll();
});

/* ==========================================================================
   0a. Sticky Navbar — slides in after scrolling past hero
   ========================================================================== */
function initStickyNavbar() {
  const stickyNav = document.getElementById('sticky-navbar');
  const heroSection = document.querySelector('header');
  if (!stickyNav || !heroSection) return;

  function onScroll() {
    const heroBottom = heroSection.offsetTop + heroSection.offsetHeight - 80;
    if (window.scrollY > heroBottom) {
      stickyNav.style.transform = 'translateY(0)';
      stickyNav.style.opacity = '1';
      stickyNav.style.pointerEvents = 'auto';
    } else {
      stickyNav.style.transform = 'translateY(-100%)';
      stickyNav.style.opacity = '0';
      stickyNav.style.pointerEvents = 'none';
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); // run once on load
}

/* ==========================================================================
   0b. Smooth Scroll — animated navigation for anchor links
   ========================================================================== */
function initSmoothScroll() {
  // Force smooth scroll on html element (in case Tailwind preflight overrode CSS)
  document.documentElement.style.scrollBehavior = 'smooth';

  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href').slice(1);
      if (!targetId) return; // bare "#" — do nothing special

      const target = document.getElementById(targetId);
      if (!target) return;

      e.preventDefault();
      e.stopPropagation();

      // scrollIntoView is the most reliable cross-browser smooth scroll
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
}


/* ==========================================================================
   00. Interactive Hero Showcase Carousel & Status Indicator (AI Generated Slides)
   ========================================================================== */
const HERO_SLIDES = [
  {
    img: 'assets/images/hero_slide_1.png',
    caption: 'Senyum Sehat Anda, Prioritas Utama Kami',
    counter: 'Pratinjau 01 / 04'
  },
  {
    img: 'assets/images/hero_slide_2.png',
    caption: 'Transformasi Pemutihan Gigi Laser (Teeth Whitening)',
    counter: 'Pratinjau 02 / 04'
  },
  {
    img: 'assets/images/hero_slide_3.png',
    caption: 'Behel Transparan Invisalign Senyum Rapi Tak Kasat Mata',
    counter: 'Pratinjau 03 / 04'
  },
  {
    img: 'assets/images/hero_slide_4.png',
    caption: 'Konsultasi Perawatan Veneer Porselen & Restorasi Gigi',
    counter: 'Pratinjau 04 / 04'
  }
];

let currentHeroIndex = 0;
let isHeroAnimating = false;
let heroAutoPlayTimer = null;

window.nextHeroSlide = function() {
  if (isHeroAnimating) return;

  const heroImg = document.getElementById('hero-portrait-img');
  const slideCounter = document.getElementById('hero-slide-counter');
  const slideCaption = document.getElementById('hero-slide-caption');

  if (!heroImg) return;

  isHeroAnimating = true;
  currentHeroIndex = (currentHeroIndex + 1) % HERO_SLIDES.length;
  const slide = HERO_SLIDES[currentHeroIndex];

  // Smooth Slide-Out Animation (scale down and slide left)
  heroImg.style.transform = 'scale(0.94) translateX(-25px)';
  heroImg.style.opacity = '0';

  setTimeout(() => {
    heroImg.src = slide.img;

    if (slideCounter) slideCounter.textContent = slide.counter;
    if (slideCaption) slideCaption.textContent = slide.caption;

    // Prepare Slide-In Position (start from right)
    heroImg.style.transform = 'scale(0.94) translateX(25px)';

    setTimeout(() => {
      // Slide In and Fade In smoothly
      heroImg.style.transform = 'scale(1) translateX(0)';
      heroImg.style.opacity = '1';

      setTimeout(() => {
        isHeroAnimating = false;
      }, 300);
    }, 50);
  }, 250);

  resetHeroAutoPlay();
};

function resetHeroAutoPlay() {
  if (heroAutoPlayTimer) clearInterval(heroAutoPlayTimer);
  heroAutoPlayTimer = setInterval(() => {
    window.nextHeroSlide();
  }, 5000);
}

function initHeroCarousel() {
  const nextBtn = document.getElementById('hero-next-btn');
  const counterSpan = document.getElementById('hero-slide-counter');

  if (nextBtn) {
    nextBtn.addEventListener('click', (e) => {
      e.preventDefault();
      window.nextHeroSlide();
    });
  }

  if (counterSpan) {
    counterSpan.addEventListener('click', (e) => {
      e.preventDefault();
      window.nextHeroSlide();
    });
  }

  // Auto-play every 5s
  resetHeroAutoPlay();
}

/* ==========================================================================
   0. Scroll Reveal Entrance Animations & Animated Number Counters
   ========================================================================== */
function initScrollReveal() {
  const revealElements = document.querySelectorAll('.reveal-on-scroll');
  const counterElements = document.querySelectorAll('.counter-element');

  // Reveal Observer
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-revealed');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
  });

  revealElements.forEach(el => revealObserver.observe(el));

  // Counter Intersection Observer
  const counterObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseFloat(el.getAttribute('data-target') || '0');
        const suffix = el.getAttribute('data-suffix') || '';
        const prefix = el.getAttribute('data-prefix') || '';
        const decimals = parseInt(el.getAttribute('data-decimals') || '0', 10);

        animateCounter(el, target, 2000, prefix, suffix, decimals);
        observer.unobserve(el);
      }
    });
  }, {
    threshold: 0.3
  });

  counterElements.forEach(el => counterObserver.observe(el));
}

function animateCounter(el, target, duration = 2000, prefix = '', suffix = '', decimals = 0) {
  let startTimestamp = null;
  const startValue = 0;

  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    
    // EaseOutCubic timing function for smooth slowing down at the end
    const easeProgress = 1 - Math.pow(1 - progress, 3);
    const currentValue = startValue + easeProgress * (target - startValue);

    el.textContent = `${prefix}${currentValue.toFixed(decimals)}${suffix}`;

    if (progress < 1) {
      window.requestAnimationFrame(step);
    } else {
      el.textContent = `${prefix}${target.toFixed(decimals)}${suffix}`;
    }
  };

  window.requestAnimationFrame(step);
}

/* ==========================================================================
   1. Interactive Before & After Drag Comparison Slider
   ========================================================================== */
function initBeforeAfterSlider() {
  const container = document.getElementById('ba-container');
  const afterWrapper = document.getElementById('ba-after-wrapper');
  const handle = document.getElementById('ba-handle');

  if (!container || !afterWrapper || !handle) return;

  const innerImg = afterWrapper.querySelector('img');
  let isDragging = false;

  const syncImageWidth = () => {
    if (innerImg && container) {
      innerImg.style.width = `${container.clientWidth}px`;
    }
  };

  const updatePosition = (clientX) => {
    const rect = container.getBoundingClientRect();
    let x = clientX - rect.left;
    
    // Clamp values between 0 and rect.width
    if (x < 0) x = 0;
    if (x > rect.width) x = rect.width;

    const percentage = (x / rect.width) * 100;
    afterWrapper.style.width = `${percentage}%`;
    handle.style.left = `${percentage}%`;
    syncImageWidth();
  };

  // Sync image width on init and window resize
  syncImageWidth();
  window.addEventListener('resize', syncImageWidth);

  // Mouse Events
  handle.addEventListener('mousedown', (e) => {
    isDragging = true;
    e.preventDefault();
  });

  container.addEventListener('mousedown', (e) => {
    isDragging = true;
    updatePosition(e.clientX);
  });

  window.addEventListener('mouseup', () => {
    isDragging = false;
  });

  window.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    updatePosition(e.clientX);
  });

  // Touch Events for Mobile
  handle.addEventListener('touchstart', () => {
    isDragging = true;
  }, { passive: true });

  container.addEventListener('touchstart', (e) => {
    isDragging = true;
    if (e.touches[0]) updatePosition(e.touches[0].clientX);
  }, { passive: true });

  window.addEventListener('touchend', () => {
    isDragging = false;
  });

  window.addEventListener('touchmove', (e) => {
    if (!isDragging || !e.touches[0]) return;
    updatePosition(e.touches[0].clientX);
  }, { passive: true });
}

/* ==========================================================================
   2. Comprehensive Dental Services Filter Tabs
   ========================================================================== */
function initServiceFilter() {
  const filterTabs = document.querySelectorAll('.filter-tab');
  const serviceCards = document.querySelectorAll('.service-card');

  filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      // Remove active class from all tabs
      filterTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const filterValue = tab.getAttribute('data-filter');

      serviceCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filterValue === 'all' || category === filterValue) {
          card.style.display = 'block';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 50);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(20px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 300);
        }
      });
    });
  });
}

/* ==========================================================================
   3. Treatment Cost & Booking Estimator Widget (Indonesian Market Prices IDR)
   ========================================================================== */
const TREATMENT_DATA = {
  whitening: {
    name: 'Pemutihan Gigi & Desain Senyum',
    basePriceMin: 1500000,
    basePriceMax: 3000000,
    duration: '1 Sesi (60 Menit)'
  },
  invisalign: {
    name: 'Behel Transparan Invisalign',
    basePriceMin: 7500000,
    basePriceMax: 18000000,
    duration: '3 - 6 Bulan'
  },
  implants: {
    name: 'Implan Gigi & Bedah Restoratif',
    basePriceMin: 12000000,
    basePriceMax: 25000000,
    duration: '2 - 3 Kunjungan'
  },
  rootcanal: {
    name: 'Perawatan Saluran Akar (Root Canal)',
    basePriceMin: 1800000,
    basePriceMax: 4500000,
    duration: '1 - 2 Kunjungan'
  },
  veneers: {
    name: 'Veneer Porselen & Smile Makeover',
    basePriceMin: 3500000,
    basePriceMax: 9000000,
    duration: '2 Kunjungan'
  }
};

const URGENCY_MULTIPLIER = {
  standard: { factor: 1.0, label: 'Jadwal Reguler (Dalam 7 Hari)' },
  fast: { factor: 1.15, label: 'Jadwal Prioritas (Dalam 48 Jam)' },
  emergency: { factor: 1.25, label: 'Perawatan Darurat Segera' }
};

function formatIDR(amount) {
  return 'Rp ' + amount.toLocaleString('id-ID');
}

function initCostEstimator() {
  const treatmentSelect = document.getElementById('est-treatment');
  const urgencySelect = document.getElementById('est-urgency');
  const priceMinEl = document.getElementById('est-price-min');
  const priceMaxEl = document.getElementById('est-price-max');
  const durationEl = document.getElementById('est-duration');
  const estimatorBtn = document.getElementById('est-whatsapp-btn');

  if (!treatmentSelect || !urgencySelect || !priceMinEl || !priceMaxEl || !estimatorBtn) return;

  function recalculate() {
    const selectedTreatmentKey = treatmentSelect.value;
    const selectedUrgencyKey = urgencySelect.value;

    const treatment = TREATMENT_DATA[selectedTreatmentKey] || TREATMENT_DATA.whitening;
    const urgency = URGENCY_MULTIPLIER[selectedUrgencyKey] || URGENCY_MULTIPLIER.standard;

    const minPrice = Math.round(treatment.basePriceMin * urgency.factor);
    const maxPrice = Math.round(treatment.basePriceMax * urgency.factor);

    priceMinEl.textContent = formatIDR(minPrice);
    priceMaxEl.textContent = formatIDR(maxPrice);
    if (durationEl) durationEl.textContent = treatment.duration;

    // Update WhatsApp link dynamic pre-filled message
    const message = `Halo Klinik Gigi Dentiva, saya ingin pesan jadwal konsultasi untuk perawatan: ${treatment.name} (Estimasi: ${formatIDR(minPrice)} - ${formatIDR(maxPrice)}, Urgensi: ${urgency.label}). Apakah ada slot dokter yang tersedia?`;
    const encodedMessage = encodeURIComponent(message);
    estimatorBtn.href = `https://wa.me/6285150688320?text=${encodedMessage}`;
  }

  treatmentSelect.addEventListener('change', recalculate);
  urgencySelect.addEventListener('change', recalculate);

  // Initial Calculation
  recalculate();
}

/* ==========================================================================
   4. Interactive FAQ Accordion
   ========================================================================== */
function initFAQAccordion() {
  const accordionItems = document.querySelectorAll('.accordion-item');

  accordionItems.forEach(item => {
    const header = item.querySelector('.accordion-header');
    if (!header) return;

    header.addEventListener('click', () => {
      const isOpen = item.classList.contains('active');

      // Close all items
      accordionItems.forEach(i => i.classList.remove('active'));

      // Toggle current item
      if (!isOpen) {
        item.classList.add('active');
      }
    });
  });
}

/* ==========================================================================
   5. Testimonial Carousel Pagination
   ========================================================================== */
function initTestimonialCarousel() {
  const track = document.getElementById('testimonial-track');
  const prevBtn = document.getElementById('test-prev');
  const nextBtn = document.getElementById('test-next');

  if (!track || !prevBtn || !nextBtn) return;

  const cardWidth = 360; // Approximate card width + gap

  nextBtn.addEventListener('click', () => {
    track.scrollBy({ left: cardWidth, behavior: 'smooth' });
  });

  prevBtn.addEventListener('click', () => {
    track.scrollBy({ left: -cardWidth, behavior: 'smooth' });
  });
}

/* ==========================================================================
   6. Global WhatsApp Link Direct Booking Dynamic Dispatcher
   ========================================================================== */
function initWhatsAppBookingHandlers() {
  const waButtons = document.querySelectorAll('[data-wa-treatment]');

  waButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const treatmentName = btn.getAttribute('data-wa-treatment') || 'Jadwal Konsultasi Umum';
      const message = `Halo Klinik Gigi Dentiva, saya tertarik untuk konsultasi / pesan perawatan: ${treatmentName}. Mohon infonya.`;
      const waUrl = `https://wa.me/6285150688320?text=${encodeURIComponent(message)}`;
      
      window.open(waUrl, '_blank');
      e.preventDefault();
    });
  });
}
