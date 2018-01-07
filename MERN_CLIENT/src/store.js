"use strict";

import {applyMiddleware,createStore} from 'redux';
//Import combined reducers
import reducers from './reducers/index';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

//CRETAE A LOGGER MIDDLEWARE
const middleware=applyMiddleware(thunk,logger);
//APPLY LOGGER MIDDLEWARE
const store=createStore(reducers,middleware);

export default store;