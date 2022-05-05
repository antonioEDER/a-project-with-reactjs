# a-project-with-reactjs
Um projeto Front-End integrado com ReactJs

# Instalação
´npm install -g npx´

´yarn create-react-app nomeProjeto´ // Criar um projeto com reactJS

´yarn start´

# Sobre o projeto

Métodos de ciclo de vida de um componente React;
    - Initialization: (Setup props, state)
    - Mounting (WillMount, render, didMount)
    - Updattion (Props, states)
    - Unmounting ()

Components:
    - De Função JSX (function () => return ...) sem ciclo de vida
    - De Classe (class NomeComponent extends Component { render ()}) + Ciclo de vida

Hooks;
    - Hooks: Faz um component de função se comportar como component de Classe.
    - Traz o ciclo de vida para o compoent de função
    - é identificado por "use"+ ativo o hook ex: useState() para acessar o state.
    - useState()
    - useEffect()
    - useContext()

Fazer rotas;

Redux;
    - Controlador de estado da aplicação.
    -> Componet -> Action -> Reducer -> Store

Validação de Formulários;

Formik;

Yup;

# Heroku

- yarn build
- yarn global add serve
- serve -s build
- heroku.com
- https://devcenter.heroku.com/articles/heroku-cli
- heroku login
- heroku git:remote -a app-react-1993
- git push heroku main

