// Central data constants - all static data for the application
// This makes it easy to manage and update data before backend integration

export const COMPANY_DATA = {
  // Basic Company Info
  name: "NextGen Tech",
  tagline: "Innovative IT Solutions for Tomorrow",
  description: "We deliver comprehensive IT solutions, from software development to FinTech, EdTech, and beyond—leveraging our expertise and experience to drive innovation and sustainable growth for businesses of all sizes.",
  
  // Contact Information
  email: "info@nextgentech.com",
  phone: "+1 (555) 123-4567",
  
  // Social Media
  social: {
    linkedin: "https://linkedin.com/company/nextgentech",
    twitter: "https://twitter.com/nextgentech",
    github: "https://github.com/nextgentech",
    facebook: "https://facebook.com/nextgentech"
  },
  
  // Company Stats
  stats: {
    foundedYear: 2020,
    projectsCompleted: 150,
    clientsSatisfied: 85,
    teamMembers: 50,
    countriesServed: 15
  }
} as const;

export const OFFICES_DATA = [
  {
    id: 1,
    city: "Seoul",
    country: "Korea",
    address: "123 Gangnam-gu, Seoul 06292, South Korea",
    phone: "+82 2 1234 5678",
    timezone: "KST (UTC+9)",
    isMain: true
  },
  {
    id: 2,
    city: "Tashkent", 
    country: "Uzbekistan",
    address: "456 Yunusabad District, Tashkent 100084, Uzbekistan",
    phone: "+998 71 123 4567",
    timezone: "UZT (UTC+5)",
    isMain: false
  },
  {
    id: 3,
    city: "Warsaw",
    country: "Poland", 
    address: "789 Śródmieście, 00-001 Warsaw, Poland",
    phone: "+48 22 123 4567",
    timezone: "CET (UTC+1)",
    isMain: false
  }
] as const;

export const SERVICES_DATA = [
  {
    id: 1,
    name: "Web Development",
    description: "Modern, responsive websites and web applications built with cutting-edge technologies.",
    icon: "Globe",
    technologies: ["React", "Vue.js", "Next.js", "Node.js", "Python", "PHP"],
    features: ["Responsive Design", "SEO Optimized", "Fast Loading", "Secure"]
  },
  {
    id: 2,
    name: "Mobile Applications", 
    description: "Native and cross-platform mobile solutions for iOS and Android platforms.",
    icon: "Smartphone",
    technologies: ["React Native", "Flutter", "iOS", "Android", "Ionic"],
    features: ["Cross-Platform", "Native Performance", "App Store Ready", "Push Notifications"]
  },
  {
    id: 3,
    name: "CRM Solutions",
    description: "Customer relationship management systems to streamline your business processes.",
    icon: "Users",
    technologies: ["Salesforce", "HubSpot", "Custom CRM", "Integration APIs"],
    features: ["Lead Management", "Sales Tracking", "Customer Analytics", "Integration Ready"]
  },
  {
    id: 4,
    name: "FinTech Solutions",
    description: "Financial technology and secure payment systems for the digital economy.",
    icon: "CreditCard",
    technologies: ["Blockchain", "Payment Gateways", "Banking APIs", "Security"],
    features: ["Secure Payments", "Compliance Ready", "Real-time Processing", "Fraud Protection"]
  },
  {
    id: 5,
    name: "EdTech Solutions", 
    description: "Educational technology platforms that revolutionize learning experiences.",
    icon: "BookOpen",
    technologies: ["LMS", "E-learning", "Virtual Classrooms", "Analytics"],
    features: ["Interactive Learning", "Progress Tracking", "Multi-language", "Mobile Access"]
  },
  {
    id: 6,
    name: "ERP Systems",
    description: "Enterprise resource planning solutions to optimize your business operations.",
    icon: "Settings",
    technologies: ["SAP", "Oracle", "Custom ERP", "Business Intelligence"],
    features: ["Process Automation", "Real-time Analytics", "Scalable", "Integration Ready"]
  }
] as const;

export const PROJECTS_DATA = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A comprehensive e-commerce solution with advanced features and analytics",
    category: "Web Development",
    technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80",
    featured: true,
    status: "completed",
    client: "TechCorp Inc.",
    duration: "6 months",
    teamSize: 8
  },
  {
    id: 2,
    title: "Mobile Banking App",
    description: "Secure and intuitive mobile banking application with biometric authentication",
    category: "FinTech",
    technologies: ["React Native", "Python", "AWS", "Blockchain"],
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80",
    featured: true,
    status: "completed",
    client: "SecureBank Ltd.",
    duration: "8 months",
    teamSize: 12
  },
  {
    id: 3,
    title: "Learning Management System",
    description: "Comprehensive LMS platform for educational institutions",
    category: "EdTech",
    technologies: ["Vue.js", "Laravel", "MySQL", "Docker"],
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80",
    featured: false,
    status: "completed",
    client: "EduTech University",
    duration: "10 months",
    teamSize: 10
  },
  {
    id: 4,
    title: "CRM Dashboard",
    description: "Advanced customer relationship management system with analytics",
    category: "CRM",
    technologies: ["Angular", "C#", "SQL Server", "Azure"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    featured: false,
    status: "completed",
    client: "SalesPro Solutions",
    duration: "4 months",
    teamSize: 6
  },
  {
    id: 5,
    title: "ERP Solution",
    description: "Enterprise resource planning system for manufacturing companies",
    category: "ERP",
    technologies: ["React", "Java", "Oracle", "Kubernetes"],
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
    featured: false,
    status: "completed",
    client: "ManufacturingCo",
    duration: "12 months",
    teamSize: 15
  },
  {
    id: 6,
    title: "Food Delivery App",
    description: "Real-time food delivery mobile application with GPS tracking",
    category: "Mobile Apps",
    technologies: ["Flutter", "Firebase", "Google Maps", "Payment Gateway"],
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=800&q=80",
    featured: false,
    status: "completed",
    client: "FoodieExpress",
    duration: "5 months",
    teamSize: 7
  }
] as const;

export const JOB_OPENINGS_DATA = [
  {
    id: 1,
    title: "Senior Full Stack Developer",
    department: "Engineering",
    location: "Seoul, Korea",
    type: "Full-time",
    level: "Senior",
    description: "We're looking for a senior full stack developer to join our dynamic team and work on cutting-edge projects.",
    requirements: ["React", "Node.js", "TypeScript", "PostgreSQL", "AWS"],
    responsibilities: [
      "Develop and maintain web applications",
      "Collaborate with cross-functional teams",
      "Mentor junior developers",
      "Implement best practices and code reviews"
    ],
    benefits: ["Competitive salary", "Health insurance", "Flexible hours", "Remote work options"],
    salary: "$80,000 - $120,000",
    urgent: true,
    postedDate: "2024-01-15",
    applicationDeadline: "2024-02-15"
  },
  {
    id: 2,
    title: "Mobile App Developer",
    department: "Engineering", 
    location: "Warsaw, Poland",
    type: "Full-time",
    level: "Mid-level",
    description: "Join our mobile team to create innovative iOS and Android applications for our global clients.",
    requirements: ["React Native", "Flutter", "iOS", "Android", "Firebase"],
    responsibilities: [
      "Develop mobile applications",
      "Optimize app performance",
      "Work with design team",
      "Test and debug applications"
    ],
    benefits: ["Competitive salary", "Health insurance", "Learning budget", "Team events"],
    salary: "$60,000 - $90,000",
    urgent: false,
    postedDate: "2024-01-10",
    applicationDeadline: "2024-02-10"
  },
  {
    id: 3,
    title: "UI/UX Designer",
    department: "Design",
    location: "Tashkent, Uzbekistan",
    type: "Full-time", 
    level: "Mid-level",
    description: "Create beautiful and intuitive user experiences for our web and mobile applications.",
    requirements: ["Figma", "Adobe XD", "Prototyping", "User Research", "Design Systems"],
    responsibilities: [
      "Design user interfaces",
      "Conduct user research",
      "Create prototypes",
      "Collaborate with developers"
    ],
    benefits: ["Competitive salary", "Health insurance", "Design tools", "Creative freedom"],
    salary: "$50,000 - $75,000",
    urgent: false,
    postedDate: "2024-01-05",
    applicationDeadline: "2024-02-05"
  }
] as const;

export const TESTIMONIALS_DATA = [
  {
    id: 1,
    name: "Sarah Johnson",
    position: "CEO",
    company: "TechCorp Inc.",
    content: "NextGen Tech delivered an exceptional e-commerce platform that exceeded our expectations. Their team's expertise and dedication made all the difference.",
    rating: 5,
    project: "E-Commerce Platform",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&q=80"
  },
  {
    id: 2,
    name: "Michael Chen",
    position: "CTO",
    company: "SecureBank Ltd.",
    content: "The mobile banking app they developed is secure, user-friendly, and has significantly improved our customer satisfaction scores.",
    rating: 5,
    project: "Mobile Banking App",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&q=80"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    position: "Director of IT",
    company: "EduTech University",
    content: "Their LMS solution transformed our educational delivery. The platform is intuitive and has enhanced our students' learning experience.",
    rating: 5,
    project: "Learning Management System",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&q=80"
  }
] as const;

export const BLOG_POSTS_DATA = [
  {
    id: 1,
    title: "The Future of Web Development: Trends to Watch in 2024",
    excerpt: "Explore the latest trends shaping the future of web development and how they impact modern applications.",
    content: "Full blog post content here...",
    author: "John Smith",
    authorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80",
    publishedDate: "2024-01-20",
    category: "Web Development",
    tags: ["React", "Next.js", "Trends", "2024"],
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80",
    readTime: "5 min read",
    featured: true
  },
  {
    id: 2,
    title: "Building Scalable Mobile Applications with React Native",
    excerpt: "Learn best practices for creating scalable and maintainable mobile applications using React Native.",
    content: "Full blog post content here...",
    author: "Jane Doe",
    authorImage: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&q=80",
    publishedDate: "2024-01-15",
    category: "Mobile Development",
    tags: ["React Native", "Mobile", "Scalability"],
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80",
    readTime: "7 min read",
    featured: false
  }
] as const;

// Empty state messages
export const EMPTY_STATES = {
  noJobs: {
    title: "No Open Positions",
    message: "We're not currently hiring, but we're always interested in connecting with talented individuals.",
    action: "Join Our Talent Pool",
    icon: "Briefcase"
  },
  noProjects: {
    title: "No Projects Available",
    message: "Our portfolio is being updated. Check back soon to see our latest work.",
    action: "Contact Us",
    icon: "Folder"
  },
  noBlogPosts: {
    title: "No Blog Posts",
    message: "We're working on some great content. Stay tuned for our latest insights.",
    action: "Subscribe to Updates",
    icon: "BookOpen"
  },
  noTestimonials: {
    title: "No Testimonials Yet",
    message: "We're just getting started. Be the first to share your experience with us.",
    action: "Share Your Story",
    icon: "MessageCircle"
  }
} as const;

// Filter categories
export const FILTER_CATEGORIES = {
  projects: ["All", "Web Development", "Mobile Apps", "FinTech", "EdTech", "CRM", "ERP"],
  jobs: ["All", "Engineering", "Design", "Marketing", "Sales", "Operations"],
  blog: ["All", "Web Development", "Mobile Development", "Design", "Business", "Technology"]
} as const;

// Contact form fields
export const CONTACT_FORM_FIELDS = [
  {
    name: "name",
    label: "Full Name",
    type: "text",
    required: true,
    placeholder: "Enter your full name"
  },
  {
    name: "email",
    label: "Email Address",
    type: "email",
    required: true,
    placeholder: "Enter your email address"
  },
  {
    name: "company",
    label: "Company (Optional)",
    type: "text",
    required: false,
    placeholder: "Enter your company name"
  },
  {
    name: "phone",
    label: "Phone Number (Optional)",
    type: "tel",
    required: false,
    placeholder: "Enter your phone number"
  },
  {
    name: "service",
    label: "Service Interest",
    type: "select",
    required: false,
    options: SERVICES_DATA.map(service => service.name)
  },
  {
    name: "message",
    label: "Message",
    type: "textarea",
    required: true,
    placeholder: "Tell us about your project or requirements"
  }
] as const;
