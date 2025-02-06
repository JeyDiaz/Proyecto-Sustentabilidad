import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Home from './pages/Home'; 
import Perfil from "./pages/Perfil";
import Horas from './pages/Horas';

// Validación global para evitar errores
if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
  console.error('El navegador no soporta getUserMedia.');
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/horas" element={<Horas />} />
      </Routes>
    </Router>
  );
}

export default App;
