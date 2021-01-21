import logo from './logo.svg';
import './App.css';
import * as React from 'react'

class App extends React.Component {

  state = { count : 0 };

  increment = () => {
    this.setState({count: this.state.count + 1})
  }

  decrement = () => {
    this.setState({count: this.state.count - 1})
  }
  render () {
    return <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
                <a
                  className="App-link"
                  href="https://reactjs.org"
                  target="_blank"
                  rel="noopener noreferrer">
                </a>
                <div>{this.state.count}</div>
                <button className="btn" onClick={this.increment}>Прибавить</button>
                <button className="btn" onClick={this.decrement}>Убавить</button>
            </header>
          </div>
  ;}
}

export default App;
