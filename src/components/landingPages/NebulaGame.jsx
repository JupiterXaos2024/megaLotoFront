import React from 'react';
import Boton1 from '../global/boton1';
import './css/NebulaGame.css';

const NebulaGame = () => {
  const handleExploreGames = () => {
    window.location.href = '/NebulaGame/login';
  };

  

  return (
    <div className="landing-page-NebulaGame">
      <video muted autoPlay loop className="background-video">
                <source src='/videos/nebulaGamefondo.mp4'/>
            </video>
    
      <div className="content">
        <header>
          <h1>NebulaGame</h1>
          <p>Explora el Universo del Entretenimiento Interactivo</p>
        </header>

        <section className="introduction">
          <h2>Bienvenido a NebulaGame</h2>
          <p>Descubre una nueva dimensión de diversión y comunidad en el cosmos de los juegos interactivos.</p>
        </section>

        <section className="features">
          <h2>¿Qué es NebulaGame?</h2>
          <p>NebulaGame es más que una plataforma de juegos; es una experiencia inmersiva diseñada para ofrecerte lo mejor en entretenimiento digital. Con una variedad de juegos innovadores y emocionantes, te sumergirás en mundos virtuales donde la creatividad y la tecnología se unen para brindarte una aventura única.</p>

          <h3>Características Clave</h3>
          <ul>
            <li>
              <strong>Diversión sin fin</strong>
              <p>Juegos casuales y épicas batallas multijugador. Innovación constante con AR y VR.</p>
            </li>
            <li>
              <strong>Publicidad relevante y recompensada</strong>
              <p>Gana recompensas dentro del juego al interactuar con anuncios cuidadosamente seleccionados.</p>
            </li>
            <li>
              <strong>Comunidad cósmica</strong>
              <p>Perfiles de usuario personalizables, foros dinámicos y chats en tiempo real, eventos y torneos regulares.</p>
            </li>
            <li>
              <strong>Tecnología avanzada</strong>
              <p>Motores de juego como Unity y Unreal Engine. Servidores robustos y escalables para una experiencia de juego fluida y segura.</p>
            </li>
          </ul>
        </section>

        <section className="why-nebulagame">
          <h2>¿Por qué elegir NebulaGame?</h2>
          <p>En NebulaGame, nos comprometemos a ofrecer una plataforma donde la diversión y la tecnología se encuentran para crear momentos inolvidables. Nuestra misión es unir a jugadores de todo el mundo, proporcionándoles un espacio donde puedan disfrutar de juegos innovadores, interactuar con una comunidad vibrante y experimentar una publicidad que agrega valor a su experiencia de juego.</p>
        </section>

        <section className="cta">
          <h2>Únete a la aventura</h2>
          <p>Te invitamos a embarcarte en esta increíble aventura con nosotros. Explora, juega y conecta en NebulaGame, donde cada sesión de juego es una nueva oportunidad para descubrir lo desconocido. ¡Únete a la revolución del juego interactivo y sé parte de nuestro cosmos!</p>
          <h2>Explora Nuestros Juegos</h2>
          <div className="project-buttons">
            {/* <button onClick={handleRegister}>Regístrate Ahora</button> */}
            {/* <button onClick={handleExploreGames}>MEGA LOTO VIRTUAL</button> */}
            {/* <button className='boton boton-1' onClick={handleExploreGames}>MEGA LOTO EXPRESS</button> */}
            <Boton1 text={'MEGA LOTO EXPRESS'} onClick={handleExploreGames}/>
            
            {/* <button onClick={handleJoinCommunity}>Únete a la Comunidad</button> */}
          </div>
        </section>

        <div className="footerland">
          <p>Para más información, contáctanos en <a href="mailto:contacto@luzdeinnovacion.com">contacto@luzdeinnovacion.com</a> o síguenos en nuestras redes sociales.</p>
          <p>NebulaGame: Donde el Universo del Entretenimiento es tuyo.</p>
          <br />
          <br />
        </div>
      </div>
    </div>
  );
}

export default NebulaGame;
