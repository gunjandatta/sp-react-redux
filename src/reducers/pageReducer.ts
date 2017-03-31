import {ActionTypes} from "../actions/actionTypes"
import initalState from "./initialState";
import * as ObjectAssign from "object-assign";

export default function pageReducers(state = initalState, action) {
    // Check the requested action
    switch(action.type) {
        // See if this action is handled by this reducer
        case ActionTypes.LoadData:
            // Return a copy of the state
            return ObjectAssign(
                {},
                state,
                // The updated state
                { data: action.data }
            );

        // Return the state if this reducer doesn't handle the requested action
        default:
            return state;
    }
}