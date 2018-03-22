# react-baqend-provider

## Installation
```js
npm install react-baqend-provider
```

## Wrap your main component
```js
import { db } from 'baqend/realtime'
import { BaqendProvider } from 'react-baqend-provider'

class App extends Component {
  render() {
    return (
      <BaqendProvider db={db.connect('codetalks17', true)}>
        <YourAppContainer />
      </BaqendProvider>
    );
  }
}
```

## Get db connection instance from higher order component
```js
import { baqend } from 'react-baqend-provider'

class YourComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: []
    }
  }

  componentDidMount() {
    const { db } = this.props
    db.Item.find().resultList().then(items => this.setState({ items }))
  }

  render() {
    return (
      <YourComponent items={this.state.items} />
    )
  }
}

export default baqend(YourComponent);
```
