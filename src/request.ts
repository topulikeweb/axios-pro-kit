import { AxiosResponse } from "axios"
interface IParams {
    [index: string]: any
}
import { Axios } from "./main"

export function Get<T>(url: string, params: IParams = {}): Promise<[any, AxiosResponse<T>]> {
    return new Promise((resolve, reject) => {
        Axios({
            method: 'GET',
            url,
            params
        }).then(res => {
            resolve([null, res.data as AxiosResponse<T>])
        }).catch(error => {
            reject([error, undefined])
        })
    })
}
export function Post<T>(url: string, params: IParams = {}): Promise<[any, AxiosResponse<T>]> {
    return new Promise((resolve, reject) => {
        Axios({
            method: 'POST',
            url,
            params
        }).then(res => {
            resolve([null, res.data as AxiosResponse<T>])
        }).catch(error => {
            reject([error, undefined])
        })
    })
}




