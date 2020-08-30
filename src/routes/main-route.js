import React, {Suspense} from 'react';
import {Route, Switch, withRouter} from 'react-router-dom';
import {Nav, Loader, Footer} from 'src/components/';
import routes from './routes';
import PrivateRoute from "./private-route";
import PublicRoute from "./public-route";
import {isUserLoggedIn} from 'src/actions/user';

const MainRoute = ({location}) => {
    const isAdminRoute = location.pathname.indexOf('admin') === 1;
    const isUserAuth = isUserLoggedIn();
    return (
        <div className="app-content"
             dir={window._tobe_dir}>
            <Nav isAdminRoute={isAdminRoute}/>
            <Suspense fallback={<Loader/>}>
                <main>
                    <div className="app-body">
                        <Switch>
                            {
                                routes.map(props => (
                                    props?.isAuth ? <PrivateRoute isUserAuth={isUserAuth} {...props} /> :
                                        <PublicRoute {...props} />
                                ))
                            }
                            <Route component={React.lazy(() => <div>404</div>)}/>
                        </Switch>
                    </div>
                </main>
                <Footer/>
            </Suspense>
        </div>
    );
}


export default withRouter(MainRoute);
