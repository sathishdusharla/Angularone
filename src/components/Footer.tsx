import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-2xl font-bold text-white mb-4">BlockvoteX</h2>
            <p className="text-gray-400 mb-4">
              Revolutionizing democratic participation through secure, transparent, and accessible blockchain voting technology.
            </p>
            <div className="flex space-x-4">
              <SocialIcon icon={<Github />} href="#" />
              <SocialIcon icon={<Twitter />} href="#" />
              <SocialIcon icon={<Linkedin />} href="#" />
              <SocialIcon icon={<Mail />} href="#" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <FooterLink href="#about">About Us</FooterLink>
              <FooterLink href="#contact">Contact</FooterLink>
              <FooterLink href="#help">Help Center</FooterLink>
              <FooterLink href="#privacy">Privacy Policy</FooterLink>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li>support@blockvotex.com</li>
              <li>1-800-VOTE-NOW</li>
              <li>123 Democracy Street</li>
              <li>Blockchain City, BC 12345</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} BlockvoteX. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

const SocialIcon = ({ icon, href }: { icon: React.ReactNode; href: string }) => (
  <a
    href={href}
    className="text-gray-400 hover:text-blue-500 transition-colors duration-200"
  >
    {icon}
  </a>
);

const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <li>
    <a
      href={href}
      className="text-gray-400 hover:text-blue-500 transition-colors duration-200"
    >
      {children}
    </a>
  </li>
);

export default Footer;