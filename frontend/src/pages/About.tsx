import { Link } from 'react-router-dom';
import { Code, ArrowLeft, Github, Linkedin, Mail } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen p-6">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <div className="mb-8">
          <Link 
            to="/"
            className="group inline-flex items-center gap-2 text-white/80 hover:text-white transition-all duration-300"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform duration-300" />
            Back to Home
          </Link>
        </div>

        {/* Header */}
        <div className="text-center mb-16">
          <div className="bg-white/10 backdrop-blur-md w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8 border border-white/20">
            <Code className="text-white" size={40} />
          </div>
          <h1 className="text-5xl font-bold text-white mb-6 tracking-tight">
            Mauricio Gonzalez Valero
          </h1>
          <p className="text-xl text-white/80 font-light tracking-wide max-w-2xl mx-auto leading-relaxed">
            Computer Science student. 
          </p>
        </div>

        {/* Contact Section */}
        <div className="text-center bg-white/10 backdrop-blur-md rounded-2xl shadow-xl p-12 border border-white/20">
          <h2 className="text-3xl font-bold text-white mb-6 tracking-tight">Let's Connect</h2>
          <p className="text-white/80 font-light mb-8 max-w-2xl mx-auto">
            Interested in collaborating? 
            Feel free to reach out through any of these platforms.
          </p>
          <div className="flex justify-center gap-6">
            <a 
              href="https://github.com/maugonzalezv"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white/20 backdrop-blur-sm p-4 rounded-full hover:bg-white/30 transition-all duration-300 transform hover:scale-110"
            >
              <Github className="text-white group-hover:rotate-12 transition-transform duration-300" size={24} />
            </a>
            <a 
              href="https://www.linkedin.com/in/mauricio-gonzalez-valero-41509a258/"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white/20 backdrop-blur-sm p-4 rounded-full hover:bg-white/30 transition-all duration-300 transform hover:scale-110"
            >
              <Linkedin className="text-white group-hover:rotate-12 transition-transform duration-300" size={24} />
            </a>
            <a 
              href="mailto:maugzzv2404@gmail.com"
              className="group bg-white/20 backdrop-blur-sm p-4 rounded-full hover:bg-white/30 transition-all duration-300 transform hover:scale-110"
            >
              <Mail className="text-white group-hover:rotate-12 transition-transform duration-300" size={24} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About; 