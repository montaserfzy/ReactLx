import React from 'react';
import Routers from './routes';
import {Provider} from 'react-redux';
import {applyMiddleware, compose, createStore} from 'redux';
import thunk from 'redux-thunk';
import Reducer from './reducers';
import './styles/mobile.scss';
import './styles/styles.scss';

import { library }  from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas);

let composeEnhancers = compose;

if(process.env.NODE_ENV === 'development' ){
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

const store = createStore(Reducer, composeEnhancers(applyMiddleware(thunk)));

const App = () => {
    return (
        <Provider store={store}>
            <Routers/>
        </Provider>
    );
};

export default App;
