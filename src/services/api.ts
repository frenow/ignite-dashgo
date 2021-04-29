import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://ignite-dashgo.vercel.app/api'
})