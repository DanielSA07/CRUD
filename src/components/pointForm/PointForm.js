import React, { useState, useEffect } from 'react';
import './PointForm.css';

const zonasDisponibles = [
  "Zona Centro",
  "Zona Norte",
  "Zona Sur",
  "Zona Este",
  "Zona Oeste",
];

const initialState = {
  descripcion: '',
  lat: '',
  lng: '',
  venta: '',
  zona: '',
};

const PointForm = ({ onSubmit, selectedPoint, clearSelection }) => {
  const [form, setForm] = useState(initialState);

  useEffect(() => {
    if (selectedPoint) {
      setForm(selectedPoint);
    } else {
      setForm(initialState);
    }
  }, [selectedPoint]);

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!form.descripcion || !form.lat || !form.lng || !form.venta || !form.zona) {
      alert('Todos los campos son obligatorios');
      return;
    }
    onSubmit({ ...form, lat: parseFloat(form.lat), lng: parseFloat(form.lng), venta: parseFloat(form.venta) });
    setForm(initialState);
  };

  return (
    <div className='form-container'>
      <h2>{selectedPoint ? 'Editar Punto' : 'Nuevo Punto de Venta'}</h2>
      <form onSubmit={handleSubmit} className="point-form">
        <input type="text" name="descripcion" placeholder="Descripción" value={form.descripcion} onChange={handleChange} />
        <input type="number" step="any" name="lat" placeholder="Latitud" value={form.lat} onChange={handleChange} />
        <input type="number" step="any" name="lng" placeholder="Longitud" value={form.lng} onChange={handleChange} />
        <input type="number" name="venta" placeholder="Venta" value={form.venta} onChange={handleChange} />
        <select name="zona" value={form.zona} onChange={handleChange}>
          <option value="">Selecciona una zona</option>
          {zonasDisponibles.map(z => (
            <option key={z} value={z}>{z}</option>
          ))}
        </select>

        <div className="form-actions">
          <button type="submit">{selectedPoint ? 'Actualizar' : 'Agregar'}</button>
          {selectedPoint && <button type="button" onClick={clearSelection}>Cancelar</button>}
        </div>
      </form>
    </div>
  );
};

export default PointForm;
