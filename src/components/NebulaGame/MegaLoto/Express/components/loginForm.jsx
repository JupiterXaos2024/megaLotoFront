import React, { useState,useEffect } from 'react';
import axios from 'axios';
import '../css/loginForm.css'; // Asegúrate de tener estilos CSS personalizados en este archivo

const LoginForm = () => {
  const [cc, setCc] = useState('');
  const [verific, setVerific] = useState(false)

  // useEffect(()=>{
  //   console.log(cc)
  
  // },[cc])
  const onChangeCC = (e)=>{
    setCc(e.target.value)
    let a = e.target.value
    if(e.target.value.length > 7){
      let urls = process.env.REACT_APP_SERVER_URL + '/api/verific'
      axios.put(urls,{a})
      .then(response=>{
        if(response.data.status===201){
          setVerific(true)
        }else{
          setVerific(false)
        }
      })

    }
  }
  // const [password, setPassword] = useState('');
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState(null);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setIsLoading(true);

  //   axios.put('http://localhost:4000/api/login', { cc, password })
  //     .then(response => {
  //       console.log(response.data.body)
  //       if(response.data.body === 'acceso consedido'){
  //         window.location.href = '/NebulaGame/MegaLotoExpress';
  //         localStorage.setItem('login', true);
  //       } else {
  //         setIsLoading(false);
  //         setError('Error al iniciar sesión. Por favor, verifica tus credenciales.');
  //         localStorage.setItem('login', false);
  //       }
  //     })
  //     .catch(error => {
  //       setIsLoading(false);
  //       setError('Error al iniciar sesión. Por favor, verifica tus credenciales.');
  //     });
  // };

  // const handleCreateAccount = () => {
  //   window.location.href = '/NebulaGame/register';
  // };

    return(
      <div className='main'>
        <input type="checkbox" id="chk" aria-hidden="true" />
        <div  className='signup'>
          <form>
            <label for="chk" aria-hidden="true">Nuevo Participante</label>
            <input type="text" className='cc' placeholder='Cedula' onChange={(e)=>onChangeCC(e)} required=""/>
            {verific && (
              <div>
                <p>Tu CC ya se encuentra registrada</p>
                <br/>
                <p>Si necesitas ayuda puedes contactarte con nuestro equipo al whatsapp <a href="https://wa.me/message/OATJJQDVEU4SA1" target="_blank">+573133956853</a></p>

              </div>
            )}
            {!verific && (
              <div>
                <input type="text" className='Nombres' placeholder='Nombres Completos' required=""/>
                <input type="text" className='Nick' placeholder='Nick o Apodo' required=""/>
                <input type="Password" className='pswd' placeholder='Password' required=""/>
                <input type="text" className='whatsapp' placeholder='Numero de Whatsapp' required=""/>
                <input type="text" className='nequi' placeholder='Numero de Nequi' required=""/>
                <button>Inscribir</button>
              </div>
            )}
          </form>
        </div>
        <div className='login'>
            <label for="chk" aria-hidden="true">Ingresar</label>
            <input type="text" className='cc' placeholder='Cedula' required=""/>
            <input type="Password" className='pswd' placeholder='Password' required=""/>
            <button>ingresar</button>
        </div>
      </div>
    )

  // return (
  //   <div className="login-form-container">
  //     <form className="login-form" onSubmit={handleSubmit}>
  //       <h2>Login</h2>
  //       {error && <p className="error">{error}</p>}
  //       <div className="input-group">
  //         <input
  //           type="text"
  //           value={cc}
  //           onChange={(e) => setCc(e.target.value)}
  //           required
  //         />
  //         <label>CC</label>
  //       </div>
  //       <div className="input-group">
  //         <input
  //           type="password"
  //           value={password}
  //           onChange={(e) => setPassword(e.target.value)}
  //           required
  //         />
  //         <label>Password</label>
  //       </div>
  //       <button type="submit" className={`submit-btn ${isLoading ? 'loading' : ''}`}>
  //         {isLoading ? 'Loading...' : 'Login'}
  //       </button>
  //       <button type="button" className="create-account-btn" onClick={handleCreateAccount}>
  //         Crear Cuenta Nueva
  //       </button>
  //     </form>
  //   </div>
  // );
};

export default LoginForm;
