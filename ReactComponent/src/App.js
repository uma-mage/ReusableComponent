import React, {Component} from 'react';
import './App.css';
import Button from './Button'
class App extends Component {
  render() {
    return (
      <div>
      <Button
        handleClick={() => alert('Button 1 clicked')}
      />
      <br /> <br />
      <Button
        handleClick={() => alert('Button 1 clicked')}
      />
    </div>
    );
  }
}


export default App;