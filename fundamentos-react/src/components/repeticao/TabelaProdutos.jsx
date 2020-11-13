import React from 'react'
import './TabelaProdutos.css'

import produtos from '../data/produtos'

export default props => {

    const tb = produtos.map(produto => {
        return (
            <tr key={produto.id}
            className={produto.id % 2 == 0 ? "Par" : "Impar"}>
                <td>{produto.id}</td>
                <td>{produto.nome}</td>
                <td>R$ {produto.preco.toFixed(2)}</td>
            </tr>
        )
    })
    return (
        <div className="TabelaProdutos">
        <table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Nome</th>
                    <th>Preço</th>
                </tr>
            </thead>
            <tbody>
                {tb}
            </tbody>
        </table>
        </div>
    )
}