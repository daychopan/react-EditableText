# EditableText
Click to edit text in React.js  
![editabletext](https://user-images.githubusercontent.com/31367899/42241971-aab6ba82-7f0c-11e8-8f38-9197afac2cdf.gif)

### Features
Save text on
- Keypress enter
- Lost focus

### How to:
Download the component (EditableText) and place it under the "src" folder.


### Example usage

```javascript
import EditableText from './EditableText';
import React, { Component } from 'react';

class Example extends Component {
  render() {
    return(
      <EditableText />
    );
  }
}
```

### Customizable
The component can optionally take "name" as a prop for further customizations
```javascript
<EditableText name="sample"/>
```
