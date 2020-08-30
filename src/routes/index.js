import React from 'react';
import {BrowserRouter } from 'react-router-dom';
import {connect} from "react-redux";
import MainRoute from './main-route';
import {getUserSession} from "src/actions/user";

class Routers extends React.Component {

    constructor(props) {
        super(props);
        this.props.dispatch(getUserSession());
    }

    render() {
        return (
            <BrowserRouter>
                <MainRoute/>
            </BrowserRouter>
        );
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        dispatch
    }
};

const mapStateToProps = ({user}) => {
    return {
        user
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Routers);
