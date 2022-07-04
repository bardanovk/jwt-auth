import { UserEntity } from "@jwt-auth/storage";
import { Body, Controller, NotFoundException, Post, Response } from "@nestjs/common";
import { Response as Res } from 'express';
import { AuthService } from "./auth.service";

export interface LoginDTO {
    login: string;
    password: string
}

@Controller('auth')
export class AuthController {
    constructor(
        private readonly service: AuthService
    ) { }

    @Post('login')
    async login(@Body() user: LoginDTO, @Response() res: Res) {
        const result = await this.service.login(user);
        if (result) {
            res.setHeader('x-access-token', result.token).status(200).json({ id: result.id, login: result.login });
            return res
        } else
            throw new NotFoundException('Неверный логин или пароль')
    };

    @Post('logout')
    async logout() {
        return
    };

    @Post('registr')
    async registr() {
        return
    }
}