import React from 'react';

function ListaPersonajes() {
  const personajes = [
    { id: 1, nombre: 'Link', juego: 'The Legend of Zelda' },
    { id: 2, nombre: 'Mario', juego: 'Super Mario Bros' },
    { id: 3, nombre: 'Kratos', juego: 'God of War' },
  ];

  return (
    <div>
      <h2>🎮 Personajes Famosos</h2>
      <ul>
        {personajes.map(personaje => (
          <li key={personaje.id}>
            <strong>{personaje.nombre}</strong> - {personaje.juego}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListaPersonajes;
