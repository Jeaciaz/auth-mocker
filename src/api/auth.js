import api from './api';

export const postSignIn = (body) => new Promise((res, rej) => setTimeout(() => api.post('/login', body).then(res).catch(rej), 500));

export const postCreateAccount = (body) => api.post('/register', body);

export const postResetPassword = (body) => api.post('/reset-password', body);
