import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FirstComponent from './components/learning-examples/FirstComponents';
import SecondComponent, {ThirdComponent} from './components/learning-examples/SecondComponents';
import Counter from './components/counter/Counter';
 
class App extends Component {
  render() {
    return (
      <div className="App">
        <Counter/>
      </div>
    );
  }
}

class LearningComponent extends Component {
  render() {
    return (
      <div className="LearningComponent">
        <FirstComponent/>
        <SecondComponent/>
        <ThirdComponent/>
      </div>
    );
  }
}


export default App;