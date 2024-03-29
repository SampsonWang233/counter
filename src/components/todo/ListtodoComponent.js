import moment from "moment";
import React, {Component} from "react";
import TodoDataService from "../../api/todo/TodoDataService";
import AuthenticationService from "./AuthenticationService";

class ListtodoComponent extends Component {
    constructor (props) {
        super(props);
        this.state = {
            todos: 
            [
                // {id: 1, description: "learn react", done: false, targetDate: new Date()},
                // {id: 2, description: "learn basketball", done: false, targetDate: new Date()},
                // {id: 3, description: "learn leetcode", done: false, targetDate: new Date()},
            ],
            message: null
        }
        this.deleteTodoClicked = this.deleteTodoClicked.bind(this);
        this.addTodoClicked = this.addTodoClicked.bind(this);
        this.updateTodoClicked = this.updateTodoClicked.bind(this);
        this.refreshTodos = this.refreshTodos.bind(this);
    }

    componentDidMount() {
        this.refreshTodos();
    }

    refreshTodos() {
        let username = AuthenticationService.getLoggedInUserName();
        TodoDataService.retriveAllTodos(username)
        .then(
            response => {
                // console.log(response.data)
                this.setState({todos: response.data})
            }
        )
    }

    deleteTodoClicked(id){
        let username = AuthenticationService.getLoggedInUserName();
        TodoDataService.deleteTodo(username, id)
        .then(
            response => {
                this.setState({message:`Delete of todo${id} successful`});
                this.refreshTodos();
            }
        )
    }
    addTodoClicked(){
        this.props.navigate(`/todos/-1`);
    }

    updateTodoClicked(id){
        this.props.navigate(`/todos/${id}`);
    }

    render () {
        return (
            <div>
                <h1>Todo List</h1>
                {this.state.message && <div className="alert alert-success">{this.state.message}</div>}
                <div className="container">
                <table className="table">
                    <thead>
                        <tr>
                            <th>number</th>
                            <th>description</th>
                            <th>isFinished</th>
                            <th>targetDate</th>
                            <th>Delete</th>
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
                                <td>{moment(todo.targetDate).format("YYYY-MM-DD")}</td>
                                <td><button className="btn btn-success" onClick={() => this.updateTodoClicked(todo.id)}>Update</button></td>
                                <td><button className="btn btn-warning" onClick={() => this.deleteTodoClicked(todo.id)}>Delete</button></td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
                <div>
                    <button className="btn btn-success" onClick={this.addTodoClicked}>Add</button>
                </div>
                </div>
            </div>
        )
    }
}

export default ListtodoComponent;