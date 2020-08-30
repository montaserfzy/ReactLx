import axios from 'axios';
import cookie from "react-cookies";
import ENDPOINTS from './endpoints';

axios.defaults.baseURL = ENDPOINTS.BASE_URL;
axios.interceptors.request.use(function (config) {

    if (cookie.load('SITE_COOKIES')) {
        let {token} = cookie.load('SITE_COOKIES');
        config.headers.common['Authorization'] = `Bearer ${token}`;
        config.headers.common['Accept'] = 'application/json';
        config.headers.common['Content-Type'] = 'application/x-www-form-urlencoded';
        config.headers.common['X-Requested-With'] = 'XMLHttpRequest';
    }
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

axios.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    const {response} = error;

    if (response?.status === 403) {
        alert('User unauthorized');
        cookie.remove('SITE_COOKIES', {path: '/'});
        window.location.href = '/';
    }

    // one active session handle error 440
    // one session at a time no more
    if (response?.status === 440) {
        alert('Session deactivated');
        cookie.remove('SITE_COOKIES', {path: '/'});
        window.location.href = '/';
    }
    return Promise.reject(response?.data || response);
});

export default axios;
