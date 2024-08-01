import React from 'react';

const Card = ({ image, titulo, text, buttonText, link }) => {
    return (
        <div className="container col-sm-12 col-md-6 col-lg-3">
            <div className="card">
                <img src={image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{titulo}</h5>
                    <p className="card-text">{text}</p>
                    <a href={link} className="btn btn-primary" target="_blank">
                        {buttonText}
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Card;
