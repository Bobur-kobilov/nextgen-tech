export type Language = 'en' | 'ko' | 'uz' | 'pl';

export interface Translations {
  // Navigation
  nav: {
    home: string;
    about: string;
    services: string;
    portfolio: string;
    team: string;
    careers: string;
    contact: string;
  };
  
  // Hero Section
  hero: {
    title: string;
    subtitle: string;
    cta_primary: string;
    cta_secondary: string;
    scroll_down: string;
  };
  
  // About Section
  about: {
    title: string;
    subtitle: string;
    mission_title: string;
    mission_text: string;
    vision_title: string;
    vision_text: string;
    values_title: string;
    global_presence: string;
  };
  
  // Services Section
  services: {
    title: string;
    subtitle: string;
    web_dev: string;
    web_dev_desc: string;
    mobile_apps: string;
    mobile_apps_desc: string;
    crm: string;
    crm_desc: string;
    fintech: string;
    fintech_desc: string;
    edtech: string;
    edtech_desc: string;
    erp: string;
    erp_desc: string;
  };
  
  // Stats Section
  stats: {
    years_experience: string;
    projects_completed: string;
    satisfied_clients: string;
    team_members: string;
    countries_served: string;
  };
  
  // Careers Section
  careers: {
    title: string;
    subtitle: string;
    join_team: string;
    apply_now: string;
  };
  
  // Contact Section
  contact: {
    title: string;
    subtitle: string;
    get_in_touch: string;
    send_message: string;
    name: string;
    email: string;
    message: string;
    office_locations: string;
  };
  
  // Footer
  footer: {
    description: string;
    quick_links: string;
    our_services: string;
    contact_info: string;
    follow_us: string;
    rights_reserved: string;
  };
  
  // Common
  common: {
    learn_more: string;
    get_started: string;
    contact_us: string;
    view_all: string;
    loading: string;
    error: string;
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      services: "Services", 
      portfolio: "Portfolio",
      team: "Team",
      careers: "Careers",
      contact: "Contact"
    },
    hero: {
      title: "Innovative IT Solutions for Tomorrow",
      subtitle: "We deliver comprehensive IT solutions, from software development to FinTech, EdTech, and beyond—driving innovation and sustainable growth for businesses worldwide.",
      cta_primary: "Get Started",
      cta_secondary: "View Our Work",
      scroll_down: "Scroll to explore"
    },
    about: {
      title: "About NextGen Tech",
      subtitle: "Leading the future of technology solutions",
      mission_title: "Our Mission",
      mission_text: "To deliver cutting-edge IT solutions that transform businesses and drive digital innovation across industries.",
      vision_title: "Our Vision", 
      vision_text: "To be the global leader in providing innovative technology solutions that shape the future of business.",
      values_title: "Our Values",
      global_presence: "Global Presence"
    },
    services: {
      title: "Our Services",
      subtitle: "Comprehensive IT solutions tailored to your business needs",
      web_dev: "Web Development",
      web_dev_desc: "Modern, responsive websites and web applications built with cutting-edge technologies.",
      mobile_apps: "Mobile Applications",
      mobile_apps_desc: "Native and cross-platform mobile solutions for iOS and Android platforms.",
      crm: "CRM Solutions", 
      crm_desc: "Customer relationship management systems to streamline your business processes.",
      fintech: "FinTech Solutions",
      fintech_desc: "Financial technology and secure payment systems for the digital economy.",
      edtech: "EdTech Solutions",
      edtech_desc: "Educational technology platforms that revolutionize learning experiences.",
      erp: "ERP Systems",
      erp_desc: "Enterprise resource planning solutions to optimize your business operations."
    },
    stats: {
      years_experience: "Years of Experience",
      projects_completed: "Projects Completed", 
      satisfied_clients: "Satisfied Clients",
      team_members: "Team Members",
      countries_served: "Countries Served"
    },
    careers: {
      title: "Join Our Team",
      subtitle: "Be part of the next generation of technology innovators",
      join_team: "Join our dynamic team and help shape the future of technology",
      apply_now: "Apply Now"
    },
    contact: {
      title: "Contact Us",
      subtitle: "Let's discuss your next project",
      get_in_touch: "Get in touch with our team",
      send_message: "Send Message",
      name: "Name",
      email: "Email", 
      message: "Message",
      office_locations: "Office Locations"
    },
    footer: {
      description: "NextGen Tech delivers innovative IT solutions worldwide, helping businesses transform and grow through cutting-edge technology.",
      quick_links: "Quick Links",
      our_services: "Our Services", 
      contact_info: "Contact Info",
      follow_us: "Follow Us",
      rights_reserved: "All rights reserved."
    },
    common: {
      learn_more: "Learn More",
      get_started: "Get Started",
      contact_us: "Contact Us",
      view_all: "View All",
      loading: "Loading...",
      error: "Something went wrong"
    }
  },
  ko: {
    nav: {
      home: "홈",
      about: "회사소개",
      services: "서비스",
      portfolio: "포트폴리오",
      team: "팀",
      careers: "채용",
      contact: "연락처"
    },
    hero: {
      title: "혁신적인 IT 솔루션",
      subtitle: "소프트웨어 개발부터 핀테크, 에듀테크까지 종합적인 IT 솔루션을 제공하여 전 세계 기업의 혁신과 지속 가능한 성장을 이끕니다.",
      cta_primary: "시작하기",
      cta_secondary: "포트폴리오 보기",
      scroll_down: "스크롤하여 탐색"
    },
    about: {
      title: "NextGen Tech 소개",
      subtitle: "기술 솔루션의 미래를 선도합니다",
      mission_title: "우리의 사명",
      mission_text: "기업을 변화시키고 업계 전반에 걸쳐 디지털 혁신을 이끄는 최첨단 IT 솔루션을 제공합니다.",
      vision_title: "우리의 비전",
      vision_text: "비즈니스의 미래를 형성하는 혁신적인 기술 솔루션을 제공하는 글로벌 리더가 되는 것입니다.",
      values_title: "우리의 가치",
      global_presence: "글로벌 진출"
    },
    services: {
      title: "서비스",
      subtitle: "귀하의 비즈니스 요구에 맞춘 종합적인 IT 솔루션",
      web_dev: "웹 개발",
      web_dev_desc: "최첨단 기술로 구축된 현대적이고 반응형 웹사이트 및 웹 애플리케이션.",
      mobile_apps: "모바일 애플리케이션",
      mobile_apps_desc: "iOS 및 Android 플랫폼용 네이티브 및 크로스 플랫폼 모바일 솔루션.",
      crm: "CRM 솔루션",
      crm_desc: "비즈니스 프로세스를 간소화하는 고객 관계 관리 시스템.",
      fintech: "핀테크 솔루션", 
      fintech_desc: "디지털 경제를 위한 금융 기술 및 보안 결제 시스템.",
      edtech: "에듀테크 솔루션",
      edtech_desc: "학습 경험을 혁신하는 교육 기술 플랫폼.",
      erp: "ERP 시스템",
      erp_desc: "비즈니스 운영을 최적화하는 전사적 자원 관리 솔루션."
    },
    stats: {
      years_experience: "년간의 경험",
      projects_completed: "완료된 프로젝트",
      satisfied_clients: "만족한 고객",
      team_members: "팀 멤버",
      countries_served: "서비스 제공 국가"
    },
    careers: {
      title: "팀 합류",
      subtitle: "차세대 기술 혁신가의 일원이 되어보세요",
      join_team: "역동적인 팀에 합류하여 기술의 미래를 함께 만들어가세요",
      apply_now: "지원하기"
    },
    contact: {
      title: "연락처",
      subtitle: "다음 프로젝트에 대해 논의해보세요",
      get_in_touch: "우리 팀에 연락하세요",
      send_message: "메시지 보내기",
      name: "이름",
      email: "이메일",
      message: "메시지",
      office_locations: "사무실 위치"
    },
    footer: {
      description: "NextGen Tech는 전 세계에 혁신적인 IT 솔루션을 제공하여 기업이 최첨단 기술을 통해 변화하고 성장할 수 있도록 돕습니다.",
      quick_links: "빠른 링크",
      our_services: "서비스",
      contact_info: "연락처 정보", 
      follow_us: "팔로우",
      rights_reserved: "모든 권리 보유."
    },
    common: {
      learn_more: "자세히 보기",
      get_started: "시작하기",
      contact_us: "연락하기",
      view_all: "모두 보기",
      loading: "로딩 중...",
      error: "문제가 발생했습니다"
    }
  },
  uz: {
    nav: {
      home: "Bosh sahifa",
      about: "Biz haqimizda", 
      services: "Xizmatlar",
      portfolio: "Portfolio",
      team: "Jamoa",
      careers: "Ish o'rinlari",
      contact: "Aloqa"
    },
    hero: {
      title: "Ertangi kun uchun innovatsion IT yechimlari",
      subtitle: "Biz dasturiy ta'minot ishlab chiqishdan tortib FinTech, EdTech va boshqalargacha keng qamrovli IT yechimlarini taqdim etamiz - butun dunyo bo'ylab biznes uchun innovatsiya va barqaror o'sishni ta'minlaymiz.",
      cta_primary: "Boshlash",
      cta_secondary: "Ishlarimizni ko'ring",
      scroll_down: "Tadqiq qilish uchun pastga aylantiring"
    },
    about: {
      title: "NextGen Tech haqida",
      subtitle: "Texnologik yechimlar kelajagini boshqaramiz",
      mission_title: "Bizning missiyamiz",
      mission_text: "Biznesni o'zgartiruvchi va sanoat bo'ylab raqamli innovatsiyalarni boshqaruvchi eng ilg'or IT yechimlarini taqdim etish.",
      vision_title: "Bizning ko'z qarashimiz",
      vision_text: "Biznes kelajagini shakllantiradigan innovatsion texnologik yechimlarni taqdim etishda global lider bo'lish.",
      values_title: "Bizning qadriyatlarimiz",
      global_presence: "Global mavjudlik"
    },
    services: {
      title: "Bizning xizmatlarimiz",
      subtitle: "Sizning biznes ehtiyojlaringizga moslashtirilgan keng qamrovli IT yechimlari",
      web_dev: "Veb ishlab chiqish",
      web_dev_desc: "Eng ilg'or texnologiyalar bilan qurilgan zamonaviy, moslashuvchan veb-saytlar va veb-ilovalar.",
      mobile_apps: "Mobil ilovalar",
      mobile_apps_desc: "iOS va Android platformalari uchun mahalliy va cross-platform mobil yechimlari.",
      crm: "CRM yechimlari",
      crm_desc: "Biznes jarayonlaringizni soddalashtirish uchun mijozlar bilan munosabatlarni boshqarish tizimlari.",
      fintech: "FinTech yechimlari",
      fintech_desc: "Raqamli iqtisodiyot uchun moliyaviy texnologiya va xavfsiz to'lov tizimlari.",
      edtech: "EdTech yechimlari", 
      edtech_desc: "O'rganish tajribasini inqilob qiluvchi ta'lim texnologiyasi platformalari.",
      erp: "ERP tizimlari",
      erp_desc: "Biznes operatsiyalaringizni optimallashtirish uchun korxona resurslarini rejalashtirish yechimlari."
    },
    stats: {
      years_experience: "Yillik tajriba",
      projects_completed: "Yakunlangan loyihalar",
      satisfied_clients: "Mamnun mijozlar", 
      team_members: "Jamoa a'zolari",
      countries_served: "Xizmat ko'rsatilgan davlatlar"
    },
    careers: {
      title: "Jamoamizga qo'shiling",
      subtitle: "Keyingi avlod texnologiya innovatorlarining bir qismi bo'ling",
      join_team: "Dinamik jamoamizga qo'shiling va texnologiya kelajagini shakllantirishga yordam bering",
      apply_now: "Hozir ariza bering"
    },
    contact: {
      title: "Biz bilan bog'laning",
      subtitle: "Keyingi loyihangizni muhokama qilaylik",
      get_in_touch: "Bizning jamoa bilan bog'laning",
      send_message: "Xabar yuborish",
      name: "Ism",
      email: "Elektron pochta",
      message: "Xabar",
      office_locations: "Ofis joylari"
    },
    footer: {
      description: "NextGen Tech butun dunyo bo'ylab innovatsion IT yechimlarini taqdim etadi, kompaniyalarga eng ilg'or texnologiyalar orqali o'zgarish va o'sishga yordam beradi.",
      quick_links: "Tezkor havolalar",
      our_services: "Bizning xizmatlarimiz",
      contact_info: "Aloqa ma'lumotlari",
      follow_us: "Bizni kuzating",
      rights_reserved: "Barcha huquqlar himoyalangan."
    },
    common: {
      learn_more: "Batafsil o'rganish",
      get_started: "Boshlash", 
      contact_us: "Biz bilan bog'laning",
      view_all: "Barchasini ko'rish",
      loading: "Yuklanmoqda...",
      error: "Xatolik yuz berdi"
    }
  },
  pl: {
    nav: {
      home: "Strona główna",
      about: "O nas",
      services: "Usługi",
      portfolio: "Portfolio",
      team: "Zespół",
      careers: "Kariera", 
      contact: "Kontakt"
    },
    hero: {
      title: "Innowacyjne rozwiązania IT na jutro",
      subtitle: "Dostarczamy kompleksowe rozwiązania IT, od rozwoju oprogramowania po FinTech, EdTech i nie tylko - napędzając innowacje i zrównoważony wzrost firm na całym świecie.",
      cta_primary: "Rozpocznij",
      cta_secondary: "Zobacz nasze prace",
      scroll_down: "Przewiń, aby eksplorować"
    },
    about: {
      title: "O NextGen Tech",
      subtitle: "Przewodzimy przyszłości rozwiązań technologicznych",
      mission_title: "Nasza misja",
      mission_text: "Dostarczanie najnowocześniejszych rozwiązań IT, które przekształcają firmy i napędzają cyfrowe innowacje w różnych branżach.",
      vision_title: "Nasza wizja",
      vision_text: "Bycie globalnym liderem w dostarczaniu innowacyjnych rozwiązań technologicznych, które kształtują przyszłość biznesu.",
      values_title: "Nasze wartości", 
      global_presence: "Globalna obecność"
    },
    services: {
      title: "Nasze usługi",
      subtitle: "Kompleksowe rozwiązania IT dostosowane do potrzeb Twojej firmy",
      web_dev: "Rozwój stron internetowych",
      web_dev_desc: "Nowoczesne, responsywne strony internetowe i aplikacje webowe zbudowane przy użyciu najnowszych technologii.",
      mobile_apps: "Aplikacje mobilne",
      mobile_apps_desc: "Natywne i wieloplatformowe rozwiązania mobilne dla platform iOS i Android.",
      crm: "Rozwiązania CRM",
      crm_desc: "Systemy zarządzania relacjami z klientami usprawniające procesy biznesowe.",
      fintech: "Rozwiązania FinTech",
      fintech_desc: "Technologie finansowe i bezpieczne systemy płatności dla gospodarki cyfrowej.",
      edtech: "Rozwiązania EdTech",
      edtech_desc: "Platformy technologii edukacyjnych rewolucjonizujące doświadczenia w nauce.",
      erp: "Systemy ERP",
      erp_desc: "Rozwiązania planowania zasobów przedsiębiorstwa optymalizujące operacje biznesowe."
    },
    stats: {
      years_experience: "Lat doświadczenia",
      projects_completed: "Ukończonych projektów",
      satisfied_clients: "Zadowolonych klientów",
      team_members: "Członków zespołu",
      countries_served: "Obsługiwanych krajów"
    },
    careers: {
      title: "Dołącz do naszego zespołu",
      subtitle: "Bądź częścią nowej generacji innowatorów technologicznych",
      join_team: "Dołącz do naszego dynamicznego zespołu i pomóż kształtować przyszłość technologii",
      apply_now: "Aplikuj teraz"
    },
    contact: {
      title: "Skontaktuj się z nami",
      subtitle: "Omówmy Twój następny projekt",
      get_in_touch: "Skontaktuj się z naszym zespołem",
      send_message: "Wyślij wiadomość",
      name: "Imię",
      email: "Email",
      message: "Wiadomość", 
      office_locations: "Lokalizacje biur"
    },
    footer: {
      description: "NextGen Tech dostarcza innowacyjne rozwiązania IT na całym świecie, pomagając firmom przekształcać się i rozwijać dzięki najnowszym technologiom.",
      quick_links: "Szybkie linki",
      our_services: "Nasze usługi",
      contact_info: "Informacje kontaktowe",
      follow_us: "Śledź nas",
      rights_reserved: "Wszystkie prawa zastrzeżone."
    },
    common: {
      learn_more: "Dowiedz się więcej",
      get_started: "Rozpocznij",
      contact_us: "Skontaktuj się z nami",
      view_all: "Zobacz wszystkie",
      loading: "Ładowanie...",
      error: "Coś poszło nie tak"
    }
  }
};

export const LANGUAGE_NAMES: Record<Language, string> = {
  en: "English",
  ko: "한국어", 
  uz: "O'zbekcha",
  pl: "Polski"
};