import * as React from "react";
import {connect} from "react-redux";
import {Navigation} from "./navigation";
import * as pageActions from "../actions/pageActions";

/**
 * Properties
 */
interface Props {
    actions: any,
    data: Array<any>
}

/**
 * Dashboard
 */
class Dashboard extends React.Component<any, any> {
    // Render the Component
    render() {
        let {data} = this.props;
        return (
            <div>
                <Navigation data={data} />
            </div>
        );
    }
}

/**
 * Connections
 */
export default connect(
    /**
     * State to Property Mapper
     */
    (state, ownProps) => {
        return {
            data: state.page.data
        }
    }
)(Dashboard);