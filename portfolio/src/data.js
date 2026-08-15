import hostellinkImg from './assets/hostellink.jpg'
import brewBloomImg from './assets/brew-and-bloom.jpg'
import wanderloomImg from './assets/wanderloom.jpg'

export const projects = [
  {
    id: 'hostellink',
    name: 'HostelLink',
    tagline: 'Multi-role hostel management platform',
    image: hostellinkImg,
    category: 'Full Stack',
    tags: ['Flutter', 'Firebase', 'Firestore'],
    summary: 'A live web app that runs hostel life end to end — real-time chat, a borrow/lend feed, a second-hand marketplace, and role-based dashboards for students, wardens, and admins.',
    overview: 'HostelLink replaces the paper registers and group-chat chaos most university hostels run on. Students, wardens, and a Super Admin each get a purpose-built dashboard, with real-time data synced through Firestore.',
    role: 'Sole developer — architecture, UI, and backend logic, directed end-to-end with AI-assisted implementation and manually tested.',
    features: [
      'Warden-approval registration flow, so every student account is verified before activation',
      'Real-time group and private chat with unread badges',
      'Item borrowing/lending feed plus a second-hand marketplace',
      '7-tab warden dashboard and a separate Super Admin panel',
      'Hybrid Firebase Auth handling and session persistence via SharedPreferences',
    ],
    link: 'https://hostellink-app.web.app/',
  },
  {
    id: 'brew-and-bloom',
    name: 'Brew & Bloom',
    tagline: '3D coffee shop landing page',
    image: brewBloomImg,
    category: '3D / Landing Page',
    tags: ['React', 'Three.js', 'Framer Motion'],
    summary: 'A botanical-themed coffee brand landing page built around two custom 3D scenes — a rotating cup with rising steam, and beans that float and drift on scroll.',
    overview: 'Brew & Bloom leans on motion and depth to sell a feeling, not just a menu. Every scene is hand-built in React Three Fiber and choreographed with Framer Motion so scroll and interaction feel physical.',
    role: 'Designed and built solo — 3D scene composition, shaders/lighting, and scroll-linked animation.',
    features: [
      'Custom rotating-cup scene with animated steam particles',
      'Floating coffee-bean scene reacting to scroll position',
      'Botanical color and type system tying the brand together',
      'Framer Motion page-load and section-reveal choreography',
    ],
    link: 'https://brew-and-bloomm.netlify.app/',
  },
  {
    id: 'wanderloom',
    name: 'Wanderloom',
    tagline: 'Premium travel booking experience',
    image: wanderloomImg,
    category: 'Web App',
    tags: ['React', 'Tailwind CSS', 'React Router'],
    summary: 'A 7-page travel booking site with destination search, filterable listings, and a mock auth/profile system — built to feel like a real production booking product.',
    overview: 'Wanderloom is a full multi-page flow rather than a single landing page: search, browse, filter, and a mock account system that mimics how a real booking product would handle sign-in and saved trips.',
    role: 'Built solo end-to-end — routing, component system, and interaction design.',
    features: [
      '7 fully built pages including search, listings, and destination detail',
      'Filterable, sortable destination listings',
      'Mock authentication and profile system',
      'Consistent design system built with Tailwind CSS and Motion',
    ],
    link: 'https://wanderlloom.netlify.app/',
  },
]

export const skills = [
  { name: 'React / Component Architecture', level: 92 },
  { name: 'Flutter & Firebase', level: 85 },
  { name: 'Three.js / React Three Fiber', level: 75 },
  { name: 'Tailwind CSS', level: 90 },
  { name: 'Framer Motion / Motion', level: 85 },
  { name: 'AI-Directed Development', level: 95 },
]

export const processSteps = [
  { num: '01', title: 'Discover', desc: 'Understanding goals, requirements, and project scope.' },
  { num: '02', title: 'Plan', desc: 'Planning architecture, tech stack, and project roadmap.' },
  { num: '03', title: 'Design', desc: 'Creating wireframes and beautiful, on-brand UI/UX.' },
  { num: '04', title: 'Develop', desc: 'Directing AI-assisted, clean, scalable implementation.' },
  { num: '05', title: 'Test', desc: 'Manually testing every feature for bugs and cross-browser issues.' },
  { num: '06', title: 'Deploy', desc: 'Shipping to production and ensuring a smooth launch.' },
]

export const stats = [
  { value: '3', label: 'Live Projects Shipped' },
  { value: '20+', label: 'Screens & Pages Built' },
  { value: '8+', label: 'Technologies Used' },
  { value: '100%', label: 'AI-Directed & Self-Tested' },
]
