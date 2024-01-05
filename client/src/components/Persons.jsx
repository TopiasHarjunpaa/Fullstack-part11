import React from 'react'
import Person from './Person'

const FilterPersons = ( persons, filter) => {
  return (
    persons.filter(person =>
      person.name.toLowerCase().includes(filter.toLowerCase())
    )
  )
}

const Persons = ({ persons, filter, deletePerson }) => {
  return (
    <div>
      {FilterPersons(persons, filter).map(person =>
        <Person
          key={person.id}
          person={person}
          deletePerson={deletePerson}
        />
      )}
    </div>
  )
}

export default Persons