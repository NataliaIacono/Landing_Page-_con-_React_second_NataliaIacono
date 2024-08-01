import React from 'react';
import Navbar from './navbar';
import Jumbotron from './jumbotron';

//create your first component
const Home = () => {
    return (
        <div className="text-center">
            <Navbar />
            <div className="container-jumbo">
                <Jumbotron />
            </div>
        </div>
    );
};

export default Home;
