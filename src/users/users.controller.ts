import { UserDto } from './dtos/user.dto';
import { UsersService } from './users.service';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { User } from './interfaces/user.interface';
import { ApiBody } from '@nestjs/swagger';
import { UserEntity } from './database/user.entity';

@Controller('users')
export class UsersController {
    constructor(private readonly UsersService: UsersService){}

    @Get()
    async index(): Promise<UserEntity[]>{
        return await this.UsersService.findAll();
    }
    
    @Post()
    @ApiBody({type: UserDto})
    async create(@Body() user: UserDto): Promise<UserEntity> {
        return await this.UsersService.create(user);
    }
}
