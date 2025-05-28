import React from 'react';

export default function PlayerForm({ players, setPlayers }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setPlayers(prev => ({ ...prev, [name]: value }));
  };

  return (
    <form style={{ display: 'flex', flexDirection: 'column', gap: 15 }}>
      <label>
        Nombre Jugador 1:
        <input
          type="text"
          name="player1"
          value={players.player1}
          onChange={handleChange}
          placeholder="Escribe nombre jugador 1"
          style={{ padding: 8, fontSize: 16, marginTop: 5 }}
        />
      </label>
      <label>
        Nombre Jugador 2:
        <input
          type="text"
          name="player2"
          value={players.player2}
          onChange={handleChange}
          placeholder="Escribe nombre jugador 2"
          style={{ padding: 8, fontSize: 16, marginTop: 5 }}
        />
      </label>
    </form>
  );
}
