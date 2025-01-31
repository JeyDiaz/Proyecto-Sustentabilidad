import React from 'react';
import '../styles/Dashboard.css';
import logo from '../assets/logoU.png';
import logo1 from '../assets/logoSus.png';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
    const navigate = useNavigate();
  
    const handleLogin = () => {
      navigate('/login'); 
    };
  
    const handleSignUp = () => {
      navigate('/signUp'); 
    };

return (
  <div className="homeContainer">
    <div>
      <img src={logo} className="logoU" alt="logo" />
      <img src={logo1} className="logoSus" alt="logo" />
    </div>
    <div>
      <p>BIENVENIDO(A)</p>
    </div>
    <div className="botones">
     <button className="botonL" onClick={handleLogin}>INICIAR SESIÓN</button>
      <button className="botonR" onClick={handleSignUp}>REGISTRARME</button>
    </div>
  </div>
);
}

export default Dashboard;