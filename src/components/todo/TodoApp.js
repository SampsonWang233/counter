import React, {Component} from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import withNavigation from "./WithNavigation";
import withParams from "./WithParams";

class TodoApp extends Component {
    render () {
        const LoginComponentWithNavigation = withNavigation(LoginComponent);
        const WelcomeComponentWithParams = withParams(WelcomeComponent);
        return (
            <div children className="todoapp">
                <Router>
                        <Routes>
                            <Route path="/" element={<LoginComponentWithNavigation/>}/>
                            <Route path="/login" element={<LoginComponentWithNavigation/>}/>
                            <Route path="/welcome/:name" element={<WelcomeComponentWithParams />} />
                            <Route path="*" element={<ErrorComponent/>}/>
                        </Routes>
                </Router>
            </div>
        )
    }
}

class WelcomeComponent extends Component {
    render () {
        return <div>Welcome {this.props.params.name}!</div>
    }
}

function ErrorComponent () {
    return <div>Wrong Page!</div>
}



class LoginComponent extends Component {
    constructor (props) {
        super(props);
        this.state = {
            username: "sampson",
            password: "",
            loginSuccess: false,
            loginFailed: false,
        }
        // this.handleUsernameChange = this.handleUsernameChange.bind(this);
        // this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.verifyLogin = this.verifyLogin.bind(this);
    }

    handleChange (event) {
        // console.log(event.target.name);
        this.setState(
            {[event.target.name]: 
                event.target.value}
            );
    }

    verifyLogin () {
        if (this.state.username === "sampson" & this.state.password === "dummy") {
            this.props.navigate(`/welcome/${this.state.username}`);
            // this.setState({loginSuccess: true});
            // this.setState({loginFailed: false});
            // console.log("success");
        } else {
            this.setState({loginSuccess: false});
            this.setState({loginFailed: true});
            // console.log("failed");
        }
    }


    // handleUsernameChange (event) {
    //     console.log(event.target.value);
    //     this.setState({username: event.target.value});
    // }

    // handlePasswordChange (event) {
    //     this.setState({password: event.target.value});
    // }

    render () {
        return (
            <div>
                {this.state.loginFailed && <div>Login Failed</div>}
                {this.state.loginSuccess && <div>Login Success</div>}
                {/* <ShowInvalidCredentials loginFailed={this.state.loginFailed}/> */}
                {/* <ShowSuccessfulMessage loginSuccess={this.state.loginSuccess}/> */}
                User Name: <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
                Password: <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
                <button onClick={this.verifyLogin}>Login</button>
            </div>
        )
    }
}


// function ShowInvalidCredentials (props) {
//     if (props.loginFailed) {
//         return <div>Login Failed</div>
//     } else {
//         return null
//     }
// }

// function ShowSuccessfulMessage (props) {
//     if (props.loginSuccess) {
//         return <div>Login Success</div>
//     } else {
//         return null
//     }
// }



export default TodoApp;