import React from "react";

const PlayerStats = ({ stats }) => (
  <div className="mt-6">
    <h2 className="text-lg font-bold">Estadísticas por jugador</h2>
    {Object.entries(stats).map(([player, data]) => (
      <div key={player} className="mt-4 p-4 bg-white rounded shadow">
        <h3 className="text-md font-semibold">{player}</h3>
        <ul className="text-sm list-disc ml-4">
          <li>Total de golpes: {data.total}</li>
          <li>Winners: {data.winner}</li>
          <li>Errores forzados: {data.forced}</li>
          <li>Errores no forzados: {data.unforced}</li>
          <li>Tipos de golpe:
            <ul>
              {Object.entries(data.types).map(([type, count]) => (
                <li key={type}>{type}: {count}</li>
              ))}
            </ul>
          </li>
        </ul>
      </div>
    ))}
  </div>
);

export default PlayerStats;

