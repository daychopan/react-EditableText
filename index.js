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

  changeEditable = () => {
    this.setState({
      editable: !this.state.editable
    })
  }

  handleChange = (e) => {
    this.setState({
      text: e.target.value
    })
  }

  handleKeyPress = (e) => {
    if(e.key === 'Enter') {
      this.changeEditable()
    }
  }

  render() {
    if(!this.state.editable) {
      return (<div onClick={this.changeEditable}>{this.state.text}</div>)
    }
    else {
      return (<div><input name={this.props.name} value={this.state.text} onBlur={this.changeEditable} onKeyPress={this.handleKeyPress} onChange={this.handleChange} autoFocus/></div>);
    }
  }
}

export default EditableLabel;
