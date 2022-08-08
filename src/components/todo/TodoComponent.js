import React, {Component} from "react";
import moment from "moment";
import {Formik, Form, Field, ErrorMessage} from "formik";
import TodoDataService from "../../api/todo/TodoDataService";
import AuthenticationService from "./AuthenticationService";

class TodoComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.params.id,
            description: "",
            targetDate : moment(new Date()).format("YYYY-MM-DD")
        }
        this.onSubmit = this.onSubmit.bind(this);
        this.validate = this.validate.bind(this);
    }

    componentDidMount() {
        if (this.state.id === -1) {return}
        let username = AuthenticationService.getLoggedInUserName();
        TodoDataService.retriveTodo(username, this.state.id)
            .then(response => this.setState({
                description: response.data.description,
                targetDate: moment(response.data.targetDate).format("YYYY-MM-DD")
            }));
    }

    onSubmit(values) {
        let username = AuthenticationService.getLoggedInUserName();
        let todo = {
            id: this.state.id,
            description: values.description,
            targetDate: values.targetDate
        }

        if (this.state.id === -1){
            TodoDataService.createTodo(username, todo).then(
                () => 
                    this.props.navigate("/todos")
            )
        } else {
            TodoDataService.updateTodo(username, this.state.id, todo).then(
                () => 
                    this.props.navigate("/todos")
            )
        }
    }

    validate(values) {
        let errors = {};
        if (!values.description) {
            errors.description = "please enter a description"
        } else if (values.description.length < 5) {
            errors.description = "enter a description longer than 5"
        }

        if (!moment(values.targetDate).isValid()) {
            errors.targetDate = "enter a valid target date"
        }
        return errors;
    }
    render () {
        // let description = this.state.description;
        // let targetDate = this.state.targetDate;
        let {description, targetDate} = this.state;
        return <div>
                <h1>Todo</h1>
                <div className="container">
                    <Formik
                    initialValues={{
                        description: description,
                        targetDate: targetDate
                    }}
                    onSubmit={this.onSubmit}
                    validate={this.validate}
                    validateOnBlur={false}
                    validateOnChange={false}
                    enableReinitialize={true}
                    >
                        {(props) => (
                        <Form>
                            <ErrorMessage name="description" component="div" 
                                                        className="alert alert-warning"></ErrorMessage>
                            <ErrorMessage name="targetDate" component="div" 
                                                        className="alert alert-warning"></ErrorMessage>
                            <fieldset className="form-group">
                                <label>Description</label>
                                <Field className="form-control" type="text" name="description"/>
                            </fieldset>
                            <fieldset className="form-group">
                                <label>Target Date</label>
                                <Field className="form-control" type="date" name="targetDate"/>
                            </fieldset>
                            <br></br>
                            <button className="btn btn-success" type="submit">Update</button>
                        </Form>
                        
                        )}
                    </Formik>
                </div>
            
                </div>
    }
}

export default TodoComponent;