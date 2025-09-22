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

        {/* Team Masonry Section */}
        <section className="py-8 sm:py-12 lg:py-16 xl:py-24 bg-gradient-to-br from-background via-background to-muted/20">
          <div className="container mx-auto px-4">
            {filteredTeam.length > 0 ? (
              <div className="max-w-6xl mx-auto">
                {/* Masonry Flex Layout */}
                <div className="flex flex-col items-center gap-8 sm:gap-12 max-w-5xl mx-auto">
                  {/* First Row - 3 members */}
                  <div className="flex justify-center gap-6 sm:gap-8">
                    {filteredTeam.slice(0, 3).map((member) => (
                      <Card key={member.id} className="group bg-gradient-card border-0 shadow-tech hover-lift overflow-hidden w-80 sm:w-96">
                        <CardContent className="p-0">
                          <div className="flex flex-col h-full">
                            {/* Image Section */}
                            <div className="relative overflow-hidden">
                              <div className="h-48 sm:h-56 bg-gradient-to-br from-tech-blue/20 to-tech-purple/20 flex items-center justify-center">
                                <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-accent rounded-full flex items-center justify-center text-white text-xl sm:text-2xl font-bold">
                                  {member.name.split(' ').map(n => n[0]).join('')}
                                </div>
                              </div>
                              {/* Level Badge */}
                              <div className="absolute top-3 right-3">
                                <Badge className={`${getLevelColor(member.level)} border-0 shadow-lg text-xs px-2 py-1`}>
                                  {member.level}
                                </Badge>
                              </div>
                              {/* Department Badge */}
                              <div className="absolute bottom-3 left-3">
                                <Badge className={`${getDepartmentColor(member.department)} border text-xs px-2 py-1`}>
                                  {member.department}
                                </Badge>
                              </div>
                            </div>

                            {/* Content Section */}
                            <div className="p-4 sm:p-6 flex-1 flex flex-col">
                              <div className="mb-4 flex-1">
                                <h3 className="text-lg sm:text-xl font-display font-bold text-foreground mb-1">
                                  {member.name}
                                </h3>
                                <p className="text-sm sm:text-base text-tech-blue font-semibold mb-2">
                                  {member.position}
                                </p>
                                <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed line-clamp-3">
                                  {member.bio}
                                </p>
                              </div>

                              {/* Experience & Location */}
                              <div className="flex flex-col gap-2 mb-4">
                                <div className="flex items-center gap-2 text-muted-foreground">
                                  <Calendar className="w-3 h-3" />
                                  <span className="text-xs font-medium">{member.experience}</span>
                                </div>
                                <div className="flex items-center gap-2 text-muted-foreground">
                                  <MapPin className="w-3 h-3" />
                                  <span className="text-xs font-medium">{member.location}</span>
                                </div>
                              </div>

                              {/* Skills */}
                              <div className="mb-4">
                                <h4 className="text-xs font-semibold text-foreground mb-2 uppercase tracking-wide">
                                  Key Skills
                                </h4>
                                <div className="flex flex-wrap gap-1">
                                  {member.skills.slice(0, 3).map((skill, skillIndex) => (
                                    <Badge 
                                      key={skillIndex}
                                      variant="outline" 
                                      className="bg-white/50 text-foreground border-border hover:bg-tech-blue/10 hover:text-tech-blue hover:border-tech-blue/30 transition-all duration-300 text-xs px-2 py-1"
                                    >
                                      {skill}
                                    </Badge>
                                  ))}
                                </div>
                              </div>

                              {/* Action Button */}
                              <Button 
                                className="w-full bg-gradient-accent hover:shadow-glow transition-smooth group text-sm px-4 py-2"
                                onClick={() => console.log(`View profile: ${member.name}`)}
                              >
                                View Profile
                                <ArrowRight className="ml-2 w-3 h-3 transition-transform group-hover:translate-x-1" />
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  {/* Second Row - 2 members positioned in gaps (masonry style) */}
                  {filteredTeam.length > 3 && (
                    <div className="flex justify-center gap-6 sm:gap-8" style={{marginLeft: 'calc(50% - 25%)'}}>
                      {filteredTeam.slice(3, 5).map((member) => (
                        <Card key={member.id} className="group bg-gradient-card border-0 shadow-tech hover-lift overflow-hidden w-80 sm:w-96">
                          <CardContent className="p-0">
                            <div className="flex flex-col h-full">
                              {/* Image Section */}
                              <div className="relative overflow-hidden">
                                <div className="h-48 sm:h-56 bg-gradient-to-br from-tech-blue/20 to-tech-purple/20 flex items-center justify-center">
                                  <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-accent rounded-full flex items-center justify-center text-white text-xl sm:text-2xl font-bold">
                                    {member.name.split(' ').map(n => n[0]).join('')}
                                  </div>
                                </div>
                                {/* Level Badge */}
                                <div className="absolute top-3 right-3">
                                  <Badge className={`${getLevelColor(member.level)} border-0 shadow-lg text-xs px-2 py-1`}>
                                    {member.level}
                                  </Badge>
                                </div>
                                {/* Department Badge */}
                                <div className="absolute bottom-3 left-3">
                                  <Badge className={`${getDepartmentColor(member.department)} border text-xs px-2 py-1`}>
                                    {member.department}
                                  </Badge>
                                </div>
                              </div>

                              {/* Content Section */}
                              <div className="p-4 sm:p-6 flex-1 flex flex-col">
                                <div className="mb-4 flex-1">
                                  <h3 className="text-lg sm:text-xl font-display font-bold text-foreground mb-1">
                                    {member.name}
                                  </h3>
                                  <p className="text-sm sm:text-base text-tech-blue font-semibold mb-2">
                                    {member.position}
                                  </p>
                                  <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed line-clamp-3">
                                    {member.bio}
                                  </p>
                                </div>

                                {/* Experience & Location */}
                                <div className="flex flex-col gap-2 mb-4">
                                  <div className="flex items-center gap-2 text-muted-foreground">
                                    <Calendar className="w-3 h-3" />
                                    <span className="text-xs font-medium">{member.experience}</span>
                                  </div>
                                  <div className="flex items-center gap-2 text-muted-foreground">
                                    <MapPin className="w-3 h-3" />
                                    <span className="text-xs font-medium">{member.location}</span>
                                  </div>
                                </div>

                                {/* Skills */}
                                <div className="mb-4">
                                  <h4 className="text-xs font-semibold text-foreground mb-2 uppercase tracking-wide">
                                    Key Skills
                                  </h4>
                                  <div className="flex flex-wrap gap-1">
                                    {member.skills.slice(0, 3).map((skill, skillIndex) => (
                                      <Badge 
                                        key={skillIndex}
                                        variant="outline" 
                                        className="bg-white/50 text-foreground border-border hover:bg-tech-blue/10 hover:text-tech-blue hover:border-tech-blue/30 transition-all duration-300 text-xs px-2 py-1"
                                      >
                                        {skill}
                                      </Badge>
                                    ))}
                                  </div>
                                </div>

                                {/* Action Button */}
                                <Button 
                                  className="w-full bg-gradient-accent hover:shadow-glow transition-smooth group text-sm px-4 py-2"
                                  onClick={() => console.log(`View profile: ${member.name}`)}
                                >
                                  View Profile
                                  <ArrowRight className="ml-2 w-3 h-3 transition-transform group-hover:translate-x-1" />
                                </Button>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  )}
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
