import React from 'react'

export default props => {
    const idade = parseInt(Math.random() * (50 - 20) + 20)
    const gerarNerd = () => Math.random() > 0.5
    
    return (
        <div>
            <div>
                Filho
            </div>
            <button onClick={
                function (e) {
                    props.quandoClicar('João', idade, gerarNerd())
                }
            }>Fornecer Informações</button>
        </div>
    )
}