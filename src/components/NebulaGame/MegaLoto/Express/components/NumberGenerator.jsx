import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

// Asegúrate de que la URL sea la correcta para tu servidor
const socket = io('https://server-back-end-megaloto.onrender.com');

const NumberGenerator = () => {
  const [numbers, setNumbers] = useState([]);

  useEffect(() => {
    // Escuchar el evento 'newNumber' desde el servidor
    socket.on('newNumber', (newNumbers) => {
      setNumbers(newNumbers);
    });

    // Limpiar el socket cuando el componente se desmonte
    return () => {
      socket.off('newNumber');
    };
  }, []);

  const handleGenerateNumber = () => {
    socket.emit('generateNumber');
  };

  const handleResetNumbers = () => {
    socket.emit('resetNumbers');
  };

  const handleStartAutoGeneration = () => {
    socket.emit('startAutoGeneration');
  };

  const handleStopAutoGeneration = () => {
    socket.emit('stopAutoGeneration');
  };

  const handleGenerateCartones = () => {
    socket.emit('generateCartones');
  };

  return (
    <div>
      <h1>Number Generator</h1>
      <button onClick={handleGenerateNumber}>Generate Number</button>
      <button onClick={handleResetNumbers}>Reset Numbers</button>
      <button onClick={handleStartAutoGeneration}>Start Auto Generation</button>
      <button onClick={handleStopAutoGeneration}>Stop Auto Generation</button>
      <button onClick={handleGenerateCartones}>Generate Cartones</button>
      <h2>Generated Numbers:</h2>
      <ul>
        {numbers.map((number, index) => (
          <li key={index}>{number}</li>
        ))}
      </ul>
    </div>
  );
};

export default NumberGenerator;
