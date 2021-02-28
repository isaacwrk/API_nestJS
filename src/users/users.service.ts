import { User } from './interfaces/user.interface';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    private users: User[] = [];

    findAll(): User[]{
        return this.users;
    }


    create(user: User): User{
        this.users.push(user);
        return user;
    }
}
