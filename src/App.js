import { Component } from 'react';
import './App.css';
import Comentario from './components/Comentario';
// function App () {
  
class App extends Component {
  state = {
    comentarios: [
      {
        id: 123,
        nome: "João",
        email: "joao@gmail.com",
        data: new Date(),
        mensagem: "Olá, tudo bem?"
      },
      {
        id: 456,
        nome: "Maria",
        email: "maria@gmail.com",
        data: new Date(),
        mensagem: "Estou bem! E você?"
      }
    ]
  }

  adicionarComentarios = () => {
    const comentario = {
        id: Math.random(),
        nome: "Ana",
        email: "ana@gmail.com",
        data: new Date(),
        mensagem: "Olá, tudo bem?"
    }

    // let lista = this.state.comentarios
    // lista.push(comentario
    // this.setState({ comentarios: lista})

    this.setState({
      comentarios: [ ...this.state.comentarios, comentario]
    })
  }

  render () {
    return (
      <div className="App">
        <h1>Meu projeto</h1>

        <Comentario nome="Pedro" email="Pedro@gmail.com" data={new Date()}>
          Olá, tudo bem? [props.children]
        </Comentario>

        {
          this.state.comentarios.map((comentario, indice) => (
            <Comentario
              nome={comentario.nome}
              email={comentario.email}
              data={comentario.data}
              key={comentario.id}
            />
          ))
        }
        <button onClick={this.adicionarComentarios}>Adicionar comentário</button>
      </div>
    );
  }
}

export default App;
