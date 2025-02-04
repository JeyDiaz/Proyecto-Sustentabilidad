import React, { useState, useEffect } from "react";
import { QrReader } from "react-qr-reader";
import logo2 from "../assets/logoSus1.png";
import userIcon from "../assets/User_green.png";
import qrImagen from "../assets/qrImangen.png";
import "../styles/Home.css";



const Home = () => {
  const [qrData, setQrData] = useState(null);
  const [showModal, setShowModal] = useState(true);
  const [permissionGranted, setPermissionGranted] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [animatePopup, setAnimatePopup] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScan = (data) => {
    if (data) {
      setQrData(data);
      setShowPopup(true);
    }
  };

  const handleError = (error) => {
    console.error("Error al escanear el QR:", error);
  };

  const handlePermission = () => {
    setPermissionGranted(true);
    setShowModal(false);
  };

  const handleDeny = () => {
    alert("Necesitas otorgar permisos para usar la cámara.");
    setShowModal(false);
  };

  const closePopup = () => {
    setAnimatePopup(false);
    setTimeout(() => setShowPopup(false), 800);
  };

  useEffect(() => {
    if (showPopup) {
      setAnimatePopup(true);
    }
  }, [showPopup]);

  // Cerrar el menú al hacer clic fuera de él
  const handleOutsideClick = (event) => {
    if (
      isMenuOpen &&
      !event.target.closest(".side-menu") &&
      !event.target.closest(".menu-button")
    ) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isMenuOpen]);

  return (
    <div className="home-container">
      {/* Header */}
      <header className="home-header">
        <button className="menu-button" onClick={() => setIsMenuOpen(!isMenuOpen)} style={{ color: '#0b532e' }}>
          ☰
        </button>
        <div className="logo-section">
          <img src={logo2} alt="Logo" className="logo" />
        </div>
      </header>

      {/* Menú lateral */}
        <div className={`side-menu ${isMenuOpen ? "open" : ""}`}>
          <div className="user-icon">
            <img src={userIcon} alt="Usuario" className="user-image" />
          </div>
          <ul>
            <li><a href="/Home">Inicio</a></li>
            <li><a href="/Perfil">Perfil</a></li>
            <li>Horas</li>
            <li>Cerrar sesión</li>
          </ul>
        </div>

        {/* Main */}
      <main className="home-main">
        <div className="qr-container">
          {permissionGranted ? (
            <QrReader
              delay={300}
              onError={handleError}
              onResult={(result, error) => {
                if (!!result) {
                  handleScan(result.text);
                }
                if (!!error) {
                  console.error(error);
                }
              }}
              style={{ width: "100%", height: "100%" }}
            />
          ) : (
            <button className="scan-button" onClick={() => setShowModal(true)}>
              Permitir el acceso a la cámara
            </button>
          )}
        </div>
        <br></br><br></br><br></br>
        <div className="instructions">
          <p>Permite el acceso a tu cámara para escanear el código QR.</p>
          
          <p>Revisa que los datos estén correctos.</p>
          {qrData && <p>Datos escaneados: {qrData}</p>}
        </div>
        <p className="regresarTexto">
          <br></br><br></br>
          <a href="/Dashboard" className="botonRegresar"> ← Regresar</a>
        </p>
      </main>

      {/* Modal de permisos */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <p><strong>SustentApp quiere usar la cámara</strong></p>
            <button className="allow-button" onClick={handlePermission}>
              Permitir
            </button>
            <button className="deny-button" onClick={handleDeny}>
              Bloquear
            </button>
          </div>
        </div>
      )}

      {/* Popup de éxito */}
      {showPopup && (
        <div className={`success-popup ${animatePopup ? "popup-appear" : ""}`}>
          <p className="success-title">El registro se ha realizado exitosamente.</p>
          <div className="success-content">
            <p><strong>Contenido:</strong></p>
            <p>{qrData}</p>
          </div>
          <button className="close-button" onClick={closePopup}>
            Cerrar
          </button>
        </div>
      )}
    </div>
  );
};

export default Home;