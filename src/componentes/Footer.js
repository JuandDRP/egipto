import React from 'react';


const Footer = () => {
  return (
    <div class="container">
      <footer class="py-3 my-4">
        <p>Síguenos en nuestras redes sociales</p>
        <div class="social-icons">
          <a className="wpp" href="https://wa.me/18649088106?text=Hola%2C%20quiero%20información%20sobre%20los%20tours%20a%20Egipto" target="_blank" rel="noopener noreferrer">
            <i class="fa fa-whatsapp my-float text-dark"></i>
          </a>
          <a href="https://www.instagram.com/egipto.infinito" target="_blank" rel="noopener noreferrer">
            <i class="bi bi-instagram my-float text-dark"></i>
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;