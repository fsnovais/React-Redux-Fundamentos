import React from 'react'
import './app.css'

import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import Aleatorio from './components/basicos/Aleatorio'
import Card from './components/layout/Card'
import Familia from './components/basicos/Familia'
import FamiliaMembro from './components/basicos/FamiliaMembro'
import ListaAlunos from './components/repeticao/ListaAlunos'
import TabelaProdutos from './components/repeticao/TabelaProdutos'
import ParOuImpar from './components/condicional/ParOuImpar'

const app = (props) =>
    <div className="App">
        <h1>Fundamentos React </h1>

        <div className="Cards">
            <Card titulo="#08 - Par ou Impar" color="642">
                <ParOuImpar numero={21}></ParOuImpar>
            </Card>
            <Card titulo='#07 - Tabela Produtos' color='#723'>
                <TabelaProdutos></TabelaProdutos>
            </Card>
            <Card titulo="#06 - Repetição" color="#167">
                <ListaAlunos></ListaAlunos>
            </Card>
            <Card titulo='#05 - Componente com filhos' color='#754'>
                <Familia sobrenome="Novais">
                    <FamiliaMembro nome="Felipe" />
                    <FamiliaMembro nome="Bianca" />
                    <FamiliaMembro nome="Guilherme" />
                </Familia>
            </Card>
            <Card titulo="#04 - Desafio Aleatório" color="#090">
                <Aleatorio min={1} max={20} />
            </Card>
            <Card titulo="#03 - Fragmento" color='#402'>
                <Fragmento />
            </Card>
            <Card titulo="#02 - Com Parametro" color='#732'>
                <ComParametro
                    titulo="Menção final"
                    aluno='Felipe'
                    mencao='MS'
                />
            </Card>
            <Card titulo="#01 - Primeiro" color="#656">
                <Primeiro />
            </Card>

        </div>
    </div>

export default app;