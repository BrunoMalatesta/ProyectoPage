import React from 'react';
import './Tarea.css';

const Tarea = ({ tarea, eliminarTarea }) => {
  return (
    <div className='tarea-container'>
      <span>{tarea}</span>
      <button className='buttondelete' onClick={eliminarTarea}>Eliminar</button>
    </div>
  );
};

export default Tarea;
