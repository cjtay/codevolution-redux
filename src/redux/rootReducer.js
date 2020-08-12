import { combineReducers } from 'redux';
import cakeReducer from './cake/cakeReducer';
import iceCreamReducer from './icecream/iceCreamReducer';
import breadReducer from './bread/breadReducer';
import authReducer from './auth/authReducer';

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer,
    bread: breadReducer,
    auth: authReducer,
});

export default rootReducer;
