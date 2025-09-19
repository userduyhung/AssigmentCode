import { Link } from 'react-router-dom';
import { Home, BookOpen, Gamepad2, Sparkles, Globe, Heart, Facebook, Github, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-red-900 to-slate-900 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Header Section - Compact */}
        <div className="text-center mb-6">
          <h3 className="font-heading text-xl md:text-2xl font-bold text-yellow-400 mb-2">
            HCM202 – Tư tưởng Hồ Chí Minh
          </h3>
          
          {/* Created By Section */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-sm text-blue-200">
            <span>Created By:</span>
            <div className="flex items-center gap-3">
              <span className="font-medium text-white">Duy Hưng</span>
              <div className="flex items-center gap-2">
                <a 
                  href="https://www.facebook.com/bL1zT0510" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                  title="Facebook"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a 
                  href="https://github.com/userduyhung" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  title="GitHub"
                >
                  <Github className="w-4 h-4" />
                </a>
                {/* <a 
                  href="mailto:nduyhung1111@gmail.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-red-400 hover:text-red-300 transition-colors"
                  title="Email"
                >
                  <Mail className="w-4 h-4" />
                </a> */}
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Links - Compact */}
        <div className="flex flex-wrap justify-center items-center gap-4 mb-6 text-sm">
          <Link to="/" className="flex items-center space-x-1 text-gray-300 hover:text-yellow-400 transition-colors">
            <Home className="w-4 h-4" />
            <span>Trang chủ</span>
          </Link>
          <span className="text-gray-600">•</span>
          <Link to="/theory" className="flex items-center space-x-1 text-gray-300 hover:text-blue-400 transition-colors">
            <BookOpen className="w-4 h-4" />
            <span>Lý thuyết</span>
          </Link>
          <span className="text-gray-600">•</span>
          <Link to="/interactive" className="flex items-center space-x-1 text-gray-300 hover:text-green-400 transition-colors">
            <Gamepad2 className="w-4 h-4" />
            <span>Tương tác</span>
          </Link>
          <span className="text-gray-600">•</span>
          <Link to="/ai-tools" className="flex items-center space-x-1 text-gray-300 hover:text-purple-400 transition-colors">
            <Sparkles className="w-4 h-4" />
            <span>AI</span>
          </Link>
          <span className="text-gray-600">•</span>
          <Link to="/real-world-updates" className="flex items-center space-x-1 text-gray-300 hover:text-orange-400 transition-colors">
            <Globe className="w-4 h-4" />
            <span>Thực tiễn</span>
          </Link>
        </div>

        {/* Quote Section - Compact */}
        <div className="text-center mb-6">
          <blockquote className="font-body text-base md:text-lg italic text-yellow-200 mb-2">
            "Dân là gốc – Đảng phải trong sạch, vững mạnh."
          </blockquote>
          <cite className="text-sm text-yellow-400">– Hồ Chí Minh</cite>
        </div>

        {/* Footer Bottom - Compact */}
        <div className="border-t border-gray-700 pt-4">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-2 text-xs">
            <div className="text-gray-400">
              © 2025 HCM202 Project – Đại học FPT
            </div>
            <div className="flex items-center text-gray-400">
              <span>Made with</span>
              <Heart className="w-3 h-3 mx-1 text-red-500 fill-current" />
              <span>for Vietnam</span>
              {/* <span className="ml-1">🇻🇳</span> */}
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;