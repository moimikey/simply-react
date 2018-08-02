# ⚙️ simply react

A simply scalable react component boilerplate.

## Installation

```sh
npm install --save react-simply
yarn add react-simply
```


```js
// esmodules
import Simply from 'react-simply'

// commonjs
var Simply = require('react-simply')
```

## Usage

```js
import React from 'react'
import Simply from 'react-simply'

class App extends React.Component {
  render() {
    return (
      <Simply options={}>
      {(x, y, z) => ({})}
      </Simply>
    )
  }
}
```

## Development

```sh
npm run dev

# go to http://localhost:1234
```

### Distribution

```sh
npm run build
```
