import React from 'react'
import Person from './Person'
function NameeLists() {
    const name= ['Null', 'Jim', 'Jarry', 'jim']
     const person = [
        {
            id:1,
            name:'null',
            age: 20,
            skill: 'Php'
        },
        {
            id:2,
            name:'Jim',
            age: 25,
            skill: 'WebDeveloper'
        },
        {
            id:3,
            name:'Jarry',
            age: 55,
            skill: 'AWS'
        }
        ]
      const nameList = name.map((name, index) => <h2 key={index}>{index} {name}</h2>)  
    
   
    // const personList =person.map(person=> <Person key={person.name} person={person} />)
  return (
    <div>{nameList}</div>
  )
}

export default NameeLists