import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LoginFormScreen from './screens/LoginFormScreen'


function Buttons() {
    return <h2>Buttons</h2>;
}

function Help() {
    return <h2>Help</h2>;
}


function AppRouter() {
    return(
        <Router>
            <Route path="/" component={LoginFormScreen} />
            {/*<Route path="/forms" exact component={LoginFormScreen} />*/}
            {/*<Route path="/buttons" exact component={Buttons} />*/}
            {/*<Route path="/help" exact component={Help} />*/}
        </Router>
    )
}

export default AppRouter