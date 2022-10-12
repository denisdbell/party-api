import { Body, Controller, Get, Param, Post, Put, Delete } from "@nestjs/common";
import { UserModel } from "src/models/user.model";
import { UserService } from "./user.service";

@Controller('users')
export class UserContoller {

    constructor(private readonly userService: UserService) {}
  

    @Get()
    findAll() {
        return this.userService.findAll();
    }

    @Get('/:id')
    findById(@Param('id') id) {
        return this.userService.findById(id);
    }

    @Post()
    createUser(@Body() newUser: UserModel) {
        return this.userService.createUser(newUser);
    }

    @Put(':id')
    updateUser(@Param('id') id: number, @Body() updatedUser: UserModel) {
        return this.userService.updateUser(id,updatedUser);
    }


    @Delete(':id')
    removeUser(@Param('id') id: number) {
        return this.userService.removeUser(id);
    }
}
