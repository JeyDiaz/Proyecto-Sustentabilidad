import React, { useState, useEffect } from 'react';
import userIcon from '../assets/User_green.png';
import logo from '../assets/logoSus1.png';
import '../styles/Perfil.css';

const Perfil = () => {
  const [profile, setProfile] = useState({
    nombre: '',
    apellidos: '',
    correo: '',
    matricula: '',
    horas: ''
  });

  const [isEditing, setIsEditing] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    fetch('https://api.tuservidor.com/perfil') 
      .then(response => response.json())
      .then(data => setProfile(data))
      .catch(error => console.error('Error obteniendo datos:', error));
  }, []);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    fetch('https://api.tuservidor.com/perfil', { // Endpoint para actualizar tipo de beca
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ tipoBeca: profile.tipoBeca })
    })
      .then(response => response.json())
      .then(() => setIsEditing(false))
      .catch(error => console.error('Error actualizando datos:', error));
  };

  // Cerrar el menú al hacer clic fuera de la barra lateral
  const handleOutsideClick = (event) => {
    if (
      menuOpen && 
      !event.target.closest('.side-menu') && 
      !event.target.closest('.menu-button')
    ) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    // Agregar el listener cuando el menú esté abierto
    if (menuOpen) {
      document.addEventListener('click', handleOutsideClick);
    } else {
      // Eliminar el listener cuando el menú esté cerrado
      document.removeEventListener('click', handleOutsideClick);
    }

    // Cleanup del event listener cuando el componente se desmonte
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [menuOpen]); // Dependencia de 'menuOpen' para volver a agregar o eliminar el listener

  return (
    <div className="app-container">
      {/* Barra lateral */}
      <div className={`side-menu ${menuOpen ? 'open' : ''}`}>
        <div className="user-icon">
          <img src={userIcon} alt="Usuario" className="user-image" />
        </div>
        <ul>
            <li><a href="/Home">Inicio</a></li>
            <li><a href="/Perfil">Perfil</a></li>
            <li><a href="/Horas">Horas</a></li>
          <li>Cerrar sesión</li>
        </ul>
      </div>

      {/* Header */}
      <header className="home-header">
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} style={{ color: '#0b532e' }}>
          ☰
        </button>
        <div className="logo-section">
          <img src={logo} alt="Logo" className="logo" />
        </div>
      </header>

      {/* Main content */}
      <div className="main-content">
        <main className="main-content-container">
          <div className="profile-card">
            <div className="profile-header-section">
              <div className="profile-icon">
                <img src={userIcon} alt="User Icon" className="user-icon-image" />
              </div>
              <h2 className="profile-title">MI PERFIL</h2>
            </div>

            <div className="profile-fields">
              <div className="field-group"><p className="field-label">NOMBRE(S):</p><p className="field-value">{profile.nombre}</p></div>
              <div className="field-group"><p className="field-label">APELLIDOS:</p><p className="field-value">{profile.apellidos}</p></div>
              <div className="field-group"><p className="field-label">CORREO:</p><p className="field-value">{profile.correo}</p></div>
              <div className="field-group"><p className="field-label">MATRÍCULA:</p><p className="field-value">{profile.matricula}</p></div>
              <div className="field-group">
                <p className="field-label">TIPO DE BECA:</p>
                {isEditing ? (
                  <select
                    value={profile.tipoBeca}
                    onChange={(e) => setProfile({ ...profile, tipoBeca: e.target.value })}
                    className="edit-select"
                  >
                    <option value="Beca académica">Beca Académica</option>
                    <option value="Beca de Excelencia">Beca de Excelencia</option>
                    <option value="Beca a grupo de atención prioritaria">Beca a grupo de atención prioritaria</option>
                    <option value="Beca socio económica">Beca socio económica</option>
                    <option value="Beca de extensión universitaria">Beca de extensión universitaria</option>
                    <option value="Servicio social">Servicio social</option>
                  </select>
                ) : (
                  <p className="field-value">{profile.tipoBeca}</p>
                )}
              </div>
            </div>

            <div className="button-container">
              {isEditing ? (
                <button onClick={handleSave} className="action-button">Guardar</button>
              ) : (
                <button onClick={handleEdit} className="action-button">Editar perfil</button>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Perfil;
