import React from 'react'

function Person({person}) {
  return (
   (<h2>I am {person.name}. I am {person.age} Years old. I have the skill of {person.skill} and i am a professional.</h2>) 
  )
}

export default Person