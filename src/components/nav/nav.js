import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import './nav.scss';
import {Link} from "react-router-dom";
import connect from "react-redux/es/connect/connect";
import * as Auth from 'src/components/auth/auth';

const Nav = ({session}) => {

    return (
        <>
            <Navbar variant="dark"
                    className="navbar">
                <div className="container nav-container">

                    <div className="brand-container">
                        <Navbar.Brand>
                            <Link to={'/'}> ReactLx </Link>
                        </Navbar.Brand>
                    </div>
                    <div className="d-flex">
                        <Link to="#"
                              className={'nav-bar-link business-nav-link mx-1 d-none'}>Business Profile</Link>
                        {
                            !session &&
                            <div className="auth-links">
                                <Auth.LoginModal/>
                                <Auth.SignUpModal/>
                            </div>
                        }
                    </div>

                </div>
            </Navbar>
            <div className="message-overlay">
                <div className="message">{'loading'}</div>
            </div>
        </>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch
    }
};

const mapStateToProps = ({user}) => {
    return {
        user,
        session: user.session
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
