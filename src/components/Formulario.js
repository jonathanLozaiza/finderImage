import React, {useState} from "react"
import Error from "./Error"

const Formulario = ({guardarBusqueda}) => {

    //state para guardar el valor introducido
    const [state, actualizarState] = useState("");

    //state de error
    const [error, actualizarError] = useState(false);

    const buscar = e => {
        e.preventDefault();

        //validar datos
        if(state.trim()===""){
            actualizarError(true); 
            return null
        }

        actualizarError(false);

        guardarBusqueda(state);



    }


    return (
        <form onSubmit={buscar}>
            {error ? <Error mensaje="Agrega un termino de busqueda."/> : null}
            <div className="row">
                <div className="form-group col-md-8">
                    <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Busca una imagen, ejemplo: futbol o cafe"
                        onChange={e => {actualizarState(e.target.value)}}
                        value={state}
                    ></input>
                </div>

                <div className="form-group col-md-4">
                    <input
                        type="submit"
                        className="btn btn-lg btn-danger btn-block"
                        value = "Buscar"
                    ></input>
                </div>
            </div>
        </form>
    )
}

export default Formulario;