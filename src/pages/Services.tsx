import { Monitor, Smartphone, Users, CreditCard, GraduationCap, Building, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { COMPANY } from '@/config/company';
import { useLanguage } from '@/hooks/useLanguage';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useNavigate } from 'react-router-dom';

export default function Services() {
  const { t } = useLanguage();
  const navigate = useNavigate();

  const serviceIcons = {
    'Web Development': Monitor,
    'Mobile Applications': Smartphone,
    'CRM Solutions': Users,
    'FinTech Solutions': CreditCard,
    'EdTech Solutions': GraduationCap,
    'ERP Systems': Building,
  };

  const getServiceDescription = (serviceName: string) => {
    const serviceMap: Record<string, string> = {
      'Web Development': t.services.web_dev_desc,
      'Mobile Applications': t.services.mobile_apps_desc,
      'CRM Solutions': t.services.crm_desc,
      'FinTech Solutions': t.services.fintech_desc,
      'EdTech Solutions': t.services.edtech_desc,
      'ERP Systems': t.services.erp_desc,
    };
    return serviceMap[serviceName] || serviceName;
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
              {t.services.title}
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 animate-fade-in">
              {t.services.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {COMPANY.services.map((service, index) => {
              const IconComponent = serviceIcons[service.name as keyof typeof serviceIcons];
              return (
                <Card key={service.name} className="bg-gradient-card border-0 shadow-tech hover-lift group h-full flex flex-col">
                  <CardHeader className="flex-grow">
                    <div className="w-16 h-16 bg-gradient-hero rounded-lg flex items-center justify-center mb-4 group-hover:shadow-glow transition-smooth">
                      {IconComponent && <IconComponent className="w-8 h-8 text-white" />}
                    </div>
                    <CardTitle className="text-xl font-bold text-foreground">
                      {service.name}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {getServiceDescription(service.name)}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex flex-col flex-grow">
                    <div className="flex flex-wrap gap-2 mb-6 flex-grow">
                      {service.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <Button 
                      onClick={() => {
                        // You can implement service details functionality here
                        console.log(`Learn more about: ${service.name}`);
                        // For now, just show an alert
                        alert(`Learn more about ${service.name} - This would show detailed service information`);
                      }}
                      className="w-full justify-between bg-transparent text-foreground hover:bg-tech-blue/10 hover:text-tech-blue transition-all duration-300 group mt-auto"
                    >
                      {t.common.learn_more}
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Technology Stack
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We work with cutting-edge technologies to deliver the best solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {COMPANY.services.map((service) => (
              <Card key={service.name} className="bg-background border shadow-sm hover-lift">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold text-foreground">
                    {service.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech) => (
                      <Badge 
                        key={tech} 
                        className="bg-gradient-hero text-white hover:shadow-glow transition-smooth"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Our Development Process
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A proven methodology that ensures project success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                step: "01", 
                title: "Discovery", 
                description: "Understanding your business needs and requirements" 
              },
              { 
                step: "02", 
                title: "Planning", 
                description: "Creating detailed project roadmap and architecture" 
              },
              { 
                step: "03", 
                title: "Development", 
                description: "Building your solution with best practices and quality" 
              },
              { 
                step: "04", 
                title: "Deployment", 
                description: "Launching and maintaining your successful project" 
              }
            ].map((process, index) => (
              <Card key={process.step} className="bg-gradient-card border-0 shadow-tech hover-lift text-center">
                <CardContent className="p-8">
                  <div className="text-4xl font-bold text-tech-blue mb-4">
                    {process.step}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {process.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {process.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help transform your business with innovative technology solutions
          </p>
          <Button 
            size="lg" 
            onClick={() => navigate('/contact')}
            className="bg-white text-tech-dark hover:bg-white/90 hover:shadow-glow transition-smooth px-8 py-4 text-lg font-semibold"
          >
            {t.common.contact_us}
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}