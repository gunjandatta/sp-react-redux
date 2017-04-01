import * as React from "react";
import {IPageData} from "../data/pageData";
import {
    Pivot, PivotItem,
    Spinner
} from "office-ui-fabric-react";

/**
 * Properties
 */
interface Props {
    data: Array<IPageData>
}

/**
 * Navigation
 */
export class Navigation extends React.Component<Props, any> {
    // Method to render the component
    render() {
        let {data} = this.props;

        // Ensure data exists
        if(data == null) {
            // Return a loading panel
            return <Spinner label="Loading..." />
        }

        // Render the component
        return (
            <Pivot>
                {this.renderPivotItems()}
            </Pivot>
        );
    }

    // Method to render the pivot items
    renderPivotItems() {
        let counter = 0;
        let {data} = this.props;
        let items = [];

        // Parse the data
        for(let tabName of data) {
            // Add the pivot item
            items.push(
                <PivotItem linkText={tabName.Title} key={"tab_" + counter++}>
                    This is the content for the '{tabName.Title}' tab.
                </PivotItem>
            );
        }

        // Return the items
        return items;
    }
}