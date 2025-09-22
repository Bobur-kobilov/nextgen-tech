import { ArrowRight, ChevronDown, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { COMPANY } from '@/config/company';
import { useLanguage } from '@/hooks/useLanguage';
import { useNavigate } from 'react-router-dom';

export default function Hero() {
  const { t } = useLanguage();
  const navigate = useNavigate();

  const scrollToNextSection = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Professional Background */}
      <div className="absolute inset-0 bg-gradient-hero">
        <div className="absolute inset-0 bg-tech-pattern opacity-5" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <div className="max-w-4xl mx-auto py-8 sm:py-12 lg:py-16">
          {/* Badge */}
          <div className="inline-flex items-center px-3 py-2 sm:px-4 sm:py-2 glass rounded-full text-xs sm:text-sm font-medium mb-6 sm:mb-8 animate-fade-in text-white">
            <span className="w-2 h-2 bg-tech-blue rounded-full mr-2" />
            <span className="hidden sm:inline">{COMPANY.tagline}</span>
            <span className="sm:hidden">Innovative IT Solutions</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold leading-tight mb-4 sm:mb-6 animate-fade-in">
            <span className="block text-white font-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">{COMPANY.name}</span>
            <span className="block text-gradient mt-1 sm:mt-2 font-semibold text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
              {t.hero.title}
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-white/90 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in font-medium px-2">
            {t.hero.subtitle}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-8 sm:mb-12 animate-slide-up px-4">
            <Button 
              size="lg" 
              onClick={() => navigate('/contact')}
              className="w-full sm:w-auto bg-gradient-accent hover:bg-gradient-to-r hover:from-tech-blue hover:to-tech-purple hover:shadow-lg hover:shadow-tech-blue/25 hover:scale-105 transition-all duration-300 group px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-display font-semibold text-white"
            >
              {t.common.contact_us}
              <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1" />
            </Button>
            
            <Button 
              size="lg" 
              onClick={() => navigate('/portfolio')}
              className="w-full sm:w-auto border-2 border-white/30 text-white hover:bg-white/20 hover:border-white/60 hover:text-white hover:shadow-lg hover:shadow-white/10 hover:scale-105 transition-all duration-300 group px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg bg-transparent font-display font-medium"
            >
              <Play className="mr-2 w-4 h-4 sm:w-5 sm:h-5" />
              {t.hero.cta_secondary}
            </Button>
          </div>

          {/* Stats Preview */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 max-w-2xl mx-auto mb-16 sm:mb-20 lg:mb-28 animate-fade-in-scale px-4">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-tech-blue mb-1">
                {new Date().getFullYear() - COMPANY.stats.foundedYear}+
              </div>
              <div className="text-xs sm:text-sm text-white/70">{t.stats.years_experience}</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-tech-blue mb-1">
                {COMPANY.stats.projectsCompleted}+
              </div>
              <div className="text-xs sm:text-sm text-white/70">{t.stats.projects_completed}</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-tech-blue mb-1">
                {COMPANY.stats.clientsSatisfied}+
              </div>
              <div className="text-xs sm:text-sm text-white/70">{t.stats.satisfied_clients}</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-tech-blue mb-1">
                {COMPANY.stats.countriesServed}+
              </div>
              <div className="text-xs sm:text-sm text-white/70">{t.stats.countries_served}</div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button 
          onClick={scrollToNextSection}
          className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 text-white/70 hover:text-white transition-smooth"
        >
          <div className="flex flex-col items-center">
            <span className="text-xs sm:text-sm mb-1 sm:mb-2">{t.hero.scroll_down}</span>
            <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 animate-bounce" />
          </div>
        </button>
      </div>
    </section>
  );
}