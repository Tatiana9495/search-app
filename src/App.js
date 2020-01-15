import React from 'react';
import './App.css';
import InputButton from './InputButton';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      valueArr: []
    }
    this.addWord = this.addWord.bind(this);
  }

  addWord(val) {
    this.state.valueArr.push(val);
    this.setState({
      valueArr: this.state.valueArr
    });
  }

  render() {
    return (
      <div className="App">
        <InputButton addWordTo={this.addWord}
          words={this.state.valueArr}
        />
      </div>
    );
  }
}

export default App;
