import React from 'react'

export default props => {
    const resultado = props.numero % 2 === 0 ? "Par" : "Impar"
    return (
        <div>
            <span>{resultado}</span>
        </div>
    )
}