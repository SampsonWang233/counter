import React, { Component } from "react";
import './Counter.css';
import propTypes from 'prop-types'

class Counter extends Component {
    constructor(){
        super();
        this.state = {
            counter: 0,
        }
        this.incrementparents = this.incrementparents.bind(this);

    }
    render() {
        return (
          <div className="counter">
            <CounterButton by = {1} incrementMethod = {this.incrementparents}/>
            <CounterButton by = {5} incrementMethod = {this.incrementparents}/>
            <CounterButton by = {10} incrementMethod = {this.incrementparents}/>
            <span className="count">{this.state.counter}</span>
          </div>
        );
      }
      incrementparents(by) {
        // console.log(`increase in parent - ${by}`);
        this.setState(
            (prevState) => {
            return {counter: prevState.counter+by}
            }
        )
    }
}


class CounterButton extends Component {
    constructor(){
        super();
        this.state = {
            counter: 0,
        }
        this.increment = this.increment.bind(this);

    }
    render(){ 
    return (
        <div className="counterbutton">
            <button onClick={this.increment}> +{this.props.by}</button>
            <button onClick={this.increment}> +{this.props.by}</button>
        </div>
    )
    }
    increment() {
        // console.log("increase");
        this.setState(
            {
            counter: this.state.counter+this.props.by,
        })
        this.props.incrementMethod(this.props.by);
    }
}

CounterButton.defaultProps = {
    by : 1
}

CounterButton.propTypes = {
    by : propTypes.number,
}
export default Counter;


