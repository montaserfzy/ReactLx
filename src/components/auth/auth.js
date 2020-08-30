import React from "react";
import {setToggleAuthModalLogin, setToggleAuthModalSignUp} from 'src/actions/app';
import AppConfig from 'src/reducers/app';
import Login from 'src/components/auth/login';
import SignUp from 'src/components/auth/sign_up';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';
import './styles.scss'
import Modal from "react-bootstrap/Modal";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const LoginModal = () => {
    const [state, dispatch] = React.useReducer(AppConfig, {isAuthModalLogin: false, isAuthModalSignUp: false});

    const toggleAppAuthModalLogin = (e, bool) => {
        e.preventDefault();
        dispatch(setToggleAuthModalLogin(bool))
    };

    const onSuccessLogin = (e) => {
        toggleAppAuthModalLogin(e, false);
    };

    const onHide = (e) =>{
        toggleAppAuthModalLogin(e, false)
    };

    React.useEffect(() => {
        return function cleanup() {

        };
    });
    return (
        <div className='auth-modal-link'>
            <Link to="#"
               className="auth-link login-button"
               id="sign_in_button"
               onClick={(e) => toggleAppAuthModalLogin(e, true)}>Login</Link>
            {
                state.isAuthModalLogin &&
                <Modal show={true}
                       animation={false}
                       onHide={onHide}
                       backdrop="static"
                       keyboard={true}
                       size={'lg'}
                >
                <div className="login-modal-page">
                    <div className="header">
                        <div className="close">
                            <Button onClick={(e) => toggleAppAuthModalLogin(e, false)}>
                                <FontAwesomeIcon icon="times" />
                            </Button>
                        </div>
                    </div>
                    <div className="auth-body">
                        <Login onSuccessLogin={onSuccessLogin} onHide={onHide}/>
                    </div>
                </div>
                </Modal>
            }
        </div>

    )
};

export const SignUpModal = () => {
    const [state, dispatch] = React.useReducer(AppConfig, {isAuthModalLogin: false, isAuthModalSignUp: false});

    const toggleAppAuthModalSignUp = (e, bool) => {
        e.preventDefault();
        dispatch(setToggleAuthModalSignUp(bool))
    };

    const onSignUpSuccess = (e) => {
        toggleAppAuthModalSignUp(e, false);
    };

    const onHide = (e) =>{
        toggleAppAuthModalSignUp(e, false)
    };

    return (
        <div className='auth-modal-link sign-up-modal'>
            <Link to="#"
               className="auth-link signup-button" id="sign_up_button"
               onClick={(e) => toggleAppAuthModalSignUp(e, true)}>Sign Up</Link>
            {
                state.isAuthModalSignUp &&
                <Modal show={true}
                       animation={false}
                       onHide={e=>toggleAppAuthModalSignUp(e, false)}
                       backdrop="static"
                       keyboard={true}
                       size={'lg'}
                >
                    <div className="login-modal-page">
                        <div className="header">
                            <div className="close">
                                <Button onClick={(e) => toggleAppAuthModalSignUp(e, false)}>
                                    <FontAwesomeIcon icon="times" />
                                </Button>
                            </div>
                        </div>
                        <div className="auth-body">
                            <SignUp onSignUpSuccess={onSignUpSuccess} onHide={onHide}/>
                        </div>
                    </div>
                </Modal>
            }
        </div>
    )
};
