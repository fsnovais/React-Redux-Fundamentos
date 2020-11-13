import React from 'react'

export default function ComParametro(props) {
    return (
        <div>
            <h2>{props.titulo}</h2>
            {props.aluno} teve como menção final {props.mencao}
        </div>
    )
}