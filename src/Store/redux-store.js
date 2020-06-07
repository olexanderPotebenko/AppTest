import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import homeReducer from '../reducers/homeReducer';
import photoReducer from '../reducers/photoReducer';

let reducers = combineReducers({
    homePage: homeReducer,
    photoPage: photoReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;
