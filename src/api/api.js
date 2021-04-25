import axios from 'axios';

const api = axios.create({
    baseURI: 'localhost:3000'
});

export default api;

export const RequestStatuses = {
    IDLE: 'requestStatus/idle',
    LOADING: 'requestStatus/loading',
    SUCCESS: 'requestStatus/success',
    ERROR: 'requestStatus/error'
}
