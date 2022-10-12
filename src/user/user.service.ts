import {Injectable} from '@nestjs/common'
import { UserModel } from 'src/models/user.model'



@Injectable()
export class UserService {
      //MockData
      users: UserModel[] = [ {
            userId: 0,
            firstName: "firstName",
            lastName: "lastName",
            username: "username",
            email: "email",
            password: "password",
            age: 12,
            address: "addresss",
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
    
   
    findAll() {
        return this.users;
    }

 
    findById(id: number) {
        return this.users[id];
    }


    createUser(newUser: UserModel) {
        return newUser;
    }


    updateUser(id: number, updatedUser: UserModel) {
        return this.users[id];;
    }


    removeUser(id: number) {
        return this.users[id];;
    }

}