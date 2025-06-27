import React, { useState, useEffect, useRef, useCallback } from 'react';
import PointForm from '../components/pointForm/PointForm';
import PointsTable from '../components/pointsTable/PointsTable';
import MapView from '../components/mapView/MapView';
import PieChartView from '../components/pieChart/PieChart';
import { loadPoints, savePoints } from '../utils/storage';

const PointsAdmin = () => {
  const [points, setPoints] = useState([]);
  const [selectedPoint, setSelectedPoint] = useState(null);
  const loadedOnce = useRef(false);

  useEffect(() => {
    if (!loadedOnce.current) {
      const storedPoints = loadPoints();
      setPoints(storedPoints);
      loadedOnce.current = true;
    }
  }, []);

  useEffect(() => {
    savePoints(points);
  }, [points]);

  const handleAddOrUpdate = useCallback((point) => {
    if (point.id && points.some(p => p.id === point.id)) {
      const updated = points.map(p => (p.id === point.id ? point : p));
      setPoints(updated);
    } else {
      const newPoint = { ...point, id: Date.now() };
      setPoints(prev => [...prev, newPoint]);
    }
    setSelectedPoint(null);
  }, [points]);

  const handleDelete = useCallback((id) => {
    setPoints(prev => prev.filter(p => p.id !== id));
  }, []);

  const handleEdit = useCallback((point) => {
    setSelectedPoint(point);
  }, []);

  return (
    <div className="main-container">

      <PointForm
        onSubmit={handleAddOrUpdate}
        selectedPoint={selectedPoint}
        clearSelection={() => setSelectedPoint(null)}
      />

      <PointsTable
        points={points}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default PointsAdmin;
