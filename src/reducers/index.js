import repoReducer from "./repoReducer";
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    repos: repoReducer
});
export default rootReducer;