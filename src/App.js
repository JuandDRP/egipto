import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Navbar from "./componentes/Navbar";
import Footer from "./componentes/Footer";
import { Historia } from "./componentes/Historia";
import SitiosTuristicos from "./componentes/DetallesPelis/SitiosTuristicos";
import SobreNosotros from "./componentes/SobreNosotros";
import Experiencias from "./componentes/Experiencias";


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<SitiosTuristicos />} />
          <Route path="/Historia" element={<Historia />} />
          <Route path="/Experiencias" element={<Experiencias />} />
          <Route path="/SobreNosotros" element={<SobreNosotros />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer /> {}

      </div>
    </Router>
  );
}

export default App;
