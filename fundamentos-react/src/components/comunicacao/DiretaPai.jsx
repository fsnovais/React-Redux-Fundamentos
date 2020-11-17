import React from 'react'
import DiretaFilho from './DiretaFilho'

export default props => {
    return(
        <div>
            <DiretaFilho texto="Filho1" numero="43" bool={true}></DiretaFilho>
            <DiretaFilho texto="Filho2" numero="22" bool={false}></DiretaFilho>
        </div>
    )
}