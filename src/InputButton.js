import React, { Component } from 'react';

class InputButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      val: ""
    }
    this.handleChange = this.handleChange.bind(this);
    this.addWord = this.addWord.bind(this);
  }

  handleChange(event) {
    this.setState({
      val: event.target.value
    })
  }

  addWord(event) {
    this.props.addWordTo(this.state.val);
    event.preventDefault();
  }

  render() {
    const value = this.props.words.map((word) => (
      <li key={word.toString()}>{word}</li>
    ))
    return (
      <div>
        <form>
          <input type="text" onChange={this.handleChange} />
          <button onClick={this.addWord}>Add</button>
        </form>
        <ul>{value}</ul>
      </div>
    );
  }
}

export default InputButton;
