import React from 'react'

// function ChildComponent(props) {
//   return (
//     <div>
//         <button onClick={props.greetHandler}>Greet</button>
//     </div>
function ChildComponent(props) {
  return (
    <div>
        <button onClick={()=>props.greetHandler('child')}>Greet</button>
    </div>
  )
}

export default ChildComponent