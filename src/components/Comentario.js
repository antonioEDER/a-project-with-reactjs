import React from "react";
import './Comentario.css'

// const Comentario = () => (
//     <div className="Comentario">
//         <div>João</div>
//         <div>Soma { 2 + 5 }</div>
//     </div>
// );


// const Comentario = () => {
//     const a = 5;
//     const b = 5
//     return (
//         <div className="Comentario">
//             <div>João</div>
//             <div>Soma {a + b}</div>
//         </div>
//      )
// };


const Comentario = props => {
    return (
        <div className="Comentario">
            <div>{ props.nome }</div>
            <div>{ props.email }</div>
            <div>{ props.data.toString() }</div>
            <div>{ props.children }</div>
            <button onClick={props.onRemove}>X Limpar</button>
        </div>
     )
};
export default Comentario;