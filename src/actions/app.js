import {
    TOGGLE_AUTH_MODAL_LOGIN,
    TOGGLE_AUTH_MODAL_SIGN_UP
} from '../types/app';


export const setToggleAuthModalLogin = bool => ({
    type: TOGGLE_AUTH_MODAL_LOGIN,
    bool
});

export const setToggleAuthModalSignUp = bool => ({
    type: TOGGLE_AUTH_MODAL_SIGN_UP,
    bool
});

