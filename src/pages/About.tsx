import { Target, Eye, Heart, Globe, Users, Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { COMPANY } from '@/config/company';
import { useLanguage } from '@/hooks/useLanguage';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function About() {
  const { t } = useLanguage();

  const values = [
    {
      icon: Target,
      title: "Innovation",
      description: "We constantly push the boundaries of technology to deliver cutting-edge solutions."
    },
    {
      icon: Users,
      title: "Collaboration", 
      description: "We believe in the power of teamwork and partnership with our clients."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We strive for perfection in every project and deliver only the highest quality."
    },
    {
      icon: Heart,
      title: "Integrity",
      description: "We build trust through transparency, honesty, and ethical business practices."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
              {t.about.title}
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 animate-fade-in">
              {t.about.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <Card className="bg-gradient-card border-0 shadow-tech hover-lift">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-hero rounded-lg flex items-center justify-center mr-4">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">{t.about.mission_title}</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {t.about.mission_text}
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-0 shadow-tech hover-lift">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-hero rounded-lg flex items-center justify-center mr-4">
                    <Eye className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">{t.about.vision_title}</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {t.about.vision_text}
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Values */}
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              {t.about.values_title}
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Our core values guide everything we do and shape our culture
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {values.map((value, index) => (
              <Card key={value.title} className="bg-gradient-card border-0 shadow-tech hover-lift text-center">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{value.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <Globe className="w-8 h-8 text-primary mr-3" />
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                {t.about.global_presence}
              </h2>
            </div>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We serve clients worldwide from our strategically located offices
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {COMPANY.offices.map((office, index) => (
              <Card key={office.city} className="bg-gradient-card border-0 shadow-tech hover-lift">
                <CardContent className="p-8 text-center">
                  <div className="w-20 h-20 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl font-bold text-white">
                      {office.city.charAt(0)}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {office.city}
                  </h3>
                  <p className="text-lg text-muted-foreground font-medium mb-4">
                    {office.country}
                  </p>
                  <p className="text-sm text-muted-foreground mb-3">
                    {office.address}
                  </p>
                  <p className="text-sm text-muted-foreground mb-2">
                    {office.phone}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {office.timezone}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Our Impact
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Numbers that reflect our commitment to excellence and growth
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-5 gap-8">
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-gradient mb-2">
                {new Date().getFullYear() - COMPANY.stats.foundedYear}+
              </div>
              <div className="text-muted-foreground font-medium">{t.stats.years_experience}</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-gradient mb-2">
                {COMPANY.stats.projectsCompleted}+
              </div>
              <div className="text-muted-foreground font-medium">{t.stats.projects_completed}</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-gradient mb-2">
                {COMPANY.stats.clientsSatisfied}+
              </div>
              <div className="text-muted-foreground font-medium">{t.stats.satisfied_clients}</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-gradient mb-2">
                {COMPANY.stats.teamMembers}+
              </div>
              <div className="text-muted-foreground font-medium">{t.stats.team_members}</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-gradient mb-2">
                {COMPANY.stats.countriesServed}+
              </div>
              <div className="text-muted-foreground font-medium">{t.stats.countries_served}</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}