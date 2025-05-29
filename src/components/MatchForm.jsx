import React from "react";

const MatchForm = ({ handleInputChange, handleAddShot, shotData }) => (
  <div className="mb-4 space-y-2">
    <h2 className="text-lg font-bold">Registrar golpe</h2>
    <div className="flex flex-wrap gap-2">
      <input type="text" placeholder="Jugador" name="player" value={shotData.player} onChange={handleInputChange} />
      <input type="text" placeholder="Tipo de golpe (volea, smash...)" name="type" value={shotData.type} onChange={handleInputChange} />
      <input type="text" placeholder="Zona (fondo_d, centro...)" name="zone" value={shotData.zone} onChange={handleInputChange} />
      <input type="text" placeholder="Resultado (winner, error_forzado, error_no_forzado, normal)" name="result" value={shotData.result} onChange={handleInputChange} />
      <button onClick={handleAddShot} className="bg-blue-600 text-white px-4 py-1">Añadir</button>
    </div>
  </div>
);

export default MatchForm;

