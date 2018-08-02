import * as React from 'react'

class Simply extends React.Component {
  static propTypes = {}

  static defaultProps = {
    defaultValue: true
  }

  state = {
    fn: this.props.defaultValue
  }

  render () {
    const { children, render } = this.props
    const { fn } = this.state
    return render
      ? fn ? render() : null
      : children
        ? typeof children === 'function'
          ? children(fn)
          : !Array.isArray(children) || children.length
            ? fn ? React.Children.only(children) : null
            : null
        : null
  }
}

export default Simply
