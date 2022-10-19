import { Body, Controller, Get, Param, Post, Put, Delete } from "@nestjs/common";
import { UserEntity } from "./user.entity";
import { UserService } from "./user.service";

@Controller('users')
export class UserContoller {

    constructor(private readonly userService: UserService) {}
  

    @Get()
    async findAll(): Promise<UserEntity[]> {
        return await this.userService.findAll();
    }

    @Get('/:id')
    findById(@Param('id') id) {
        return this.userService.findById(id);
    }

    @Post()
    createUser(@Body() newUser: UserEntity) {
        return this.userService.createUser(newUser);
    }

    @Put(':id')
    updateUser(@Param('id') id: number, @Body() updatedUser: UserEntity) {
        return this.userService.updateUser(id,updatedUser);
    }


    @Delete(':id')
    removeUser(@Param('id') id: number) {
        return this.userService.removeUser(id);
    }
}
