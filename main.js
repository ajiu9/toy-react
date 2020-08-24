import {render, Component, createElement} from './toy-react.js'

class MyComponent extends Component {
  render() {
    return (<div>
      <div>My Component</div>
    </div>)
  }
}

render(<MyComponent />, document.body)