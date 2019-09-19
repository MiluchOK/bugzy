import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LoginFormScreen from './screens/LoginFormScreen'


function AppRouter() {
    return(
        <Router>
            <Route path="/" component={LoginFormScreen} />
        </Router>
    )
}

export default AppRouter