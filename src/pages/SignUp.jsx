import React from 'react';
import '../styles/SignUp.css'; 
import logo2 from '../assets/logoSus1.png';
import { useNavigate } from 'react-router-dom';

function SignUp() {
  const navigate = useNavigate();

  const handleSignUp = () => {
    navigate('/home'); //coregir esto
  };

  return (
    <div className="signupContainer">
      <div className="logoSeccion">
        <img src={logo2} alt="Logo" className="logo" />
      </div>
      <h1>¡REGÍSTRATE!</h1>
      <form className="signupForm">
        <label htmlFor="name">NOMBRE(S)</label>
        <input type="text" id="name" placeholder="" />

        <label htmlFor="surname">APELLIDO(S)</label>
        <input type="text" id="surname" placeholder="" />

        <label htmlFor="matricula">MATRÍCULA</label>
        <input type="text" id="matricula" placeholder="" />

        <label htmlFor="email">CORREO INSTITUCIONAL</label>
        <input type="email" id="email" placeholder="" />

        <label htmlFor="password">CONTRASEÑA</label>
        <input type="password" id="password" placeholder="" />

        <label htmlFor="scholarship">TIPO DE BECA</label>
        <select id="scholarship">
          <option value="">Selecciona una opción</option>
          <option value="beca1">Beca Académica</option>
          <option value="beca2">Beca de Excelencia</option>
          <option value="beca3">Beca a grupo de atención prioritaria</option>
          <option value="beca4">Beca socio económica</option>
          <option value="beca5">Beca de extención universitaria (Deportes,cultura y cultura verde)</option>
          <option value="beca6">Servicio social</option>
        </select>

        <button type="button" className="signupBoton" onClick={handleSignUp}> 
          ENVIAR
        </button>
      </form>
      <p className="loginTexto">
        <a href="/login" className="loginLink">YA TENGO UNA CUENTA</a>
      </p>
      <p className="regresarTexto">
        <a href="/dashboard" className="botonRegresar"> ← Regresar</a>
      </p>
    </div>
  );
}

export default SignUp;
