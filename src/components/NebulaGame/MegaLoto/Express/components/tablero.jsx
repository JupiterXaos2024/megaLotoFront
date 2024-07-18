import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import GanadorModal from './Ganador';

const socket = io('https://server-back-end-megaloto.onrender.com'); // Ajusta la URL si es necesario

const Tablero = () => {
  const [cartones, setCartones] = useState([]);
  const [cartonesPorFila, setCartonesPorFila] = useState(10);
  const [numerosSeleccionados, setNumerosSeleccionados] = useState([]);
  const [ganador, setGanador] = useState(null);
  const [ganadorServer,setGanadorServer] = useState(localStorage.getItem('ganador'))

  useEffect(()=>{
    console.log(ganadorServer)
    localStorage.setItem('ganador',false)
  },[ganadorServer])
  
  const verificarGanador = (numeros) => {
      for (let i = 0; i < cartones.length; i++) {
         const carton = cartones[i];
         if (carton.every(numero => numeros.includes(Number(numero)))) {
           setGanador(i + 1);
           socket.emit('stopAutoGeneration');
           socket.emit('GanadorFron')
           //window.location.href = '/NebulaGame/MegaLotoExpress/ganador';
           break;
         }
       }
      
  };

  
  
  useEffect(() => {
    socket.on('initCartones', (cartones) => {
      setCartones(cartones);
    });
    socket.on('ganador',(ganadorserver)=>{
      setGanadorServer(ganadorserver)
    })

    socket.on('newCartones', (cartones) => {
      setCartones(cartones);
      socket.emit('resetNumbers')
    });
    socket.on('newNumber', (newNumbers) => {
      setNumerosSeleccionados(newNumbers);
    });
    socket.on('initNumbers', (initialNumbers) => {
      setNumerosSeleccionados(initialNumbers);
    });

    const handleResize = () => {
      if (window.innerWidth > window.innerHeight) {
        setCartonesPorFila(17); // Horizontal
      } else {
        setCartonesPorFila(9); // Vertical
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    
      verificarGanador(numerosSeleccionados);
    
  }, [numerosSeleccionados]);

  const filasDeCartones = [];
  for (let i = 0; i < cartones.length; i += cartonesPorFila) {
    filasDeCartones.push(cartones.slice(i, i + cartonesPorFila));
  }

  

  return (
    <div className="CartonesenJuego">
      
      {filasDeCartones.map((fila, filaIndex) => (
        <div key={filaIndex} className="fila-cartones">
          {fila.map((carton, cartonIndex) => (
            <div key={cartonIndex} className="carton">
              <h4>Cartón {filaIndex * cartonesPorFila + cartonIndex + 1}</h4>
              <table>
                <tbody>
                  {Array.from({ length: 5 }, (_, rowIndex) => (
                    <tr key={rowIndex}>
                      {Array.from({ length: 5 }, (_, colIndex) => {
                        const numero = carton[rowIndex * 5 + colIndex];
                        const seleccionado = numerosSeleccionados.includes(Number(numero));
                        return (
                          <td key={rowIndex * 5 + colIndex} className={seleccionado ? 'seleccionado' : ''}>
                            {numero}
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}
        </div>
      ))}
      {ganadorServer && (<GanadorModal onClose1={()=>setGanadorServer(false)} ganador={ganador}/>)}
    </div>
  );
};

export default Tablero;
