import {
    SET_USER_INFO,
    SET_SUCCESS,
    SET_RESPONSE_ERRORS
} from '../types/user';

const initState = {
    session: null,
    users: [],
    user_type: null,
    success: false,
    message: '',
    user_details: null,
    supervisors: [],
    errors:[],

};

const Auth = (state = initState, action) => {
    switch (action.type) {
        case SET_USER_INFO:
            return {...state, session: action.session};

        case SET_RESPONSE_ERRORS:
            return {...state, errors: action.errors};

        case SET_SUCCESS:
            return {...state, success: action.success, message: action.message};

        default:
            return state;
    }
};

export default Auth;