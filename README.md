# EditableText
Click to edit text in React.js  
![editabletext](https://user-images.githubusercontent.com/31367899/42241971-aab6ba82-7f0c-11e8-8f38-9197afac2cdf.gif)

### Features
Save text on
- Keypress enter
- Lost focus

### Documentation
EditableText behaves just like an ```<input />```, so pass in onChange and value as props.  
The component can optionally take "name" as a prop
```javascript
<EditableText onChange={this.handleChange} value={this.state.text} name="sample" />
```

### Minimal example

```javascript
import EditableText from './EditableText';
import React, { Component } from 'react';

class Example extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'test'
    }
  }

  handleChange = (e) => {
    this.setState({
      text: e.target.value
    })
  }
  render() {
    return(
      <EditableText value={this.state.text} onChange={this.handleChange}/>
    );
  }
}
```

### Advanced example
```javascript
import EditableText from './EditableText';
import React, { Component } from 'react';

class Example extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'test'
    }
  }

  handleChange = (e) => {
    this.setState({
      text: e.target.value
    })
  }
  
  handleCommit = (e) => {
    // Add logic to set state in parent component
    // e.target.name equals address and e.target.value equals this.state.text
  }
  render() {
    return(
      <EditableText name="address" value={this.state.text} commit={this.handleCommit} onChange={this.handleChange}/>
    );
  }
}
```

