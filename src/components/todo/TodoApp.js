import React, {Component} from "react";
import {BrowserRouter as Router, Route, Routes, Link} from "react-router-dom";
import withNavigation from "./WithNavigation";
import withParams from "./WithParams";
import AuthenticationService from "./AuthenticationService";
import AuthenticationRoute from "./AuthenticationRoute";
import LoginComponent from "./LoginComponent";
import ListtodoComponent from "./ListtodoComponent";
import ErrorComponent from "./ErrorComponent";
import LogoutComponent from "./Logoutcomponent";
import HeaderComponent from "./HeaderComponent";
import FooterComponent from "./FooterComponent";
import WelcomeComponent from "./WelcomeComponent";
import TodoComponent from "./TodoComponent";

class TodoApp extends Component {
    render () {
        const LoginComponentWithNavigation = withNavigation(LoginComponent);
        const WelcomeComponentWithParams = withParams(WelcomeComponent);
        // const ListtodoComponentWithParams = withParams(ListtodoComponent);
        const HeaderComponentWithNavigation = withNavigation(HeaderComponent);
        const ListTodosComponentWithNavigation = withNavigation(ListtodoComponent) 
        const TodoComponentWithParamsAndNavigation = withParams(withNavigation(TodoComponent));
        return (
            <div children className="todoapp">
                <Router>
                    <HeaderComponentWithNavigation/>
                        <Routes>
                            <Route path="/" element={<LoginComponentWithNavigation/>}/>
                            <Route path="/login" element={<LoginComponentWithNavigation/>}/>
                            <Route path="/welcome/:name" element={<AuthenticationRoute>
                                                                    <WelcomeComponentWithParams /> 
                                                                </AuthenticationRoute>} />
                            <Route path="/todos/:id" element={ 
                                                                <AuthenticationRoute>
                                                                    <TodoComponentWithParamsAndNavigation />
                                                                </AuthenticationRoute>
                                                            } />
                            <Route path="/todos" element={<AuthenticationRoute>
                                                            <ListTodosComponentWithNavigation />
                                                        </AuthenticationRoute>} />
                            <Route path="/logout" element={<AuthenticationRoute>
                                                                <LogoutComponent />
                                                        </AuthenticationRoute>} />
                            <Route path="*" element={<ErrorComponent/>}/>
                        </Routes>
                    <FooterComponent/>
                </Router>
            </div>
        )
    }
}

export default TodoApp;