import React from 'react'
import ReactDOM from 'react-dom'
import ReactDOMServer from 'react-dom/server'
import Simply from '../Simply'

describe('<Simply>', () => {
  let node

  beforeEach(() => {
    node = document.createElement('div')
  })

  describe('with a child element', () => {
    it('renders its child', () => {
      const element = (
        <Simply options={{}}>
          <div>hello</div>
        </Simply>
      )

      ReactDOM.render(element, node, () => {
        expect(node.firstChild.innerHTML).toMatch(/hello/)
      })
    })
  })

  describe('with a children function', () => {
    it('renders its child', () => {
      const element = (
        <Simply options={{}}>
          {() => <div>hello</div>}
        </Simply>
      )

      ReactDOM.render(element, node, () => {
        expect(node.firstChild.innerHTML).toMatch(/hello/)
      })
    })
  })

  describe('with a render function', () => {
    it('renders its child', () => {
      const element = <Simply options={{}} render={() => <div>hello</div>} />

      ReactDOM.render(element, node, () => {
        expect(node.firstChild.innerHTML).toMatch(/hello/)
      })
    })
  })

  describe('rendered on the server', () => {
    it('renders its child', () => {
      const markup = ReactDOMServer.renderToStaticMarkup(
        <Simply options={{}}>
          <div>hello</div>
        </Simply>
      )

      expect(markup).toMatch(/hello/)
    })
  })
})
