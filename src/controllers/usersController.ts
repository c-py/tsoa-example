import {Route, Get, Post, Delete, Patch, Example, Body, Request} from 'tsoa';
import {User, UserCreateRequest, UserUpdateRequest} from '../models/user';

@Route('Users')
export class UsersController {

    /** Get the current user */
    @Get('Current')
    @Example<User>({
        createdAt: new Date(),
        email: 'test@test.com',
        headers: 'dummy',
        id: 1
    })
    public async Current( @Request() request: any ): Promise<User> {
        return {
            createdAt: new Date(),
            email: 'test',
            headers: 'dummy',
            id: 666
        };
    }

    /** Get user by ID */
    @Get('{userId}')
    public async Get(userId: number): Promise<User> {
        return {
            createdAt: new Date(),
            email: 'test2',
            headers: 'dummy',
            id: userId
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
            headers: 'dummy',
            id: 666
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
            headers: 'dummy',
            id: 1337
        };
    }
}
