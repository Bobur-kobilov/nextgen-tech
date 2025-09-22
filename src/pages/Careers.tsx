import { MapPin, Clock, Briefcase, Users, ArrowRight, Send } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/hooks/useLanguage';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { JOB_OPENINGS_DATA, EMPTY_STATES } from '@/constants/data';
import { useNavigate } from 'react-router-dom';

export default function Careers() {
  const { t } = useLanguage();
  const navigate = useNavigate();

  // Use data from constants - you can easily toggle this to show empty state
  const jobOpenings: typeof JOB_OPENINGS_DATA = JOB_OPENINGS_DATA; // Change to [] to test empty state

  const benefits = [
    {
      icon: Users,
      title: "Collaborative Team",
      description: "Work with talented professionals from around the world"
    },
    {
      icon: Briefcase,
      title: "Growth Opportunities", 
      description: "Continuous learning and career advancement programs"
    },
    {
      icon: MapPin,
      title: "Global Presence",
      description: "Opportunities to work across our international offices"
    },
    {
      icon: Clock,
      title: "Work-Life Balance",
      description: "Flexible working hours and remote work options"
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
              {t.careers.title}
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 mb-8 animate-fade-in">
              {t.careers.subtitle}
            </p>
            <p className="text-lg text-white/80 animate-fade-in">
              {t.careers.join_team}
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Why Join NextGen Tech?
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We offer an environment where innovation thrives and careers flourish
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={benefit.title} className="bg-gradient-card border-0 shadow-tech hover-lift text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Open Positions
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Find your perfect role and start your journey with us
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {jobOpenings.length > 0 ? (
              jobOpenings.map((job) => (
              <Card key={job.id} className="bg-background border shadow-sm hover-lift">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        {job.urgent && (
                          <Badge className="bg-destructive text-destructive-foreground text-xs">
                            Urgent
                          </Badge>
                        )}
                        <Badge variant="secondary" className="text-xs">
                          {job.department}
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          {job.level}
                        </Badge>
                      </div>
                      <CardTitle className="text-xl font-bold text-foreground mb-2">
                        {job.title}
                      </CardTitle>
                      <CardDescription className="text-muted-foreground">
                        {job.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {job.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {job.type}
                      </div>
                    </div>
                    
                    <div>
                      <p className="text-sm font-medium text-foreground mb-2">Required Skills:</p>
                      <div className="flex flex-wrap gap-1">
                        {job.requirements.map((req) => (
                          <Badge key={req} variant="secondary" className="text-xs">
                            {req}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <Button 
                      onClick={() => {
                        // You can implement job application functionality here
                        console.log(`Apply for: ${job.title}`);
                        // For now, just show an alert
                        alert(`Application for ${job.title} - This would open an application form or redirect to application page`);
                      }}
                      className="w-full bg-gradient-hero hover:shadow-glow transition-smooth group"
                    >
                      Apply Now
                      <Send className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
              ))
            ) : (
              <div className="col-span-2 flex flex-col items-center justify-center py-16 text-center">
                <div className="w-20 h-20 bg-gradient-accent rounded-full flex items-center justify-center mb-6">
                  <Briefcase className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">{EMPTY_STATES.noJobs.title}</h3>
                <p className="text-muted-foreground text-lg mb-6 max-w-md">{EMPTY_STATES.noJobs.message}</p>
                <Button 
                  onClick={() => navigate('/contact')}
                  className="bg-gradient-accent hover:shadow-glow transition-smooth"
                >
                  {EMPTY_STATES.noJobs.action}
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Our Culture
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We foster an inclusive environment where everyone can thrive
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-gradient-card border-0 shadow-tech hover-lift text-center">
              <CardContent className="p-8">
                <div className="text-4xl font-bold text-gradient mb-4">95%</div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Employee Satisfaction</h3>
                <p className="text-muted-foreground text-sm">
                  Our team loves working here and growing their careers with us
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-card border-0 shadow-tech hover-lift text-center">
              <CardContent className="p-8">
                <div className="text-4xl font-bold text-gradient mb-4">50+</div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Team Members</h3>
                <p className="text-muted-foreground text-sm">
                  Diverse professionals from different backgrounds and expertise
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-card border-0 shadow-tech hover-lift text-center">
              <CardContent className="p-8">
                <div className="text-4xl font-bold text-gradient mb-4">15+</div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Countries</h3>
                <p className="text-muted-foreground text-sm">
                  Global team working together across different time zones
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Don't See Your Role?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            We're always looking for talented individuals. Send us your resume and let's talk about opportunities.
          </p>
          <Button 
            size="lg" 
            onClick={() => navigate('/contact')}
            className="bg-white text-tech-dark hover:bg-white/90 hover:shadow-glow transition-smooth px-8 py-4 text-lg font-semibold"
          >
            Send Your Resume
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}