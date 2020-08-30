import axios from 'src/providers/request';
import {
    SET_USER_INFO,
    SET_SUCCESS,
    SET_RESPONSE_ERRORS,
} from '../types/user';
import cookie from 'react-cookies';
import ENDPOINTS from 'src/providers/endpoints';


export const setUserInfo = session => ({
    type: SET_USER_INFO,
    session
});

export const setResponseErrors = errors => ({
    type: SET_RESPONSE_ERRORS,
    errors
});

export const setSuccess = (success, message) => ({
    type: SET_SUCCESS,
    success,
    message
});

export const saveUserSession = async session => {
    await cookie.save('SITE_COOKIES', JSON.stringify(session), {
        path: '/',
        expires: new Date(new Date().setFullYear('2030')),
        // maxAge: 1000
    });
    window._tobe_dir = session.lang === 'en' ? 'ltr' : 'rtl';
    return await getUserSession();
};

export const removeUserSession = async () => {
    return await cookie.remove('SITE_COOKIES', {path: '/'});
};

export const getUserSession = () => async dispatch => {
    const SITE_COOKIES = cookie.load('SITE_COOKIES');
    if (SITE_COOKIES) {
        await dispatch(setUserInfo(SITE_COOKIES));
    }
};

export const isUserLoggedIn = (authType = null) => {
    let SITE_COOKIES = cookie.load('SITE_COOKIES') || null;

    if (!SITE_COOKIES)
        return false;

    // let expires = moment(SITE_COOKIES.expires);
    // if (expires.diff(moment()) <= 0) {
    //     removeUserSession();
    //     return false;
    // }

    // check if user logged in and tying to open app not authenticated on it
    if (authType && SITE_COOKIES.user_type !== authType){
        return false;
    }

    return true;
};

export const login = (formData) => async dispatch => {
    await dispatch(setUserInfo(null));
    await dispatch(setResponseErrors([]));
    await dispatch(setSuccess(false, ''));

    formData.timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

    return axios.post(ENDPOINTS.LOGIN, formData).then(async ({data}) => {
        if (data.success) {
            await dispatch(setSuccess(true, ''));

            let tomorrow = new Date();
            tomorrow.setDate(tomorrow.getDate() + 1);
            data.session.expires = tomorrow; // expires;

            await saveUserSession(data.session);
            await dispatch(setUserInfo(data.session));
            return;
        }
    }).catch(async e => {
        await dispatch(setSuccess(false, e?.message));
        return await dispatch(setResponseErrors(e?.errors));
    });
};

export const signUp = (formData) => async dispatch => {
    await dispatch(setUserInfo(null));
    await dispatch(setSuccess(false, ''));

    formData.timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

    return axios.post(ENDPOINTS.SING_UP, formData).then(async ({data}) => {
        if (data.success) {
            await saveUserSession(data.session);
            await dispatch(setSuccess(data?.success, data?.message));
            await dispatch(setUserInfo(data.session));
            return;
        }
    }).catch(async e => {
        await dispatch(setSuccess(false, e?.message));
        if (e?.errors)
            return dispatch(setResponseErrors(e.errors));
    });
};
