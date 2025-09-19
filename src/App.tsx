import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Theory from './pages/Theory';
import Interactive from './pages/Interactive';
import AITools from './pages/AITools';
import RealWorldUpdates from './pages/RealWorldUpdates';
import Chatbot from './components/Chatbot';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <Navigation />
        <main className="pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/theory" element={<Theory />} />
            <Route path="/interactive" element={<Interactive />} />
            <Route path="/ai-tools" element={<AITools />} />
            <Route path="/real-world-updates" element={<RealWorldUpdates />} />
            
          </Routes>
        </main>
        <Chatbot />
      </div>
    </Router>
  );
}

export default App;