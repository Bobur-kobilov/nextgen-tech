import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { COMPANY } from '@/config/company';
import { useLanguage } from '@/hooks/useLanguage';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    // Check initial scroll position when component mounts or location changes
    handleScroll();
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]); // Re-run when route changes

  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { path: '/', label: t.nav.home },
    { path: '/about', label: t.nav.about },
    { path: '/services', label: t.nav.services },
    { path: '/portfolio', label: t.nav.portfolio },
    { path: '/team', label: t.nav.team },
    { path: '/careers', label: t.nav.careers },
    { path: '/contact', label: t.nav.contact },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-subtle'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-8 h-8 bg-gradient-accent rounded-lg flex items-center justify-center transition-smooth group-hover:shadow-glow">
              <span className="text-white font-bold text-sm">NT</span>
            </div>
            <span className={`text-xl font-display font-black transition-smooth ${
              isScrolled 
                ? 'text-gray-900 group-hover:text-tech-blue' 
                : 'text-white group-hover:text-tech-blue'
            }`}>
              {COMPANY.name}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative text-sm font-semibold transition-smooth hover:text-tech-blue ${
                  isActive(item.path)
                    ? 'text-tech-blue'
                    : isScrolled 
                      ? 'text-gray-900 hover:text-tech-blue' 
                      : 'text-white hover:text-white/80'
                }`}
              >
                {item.label}
                {isActive(item.path) && (
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-tech-blue rounded-full" />
                )}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button 
              onClick={() => navigate('/contact')}
              className="bg-gradient-accent hover:shadow-glow transition-smooth font-display font-semibold"
            >
              {t.common.contact_us}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`lg:hidden p-2 transition-smooth ${
              isScrolled 
                ? 'text-gray-900 hover:text-tech-blue' 
                : 'text-white hover:text-tech-blue'
            }`}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-white/20 glass">
            <div className="py-4 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-4 py-2 text-sm font-medium transition-smooth ${
                    isActive(item.path)
                      ? 'text-tech-blue bg-white/10 rounded-md'
                      : 'text-white/80 hover:text-white hover:bg-white/5 rounded-md'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              
              
              <div className="px-4 py-2">
                <Button 
                  onClick={() => {
                    navigate('/contact');
                    setIsMenuOpen(false);
                  }}
                  className="w-full bg-gradient-accent hover:shadow-glow transition-smooth"
                >
                  {t.common.contact_us}
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}