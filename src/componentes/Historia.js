/* eslint-disable no-unused-vars */

import "../hojas-de-estilo/Historia.css";

export const Historia = () => {


	return (
		<div>
			<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"></link>
			<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css"></link>

			<div className="historia-egipto-container">
				<h1>Historia de Egipto</h1>

				<div className="historia-egipto-item">
					<div className="historia-egipto-text">
						<p>
							Egipto es el hogar de una de las civilizaciones más antiguas del mundo.
							Durante más de 3,000 años, los faraones gobernaron estas tierras, dejando
							un legado de templos, tumbas y misterios aún por descubrir. Desde la construcción
							de las Pirámides de Guiza hasta el esplendor de Luxor, cada rincón de Egipto
							cuenta una historia fascinante.
						</p>
					</div>
					<div className="historia-egipto-img">
						<img src="/imagenes/guiza.jpg" alt="Pirámides de Guiza" />
					</div>
				</div>

				<div className="historia-egipto-item ">
					<div className="historia-egipto-text">
						<p>
							Conocida como la antigua Tebas, Luxor fue la capital del Imperio Nuevo de Egipto.
							Aquí se encuentran el majestuoso <strong>Templo de Karnak</strong> y el misterioso
							<strong> Valle de los Reyes</strong>, donde fueron enterrados faraones como Tutankamón.
							Caminar por estos templos es viajar en el tiempo y sentir la grandeza de los faraones.
						</p>
					</div>
					<div className="historia-egipto-img">
						<img src="/imagenes/luxor.jpg" alt="Templo de Karnak en Luxor" />
					</div>
				</div>

				<div className="historia-egipto-item">
					<div className="historia-egipto-text">
						<p>
							Egipto fue una de las primeras grandes civilizaciones del mundo. Su historia comenzó con la unificación del Alto y Bajo Egipto por el faraón Menes en el año 3100 a.C. Gracias al río Nilo, los egipcios desarrollaron una de las sociedades más avanzadas de la antigüedad, con grandes innovaciones en la escritura, la arquitectura y la religión.
						</p>
					</div>
					<div className="historia-egipto-img">
						<img src="/imagenes/24.jpg" alt="Unificación del Antiguo Egipto" />
					</div>
				</div>

				<div className="historia-egipto-item">
					<div className="historia-egipto-text">
						<p>
							Cleopatra VII, la última reina de Egipto, fue una estratega política y una de las mujeres más influyentes de la antigüedad. Su relación con Julio César y Marco Antonio marcó los últimos años del Egipto faraónico. Tras su muerte en el año 30 a.C., Egipto se convirtió en una provincia del Imperio Romano.
						</p>
					</div>
					<div className="historia-egipto-img">
						<img src="/imagenes/Cleopatra.jpg" alt="Cleopatra y el fin del Egipto faraónico" />
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
};