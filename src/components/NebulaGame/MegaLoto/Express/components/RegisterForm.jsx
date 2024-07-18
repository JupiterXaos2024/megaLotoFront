import React, { useState } from 'react';
import axios from 'axios';
import '../css/registerForm.css'; // Asegúrate de tener estilos CSS personalizados en este archivo

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    cc: '',
    Nombres_Completos: '',
    Nick: '',
    password: '',
    Whatsapp: '',
    Nequi: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    axios.post('http://localhost:4000/api/register', formData)
      .then(response => {
        setIsLoading(false);
        setSuccess('Registro exitoso. Redirigiendo al login...');
        setTimeout(() => {
          window.location.href = '/NebulaGame/login';
        }, 2000); // Redirige después de 2 segundos
      })
      .catch(error => {
        setIsLoading(false);
        setError('Error al registrar. Por favor, verifica los datos e intenta de nuevo.');
      });
  };

  return (
    <div className="register-form-container">
      <form className="register-form" onSubmit={handleSubmit}>
        <h2>Registro</h2>
        {error && <p className="error">{error}</p>}
        {success && <p className="success">{success}</p>}
        <div className="input-group">
          <input
            type="text"
            name="cc"
            value={formData.cc}
            onChange={handleChange}
            required
          />
          <label>CC</label>
        </div>
        <div className="input-group">
          <input
            type="text"
            name="Nombres_Completos"
            value={formData.Nombres_Completos}
            onChange={handleChange}
            required
          />
          <label>Nombres Completos</label>
        </div>
        <div className="input-group">
          <input
            type="text"
            name="Nick"
            value={formData.Nick}
            onChange={handleChange}
            required
          />
          <label>Nick</label>
        </div>
        <div className="input-group">
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <label>Password</label>
        </div>
        <div className="input-group">
          <input
            type="text"
            name="Whatsapp"
            value={formData.Whatsapp}
            onChange={handleChange}
            required
          />
          <label>Whatsapp</label>
        </div>
        <div className="input-group">
          <input
            type="text"
            name="Nequi"
            value={formData.Nequi}
            onChange={handleChange}
            required
          />
          <label>Nequi</label>
        </div>
        <button type="submit" className={`submit-btn ${isLoading ? 'loading' : ''}`}>
          {isLoading ? 'Registrando...' : 'Registrar'}
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
