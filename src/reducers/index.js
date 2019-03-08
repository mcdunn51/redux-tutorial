// this file is the root reducer file
import {combineReducers} from 'redux';
import postReducer from './postReducer';

export default combineReducers({
    posts: postReducer
});