import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{ padding: '15px', borderBottom: '1px solid #ccc', display: 'flex', gap: '20px', fontSize: '18px' }}>
      <Link to="/" style={{ textDecoration: 'none', color: '#000', fontWeight: 'bold' }}>Home</Link>
      <Link to="/about" style={{ textDecoration: 'none', color: '#555' }}>About</Link>
      <Link to="/news" style={{ textDecoration: 'none', color: '#555' }}>News</Link>
      <Link to="/quiz" style={{ textDecoration: 'none', color: '#555' }}>Quiz</Link>
      <Link to="/contact" style={{ textDecoration: 'none', color: '#555' }}>Contact</Link>
    </nav>
  );
};

export default Navbar;