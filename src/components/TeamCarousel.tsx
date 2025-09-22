import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MapPin, Calendar, Users, ArrowRight } from 'lucide-react';
import { TEAM_DATA } from '@/constants/data';
import { useLanguage } from '@/hooks/useLanguage';

export default function TeamCarousel() {
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-advance carousel
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % TEAM_DATA.length);
    }, 4000); // Change every 4 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % TEAM_DATA.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + TEAM_DATA.length) % TEAM_DATA.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  const getLevelColor = (level: string) => {
    switch (level.toLowerCase()) {
      case 'lead':
        return 'bg-gradient-to-r from-purple-500 to-pink-500 text-white';
      case 'senior':
        return 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white';
      case 'mid':
        return 'bg-gradient-to-r from-green-500 to-emerald-500 text-white';
      case 'junior':
        return 'bg-gradient-to-r from-orange-500 to-yellow-500 text-white';
      default:
        return 'bg-gradient-to-r from-gray-500 to-gray-600 text-white';
    }
  };

  const getDepartmentColor = (department: string) => {
    switch (department.toLowerCase()) {
      case 'engineering':
        return 'bg-tech-blue/10 text-tech-blue border-tech-blue/20';
      case 'design':
        return 'bg-purple-500/10 text-purple-600 border-purple-500/20';
      case 'product':
        return 'bg-green-500/10 text-green-600 border-green-500/20';
      default:
        return 'bg-gray-500/10 text-gray-600 border-gray-500/20';
    }
  };

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-background via-background to-muted/20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-accent text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Users className="w-4 h-4" />
            Our Team
          </div>
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
            Meet Our <span className="text-gradient">Expert Team</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Talented professionals working together to deliver exceptional results and drive innovation in technology.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-6xl mx-auto">
          {/* Main Card Display */}
          <div className="relative h-[600px] overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-700 ease-in-out h-full"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {TEAM_DATA.map((member, index) => (
                <div key={member.id} className="w-full flex-shrink-0 px-4">
                  <Card className="h-full bg-gradient-card border-0 shadow-tech hover-lift overflow-hidden">
                    <CardContent className="p-0 h-full flex flex-col lg:flex-row">
                      {/* Image Section */}
                      <div className="lg:w-1/2 relative overflow-hidden">
                        <div className="h-64 lg:h-full bg-gradient-to-br from-tech-blue/20 to-tech-purple/20 flex items-center justify-center">
                          <div className="w-32 h-32 lg:w-48 lg:h-48 bg-gradient-accent rounded-full flex items-center justify-center text-white text-4xl lg:text-6xl font-bold">
                            {member.name.split(' ').map(n => n[0]).join('')}
                          </div>
                        </div>
                        {/* Floating Elements */}
                        <div className="absolute top-4 right-4">
                          <Badge className={`${getLevelColor(member.level)} border-0 shadow-lg`}>
                            {member.level}
                          </Badge>
                        </div>
                        <div className="absolute bottom-4 left-4">
                          <Badge className={`${getDepartmentColor(member.department)} border`}>
                            {member.department}
                          </Badge>
                        </div>
                      </div>

                      {/* Content Section */}
                      <div className="lg:w-1/2 p-8 flex flex-col justify-center">
                        <div className="mb-6">
                          <h3 className="text-3xl lg:text-4xl font-display font-bold text-foreground mb-2">
                            {member.name}
                          </h3>
                          <p className="text-xl text-tech-blue font-semibold mb-4">
                            {member.position}
                          </p>
                          <p className="text-muted-foreground text-lg leading-relaxed">
                            {member.bio}
                          </p>
                        </div>

                        {/* Experience & Location */}
                        <div className="flex items-center gap-6 mb-6">
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <Calendar className="w-4 h-4" />
                            <span className="text-sm font-medium">{member.experience}</span>
                          </div>
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <MapPin className="w-4 h-4" />
                            <span className="text-sm font-medium">{member.location}</span>
                          </div>
                        </div>

                        {/* Skills */}
                        <div className="mb-8">
                          <h4 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wide">
                            Key Skills
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {member.skills.map((skill, skillIndex) => (
                              <Badge 
                                key={skillIndex}
                                variant="outline" 
                                className="bg-white/50 text-foreground border-border hover:bg-tech-blue/10 hover:text-tech-blue hover:border-tech-blue/30 transition-all duration-300"
                              >
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        {/* Action Button */}
                        <Button 
                          className="bg-gradient-accent hover:shadow-glow transition-smooth group w-fit"
                          onClick={() => console.log(`View profile: ${member.name}`)}
                        >
                          View Profile
                          <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-8">
            {/* Previous Button */}
            <Button
              variant="outline"
              size="lg"
              onClick={prevSlide}
              className="bg-white/80 hover:bg-white hover:shadow-lg transition-all duration-300"
            >
              ← Previous
            </Button>

            {/* Dots Indicator */}
            <div className="flex items-center gap-2">
              {TEAM_DATA.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-tech-blue scale-125'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>

            {/* Next Button */}
            <Button
              variant="outline"
              size="lg"
              onClick={nextSlide}
              className="bg-white/80 hover:bg-white hover:shadow-lg transition-all duration-300"
            >
              Next →
            </Button>
          </div>

          {/* Auto-play Toggle */}
          <div className="text-center mt-6">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="text-muted-foreground hover:text-foreground"
            >
              {isAutoPlaying ? 'Pause' : 'Play'} Auto-advance
            </Button>
          </div>
        </div>

        {/* Team Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold text-tech-blue mb-2">
              {TEAM_DATA.length}+
            </div>
            <div className="text-muted-foreground font-medium">Team Members</div>
          </div>
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold text-tech-blue mb-2">
              {TEAM_DATA.filter(m => m.department === 'Engineering').length}
            </div>
            <div className="text-muted-foreground font-medium">Engineers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold text-tech-blue mb-2">
              {TEAM_DATA.filter(m => m.level === 'Senior' || m.level === 'Lead').length}
            </div>
            <div className="text-muted-foreground font-medium">Senior Level</div>
          </div>
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold text-tech-blue mb-2">
              2
            </div>
            <div className="text-muted-foreground font-medium">Countries</div>
          </div>
        </div>
      </div>
    </section>
  );
}
