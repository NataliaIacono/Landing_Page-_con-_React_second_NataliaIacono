import React from 'react';
import '../../styles/jumbotron.css';

const Jumbotron = () => {
    return (
        <div className="container-jumbo bg-secondary-subtle p-5">
            <h1>Atención!</h1>
            <p>Estás a punto de conocer más sobre esta isla tan hermosa. Si no la conocias, toma nota que esto es no te lo puedes perder. Y si ya la conocias, sabes de lo que hablamos.</p>
            <button type="button" class="btn btn-primary">
                Ven a visitarnos
            </button>
        </div>
    );
};

export default Jumbotron;
