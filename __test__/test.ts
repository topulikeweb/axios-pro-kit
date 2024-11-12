import { Get } from "../src/request";
import { Axios } from "../src/main";
import MockAdapter from 'axios-mock-adapter'
interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    address: object;  // 你可以根据实际情况进一步定义 Address 类型
    phone: string;
    website: string;
    company: object;  // 你可以根据实际情况进一步定义 Company 类型
}


describe('Testing the axios wrapper', () => {
    let mock: MockAdapter
    beforeEach(() => {
        mock = new MockAdapter(Axios)
    })
    afterEach(() => {
        mock.reset()
    })
    test('Get return', async () => {
        mock.onGet('https://jsonplaceholder.typicode.com/users').reply(200, {
            data: {
                id: 20,
                name: 'John Doe',
                username: 'johndoe',
                email: 'johndoe@example.com',
                address: {},
                phone: '123-456-7890',
                website: 'johndoe.com',
                company: {},
            }
        })
        const [, { data }] = await Get<User>('https://jsonplaceholder.typicode.com/users')
        expect(data.id).toBe(20)
        expect(data.name).toBe('John Doe');
        expect(data.username).toBe('johndoe');
        expect(data.email).toBe('johndoe@example.com');
    });
});