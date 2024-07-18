import React from 'react';
import Boton1 from '../global/boton1';
import './css/luzdeinnovacion.css';

const LandingLuzdeInnova = () => {
   

    return (
        <div className="landing-page-luzdeInnova">
            <video muted autoPlay loop className="background-video">
                <source src='/videos/videoFondo.mp4'/>
            </video>

        <div className="content">
            <h1>LUZ DE INNOVACION: La Morada de las Maravillas</h1>
            <p>
            Bienvenido a <strong>LUZ DE INNOVACION</strong>, la morada de las maravillas, donde la creatividad, el conocimiento y la tecnología convergen para transformar ideas en realidades. Somos una empresa dedicada a brindar oportunidades de crecimiento y desarrollo a aprendices y profesionales, ofreciendo un entorno donde la excelencia, el liderazgo y el cumplimiento son nuestra base.
            </p>

            <h2>¿Quiénes Somos?</h2>
            <p>
            <strong>LUZ DE INNOVACION</strong> nace con la visión de ser un faro de conocimiento y una incubadora de talento. Nuestra misión es empoderar a individuos y empresas, proporcionándoles las herramientas y el apoyo necesario para alcanzar sus metas. Nos especializamos en proyectos innovadores que abordan necesidades empresariales, domésticas y profesionales a través de soluciones tecnológicas avanzadas.
            </p>

            <h2>Métodos Innovadores</h2>
            <h3>1. Colaboración y Trabajo en Equipo</h3>
            <p>
            Fomentamos un ambiente de colaboración donde cada miembro del equipo tiene la oportunidad de contribuir y crecer. Nuestros métodos de trabajo están diseñados para maximizar la creatividad y la innovación colectiva.
            </p>

            <h3>2. Tecnología de Vanguardia</h3>
            <p>
            Utilizamos las últimas tecnologías en inteligencia artificial, desarrollo de software y gestión de proyectos para asegurarnos de que nuestras soluciones sean de la más alta calidad.
            </p>

            <h3>3. Desarrollo Sostenible</h3>
            <p>
            Nuestros proyectos están diseñados con un enfoque en la sostenibilidad y la responsabilidad social, asegurando que nuestras soluciones beneficien tanto a nuestros clientes como al medio ambiente.
            </p>

            <h2>Proyectos Destacados</h2>
            <div className="project-buttons">
                <Boton1 text={'NEBULAGAME'} onClick={() => window.location.href = '/NebulaGame'}/>
            </div>

            <h2>Únete a Nosotros</h2>
            <p>
            <strong>LUZ DE INNOVACION</strong> está en constante búsqueda de talento y creatividad. Si deseas formar parte de un equipo dinámico y apasionado, ¡te invitamos a unirte a nosotros en esta emocionante aventura!
            </p>

            <h2>Contacto</h2>
            <p>
            <strong>Correo Electrónico:</strong> contacto@luzdeinnovacion.com<br />
            <strong>Teléfono:</strong> +573229344830<br />
            <br />
            <br />
            </p>

            <div className="social-media">
            </div>
        </div>
        </div>
    );
    };

    export default LandingLuzdeInnova;
