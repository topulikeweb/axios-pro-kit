import { Get } from '../../src/request'
import { IData } from '../type';
export function getUser() {
    console.log('====================================');
    return Get<IData>('http:8080', { user: 'zcy' })
}