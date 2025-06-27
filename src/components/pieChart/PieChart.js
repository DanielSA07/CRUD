import React from 'react';
import { PieChart, Pie, Tooltip, Cell, Legend } from 'recharts';
import './PieChart.css';

const COLORS = ['#52be80', '#3498db', '#cd6155', '#eb984e', '#af7ac5'];

const PieChartView = ({ points }) => {
  const zonaVentas = {};

  points.forEach(p => {
    if (p.zona && !isNaN(p.venta)) {
      zonaVentas[p.zona] = (zonaVentas[p.zona] || 0) + Number(p.venta);
    }
  });

  const data = Object.entries(zonaVentas).map(([zona, venta]) => ({
    name: zona,
    value: venta,
  }));

  return (
    <div className="pie-chart-container">
      <PieChart className="spacePie" width={400} height={350}>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          outerRadius={120}
          label
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  );
};

export default PieChartView;
