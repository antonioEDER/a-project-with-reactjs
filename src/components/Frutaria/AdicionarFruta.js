import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { actions } from '../../actions/frutas.action'

const AdicionarFruta = () => {

    const [nome, setNome] = useState('')
    const [quantidade, setQuantidade] = useState('')
    const dispatch = useDispatch()

    const adicionarFruta = event => {
        event.preventDefault()

        const fruta = {
            id: Math.random(),
            nome,
            quantidade
        }

        dispatch(actions.adicionar(fruta));
    }

    return (
        <div>
            <form onSubmit={adicionarFruta}>
                <input type='text' name={nome} placeholder='Fruta' required onChange={event => setNome(event.target.value)} />
                <input type='text' name={quantidade} placeholder='Quantidade' required onChange={event => setQuantidade(event.target.value)} />
                <button type='submit' >Adicionar</button>
            </form>
        </div>
    )
}

export default AdicionarFruta