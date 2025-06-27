import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './MapView.css';

// Configurar icono default
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

// Centrado automático
const FitBounds = ({ points }) => {
  const map = useMap();

  useEffect(() => {
    const validPoints = points.filter(p =>
      Number.isFinite(p.latitud) && Number.isFinite(p.longitud)
    );

    if (validPoints.length === 0) return;

    const bounds = L.latLngBounds(validPoints.map(p => [p.latitud, p.longitud]));
    map.fitBounds(bounds, { padding: [50, 50] });
  }, [points, map]);

  return null;
};

const MapView = ({ points }) => {
  const validPoints = points.filter(p =>
    Number.isFinite(p.latitud) && Number.isFinite(p.longitud)
  );

  return (
    <div className="map-container">
      <MapContainer center={[19.4326, -99.1332]} zoom={5} className="spaceMap">
        <TileLayer
          attribution='&copy; OpenStreetMap contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {validPoints.map(point => (
          <Marker
            key={point.id}
            position={[point.latitud, point.longitud]}
          >
            <Popup>
              <strong>{point.descripcion}</strong><br />
              Zona: {point.zona}<br />
              Venta: ${point.venta}
            </Popup>
          </Marker>
        ))}
        <FitBounds points={validPoints} />
      </MapContainer>
    </div>
  );
};

export default MapView;
