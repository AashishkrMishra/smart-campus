import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Canteen from './pages/Canteen';
import LostFound from './pages/LostFound';
import Scholarships from './pages/Scholarships';
import Auth from './pages/Auth/Auth';
import './App.css';

const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check login status on mount
  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
  }, []);

  return (
    <Router>
      {/* Navbar with dynamic login/profile */}
      <Navbar
        setShowLogin={setShowLogin}
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
      />

      {/* Auth Modal */}
      {showLogin && (
        <Auth
          setShowLogin={setShowLogin}
          setIsLoggedIn={setIsLoggedIn}
        />
      )}

      {/* Application Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/canteen" element={<Canteen />} />
        <Route path="/lostfound" element={<LostFound />} />
        <Route path="/scholarships" element={<Scholarships />} />
      </Routes>
    </Router>
  );
};

export default App;
