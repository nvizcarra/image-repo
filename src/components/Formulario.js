import React, {useState} from 'react';
import Error from './Error';

const Formulario = ({guardarBusqueda}) => {

    const [termino, guardarTermino] = useState('');
    const [error, guardarError] = useState(false);

    const buscarImagenes = e => {
        e.preventDefault();

        // Validar
        if(termino.trim() === '') {
            guardarError(true);
            return
        }
        guardarError(false);

        // Enviar el término de búsqueda hacia el componente principal
        guardarBusqueda(termino);
    }

    // Formulario contendrá 1 solo input
    return ( 

        <form
            onSubmit={buscarImagenes}
        >
            <div className="row">
                <div className="form-group col-md-8">
                    <input
                        type="text"                
                        className="form-control form-control-lg"
                        placeholder="Busca una imagen. Ejemplo: fútbol o café"
                        onChange= {e => guardarTermino(e.target.value)}
                    />
                </div>

                <div className="form-group col-md-4">
                    <input
                        type="submit"
                        className="btn btn-lg btn-danger btn-block"
                        value="buscar"
                    />
                </div>
            </div>

            { error ? <Error mensaje="Agrega un término de búsqueda" /> : null }
        </form>
    );
}

export default Formulario;