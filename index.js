import React, { Component } from 'react';

class EditableLabel extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      text: 'test',
      editable: false
    }
  }

  changeToInput = () => {
    this.setState({
      editable: !this.state.editable
    })
  }

  handleChange = (e) => {
    console.log(this.state.name)
    console.log(e.target.value)
    this.setState({
      text: e.target.value
    })
  }

  handleSubmit = (e) => {
    console.log(this.state.text);
    this.setState({
      editable: !this.state.editable
    });
  }

  handleKeyPress = (e) => {
    if(e.key === 'Enter') {
      this.setState({
        editable: !this.state.editable
      })
    }
  }

  render() {
    if(!this.state.editable) {
      return (<div onClick={this.changeToInput}>{this.state.text}</div>)
    }
    else {
      return (<div><input name={this.props.name} value={this.state.text} onBlur={this.handleSubmit} onKeyPress={this.handleKeyPress} onChange={this.handleChange} autoFocus/></div>);
    }
  }
}

export default EditableLabel;
