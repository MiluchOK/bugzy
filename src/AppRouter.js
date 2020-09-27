import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginFormScreen from './screens/LoginFormScreen';
import LocatorsOverview from './screens/LocatorsOverview';


function AppRouter() {
    return(
        <Router>
            <Switch>
                <Route path="/locatorsOverview" exact component={LocatorsOverview} />
                <Route path="/" component={LoginFormScreen} />
            </Switch>
        </Router>
    )
}

export default AppRouter