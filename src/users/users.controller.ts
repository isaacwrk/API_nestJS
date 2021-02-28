import { UserDto } from './dtos/user.dto';
import { UsersService } from './users.service';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { User } from './interfaces/user.interface';
import { ApiBody } from '@nestjs/swagger';

@Controller('users')
export class UsersController {
    constructor(private readonly UsersService: UsersService){}

    @Get()
    index(): User[]{
        return this.UsersService.findAll();
    }
    
    @Post()
    @ApiBody({type: UserDto})
    create(@Body() user: UserDto): User {
        return this.UsersService.create(user);
    }
}
