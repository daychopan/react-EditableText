import React, { Component } from 'react';

class EditableText extends Component {

  constructor(props) {
    super(props);
    this.state = {
      editable: false
    }
  }

  changeEditable = () => {
    this.setState({
      editable: !this.state.editable
    })
  }

  handleKeyPress = (e) => {
    if(e.key === 'Enter') {
      this.changeEditable()
    }
  }

  render() {
    if(!this.state.editable) {
      return (<div onClick={this.changeEditable}>{this.props.value}</div>)
    }
    else {
      return (<div><input name={this.props.name} value={this.props.value} onBlur={this.changeEditable} onKeyPress={this.handleKeyPress} onChange={this.props.onChange} autoFocus/></div>);
    }
  }
}

export default EditableText;
