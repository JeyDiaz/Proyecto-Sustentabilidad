import React from 'react';
import '../styles/Login.css';
import logo2 from '../assets/logoSus1.png';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/home'); 
  };

  return (
    <div className="loginContainer">
      <div className="logoSeccion">
        <img src={logo2} className="logo" alt="logo" />
      </div>
      <h1>¡INICIA SESIÓN!</h1>
      <form
        className="loginForm"
        onSubmit={(e) => {
          e.preventDefault();
          handleLogin();
        }}
      >
        <label htmlFor="matricula">MATRICULA</label>
        <input
          type="text"
          id="matricula"
          name="matricula"
          placeholder=""
        />

        <label htmlFor="password">CONTRASEÑA</label>
        <div className="passwordContainer">
          <input
            type="password"
            id="password"
            name="password"
            placeholder=""
          />
          <button
            type="button"
            className="passwordCambio"
            onClick={() => {}}
          >
            Mostrar
          </button>
        </div>

        <a href="olvidoPassword" className="olvidoPasswordLink">
          ¿Has olvidado tu contraseña?
        </a>
        <button type="submit" className="loginBoton">
          INICIAR SESIÓN
        </button>
      </form>
      <p className="signupTexto">
        Si eres nuevo, <a href="/signUp" className="signupLink">REGÍSTRATE</a>
      </p>
      <p className="regresarTexto">
        <a href="/dashboard" className="botonRegresar"> ← Regresar</a>
      </p>
    </div>
  );
}

export default Login;
