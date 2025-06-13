/* eslint-disable no-unused-vars */

import { useMemo, useState, useEffect } from "react";


function PaginaPrincipal() {
  const [mostrarFotos, setMostrarFotos] = useState(false);
  const [mostrarComentarios, setMostrarComentarios] = useState(false);
  const [comentarios, setComentarios] = useState([]);
  const [cargandoComentarios, setCargandoComentarios] = useState(false);

  const imagenes = useMemo(() => [
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

  // eslint-disable-next-line react-hooks/exhaustive-dep
  useEffect(() => {
  if (comentarios.length > 0) {
    console.log("Hay comentarios");
  }
}, [comentarios]);

  useEffect(() => {
    if (mostrarComentarios && comentarios.length === 0) {
      setCargandoComentarios(true);
      fetch("https://back-egipto.onrender.com/comentarios") 
        .then((res) => res.json())
        .then((data) => {
          setComentarios(data);
          setCargandoComentarios(false);
        })
        .catch((error) => {
          console.error("Error al obtener los comentarios:", error);
          setCargandoComentarios(false);
        });
    }
  }, [mostrarComentarios]);

  const renderEstrellas = (cantidad) => {
    return Array.from({ length: 5 }, (_, i) => (
      <i
        key={i}
        className={`bi ${i < cantidad ? "bi-star-fill text-yellow-500" : "bi-star text-gray-300"}`}
      ></i>
    ));
  };

  return (
    <div className="bg-white">
      <div className="bg-white min-h-screen px-4 py-10">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"></link>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css"></link>
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-yellow-600 uppercase mb-4">
            Experiencias de Nuestros Clientes
          </h1>
          <p className="text-lg text-gray-700 mb-8">
            Descubre los increíbles momentos que han vivido nuestros viajeros en Egipto.
          </p>

          <div className="flex flex-col items-center gap-4 mb-8">
            <button
              onClick={() => setMostrarFotos(!mostrarFotos)}
              className="bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-2 rounded-lg transition min-w-[180px] text-center"
            >
              {mostrarFotos ? "Ocultar fotos" : "Ver fotos"}
            </button>

            <button
              onClick={() => setMostrarComentarios(!mostrarComentarios)}
              className="bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-2 rounded-lg transition min-w-[180px] text-center"
            >
              {mostrarComentarios ? "Ocultar comentarios" : "Ver comentarios"}
            </button>
          </div>

          {mostrarFotos && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
              {imagenes.map((imagen, index) => (
                <div
                  key={index}
                  className="relative rounded-lg overflow-hidden shadow-md group"
                >
                  <img
                    src={imagen.src}
                    alt={imagen.alt}
                    className="w-full h-80 object-cover transform transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute bottom-0 w-full bg-black bg-opacity-60 text-white text-sm px-2 py-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    {imagen.alt}
                  </div>
                </div>
              ))}
            </div>
          )}

          {mostrarComentarios && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {cargandoComentarios ? (
                <p className="text-center col-span-2 text-gray-600">Cargando comentarios...</p>
              ) : (
                comentarios.map((comentario, index) => (
                  <div key={index} className="bg-gray-100 p-6 rounded-lg shadow">
                    <h3 className="text-xl font-semibold text-yellow-700 mb-2">
                      {comentario.nombre}
                    </h3>
                    <p className="text-gray-700 mb-2">{comentario.texto}</p>
                    <div className="flex">{renderEstrellas(comentario.estrellas)}</div>
                  </div>
                ))
              )}
            </div>
          )}
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

export default PaginaPrincipal;
