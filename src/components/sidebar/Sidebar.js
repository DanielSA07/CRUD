import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Sidebar.css';
import logo from '../../img/logo.png'

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className='logo-container'>
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <div className="navbar-links">
        <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Dashboard</Link>
        <Link to="/admin" className={location.pathname === '/admin' ? 'active' : ''}>Admin</Link>
      </div>
    </nav>
  );
};

export default Navbar;
