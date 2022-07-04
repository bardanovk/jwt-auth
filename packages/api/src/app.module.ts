import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from '@jwt-auth/users/server-module';
import { TypeOrmModule } from '@nestjs/typeorm';
import ormconfig from 'ormconfig';
import { UserEntity } from '@jwt-auth/storage';
import { JwtModule } from '@nestjs/jwt'
import { AuthModule } from '@jwt-auth/auth/server-module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, }),
    TypeOrmModule.forRoot(ormconfig),
    TypeOrmModule.forFeature([UserEntity]),
    AuthModule,
    UsersModule,
  ],
  controllers: [],
  providers: []
})
export class AppModule { };