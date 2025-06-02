import { useState, useEffect } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import { FaHome, FaUser, FaTools, FaProjectDiagram, FaEnvelope } from 'react-icons/fa';

const Navbar = () => {
  const links = [
    { to: 'home', icon: <FaHome size={20} />, label: 'Home' },
    { to: 'about', icon: <FaUser size={20} />, label: 'About' },
    { to: 'skills', icon: <FaTools size={20} />, label: 'Skills' },
    { to: 'projects', icon: <FaProjectDiagram size={20} />, label: 'Projects' },
    { to: 'contact', icon: <FaEnvelope size={20} />, label: 'Contact' },
  ];

  const [active, setActive] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 80; // offset for navbar height
      const sections = links.map(link => document.getElementById(link.to));
      for (let i = sections.length - 1; i >= 0; i--) {
        if (sections[i] && sections[i].offsetTop <= scrollPos) {
          setActive(links[i].to);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [links]);

  return (
    <nav
      className="fixed top-0 w-full backdrop-blur-md bg-white/10 border-b border-white/20 shadow-md z-50"
      style={{ WebkitBackdropFilter: 'blur(12px)', backdropFilter: 'blur(12px)' }}
    >
      <div className="max-w-6xl mx-auto flex justify-center sm:justify-start sm:pl-8 gap-8 py-3">
        {links.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className={`flex items-center gap-2 cursor-pointer select-none
              transition-colors duration-300
              ${
                active === link.to
                  ? 'text-accent font-semibold underline decoration-accent decoration-2'
                  : 'text-white hover:text-accent'
              }
              text-sm sm:text-base
            `}
          >
            {link.icon}
            <span className="hidden sm:inline font-sans tracking-wide">{link.label}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
