import React, { useState } from 'react';
import PlayerForm from './components/PlayerForm';

function App() {
  const [players, setPlayers] = useState({ player1: '', player2: '' });

  return (
    <div style={{ maxWidth: 600, margin: 'auto', padding: 20, fontFamily: 'Arial, sans-serif' }}>
      <h1>Análisis de partidos de Pádel</h1>
      <PlayerForm players={players} setPlayers={setPlayers} />
      <div style={{ marginTop: 30 }}>
        <h2>Jugadores:</h2>
        <p>Jugador 1: <b>{players.player1 || 'No definido'}</b></p>
        <p>Jugador 2: <b>{players.player2 || 'No definido'}</b></p>
      </div>
      <p style={{ marginTop: 50, fontStyle: 'italic', color: '#666' }}>
        Próximamente funcionalidades de análisis, mapas de calor y generación de informes.
      </p>
    </div>
  );
}

export default App;
