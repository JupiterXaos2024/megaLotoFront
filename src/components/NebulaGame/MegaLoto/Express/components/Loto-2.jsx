import React, { useEffect, useState } from 'react';
import Balota from './Balota.jsx';
import Tablero from './tablero.jsx';
import NeonWord from './neonWord.jsx';
import Premio from './premio.jsx';
import '../css/loto-2.css';

function MegaLoto() {
    const [login,setLogin]=useState(localStorage.getItem('login'))

  useEffect(() => {
    if(!login){
        window.location.href = '/NebulaGame/login';
    }
    
     
  },);

  if (!login) {
    return null; // No renderizar nada mientras redirige
  }

  return (
    <div className='MegaLotoExpress'>
      <video muted autoPlay className="background-video">
        <source src='/videos/fondoLotoExpress.mp4' />
      </video>
      <div className='Encabezado'>
        <div className='tituloNeon'>
          <NeonWord text='MEGA LOTO EXPRESS' />
        </div>
        <div className='contenedorPremio'>
          <Premio />
        </div>
        <div className='contenedorBalota'>
          <Balota />
        </div>
      </div>
      <div className='contenedorTablero'>
        <Tablero />
      </div>
    </div>
  );
}

export default MegaLoto;
