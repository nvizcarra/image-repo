import React, { useState, useEffect } from 'react';
import Formulario from './components/Formulario'

function App() {

  // state de la app

  const [ busqueda, guardarBusqueda ] = useState('');

  // useEffect
  useEffect(() => {
   const consultarApi = async () => {
    if(busqueda === '') return;

    const imagenesPorPagina = 30;
    const key = '22045805-39d9ab781e3daa10a0055cd54';
    const url = `https://pixabay.com/api/?key=${key}&q=${busqueda}&per_page=${imagenesPorPagina}`;

    const respuesta = await fetch(url);
    const resultado = await respuesta.json();

    guardarBusqueda(resultado.hits);
   }
   consultarApi();

  }, [busqueda])

  return (
    <div className="container">
      <div className="jumbotron">
        <p className="lead text-center">Buscador de imágenes</p>

        <Formulario 
          guardarBusqueda={guardarBusqueda}
        />
      </div>
    </div>    
  );
}

export default App;
