import {Promise} from "es6-promise";
import {
    ContextInfo,
    List,
    Types
} from "gd-sprest";

/**
 * Interface
 */
export interface IPageData {
    Title: string
}

/**
 * Page Data
 */
export class PageData {
    // Method to load the data
    static load() {
        // Return a promise
        return new Promise((resolve, reject) => {
            // See if the SP environment exists
            if(ContextInfo.existsFl) {
                // Get the list
                (new List("PageData"))
                    // Get the items
                    .Items()
                    // Query the items
                    .query({
                        OrderBy: ["Title"],
                        Select: ["ID", "Title"]
                    })
                    // Execute the request
                    .execute((items:Types.IListItems) => {
                        let data:Array<IPageData> = [];

                        // Ensure the items exists
                        if(items.existsFl) {
                            // Parse the items
                            for(let item of items.results) {
                                // Add the item
                                data.push({
                                    Title: item["Title"]
                                });
                            }
                        }

                        // Resolve the promise
                        resolve(data);
                    });
            }
            // Else, resolve the promise with the test data
            else {
                resolve(TestData);
            }
        });
    }
}

/**
 * Test Data
 */
const TestData: Array<IPageData> = [
    {
        Title: "Tab 1"
    },
    {
        Title: "Tab 2"
    },
    {
        Title: "Tab 3"
    },
    {
        Title: "Tab 4"
    },
    {
        Title: "Tab 5"
    }
]