import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MapPin, Calendar, Users, ArrowRight, Filter, Search } from 'lucide-react';
import { TEAM_DATA } from '@/constants/data';
import { useLanguage } from '@/hooks/useLanguage';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useNavigate } from 'react-router-dom';

export default function Team() {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [selectedDepartment, setSelectedDepartment] = useState('All');
  const [selectedLevel, setSelectedLevel] = useState('All');

  // Get unique departments and levels
  const departments = ['All', ...Array.from(new Set(TEAM_DATA.map(member => member.department)))];
  const levels = ['All', ...Array.from(new Set(TEAM_DATA.map(member => member.level)))];

  // Filter team members based on selected filters
  const filteredTeam = TEAM_DATA.filter(member => {
    const departmentMatch = selectedDepartment === 'All' || member.department === selectedDepartment;
    const levelMatch = selectedLevel === 'All' || member.level === selectedLevel;
    return departmentMatch && levelMatch;
  });

  // Auto-advance carousel
  useEffect(() => {
    if (!isAutoPlaying || filteredTeam.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % filteredTeam.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, filteredTeam.length]);

  // Reset carousel when filters change
  useEffect(() => {
    setCurrentIndex(0);
  }, [selectedDepartment, selectedLevel]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % filteredTeam.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + filteredTeam.length) % filteredTeam.length);
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
    <div className="min-h-screen bg-gradient-hero">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="pt-20 sm:pt-24 pb-12 sm:pb-16 bg-gradient-hero">
          <div className="container mx-auto px-4 text-center">
            <div className="inline-flex items-center gap-2 bg-gradient-accent text-white px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
              <Users className="w-3 h-3 sm:w-4 sm:h-4" />
              Our Team
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-4 sm:mb-6">
              Meet Our <span className="text-gradient">Expert Team</span>
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/80 max-w-3xl mx-auto mb-6 sm:mb-8 px-2">
              Talented professionals working together to deliver exceptional results and drive innovation in technology.
            </p>
            
            {/* Team Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 max-w-4xl mx-auto px-4">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-1 sm:mb-2">
                  {TEAM_DATA.length}+
                </div>
                <div className="text-xs sm:text-sm text-white/70 font-medium">Team Members</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-1 sm:mb-2">
                  {TEAM_DATA.filter(m => m.department === 'Engineering').length}
                </div>
                <div className="text-xs sm:text-sm text-white/70 font-medium">Engineers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-1 sm:mb-2">
                  {TEAM_DATA.filter(m => m.level === 'Senior' || m.level === 'Lead').length}
                </div>
                <div className="text-xs sm:text-sm text-white/70 font-medium">Senior Level</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-1 sm:mb-2">
                  2
                </div>
                <div className="text-xs sm:text-sm text-white/70 font-medium">Countries</div>
              </div>
            </div>
          </div>
        </section>

        {/* Filters Section */}
        <section className="py-4 sm:py-6 lg:py-8 bg-white/5 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <div className="flex flex-col gap-4 sm:gap-6">
              <div className="flex items-center gap-2 sm:gap-4">
                <Filter className="w-4 h-4 sm:w-5 sm:h-5 text-white/70" />
                <span className="text-white/70 font-medium text-sm sm:text-base">Filter by:</span>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                {/* Department Filter */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2">
                  <span className="text-white/70 text-xs sm:text-sm font-medium">Department:</span>
                  <div className="flex flex-wrap gap-2">
                    {departments.map((dept) => (
                      <Button
                        key={dept}
                        variant={selectedDepartment === dept ? "default" : "outline"}
                        size="sm"
                        onClick={() => setSelectedDepartment(dept)}
                        className={`text-xs sm:text-sm px-2 sm:px-3 py-1 sm:py-2 ${
                          selectedDepartment === dept
                            ? 'bg-gradient-accent text-white border-0'
                            : 'bg-white/10 text-white border-white/20 hover:bg-white/20'
                        } transition-all duration-300`}
                      >
                        {dept}
                      </Button>
                    ))}
                  </div>
                </div>

                {/* Level Filter */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2">
                  <span className="text-white/70 text-xs sm:text-sm font-medium">Level:</span>
                  <div className="flex flex-wrap gap-2">
                    {levels.map((level) => (
                      <Button
                        key={level}
                        variant={selectedLevel === level ? "default" : "outline"}
                        size="sm"
                        onClick={() => setSelectedLevel(level)}
                        className={`text-xs sm:text-sm px-2 sm:px-3 py-1 sm:py-2 ${
                          selectedLevel === level
                            ? 'bg-gradient-accent text-white border-0'
                            : 'bg-white/10 text-white border-white/20 hover:bg-white/20'
                        } transition-all duration-300`}
                      >
                        {level}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Carousel Section */}
        <section className="py-8 sm:py-12 lg:py-16 xl:py-24 bg-gradient-to-br from-background via-background to-muted/20">
          <div className="container mx-auto px-4">
            {filteredTeam.length > 0 ? (
              <div className="relative max-w-6xl mx-auto">
                {/* Main Card Display */}
                <div className="relative h-[500px] sm:h-[600px] overflow-hidden rounded-xl sm:rounded-2xl">
                  <div 
                    className="flex transition-transform duration-700 ease-in-out h-full"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                  >
                    {filteredTeam.map((member, index) => (
                      <div key={member.id} className="w-full flex-shrink-0 px-2 sm:px-4">
                        <Card className="h-full bg-gradient-card border-0 shadow-tech hover-lift overflow-hidden">
                          <CardContent className="p-0 h-full flex flex-col lg:flex-row">
                            {/* Image Section */}
                            <div className="lg:w-1/2 relative overflow-hidden">
                              <div className="h-48 sm:h-64 lg:h-full bg-gradient-to-br from-tech-blue/20 to-tech-purple/20 flex items-center justify-center">
                                <div className="w-24 h-24 sm:w-32 sm:h-32 lg:w-48 lg:h-48 bg-gradient-accent rounded-full flex items-center justify-center text-white text-2xl sm:text-4xl lg:text-6xl font-bold">
                                  {member.name.split(' ').map(n => n[0]).join('')}
                                </div>
                              </div>
                              {/* Floating Elements */}
                              <div className="absolute top-2 sm:top-4 right-2 sm:right-4">
                                <Badge className={`${getLevelColor(member.level)} border-0 shadow-lg text-xs sm:text-sm px-2 py-1`}>
                                  {member.level}
                                </Badge>
                              </div>
                              <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4">
                                <Badge className={`${getDepartmentColor(member.department)} border text-xs sm:text-sm px-2 py-1`}>
                                  {member.department}
                                </Badge>
                              </div>
                            </div>

                            {/* Content Section */}
                            <div className="lg:w-1/2 p-4 sm:p-6 lg:p-8 flex flex-col justify-center">
                              <div className="mb-4 sm:mb-6">
                                <h3 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-display font-bold text-foreground mb-1 sm:mb-2">
                                  {member.name}
                                </h3>
                                <p className="text-base sm:text-lg lg:text-xl text-tech-blue font-semibold mb-2 sm:mb-4">
                                  {member.position}
                                </p>
                                <p className="text-muted-foreground text-sm sm:text-base lg:text-lg leading-relaxed">
                                  {member.bio}
                                </p>
                              </div>

                              {/* Experience & Location */}
                              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-6 mb-4 sm:mb-6">
                                <div className="flex items-center gap-2 text-muted-foreground">
                                  <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                                  <span className="text-xs sm:text-sm font-medium">{member.experience}</span>
                                </div>
                                <div className="flex items-center gap-2 text-muted-foreground">
                                  <MapPin className="w-3 h-3 sm:w-4 sm:h-4" />
                                  <span className="text-xs sm:text-sm font-medium">{member.location}</span>
                                </div>
                              </div>

                              {/* Skills */}
                              <div className="mb-6 sm:mb-8">
                                <h4 className="text-xs sm:text-sm font-semibold text-foreground mb-2 sm:mb-3 uppercase tracking-wide">
                                  Key Skills
                                </h4>
                                <div className="flex flex-wrap gap-1 sm:gap-2">
                                  {member.skills.map((skill, skillIndex) => (
                                    <Badge 
                                      key={skillIndex}
                                      variant="outline" 
                                      className="bg-white/50 text-foreground border-border hover:bg-tech-blue/10 hover:text-tech-blue hover:border-tech-blue/30 transition-all duration-300 text-xs sm:text-sm px-2 py-1"
                                    >
                                      {skill}
                                    </Badge>
                                  ))}
                                </div>
                              </div>

                              {/* Action Button */}
                              <Button 
                                className="bg-gradient-accent hover:shadow-glow transition-smooth group w-fit text-sm sm:text-base px-4 py-2"
                                onClick={() => console.log(`View profile: ${member.name}`)}
                              >
                                View Profile
                                <ArrowRight className="ml-2 w-3 h-3 sm:w-4 sm:h-4 transition-transform group-hover:translate-x-1" />
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Navigation Controls */}
                <div className="flex items-center justify-between mt-4 sm:mt-6 lg:mt-8">
                  {/* Previous Button */}
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={prevSlide}
                    disabled={filteredTeam.length <= 1}
                    className="bg-white/80 hover:bg-white hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed text-xs sm:text-sm px-3 sm:px-4 py-2"
                  >
                    ← Previous
                  </Button>

                  {/* Dots Indicator */}
                  <div className="flex items-center gap-1 sm:gap-2">
                    {filteredTeam.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
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
                    size="sm"
                    onClick={nextSlide}
                    disabled={filteredTeam.length <= 1}
                    className="bg-white/80 hover:bg-white hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed text-xs sm:text-sm px-3 sm:px-4 py-2"
                  >
                    Next →
                  </Button>
                </div>

              </div>
            ) : (
              <div className="text-center py-16">
                <div className="w-20 h-20 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">No Team Members Found</h3>
                <p className="text-muted-foreground text-lg mb-6 max-w-md mx-auto">
                  No team members match the selected filters. Try adjusting your search criteria.
                </p>
                <Button
                  onClick={() => {
                    setSelectedDepartment('All');
                    setSelectedLevel('All');
                  }}
                  className="bg-gradient-accent hover:shadow-glow transition-smooth"
                >
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 sm:py-16 bg-gradient-accent">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-white mb-4 sm:mb-6">
              Join Our Team
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/80 max-w-2xl mx-auto mb-6 sm:mb-8 px-2">
              We're always looking for talented individuals to join our growing team. 
              Explore our open positions and be part of our innovative journey.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <Button
                size="lg"
                onClick={() => navigate('/careers')}
                className="w-full sm:w-auto bg-white text-tech-dark hover:bg-white/90 hover:shadow-glow transition-smooth px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold"
              >
                View Open Positions
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
              </Button>
              <Button
                size="lg"
                onClick={() => navigate('/contact')}
                className="w-full sm:w-auto border-2 border-white/30 text-white hover:bg-white/20 hover:border-white/60 hover:text-white hover:shadow-lg hover:shadow-white/10 hover:scale-105 transition-all duration-300 group px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg bg-transparent font-display font-medium"
              >
                Contact Us
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
