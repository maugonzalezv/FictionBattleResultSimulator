import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Simulator from './pages/Simulator';
import Ranking from './pages/Ranking';
import About from './pages/About';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-red-600 relative">
        {/* Background overlay for better contrast */}
        <div className="absolute inset-0 bg-black/5"></div>
        
        {/* Main content wrapper */}
        <div className="relative z-10">
          <NavBar />
          <main className="transition-all duration-500 ease-out">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/simulator" element={<Simulator />} />
              <Route path="/ranking" element={<Ranking />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
