import axios, { AxiosInstance, InternalAxiosRequestConfig, AxiosRequestHeaders, AxiosResponse, AxiosError } from 'axios'
import { handleAuthError } from './tool';
export const Axios: AxiosInstance = axios.create({
    baseURL: 'http:8080',
    timeout: 5000
})

Axios.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
        (config.headers as AxiosRequestHeaders)['Authorization'] = 'Bearer token';
        return config;
    },
    (error: Error) => {
        return Promise.reject(error);
    }
);

Axios.interceptors.response.use(
    function (response: AxiosResponse) {
        return response
    }, function (error: AxiosError) {
        if (error.response?.status) {
            handleAuthError(error.response?.status)
        }
        return Promise.reject(error)
    }
)