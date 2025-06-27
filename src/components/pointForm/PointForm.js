import React, { useState, useEffect } from 'react';
import './PointForm.css';
import point from '../../img/point.png'


const zonasDisponibles = [
  "Zona Centro",
  "Zona Norte",
  "Zona Sur",
  "Zona Este",
  "Zona Oeste",
];

const initialState = {
  descripcion: '',
  latitud: '',
  longitud: '',
  venta: '',
  zona: '',
};

const PointForm = ({ onSubmit, selectedPoint, clearSelection }) => {
  const [form, setForm] = useState(initialState);

  useEffect(() => {
    if (selectedPoint) {
      setForm({
        descripcion: selectedPoint.descripcion || '',
        latitud: selectedPoint.latitud || '',
        longitud: selectedPoint.longitud || '',
        venta: selectedPoint.venta || '',
        zona: selectedPoint.zona || '',
      });
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

    const { descripcion, latitud, longitud, venta, zona } = form;

    if (!descripcion || !latitud || !longitud || !venta || !zona) {
      alert('Todos los campos son obligatorios');
      return;
    }

    onSubmit({
      id: selectedPoint?.id || Date.now(),
      descripcion,
      latitud: parseFloat(latitud),
      longitud: parseFloat(longitud),
      venta: parseFloat(venta),
      zona
    });

    setForm(initialState);
    clearSelection();
  };

  return (
    <div className='form-container'>
      <form onSubmit={handleSubmit} className="point-form">
        <h2>{selectedPoint ? 'Editar Punto' : 'Nuevo Punto de Venta'}</h2>
        <input type="text" name="descripcion" placeholder="Descripción" value={form.descripcion} onChange={handleChange} />
        <input type="number" step="any" name="latitud" placeholder="Latitud" value={form.latitud} onChange={handleChange} />
        <input type="number" step="any" name="longitud" placeholder="Longitud" value={form.longitud} onChange={handleChange} />
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
      <div className="imgPoint">
        <img src={point} alt="Point" className="point" />
      </div>
    </div>
  );
};

export default PointForm;
