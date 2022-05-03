import React from 'react'
import { useDispatch } from 'react-redux'
import { actions } from '../../actions/frutas.action'
import './Frutaria.css'

const Fruta = ({fruta}) => {
    const dispatch = useDispatch()

    const removerFruta = () => {
        dispatch(actions.remover(fruta));
    }

    return (
        <div className='fruta'>
            <ul>
                <li>
                    <strong>Fruta:</strong> {fruta.nome}
                </li>
                <li>
                    <strong>Quantidade:</strong> {fruta.quantidade}
                </li>
            </ul>
            <button onClick={removerFruta}>
                Remover
            </button>
        </div>
    )
}

export default Fruta