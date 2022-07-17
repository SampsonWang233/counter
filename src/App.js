import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FirstComponent from './components/learning-examples/FirstComponents';
import SecondComponent, {ThirdComponent} from './components/learning-examples/SecondComponents';
import Counter from './components/counter/Counter';
import TodoApp from './components/todo/TodoApp';
import "./bootstrap.css";
 
class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Counter/> */}
        <TodoApp/>
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