// Central company configuration - change company name here to update everywhere
export const COMPANY = {
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
  
  // Global Offices
  offices: [
    {
      city: "Seoul",
      country: "Korea",
      address: "123 Gangnam-gu, Seoul 06292, South Korea",
      phone: "+82 2 1234 5678",
      timezone: "KST (UTC+9)"
    },
    {
      city: "Tashkent", 
      country: "Uzbekistan",
      address: "456 Yunusabad District, Tashkent 100084, Uzbekistan",
      phone: "+998 71 123 4567",
      timezone: "UZT (UTC+5)"
    },
    {
      city: "Warsaw",
      country: "Poland", 
      address: "789 Śródmieście, 00-001 Warsaw, Poland",
      phone: "+48 22 123 4567",
      timezone: "CET (UTC+1)"
    }
  ],
  
  // Services/Tech Stacks
  services: [
    {
      name: "Web Development",
      description: "Modern, responsive websites and web applications",
      technologies: ["React", "Vue.js", "Next.js", "Node.js", "Python", "PHP"]
    },
    {
      name: "Mobile Applications", 
      description: "Native and cross-platform mobile solutions",
      technologies: ["React Native", "Flutter", "iOS", "Android", "Ionic"]
    },
    {
      name: "CRM Solutions",
      description: "Customer relationship management systems",
      technologies: ["Salesforce", "HubSpot", "Custom CRM", "Integration APIs"]
    },
    {
      name: "FinTech Solutions",
      description: "Financial technology and payment systems",
      technologies: ["Blockchain", "Payment Gateways", "Banking APIs", "Security"]
    },
    {
      name: "EdTech Solutions", 
      description: "Educational technology platforms",
      technologies: ["LMS", "E-learning", "Virtual Classrooms", "Analytics"]
    },
    {
      name: "ERP Systems",
      description: "Enterprise resource planning solutions",
      technologies: ["SAP", "Oracle", "Custom ERP", "Business Intelligence"]
    }
  ],
  
  // Company Stats
  stats: {
    foundedYear: 2020,
    projectsCompleted: 150,
    clientsSatisfied: 85,
    teamMembers: 50,
    countriesServed: 15
  }
} as const;