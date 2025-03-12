/* eslint-disable no-unused-vars */

import './SitiosTuristicos.css';


function SitiosTuristicos() {


  return (
    <div className='fondo'>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"></link>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css"></link>

      <div className="historia-container">
        <div className="historia-item">
          <div className="historia-text">
            <h1>SITIOS TURISTICOS</h1>
            <p>Con <a href="https://wa.me/18649088106?text=Hola%2C%20quiero%20información%20sobre%20los%20tours%20a%20Egipto" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Egipto Infinito</a> puedes hacer tus sueños realidad, conocer una de las siete Maravillas del mundo antiguo. Puedes escoger que sitios deseas visitar y nosotros lo hacemos realidad</p>
          </div>

        </div>
      </div>

      <div className="historia-container">
        <div className="historia-item">
          <div className="historia-text">
            <h1>Pirámides de Guiza y Esfinge </h1>
            <p>Las Pirámides de Guiza, una de las Siete Maravillas del Mundo Antiguo, son el símbolo más icónico de Egipto. Construidas hace más de 4,500 años, estas majestuosas estructuras fueron las tumbas de los faraones Keops, Kefrén y Micerinos. A sus pies, la enigmática Gran Esfinge, con su cuerpo de león y cabeza humana, custodia este imponente complejo arqueológico.</p>
          </div>
          <div className="historia-img">
            <img src="/imagenes/guiza.jpg" alt="Historia Egipto 1" />
          </div>
        </div>
      </div>


      <div className="historia-container">
        <div className="historia-item reverse">
          <div className="historia-text">
            <h1>Templo de Luxor </h1>
            <p>Ubicado a orillas del Nilo, el Templo de Luxor es una joya arquitectónica dedicada al dios Amón-Ra. Construido por Amenhotep III y expandido por Ramsés II, este templo es famoso por su avenida de esfinges, sus gigantescas estatuas y sus impresionantes relieves. Durante la noche, su iluminación lo convierte en uno de los sitios más espectaculares de Egipto.</p>
          </div>
          <div className="historia-img">
            <img src="/imagenes/luxor.jpg" alt="Historia Egipto 2" />
          </div>
        </div>
      </div>


      <div className="historia-container">
        <div className="historia-item">
          <div className="historia-text">
            <h1>Crucero por el Nilo</h1>
            <p>Disfruta de un viaje inolvidable navegando por el legendario río Nilo. A bordo de un lujoso crucero, podrás admirar los paisajes del desierto, visitar templos ancestrales y experimentar la hospitalidad egipcia. Es una forma perfecta de conectar con la historia de Egipto mientras te relajas con todas las comodidades modernas.</p>
          </div>
          <div className="historia-img">
            <img src="/imagenes/crucero.jpg" alt="Historia Egipto 1" />
          </div>
        </div>
      </div>


      <div className="historia-container">
        <div className="historia-item reverse">
          <div className="historia-text">
            <h1>Templo de Karnak </h1>
            <p>El Templo de Karnak es el complejo religioso más grande de Egipto y uno de los más impresionantes del mundo. Sus gigantescas columnas en la Sala Hipóstila, sus obeliscos y su lago sagrado te transportarán a la grandeza del Antiguo Egipto. Este templo estuvo en construcción durante más de 1,500 años, con aportes de diferentes faraones.</p>
          </div>
          <div className="historia-img">
            <img src="/imagenes/Karnak.jpg" alt="Historia Egipto 2" />
          </div>
        </div>
      </div>


      <div className="historia-container">
        <div className="historia-item">
          <div className="historia-text">
            <h1>Paseos en globo en Luxor </h1>
            <p>Vive una experiencia inolvidable con un paseo en globo aerostático sobre Luxor. Al amanecer, disfruta de vistas panorámicas de los templos, el Nilo y el Valle de los Reyes desde el cielo. Esta es una de las actividades más emocionantes que puedes hacer en Egipto y una oportunidad única para capturar fotos impresionantes.</p>
          </div>
          <div className="historia-img">
            <img src="/imagenes/globos1.jpg" alt="Historia Egipto 1" />
          </div>
        </div>
      </div>


      <div className="historia-container">
        <div className="historia-item reverse">
          <div className="historia-text">
            <h1>Valle de los Reyes</h1>
            <p>Explora las tumbas de los faraones más poderosos del Antiguo Egipto. Este sitio es famoso por sus decoraciones detalladas y la icónica tumba de Tutankamón.</p>
          </div>
          <div className="historia-img">
            <img src="/imagenes/ValleReyes.jpg" alt="Valle de los Reyes" />
          </div>
        </div>
      </div>

      <div className="historia-container">
        <div className="historia-item">
          <div className="historia-text">
            <h1>Templo de Abu Simbel</h1>
            <p>Admirado por sus gigantescas estatuas y su historia fascinante, este templo es una joya de la arquitectura egipcia.</p>
          </div>
          <div className="historia-img">
            <img src="/imagenes/6.jpg" alt="Templo de Abu Simbel" />
          </div>
        </div>
      </div>



      <a href="https://wa.me/18649088106?text=Hola%2C%20quiero%20información%20sobre%20los%20tours%20a%20Egipto" class="float" target="_blank" rel="noopener noreferrer">
        <i class="fa fa-whatsapp my-float"></i>
      </a>
      <a href="https://www.instagram.com/egipto.infinito" class="float2" target="_blank" rel="noopener noreferrer">
        <img src="/imagenes/ig2.png" alt="Instagram" />
      </a>
    </div>

  );
}

export default SitiosTuristicos;