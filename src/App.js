import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';

import './App.css';
import CakeContainer from './components/CakeContainer';
import IceCreamContainer from './components/IceCreamContainer';
import BreadContainer from './components/BreadContainer';
import AuthContainer from './components/AuthContainer';

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <CakeContainer />
                <IceCreamContainer />
                <BreadContainer />
                <AuthContainer />
            </div>
        </Provider>
    );
}

export default App;
