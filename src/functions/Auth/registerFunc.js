import axios from 'axios';

const apiUrl = "http://api.edupulse.software/api/v1";

export const registerService = axios.create({
    baseURL: apiUrl,
    headers: {
        'Content-Type': 'application/json',
    },
});