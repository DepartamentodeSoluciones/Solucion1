import React, { useState } from 'react';

function App() {
  const [tareas, setTareas] = useState([]);
  const [nuevoTexto, setNuevoTexto] = useState("");

  const crearTarea = (texto) => {
    const nuevaTarea = {
      id: tareas.length + 1,
      texto: texto,
      completada: false,
    };
    setTareas([...tareas, nuevaTarea]);
  };

  const manejarCambios = (evento) => {
    setNuevoTexto(evento.target.value);
  };

  const manejarEnvio = (evento) => {
    evento.preventDefault();
    if (nuevoTexto.trim()) {
      crearTarea(nuevoTexto);
      setNuevoTexto("");
    }
  };

  return (
    <div>
      <h1>Lista de Tareas</h1>
      <form onSubmit={manejarEnvio}>
        <input
          type="text"
          value={nuevoTexto}
          onChange={manejarCambios}
          placeholder="Escribe nueva tarea"
        />
        <button type="submit">Agregar Tarea</button>
      </form>
      <ul>
        {tareas.map((tarea) => (
          <li key={tarea.id}>{tarea.texto}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;

