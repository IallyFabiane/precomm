import React from 'react';
import './titulo.css';

function Titulo(props) {
    return (
        <h5 className='conteudo__titulo'>{props.name}</h5>
    );
}

export default Titulo;
