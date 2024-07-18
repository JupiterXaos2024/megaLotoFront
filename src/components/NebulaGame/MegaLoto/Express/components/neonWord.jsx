import React from 'react';
import '../css/neonWord.css';

const NeonWord = ({ text }) => {
  return (
    <div className="contenedor_inferior">
        <div className="contenedor_superior">
            <h1>{text}</h1>
        </div>
    </div>
  );
};

export default NeonWord;
