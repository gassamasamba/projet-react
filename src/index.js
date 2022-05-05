import React from 'react'
import { render } from 'react-dom'
import App from './compteur/App'
import AppEvent from './event/AppEvent'
import './index.css'

// import App from './todorefaire/App'
// const name = 'John Doe'
// const notes = [12,5,18,17]
// function Hello(props) {
//   return (
//     <div>
//   <h1>Bonjour {props.nom}</h1>
//   <h1>Votre age est {props.age}</h1>
//   </div>
//   )
 
// }
// function DireBonjour( { a, b}) {
//   return (
//     <div>
//       <h2>Dire Bonjour {a}</h2>
//       <h2>Dire Bonsoir {b}</h2>
//     </div>
//   )
// }
// function BigText({ children}) {
//   return (
//     <div>
//       <p>Voici un big text:</p>
//       <h2>{ children }</h2>
//     </div>
//   )
// }
// const html = (
//   <div>
//     <BigText>
//      Bonjour
//      <br></br>
//      <span>Comment allez vous !</span>
//     </BigText>
//   <h1>Bonjour { name} !</h1>
//   <h2>Vos notes</h2>
//   <ul>
//     {notes.map((note, index) => (
//       <li key={`note-${index}`}>{note} /20</li>
//     ))}
//   </ul>
//   <p>Bienvenue sur l'application</p>
//   <div>
//     <Hello nom="Toto" age={22}/>
//     <Hello nom="Dupond" age={52}/>
//     <Hello nom="Toto" age={22}/>
//   </div>
//   <DireBonjour a="Paris"  b="Rome"/>
//   </div>
  
// )

render(<App/>,  document.querySelector('#root'))

