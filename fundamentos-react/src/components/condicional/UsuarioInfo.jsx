import React from 'react'
import If, {Else} from './If'
export default props => {
    const usuario = props.usuario || {}
    return (
        <div>
            <If test={ usuario && usuario.nome}>
                Seja bem vindo <strong>{usuario.nome}</strong>!
            <Else test={!usuario || !usuario.nome}>
                Seja bem vindo <strong>meu brother</strong>!
            </Else>
            </If>
        </div>
    )
}