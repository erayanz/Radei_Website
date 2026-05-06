/* ============================================================
   RADEI — Main JavaScript
   radei.sa | Bilingual · Animated · Responsive
   ============================================================ */

'use strict';

/* ─── TRANSLATIONS ───────────────────────────────────────────── */
const T = {
  en: {
    /* NAV */
    'nav.about':      'About',
    'nav.how':        'How It Works',
    'nav.sectors':    'Sectors',
    'nav.team':       'Team',
    'nav.partners':   'Partners',
    'nav.contact':    'Contact',
    'nav.cta':        'Get In Touch',

    /* HERO */
    'hero.eyebrow':   'Smart Ground Sensor System',
    'hero.title':     'RADEI',
    'hero.subtitle':  'منظومة المستشعرات الأرضية الذكية',
    'hero.tagline':   'From Reactive TO Proactive',
    'hero.cta1':      'Discover More',
    'hero.cta2':      'Contact Us',
    'hero.scroll':    'Scroll',

    /* ABOUT */
    'about.label':    'Who We Are',
    'about.title':    'Defence That Matters',
    'about.subtitle': 'RADEI delivers advanced defence technology and services that safeguard nations, critical assets, and lives, through precision, innovation, and unwavering commitment.',
    'about.mission.title': 'Mission',
    'about.mission.text':  'To deliver advanced defence technology and services that safeguard nations, assets, and lives with precision and innovation.',
    'about.vision.title':  'Vision',
    'about.vision.text':   'To be the trusted leader in defence solutions, protecting the world through cutting-edge technology and unwavering integrity.',
    'about.values.title':  'Values',
    'about.values.text':   'Integrity · Excellence · Precision · Innovation · Commitment — the principles that guide every decision we make.',

    /* PROBLEM / SOLUTION */
    'ps.label':          'The Challenge',
    'ps.title':          'Blind Spots In Security',
    'ps.problem.title':  'The Problem',
    'ps.problem.text':   'Wide-open areas: nature reserves, border zones, and critical infrastructure, suffer from security blind spots. Traditional systems are reactive: intrusions are discovered only after damage has occurred.',
    'ps.solution.title': 'The Solution',
    'ps.solution.text':  'RADEI deploys an invisible network of underground seismic sensors that silently monitor ground vibrations 24/7. AI-powered signal processing classifies every threat in real time, before it becomes a crisis.',
    'dot.human':   'HUMAN',
    'dot.vehicle': 'VEHICLE',
    'dot.animal':  'ANIMAL',
    'dot.dig':     'DIGGING',
    'dot.noise':   'NOISE',

    /* HOW IT WORKS */
    'how.label':        'Process',
    'how.title':        'How RADEI Works',
    'how.subtitle':     'Three intelligent stages transform raw ground vibrations into decisive security intelligence.',
    'step1.num': '01', 'step1.title': 'Sense',    'step1.desc': 'Underground seismic sensors capture ground vibrations with ultra-high sensitivity and transmit low-power signals to the field gateway.',
    'step2.num': '02', 'step2.title': 'Understand', 'step2.desc': 'Advanced signal processing and machine learning classify the source: human, vehicle, animal, digging, or environmental noise, and assess threat level.',
    'step3.num': '03', 'step3.title': 'Guide',    'step3.desc': 'Real-time map display presents the optimal response: redirect camera, dispatch drone, or mobilize patrol, exactly where it\'s needed.',

    /* DETECTION */
    'det.label':    'Detection',
    'det.title':    'What RADEI Detects',
    'det.subtitle': 'Our AI engine classifies every ground vibration signature into five distinct threat categories.',
    'det.human':    'Human',
    'det.vehicle':  'Vehicle',
    'det.animal':   'Animal',
    'det.digging':  'Digging',
    'det.noise':    'Noise',

    /* SECTORS */
    'sec.label':    'Target Clients',
    'sec.title':    'Built For Those Who Protect',
    'sec.subtitle': 'RADEI is purpose-built for Saudi Arabia\'s most critical security stakeholders.',
    'sec1.name':  'Royal Commission for AlUla',     'sec1.desc': 'Archaeological site protection',
    'sec2.name':  'Saudi Aramco',                   'sec2.desc': 'Oil infrastructure security',
    'sec3.name':  'Saudi Border Guard',             'sec3.desc': 'Perimeter & border monitoring',
    'sec4.name':  'Ministry of Environment',        'sec4.desc': 'Environmental zone protection',
    'sec5.name':  'National Center for Wildlife',   'sec5.desc': 'Nature reserve boundary protection',
    'sec6.name':  'Environmental Security Forces',  'sec6.desc': 'Field response & patrol support',

    /* METRICS */
    'met.label':    'Market Intelligence',
    'met.title':    'A Growing Global Imperative',
    'met.subtitle': 'The global perimeter security market is expanding rapidly, and RADEI is positioned at the forefront.',
    'met1.val': '$64.6B', 'met1.label': 'Global Market Size 2022',   'met1.sub': 'Perimeter Security',
    'met2.val': '$132.4B','met2.label': 'Projected Market 2030',      'met2.sub': 'Perimeter Security',
    'met3.val': '9.4%',   'met3.label': 'Annual Growth Rate (CAGR)',  'met3.sub': '2022 – 2030',
    'met4.val': '8',      'met4.label': 'Nature Reserves in Target',  'met4.sub': 'Saudi Arabia',

    /* TEAM */
    'team.label':    'The Team',
    'team.title':    'Built By Experts',
    'team.subtitle': 'A multidisciplinary team of engineers in defence, mechatronics, cybersecurity, and geophysics — united by a mission to protect.',
    'team.linkedin': 'LinkedIn',
    'mem1.name':  'Saud AlMalki',    'mem1.role': 'Aviation & Mechatronics Engineer',  'mem1.bio': 'Specializes in electromechanical systems, sensor integration, and hardware design for defence applications.',
    'mem2.name':  'Rayan AlZahrani', 'mem2.role': 'Computer & Cybersecurity Engineer', 'mem2.bio': 'Leads software architecture, AI-based signal processing, and cybersecurity protocols for the RADEI platform.',
    'mem3.name':  'Naif AlMojel',    'mem3.role': 'Mechanical Engineer',               'mem3.bio': 'Specializes in mechanical systems design and industrial production, with awards in engineering excellence and tech entrepreneurship.',
    'mem4.name':  'Nawaf Bawazir',   'mem4.role': 'Geophysics Specialist',             'mem4.bio': 'Specializes in physical property analysis and earth data processing, supporting sensing systems, exploration, and geophysical analysis.',

    /* PARTNERS */
    'par.label':    'Strategic Partners',
    'par.title':    'Backed By The Best',
    'par.subtitle': 'RADEI is supported by world-class academic and innovation institutions.',
    'par1.name':  'King Fahd University of Petroleum & Minerals',
    'par2.name':  '1K Mile Program — The Thousand Mile',

    /* CONTACT */
    'con.label':    'Contact',
    'con.title':    'Let\'s Start a Conversation',
    'con.subtitle': 'Whether you\'re an investor, government agency, or strategic partner, we\'d like to hear from you.',
    'con.email.label':   'Email',
    'con.domain.label':  'Website',
    'con.brand.label':   'Brand & Media',
    'form.name':    'Full Name',
    'form.email':   'Email Address',
    'form.org':     'Organization',
    'form.msg':     'Message',
    'form.submit':  'Send Message',
    'form.name.ph':  'Your full name',
    'form.email.ph': 'your@email.com',
    'form.org.ph':   'Organization / Agency',
    'form.msg.ph':   'How can we help you?',

    /* FOOTER */
    'footer.copy': '© 2026 RADEI. All rights reserved.',
  },

  ar: {
    /* NAV */
    'nav.about':      'من نحن',
    'nav.how':        'آلية العمل',
    'nav.sectors':    'القطاعات',
    'nav.team':       'الفريق',
    'nav.partners':   'الشركاء',
    'nav.contact':    'تواصل',
    'nav.cta':        'تواصل معنا',

    /* HERO */
    'hero.eyebrow':  'منظومة المستشعرات الأرضية الذكية',
    'hero.title':    'رادع',
    'hero.subtitle': 'Smart Ground Sensor System',
    'hero.tagline':  'من رد الفعل إلى الاستباقية',
    'hero.cta1':     'اكتشف أكثر',
    'hero.cta2':     'تواصل معنا',
    'hero.scroll':   'انتقل للأسفل',

    /* ABOUT */
    'about.label':    'من نحن',
    'about.title':    'دفاع يستحق',
    'about.subtitle': 'رادع يُقدّم تقنيات وخدمات دفاعية متقدمة تحمي الأوطان والأصول الحيوية والأرواح، من خلال الدقة والابتكار والالتزام الراسخ.',
    'about.mission.title': 'الرسالة',
    'about.mission.text':  'تقديم تقنيات وخدمات دفاعية متقدمة تحمي الأوطان والأصول والأرواح بدقة عالية وابتكار مستمر.',
    'about.vision.title':  'الرؤية',
    'about.vision.text':   'أن نكون الشريك الموثوق في الحلول الدفاعية، نحمي العالم من خلال التقنية الرائدة والنزاهة التامة.',
    'about.values.title':  'القيم',
    'about.values.text':   'النزاهة · التميز · الدقة · الابتكار · الالتزام، المبادئ التي توجّه كل قرار نتخذه.',

    /* PROBLEM / SOLUTION */
    'ps.label':          'التحدي',
    'ps.title':          'نقاط عمياء في المنظومة الأمنية',
    'ps.problem.title':  'المشكلة',
    'ps.problem.text':   'المساحات الشاسعة: المحميات الطبيعية، مناطق الحدود، والبنية التحتية الحيوية، تعاني من نقاط عمياء أمنية. الأنظمة التقليدية تعتمد رد الفعل: يُكتشف الاختراق فقط بعد وقوع الضرر.',
    'ps.solution.title': 'الحل',
    'ps.solution.text':  'يُنشر رادع شبكة غير مرئية من المستشعرات الزلزالية الأرضية تراقب الاهتزازات بصمت على مدار الساعة. تُصنّف المعالجة الذكية كل تهديد في الوقت الفعلي، قبل أن يتحول إلى أزمة.',
    'dot.human':   'إنسان',
    'dot.vehicle': 'مركبة',
    'dot.animal':  'حيوان',
    'dot.dig':     'حفر',
    'dot.noise':   'ضوضاء',

    /* HOW IT WORKS */
    'how.label':        'آلية العمل',
    'how.title':        'كيف يعمل رادع',
    'how.subtitle':     'ثلاث مراحل ذكية تحوّل الاهتزازات الأرضية الخام إلى استخبارات أمنية حاسمة.',
    'step1.num': '٠١', 'step1.title': 'الاستشعار', 'step1.desc': 'تلتقط المستشعرات الزلزالية الأرضية اهتزازات التربة بحساسية فائقة وترسل إشارات منخفضة الطاقة إلى البوابة الميدانية.',
    'step2.num': '٠٢', 'step2.title': 'الفهم',      'step2.desc': 'تُحلّل معالجة الإشارات المتقدمة وتعلّم الآلة مصدر الاهتزاز: إنسان، مركبة، حيوان، حفر، أو ضوضاء، وتُقيّم مستوى التهديد.',
    'step3.num': '٠٣', 'step3.title': 'التوجيه',   'step3.desc': 'يعرض الخريطة الآنية الاستجابة المثلى: توجيه الكاميرا، إطلاق الطائرة المسيّرة، أو تحريك دورية، في المكان المحدد بدقة.',

    /* DETECTION */
    'det.label':    'الكشف',
    'det.title':    'ما الذي يرصده رادع',
    'det.subtitle': 'يُصنّف محرّك الذكاء الاصطناعي كل بصمة اهتزاز أرضي إلى خمس فئات تهديد متمايزة.',
    'det.human':    'إنسان',
    'det.vehicle':  'مركبة',
    'det.animal':   'حيوان',
    'det.digging':  'حفر',
    'det.noise':    'ضوضاء',

    /* SECTORS */
    'sec.label':    'العملاء المستهدفون',
    'sec.title':    'بُني لمن يحمي',
    'sec.subtitle': 'رادع مُصمَّم خصيصاً لأبرز الجهات الأمنية والاستراتيجية في المملكة العربية السعودية.',
    'sec1.name':  'الهيئة الملكية لمحافظة العُلا',   'sec1.desc': 'حماية المواقع الأثرية',
    'sec2.name':  'أرامكو السعودية',                  'sec2.desc': 'أمن البنية التحتية النفطية',
    'sec3.name':  'حرس الحدود السعودي',               'sec3.desc': 'مراقبة الحدود والمحيط',
    'sec4.name':  'وزارة البيئة والمياه والزراعة',    'sec4.desc': 'حماية المناطق البيئية',
    'sec5.name':  'المركز الوطني لتنمية الحياة الفطرية', 'sec5.desc': 'حماية حدود المحميات',
    'sec6.name':  'قوات الأمن البيئي الخاصة',         'sec6.desc': 'الاستجابة الميدانية ودعم الدوريات',

    /* METRICS */
    'met.label':    'استخبارات السوق',
    'met.title':    'حاجة عالمية متنامية',
    'met.subtitle': 'سوق الأمن المحيطي العالمي في توسع متسارع، ورادع في طليعة المنافسين.',
    'met1.val': '64.6 مليار $', 'met1.label': 'حجم السوق العالمي 2022',      'met1.sub': 'أمن المحيط',
    'met2.val': '132.4 مليار $','met2.label': 'السوق المتوقع 2030',           'met2.sub': 'أمن المحيط',
    'met3.val': '9.4%',          'met3.label': 'معدل النمو السنوي المركب',    'met3.sub': '2022 – 2030',
    'met4.val': '٨',             'met4.label': 'محميات طبيعية مستهدفة',      'met4.sub': 'المملكة العربية السعودية',

    /* TEAM */
    'team.label':    'الفريق',
    'team.title':    'بُني بأيدي خبراء',
    'team.subtitle': 'فريق من المهندسين المتخصصين في الدفاع والميكاترونيكس والأمن السيبراني والجيوفيزياء.',
    'team.linkedin': 'LinkedIn',
    'mem1.name':  'سعود المالكي',    'mem1.role': 'مهندس طيران وميكاترونيكس',   'mem1.bio': 'متخصص في الأنظمة الكهروميكانيكية وتكامل المستشعرات وتصميم الأجهزة للتطبيقات الدفاعية.',
    'mem2.name':  'ريان الزهراني',   'mem2.role': 'مهندس حاسب وأمن سيبراني',    'mem2.bio': 'يقود هندسة البرمجيات ومعالجة الإشارات بالذكاء الاصطناعي وبروتوكولات الأمن السيبراني لمنصة رادع.',
    'mem3.name':  'نايف المعجل',     'mem3.role': 'مهندس ميكانيكي',             'mem3.bio': 'متخصص في تصميم الأنظمة الميكانيكية والإنتاج الصناعي، وحاصل على جوائز في التميز الهندسي وريادة الأعمال التقنية.',
    'mem4.name':  'نواف باوزير',     'mem4.role': 'أخصائي جيوفيزياء',           'mem4.bio': 'متخصص في تحليل الخصائص الفيزيائية ومعالجة البيانات الأرضية، مما يدعم أنظمة الاستشعار والتنقيب والتحليل الجيوفيزيائي.',

    /* PARTNERS */
    'par.label':    'الشراكات الاستراتيجية',
    'par.title':    'بدعم من الأفضل',
    'par.subtitle': 'يحظى رادع بدعم مؤسسات أكاديمية وابتكارية ذات مستوى عالمي.',
    'par1.name':  'جامعة الملك فهد للبترول والمعادن',
    'par2.name':  'برنامج الألف ميل',

    /* CONTACT */
    'con.label':    'تواصل',
    'con.title':    'لنبدأ حواراً',
    'con.subtitle': 'سواء كنت مستثمراً، جهة حكومية، أو شريكاً استراتيجياً، يسعدنا الاستماع إليك.',
    'con.email.label':   'البريد الإلكتروني',
    'con.domain.label':  'الموقع الإلكتروني',
    'con.brand.label':   'الهوية والإعلام',
    'form.name':    'الاسم الكامل',
    'form.email':   'البريد الإلكتروني',
    'form.org':     'الجهة / المنظمة',
    'form.msg':     'الرسالة',
    'form.submit':  'إرسال الرسالة',
    'form.name.ph':  'اسمك الكامل',
    'form.email.ph': 'بريدك@المثال.com',
    'form.org.ph':   'الجهة / الوكالة',
    'form.msg.ph':   'كيف يمكننا مساعدتك؟',

    /* FOOTER */
    'footer.copy': '© ٢٠٢٦ رادع. جميع الحقوق محفوظة.',
  }
};

/* ─── STATE ──────────────────────────────────────────────────── */
let currentLang = localStorage.getItem('radei-lang') || 'ar';

/* ─── APPLY LANGUAGE ─────────────────────────────────────────── */
function applyLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('radei-lang', lang);

  const html = document.documentElement;
  html.lang = lang;
  html.dir  = lang === 'ar' ? 'rtl' : 'ltr';

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (T[lang][key] !== undefined) el.textContent = T[lang][key];
  });

  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const key = el.dataset.i18nPh;
    if (T[lang][key] !== undefined) el.placeholder = T[lang][key];
  });

  document.querySelectorAll('[data-dot-label]').forEach(el => {
    const key = el.dataset.dotLabel;
    if (T[lang][key] !== undefined) el.dataset.label = T[lang][key];
  });

  /* Update lang buttons */
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
}

/* ─── NAVBAR SCROLL ──────────────────────────────────────────── */
function initNavbar() {
  const navbar = document.querySelector('.navbar');
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a, .nav-mobile a');

  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 20);

    let current = '';
    sections.forEach(sec => {
      if (window.scrollY >= sec.offsetTop - 120) current = sec.id;
    });
    navLinks.forEach(a => {
      a.classList.toggle('active', a.getAttribute('href') === '#' + current);
    });
  }, { passive: true });
}

/* ─── HAMBURGER MENU ─────────────────────────────────────────── */
function initHamburger() {
  const btn    = document.querySelector('.nav-hamburger');
  const mobile = document.querySelector('.nav-mobile');
  if (!btn || !mobile) return;

  btn.addEventListener('click', () => {
    const open = btn.classList.toggle('open');
    mobile.classList.toggle('open', open);
    btn.setAttribute('aria-expanded', open);
    document.body.style.overflow = open ? 'hidden' : '';
  });

  mobile.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      btn.classList.remove('open');
      mobile.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    });
  });
}

/* ─── SCROLL REVEAL ──────────────────────────────────────────── */
function initScrollReveal() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

/* ─── COUNTER ANIMATION ──────────────────────────────────────── */
function animateCounter(el, target, prefix, suffix, duration) {
  const start = performance.now();
  const isFloat = target % 1 !== 0;

  const tick = now => {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const ease = 1 - Math.pow(1 - progress, 4);
    const value = ease * target;
    el.textContent = prefix + (isFloat ? value.toFixed(1) : Math.floor(value)) + suffix;
    if (progress < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

function initCounters() {
  const metrics = [
    { selector: '#m1', target: 64.6,  prefix: '$', suffix: 'B', duration: 1800 },
    { selector: '#m2', target: 132.4, prefix: '$', suffix: 'B', duration: 1800 },
    { selector: '#m3', target: 9.4,   prefix: '',  suffix: '%', duration: 1600 },
    { selector: '#m4', target: 8,     prefix: '',  suffix: '',  duration: 1200 },
  ];

  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting && !e.target.dataset.animated) {
        e.target.dataset.animated = '1';
        const cfg = metrics.find(m => e.target.matches(m.selector));
        if (cfg) animateCounter(e.target, cfg.target, cfg.prefix, cfg.suffix, cfg.duration);
      }
    });
  }, { threshold: 0.5 });

  metrics.forEach(({ selector }) => {
    const el = document.querySelector(selector);
    if (el) observer.observe(el);
  });
}

/* ─── CONTACT FORM ───────────────────────────────────────────── */
function initForm() {
  /* mailto: form — submits natively via the user's email client */
}

/* ─── SMOOTH SCROLL ──────────────────────────────────────────── */
function initSmoothScroll() {
  const NAV_H = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-height')) || 72;
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const href = a.getAttribute('href');
      const target = document.querySelector(href);
      if (!target || href === '#') return;
      e.preventDefault();
      const top = target.getBoundingClientRect().top + window.scrollY - NAV_H;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });
}

/* ─── LANG TOGGLE ────────────────────────────────────────────── */
function initLangToggle() {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => applyLanguage(btn.dataset.lang));
  });
}

/* ─── INIT ───────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  applyLanguage(currentLang);
  initNavbar();
  initHamburger();
  initScrollReveal();
  initCounters();
  initForm();
  initSmoothScroll();
  initLangToggle();
});
