import {combineReducers} from "redux";
import pageReducers from "./pageReducer";

const rootReducer = combineReducers({
    page: pageReducers
});

export default rootReducer;
