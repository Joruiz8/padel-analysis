import React, { useState } from "react";
import MatchForm from "./components/MatchForm";
import PlayerStats from "./components/PlayerStats";
import Heatmap from "./components/Heatmap";
import PDFExport from "./components/PDFExport";

function App() {
  const [shots, setShots] = useState([]);
  const [shotData, setShotData] = useState({
    player: "",
    type: "",
    zone: "",
    result: "",
  });

  const handleInputChange = (e) => {
    setShotData({ ...shotData, [e.target.name]: e.target.value });
  };

  const handleAddShot = () => {
    if (!shotData.player || !shotData.type || !shotData.zone || !shotData.result) return;
    setShots([...shots, shotData]);
    setShotData({ player: "", type: "", zone: "", result: "" });
  };

  const stats = {};
  shots.forEach(({ player, result, zone, type }) => {
    if (!stats[player]) {
      stats[player] = {
        total: 0,
        winner: 0,
        forced: 0,
        unforced: 0,
        types: {},
        zones: {}
      };
    }
    stats[player].total++;
    stats[player].types[type] = (stats[player].types[type] || 0) + 1;
    stats[player].zones[zone] = (stats[player].zones[zone] || 0) + 1;

    if (result === "winner") stats[player].winner++;
    else if (result === "error_forzado") stats[player].forced++;
    else if (result === "error_no_forzado") stats[player].unforced++;
  });

  return (
    <div className="p-6 max-w-5xl mx-auto bg-gray-50 min-h-screen">
      <div id="pdf-content">
        <h1 className="text-2xl font-bold mb-4">Análisis de Partido de Pádel</h1>
        <MatchForm shotData={shotData} handleInputChange={handleInputChange} handleAddShot={handleAddShot} />
        <PlayerStats stats={stats} />
        <Heatmap stats={stats} />
      </div>
      <PDFExport />
    </div>
  );
}

export default App;
