import React, { useState } from 'react';
import Tarea from './Tarea';
import './ListaTareas.css';

const ListaTareas = () => {
  const [tareas, setTareas] = useState([]);
  const [nuevaTarea, setNuevaTarea] = useState('');

  const agregarTarea = () => {
    if (nuevaTarea.trim() !== '') {
      setTareas([...tareas, nuevaTarea]);
      setNuevaTarea('');
    }
  };

  const eliminarTarea = (index) => {
    const nuevasTareas = tareas.filter((_, i) => i !== index);
    setTareas(nuevasTareas);
  };

  return (
    <div className='lista-tareas-container'>
      <h2>Lista de Tareas</h2>
      <input
        type="text"
        value={nuevaTarea}
        onChange={(e) => setNuevaTarea(e.target.value)}
      />
      <button className='buttonlistatarea' onClick={agregarTarea}>Agregar</button>
      <ul>
        {tareas.map((tarea, index) => (
          <li key={index}>
            <Tarea tarea={tarea} eliminarTarea={() => eliminarTarea(index)} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaTareas;
