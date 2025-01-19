import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/styles.css';  // Asegúrate de que la ruta a tu CSS es correcta

// Renderiza el componente App dentro de un contenedor con id="root" en el HTML
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')  // Este es el punto de entrada donde se renderiza la app
);

