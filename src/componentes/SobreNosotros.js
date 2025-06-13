function SobreNosotros() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 py-16 font-sans bg-white text-gray-800">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"></link>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css"></link>
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold uppercase text-yellow-700">Sobre Nosotros</h1>
          <p className="text-lg text-gray-600 mt-4">
            Descubre quiénes somos y por qué somos tu mejor opción para explorar Egipto
          </p>
        </div>

        <div className="flex flex-col items-center gap-12">
          <div className="bg-gray-50 p-8 rounded-xl shadow-lg max-w-3xl text-justify">
            <p className="text-lg mb-6 leading-relaxed">
              Somos una agencia especializada en tours por Egipto, dedicada a crear experiencias únicas.
              Nos apasiona conectar a las personas con la historia, cultura y magia de esta tierra milenaria.
            </p>

            <h2 className="text-2xl font-semibold text-yellow-700 text-center mb-4">¿Por qué elegirnos?</h2>
            <ul className="list-disc list-inside text-lg mb-6 space-y-2">
              <li>Itinerarios flexibles y personalizados para cada tipo de viajero.</li>
              <li>Guías expertos que hacen que la historia cobre vida.</li>
              <li>Atención cercana y acompañamiento desde el primer contacto.</li>
              <li>Transporte seguro y cómodo para que solo pienses en disfrutar.</li>
            </ul>

            <p className="text-lg mb-6 leading-relaxed">
              Vive Egipto con nosotros: explora las pirámides, navega el Nilo y descubre secretos milenarios.
              Creamos viajes que dejan huella.
            </p>

            <p className="text-center font-semibold text-yellow-700 text-lg">
              📩{' '}
              <a
                href="https://wa.me/18649088106?text=Hola%2C%20quiero%20información%20sobre%20los%20tours%20a%20Egipto"
                className="underline hover:text-yellow-800"
                target="_blank"
                rel="noopener noreferrer"
              >
                Contáctanos y empieza tu aventura hoy
              </a>
            </p>
          </div>

          <div className="text-center">
            <h2 className="text-2xl font-semibold text-yellow-700 mb-6">Fundadora y Encargada</h2>
            <div className="flex flex-wrap justify-center gap-6">
              <img
                src="/imagenes/Lina.jpg"
                alt="Fundadora"
                className="w-72 rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
              />
              <img
                src="/imagenes/Lina2.jpg"
                alt="Fundadora en Egipto"
                className="w-72 rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
              />
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
    </div>
  );
}

export default SobreNosotros;
