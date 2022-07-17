import React, {Component} from "react";

class ListtodoComponent extends Component {
    constructor (props) {
        super(props);
        this.state = {
            todos: 
            [
                {id: 1, description: "learn react", done: false, targetDate: new Date()},
                {id: 2, description: "learn basketball", done: false, targetDate: new Date()},
                {id: 3, description: "learn leetcode", done: false, targetDate: new Date()},
            ]
        }
    }

    render () {
        return (
            <div>
                <h1>Todo List</h1>
                <div className="container">
                <table className="table">
                    <thead>
                        <tr>
                            <th>number</th>
                            <th>description</th>
                            <th>isFinished</th>
                            <th>targetDate</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.todos.map (
                                todo =>
                                <tr key={todo.id}>
                                <td>{todo.id}</td>
                                <td>{todo.description}</td>
                                <td>{todo.done.toString()}</td>
                                <td>{todo.targetDate.toString()}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
                </div>
            </div>
        )
    }
}

export default ListtodoComponent;