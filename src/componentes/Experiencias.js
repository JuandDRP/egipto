/* eslint-disable no-unused-vars */
import "../hojas-de-estilo/Experiencias.css";
import { useMemo } from "react";


function PaginaPrincipal() {
  const imagenes =useMemo(() => [
    { src: "/imagenes/1.jpg", alt: "Visitando los globos" },
    { src: "/imagenes/23.jpg", alt: "Visitando las piramides" },
    { src: "/imagenes/24.jpg", alt: "Visitando las piramides" },
    { src: "/imagenes/27.jpg", alt: "Visitando un templo" },
    { src: "/imagenes/28.jpg", alt: "Visitando un templo" },
    { src: "/imagenes/30.jpg", alt: "Visitando un templo" },
    { src: "/imagenes/31.jpg", alt: "Visitando un templo" },
    { src: "/imagenes/32.jpg", alt: "Comida muy deliciosa" },
    { src: "/imagenes/33.jpg", alt: "Comida muy deliciosa" },
    { src: "/imagenes/34.jpg", alt: "Comida muy deliciosa" },
    { src: "/imagenes/35.jpg", alt: "Visitando un templo" },
    { src: "/imagenes/36.jpg", alt: "Visitando un templo" },
    { src: "/imagenes/37.jpg", alt: "Visitando un templo" },
    { src: "/imagenes/38.jpg", alt: "Crucero por el Nilo" },
    { src: "/imagenes/39.jpg", alt: "Visitando un templo" },
    { src: "/imagenes/41.jpg", alt: "Una colorida exhibición de especias y hierbas donde los Nubios" },
    { src: "/imagenes/42.jpg", alt: "Comerciante local, vestido con atuendos tradicionales de los Nubios" },
    { src: "/imagenes/43.jpg", alt: "Alfombras y cojines típicos de los Nubios" },
    { src: "/imagenes/44.jpg", alt: "Visitando un templo" },
    { src: "/imagenes/2.jpg", alt: "Visitando un templo" },
    { src: "/imagenes/3.jpg", alt: "Visitando un templo" },
    { src: "/imagenes/4.jpg", alt: "Visitando un templo" },
    { src: "/imagenes/5.jpg", alt: "Visitando un templo" },
    { src: "/imagenes/6.jpg", alt: "Visitando un templo" },
    { src: "/imagenes/7.jpg", alt: "Visitando un templo" },
    { src: "/imagenes/8.jpg", alt: "Visitando los globos" },
    { src: "/imagenes/9.jpg", alt: "Visitando un templo" },
    { src: "/imagenes/10.jpg", alt: "Visitando un templo" },
    { src: "/imagenes/11.jpg", alt: "Visitando un templo" },
    { src: "/imagenes/12.jpg", alt: "Visitando un templo" },
    { src: "/imagenes/13.jpg", alt: "Visitando un templo" },
    { src: "/imagenes/14.jpg", alt: "Visitando un templo" },
    { src: "/imagenes/15.jpg", alt: "Visitando un templo" },
    { src: "/imagenes/16.jpg", alt: "Visitando un templo" },
    { src: "/imagenes/17.jpg", alt: "Visitando un templo" },
    { src: "/imagenes/18.jpg", alt: "Visitando un templo" },
    { src: "/imagenes/19.jpg", alt: "Visitando un templo" },
    { src: "/imagenes/20.jpg", alt: "Visitando un templo" },
    { src: "/imagenes/21.jpg", alt: "Visitando un templo" },
    { src: "/imagenes/22.jpg", alt: "Visitando un templo" },
    { src: "/imagenes/25.jpg", alt: "Visitando un templo" },
    { src: "/imagenes/26.jpg", alt: "Visitando un templo" },
    { src: "/imagenes/29.jpg", alt: "Visitando un templo" },
    { src: "/imagenes/40.jpg", alt: "Visitando un templo" },
    { src: "/imagenes/45.jpg", alt: "Visitando un templo" },
    { src: "/imagenes/46.jpg", alt: "Visitando un templo" },
    { src: "/imagenes/47.jpg", alt: "Visitando un templo" },
    { src: "/imagenes/48.jpg", alt: "Visitando un templo" },
    { src: "/imagenes/49.jpg", alt: "Visitando un templo" },
    { src: "/imagenes/50.jpg", alt: "Visitando un templo" }

  ], []);


  return (
    <div >
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"></link>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css"></link>
      <div className="experiencias-container">


        <h1>Experiencias de Nuestros Clientes</h1>
        <p className="inicio">Descubre los increíbles momentos que han vivido nuestros viajeros en Egipto.</p>

        <div className="experiencias-grid">
          {imagenes.map((imagen, index) => (
            <div className="experiencia-item" key={index}>
              <img src={imagen.src} alt={imagen.alt} />
              <div className="overlay">
                <p>{imagen.alt}</p>
              </div>
            </div>
          ))}
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

export default PaginaPrincipal;
