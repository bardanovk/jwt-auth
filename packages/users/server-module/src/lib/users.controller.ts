import { Body, Controller, Get, Post, Query } from "@nestjs/common";
import { UserDTO } from "./users.interfaces";
import { UsersService } from "./users.service";


@Controller('users')
export class UsersController {
    constructor(
        private readonly service: UsersService,
    ) { }

    @Get('all')
    async findAll() {
        return await this.service.findAll();
    };

    @Get(':id')
    async findById(@Query('id') id: number) {
        return await this.service.findById(id);
    };

    @Post('create-user')
    async createUser(@Body('user') user: UserDTO) {
        console.log(user);
        return await this.service.createUser(user);
    };

    @Post('update-password')
    async updatePassword(@Body('user') user: UserDTO) {
        return await this.service.updatePassword(user);
    };

}