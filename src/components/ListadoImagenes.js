import React from "react"
import Imagen from "./Imagen"

const ListadoImagenes = ({imagenes}) => {
    return (
        <div className="row justify-content-center">
        {imagenes.map(imagen => (
          <Imagen 
            key={imagen.id}
            imagen={imagen}
            />
        ))}
      </div>
    )
}

export default ListadoImagenes;