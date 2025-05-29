import { Link } from 'react-router-dom';
import { Swords, Trophy, Zap, Star, Users, Crown, ArrowRight, Code } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="text-white">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="text-center">
            <div className="flex justify-center items-center gap-4 mb-6 animate-fade-in">
              <Swords size={48} className="text-white animate-pulse" />
              <h1 className="text-6xl font-bold tracking-tight">
                FictionBattle
              </h1>
              <Crown size={48} className="text-yellow-300 animate-bounce" />
            </div>
            <p className="text-xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed font-light tracking-wide">
              The ultimate platform to simulate epic battles between your favorite fictional characters. 
              Compare stats, simulate fights, and discover who truly is the most powerful.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/simulator"
                className="group inline-flex items-center gap-3 bg-white/20 backdrop-blur-md text-white px-8 py-4 rounded-full font-bold hover:bg-white/30 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 border border-white/20"
              >
                <Swords size={20} className="group-hover:rotate-12 transition-transform duration-300" />
                Start Battle
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <Link
                to="/ranking"
                className="group inline-flex items-center gap-3 bg-transparent border-2 border-white/50 text-white px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm transform hover:scale-105"
              >
                <Trophy size={20} className="group-hover:rotate-12 transition-transform duration-300" />
                View Rankings
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6 tracking-tight">
            Key Features
          </h2>
          <p className="text-xl text-white/80 font-light tracking-wide">
            Everything you need for the ultimate fictional battles
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="group bg-white/10 backdrop-blur-md rounded-2xl shadow-xl p-8 text-center border border-white/20 hover:bg-white/15 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2">
            <div className="bg-white/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <Swords className="text-white group-hover:rotate-12 transition-transform duration-300" size={36} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">
              Battle Simulator
            </h3>
            <p className="text-white/80 leading-relaxed font-light">
              Compare attributes like strength, speed, intelligence, and resistance. 
              Simulate epic battles with advanced algorithms.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="group bg-white/10 backdrop-blur-md rounded-2xl shadow-xl p-8 text-center border border-white/20 hover:bg-white/15 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2">
            <div className="bg-white/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <Trophy className="text-white group-hover:rotate-12 transition-transform duration-300" size={36} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">
              Global Rankings
            </h3>
            <p className="text-white/80 leading-relaxed font-light">
              Explore detailed character rankings by universe, gender, and power. 
              Filter and find your favorites instantly.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="group bg-white/10 backdrop-blur-md rounded-2xl shadow-xl p-8 text-center border border-white/20 hover:bg-white/15 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2">
            <div className="bg-white/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <Users className="text-white group-hover:rotate-12 transition-transform duration-300" size={36} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">
              Complete Multiverse
            </h3>
            <p className="text-white/80 leading-relaxed font-light">
              Characters from Marvel, DC, Anime, Star Wars, and more. 
              A comprehensive database with precise statistics.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white/10 backdrop-blur-md py-20 border-y border-white/20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="group transform hover:scale-110 transition-all duration-300">
              <div className="flex justify-center mb-4">
                <div className="bg-yellow-500/20 p-4 rounded-full group-hover:scale-110 transition-transform duration-300">
                  <Zap className="text-yellow-300" size={32} />
                </div>
              </div>
              <div className="text-4xl font-bold text-white mb-2 tracking-tight">40+</div>
              <div className="text-white/80 font-light tracking-wide">Characters</div>
            </div>
            <div className="group transform hover:scale-110 transition-all duration-300">
              <div className="flex justify-center mb-4">
                <div className="bg-blue-500/20 p-4 rounded-full group-hover:scale-110 transition-transform duration-300">
                  <Star className="text-blue-300" size={32} />
                </div>
              </div>
              <div className="text-4xl font-bold text-white mb-2 tracking-tight">10+</div>
              <div className="text-white/80 font-light tracking-wide">Universes</div>
            </div>
            <div className="group transform hover:scale-110 transition-all duration-300">
              <div className="flex justify-center mb-4">
                <div className="bg-red-500/20 p-4 rounded-full group-hover:scale-110 transition-transform duration-300">
                  <Swords className="text-red-300" size={32} />
                </div>
              </div>
              <div className="text-4xl font-bold text-white mb-2 tracking-tight">∞</div>
              <div className="text-white/80 font-light tracking-wide">Possible Battles</div>
            </div>
            <div className="group transform hover:scale-110 transition-all duration-300">
              <div className="flex justify-center mb-4">
                <div className="bg-green-500/20 p-4 rounded-full group-hover:scale-110 transition-transform duration-300">
                  <Users className="text-green-300" size={32} />
                </div>
              </div>
              <div className="text-4xl font-bold text-white mb-2 tracking-tight">24/7</div>
              <div className="text-white/80 font-light tracking-wide">Available</div>
            </div>
          </div>
        </div>
      </div>

      {/* Developer Section */}
      <div className="py-20">
        <div className="max-w-4xl mx-auto text-center px-6">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-xl p-12 border border-white/20 hover:bg-white/15 transition-all duration-500">
            <div className="bg-white/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8">
              <Code className="text-white" size={40} />
            </div>
            <h2 className="text-4xl font-bold mb-6 text-white tracking-tight">
              Meet the Developer
            </h2>
            <p className="text-xl text-white/80 mb-8 font-light tracking-wide leading-relaxed max-w-2xl mx-auto">
            Created by a Computer Science student currently learning new technologies and pursuing professional development.            </p>
            <Link
              to="/about"
              className="group inline-flex items-center gap-4 bg-white/20 backdrop-blur-md text-white px-10 py-5 rounded-full font-bold hover:bg-white/30 transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:scale-105 border border-white/30"
            >
              <Code size={24} className="group-hover:rotate-12 transition-transform duration-300" />
              About the Creator
              <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold mb-6 text-white tracking-tight">
            Ready for the ultimate battle?
          </h2>
          <p className="text-xl text-white/80 mb-12 font-light tracking-wide leading-relaxed">
            Join thousands of users who are already discovering who truly is the most powerful
          </p>
          <Link
            to="/simulator"
            className="group inline-flex items-center gap-4 bg-white/20 backdrop-blur-md text-white px-10 py-5 rounded-full font-bold hover:bg-white/30 transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:scale-105 border border-white/30"
          >
            <Swords size={24} className="group-hover:rotate-12 transition-transform duration-300" />
            Start Now
            <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home; 