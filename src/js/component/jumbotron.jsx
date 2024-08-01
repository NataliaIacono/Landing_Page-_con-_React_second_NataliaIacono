import React from 'react';
import '../../styles/jumbotron.css';

const Jumbotron = (titulo, text) => {
    return (
        <div className="container-jumbo p-5">
            <h2>Mallorca, la isla bonita 🌴</h2>
            <p>
                Mallorca es sinónimo de verano, de sol y playa. Pero la isla esconde un valioso patrimonio cultural e histórico, paisajes y naturaleza intactos, cuevas subterráneas, variada
                gastronomía mediterránea, ciudades y pueblos con encanto, la cosmopolita capital de Palma... Tesoros que aguardan tu visita para se descubiertos.
            </p>
            <button type="button" className="btn btn-primary">
                Ven a visitarnos
            </button>
        </div>
    );
};

export default Jumbotron;
