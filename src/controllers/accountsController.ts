import {TestAccount} from '../models/account';
import {Route, Get} from 'tsoa';
import {User} from '../models/user';

@Route('Accounts')
export class AccountsController {
    /** Get the current account */
    @Get('Current')
    public async current(): Promise<TestAccount> {
        return {
            id: 600,
            name: 'test'
        };
    }

    /** Get a list of users for the account */
    @Get('Users')
    public async getUsers(): Promise<User[]> {
        return [
            {
                createdAt: new Date(),
                email: 'test@test.com',
                headers: 'dummy',
                id: 1
            },
            {
                createdAt: new Date(),
                email: 'test2@test2.com',
                headers: 'dummy',
                id: 2
            }
        ];
    }
}
