import React from 'react'

const Person = ({ person, deletePerson }) => {
  return (
    <div>
      <p>
        {person.name}:
        {person.number}
        <button onClick={() => deletePerson(person.id)}>delete</button>
      </p>
    </div>
  )
}


export default Person