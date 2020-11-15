import React from 'react';
//import PropTypes from 'prop-types';



class App extends React.Component {
  state = {
    count: 0
  }
  constructor(props) {
    super(props);
    console.log("im constructor");
  }
  add = () => {
    this.setState(a => ({ count: a.count + 1 }));
  };

  minus = () => {
    this.setState(current => ({ count: current.count - 1 }));
  };
  componentDidMount() {
    console.log("im componentDidMount");
  }
  componentDidUpdate() {
    console.log("Hey iam updated");
  }
  componentWillUnmount() {
    console.log("Goodbye component");
  }
  render() {
    console.log("im rendering");
    return (
      <div>
        <h1>This number is {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    )
  }
}

export default App;