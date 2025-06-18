import React from 'react';
import { PieChart, Pie, Tooltip, Cell, Legend } from 'recharts';

const COLORS = ['#52be80', '#3498db', '#cd6155', '#eb984e'];

const PieVentasPorZona = ({ points }) => {
  const zonaVentas = {};

  points.forEach(p => {
    zonaVentas[p.zona] = (zonaVentas[p.zona] || 0) + p.venta;
  });

  const data = Object.entries(zonaVentas).map(([zona, venta]) => ({
    name: zona,
    value: venta
  }));

  return (
    <PieChart width={500} height={400}>
      <h1>Data de ventas</h1>
      <Pie
        data={data}
        dataKey="value"
        nameKey="name"
        outerRadius={120}
        fill="#8884d8"
        label
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
      <Legend />
    </PieChart>
  );
};

export default PieVentasPorZona;
