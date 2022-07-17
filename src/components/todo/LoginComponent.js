import React, {Component} from "react";
import AuthenticationService from "./AuthenticationService";

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
            AuthenticationService.registerSuccesfulLogin(this.state.username, this.state.password);
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
                <h1>Login</h1>
                <div className="container">
                    {this.state.loginFailed && <div className="alert alert-warning">Login Failed</div>}
                    {this.state.loginSuccess && <div>Login Success</div>}
                    {/* <ShowInvalidCredentials loginFailed={this.state.loginFailed}/> */}
                    {/* <ShowSuccessfulMessage loginSuccess={this.state.loginSuccess}/> */}
                    User Name: <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
                    Password: <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
                    <button className="btn btn-success"onClick={this.verifyLogin}>Login</button>
                </div>
            </div>
        )
    }
}

export default LoginComponent;