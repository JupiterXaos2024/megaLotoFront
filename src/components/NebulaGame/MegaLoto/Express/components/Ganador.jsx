import React from 'react';
import '../css/ganador.css';

const GanadorModal = ({ ganador, nombreGanador,premio, onClose1, onClose2 }) => {
  if (ganador === null) return null;
  //console.log(nombreGanador)

  return (
    <div className="modal-overlay">
      <video muted autoPlay loop className="background-video">
                <source src='/videos/fondoLotoGanador.mp4'/>
      </video>
      <div className="modal-content">
        <h2>¡Tenemos un ganador!</h2>
        <p>Cartón {ganador}</p>
        <p>Participante: {nombreGanador!==null? nombreGanador:'sin participante'}</p>
        <p>FELICITACIONES</p>
        <p>acaba de ganar: ${premio} pesos</p>
        <button onClick={onClose1}>Cerrar</button>
        <button onClick={onClose2}>Entregar Premio</button>
      </div>
    </div>
  );
};

export default GanadorModal;
