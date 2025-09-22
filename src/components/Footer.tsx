import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter, Github, Facebook } from 'lucide-react';
import { COMPANY } from '@/config/company';
import { useLanguage } from '@/hooks/useLanguage';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-gradient-hero text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">NT</span>
              </div>
              <span className="text-2xl font-bold">{COMPANY.name}</span>
            </div>
            <p className="text-white/80 mb-6 max-w-md leading-relaxed">
              {t.footer.description}
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-3 text-white/80">
                <Mail className="w-4 h-4" />
                <span className="text-sm">{COMPANY.email}</span>
              </div>
              <div className="flex items-center space-x-3 text-white/80">
                <Phone className="w-4 h-4" />
                <span className="text-sm">{COMPANY.phone}</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t.footer.quick_links}</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-white/80 hover:text-white transition-smooth text-sm">
                  {t.nav.about}
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-white/80 hover:text-white transition-smooth text-sm">
                  {t.nav.services}
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-white/80 hover:text-white transition-smooth text-sm">
                  {t.nav.portfolio}
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-white/80 hover:text-white transition-smooth text-sm">
                  {t.nav.careers}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/80 hover:text-white transition-smooth text-sm">
                  {t.nav.contact}
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t.footer.our_services}</h3>
            <ul className="space-y-2">
              {COMPANY.services.slice(0, 6).map((service) => (
                <li key={service.name}>
                  <span className="text-white/80 text-sm">{service.name}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Office Locations */}
        <div className="mt-12 pt-8 border-t border-white/20">
          <h3 className="text-lg font-semibold mb-6">{t.contact.office_locations}</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {COMPANY.offices.map((office) => (
              <div key={office.city} className="bg-white/10 rounded-lg p-4 hover:bg-white/20 hover:shadow-lg hover:shadow-white/10 hover:scale-105 transition-all duration-300">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-tech-blue mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-white mb-1">
                      {office.city}, {office.country}
                    </h4>
                    <p className="text-white/80 text-sm mb-2">{office.address}</p>
                    <p className="text-white/70 text-xs">
                      {office.phone} • {office.timezone}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/70 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} {COMPANY.name}. {t.footer.rights_reserved}
          </p>
          
          {/* Social Links */}
          <div className="flex items-center space-x-4">
            <span className="text-white/80 text-sm mr-2">{t.footer.follow_us}:</span>
            <a
              href={COMPANY.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white transition-smooth hover:scale-110"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href={COMPANY.social.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white transition-smooth hover:scale-110"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href={COMPANY.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white transition-smooth hover:scale-110"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href={COMPANY.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white transition-smooth hover:scale-110"
            >
              <Facebook className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}