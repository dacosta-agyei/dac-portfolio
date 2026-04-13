// ─── Site-wide content data ────────────────────────────────────────────────

export const SITE_URL = 'https://dacostaagyei.com'

export const person = {
  name: 'DaCosta Agyei',
  firstName: 'DaCosta',
  lastName: 'Agyei',
  title: 'AI Engineer & Full-Stack Developer',
  location: 'Accra, Ghana',
  timezone: 'UTC+0',
  email: 'ohenebadac@gmail.com',
  phone: '+233 548 157 455',
  whatsapp: 'https://wa.me/233548157455',
  linkedin: 'https://linkedin.com/in/dacosta-agyei',
  github: 'https://github.com/dacosta-agyei',
  portfolio: SITE_URL,
  available: true,
  bio: `I'm an AI Engineer and Full-Stack Systems Engineer based in Accra, Ghana, with 6+ years of experience building production-grade intelligent applications. I specialise in the intersection of machine learning and software engineering — turning complex AI models into reliable, scalable products that real users depend on.

From real-time computer vision pipelines to NLP-powered enterprise tools, full-stack marketplaces to blockchain wallets, I've shipped systems end-to-end. I'm comfortable leading teams, working async across time zones, and communicating with both technical and non-technical stakeholders.

I'm fully open to remote opportunities worldwide — if you need an engineer who builds, ships, and thinks, let's talk.`,
  shortBio: 'AI Engineer & Full-Stack Developer building intelligent systems. Open to remote work globally.',
  roles: [
    'Machine Learning Engineer',
    'AI Systems Engineer',
    'Full-Stack Developer',
    'Flutter & Mobile Engineer',
    'Remote Engineer · UTC+0',
  ],
  stats: [
    { value: '6+', label: 'Years Experience', icon: 'calendar' },
    { value: '15+', label: 'Projects Shipped', icon: 'rocket' },
    { value: '5', label: 'AI Systems Built', icon: 'brain' },
    { value: '7', label: 'Certifications', icon: 'badge' },
  ],
}

// ─── Resume / CV versions ────────────────────────────────────────────────────
export const resumeVersions = [
  {
    label: 'Full CV',
    description: 'Detailed academic & professional CV',
    file: '/cv/Dacosta_Agyei_CV.pdf',
    icon: '📄',
  },
  {
    label: 'AI & ML Engineer',
    description: 'Tailored for AI & ML roles',
    file: '/resumes/Dacosta_Agye_AI_ML_Engineer.pdf',
    icon: '🤖',
  },
  {
    label: 'Full-Stack Web',
    description: 'Tailored for Full-Stack Web roles',
    file: '/resumes/Dacosta_Agyei_FullStack_Web_Engineer.pdf',
    icon: '💻',
  },
  {
    label: 'Backend Engineer',
    description: 'Tailored for Backend engineering roles',
    file: '/resumes/Dacosta_Agyei_Backend_Engineer.pdf',
    icon: '⚙️',
  },
  {
    label: 'Flutter Developer',
    description: 'Tailored for Flutter mobile roles',
    file: '/resumes/Dacosta_Agyei_Flutter_Mobile_Developer.pdf',
    icon: '📱',
  },
  {
    label: 'React Native Developer',
    description: 'Tailored for React Native roles',
    file: '/resumes/Dacosta_Agyei_ReactNative_Developer.pdf',
    icon: '⚛️',
  },
  {
    label: 'Full-Stack & Mobile',
    description: 'Combined Full-Stack and Mobile profile',
    file: '/resumes/Dacosta_Agyei_FullStack_Mobile_Combined.pdf',
    icon: '🚀',
  },
]

// ─── Skills ───────────────────────────────────────────────────────────────────
export const skillCategories = [
  {
    name: 'AI / Machine Learning',
    color: 'blue',
    icon: '🤖',
    skills: ['Python', 'PyTorch', 'TensorFlow', 'scikit-learn', 'Hugging Face', 'Computer Vision', 'NLP', 'Deep Learning', 'OpenCV', 'Model Deployment', 'RAG'],
  },
  {
    name: 'Frontend',
    color: 'violet',
    icon: '🎨',
    skills: ['React', 'Next.js', 'TypeScript', 'TailwindCSS', 'HTML5', 'CSS3', 'Framer Motion'],
  },
  {
    name: 'Mobile',
    color: 'cyan',
    icon: '📱',
    skills: ['Flutter', 'React Native', 'Dart', 'iOS', 'Android'],
  },
  {
    name: 'Backend & APIs',
    color: 'pink',
    icon: '⚙️',
    skills: ['FastAPI', 'Django', 'Node.js', 'REST APIs', 'GraphQL', 'WebSockets'],
  },
  {
    name: 'Databases',
    color: 'green',
    icon: '🗄️',
    skills: ['PostgreSQL', 'MySQL', 'Firebase', 'Supabase', 'Redis'],
  },
  {
    name: 'DevOps & Tools',
    color: 'orange',
    icon: '🚀',
    skills: ['Docker', 'Git', 'GitHub Actions', 'Linux', 'Vercel', 'CI/CD'],
  },
  {
    name: 'Collaboration',
    color: 'teal',
    icon: '🌐',
    skills: ['Slack', 'Jira', 'Notion', 'Figma', 'Zoom', 'Agile / Scrum'],
  },
]

export const tickerSkills = [
  'Python', 'PyTorch', 'TensorFlow', 'React', 'Next.js', 'Flutter',
  'FastAPI', 'Django', 'Node.js', 'TypeScript', 'PostgreSQL', 'Docker',
  'Computer Vision', 'NLP', 'React Native', 'Hugging Face', 'scikit-learn',
  'TailwindCSS', 'Firebase', 'GitHub Actions', 'OpenCV', 'REST APIs',
]

// ─── Experience ───────────────────────────────────────────────────────────────
export const experience = [
  {
    title: 'Senior Full-Stack & AI Systems Engineer (Team Lead)',
    company: 'Public Sector Organisation',
    note: 'Confidential',
    period: '2025 – Present',
    type: 'Full-time',
    location: 'Accra, Ghana',
    tags: ['Python', 'PyTorch', 'FastAPI', 'React', 'PostgreSQL', 'Docker'],
    bullets: [
      'Architected and deployed AI-driven analytics and automation systems integrating real-time ML inference into enterprise workflows across multiple departments',
      'Integrated production machine learning models into enterprise platforms, reducing manual processing time by ~40%',
      'Led a cross-functional engineering team covering code reviews, sprint planning, and mentorship',
      'Built end-to-end AI pipelines from data ingestion and model training to API deployment and stakeholder dashboards',
    ],
  },
  {
    title: 'Senior Full-Stack & Mobile Engineer',
    company: 'DigiJob',
    note: 'Remote / Contract',
    period: '2023 – 2025',
    type: 'Remote Contract',
    location: 'Togo',
    tags: ['React', 'Node.js', 'REST APIs', 'Flutter'],
    bullets: [
      'Improved frontend performance and UI responsiveness for a high-traffic stock media platform serving international users',
      'Integrated third-party APIs and optimised application scalability',
      'Collaborated asynchronously with a distributed, cross-border team via GitHub and Slack',
    ],
  },
  {
    title: 'Full-Stack & Mobile Engineer',
    company: 'ZK Block',
    note: 'Remote',
    period: '2023 – 2025',
    type: 'Remote',
    location: 'Ghana',
    tags: ['React Native', 'Node.js', 'Blockchain'],
    bullets: [
      'Co-developed zkWallet, a blockchain-based digital asset wallet, building mobile frontend and backend APIs',
      'Implemented secure transaction workflows with a focus on data integrity and UX',
    ],
  },
  {
    title: 'Applications Developer',
    company: 'Escripts Solutions',
    note: '',
    period: '2022 – 2023',
    type: 'Full-time',
    location: 'Ghana',
    tags: ['Flutter', 'FastAPI', 'Dart'],
    bullets: [
      'Led development of MedFind, a Flutter-based electronic pharmacy app, from design to App Store production deployment',
      'Integrated backend APIs and ensured reliable performance on iOS and Android',
    ],
  },
  {
    title: 'Applications Developer / IT Manager',
    company: 'Daakye Welfare Fund',
    note: '',
    period: '2020 – 2025',
    type: 'Full-time',
    location: 'Ghana',
    tags: ['React', 'Django', 'PostgreSQL'],
    bullets: [
      'Built and maintained a complete financial management system covering loans, savings, approvals, and reporting',
      'Developed admin dashboards and backend services for management and field staff',
    ],
  },
]

// ─── Projects ─────────────────────────────────────────────────────────────────
export const projects = [
  {
    slug: 'presence360',
    title: 'Presence360',
    subtitle: 'Real-Time AI Attendance System',
    description: 'Production computer vision system for real-time facial recognition and identity verification. Supports 500+ registered identities with sub-second inference, deployed via FastAPI with full audit trail.',
    category: 'AI/ML',
    tags: ['Python', 'PyTorch', 'OpenCV', 'FastAPI', 'PostgreSQL'],
    status: 'Production',
    highlights: ['500+ registered identities', 'Sub-second inference', 'Real-time pipeline'],
    gradient: 'from-blue-600 to-violet-600',
    icon: '👁️',
  },
  {
    slug: 'ai-knowledge-assistant',
    title: 'AI Knowledge Assistant',
    subtitle: 'NLP Enterprise Tool',
    description: 'Retrieval-augmented NLP assistant integrated into internal enterprise platforms. Dramatically reduces manual information lookup by understanding natural language queries over operational documents.',
    category: 'AI/ML',
    tags: ['Python', 'Hugging Face', 'FastAPI', 'NLP', 'RAG'],
    status: 'Production',
    highlights: ['RAG architecture', 'Hugging Face Transformers', 'Enterprise deployed'],
    gradient: 'from-violet-600 to-pink-600',
    icon: '🧠',
  },
  {
    slug: 'vision-transformer',
    title: 'Vision Transformer Classifier',
    subtitle: 'Deep Learning Research',
    description: 'Custom ViT (Vision Transformer) model implemented from scratch using PyTorch for multi-class image classification. Includes systematic hyperparameter optimisation and evaluation pipeline.',
    category: 'AI/ML',
    tags: ['PyTorch', 'ViT', 'Deep Learning', 'Python'],
    status: 'Research',
    highlights: ['From-scratch ViT', 'Hyperparameter tuning', 'Custom eval pipeline'],
    gradient: 'from-cyan-600 to-blue-600',
    icon: '🔬',
  },
  {
    slug: 'wedeyForYou',
    title: 'WedeyForYou',
    subtitle: 'Full-Stack Marketplace Platform',
    description: 'Complete marketplace ecosystem built from scratch: Flutter & React Native mobile apps, FastAPI backend, React admin dashboard, and marketing website. Features role-based access, payment integration, and real-time notifications.',
    category: 'Full-Stack',
    tags: ['Flutter', 'React Native', 'FastAPI', 'React', 'PostgreSQL'],
    status: 'Production',
    highlights: ['Cross-platform mobile', 'Payment integration', 'Admin dashboard'],
    gradient: 'from-green-600 to-cyan-600',
    icon: '🛒',
  },
  {
    slug: 'daakye-welfare',
    title: 'Daakye Welfare Fund',
    subtitle: 'Fintech Financial Platform',
    description: 'Full-featured savings-and-loan management platform with automated approval workflows, multi-tier user roles, detailed financial reporting, and an admin dashboard for operations management.',
    category: 'Fintech',
    tags: ['React', 'Django', 'PostgreSQL', 'Chart.js'],
    status: 'Production',
    highlights: ['Loan origination', 'Automated approvals', 'Financial reporting'],
    gradient: 'from-yellow-600 to-orange-600',
    icon: '💰',
  },
  {
    slug: 'zkwallet',
    title: 'zkWallet',
    subtitle: 'Blockchain Digital Wallet',
    description: 'Cross-platform blockchain-based digital asset wallet with secure transaction workflows, real-time balance tracking, and an intuitive mobile UI built with React Native.',
    category: 'Mobile',
    tags: ['React Native', 'Node.js', 'Blockchain', 'Crypto'],
    status: 'Production',
    highlights: ['Secure transactions', 'Cross-platform', 'Real-time balance'],
    gradient: 'from-purple-600 to-indigo-600',
    icon: '🔐',
  },
  {
    slug: 'medfind',
    title: 'MedFind',
    subtitle: 'Electronic Pharmacy App',
    description: 'Flutter-based mobile application enabling users to search, locate, and order medication from pharmacies. Full API integration, deployed to App Store and Play Store.',
    category: 'Mobile',
    tags: ['Flutter', 'Dart', 'FastAPI', 'iOS', 'Android'],
    status: 'Production',
    highlights: ['iOS & Android', 'Pharmacy search', 'Live ordering'],
    gradient: 'from-rose-600 to-pink-600',
    icon: '💊',
  },
  {
    slug: 'nsawabode',
    title: 'Nsawabode',
    subtitle: 'Community Contribution Platform',
    description: 'Payment-enabled community savings and contribution platform with full-stack architecture: integrated payment gateway, backend services, and a mobile-responsive frontend.',
    category: 'Fintech',
    tags: ['React', 'Node.js', 'Payments', 'PostgreSQL'],
    status: 'Production',
    highlights: ['Payment gateway', 'Community savings', 'Mobile-first'],
    gradient: 'from-teal-600 to-green-600',
    icon: '🤝',
  },
]

export const projectCategories = ['All', 'AI/ML', 'Full-Stack', 'Mobile', 'Fintech']

// ─── Certifications ───────────────────────────────────────────────────────────
export const certifications = [
  {
    name: 'Deep Learning Specialization',
    issuer: 'DeepLearning.AI',
    year: '2022',
    url: null,
    note: 'Add your Coursera verify link',
    icon: '🧠',
    color: 'blue',
  },
  {
    name: 'Google Data Analytics',
    issuer: 'Google',
    year: '2022',
    url: null,
    note: 'Add your Coursera verify link',
    icon: '📊',
    color: 'green',
  },
  {
    name: 'Data Science Certificate',
    issuer: 'Blossom Academy',
    year: '2022',
    url: 'https://blossom.africa',
    note: '',
    icon: '🔬',
    color: 'violet',
  },
  {
    name: 'Front-End Developer',
    issuer: 'ALX Software Engineering',
    year: '2022',
    url: null,
    note: 'Check email for Accredible link',
    icon: '🎨',
    color: 'pink',
  },
  {
    name: 'Flutter Development using Dart',
    issuer: 'The App Brewery',
    year: '2021',
    url: 'https://www.udemy.com/certificate/cert_sz6gb3kx/',
    note: '',
    icon: '📱',
    color: 'cyan',
  },
  {
    name: 'Foundations: JS, HTML & CSS',
    issuer: 'Duke University',
    year: '2021',
    url: 'https://www.coursera.org/verify/KQUQBFJXQR58',
    note: '',
    icon: '🏛️',
    color: 'orange',
  },
  {
    name: 'Introduction to HTML5',
    issuer: 'University of Michigan',
    year: '2021',
    url: 'https://www.coursera.org/verify/ZF33QZE9VAY',
    note: '',
    icon: '🌐',
    color: 'teal',
  },
]

// ─── Education ────────────────────────────────────────────────────────────────
export const education = [
  {
    degree: 'MSc Computer Science',
    school: 'University of Ghana',
    year: 'Present',
    note: '',
  },
  {
    degree: 'BSc Information Technology',
    school: 'Ghana Communication Technology University',
    year: '2020',
    note: 'First Class Honours',
  },
]

// ─── JSON-LD structured data ──────────────────────────────────────────────────
export function getJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': `${SITE_URL}/#person`,
        name: 'DaCosta Agyei',
        alternateName: ['Dacosta Agyei', 'DaCosta Agyei AI Engineer'],
        description: 'AI Engineer and Full-Stack Developer from Accra, Ghana. Expert in Machine Learning, Computer Vision, NLP, React, Flutter, FastAPI. Open to remote work globally.',
        url: SITE_URL,
        email: 'mailto:ohenebadac@gmail.com',
        telephone: '+233548157455',
        jobTitle: ['AI Engineer', 'Machine Learning Engineer', 'Full-Stack Developer', 'Flutter Developer'],
        knowsAbout: ['Machine Learning', 'Deep Learning', 'Computer Vision', 'NLP', 'Python', 'PyTorch', 'React', 'Next.js', 'Flutter', 'FastAPI', 'Docker', 'PostgreSQL'],
        address: {
          '@type': 'PostalAddress',
          addressCountry: 'GH',
          addressLocality: 'Accra',
          addressRegion: 'Greater Accra',
        },
        sameAs: [
          'https://linkedin.com/in/dacosta-agyei',
          'https://github.com/dacosta-agyei',
        ],
        hasCredential: certifications.filter(c => c.url).map(c => ({
          '@type': 'EducationalOccupationalCredential',
          name: c.name,
          credentialCategory: 'Certificate',
          recognizedBy: { '@type': 'Organization', name: c.issuer },
          url: c.url,
        })),
        alumniOf: [
          { '@type': 'EducationalOrganization', name: 'University of Ghana' },
          { '@type': 'EducationalOrganization', name: 'Ghana Communication Technology University' },
        ],
      },
      {
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        url: SITE_URL,
        name: 'DaCosta Agyei – AI Engineer & Full-Stack Developer',
        description: 'Portfolio of DaCosta Agyei. AI Engineer, Machine Learning Engineer, and Full-Stack Developer available for remote work globally.',
        publisher: { '@id': `${SITE_URL}/#person` },
        inLanguage: 'en-US',
      },
    ],
  }
}
