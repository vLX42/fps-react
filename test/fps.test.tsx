import React from 'react'
import * as ReactDOM from 'react-dom'
import { Default as FPSStats } from '../stories/FPSStats.stories'

describe('Thing', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<FPSStats />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})
