import { FaWhatsapp, FaInstagram } from "react-icons/fa";

const FloatingIcons = () => {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
      {/* WhatsApp */}
      <a
        href="https://api.whatsapp.com/send?phone=573165659077&text=Hola%2C%20quiero%20información%20sobre%20los%20tours%20a%20Egipto"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className="bg-green-500 text-white p-3 rounded-full shadow-lg transition-transform transform hover:scale-110"
      >
        <FaWhatsapp size={30} />
      </a>

      {/* Instagram */}
      <a
        href="https://www.instagram.com/egipto.infinito"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        className="bg-gradient-to-r from-pink-500 to-yellow-500 text-white p-3 rounded-full shadow-lg transition-transform transform hover:scale-110"
      >
        <FaInstagram size={30} />
      </a>
    </div>
  );
};

export default FloatingIcons;
