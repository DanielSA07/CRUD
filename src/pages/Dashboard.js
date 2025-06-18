import React, { useEffect, useState, useRef } from 'react';
import MapView from '../components/mapView/MapView';
import PieChart from '../components/pieChart/PieChart';
import { loadPoints } from '../utils/storage';
import '../App.css'

const Dashboard = () => {
  const [points, setPoints] = useState([]);
  const loadedOnce = useRef(false);

  useEffect(() => {
    if (!loadedOnce.current) {
      const storedPoints = loadPoints();
      setPoints(storedPoints);
      loadedOnce.current = true;
    }
  }, []);

  return (
    <div className="dashboard-container">
      <div className='title'>
        <h2>Mapeo y data de ventas</h2>
      </div>
      <div className="map-chart-grid">
        <MapView points={points} />
        <PieChart points={points} />
      </div>
    </div>
  );
};

export default Dashboard;
