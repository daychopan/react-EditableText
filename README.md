# EditableText
Click to edit text in React.js  
![editabletext](https://user-images.githubusercontent.com/31367899/42241971-aab6ba82-7f0c-11e8-8f38-9197afac2cdf.gif)

### Features
Save text on
- Keypress enter
- Lost focus

### Documentation
EditableText behaves just like an ```<input />```, so pass in onChange and value as props

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

### Customizable
The component can optionally take "name" as a prop
```javascript
<EditableText name="sample"/>
```
