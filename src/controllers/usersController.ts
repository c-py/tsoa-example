import {Route, Get, Post, Delete, Patch, Example, Body} from 'tsoa';
import {User, UserCreateRequest, UserUpdateRequest} from '../models/user';

@Route('Users')
export class UsersController {

    /** Get the current user */
    @Get('Current')
    @Example<User>({
        createdAt: new Date(),
        email: 'test@test.com',
        id: 1,
        headers: 'dummy'
    })
    public async Current( headers: string ): Promise<User> {
        return {
            createdAt: new Date(),
            email: 'test',
            id: 666,
            headers: request.headers
        };
    }

    /** Get user by ID */
    @Get('{userId}')
    public async Get(userId: number): Promise<User> {
        return {
            createdAt: new Date(),
            email: 'test2',
            id: userId,
            headers: 'dummy'
        };
    }

    /**
     * Create a user
     * @param request This is a user creation request description
     */
    @Post()
    public async Create(@Body() request: UserCreateRequest): Promise<User> {
        return {
            createdAt: new Date(),
            email: request.email,
            id: 666,
            headers: 'dummy'
        };
    }

    /** Delete a user by ID */
    @Delete('{userId}')
    public async Delete(userId: number): Promise<void> {
        return Promise.resolve();
    }

    /** Update a user */
    @Patch()
    public async Update(@Body() request: UserUpdateRequest): Promise<User> {
        return {
            createdAt: request.createdAt,
            email: request.email,
            id: 1337,
            headers: 'dummy'
        };
    }
}
