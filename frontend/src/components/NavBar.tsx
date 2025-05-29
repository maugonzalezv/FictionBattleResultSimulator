import { Link, useLocation } from 'react-router-dom';
import { Home, Swords, Trophy, User } from 'lucide-react';

const NavBar = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/simulator', label: 'Battle Simulator', icon: Swords },
    { path: '/ranking', label: 'Rankings', icon: Trophy },
    { path: '/about', label: 'About', icon: User },
  ];

  return (
    <nav className="backdrop-blur-md bg-white/10 border-b border-white/20 sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo/Brand */}
          <div className="flex items-center">
            <Link 
              to="/" 
              className="text-2xl font-bold text-white hover:scale-105 transition-all duration-300 ease-out tracking-tight"
            >
              <span className="bg-gradient-to-r from-white to-yellow-200 bg-clip-text text-transparent hover:from-yellow-200 hover:to-white transition-all duration-300">
                FictionBattle
              </span>
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="flex items-center gap-2">
            {navItems.map(({ path, label, icon: Icon }) => (
              <Link
                key={path}
                to={path}
                className={`group flex items-center gap-3 px-6 py-3 rounded-full font-medium transition-all duration-300 ease-out transform hover:scale-105 ${
                  isActive(path)
                    ? 'bg-white/20 text-white shadow-lg backdrop-blur-sm border border-white/30'
                    : 'text-white/80 hover:text-white hover:bg-white/10 hover:shadow-md backdrop-blur-sm'
                }`}
              >
                <Icon 
                  size={18} 
                  className={`transition-all duration-300 group-hover:rotate-12 ${
                    isActive(path) ? 'text-white' : 'text-white/80 group-hover:text-white'
                  }`} 
                />
                <span className="hidden md:block tracking-wide">{label}</span>
                
                {/* Active indicator */}
                {isActive(path) && (
                  <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white rounded-full opacity-80"></div>
                )}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar; 