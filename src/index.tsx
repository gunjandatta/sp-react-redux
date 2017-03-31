import * as React from "react";
import {render} from "react-dom";
import {Provider} from "react-redux";
import {polyfill} from "es6-promise";
import configureStore from "./store/configureStore";
import {Helper} from "gd-sprest";
import * as pageActions from "./actions/pageActions";
import {Dashboard} from "./components";

// Create the store
const store = configureStore();

// Wait for the page to load
Helper.Loader.waitForSPLibs(() => {
    // Load the data
    store.dispatch(pageActions.loadData());
});

// Render the app
render(
    <Provider store={store}>
        <Dashboard />
    </Provider>,
    document.getElementById("app")
);