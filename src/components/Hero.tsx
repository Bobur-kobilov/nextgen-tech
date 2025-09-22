import { ArrowRight, ChevronDown, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { COMPANY } from '@/config/company';
import { useLanguage } from '@/hooks/useLanguage';
import heroImage from '@/assets/hero-bg.jpg';

export default function Hero() {
  const { t } = useLanguage();

  const scrollToNextSection = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero/80" />
        <div className="absolute inset-0 bg-tech-pattern opacity-30" />
      </div>

      {/* Floating particles effect */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-2 h-2 bg-tech-cyan rounded-full opacity-60 animate-float`}
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + i * 10}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + i * 0.5}s`
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-8 animate-fade-in">
            <span className="w-2 h-2 bg-tech-cyan rounded-full mr-2 animate-pulse-glow" />
            {COMPANY.tagline}
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight mb-6 animate-fade-in">
            <span className="block">{COMPANY.name}</span>
            <span className="block text-gradient mt-2">{t.hero.title}</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl lg:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in">
            {t.hero.subtitle}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-slide-up">
            <Button 
              size="lg" 
              className="bg-white text-tech-dark hover:bg-white/90 hover:shadow-glow transition-smooth group px-8 py-4 text-lg font-semibold"
            >
              {t.hero.cta_primary}
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white/30 text-white hover:bg-white/10 hover:border-white transition-smooth group px-8 py-4 text-lg"
            >
              <Play className="mr-2 w-5 h-5" />
              {t.hero.cta_secondary}
            </Button>
          </div>

          {/* Stats Preview */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-2xl mx-auto mb-12 animate-fade-in-scale">
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-tech-cyan mb-1">
                {new Date().getFullYear() - COMPANY.stats.foundedYear}+
              </div>
              <div className="text-sm text-white/70">{t.stats.years_experience}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-tech-cyan mb-1">
                {COMPANY.stats.projectsCompleted}+
              </div>
              <div className="text-sm text-white/70">{t.stats.projects_completed}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-tech-cyan mb-1">
                {COMPANY.stats.clientsSatisfied}+
              </div>
              <div className="text-sm text-white/70">{t.stats.satisfied_clients}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-tech-cyan mb-1">
                {COMPANY.stats.countriesServed}+
              </div>
              <div className="text-sm text-white/70">{t.stats.countries_served}</div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button 
          onClick={scrollToNextSection}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70 hover:text-white transition-smooth animate-float"
        >
          <div className="flex flex-col items-center">
            <span className="text-sm mb-2">{t.hero.scroll_down}</span>
            <ChevronDown className="w-6 h-6 animate-bounce" />
          </div>
        </button>
      </div>
    </section>
  );
}