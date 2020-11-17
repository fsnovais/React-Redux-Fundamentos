import React from 'react'

export default props => {
    return(
        <div>
            <span><strong>{props.texto}</strong> </span>
            <span>{props.numero} </span>
            <span>{props.bool ?"Verdadeiro": "Falso"} </span>
        </div>
    )
}