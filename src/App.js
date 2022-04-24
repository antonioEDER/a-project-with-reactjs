import { Component } from 'react';
import './App.css';
import Comentario from './components/Comentario';
// function App () {
  
class App extends Component {
  state = {
    novoComentario: {
      nome: "",
      email: "",
      mensagem: ""
    },
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

  adicionarComentarios = (event) => {
    event.preventDefault();

    // const comentario = {
    //     id: Math.random(),
    //     nome: "Ana",
    //     email: "ana@gmail.com",
    //     data: new Date(),
    //     mensagem: "Olá, tudo bem?"
    // }

    // let lista = this.state.comentarios
    // lista.push(comentario
    // this.setState({ comentarios: lista})

    const novoComentario = {...this.state.novoComentario, data: new Date(), id: Math.random()};

    this.setState({
      comentarios: [ ...this.state.comentarios, novoComentario ],
      novoComentario: {
        nome: "",
        email: "",
        mensagem: ""
      }
    })
  }

  removerComentario = comentario => {
    let lista = this.state.comentarios;
    lista = lista.filter(c => c !== comentario)

    this.setState({ comentarios: lista})
  }

  digitacaoDeValores = (event) => {
    const { value, name } = event.target;
    this.setState({
      novoComentario: { ...this.state.novoComentario, [name]: value }
    })
  }

  render () {
    return (
      <div className="App">
        <h1>Meu projeto</h1>

        {/* <Comentario nome="Pedro" email="Pedro@gmail.com" data={new Date()}>
          Olá, tudo bem? [props.children]
        </Comentario> */}

        {
          this.state.comentarios.map((comentario, indice) => (
            <Comentario
              nome={comentario.nome}
              email={comentario.email}
              data={comentario.data}
              key={comentario.id}
              onRemove={this.removerComentario.bind(this, comentario)}
            >
              {comentario.mensagem}
            </Comentario>
          ))
        }

        <form method="post" onSubmit={this.adicionarComentarios} className="Novo-Comentario">
          <h2>Adicionar Comentarios</h2>
          <div>
            <input 
              value={this.state.novoComentario.nome} 
              onChange={this.digitacaoDeValores}
              type="text" 
              name="nome" 
              placeholder="Digite seu nome" /> 
          </div>
          <div>
            <input 
              value={this.state.novoComentario.email}
              onChange={this.digitacaoDeValores}
              type="email" 
              name="email"  
              placeholder="Digite seu e-mail" /> 
          </div>
          <div>
            <textarea 
              value={this.state.novoComentario.mensagem}
              onChange={this.digitacaoDeValores}
              name="mensagem" 
              rows="4"  
              placeholder="Digite sua mensagem" /> 
          </div>
         <button type="submit">Adicionar comentário</button>
        </form>
      </div>
    );
  }
}

export default App;
