import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Person from './Person'

describe('Person component', () => {
  test('renders the persons name', () => {
    const person = {
      name: 'Tester',
      number: '123-456789',
      id: 1
    }

    render(<Person person={person} deletePerson={() => {}} />)

    const element = screen.getByText(/Tester/)
    expect(element).toBeInTheDocument()
  })
})