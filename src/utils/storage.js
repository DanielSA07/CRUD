const STORAGE_KEY = 'puntosDeVenta';

export const loadPoints = () => {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
};

export const savePoints = (points) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(points));
};
