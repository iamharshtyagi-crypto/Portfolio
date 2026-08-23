/* Harsh Tyagi Portfolio - Script Handler */

// CENTRALIZED PORTFOLIO DATA DEFINITION
const PORTFOLIO_DATA = {
  skills: [
    {
      category: "Programming Languages",
      icon: "code-2",
      items: [
        { name: "Python", icon: "braces" },
        { name: "C++", icon: "terminal" },
        { name: "C", icon: "terminal" },
        { name: "JavaScript", icon: "file-json-2" }
      ]
    },
    {
      category: "Web & Backend Technologies",
      icon: "globe",
      items: [
        { name: "HTML5", icon: "layout" },
        { name: "CSS3", icon: "palette" },
        { name: "FastAPI", icon: "zap" },
        { name: "Flask", icon: "cpu" }
      ]
    },
    {
      category: "Databases & ORM",
      icon: "database",
      items: [
        { name: "SQL", icon: "database" },
        { name: "PostgreSQL", icon: "database" },
        { name: "MySQL", icon: "database" },
        { name: "SQLite", icon: "database" },
        { name: "SQLAlchemy", icon: "link" },
        { name: "Pydantic", icon: "check-circle" }
      ]
    },
    {
      category: "Data Science, AI & ML",
      icon: "brain-circuit",
      items: [
        { name: "Machine Learning", icon: "brain" },
        { name: "Deep Learning", icon: "binary" },
        { name: "Computer Vision", icon: "eye" },
        { name: "YOLO", icon: "scan" },
        { name: "scikit-learn", icon: "pie-chart" },
        { name: "NumPy", icon: "activity" },
        { name: "Pandas", icon: "table" },
        { name: "Data Preprocessing", icon: "sliders" },
        { name: "DSA (Data Structures & Algos)", icon: "git-branch" }
      ]
    },
    {
      category: "Tools & Development",
      icon: "settings",
      items: [
        { name: "Git", icon: "git-merge" },
        { name: "GitHub", icon: "github" },
        { name: "Jupyter Notebook", icon: "book-open" },
        { name: "REST APIs", icon: "network" }
      ]
    }
  ],
  projects: [
    {
      name: "PashuScan",
      category: "AI / Computer Vision / Deep Learning",
      description: "An AI-based system for identifying cattle and buffalo breeds from images and webcam inputs. Built for model inference and confidence-based predictions.",
      features: [
        "Cattle breed recognition using deep learning",
        "Utilized a trained YOLO-based model",
        "Python-based Flask server for hosting model inference",
        "Provides real-time confidence scores and predictions"
      ],
      technologies: ["Python", "YOLO", "Flask", "Computer Vision", "OpenCV"],
      links: {
        github: "https://github.com/iamharshtyagi-crypto"
      }
    },
    {
      name: "Email Spam Classifier",
      category: "Machine Learning / NLP",
      description: "A machine learning solution focused on pre-processing, vectorizing, and classifying emails as spam or ham (legitimate).",
      features: [
        "Implemented standard natural language processing workflow",
        "Utilized TF-IDF feature extraction techniques",
        "Implemented classification algorithms via scikit-learn",
        "Interactive experiments documented in a Jupyter Notebook"
      ],
      technologies: ["Python", "scikit-learn", "Jupyter Notebook", "NLTK"],
      links: {
        github: "https://github.com/iamharshtyagi-crypto"
      }
    },
    {
      name: "Campus Food Stall Rating System",
      category: "Full-Stack Web Development",
      description: "A web application for discovering campus food stalls, allowing users to view menus, search for items, and leave dish-level reviews and ratings.",
      features: [
        "Modern and responsive web interface for campus food discovery",
        "FastAPI backend framework with full CRUD capabilities",
        "SQL database for storing user information, stalls, reviews, and ratings",
        "User authentication and authorization integration"
      ],
      technologies: ["HTML5", "CSS3", "JavaScript", "FastAPI", "SQL", "PostgreSQL"],
      links: {
        github: "https://github.com/iamharshtyagi-crypto"
      }
    },
    {
      name: "Plant Monitoring System for Kutki",
      category: "IoT / Embedded Systems (ECE Project)",
      description: "An IoT-based microcontroller system designed to monitor and log the environmental conditions optimized for Kutki, a high-value Himalayan medicinal herb.",
      features: [
        "Real-time sensor integration (soil moisture, temperature, humidity)",
        "Microcontroller data logging using ESP32/Arduino",
        "Optimized micro-climate tracking specifically for Kutki plant health",
        "Written in C++ for embedded systems with serial data visualization"
      ],
      technologies: ["C++", "Arduino", "ESP32", "IoT Sensors", "Python"],
      links: {
        github: "https://github.com/iamharshtyagi-crypto"
      }
    }
  ],
  certifications: [
    {
      title: "CS107: C++ Programming",
      organization: "Saylor Academy",
      date: "February 2026",
      details: "40 Hours Course | Final Grade: 85.00%",
      link: "certificates/Certificate02.pdf"
    },
    {
      title: "CodeXtreme 4.0 - C Programming",
      organization: "NeoColab & LPU",
      date: "April 2026",
      details: "Top 30 Position in LPU-wide Coding Hackathon",
      link: "certificates/CodeXtreme_Certificate_@neocolab.pdf"
    },
    {
      title: "Computer Programming (CSE101)",
      organization: "NeoColab / Lovely Professional University",
      date: "May 2026",
      details: "150 Hours Coursework (18-Jan-2026 to 20-May-2026)",
      link: "certificates/CSE101_2029_E Certificate_@neocolab.pdf"
    },
    {
      title: "Introduction to Cyber Security",
      organization: "Infosys Springboard",
      date: "March 2026",
      details: "Fundamental security protocols, digital threat modeling, and cryptography",
      link: "certificates/Certificate01.pdf"
    },
    {
      title: "Effective Time Management",
      organization: "Tech Veda",
      date: "October 2025",
      details: "5 Hours MOOC covering project planning and priority management",
      link: "certificates/Certificate03.pdf"
    }
  ],
  achievements: [
    {
      category: "Academic Performance",
      icon: "graduation-cap",
      items: [
        "B.Tech CSE (AI & ML) at LPU: Current <span class='achievement-highlight'>CGPA 9.60 / 10.00</span>",
        "Class XII Board Examination: <span class='achievement-highlight'>93.8%</span>",
        "Class X Board Examination: <span class='achievement-highlight'>96.4%</span>"
      ]
    },
    {
      category: "Competitive Coding & Hackathons",
      icon: "trophy",
      items: [
        "Stood in the <span class='achievement-highlight'>Top 30 Position</span> in the CodeXtreme 4.0 - C Programming hackathon out of numerous participants.",
        "Participated in the <span class='achievement-highlight'>Resurgence Hackathon</span>, an official competition under the banner of Cognitia 2026.",
        "Active problem solving and DSA practice on LeetCode (<a href='https://leetcode.com/u/iamharshtyagi121/' target='_blank' class='achievement-link'>View Profile <i data-lucide='external-link'></i></a>)."
      ]
    },
    {
      category: "Technical Development",
      icon: "terminal",
      items: [
        "Developed custom computer vision system (PashuScan) and IoT hardware monitors (Kutki System).",
        "Explored and implemented FastAPI backend databases with user authentication.",
        "Continuously expanding algorithms, Python frameworks, and machine learning models."
      ]
    }
  ]
};

// DYNAMIC RENDER FUNCTIONS
function renderSkills() {
  const container = document.getElementById("skills-container");
  if (!container) return;
  
  container.innerHTML = PORTFOLIO_DATA.skills.map(cat => `
    <div class="skills-category glass-card">
      <h3 class="skills-category-title">
        <i data-lucide="${cat.icon}"></i>
        ${cat.category}
      </h3>
      <div class="skills-list">
        ${cat.items.map(skill => {
          if (skill.icon === 'github') {
            return `
              <span class="skill-tag">
                <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 6px;"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                ${skill.name}
              </span>
            `;
          }
          return `
            <span class="skill-tag">
              <i data-lucide="${skill.icon}"></i>
              ${skill.name}
            </span>
          `;
        }).join('')}
      </div>
    </div>
  `).join('');
}

function renderProjects() {
  const container = document.getElementById("projects-container");
  if (!container) return;
  
  container.innerHTML = PORTFOLIO_DATA.projects.map(proj => `
    <div class="project-card glass-card">
      <div class="project-body">
        <span class="project-category">${proj.category}</span>
        <h3 class="project-name">${proj.name}</h3>
        <p class="project-description">${proj.description}</p>
        
        <div class="project-features">
          ${proj.features.map(feat => `
            <div class="project-feature-item">
              <i data-lucide="check-circle-2"></i>
              <span>${feat}</span>
            </div>
          `).join('')}
        </div>
        
        <div class="project-tech">
          ${proj.technologies.map(tech => `
            <span class="project-tech-badge">${tech}</span>
          `).join('')}
        </div>
      </div>
      
      <div class="project-footer">
        ${proj.links.github ? `
          <a href="${proj.links.github}" target="_blank" class="btn btn-secondary btn-sm">
            <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 4px;"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg> GitHub
          </a>
        ` : ''}
        ${proj.links.demo ? `
          <a href="${proj.links.demo}" target="_blank" class="btn btn-primary btn-sm">
            <i data-lucide="external-link"></i> Live Demo
          </a>
        ` : ''}
      </div>
    </div>
  `).join('');
}

function renderCertifications() {
  const container = document.getElementById("certifications-container");
  if (!container) return;
  
  container.innerHTML = PORTFOLIO_DATA.certifications.map(cert => `
    <div class="certification-card glass-card">
      <div class="cert-header">
        <div class="cert-icon">
          <i data-lucide="award"></i>
        </div>
        <div class="cert-meta">
          <h3 class="cert-title">${cert.title}</h3>
          <span class="cert-org">${cert.organization}</span>
        </div>
      </div>
      <div class="cert-details">
        <span>${cert.date}</span>
      </div>
      <p style="font-size: 0.9rem; color: var(--text-secondary); margin-top: 6px;">${cert.details}</p>
      
      <div class="cert-actions">
        ${cert.link ? `
          <a href="${cert.link}" target="_blank" class="btn btn-secondary btn-sm" style="width: 100%;">
            <i data-lucide="external-link"></i> View Certificate
          </a>
        ` : ''}
      </div>
    </div>
  `).join('');
}

function renderAchievements() {
  const container = document.getElementById("achievements-container");
  if (!container) return;
  
  container.innerHTML = PORTFOLIO_DATA.achievements.map(ach => `
    <div class="achievement-card glass-card">
      <div class="achievement-header">
        <div class="achievement-icon-wrapper">
          <i data-lucide="${ach.icon}"></i>
        </div>
        <h3 class="achievement-category">${ach.category}</h3>
      </div>
      <ul class="achievement-list">
        ${ach.items.map(item => `
          <li class="achievement-item">${item}</li>
        `).join('')}
      </ul>
    </div>
  `).join('');
}

// SIMULATED TERMINAL CODE EFFECT
const terminalCodeLines = [
  { text: "# Initializing Developer Environment...", isComment: true },
  { text: "import developer as dev", isCode: true },
  { text: "import lpu_student as student", isCode: true },
  { text: "", isCode: true },
  { text: "harsh = dev.Developer(name='Harsh Tyagi')", isCode: true },
  { text: "harsh.education = 'B.Tech CSE (AI & ML)'", isCode: true },
  { text: "harsh.university = 'Lovely Professional University'", isCode: true },
  { text: "harsh.cgpa = 9.60", isCode: true },
  { text: "", isCode: true },
  { text: "harsh.skills = [", isCode: true },
  { text: "    'Python', 'C++', 'FastAPI',", isCode: true, isIndent: true },
  { text: "    'Machine Learning', 'Computer Vision'", isCode: true, isIndent: true },
  { text: "]", isCode: true },
  { text: "", isCode: true },
  { text: "# Running breed detection test...", isComment: true },
  { text: "model = dev.load_model('PashuScan_yolov8')", isCode: true },
  { text: "print(model.predict('cattle_sample.jpg'))", isCode: true },
  { text: ">> ['Sahiwal Cattle', Confidence: 94.2%]", isOutput: true },
  { text: "", isCode: true },
  { text: "harsh.status = 'Ready for Internships & Collaborations!'", isCode: true },
  { text: "print(harsh.status)", isCode: true },
  { text: ">> 'Ready for Internships & Collaborations!'", isOutput: true }
];

function runTerminalSimulation() {
  const terminalBody = document.getElementById("terminal-body");
  if (!terminalBody) return;
  
  terminalBody.innerHTML = "";
  let lineIndex = 0;
  
  function printNextLine() {
    if (lineIndex >= terminalCodeLines.length) {
      // Loop the terminal animation after a long pause
      setTimeout(() => {
        runTerminalSimulation();
      }, 5000);
      return;
    }
    
    const line = terminalCodeLines[lineIndex];
    const lineElement = document.createElement("div");
    lineElement.className = "terminal-line";
    
    if (line.isComment) {
      lineElement.innerHTML = `<span class="terminal-comment">${line.text}</span>`;
    } else if (line.isOutput) {
      lineElement.innerHTML = `<span class="terminal-string" style="color: #38bdf8;">${line.text}</span>`;
    } else {
      // Format simple code line
      let html = `<span class="terminal-prompt">&gt;</span>`;
      let text = line.text;
      
      // Basic syntax highlight regexes
      text = text.replace(/(import|as|from|class|def|return|if|for|in|import)/g, '<span class="terminal-keyword">$1</span>');
      text = text.replace(/('([^'\\]|\\.)*')/g, '<span class="terminal-string">$1</span>');
      text = text.replace(/([0-9\.]+)/g, '<span class="terminal-number">$1</span>');
      
      lineElement.innerHTML = `${html}<span class="terminal-content" style="${line.isIndent ? 'padding-left: 20px;' : ''}">${text}</span>`;
    }
    
    terminalBody.appendChild(lineElement);
    
    // Auto-scroll terminal body
    terminalBody.scrollTop = terminalBody.scrollHeight;
    
    lineIndex++;
    
    // Vary typing speed depending on if output or code
    const delay = line.isOutput ? 200 : (line.text.length === 0 ? 100 : 350);
    setTimeout(printNextLine, delay);
  }
  
  printNextLine();
}

// HERO HEADLINE TYPEWRITER EFFECT
const typingPhrases = [
  "B.Tech CSE (AI & ML) Student",
  "Developer",
  "AI/ML Enthusiast",
  "Backend Systems Builder",
  "Problem Solver"
];

function initTypewriter() {
  const element = document.getElementById("typewriter-text");
  if (!element) return;
  
  let phraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  
  function type() {
    const currentPhrase = typingPhrases[phraseIndex];
    
    if (isDeleting) {
      element.textContent = currentPhrase.substring(0, charIndex - 1);
      charIndex--;
    } else {
      element.textContent = currentPhrase.substring(0, charIndex + 1);
      charIndex++;
    }
    
    let typingSpeed = 100;
    
    if (isDeleting) {
      typingSpeed /= 2; // Delete faster
    }
    
    if (!isDeleting && charIndex === currentPhrase.length) {
      typingSpeed = 2000; // Pause at the end of word
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % typingPhrases.length;
      typingSpeed = 500; // Pause before typing next word
    }
    
    setTimeout(type, typingSpeed);
  }
  
  type();
}

// ACTIVE NAVIGATION SCROLL SPIES
function handleScrollSpy() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-links a");
  const mobileLinks = document.querySelectorAll(".mobile-nav a");
  
  window.addEventListener("scroll", () => {
    let currentId = "";
    const scrollY = window.pageYOffset;
    
    sections.forEach(sec => {
      const sectionHeight = sec.offsetHeight;
      const sectionTop = sec.offsetTop - 120; // Offset for navbar
      
      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        currentId = sec.getAttribute("id");
      }
    });
    
    function updateActive(links) {
      links.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${currentId}`) {
          link.classList.add("active");
        }
      });
    }
    
    updateActive(navLinks);
    updateActive(mobileLinks);
  });
}

// SCROLL ANIMATIONS REVEAL EFFECT
function initScrollReveal() {
  const revealSections = document.querySelectorAll("section, .glass-card");
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
  });
  
  revealSections.forEach(sec => {
    sec.classList.add("fade-in-section");
    observer.observe(sec);
  });
}

// CORE INITIALIZATION
document.addEventListener("DOMContentLoaded", () => {
  // 1. Render all lists
  renderSkills();
  renderProjects();
  renderCertifications();
  renderAchievements();
  
  // 2. Initialize Lucide Icons for both static and dynamic HTML
  if (window.lucide) {
    window.lucide.createIcons();
  }
  
  // 3. Start animation modules
  initTypewriter();
  runTerminalSimulation();
  initScrollReveal();
  handleScrollSpy();
  
  // 4. Hamburger menu toggle behavior
  const hamburger = document.getElementById("hamburger");
  const mobileNav = document.getElementById("mobile-nav");
  
  if (hamburger && mobileNav) {
    hamburger.addEventListener("click", () => {
      const isOpen = mobileNav.style.display === "flex";
      mobileNav.style.display = isOpen ? "none" : "flex";
      
      // Update hamburger icon
      hamburger.innerHTML = isOpen 
        ? `<i data-lucide="menu"></i>` 
        : `<i data-lucide="x"></i>`;
      window.lucide.createIcons();
    });
    
    // Close mobile nav when clicking a link
    mobileNav.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        mobileNav.style.display = "none";
        hamburger.innerHTML = `<i data-lucide="menu"></i>`;
        window.lucide.createIcons();
      });
    });
  }
  
  // 5. Theme Toggle Logic
  const themeToggle = document.getElementById("toggle-theme");
  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const isLight = document.body.classList.toggle("light-mode");
      themeToggle.innerHTML = isLight 
        ? `<i data-lucide="moon"></i>` 
        : `<i data-lucide="sun"></i>`;
      window.lucide.createIcons();
    });
  }
  
  // 6. Contact Form Validation and Handler
  const contactForm = document.getElementById("contact-form");
  const formStatus = document.getElementById("form-status");
  
  if (contactForm && formStatus) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      
      const name = document.getElementById("form-name").value.trim();
      const email = document.getElementById("form-email").value.trim();
      const message = document.getElementById("form-message").value.trim();
      
      if (!name || !email || !message) {
        formStatus.textContent = "Please fill in all fields.";
        formStatus.className = "form-status error";
        return;
      }
      
      // Custom form visual feedback indicating local check success
      formStatus.textContent = "Thank you! Message prepared. No backend is configured, but this form is ready for integration.";
      formStatus.className = "form-status success";
      
      // Reset form fields
      contactForm.reset();
      
      // Clear status message after 6 seconds
      setTimeout(() => {
        formStatus.style.display = "none";
        formStatus.className = "form-status";
      }, 6000);
    });
  }
});