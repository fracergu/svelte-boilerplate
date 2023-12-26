import { render, screen } from '@testing-library/svelte'
import App from '../App.svelte'

describe('GIVEN: App component', () => {
  it('THEN: it should render', () => {
    render(App)
    expect(screen.getByText('Hello world!')).toBeInTheDocument()
  })
})
