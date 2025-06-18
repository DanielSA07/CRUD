import React, { useState, useEffect, useRef } from 'react';
import PointForm from '../components/pointForm/PointForm';
import PointsTable from '../components/pointsTable/PointsTable';
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

  const handleAddOrUpdate = (point) => {
    if (point.id) {
      const updated = points.map(p => (p.id === point.id ? point : p));
      setPoints(updated);
    } else {
      const newPoint = { ...point, id: Date.now() };
      setPoints(prev => [...prev, newPoint]);
    }
    setSelectedPoint(null);
  };

  const handleDelete = (id) => {
    const updated = points.filter(p => p.id !== id);
    setPoints(updated);
  };

  const handleEdit = (point) => setSelectedPoint(point);

  return (
    <>
      <PointForm
        onSubmit={handleAddOrUpdate}
        selectedPoint={selectedPoint}
        clearSelection={() => setSelectedPoint(null)}
      />
      <PointsTable points={points} onEdit={handleEdit} onDelete={handleDelete} />
    </>
  );
};

export default PointsAdmin;
