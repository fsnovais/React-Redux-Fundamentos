import React from 'react'

const aleatorio = (props) => {
    const {min, max} = props;
    const resultado = parseInt(Math.random() * (max - min)) + min;
    return (
        <div>
            <h2>Valor aleatorio</h2>
            <p>Valor Mínimo: {min}</p>
            <p>Valor Máximo: {max}</p>
            <p>Resultado: {resultado}</p>
        </div>
    )

}

export default aleatorio;