import logo from './logo.svg';
import './App.css';
import * as React from 'react'
import MessageField from './components/messageField';

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
              <MessageField/>
            </header>
          </div>
  ;}
}

export default App;
