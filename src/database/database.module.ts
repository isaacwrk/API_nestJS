import { UserEntity } from './../users/database/user.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [TypeOrmModule.forRoot({
        type: 'postgres',
        host: 'localhost',
        username: 'postgres',
        password: 'x',
        database : 'nestjsdb',
        entities: [UserEntity],
        synchronize: true
      }),]
})
export class DatabaseModule {}
