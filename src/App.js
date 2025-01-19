import React, { useState } from 'react';

function App() {
  const [tareas, setTareas] = useState([]);
  const [nuevoTexto, setNuevoTexto] = useState("");
  const [editandoId, setEditandoId] = useState(null);
  const [nuevoTextoEditado, setNuevoTextoEditado] = useState(""); // Corregí la declaración

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

  const manejarDobleClick = (id, texto) => {
    setEditandoId(id);
    setNuevoTextoEditado(texto);
  };

  const manejarEditar = (id) => {
    const tareasActualizadas = tareas.map((tarea) =>
      tarea.id === id ? { ...tarea, texto: nuevoTextoEditado } : tarea
    );
    setTareas(tareasActualizadas);
    setEditandoId(null);
  };

  const manejarCambioTextoEditado = (evento) => {
    setNuevoTextoEditado(evento.target.value);
  };

  const manejarEnter = (evento, id) => {
    if (evento.key === "Enter") {
      manejarEditar(id);
    }
  };

  const manejarEliminar = (id) => {
    const tareasFiltradas = tareas.filter((tarea) => tarea.id !== id); // Corregí el filtro
    setTareas(tareasFiltradas);
  };

  return (
    <div>
      <h1>Lista de Tareas</h1>
      <div className="contenedor-flex">
        <form onSubmit={manejarEnvio}>
          <input
            type="text"
            value={nuevoTexto}
            onChange={manejarCambios}
            placeholder="Escribe nueva tarea"
          />
          <button type="submit">Agregar Tarea</button>
        </form>
      </div>
      <ul>
        {tareas.map((tarea) => (
          <li key={tarea.id}>
            {editandoId === tarea.id ? (
              <input
                type="text"
                value={nuevoTextoEditado}
                onChange={manejarCambioTextoEditado}
                onKeyDown={(evento) => manejarEnter(evento, tarea.id)}
                autoFocus
              />
            ) : (
              <span onDoubleClick={() => manejarDobleClick(tarea.id, tarea.texto)}>
                {tarea.texto}
              </span>
            )}
            <button onClick={() => manejarEliminar(tarea.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

