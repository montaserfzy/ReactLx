import React from "react";
import {Button} from "react-bootstrap";
import {connect} from 'react-redux';
import Form from 'react-bootstrap/Form'
import "./styles.scss";
import {withRouter} from 'react-router-dom';
import moment from 'moment';

class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            email: '',
            password: '',
            confirmed_password: '',
            full_name: '',
            country_code: 'JO',
            birth_date: moment().subtract(15, 'year').format('YYYY-MM-DD')
        };
    }

    validateForm = () => {
        const {email, password} = this.state;
        return email.length > 0 && password.length > 0;
    };

    handleSubmit = async (event) => {
        this.setState({isLoading: true});
        event.preventDefault();
    };

    handleOnDateChanged = ({target}) => {
        let selectedDateYear = new Date(target.value).getFullYear();
        let nowYear = new Date().getFullYear();
        if (nowYear - selectedDateYear >= 5)
            this.setState({birth_date: target.value});
    };

    render() {
        const {email, password, full_name, birth_date, isLoading} = this.state;
        const {errors} = this.props.user;
        return (
            <div className="SignUp">
                <span className="auth-title">{'Sign up'}</span>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="full_name">
                        <Form.Control placeholder={'full_name'}
                                      autoFocus
                                      type="text"
                                      isInvalid={!!errors?.full_name}
                                      value={full_name}
                                      onChange={e => this.setState({full_name: e.target.value})}/>
                        <Form.Control.Feedback type="invalid">
                            {errors?.full_name}
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group controlId="birth-date-12">
                        <Form.Control type="date"
                                      value={birth_date}
                                      placeholder={'Date of birth'}
                                      onChange={this.handleOnDateChanged}/>
                    </Form.Group>

                    <Form.Group controlId="birth-dates-12">
                        <hr/>
                    </Form.Group>

                    <Form.Group controlId="email">
                        <Form.Control placeholder={'email'}
                                      type="username"
                                      isInvalid={!!errors?.email}
                                      autoComplete="new-email"
                                      value={email}
                                      onChange={e => this.setState({email: e.target.value})}/>
                        <Form.Control.Feedback type="invalid">
                            {errors?.email}
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group controlId="password">
                        <Form.Control placeholder={'password'}
                                      value={password}
                                      isInvalid={!!errors?.password}
                                      onChange={e => this.setState({password: e.target.value})}
                                      autoComplete="new-password"
                                      type="password"/>
                        <Form.Control.Feedback type="invalid">
                            {errors?.password}
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Button block
                            disabled={!this.validateForm() || isLoading}
                            type="submit">
                        {isLoading ? 'loading' : 'Sign up'}
                    </Button>
                </Form>
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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SignUp));
