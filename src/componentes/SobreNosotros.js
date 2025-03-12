import '../hojas-de-estilo/sobreNosotros.css';

function SobreNosotros() {
  return (
    <div>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"></link>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css"></link>


      <div className="sobre-nosotros-container">
        <h1>Sobre Nosotros</h1>


        <div className="sobre-nosotros-content">
          <div className="sobre-nosotros-texto">

            <p>
              Somos una agencia de viajes especializada en tours por Egipto, dedicada a brindar experiencias inolvidables a nuestros clientes.
              Con años de trayectoria en la industria, nos enorgullece ofrecer recorridos personalizados y de alta calidad, asegurando seguridad, comodidad y aventura en cada viaje.
            </p>

            <h2><strong>¿Por qué elegirnos?</strong></h2>
            <p>
              ✅ Itinerarios diseñados y flexibles para todo tipo de viajeros: historia, aventura, lujo y cultura. <br />
              ✅ Guías expertos que hacen que la historia cobre vida. <br />
              ✅ Atención personalizada desde el primer contacto. <br />
              ✅ Transporte seguro y cómodo para que disfrutes sin preocupaciones.
            </p>

            <p>
              Nos comprometemos a ofrecerte una experiencia que supere tus expectativas.
              Descubre con nosotros los misterios de las pirámides, navega por el majestuoso Nilo y sumérgete en la magia de Egipto.
            </p>

            <p>
              <strong>📩<a href="https://wa.me/18649088106?text=Hola%2C%20quiero%20información%20sobre%20los%20tours%20a%20Egipto" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline"> Contáctanos</a> y comienza tu aventura hoy.</strong>
            </p>
          </div>

          <h1>Fundadora y encargada de la agencia</h1>
          <div className="sobre-nosotros-imagenes">
            <img src="/imagenes/Lina.jpg" alt="Equipo de la agencia" />
            <img src="/imagenes/Lina2.jpg" alt="Clientes en un tour por Egipto" />
          </div>
        </div>
      </div>




      <a href="https://api.whatsapp.com/send?phone=573165659077&text=Hola%2C%20quiero%20información%20sobre%20los%20tours%20a%20Egipto" class="float" target="_blank" rel="noopener noreferrer">
        <i class="fa fa-whatsapp my-float"></i>
      </a>
      <a href="https://www.instagram.com/egipto.infinito" class="float2" target="_blank" rel="noopener noreferrer">
        <img src="/imagenes/ig2.png" alt="Instagram" />
      </a>

    </div>
  );
}

export default SobreNosotros;
