import { Monitor, Smartphone, Users, CreditCard, GraduationCap, Building, ArrowRight, Star, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { COMPANY } from '@/config/company';
import { useLanguage } from '@/hooks/useLanguage';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';

const Index = () => {
  const { t } = useLanguage();

  const serviceIcons = {
    'Web Development': Monitor,
    'Mobile Applications': Smartphone,
    'CRM Solutions': Users,
    'FinTech Solutions': CreditCard,
    'EdTech Solutions': GraduationCap,
    'ERP Systems': Building,
  };

  const testimonials = [
    {
      name: "Sarah Kim",
      position: "CTO, TechStart Inc.",
      content: "NextGen Tech delivered exceptional results on our fintech platform. Their expertise and professionalism exceeded our expectations.",
      rating: 5
    },
    {
      name: "Mohammed Al-Rashid", 
      position: "Founder, EduLearn",
      content: "The team's understanding of our educational technology needs was outstanding. They created exactly what we envisioned.",
      rating: 5
    },
    {
      name: "Anna Kowalski",
      position: "CEO, RetailPro",
      content: "Our e-commerce platform built by NextGen Tech has increased our sales by 300%. Highly recommended!",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      
      {/* Services Preview */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 animate-fade-in">
              {t.services.title}
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto animate-fade-in">
              {t.services.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {COMPANY.services.slice(0, 6).map((service, index) => {
              const IconComponent = serviceIcons[service.name as keyof typeof serviceIcons];
              return (
                <Card key={service.name} className="bg-gradient-card border-0 shadow-tech hover-lift group animate-fade-in-scale">
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-hero rounded-lg flex items-center justify-center mb-4 group-hover:shadow-glow transition-smooth">
                      {IconComponent && <IconComponent className="w-8 h-8 text-white" />}
                    </div>
                    <CardTitle className="text-xl font-bold text-foreground">
                      {service.name}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {service.technologies.slice(0, 3).map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                      {service.technologies.length > 3 && (
                        <Badge variant="secondary" className="text-xs">
                          +{service.technologies.length - 3}
                        </Badge>
                      )}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Button className="bg-gradient-hero hover:shadow-glow transition-smooth">
              {t.common.view_all} Services
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              What Our Clients Say
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Trusted by businesses worldwide for delivering exceptional results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={testimonial.name} className="bg-background border shadow-sm hover-lift">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Why Choose NextGen Tech?
              </h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                We combine technical expertise with business understanding to deliver solutions that drive real results for your organization.
              </p>
              
              <div className="space-y-4">
                {[
                  "Proven track record with 150+ successful projects",
                  "Expert team with 5+ years average experience",
                  "Global presence with 24/7 support",
                  "Cutting-edge technology stack",
                  "Agile development methodology",
                  "Post-launch support and maintenance"
                ].map((point, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{point}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-8">
                <Button className="bg-gradient-hero hover:shadow-glow transition-smooth">
                  {t.common.get_started}
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <Card className="bg-gradient-card border-0 shadow-tech hover-lift text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-gradient mb-2">
                    {COMPANY.stats.projectsCompleted}+
                  </div>
                  <div className="text-sm text-muted-foreground">Projects Completed</div>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-card border-0 shadow-tech hover-lift text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-gradient mb-2">
                    {COMPANY.stats.clientsSatisfied}+
                  </div>
                  <div className="text-sm text-muted-foreground">Happy Clients</div>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-card border-0 shadow-tech hover-lift text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-gradient mb-2">
                    {COMPANY.stats.teamMembers}+
                  </div>
                  <div className="text-sm text-muted-foreground">Team Members</div>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-card border-0 shadow-tech hover-lift text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-gradient mb-2">
                    {COMPANY.stats.countriesServed}+
                  </div>
                  <div className="text-sm text-muted-foreground">Countries Served</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let's discuss your project and explore how we can help you achieve your digital transformation goals.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              size="lg" 
              className="bg-white text-tech-dark hover:bg-white/90 hover:shadow-glow transition-smooth px-8 py-4 text-lg font-semibold"
            >
              {t.common.get_started}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white/30 text-white hover:bg-white/10 hover:border-white transition-smooth px-8 py-4 text-lg"
            >
              {t.nav.portfolio}
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
