import React from 'react'
import {Redirect, Route} from 'react-router-dom';

const PrivateRoute = ({component: Component, isUserAuth, authType, ...rest}) => {
    return (
        <Route
            {...rest} render={routeProps =>
            isUserAuth ? <Component {...routeProps} /> : <Redirect to={'/404'}/>
        }/>
    )
};

export default PrivateRoute;
