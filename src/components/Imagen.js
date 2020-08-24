import React from "react"
import "./Imagen.css";

const Imagen = ({imagen}) => {
    return (
        <div className="col-md-4 col-ls-3 col-sm-6 col-12 espacio">
            <div className="card">
                <a href={imagen.largeImageURL} target="_blank"><img className="imagen" src={imagen.previewURL} /></a>
                <div className="card-body">
                    <p className="card-text"><a href={imagen.pageURL} target="_blank">Ver en pixabay</a></p>
                    <p className="card-text">{imagen.likes} Me Gusta</p>
                    <p className="card-text">{imagen.views} Vistas</p>
                </div>
                <div className="card-footer">
                    <a href={imagen.largeImageURL} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-block">Ver Imagen</a>
                </div>
            </div>
        </div>
    )
}


export default Imagen;