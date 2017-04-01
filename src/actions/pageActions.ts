import {ActionTypes} from "./actionTypes";
import {IPageData, PageData} from "../data/pageData";

// Method to load the data for the page.
export function loadData() {
    // Return a dispatch
    return function(dispatch) {
        // Load the data and return the promise
        return PageData.load().then((data:Array<IPageData>) => {
            // Resolve the promise
            dispatch({
                type: ActionTypes.LoadData,
                data
            });
        });
    };
}