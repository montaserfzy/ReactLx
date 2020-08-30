import React from 'react';
import {Link} from 'react-router-dom';
import "./footer.scss";

const FooterPage = () => {
    const year = new Date().getFullYear();
    return (
        <footer className=" page-footer font-small blue pt-5">
            <div className="container">
                <div className="container-fluid text-center text-md-left d-none">
                    <div className="row">
                        <div className="col-md-6 mt-md-0 mt-3">
                            <h5 className="text-uppercase">ReactLx</h5>
                            <p>Test site</p>
                        </div>
                        <hr className="clearfix w-100 pb-3"/>
                        <div className="col-md-3 mb-md-0 mb-3">
                            <h5 className="text-uppercase">Links</h5>
                            <ul className="list-unstyled">
                                <li>
                                    <Link to="#">Link 1</Link>
                                </li>
                                <li>
                                    <Link to="#">Link 2</Link>
                                </li>
                                <li>
                                    <Link to="#">Link 3</Link>
                                </li>
                                <li>
                                    <Link to="#">Link 4</Link>
                                </li>
                            </ul>

                        </div>

                        <div className="col-md-3 mb-md-0 mb-3">

                            <h5 className="text-uppercase">Links</h5>

                            <ul className="list-unstyled">
                                <li>
                                    <Link to="#">Link 1</Link>
                                </li>
                                <li>
                                    <Link to="#">Link 2</Link>
                                </li>
                                <li>
                                    <Link to="#">Link 3</Link>
                                </li>
                                <li>
                                    <Link to="#">Link 4</Link>
                                </li>
                            </ul>

                        </div>

                    </div>

                </div>
                <div className="footer-copyright text-center py-3">© {year} Copyright:
                    <Link to="/"> Reactlx.com</Link>
                </div>
            </div>
        </footer>
    )
};

export default FooterPage;
