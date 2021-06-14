import React, { useState, useEffect } from 'react';
import Formulario from './components/Formulario'
import ListadoImagenes from './components/ListadoImagenes'

function App() {

  // state de la app

  const [ busqueda, guardarBusqueda ] = useState('');
  const [ imagenes, guardarImagenes ] = useState([]);
  const [ paginaactual, guardarPaginaActual ] = useState(1);
  const [ totalpaginas, guardarTotalPaginas ] = useState(1);

  // useEffect
  useEffect(() => {
   const consultarApi = async () => {
    if(busqueda === '') return;

    const imagenesPorPagina = 30;
    const key = '22045805-39d9ab781e3daa10a0055cd54';
    const url = `https://pixabay.com/api/?key=${key}&q=${busqueda}&per_page=${imagenesPorPagina}`;

    const respuesta = await fetch(url);
    const resultado = await respuesta.json();

    guardarImagenes(resultado.hits);

    // Calcular el total de páginas
    const calcularTotalPaginas = Math.ceil(resultado.totalHits / imagenesPorPagina );
    guardarTotalPaginas(calcularTotalPaginas);
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

      <div className="row justify-content-center">
        <ListadoImagenes 
          imagenes={imagenes}
        />
      </div>
    </div>    
  );
}

export default App;
