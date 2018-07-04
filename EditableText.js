import React, { Component } from 'react';

class EditableText extends Component {

  constructor(props) {
    super(props);
    this.state = {
      editable: false
    }
  }

  changeEditable = (e) => {
    if(this.state.editable) {
      this.props.commit(e);
    }
    this.setState({
      editable: !this.state.editable
    })
  }

  handleKeyPress = (e) => {
    if(e.key === 'Enter') {
      this.changeEditable(e)
    }
  }

  render() {
    if(!this.state.editable) {
      return (<span onClick={this.changeEditable}>{this.props.value}</span>)
    }
    else {
      return (<span><input name={this.props.name} value={this.props.value} onBlur={this.changeEditable} onKeyPress={this.handleKeyPress} onChange={this.props.onChange} autoFocus/></span>);
    }
  }
}

export default EditableText;
