import { Injectable } from "@nestjs/common";
import { UserEntity } from '@jwt-auth/storage';
import { UserDTO } from "./users.interfaces";


@Injectable()
export class UsersService {

    async findAll() {
        return await UserEntity.find();
    };

    async findById(id: number) {
        return await UserEntity.find({ where: { id: id } });
    };

    async createUser(user: UserDTO): Promise<UserEntity> {
        let entity = new UserEntity();

        entity.login = user.login;
        entity.password = user.password;

        try {
            entity = await UserEntity.save(entity);
            if (entity)
                return entity
        } catch (e) {
            throw new Error(e);
        }
    };

    async updatePassword(user: UserDTO): Promise<UserEntity> {
        let entity = await UserEntity.findOne({ where: { login: user.login } });

        entity.password = user.password;

        try {
            entity = await UserEntity.save(entity);
            if (entity)
                return entity
        } catch (e) {
            throw new Error(e);
        }
    };
};