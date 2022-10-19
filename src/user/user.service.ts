import {Injectable} from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './user.entity';



@Injectable()
export class UserService {
    
    constructor(@InjectRepository(UserEntity) private readonly userRepository) {}
   
    async findAll():Promise<UserEntity[]> {
        return await this.userRepository.find();
    }

 
    findById(id: number) {
        //return this.users[id];
    }


    createUser(newUser: UserEntity) {
        return newUser;
    }


    updateUser(id: number, updatedUser: UserEntity) {
       // return this.users[id];;
    }


    removeUser(id: number) {
       // return this.users[id];;
    }

}