import React, { Fragment } from 'react';
import Register from './components/Register';
import Login from './components/Login';
import AuthSuccess from './components/AuthSuccess';
import PrivateRoute from './routes/PrivateRoute';
import { Route } from 'react-router-dom';

const Routes = () => {
    return (
        <Fragment>
            <Route exact path='/' component={Register} />
            <Route exact path='/login' component={Login} />
            <PrivateRoute exact path='/auth-success' component={AuthSuccess} />
        </Fragment>
    );
};

export default Routes;
