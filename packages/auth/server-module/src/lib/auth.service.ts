import { Injectable } from "@nestjs/common";
import { LoginDTO } from "./auth.controller";
import { UserEntity } from '@jwt-auth/storage'
import { JwtService } from "@nestjs/jwt";

interface SuccessLogin {
    id: number;
    login: string;
    token: string;
};

@Injectable()
export class AuthService {
    constructor(
        private readonly jwt: JwtService
    ) { }

    async login(user: LoginDTO): Promise<SuccessLogin | null> {
        const entity = await UserEntity.findOne({ where: { login: user.login } })
        if (entity && entity.password === user.password) {
            const token = this.jwt.sign({ id: entity.id, login: entity.login })
            return {
                id: entity.id,
                login: entity.login,
                token: `Beearer ${token}`
            }
        }

        return null
    }
}