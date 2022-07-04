import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import ormConfig from '../../../../ormconfig';
import { UserEntity } from './entities/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot(ormConfig),
    TypeOrmModule.forFeature([UserEntity])
  ],
  controllers: [],
  providers: [],
  exports: [],
})
export class StorageModule { }
