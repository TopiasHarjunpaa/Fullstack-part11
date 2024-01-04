const personsRouter = require('express').Router()
const Person = require('../models/person')


personsRouter.post('/', (request, response, next) => {
  const body = request.body

  const person = new Person({
    name: body.name,
    number: body.number,
  })
  person.save().then(savedPerson => {
    response.json(savedPerson)
    console.log('Person added')
  })
    .catch(error => next(error))
})

personsRouter.get('/', (request, response) => {
  Person.find({}).then(persons => {
    console.log('Finding persons')
    response.json(persons)
  })
})

personsRouter.get('/:id', (request, response, next) => {
  Person.findById(request.params.id)
    .then(person => {
      if (person) {
        console.log(`person ${person.name} found`)
        response.json(person)
      } else {
        console.log('person not found')
        response.status(404).end()
      }
    })
    .catch(error => next(error))
})

personsRouter.delete('/:id', (request, response, next) => {
  console.log('Deleting person')
  Person.findOneAndDelete({ _id: request.params.id })
    .then(result => {
      if (result) {
        response.status(204).end()
        console.log('Success')
      } else {
        response.status(404).send({ error: 'Not found' })
      }
    })
    .catch(error => next(error))
})

personsRouter.put('/:id', (request, response, next) => {
  const { name, number } = request.body

  Person.findByIdAndUpdate(
    request.params.id,
    { name, number },
    { new: true, runValidators: true, context: 'query' })
    .then(updatedPerson => {
      response.json(updatedPerson)
    })
    .catch(error => next(error))
})

module.exports = personsRouter