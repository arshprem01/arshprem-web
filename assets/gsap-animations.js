/* ============================================
   ARSH PREM — GSAP ANIMATION ENGINE
   Premium scroll-driven animations across all pages
   ============================================ */

// Wait for GSAP + ScrollTrigger to be ready
function initGSAP() {
  gsap.registerPlugin(ScrollTrigger);

  // --- Global Defaults ---
  gsap.defaults({
    ease: 'power3.out',
    duration: 1
  });

  // --- Navbar entrance ---
  gsap.from('.nav', {
    y: -100,
    opacity: 0,
    duration: 1,
    ease: 'power4.out',
    delay: 0.2
  });

  // --- Smooth reveal for all .anim elements (replaces IntersectionObserver) ---
  const animEls = document.querySelectorAll('.anim');
  animEls.forEach((el) => {
    // Compute stagger delay from anim-delay-N class
    let delay = 0;
    el.classList.forEach(cls => {
      const match = cls.match(/^anim-delay-(\d+)$/);
      if (match) delay = parseInt(match[1]) * 0.12;
    });

    gsap.fromTo(el,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        delay: delay,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 88%',
          toggleActions: 'play none none none',
          once: true
        }
      }
    );
  });

  // --- Hero Section: Grand Entrance Timeline ---
  const heroHeadlines = document.querySelectorAll('.hero-headline');
  const heroRow = document.querySelector('.hero-headline-row');

  if (heroHeadlines.length > 0) {
    const heroTL = gsap.timeline({ delay: 0.5 });

    // Headline letters clip-path reveal
    heroHeadlines.forEach((headline, i) => {
      heroTL.fromTo(headline,
        { clipPath: 'inset(100% 0 0 0)', y: 60 },
        { clipPath: 'inset(0% 0 0 0)', y: 0, duration: 1.2, ease: 'power4.out' },
        i * 0.15
      );
    });

    // Photo dramatic entrance
    const photoContainer = document.querySelector('.hero-photo-container');
    if (photoContainer) {
      heroTL.fromTo(photoContainer,
        { clipPath: 'inset(100% 0 0 0)', scale: 1.15 },
        { clipPath: 'inset(0% 0 0 0)', scale: 1, duration: 1.4, ease: 'power4.out' },
        0.3
      );

      // Photo parallax on scroll
      gsap.to('.hero-photo', {
        yPercent: 15,
        ease: 'none',
        scrollTrigger: {
          trigger: '.hero',
          start: 'top top',
          end: 'bottom top',
          scrub: 1
        }
      });
    }

    // Subtitle slide in from right
    const subtitle = document.querySelector('.hero-subtitle');
    if (subtitle) {
      heroTL.fromTo(subtitle,
        { x: 80, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.9, ease: 'power3.out' },
        0.7
      );
    }

    // Services stagger
    const services = document.querySelector('.hero-services');
    if (services) {
      heroTL.fromTo(services,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        0.9
      );
    }

    // Description fade
    const desc = document.querySelector('.hero-description');
    if (desc) {
      heroTL.fromTo(desc,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        1.1
      );
    }

    // Bottom bar slide up
    const bottom = document.querySelector('.hero-bottom');
    if (bottom) {
      heroTL.fromTo(bottom,
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9 },
        1.3
      );
    }
  }

  // --- Page Header: Dramatic Text Reveal ---
  const pageTitle = document.querySelector('.page-header-title');
  if (pageTitle) {
    const pageTL = gsap.timeline({ delay: 0.4 });

    const label = document.querySelector('.page-header-label');
    if (label) {
      pageTL.fromTo(label,
        { x: -40, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.7, ease: 'power3.out' },
        0
      );
    }

    pageTL.fromTo(pageTitle,
      { clipPath: 'inset(0 0 100% 0)', y: 40 },
      { clipPath: 'inset(0 0 0% 0)', y: 0, duration: 1.2, ease: 'power4.out' },
      0.15
    );

    const pageDesc = document.querySelector('.page-header-desc');
    if (pageDesc) {
      pageTL.fromTo(pageDesc,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        0.5
      );
    }
  }

  // --- Section Headers: Horizontal line + number count ---
  document.querySelectorAll('.section-header').forEach(header => {
    const number = header.querySelector('.section-number');
    const title = header.querySelector('.section-title');
    const subtitle = header.querySelector('.section-subtitle');

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: header,
        start: 'top 80%',
        toggleActions: 'play none none none',
        once: true
      }
    });

    if (number) {
      tl.fromTo(number,
        { opacity: 0, x: -20 },
        { opacity: 1, x: 0, duration: 0.6 },
        0
      );
    }

    if (title) {
      tl.fromTo(title,
        { clipPath: 'inset(0 0 100% 0)', y: 30 },
        { clipPath: 'inset(0 0 0% 0)', y: 0, duration: 1, ease: 'power4.out' },
        0.1
      );
    }

    if (subtitle) {
      tl.fromTo(subtitle,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7 },
        0.4
      );
    }
  });

  // --- Cards: Staggered reveal with slight rotation ---
  document.querySelectorAll('.grid-2, .grid-3').forEach(grid => {
    // Cards might be loaded dynamically, so we observe for them
    const revealCards = () => {
      const cards = grid.querySelectorAll('.card');
      if (cards.length === 0) return;

      gsap.fromTo(cards,
        { y: 80, opacity: 0, rotateX: 8 },
        {
          y: 0,
          opacity: 1,
          rotateX: 0,
          duration: 0.9,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: grid,
            start: 'top 85%',
            toggleActions: 'play none none none',
            once: true
          }
        }
      );
    };

    // Attempt immediately and also after a delay for CSV-loaded cards
    revealCards();
    setTimeout(revealCards, 800);
    setTimeout(revealCards, 1500);
  });

  // --- Experience Items: Slide in from left ---
  document.querySelectorAll('.exp-item').forEach((item, i) => {
    gsap.fromTo(item,
      { x: -60, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: item,
          start: 'top 88%',
          toggleActions: 'play none none none',
          once: true
        },
        delay: i * 0.08
      }
    );
  });

  // --- Skill Pills: Popcorn stagger ---
  const skillPills = document.querySelectorAll('.skill-pill');
  if (skillPills.length > 0) {
    gsap.fromTo(skillPills,
      { scale: 0, opacity: 0, rotation: -10 },
      {
        scale: 1,
        opacity: 1,
        rotation: 0,
        duration: 0.5,
        stagger: {
          each: 0.04,
          from: 'random'
        },
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: skillPills[0].parentElement,
          start: 'top 85%',
          toggleActions: 'play none none none',
          once: true
        }
      }
    );
  }

  // --- Buttons: Subtle hover scale ---
  document.querySelectorAll('.btn-primary, .btn-ghost').forEach(btn => {
    btn.addEventListener('mouseenter', () => {
      gsap.to(btn, { scale: 1.04, duration: 0.25, ease: 'power2.out' });
    });
    btn.addEventListener('mouseleave', () => {
      gsap.to(btn, { scale: 1, duration: 0.3, ease: 'power2.out' });
    });
  });

  // --- Footer: Slide up ---
  const footer = document.querySelector('.footer');
  if (footer) {
    gsap.fromTo(footer,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        scrollTrigger: {
          trigger: footer,
          start: 'top 95%',
          toggleActions: 'play none none none',
          once: true
        }
      }
    );
  }

  // --- Contact Form Fields: Stagger reveal ---
  const formGroups = document.querySelectorAll('.form-group');
  if (formGroups.length > 0) {
    gsap.fromTo(formGroups,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.7,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: formGroups[0],
          start: 'top 85%',
          toggleActions: 'play none none none',
          once: true
        }
      }
    );
  }

  // --- Magnetic hover for nav links ---
  document.querySelectorAll('.nav-link, .nav-contact').forEach(link => {
    link.addEventListener('mousemove', (e) => {
      const rect = link.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      gsap.to(link, {
        x: x * 0.2,
        y: y * 0.2,
        duration: 0.3,
        ease: 'power2.out'
      });
    });
    link.addEventListener('mouseleave', () => {
      gsap.to(link, { x: 0, y: 0, duration: 0.5, ease: 'elastic.out(1, 0.4)' });
    });
  });

  // --- Smooth section parallax for section backgrounds ---
  document.querySelectorAll('.section').forEach(section => {
    gsap.to(section, {
      backgroundPosition: '50% 30%',
      ease: 'none',
      scrollTrigger: {
        trigger: section,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1
      }
    });
  });

  // --- Horizontal line drawing on section borders ---
  document.querySelectorAll('.section-border').forEach(section => {
    gsap.fromTo(section,
      { borderTopColor: 'transparent' },
      {
        borderTopColor: 'var(--border)',
        duration: 1.5,
        ease: 'power2.inOut',
        scrollTrigger: {
          trigger: section,
          start: 'top 90%',
          toggleActions: 'play none none none',
          once: true
        }
      }
    );
  });

  // --- Card Image Hover Parallax ---
  document.querySelectorAll('.card').forEach(card => {
    const img = card.querySelector('.card-img-wrap img');
    if (!img) return;

    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      gsap.to(img, {
        x: x * 10,
        y: y * 10,
        duration: 0.4,
        ease: 'power2.out'
      });
    });

    card.addEventListener('mouseleave', () => {
      gsap.to(img, { x: 0, y: 0, duration: 0.6, ease: 'power2.out' });
    });
  });

  // --- Smooth scroll-based nav opacity ---  
  ScrollTrigger.create({
    start: 'top -80',
    end: 99999,
    onUpdate: (self) => {
      const nav = document.querySelector('.nav');
      if (!nav) return;
      if (self.direction === -1) {
        gsap.to(nav, { y: 0, duration: 0.3, ease: 'power2.out' });
      }
    }
  });
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initGSAP);
} else {
  initGSAP();
}
