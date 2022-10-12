import { Body, Controller, Get, Param, Post, Put, Delete } from "@nestjs/common";
import { UserModel } from "src/models/user.model";

@Controller('users')
export class UserContoller {
    //MockData
    users: UserModel[] = [ {
            userId: 0,
            firstName: "firstName",
            lastName: "lastName",
            username: "username",
            email: "email",
            password: "password",
            age: 12,
            address: "address",
            dob: null,
            verified: false
        },
        {
            userId: 1,
            firstName: "firstName",
            lastName: "lastName",
            username: "username",
            email: "email",
            password: "password",
            age: 12,
            address: "address",
            dob: null,
            verified: false
        }
    ]      

    @Get()
    findAll() {
        return this.users;
    }

    @Get('/:id')
    findById(@Param('id') id) {
        return this.users[id];
    }

    @Post()
    createUser(@Body() newUser: UserModel) {
        return newUser;
    }

    @Put(':id')
    updateUser(@Param('id') id: number, @Body() updatedUser: UserModel) {
        return this.users[id];;
    }

    @Delete(':id')
    removeUser(@Param('id') id: number) {
        return this.users[id];;
    }
}
