import React, {useState, useEffect} from 'react';
import Formulario from "./components/Formulario"
import ListadoImagenes from "./components/ListadoImagenes"

function App() {

  //state para el termino a buscar
  const [busqueda, guardarBusqueda] = useState("general")

  //state de imagenes
  const [imagenes, guardarImagenes] = useState([]);

  //states de paginas
  const [paginaActual, guaradarPaginaActual] = useState(1);
  const [totalPaginas, guardarTotalPaginas] = useState(1);

  //state de desabilitar botones
  const [anterior, actualizarAnterior] = useState(false);
  const [siguiente, actualizarSiguiente] = useState(false);

  useEffect(() => {
      const llamadaAPI = async () => {
          const porPagina = 30;
          const key = "17166526-a1cbf2c6bb5ef650b44665176"
          const url = `https://pixabay.com/api/?key=${key}&q=${busqueda}&image_type=photo&per_page=${porPagina}&pretty=true&page=${paginaActual}`;
          const respuesta = await fetch(url);
          const resultado = await respuesta.json();
          guardarImagenes(resultado.hits);

          // calcular el numero de paginas a crear
          guardarTotalPaginas(Math.ceil(resultado.totalHits / porPagina));

          //mover la pantalla hacia arriba
          const jumbotron = document.querySelector(".jumbotron");
          jumbotron.scrollIntoView({behavior : "smooth"});
      }
      llamadaAPI();
  }, [busqueda, paginaActual])

  //retroceder en las paginas
  const paginaAnterior = () => {
    if(paginaActual===1){actualizarAnterior(true); return}else{actualizarAnterior(false)}
    const nuevaPaginaActual = paginaActual - 1;
    if(nuevaPaginaActual === 0) return;
    guaradarPaginaActual(nuevaPaginaActual);
  }

  //avanzar en las paginas
  const paginaSiguiente = () => {
    if(paginaActual===totalPaginas){actualizarSiguiente(true); return}else{actualizarSiguiente(false)}
    const nuevaPaginaActual = paginaActual + 1;
    if(nuevaPaginaActual > totalPaginas) return;
    guaradarPaginaActual(nuevaPaginaActual);
  }

  return (
    <div className="container">
      
      <div className="jumbotron">
        <p className="lead text-center">Buscador de Imágenes</p>
        <Formulario guardarBusqueda = {guardarBusqueda}/>
      </div>
      
      <ListadoImagenes imagenes={imagenes} />

      <div className="row justify-content-center">

        <button
          type="button"
          className="bbtn btn-info mr-1"
          onClick={paginaAnterior}
          disabled={anterior}
        >&laquo; Anterior </button>

        <button
          type="button"
          className="bbtn btn-info mr-1"
          onClick={paginaSiguiente}
          disabled={siguiente}
        > Siguiente &raquo;</button>

      </div>

    </div>
  );
}

export default App;


// 17166526-a1cbf2c6bb5ef650b44665176