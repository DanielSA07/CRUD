import React from 'react';
import './PointsTable.css'

const PointsTable = ({ points, onEdit, onDelete }) => {
  return (
    <div className='table-container'>
      <h2>Puntos Registrados</h2>
      <table>
        <thead>
          <tr className='header-table'>
            <th className='column1'>ID</th>
            <th className='column2'>Descripción</th>
            <th className='column1'>Zona</th>
            <th className='column2'>Venta</th>
            <th className='column1'>Latitud</th>
            <th className='column1'>Longitud</th>
            <th className='column3'>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {points.map(p => (
            <tr key={p.id}>
              <td className='column1' data-label="id">{p.id}</td>
              <td className='column2' data-label="Descripción">{p.descripcion}</td>
              <td className='column1' data-label="Zona">{p.zona}</td>
              <td className='column2' data-label="Venta">${p.venta}</td>
              <td className='column1' data-label="Latitud">{p.latitud}</td>
              <td className='column1' data-label="Longitud">{p.longitud}</td>
              <td className='column3'>
                <button onClick={() => onEdit(p)} className='edit'>Editar</button>
                <button onClick={() => onDelete(p.id)} className='delete'>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PointsTable;
