export interface User {
    id: number;
    email: string;
    createdAt: Date;
    headers: string;
}

export interface UserCreateRequest {
    email: string;
}

export interface UserUpdateRequest {
    createdAt?: Date;
    email: string;
}
