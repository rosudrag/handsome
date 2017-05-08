import { createStore, compose } from 'redux';
import reducer from './reducers/index';

const initialState = {};

let checkoutStore;
if (process.env.NODE_ENV !== 'production') {
	checkoutStore = createStore(reducer, initialState, window.devToolsExtension ? window.devToolsExtension() : f => f);
} else {
	checkoutStore = createStore(reducer, initialState);
}

export default checkoutStore;
