import {
    TOGGLE_AUTH_MODAL_LOGIN,
    TOGGLE_AUTH_MODAL_SIGN_UP
} from '../types/app';

const initState = {
    isAuthModalLogin: false,
    isAuthModalSignUp: false,
};

const AppConfig = (state = initState, action) => {
    switch (action.type) {
        case TOGGLE_AUTH_MODAL_LOGIN:
            return {...state, isAuthModalLogin: action.bool};
        case TOGGLE_AUTH_MODAL_SIGN_UP:
            return {...state, isAuthModalSignUp: action.bool};

        default:
            return state;
    }
};

export default AppConfig;