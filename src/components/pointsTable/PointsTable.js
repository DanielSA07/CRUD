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
            <th className='column1'>Lat</th>
            <th className='column1'>Lng</th>
            <th className='column3'>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {points.map(p => (
            <tr key={p.id}>
              <td className='column1'>{p.id}</td>
              <td className='column2'>{p.descripcion}</td>
              <td className='column1'>{p.zona}</td>
              <td className='column2'>${p.venta}</td>
              <td className='column1'>{p.lat}</td>
              <td className='column1'>{p.lng}</td>
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
