import React, { useState, useEffect} from 'react';
import '../css/balota.css';
import io from 'socket.io-client';

// Asegúrate de que la URL sea la correcta para tu servidor
const socket = io('https://server-back-end-megaloto.onrender.com');


const Balota = () => {
  const [NumerosActivos,SetNumerosActivos]=useState([])
  useEffect(()=>{
    socket.on('newNumber', (newNumbers) => {
      console.log(newNumbers)
      SetNumerosActivos(newNumbers);
    });
    socket.on('initNumbers', (initialNumbers) => {
      SetNumerosActivos(initialNumbers);
    });
  },[])

  return (
    <div className="balota">
      <div className='tit'>
        <h2>Número: </h2>
        {/* {console.log('estos son los numeros del state',NumerosActivos)} */}
        <h3>{NumerosActivos[NumerosActivos.length-1]}</h3>
      </div>
      <table className='seleccionados'>
        <tbody>
          {Array.from({ length: 10 }, (_, index) => (
            <tr key={index}>
              {Array.from({ length: 10 }, (_, columnIndex) => {
                const numero = index + columnIndex * 10;
                return (
                  <td
                    key={index * 5 + columnIndex}
                    className={NumerosActivos.includes(numero) ? 'seleccionado' : ''}
                  >
                    {numero}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Balota;
