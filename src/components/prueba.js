import React, { useEffect, useState } from 'react';
import axios from 'axios';

const NumerosComponent = () => {
  const [numeros, setNumeros] = useState([]);

  useEffect(() => {
    // Función para obtener los números del servidor
    const obtenerNumeros = async () => {
      try {
        const respuesta = await axios.get('https://server-back-end-megaloto.onrender.com');
        console.log(respuesta.data)
        const numerosRecibidos = respuesta.data;
        setNumeros(numerosRecibidos);
      } catch (error) {
        console.error('Error al obtener los número:', error);
      }
    };

    obtenerNumeros();
  }, []);

  return (
    <div>
      <h1>Números Generados</h1>
      
      <p>{numeros}</p>
    </div>
  );
};

export default NumerosComponent;
