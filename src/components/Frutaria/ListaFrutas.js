import React from 'react'
import Fruta from './Fruta'
import AdicionarFrutas from './AdicionarFruta'
import { useSelector } from 'react-redux'

const ListaFruta = () => {
    const frutas = useSelector(state => state.frutasReducers.frutas)

    return (
        <div>
            <h1>Adicionar frutas</h1>
            <AdicionarFrutas />
            <h1>Lista de frutas</h1>
            {frutas.map(fruta => (
                <Fruta key={fruta.id} fruta={fruta} />
            ))}

        </div>
    )
}

export default ListaFruta