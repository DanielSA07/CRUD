import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/sidebar/Sidebar';
import Dashboard from './pages/Dashboard';
import PointsAdmin from './pages/PointsAdmin';
import './App.css'

const AppRouter = () => {
  return (
    <Router>
      <Navbar />
      <div className="main-container">
        <h1>Punto de venta</h1>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/admin" element={<PointsAdmin />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
};

export default AppRouter;
