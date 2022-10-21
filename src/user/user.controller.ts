import { Body, Controller, Get, Param, Post, Put, Delete } from "@nestjs/common";
import { CreateuserDto } from "./dto/createUser.dto";
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
    createUser(@Body('user') newUserDto: CreateuserDto) {
        return this.userService.createUser(newUserDto);
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
