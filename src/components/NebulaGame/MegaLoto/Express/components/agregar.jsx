import React, { useState } from 'react';
import '../css/agregar.css';

const Agregar = ({ envia, onSubmit }) => {
  const [inputValue, setInputValue] = useState('');
  const [cartones, setCartones] = useState({});

  const handleChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
    parseCartones(value);
    //manejarNombresParticipantes(inputValue);
  };

  const handleSubmit = () => {
    onSubmit()
    envia(cartones)
  };

  const parseCartones = (text) => {
    const lines = text.split('\n');
    const cartonesObj = {};

    lines.forEach((line) => {
      const match = line.match(/🍀(\d+)-\s*([\w\s]+)?/);
      if (match) {
        const numero = match[1];
        const nombre = match[2] ? match[2].trim().replace('✅', '').trim() : null;
        //console.log(nombre)
        cartonesObj[numero] = nombre || null;
      }
    });

    setCartones(cartonesObj);
  };

  

  return (
    <div className="large-input-modal">
      <div className="large-input-content">
        <textarea
          className="large-input"
          value={inputValue}
          onChange={handleChange}
          placeholder="Ingrese su texto aquí..."
        />
        <button className="submit-button" onClick={handleSubmit}>Enviar</button>
        {/* <pre>{JSON.stringify(cartones, null, 2)}</pre> Muestra los cartones para verificar */}
      </div>
    </div>
  );
};

export default Agregar;
