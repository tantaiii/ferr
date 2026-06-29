import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import News from './pages/News';
import Quiz from './pages/Quiz';
import Contact from './pages/Contact';
import 'bootstrap/dist/css/bootstrap.min.css'; // Make sure bootstrap styling is loaded!

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/news" element={<News />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;