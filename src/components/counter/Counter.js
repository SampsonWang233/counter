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
        this.decrementparents = this.decrementparents.bind(this);
        this.reset = this.reset.bind(this);

    }
    render() {
        return (
          <div className="counter">
            <CounterButton by = {1} incrementMethod = {this.incrementparents} decrementMethod = {this.decrementparents}/>
            <CounterButton by = {5} incrementMethod = {this.incrementparents} decrementMethod = {this.decrementparents}/>
            <CounterButton by = {10} incrementMethod = {this.incrementparents} decrementMethod = {this.decrementparents}/>
            <span className="count">{this.state.counter}</span>
            <div><button className="reset" onClick={this.reset}>reset</button></div>
          </div>
        );
      }

      reset() {
        this.setState(
            () => {
            return {counter: 0}
            }
        )
      }



      incrementparents(by) {
        // console.log(`increase in parent - ${by}`);
        this.setState(
            (prevState) => {
            return {counter: prevState.counter+by}
            }
        )
    }
    decrementparents(by) {
        // console.log(`increase in parent - ${by}`);
        this.setState(
            (prevState) => {
            return {counter: prevState.counter-by}
            }
        )
    }
}


class CounterButton extends Component {
    // constructor(){
    //     super();
    //     // this.state = {
    //     //     counter: 0,
    //     // }
    //     // this.increment = this.increment.bind(this);
    //     // this.decrement = this.decrement.bind(this);

    // }
    render(){ 
    return (
        <div className="counterbutton">
            <button onClick={() => this.props.incrementMethod(this.props.by)}> +{this.props.by}</button>
            <button onClick={() => this.props.decrementMethod(this.props.by)}> -{this.props.by}</button>
        </div>
    )
    }
    // increment() {
    //     // console.log("increase");
    //     this.setState(
    //         {
    //         counter: this.state.counter+this.props.by,
    //     })
    //     this.props.incrementMethod(this.props.by);
    // }
    // decrement() {
    //     // console.log("decrease");
    //     this.setState(
    //         {
    //         counter: this.state.counter-this.props.by,
    //     })
    //     this.props.decrementMethod(this.props.by);
    // }
}

CounterButton.defaultProps = {
    by : 1
}

CounterButton.propTypes = {
    by : propTypes.number,
}
export default Counter;


