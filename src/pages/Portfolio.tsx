import { ExternalLink, Github, ArrowRight, Folder } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/hooks/useLanguage';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { PROJECTS_DATA, FILTER_CATEGORIES, EMPTY_STATES } from '@/constants/data';
import { useNavigate } from 'react-router-dom';

export default function Portfolio() {
  const { t } = useLanguage();
  const navigate = useNavigate();

  // Use data from constants
  const projects = PROJECTS_DATA;
  const categories = FILTER_CATEGORIES.projects;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
              {t.nav.portfolio}
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 animate-fade-in">
              Showcasing our innovative solutions and successful project deliveries
            </p>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => {
                  // Filter functionality - you can implement this later
                  console.log(`Filter by: ${category}`);
                }}
                className="rounded-full px-6 bg-white/90 text-foreground hover:bg-white hover:text-tech-blue hover:border hover:border-tech-blue/30 hover:shadow-lg hover:shadow-tech-blue/10 hover:scale-105 transition-all duration-300 font-medium"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Featured Projects
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Our most impactful and innovative solutions
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {projects.filter(project => project.featured).length > 0 ? (
              projects
                .filter(project => project.featured)
                .map((project) => (
                <Card key={project.id} className="bg-gradient-card border-0 shadow-tech hover-lift overflow-hidden group">
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <Badge className="mb-3 bg-gradient-hero text-white">
                          {project.category}
                        </Badge>
                        <CardTitle className="text-xl font-bold text-foreground mb-2">
                          {project.title}
                        </CardTitle>
                        <CardDescription className="text-muted-foreground">
                          {project.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <Button 
                        size="sm" 
                        onClick={() => window.open('#', '_blank')}
                        className="bg-gradient-hero hover:shadow-glow transition-smooth"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Live
                      </Button>
                      <Button 
                        size="sm" 
                        variant="outline"
                        onClick={() => window.open('#', '_blank')}
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Source
                      </Button>
                    </div>
                  </CardContent>
                </Card>
                ))
            ) : (
              <div className="col-span-2 flex flex-col items-center justify-center py-16 text-center">
                <div className="w-20 h-20 bg-gradient-accent rounded-full flex items-center justify-center mb-6">
                  <Folder className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">{EMPTY_STATES.noProjects.title}</h3>
                <p className="text-muted-foreground text-lg mb-6 max-w-md">{EMPTY_STATES.noProjects.message}</p>
                <Button 
                  onClick={() => navigate('/contact')}
                  className="bg-gradient-accent hover:shadow-glow transition-smooth"
                >
                  {EMPTY_STATES.noProjects.action}
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* All Projects */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              All Projects
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Explore our complete portfolio of delivered solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Card key={project.id} className="bg-background border shadow-sm hover-lift overflow-hidden group">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <Badge className="mb-3 bg-gradient-hero text-white w-fit">
                    {project.category}
                  </Badge>
                  <CardTitle className="text-lg font-bold text-foreground">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground text-sm">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="secondary" className="text-xs">
                        +{project.technologies.length - 3}
                      </Badge>
                    )}
                  </div>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={() => {
                      // You can implement project details modal/page here
                      console.log(`View details for: ${project.title}`);
                    }}
                    className="w-full justify-between group-hover:bg-muted transition-smooth"
                  >
                    View Details
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Button>
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
            Ready to Create Your Success Story?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join our satisfied clients and let us help you build your next innovative solution
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