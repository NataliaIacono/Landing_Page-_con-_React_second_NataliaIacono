import React from 'react';
import Navbar, { Navbar2 } from './navbar';
import Jumbotron from './jumbotron';
import Card from './card';

//create your first component
const Home = () => {
    return (
        <div className="fondo bg-light mb-0">
            <Navbar />
            <div className="container">
                <Jumbotron />
                <div className="row d-flex justify-content-between mt-5">
                    <Card
                        image="https://media.tacdn.com/media/attractions-splice-spp-674x446/0b/39/99/c5.jpg"
                        titulo="Playa de Muro "
                        text="Para muchos, la Playa de Muro es la mejor playa de Mallorca: una larga extensión de arena blanca, protegida por detrás por un pinar y bañada por el mar, que en este tramo es uno de los más limpios de la isla."
                        buttonText="Visitar >"
                        link="https://www.viveremaiorca.com/es/que-ver/playas/playa-de-muro-2/"
                    />
                    <Card
                        image="https://static1.squarespace.com/static/58c20e4515d5db462005c716/58c224c3725e25f24c1801b9/5b8e720a575d1f6f1e5f302c/1541740947295/Cala+Varques+%3A%3A+Mallorca+%28A3-1%29.jpg?format=1500w"
                        titulo="Cala Varques "
                        text="Cala Varques es una de las playas más apacibles y discretas de Mallorca. Situada en la zona sureste de la isla. Cuenta con 90 metros de largo y es de arena blanca y aguas profundas y azules. "
                        buttonText="Visitar >"
                        link="https://www.abc-mallorca.es/cala-varques/"
                    />
                    <Card
                        image="https://yes-mallorca-inmuebles.es/upload/iblock/116/1169938cf41b6ee863a15491c296ece2.jpg"
                        titulo="Playa Es Trenc "
                        text="Ubicada al sur de Mallorca, la belleza de Es Trenc va más allá de su entorno natural; está enclavada en un área protegida que ofrece un ambiente ideal para disfrutar de paisajes pintorescos.  "
                        buttonText="Visitar >"
                        link="https://yes-mallorca-inmuebles.es/blog/mallorca/guia-de-la-playa-de-es-trenc/#1"
                    />
                    <Card
                        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoklDL4qCG-yKOumHmM70w9FpMqLxvL67QOg&s"
                        titulo="Cala Pi "
                        text="La bahía Cala Pi, como un fiordo pequeño, es una joya paisajística ubicada en la costa sur de Mallorca. La bahía con su playa de arena fina y aguas cristalinas es un destino ideal para un viaje de un día."
                        buttonText="Visitar >"
                        link="https://mallorca.com/es/mallorca/playas/cala-pi"
                    />
                </div>
            </div>
            <div className="footer mb-0">
                <Navbar2 />
            </div>
        </div>
    );
};

export default Home;
