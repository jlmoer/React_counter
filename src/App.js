import React from "react";
import './App.css';
import Counter from "./components/Counter"
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    }
  }
  
increment = () => {
  this.setState({ count: this.state.count +1 })
}

substract = () => {
  this.setState({ count: this.state.count -1 })
}

  render() {
    return (
      <div>
        <h1>Counter</h1>
        <Counter
          count = {this.state.count}
          increment = {() => this.increment()}
          subsatrct = {() => this.substract()}
        />
      </div>
    )
  }
}

export default App;