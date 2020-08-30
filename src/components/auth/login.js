import React from "react";
import {Button, FormGroup, FormControl} from "react-bootstrap";
import {connect} from 'react-redux';


import "./styles.scss";

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            form: {
                email: '',
                password: '',
            },
            isLoading: false,
            isDisabled: true
        };
    }

    handleSubmit = () => {
        this.setState({isLoading: true});
    };

    openSignUp = (event) => {
        this.props.onHide(event);
        document.getElementById('signup_button').click();
    };

    handleKeyPress = (event) => {
        const {isDisabled} = this.state;

        if (isDisabled)
            return;

        if (event.charCode === 13)
            return this.handleSubmit(event);
    };

    setValues = (value) => {
        this.setState({
            form: {
                ...this.state.form,
                ...value
            }
        }, () => {
            this.setState({
                isDisabled: !(this.state.form.email.length > 0 && this.state.form.password.length > 0)
            })
        });
    };

    render() {
        const {isLoading, isDisabled} = this.state;
        const {email, password} = this.state.form;
        return (
            <div className="Login">
                <div>
                    <span className="auth-title">{'login'}</span>
                    <FormGroup controlId="email">
                        <FormControl placeholder={'email'}
                                     autoFocus
                                     type="username"
                                     autoComplete="new-email"
                                     value={email}
                                     onKeyPress={this.handleKeyPress}
                                     onChange={e => this.setValues({email: e.target.value})}/>
                    </FormGroup>
                    <FormGroup controlId="password">
                        <FormControl placeholder={'password'}
                                     value={password}
                                     autoComplete="password"
                                     onChange={e => this.setValues({password: e.target.value})}
                                     onKeyPress={this.handleKeyPress}
                                     type="password"/>
                    </FormGroup>

                    <Button block
                            disabled={isDisabled || isLoading}
                            onClick={this.handleSubmit}>
                        {isLoading ? 'loading' : 'login'}
                    </Button>
                    <Button variant={'light'}
                            block
                            className="mt-2"
                            onClick={this.openSignUp}>{'Sign up'}</Button>
                </div>
            </div>
        );
    };
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
export default connect(mapStateToProps, mapDispatchToProps)(Login);
