import React from 'react'
import { useDispatch } from 'react-redux'
import { actions } from '../../actions/frutas.action'
import { Formik, Field } from 'formik'

const AdicionarFruta = () => {
    const dispatch = useDispatch()

    const adicionarFruta = ({ nome, quantidade }) => {

        const fruta = {
            id: Math.random(),
            nome,
            quantidade
        }

        dispatch(actions.adicionar(fruta));
    }

    return (
        <div>
            <Formik initialValues={{ nome: '', quantidade: 0 }}
                validate={(values) => {
                    const errors = {}
                    if (!values.nome) {
                        errors.nome = 'Nome Obrigátorio'
                    }
                    if (values.quantidade < 4) {
                        errors.quantidade = 'Quantidade minima de 4'
                    }
                    return errors
                }}
                onSubmit={(values) => {
                    adicionarFruta(values)
                }}>
                {(props) => (
                    <form onSubmit={props.handleSubmit} noValidate>
                        <Field type='text' name='nome' placeholder='Fruta' required  />
                        {props.errors.nome ? (<span className='error-form'>{ props.errors.nome }</span>) : ''}

                        <Field type='text' name='quantidade' placeholder='Quantidade' required  />
                        {props.errors.quantidade ? (<span className='error-form'>{ props.errors.quantidade }</span>) : ''}

                        <button type='submit' >Adicionar</button>
                    </form>
                )}
            </Formik>
        </div>
    )
}

export default AdicionarFruta