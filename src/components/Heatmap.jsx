import React from "react";

const zones = ["fondo_d", "fondo_i", "centro", "red_d", "red_i"];

const Heatmap = ({ stats }) => {
  const zoneTotals = {};

  zones.forEach(zone => {
    zoneTotals[zone] = 0;
    Object.values(stats).forEach(s => {
      zoneTotals[zone] += s.zones?.[zone] || 0;
    });
  });

  const totalShots = Object.values(zoneTotals).reduce((a, b) => a + b, 0);

  return (
    <div className="mt-6">
      <h2 className="text-lg font-bold mb-2">Mapa de calor (zonas)</h2>
      <div className="grid grid-cols-3 gap-4">
        {zones.map(zone => (
          <div key={zone} className="bg-red-100 p-4 rounded text-center shadow">
            <h4 className="font-semibold capitalize">{zone.replace("_", " ")}</h4>
            <p>{zoneTotals[zone]} golpes</p>
            <p className="text-sm text-gray-600">{((zoneTotals[zone] / totalShots) * 100).toFixed(1)}%</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Heatmap;

