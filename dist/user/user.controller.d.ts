import { UserModel } from "src/models/user.model";
export declare class UserContoller {
    users: UserModel[];
    findAll(): UserModel[];
    findById(id: any): UserModel;
    createUser(newUser: UserModel): UserModel;
    updateUser(id: number, updatedUser: UserModel): UserModel;
    removeUser(id: number): UserModel;
}
