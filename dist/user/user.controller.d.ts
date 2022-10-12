import { UserModel } from "src/models/user.model";
import { UserService } from "./user.service";
export declare class UserContoller {
    private readonly userService;
    constructor(userService: UserService);
    findAll(): UserModel[];
    findById(id: any): UserModel;
    createUser(newUser: UserModel): UserModel;
    updateUser(id: number, updatedUser: UserModel): UserModel;
    removeUser(id: number): UserModel;
}
